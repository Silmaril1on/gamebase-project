import React, { useState } from "react";
import { MdOutlineArrowRight, MdOutlineArrowLeft } from "react-icons/md";
import WishListButton from "../layout/navigation/desktop/userspanel/WishListButton";
import CartButton from "../layout/navigation/desktop/userspanel/CartButton";
import { motion } from "framer-motion";
import { useSelector } from "react-redux";

const edgeVariant = {
  hidden: {
    left: 0,
  },
  visible: {
    left: "-138px",
    transition: {
      duration: 0.3,
    },
  },
};

function EdgeButton() {
  const [flip, setFlip] = useState(false);
  const { userReg } = useSelector((store) => store.user);

  return (
    <>
      {userReg?.email ? (
        <motion.div
          variants={edgeVariant}
          animate={flip ? "hidden" : "visible"}
          className="w-[150px] h-16 flex xl:hidden rounded-r-xl bg-skewHover z-10 fixed top-20 overflow-hidden"
        >
          <div
            className="flex flex-col items-start text-md
       capitalize font-tetriary w-full"
          >
            <WishListButton />
            <CartButton />
          </div>
          <div
            onClick={() => setFlip(!flip)}
            className="w-3 rounded-r-xl h-auto relative cursor-pointer"
          >
            {flip ? (
              <MdOutlineArrowLeft className="absolute top-3 -left-[15px] w-10 h-10" />
            ) : (
              <MdOutlineArrowRight className="absolute top-3 -left-[15px] w-10 h-10" />
            )}
          </div>
        </motion.div>
      ) : (
        ""
      )}
    </>
  );
}

export default EdgeButton;
