import { useMutation } from "@tanstack/react-query";

import {signup as signupApi} from '../services/apiUser'
import toast from "react-hot-toast";

 export function useSignup(){
  const {mutate: signup, isPending } = useMutation({
   mutationFn: signupApi,
   onSuccess: () => {
    toast.success("User successfully created! Please verify the new account from the user's email address.")
   },
   onError: () => {
    toast.error("Error occured while creating user..")
   }
  })
  return { signup, isPending };
}