import supabase from "./supabase";

export async function getUser(id) {
  const { data, error } = await supabase.from("login").select().eq("id", id);

  if (error) {
    console.error(error);
    throw new Error("Invalid user");
  }
  return data;
}


export async function authUser(userData) {
  
const { data, error } = await supabase.auth.signInWithPassword({
    email: userData.email,
    password: userData.password,
  })

  if (error) {
    console.error(error);
    throw new Error("Invalid user");
  }
  return data;
}

export async function logoutUser() {
    const { error } = await supabase.auth.signOut()
      if (error) {
        console.error(error);
        throw new Error("Invalid user");
      }
    }



