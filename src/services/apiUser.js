import supabase, { supabaseUrl } from "./supabase";

export async function updateUser(userData, id) {
  const hasImagePath = userData?.image?.startsWith?.(supabaseUrl);

  const imageName = `${Math.random()}-${userData?.image?.name}`.replaceAll(
    "/",
    ""
  );
  const imagePath = hasImagePath
    ? userData.image
    : `${supabaseUrl}/storage/v1/object/public/user-images/${imageName}`;

  // 1. Edit user
  let query = supabase.from("login");

  // A) EDIT
  if (id) query = query.update({ ...userData, image: imagePath }).eq("id", id);


  // 2. Upload image
  if (hasImagePath) return data;

  const { error: storageError } = await supabase.storage
    .from("user-images")
    .upload(imageName, userData.image);

  if (storageError) {
    throw new Error("User image could not be uploaded");
  }

  return data;
}
