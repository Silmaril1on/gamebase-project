import React, { useState } from "react";
import { IoMdArrowDropup, IoMdArrowDropdown } from "react-icons/io";
import WishListButton from "../layout/navigation/desktop/userspanel/WishListButton";
import CartButton from "../layout/navigation/desktop/userspanel/CartButton";
import { motion } from "framer-motion";
import { useSelector } from "react-redux";
import { RiSearchLine } from "react-icons/ri";
import UserSettings from "../layout/navigation/desktop/userspanel/UserSettings";

const edgeVariant = {
  hidden: {
    bottom: "-30px",
  },
  visible: {
    bottom: 0,
    transition: {
      duration: 0.3,
    },
  },
};

function EdgeButton() {
  const [flip, setFlip] = useState(true);
  const { userReg } = useSelector((store) => store.user);
  const [settings, setSettings] = useState(false);

  return (
    <>
      {userReg?.email ? (
        <motion.div
          variants={edgeVariant}
          animate={flip ? "hidden" : "visible"}
          className="w-full flex flex-col xl:hidden z-20 fixed bottom-0"
        >
          <div className="w-full h-3 center">
            <div
              onClick={() => {
                setFlip(!flip);
                if (settings) {
                  setSettings(false);
                }
              }}
              className="w-20 rounded-t-xl center bg-stone-800 cursor-pointer"
            >
              {flip ? <IoMdArrowDropup /> : <IoMdArrowDropdown />}
            </div>
          </div>
          <div className="flex flex-row items-center bg-stone-800 justify-between text-md capitalize font-tetriary w-full py-1">
            <div className="flex flex-row">
              <WishListButton />
              <CartButton />
            </div>
            <div className="flex flex-row items-center space-x-2 mr-3 *:duration-300 hover:*:text-amber-400 *:hover:cursor-pointer">
              <RiSearchLine size={20} />
              <img
                onClick={() => setSettings(!settings)}
                src={userReg?.userAvatar}
                className="w-7 h-7 object-cover rounded-full"
                alt=""
              />
            </div>
          </div>
          {settings && <UserSettings settings={settings} />}
        </motion.div>
      ) : (
        ""
      )}
    </>
  );
}

export default EdgeButton;
