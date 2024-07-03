import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <div>
      <nav className="flex justify-between p-4 border border-blueGray-200 ">
        <div>
          <img
            className=" h-6"
            src="https://st1.zoom.us/fe-static/fe-signup-login-active/img/ZoomNewLogo.b2fd5c95.png"
            alt="Zoom Logo"
          />
        </div>
        <div className="flex justify-center text-blue gap-9 items-center ">
          <Link to="/sign-in" className="text-sm">
            Sign Up
          </Link>
          <button className="text-sm">English</button>
        </div>
      </nav>
    </div>
  );
}
