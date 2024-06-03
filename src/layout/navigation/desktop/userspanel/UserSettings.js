import React from "react";
import SignOut from "../../../../authentication/registration/signout/SignOut";
import { motion } from "framer-motion";
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

const edgeVariant = {
  hidden: {
    bottom: "30px",
  },
  visible: {
    bottom: 0,
    transition: {
      duration: 0.3,
    },
  },
};

function UserSettings({ settings }) {
  return (
    <motion.div
      variants={edgeVariant}
      animate={settings ? "hidden" : "visible"}
      className="bg-stone-800/80 backdrop-blur-sm fixed w-36 right-0 pr-2 py-2 -z-5"
    >
      <div className="font-primary">
        {userSettingsLinks.map((item, index) => {
          return (
            <div className="settings-style" key={index}>
              <NavLink className="w-full text-end" to={item.link}>
                {item.name}
              </NavLink>
              <span>{item.icon}</span>
            </div>
          );
        })}
      </div>
      <div className="flex justify-end pr-2">
        <SignOut />
      </div>
    </motion.div>
  );
}

export default UserSettings;
