import React from "react";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const navigate = useNavigate();
  return (
    <div className="w-full h-full pt-28">
      <div className="max-w-screen-xl px-5 m-auto  mt-10 mb-20 sm:px-4 md:px-1 w-full">
        <div className=" flex items-center flex-col">
          <div className="flex md:gap-[74px] gap-8 items-center justify-center">
            <img
              className="md:w-16 mb-4 w-12 h-12  md:h-16 "
              src="https://www.sync-power.com/jpg/logo-construction2.png"
              alt=""
            />
            <h1 className="md:text-md text-sm text-orange-500 font-['open_sans'] font-semibold">
              Sync-Power-Services
            </h1>
          </div>

          <form
            className="flex flex-col md:w-[22vw] w-[62vw] items-center gap-1"
            action=""
          >
            <input
              className="border my-1  border-zinc-300 text-zinc-800 text-xs outline-none px-2 py-3 rounded-md w-full"
              type="text"
              name="first_name"
              placeholder="First Name"
            />
            <input
              className="border my-1  border-zinc-300 text-zinc-800 text-xs outline-none px-2 py-3 rounded-md w-full"
              type="text"
              name="last_name"
              placeholder="Last Name"
            />
            <input
              className="border my-1  border-zinc-300 text-zinc-800 text-xs outline-none px-2 py-3 rounded-md w-full"
              type="text"
              name="email"
              placeholder="Email-Id"
            />
            <input
              className="border my-1  border-zinc-300 text-zinc-800 text-xs outline-none px-2 py-3 rounded-md w-full"
              type="text"
              name="mobile_number"
              placeholder="Mobile Number"
            />
<input
              className="border my-1  border-zinc-300 text-zinc-800 text-xs outline-none px-2 py-3 rounded-md w-full"
              type="text"
              name="skype_id"
              placeholder="Skype ID(Optional)"
            />
            <input
              className="border my-1  border-zinc-300 text-zinc-800 text-xs outline-none px-2 py-3 rounded-md w-full"
              type="text"
              name="password"
              placeholder="Password"
            />
             <input
              className="border my-1  border-zinc-300 text-zinc-800 text-xs outline-none px-2 py-3 rounded-md w-full"
              type="text"
              name="confirm_password"
              placeholder="Confirm Password"
            />
            <button className="px-3 my-3 py-1 w-full h-min font-['open_sans'] text-white bg-orange-500 rounded hover:bg-white border border-orange-500 hover:text-orange-500">
              Register
            </button>
          </form>

          <p className="text-black text-sm mt-3">
            Already Have An Account?
            <button
              onClick={() => navigate("/signup")}
              className="px-1 cursor-pointer underline"
            >
              Login
            </button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
