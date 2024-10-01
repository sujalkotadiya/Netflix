import { ChevronRight } from "lucide-react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const AuthScreen = () => {
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const handleFormSubmit = (e) => {
    e.preventDefault();
    navigate("/signup?email=" + email);
  };

  return (
    <div className="hero-bg bg-black text-white min-h-screen">
      <header className="max-w-6xl mx-auto flex items-center justify-between p-6">
        <img src="/netflix-logo.png" alt="Netflix Logo" className="w-36 md:w-44" />
        <Link
          to="/login" // Link component from react-router-dom
          className="bg-red-600 hover:bg-red-700  text-white py-2 px-4 rounded"
        >
          Sign In
        </Link>

      </header>

      <div className="flex flex-col items-center justify-center text-center py-20 px-4 md:px-0 md:py-32 max-w-6xl mx-auto">
        <h1 className="text-3xl md:text-5xl font-bold mb-6">Unlimited movies, TV shows, and more</h1>
        <p className="text-lg mb-4">Watch anywhere. Cancel anytime.</p>
        <p className="text-sm md:text-base mb-8">
          Ready to watch? Enter your email to create or restart your membership.
        </p>

        <form className="w-full max-w-md md:max-w-lg flex flex-col md:flex-row gap-4" onSubmit={handleFormSubmit}>
          <input
            type="email"
            placeholder="Email address"
            className="p-3 w-full flex-1 rounded-md bg-gray-800 border border-gray-600 text-white placeholder-gray-400"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <button className="bg-red-600 hover:bg-red-700 transition-colors text-white text-lg px-6 py-3 rounded-md flex items-center justify-center gap-2">
            <span>Get Started</span>
            <ChevronRight className="w-6 h-6" />
          </button>
        </form>
      </div>

      <div className="h-1 bg-gray-800 w-full" />

      <div className="bg-black py-12">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between px-6 md:px-8">
          <div className="text-center md:text-left mb-8 md:mb-0">
            <h2 className="text-3xl md:text-4xl font-extrabold mb-4">Enjoy on your TV</h2>
            <p className="text-base md:text-lg">
              Watch on Smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players, and more.
            </p>
          </div>
          <div className="relative w-full md:w-auto">
            <img src="/tv.png" alt="TV" className="relative z-10" />
            <video
              className="absolute top-0 left-1/2 transform -translate-x-1/2 translate-y-1/3 w-3/4"
              playsInline
              autoPlay
              muted
              loop
            >
              <source src="/hero-vid.m4v" type="video/mp4" />
            </video>
          </div>
        </div>
      </div>

      <div className="h-1 bg-gray-800 w-full" />

      <div className="bg-black py-12">
        <div className="max-w-6xl mx-auto flex flex-col-reverse md:flex-row items-center justify-between px-6 md:px-8">
          <div className="relative w-full md:w-auto">
            <img src="/stranger-things-lg.png" alt="Stranger Things" className="relative z-10" />
            <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 bg-gray-900 w-3/4 lg:w-1/2 flex items-center gap-4 p-4 rounded-lg border border-gray-700">
              <img src="/stranger-things-sm.png" alt="Stranger Things" className="w-1/4" />
              <div className="flex-grow">
                <h3 className="text-lg font-bold">Stranger Things</h3>
                <p className="text-blue-500 text-sm">Downloading...</p>
              </div>
              <img src="/download-icon.gif" alt="Downloading" className="w-10" />
            </div>
          </div>
          <div className="text-center md:text-left mb-8 md:mb-0">
            <h2 className="text-3xl md:text-4xl font-extrabold mb-4">
              Download your shows to watch offline
            </h2>
            <p className="text-base md:text-lg">Save your favorites easily and always have something to watch.</p>
          </div>
        </div>
      </div>

      <div className="h-1 bg-gray-800 w-full" />

      <div className="bg-black py-12">
        <div className="max-w-6xl mx-auto flex flex-col-reverse md:flex-row items-center justify-between px-6 md:px-8">
          <div className="flex-1 text-center md:text-left mb-8 md:mb-0">
            <h2 className="text-3xl md:text-4xl font-extrabold mb-4">Watch everywhere</h2>
            <p className="text-base md:text-lg">
              Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV.
            </p>
          </div>

          <div className="flex-1 relative flex items-center justify-center">
            <img src="/device-pile.png" alt="Devices" className="w-full max-w-xs md:max-w-md relative z-10" />
            <video
              className="absolute top-0 left-1/2 transform -translate-x-1/2 translate-y-10 w-2/3 md:w-1/2"
              playsInline
              autoPlay
              muted
              loop
            >
              <source src="/video-devices.m4v" type="video/mp4" />
            </video>
          </div>
        </div>
      </div>
      <div className="h-1 bg-gray-800 w-full" />

      <div className="bg-black py-12">
        <div className="max-w-6xl mx-auto flex flex-col-reverse md:flex-row items-center justify-between px-6 md:px-8">
          <div className="relative w-full md:w-auto">
            <img src="/kids.png" alt="Kids" className="relative z-10" />
          </div>
          <div className="text-center md:text-left mb-8 md:mb-0">
            <h2 className="text-3xl md:text-4xl font-extrabold mb-4">Create profiles for kids</h2>
            <p className="text-base md:text-lg">Send kids on adventures with their favorite characters in a space made just for them—free with your membership.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthScreen;
