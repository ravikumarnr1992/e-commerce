import React from "react";
import { useForm } from "react-hook-form";
import { updateUser } from "../../services/apiUser";
import { useSelector } from "react-redux";
import toast from "react-hot-toast";

const UpdateProfile = () => {
  const { loggedInUser } = useSelector(store => store?.login);
    const { register, formState: { errors }, handleSubmit } = useForm();

    const handleForm = (data) => {
      let hasImgUpload = data && data.image[0] ? true : false
      const image = typeof data.image === "string" ? data.image : data.image[0];
       updateUser({ ...data, image }, loggedInUser.user.id, hasImgUpload)
       toast.success("User details successfully updated...")
    }

  return (
    <div className="flex justify-center pt-2 pb-4">
      <form className="w-full max-w-lg" onSubmit={handleSubmit(handleForm)}>
        <div className="flex flex-wrap -mx-3">
          <div className="w-full px-3  md:mb-0">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="name"
            >
              Name
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              id="name"
              name="name"
              type="text"
              placeholder="Name"
              {...register("name", { required: true })}
            />
          </div>
        </div>
        <div className="flex flex-wrap -mx-3 ">
          <div className="w-full px-3">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="email"
            >
              email
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="email"
              name="email"
              type="text"
              placeholder="email"
              {...register("email", { required: true })}
            />
          </div>
        </div>
        <div className="flex flex-wrap -mx-3 ">
          <div className="w-full px-3  md:mb-0">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="phone"
            >
              Phone Number
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              id="phone"
              name="phone"
              type="text"
              placeholder="Phone Number"
              {...register("phone", { required: true })}
            />
          </div>
        </div>
        <div className="flex flex-wrap -mx-3 mb-2">
          <div className="w-full md:w-1/2 px-3  md:mb-0">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="gender"
            >
              Gender
            </label>
            <div className="flex">
              <div className="mr-2">
                <input
                  id="male"
                  type="radio"
                  value="male"
                  name="gender"
                  {...register("gender")}
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                 />
                <label
                  htmlFor="male"
                  className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  Male
                </label>
              </div>
              <div className="">
                <input
                  id="female"
                  type="radio"
                  value="female"
                  name="gender"
                  {...register("gender")}
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                />
                <label
                  htmlFor="female"
                  className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  Female
                </label>
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/2 px-3  md:mb-0">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="dob"
            >
              DOB
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="dob"
              name="dob"
              type="date"
              placeholder="Date of Birth"
              {...register("dob", { required: true })}
            />
          </div>
        </div>
        <div className="flex flex-wrap -mx-3 ">
          <div className="w-full px-3">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="address"
            >
              Address
            </label>
            <textarea
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="address"
              name="address"
              type="text"
              placeholder="Address"
              {...register("address", { required: true })}
            />
          </div>
        </div>
        <div className="flex flex-wrap -mx-3 mb-2">
          <div className="w-full md:w-1/2 px-3  md:mb-0">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="country"
            >
              Country
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="country"
              name="country"
              type="text"
              placeholder="India"
              {...register("country", { required: true })}
            />
          </div>
          <div className="w-full md:w-1/2 px-3  md:mb-0">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="state"
            >
              State
            </label>
            <div className="relative">
              <select
                className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="state"
                name="state"
                {...register("state", { required: true })}
              >
                <option>Karnataka</option>
                <option>Goa</option>
                <option>Maharastra</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                <svg
                  className="fill-current h-4 w-4"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                </svg>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-wrap -mx-3 mb-2">
          <div className="w-full md:w-1/2 px-3  md:mb-0">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="city"
            >
              City
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="city"
              type="text"
              name="city"
              placeholder="City name"
              {...register("city", { required: true })}
            />
          </div>
          <div className="w-full md:w-1/2 px-3  md:mb-0">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="zipcode"
            >
              Zip Code
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="zipcode"
              name="zipcode"
              type="text"
              placeholder="zip code"
              {...register("zipcode", { required: true })}
            />
          </div>
        </div>
        <div className="flex flex-wrap -mx-3 mb-2 pt-2">
          <div className="w-full  px-3  md:mb-0">
            <label
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              htmlFor="image"
            >
              User photo
            </label>
            <input
              className="block w-full text-sm text-gray-500
        file:me-4 file:py-2 file:px-4
        file:rounded-lg file:border-0
        file:text-sm file:font-semibold
        file:bg-blue-600 file:text-white
        hover:file:bg-blue-700
        file:disabled:opacity-50 file:disabled:pointer-events-none
        dark:text-neutral-500
        dark:file:bg-blue-500
        dark:hover:file:bg-blue-400
      "
      type="file"
      id="image"
      name="image"
      accept="image/*"
      {...register("image")}
            />
            <p
              className="mt-1 text-sm text-gray-500 dark:text-gray-300"
              id="image"
            >
              SVG, PNG, JPG or GIF (MAX. 800x400px).
            </p>
          </div>
        </div>
        <div className="flex flex-wrap -mx-3 mb-2 pt-2">
          <div className="flex w-full px-3 md:mb-0 justify-center">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2">
              Submit
            </button>
            <button className="bg-red-400 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
              Cancel
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default UpdateProfile;
