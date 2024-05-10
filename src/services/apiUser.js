import supabase, { supabaseUrl } from "./supabase";

export async function updateUser(userData, id, newImgUpload) {

  const imageName = newImgUpload ? `${Math.random()}-${userData?.image?.name}`.replaceAll(
    "/",
    ""
  ) : null

  const imagePath = newImgUpload ? `${supabaseUrl}/storage/v1/object/public/user-images/${imageName}` : null

  // 1. Edit user
  let query = supabase.from("login");

  // A) EDIT
  if (id && newImgUpload) query = query.update({ ...userData, image: imagePath }).eq("id", id);

  if (id && !newImgUpload) query = query.update({ ...userData }).eq("id", id);

  const { data, error } = await query.select().single();

  if (error) {
    console.error(error);
    throw new Error("User cannot be updated");
  }

  if (id && newImgUpload) {
    const { error: storageError } = await supabase.storage
      .from("user-images")
      .upload(imageName, userData.image);

    if (storageError) {
      throw new Error("User image could not be uploaded");
    }
  }

  return data;
}
