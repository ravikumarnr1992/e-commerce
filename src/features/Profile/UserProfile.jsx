import { useSelector } from "react-redux";

const UserProfile = () => {

  const { loggedInUser } = useSelector(store => store?.login)

  const [userData] = loggedInUser;
  console.log(userData);

  return (
    <section className="w-full overflow-hidden dark:bg-gray-900">
      <div className="flex flex-col">
        <img
          src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHw5fHxjb3ZlcnxlbnwwfDB8fHwxNzEwNzQxNzY0fDA&ixlib=rb-4.0.3&q=80&w=1080"
          alt="User Cover"
          className="w-full xl:h-[16rem] lg:h-[10rem] md:h-[10rem] sm:h-[14rem] xs:h-[11rem]"
        />

        <div className="sm:w-[80%] xs:w-[90%] mx-auto flex">

          <img
            src="https://images.unsplash.com/photo-1610397095767-84a5b4736cbd?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&amp;ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=750&amp;q=80"
            alt="User Profile"
            className="rounded-md lg:w-[10rem] lg:h-[10rem] md:w-[8rem] md:h-[8rem] sm:w-[8rem] sm:h-[8rem] xs:w-[7rem] xs:h-[7rem] outline outline-2 outline-offset-2 outline-blue-500 relative lg:bottom-[5rem] sm:bottom-[4rem] xs:bottom-[3rem]"
          />
          <h1 className="w-full text-left my-4 sm:mx-4 xs:pl-4 text-gray-800 dark:text-white lg:text-4xl md:text-3xl sm:text-3xl xs:text-xl font-serif">
            {userData.name}
          </h1>
        </div>

        <div className="xl:w-[80%] lg:w-[90%] md:w-[90%] sm:w-[92%] xs:w-[90%] mx-auto flex flex-col gap-4 items-center relative lg:-top-8 md:-top-6 sm:-top-4 xs:-top-4">
          <p className="w-fit text-gray-700 dark:text-gray-400 text-md">
          Web developers use a variety of programming languages to write code. They compile this code to create websites that are appealing, functional and user-friendly. Learning in detail about the intricacies of web development can help you understand this profession better and decide if it is the right career choice for you.
          </p>

          <div className="w-full my-auto py-6 flex flex-col justify-center gap-2">
            <div className="w-full flex sm:flex-row xs:flex-col gap-2 justify-center">
              <div className="w-full">
                <dl className="text-gray-900 divide-y divide-gray-200 dark:text-white dark:divide-gray-700">
                  <div className="flex flex-col pb-3">
                    <dt className="mb-1 text-gray-500 md:text-lg dark:text-gray-400">
                      Name
                    </dt>
                    <dd className="text-lg font-semibold">{userData.name}</dd>
                  </div>
                 
                  <div className="flex flex-col py-3">
                    <dt className="mb-1 text-gray-500 md:text-lg dark:text-gray-400">
                      Date Of Birth
                    </dt>
                    <dd className="text-lg font-semibold">30/12/1992</dd>
                  </div>
                  <div className="flex flex-col py-3">
                    <dt className="mb-1 text-gray-500 md:text-lg dark:text-gray-400">
                      Gender
                    </dt>
                    <dd className="text-lg font-semibold">Male</dd>
                  </div>
                </dl>
              </div>
              <div className="w-full">
                <dl className="text-gray-900 divide-y divide-gray-200 dark:text-white dark:divide-gray-700">
                  <div className="flex flex-col pb-3">
                    <dt className="mb-1 text-gray-500 md:text-lg dark:text-gray-400">
                      Location
                    </dt>
                    <dd className="text-lg font-semibold">
                      Bengaluru, India
                    </dd>
                  </div>

                  <div className="flex flex-col pt-3">
                    <dt className="mb-1 text-gray-500 md:text-lg dark:text-gray-400">
                      Phone Number
                    </dt>
                    <dd className="text-lg font-semibold">{userData.phone}</dd>
                  </div>
                  <div className="flex flex-col pt-3">
                    <dt className="mb-1 text-gray-500 md:text-lg dark:text-gray-400">
                      Email
                    </dt>
                    <dd className="text-lg font-semibold">
                    ravi@gmail.com
                    </dd>
                  </div>

                  <div className="flex flex-col pt-3">
                    <dt className="mb-1 text-gray-500 md:text-lg dark:text-gray-400">
                      Website
                    </dt>
                    <dd className="text-lg font-semibold">
                      https://www.teclick.com
                    </dd>
                  </div>
                </dl>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UserProfile;
