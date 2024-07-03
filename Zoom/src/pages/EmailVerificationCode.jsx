import React from "react";
import NavBar from "../components/NavBar";
import { Link } from "react-router-dom";

export default function EmailVerificationCode() {
  return (
    <div className="flex flex-col justify-start text-center">
      <NavBar />
      <div className="flex  flex-col justify-center content-center ">
        <div className="flex flex-col justify-center bg-slate-100 p-6 gap-2">
          <h1 className="font-bold text-2xl">Check Your Email For A Code</h1>
          <p>Please enter the verification code sent to your email address</p>
          <p>
            <strong>hyperthapa541@gmail.com</strong>
          </p>
          <p>
            Can't find the email? Click{" "}
            <button className="text-blue">here</button> to resend.
          </p>
        </div>

        <form className="flex flex-col justify-center m-auto">
          <input className="w-60 border border-blueGray-700 block m-auto" />
          <div className="flex justify-end">
            <p>Code expired.</p>
            <button className="text-blue">Resend</button>
          </div>
          <button className=" w-60 border rounded-xl p-3 mt-4 bg-blue text-white">
            Verify
          </button>{" "}
        </form>
      </div>
    </div>
  );
}
