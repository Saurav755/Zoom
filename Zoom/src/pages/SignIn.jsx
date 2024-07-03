import { TfiNewWindow } from "react-icons/tfi";
import { Link } from "react-router-dom";
import { IoIosInformationCircleOutline } from "react-icons/io";
import { IoKey } from "react-icons/io5";
import { FaApple } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import NavBar from "../components/NavBar";

import { yupResolver } from "react-hook-form";
import { validationSchema } from "../validationSchemas/getStarted";

const {
  register,
  handleSubmit,
  watch,
  formState: { errors },
} = useForm({
  resolver: yupResolver(validationSchema),
});

async function handleEmail(data) {
  console.log(data);
  await SignInCheckEmail(data);
}

function SignIn() {
  return (
    <div className=" flex flex-col justify-center m-auto">
      <NavBar />
      <header className="w-80 m-auto">
        <img
          src="https://st1.zoom.us/fe-static/fe-signup-login-active/img/banner-step-1.2faf107a.png"
          className="flex justify-center h-34 p-3 bg-slate-100 w-80"
          alt="Learn More"
        />
      </header>

      <form
        onSubmit={handleSubmit(handleEmail)}
        className="flex flex-col gap-3 justify-center items-center  w-98 m-auto"
      >
        <input
          className=" w-1/2 border border-black rounded-xl focus:border-2 focus:border-blue  p-3 block text-xl text-black-40 "
          type="email"
          placeholder="Email Address"
        />
        <input
          className=" w-1/2 border border-black rounded-xl mb-2 focus:border-2 focus:border-blue  p-3 block text-xl text-black-50 file:rounded-full file:border-0"
          type="password"
          placeholder="Password"
        />
        <div className="flex justify-between  w-1/2 text-blue">
          <div>
            <Link to="/">Forgot password?</Link>
          </div>
          <div className=" flex gap-2 justify-center items-center text-blue">
            <Link to="/">Help</Link>
            <Link to="/">
              <TfiNewWindow />
            </Link>
          </div>
        </div>
        <button className=" w-1/2 border rounded-xl p-3 mt-4 bg-blue text-white">
          Sign In
        </button>
        <p className="w-80">
          By signing in, I agree to the Zoom's Privacy Statement and Terms of
          Service.
        </p>
        <div className="flex items-center gap-2 align w-1/2">
          <input type="checkbox" />
          <p>Stay signed in</p>
          <Link to="/">
            <IoIosInformationCircleOutline />
          </Link>
        </div>

        <div className="flex w-4/5">
          <div className="w-2/6 border-t-2"></div>
          <p> Or sign in with</p>
          <div className="w-2/6 border-t-2"></div>
        </div>

        <ul className="flex gap-6">
          <li className="p-3 bg-slate-100 border-blueGray-500 rounded-xl">
            <Link to="/">
              <IoKey />
            </Link>{" "}
          </li>
          <li className="p-3 bg-slate-100 border-blueGray-500 rounded-xl">
            <Link to="/">
              <FaApple />
            </Link>
          </li>
          <li className="p-3 bg-slate-100 border-blueGray-500 rounded-xl">
            <Link to="/">
              <FcGoogle />
            </Link>
          </li>
          <li className="p-3 bg-slate-100 border-blueGray-500 rounded-xl">
            <Link to="/">
              <FaFacebook />
            </Link>
          </li>
        </ul>
        <p>
          Zoom is protected by reCAPTCHA and the Privacy Policy and Terms of
          Service apply.
        </p>
      </form>
    </div>
  );
}

export default SignIn;
