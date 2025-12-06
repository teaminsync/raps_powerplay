// src/components/Profile.jsx
import React, { useRef, useContext } from "react";
import { ImCross } from "react-icons/im";
import { IoIosCamera } from "react-icons/io";
import { AuthContext } from "../context/AuthContext";
import { Link, useNavigate } from "react-router-dom";
import { api, assetURL } from "../lib/api";

function Profile({ userdp, setuserdp, profileimge }) {
  const navigate = useNavigate();
  const { setprofile, logout, user } = useContext(AuthContext);

  const imgRef = useRef();
  const inputFile = useRef();

  async function UpdateDP() {
    try {
      const file = inputFile.current?.files?.[0];
      if (!file) return;

      // Local preview
      const previewURL = URL.createObjectURL(file);
      imgRef.current.src = previewURL;
      if (profileimge.current) profileimge.current.src = previewURL;

      const formData = new FormData();
      formData.append("DP", file);

      const { data } = await api.post(
        `/user/update_user_dp/${user._id}`,
        formData,
        { headers: { "Content-Type": "multipart/form-data" } }
      );

      if (data?.success && typeof setuserdp === "function") {
        setuserdp(data.DP);
      }
    } catch (e) {
      console.warn("DP Update Failed:", e.message);
    }
  }

  const displayDp =
    userdp?.startsWith("http") ? userdp : assetURL(userdp || "");

  return (
    <>
      {/* BACKDROP */}
      <div className="fixed inset-0 bg-black/70 backdrop-blur-sm z-[200] flex justify-center items-center p-4">

        {/* CARD */}
        <div className="relative bg-[#2c2a27] text-white rounded-2xl shadow-xl p-6 w-[90%] max-w-[380px]">

          {/* CLOSE BUTTON */}
          <ImCross
            onClick={() => setprofile(false)}
            className="absolute top-3 right-3 text-xl cursor-pointer hover:text-gray-300 transition"
          />

          {/* PROFILE IMAGE */}
          <div className="relative flex justify-center mb-4">
            <img
              ref={imgRef}
              src={displayDp}
              className="w-28 h-28 rounded-full border-4 border-orange-500 shadow-lg object-cover"
            />
            <label
              htmlFor="dp-file"
              className="absolute bottom-0 right-[34%] bg-black/80 p-2 rounded-full cursor-pointer hover:scale-110 transition"
            >
              <IoIosCamera className="text-2xl text-white" />
            </label>
            <input
              id="dp-file"
              type="file"
              ref={inputFile}
              onChange={UpdateDP}
              accept="image/*"
              className="hidden"
            />
          </div>

          {/* USER NAME + EMAIL */}
          <h2 className="text-center text-xl font-semibold">{user?.name}</h2>
          <p className="text-center text-sm text-gray-300 mb-4">{user?.email}</p>

          {/* BUTTONS */}
          <div className="flex flex-col gap-3 mt-3">
            <Link
              to="/updateprofile"
              onClick={() => setprofile(false)}
              className="text-center bg-orange-500 text-black font-bold py-2 rounded-lg hover:bg-orange-600 transition"
            >
              Update User
            </Link>

            <button
              onClick={() => {
                logout();
                navigate("/signup");
                setprofile(false);
              }}
              className="bg-red-500 text-white font-bold py-2 rounded-lg hover:bg-red-600 transition"
            >
              Logout
            </button>
          </div>

        </div>
      </div>
    </>
  );
}

export default Profile;
