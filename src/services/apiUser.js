import { supabaseUrl } from "./supabase";
 
export async function updateUser(userData, id, hasImgUpload) {
 
  const hasImagePath = hasImgUpload ? userData?.image?.startsWith?.(supabaseUrl) : false
 
  const imageName = hasImgUpload ? `${Math.random()}-${userData?.image?.name}`.replaceAll(
    "/",
    ""
  ) : null

  const imagePath = hasImgUpload ? `${supabaseUrl}/storage/v1/object/public/user-images/${imageName}` : null

  // 1. Edit user
  let query = supabase.from("login");
 
  // A) EDIT
  if (id && hasImgUpload ) query = query.update({ ...userData, image: imagePath }).eq("id", id);

  if (id && !hasImgUpload ) query = query.update({ ...userData }).eq("id", id);
 
  const { data, error } = await query.select().single();
 
  if (error) {
    console.error(error);
    throw new Error("Cabin could not be created");
  }
  // 2. Upload image
  if (hasImagePath) return data;
 
  if(id && hasImgUpload){
    const { error: storageError } = await supabase.storage
      .from("user-images")
      .upload(imageName, userData.image);
   
    if (storageError) {
      throw new Error("User image could not be uploaded");
    }
  }
 
  return data;
}
 