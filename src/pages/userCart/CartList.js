import React from "react";
import { useSelector } from "react-redux";
import CartItem from "./CartItem";
import { motion } from "framer-motion";
import { fadeOut700 } from "../../framerMotionValues/motionValues";
import LogoTwo from "../../components/LogoTwo";

function CartList({ deleteShow }) {
  const { userCartItems } = useSelector((store) => store.user);

  if (userCartItems.length === 0) {
    return (
      <div className="text-2xl w-full flexCol items-center space-y-3 justify-center text-cream">
        <motion.h1
          variants={fadeOut700}
          initial="hidden"
          animate="visible"
          className="font-primary text-2xl uppercase tracking-wide"
        >
          no items in cart
        </motion.h1>
        <div className="w-20 h-20">
          <LogoTwo />
        </div>
      </div>
    );
  }

  return (
    <section className="w-full p-1 space-y-2">
      {userCartItems.map((item) => {
        return <CartItem key={item.id} {...item} deleteShow={deleteShow} />;
      })}
    </section>
  );
}

export default CartList;
