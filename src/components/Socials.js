import React from "react";
import {
  FaYoutube,
  FaInstagram,
  FaTwitter,
  FaTiktok,
  FaTwitch,
  FaDiscord,
} from "react-icons/fa";

function Socials() {
  return (
    <section className="flexRow items-center child:cursor-pointer child:text-cream child:duration-300 space-x-2 mx-3">
      <FaYoutube className="hover:text-red-600" />
      <FaInstagram className="hover:text-purple-400" />
      <FaTwitter className="hover:text-blue-500" />
      <FaTiktok className="hover:text-red-400" />
      <FaTwitch className="hover:text-violet-600" />
      <FaDiscord className="hover:text-blue-700" />
    </section>
  );
}

export default Socials;
