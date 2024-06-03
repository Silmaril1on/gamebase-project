import React, { useState } from "react";
import { useSelector } from "react-redux";
import SignOut from "../../../../authentication/registration/signout/SignOut";
import { motion } from "framer-motion";

function DisplayNameButton() {
  const { userReg } = useSelector((store) => store.user);
  const [toggle, setToggle] = useState(false);

  return (
    <div
      className="center flex-row w-max xl:mr-3 ml-2 space-x-1"
      onClick={() => setToggle(!toggle)}
      onMouseLeave={() => setToggle(false)}
    >
      <h1 className="hover:text-amber-400 font-bold text-xs duration-300">
        {userReg.userName}
      </h1>
      <img
        className="w-8 h-8 rounded-full object-cover"
        src={userReg.userAvatar}
        alt="user_avatar"
      />
      {toggle && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
          className="fixed top-9 right-3 pt-2 pl-5"
        >
          <SignOut />
        </motion.div>
      )}
    </div>
  );
}

export default DisplayNameButton;
