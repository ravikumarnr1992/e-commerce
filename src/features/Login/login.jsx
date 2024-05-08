import { useEffect, useState } from "react";
import Input from "../../UI/Input";
import { useNavigate } from "react-router";
import { useDispatch } from "react-redux";
import cartlogo from '../../assets/images/shopping_cart.png'
import { authUser } from "../../services/apiLogin";
import { authenticatedUser, getUserDetails } from "./loginSlice";

const Login = () => {
  const [userInfo, setUserInfo] = useState({});
  const [error, setError] = useState(false);

  const dispatch = useDispatch()

  const navigate = useNavigate();

  const handleUser = (e) => {
    setUserInfo({ ...userInfo, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const isAuthenticated = await authUser(userInfo);

    if (isAuthenticated) {
      dispatch(authenticatedUser(true))
      dispatch(getUserDetails(isAuthenticated))
      navigate("/");
    } else {
      setError(true);
    }
    setUserInfo("");
  };

  return (
    <section className="h-full bg-neutral-200 dark:bg-neutral-700">
      <div className="container h-full p-10">
        <div className="g-6 flex h-full flex-wrap items-center justify-center text-neutral-800 dark:text-neutral-200">
          <div className="w-1/2">
            <div className="block rounded-lg bg-white shadow-lg dark:bg-neutral-800">
              <div className="g-0 lg:flex lg:flex-wrap">
                {/* <!-- Left column container--> */}
                <div className="px-4 md:px-0 lg:w-6/12">
                  <div className="md:mx-6 md:p-4">
                    {/* <!--Logo--> */}
                    <div className="text-center">
                      <img
                        className="mx-auto w-48"
                        src={cartlogo}
                        alt="logo"
                      />
                      <h4 className="mb-6 mt-1 pb-1 text-lg font-semibold">
                        We are The e-commerce Team
                      </h4>
                    </div>

                    <form onSubmit={handleSubmit}>
                      <p className="mb-4">Please login to your account</p>
                      <Input
                        label="Email Id"
                        name="email"
                        type="text"
                        OnChange={handleUser}
                      />
                      <Input
                        label="Password"
                        type="password"
                        name="password"
                        OnChange={handleUser}
                      />
                      {error && <p>Invalid credentials</p>}

                      {/* <!--Submit button--> */}
                      <div className="mb-6 pb-1 pt-1 text-center">
                        <button
                          type="submit"
                          className="mb-3 inline-block w-full rounded px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_rgba(0,0,0,0.2)] transition duration-150 ease-in-out hover:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)] focus:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)] focus:outline-none focus:ring-0 active:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)]"
                          style={{
                            background: "linear-gradient(to right, rgb(78 158 169), #20666e, rgb(22 127 160), rgb(50 181 200))",
                          }}
                        >
                          Log in
                        </button>
                      </div>
                    </form>
                  </div>
                </div>

                {/* <!-- Right column container with background and description--> */}
                <div
                  className="flex items-center rounded-b-lg lg:w-6/12 lg:rounded-r-lg lg:rounded-bl-none"
                  style={{
                    background: "linear-gradient(to right, rgb(78 158 169), #20666e, rgb(22 127 160), rgb(50 181 200))",
                  }}
                >
                  <div className="px-4 py-6 text-white md:mx-6 md:p-4">
                    <h4 className="mb-6 text-lg font-semibold">
                      We are more than just a company
                    </h4>
                    <p className="text-sm text-justify">
                      Ecommerce is a method of buying and selling goods and
                      services online. The definition of ecommerce business can
                      also include tactics like affiliate marketing.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
