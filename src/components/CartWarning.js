import React from "react";
import { motion } from "framer-motion";
import { fadeOut700 } from "../framerMotionValues/motionValues";
import BorderSvg from "./BorderSvg";
import { useDispatch } from "react-redux";
import { closeModal } from "../features/gamesSlice";
import CloseButton from "./CloseButton";

function CartWarning() {
  const dispatch = useDispatch();
  return (
    <motion.section
      variants={fadeOut700}
      initial="hidden"
      animate="visible"
      className="fixed bottom-5 right-5 w-68 px-5 py-5 center bg-600 uppercase font-primary"
    >
      <div className="p-5 relative bg-black">
        <h1>product is already in cart</h1>
        <BorderSvg />
      </div>
      <CloseButton onClick={() => dispatch(closeModal())} />
    </motion.section>
  );
}

export default CartWarning;
