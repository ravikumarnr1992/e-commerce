import { useSignup } from "../../hooks/useSignup";
import { useForm } from "react-hook-form";
import { useMutation } from "@tanstack/react-query";
import { signup as signupApi } from "../../services/apiUser";
import Button from "../../UI/Button";

const CreateUser = () => {
  const { signup, isPending } = useSignup();
  const { register, formState, getValues, handleSubmit, reset } = useForm();
  const { errors } = formState;

  function handleUserForm({ fullName, email, password }) {
    signup(
      { fullName, email, password },
      {
        onSettled: () => reset(),
      }
    );
  }

  // Function to handle form submission
  const onSubmitForm = (data) => {
    handleUserForm(data); // Handle form submission
    console.log(data);
  };

  return (
    <section className="h-full bg-neutral-200 dark:bg-neutral-700">
      <div className="container h-full p-10">
        <div className="g-6 flex h-full flex-wrap items-center justify-center text-neutral-800 dark:text-neutral-200">
          <div className="w-1/2">
            <form onSubmit={handleSubmit(onSubmitForm)}>
              {/* Full Name */}
              <div className="mb-2">
                <label htmlFor="fullName">Full Name</label>
                <input
                  type="text"
                  id="fullName"
                  disabled={isPending}
                  {...register("fullName", {
                    required: "This field is required",
                  })}
                  className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-base focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                />
                <span className="text-red-400 text-xs">
                  {errors?.fullName?.message}
                </span>
              </div>

              {/* Email */}
              <div className="mb-2">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  disabled={isPending}
                  {...register("email", {
                    required: "This field is required",
                    pattern: {
                      value: /\S+@\S+\.\S+/,
                      message: "Please provide a valid email address",
                    },
                  })}
                  className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-base focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                />
                <span className="text-red-400 text-xs">
                  {errors?.email?.message}
                </span>
              </div>

              {/* Password */}
              <div className="mb-2">
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  id="password"
                  disabled={isPending}
                  {...register("password", {
                    required: "This field is required",
                    minLength: {
                      value: 8,
                      message: "Password needs a minimum of 8 characters",
                    },
                  })}
                  className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-base focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                />
                <span className="text-red-400 text-xs">
                  {errors?.password?.message}
                </span>
              </div>

              {/* Confirm Password */}
              <div className="mb-2">
                <label htmlFor="passwordConfirm">Confirm Password</label>
                <input
                  type="password"
                  id="passwordConfirm"
                  disabled={isPending}
                  {...register("passwordConfirm", {
                    required: "This field is required",
                    validate: (value) =>
                      value === getValues().password ||
                      "Passwords need to match",
                  })}
                  className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-base focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                />
                <span className="text-red-400 text-xs">
                  {errors?.passwordConfirm?.message}
                </span>
              </div>

              {/* Buttons */}
              <div className="flex gap-1 justify-center">
                <button
                  type="reset"
                  disabled={isPending}
                  onClick={reset}
                  className="mb-3 inline-block w-full rounded px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_rgba(0,0,0,0.2)] transition duration-150 ease-in-out hover:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)] focus:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)] focus:outline-none focus:ring-0 active:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)]"
                  style={{
                    background:
                      "linear-gradient(to right, rgb(78 158 169), #20666e, rgb(22 127 160), rgb(50 181 200))",
                  }}
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={isPending}
                  className="mb-3 inline-block w-full rounded px-6 pb-2 pt-2.5
                  text-xs font-medium uppercase leading-normal text-white
                  shadow-[0_4px_9px_-4px_rgba(0,0,0,0.2)] transition
                  duration-150 ease-in-out
                  hover:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)]
                  focus:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)]
                  focus:outline-none focus:ring-0
                  active:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)]"
                  style={{
                    background:
                      "linear-gradient(to right, rgb(78 158 169), #20666e, rgb(22 127 160), rgb(50 181 200))",
                  }}
                >
                  {isPending ? "Creating..." : "Create new user"}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CreateUser;
