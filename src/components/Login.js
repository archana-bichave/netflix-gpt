// SignInPage.jsx
import React, { useState } from "react";

const Login = () => {
  const [isSignIn, setIsSignIn] = useState(true);
  const toggleSignInForm = () => {
    setIsSignIn(!isSignIn);
  };
  return (
    <div className="relative min-h-screen w-full">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            'url("https://assets.nflxext.com/ffe/siteui/vlv3/202ac35e-1fca-44f0-98d9-ea7e8211a07c/web/US-en-20250512-TRIFECTA-perspective_a6515802-34a4-4f19-947a-47380b934c44_large.jpg")',
        }}
      />
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black opacity-60" />

      {/* Sign In Form */}
      <div className="relative z-10 flex justify-center items-center min-h-screen px-4">
        <div className="w-full max-w-md bg-black bg-opacity-75 p-8 rounded-lg text-white">
          <h1 className="text-3xl font-bold mb-6">
            {isSignIn ? "Sign In" : "Sign Up"}
          </h1>

          <form className="space-y-4">
            {
                !isSignIn ? <input
              type="text"
              placeholder="Full Name"
              className="w-full px-4 py-3 bg-gray-800 rounded text-white focus:outline-none focus:ring-2 focus:ring-red-600"
            /> : null
            }
            
            <input
              type="email"
              placeholder="Email or phone number"
              className="w-full px-4 py-3 bg-gray-800 rounded text-white focus:outline-none focus:ring-2 focus:ring-red-600"
            />

            <input
              type="password"
              placeholder="Password"
              className="w-full px-4 py-3 bg-gray-800 rounded text-white focus:outline-none focus:ring-2 focus:ring-red-600"
            />

            <button
              type="submit"
              className="w-full bg-red-600 hover:bg-red-700 py-3 rounded font-semibold"
            >
              {isSignIn ? "Sign In" : "Sign Up"}
            </button>
            {isSignIn ? (
              <div className="flex items-center justify-between text-sm text-gray-400 mt-2">
                <label className="flex items-center">
                  <input type="checkbox" className="mr-2" />
                  Remember me
                </label>
                <a href="#" className="hover:underline">
                  Need help?
                </a>
              </div>
            ) : null}
          </form>
          {isSignIn ? (
            <div className="mt-6 text-gray-400 text-sm">
              <span>New to Netflix?</span>{" "}
              <span
                className="text-white hover:underline cursor-pointer"
                onClick={toggleSignInForm}
              >
                Sign up now
              </span>
            </div>
          ) : (
            <div className="mt-6 text-gray-400 text-sm">
              <span>Already a member?</span>{" "}
              <span
                className="text-white hover:underline cursor-pointer"
                onClick={toggleSignInForm}
              >
                Sign in now
              </span>
            </div>
          )}

          <p className="mt-4 text-xs text-gray-500">
            This page is protected by Google reCAPTCHA to ensure you're not a
            bot.{" "}
            <a href="#" className="text-blue-500 hover:underline">
              Learn more.
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
