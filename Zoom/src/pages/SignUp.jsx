import { useEffect, useState } from "react";
import { Link, Navigate, Route } from "react-router-dom";
import { FaCircleCheck } from "react-icons/fa6";
import { IoIosWarning } from "react-icons/io";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";

function SignUp() {
  const navigate = useNavigate();
  const features = [
    "Host unlimited 40-minute meetings with up to 100 participants",
    "Keep everyone engaged with screen sharing and captions",
    "Be meeting ready with HD-quality video and virtual backgrounds",
    // "Be meeting ready with HD-quality video and virtual backgrounds",
    "Collaborate using Team Chat messages, whiteboards, and video clips",
    "Boost productivity with built-in Calendar, Mail, and Notes",
    // "Boost productivity with built-in Calendar, Mail, and Notes",
  ];
  const [cookies, setCookie] = useCookies(["underAge"]);
  const [underAge, setUnderAge] = useState(false);
  const [birthYear, setBirthYear] = useState("");
  const handleBirthYear = function (event) {
    const value = event.target.value;
    setBirthYear(value);
  };
  const handleVerifyAge = (event) => {
    event.preventDefault();
    const today = new Date();
    const currentYear = today.getFullYear();
    const age = currentYear - parseInt(birthYear);
    if (age <= 16) {
      setUnderAge(true);
      setCookie("underAge", true);
    } else {
      navigate(`/Email-verify?birthyear=${birthYear}`);
    }
  };

  useEffect(() => {
    if (cookies.underAge) {
      setUnderAge(true);
    }
  }, [cookies]);

  return (
    <div className="flex h-screen w-auto justify-center items-center flex-col ">
      <div className="w-1/2 flex flex-col gap-16 ">
        <h2 className="text-center text-3xl font-bold">Verify Your Age</h2>
        <div className="flex gap-16">
          <div className="bg-white rounded-md shadow-lg p-8">
            <h3 className="font-bold font-xl">
              Create your free Basic account
            </h3>
            <ul className=" flex flex-col gap-3">
              {features.map((feature, key) => (
                <li key={key} className="flex gap-2 text-sm">
                  <div className="w-4 flex-grow-0">
                    <FaCircleCheck
                      size={16}
                      className="flex-grow-0 mt-1 text-green-500"
                    />
                  </div>
                  {feature}
                </li>
              ))}
            </ul>
          </div>
          {underAge ? (
            <div>
              <div className="flex justify-center p-8 ">
                {" "}
                <IoIosWarning size={120} className="text-red-700 " />
              </div>
              <p className="text-2xl font-bold text-center ">
                Sorry, you cannot signup for Zoom at this time
              </p>
            </div>
          ) : (
            <div className="flex items-center">
              <form onSubmit={handleVerifyAge} className="flex flex-col gap-5">
                <label className="text-center ">
                  Please confirm your birth year. This data will not be stored.
                </label>
                <input
                  value={birthYear}
                  onChange={handleBirthYear}
                  className="border border-black text-md p-3 rounded-md"
                  type="text"
                  placeholder="Enter your birth year"
                />

                <button
                  disabled={!birthYear}
                  className="p-2 text-md rounded-xl bg-blue text-white disabled:bg-slate-100 disabled:text-slate-500"
                >
                  Continue
                </button>
              </form>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default SignUp;
