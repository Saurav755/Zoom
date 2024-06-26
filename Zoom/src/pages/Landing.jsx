import { Link } from "react-router-dom";

function Landing() {
  return (
    <div className="h-screen flex justify-center flex-col items-center bg-blue">
      <div className="flex flex-col gap-20">
        <div className="text-center">
          <img
            src="https://st3.zoom.us/static/6.3.22759/image/home2/logo_ZM_Products.png"
            alt="Zoom Logo"
          />
        </div>
        <div className="bg-white p-8 flex flex-col gap-3 rounded-2xl w-72">
          {/* Navigation links with styling */}
          <Link
            className="bg-blue p-2 rounded-xl text-white text-lg text-center"
            to="/join-a-meeting"
          >
            Join a meeting
          </Link>
          <Link
            className="bg-white p-2 rounded-xl text-black border-black text-lg text-center"
            to="/sign-up"
          >
            Sign up
          </Link>
          <Link
            className="bg-white p-2 rounded-xl text-black text-lg text-center"
            to="/sign-in"
          >
            Sign in
          </Link>
        </div>
      </div>
      <p className="text-white text-sm">Version: 1.0.0</p>
    </div>
  );
}

export default Landing;
