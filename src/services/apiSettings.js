import supabase from "./supabase";

export async function updateUser(userData, id) {

  const imageName = `${Math.random()}-${userData.user_img_url}`.replaceAll(
    "/",
    ""
  );
  const imagePath = `${import.meta.env.VITE_SUPABASEURL}/storage/v1/object/public/user-images/${imageName}`;

  // 1. Edit user details 
  let query = supabase.from("login");

  // EDIT
  if (id)
    query = query.update({ ...userData, user_img_url: imagePath }).eq("id", id);

  const { data, error } = await query.select()

  if (error) {
    console.error(error);
    throw new Error("Error occured while upating User details not updated");
  }

  const {data1,  error: storageError } = await supabase.storage
    .from("user-images")
    .upload(imageName, userData.user_img_url);

    console.log(data1)

  // 3. Delete the user IF there was an error uplaoding image
  if (storageError) {
    await supabase.from("login").delete().eq("id", data.id);
    console.error(storageError);
    throw new Error(
      "User image could not be uploaded"
    );
  }

  return data;
}
