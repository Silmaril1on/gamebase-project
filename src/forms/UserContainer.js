import React from "react";
import { FaRegUser, FaRegHeart } from "react-icons/fa";
import { MdPrivacyTip } from "react-icons/md";
import { IoCartOutline, IoSettingsOutline } from "react-icons/io5";
import { motion } from "framer-motion";
import { fadeOut200 } from "../framerMotionValues/motionValues";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const userData = [
  {
    name: "profile",
    icon: <FaRegUser />,
  },
  {
    name: "privacy policy",
    icon: <MdPrivacyTip />,
  },
  {
    name: "settings",
    icon: <IoSettingsOutline />,
  },
];

function UserContainer({ setUserProfile }) {
  const navigate = useNavigate();

  const goToCart = () => {
    navigate("/cart");
    setUserProfile(false);
  };
  const { cartItems } = useSelector((store) => store.games);
  return (
    <motion.section
      variants={fadeOut200}
      initial="hidden"
      animate="visible"
      className="w-auto bg-black px-3 right-0 flexCol items-center top-12 h-auto fixed "
    >
      {userData.map((item, index) => {
        return (
          <motion.div
            variants={fadeOut200}
            key={index}
            className="text-cream hover:text-blue-500 duration-300 flexRow items-center font-primary capitalize w-full my-1 cursor-pointer"
          >
            <span className="mr-2 pb-1 text-lg">{item.icon}</span>
            <h1>{item.name}</h1>
          </motion.div>
        );
      })}
      <div
        onClick={goToCart}
        className="text-cream hover:text-blue-500 duration-300 flexRow items-center font-primary capitalize w-full my-1 cursor-pointer"
      >
        <span className="mr-2 pb-1 text-lg">
          <IoCartOutline />
        </span>
        <h1>my cart</h1>
        <span className="ml-3 text-2xl font-bold">{cartItems.length}</span>
      </div>
      <div className="text-cream hover:text-blue-500 duration-300 flexRow items-center font-primary capitalize w-full my-1 cursor-pointer">
        <span className="mr-2 pb-1 text-lg">
          <FaRegHeart />
        </span>
        <h1>wishlist</h1>
      </div>
    </motion.section>
  );
}

export default UserContainer;
