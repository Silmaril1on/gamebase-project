import React from "react";
import SignOut from "../../../../authentication/registration/signout/SignOut";
import { motion } from "framer-motion";
import { fadeOut700 } from "../../../../framerMotionValues/motionValues";
import { NavLink } from "react-router-dom";
import { FaRegUserCircle } from "react-icons/fa";
import { IoSettingsOutline, IoShieldCheckmarkOutline } from "react-icons/io5";

const userSettingsLinks = [
  {
    name: "profile",
    link: "/profile",
    icon: <FaRegUserCircle />,
  },
  {
    name: "settings",
    link: "/settings",
    icon: <IoSettingsOutline />,
  },
  {
    name: "security",
    link: "/security",
    icon: <IoShieldCheckmarkOutline />,
  },
];

function UserSettings({ setSettings }) {
  return (
    <motion.div
      variants={fadeOut700}
      initial="hidden"
      animate="visible"
      className="bg-400 absolute top-12 w-36 right-0 pr-2 py-2"
    >
      <motion.div variants={fadeOut700} className="font-primary">
        {userSettingsLinks.map((item, index) => {
          return (
            <div
              onClick={() => setSettings(false)}
              className="settings-style"
              key={index}
            >
              <NavLink className="w-full text-end" to={item.link}>
                {item.name}
              </NavLink>
              <span>{item.icon}</span>
            </div>
          );
        })}
      </motion.div>
      <div className="flex justify-end pr-2">
        <SignOut />
      </div>
    </motion.div>
  );
}

export default UserSettings;
