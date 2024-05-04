import React from "react";
import { IoMdCart } from "react-icons/io";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

function CartButton() {
  const { userCartItems } = useSelector((store) => store.user);

  return (
    <NavLink to="/cart" className="center flex-row">
      <div className="center text-cream w-full space-x-1 hover:bg-stone-800 duration-300 px-3 py-1">
        <IoMdCart className="text-amber-400 text-lg" />
        <h1>cart</h1>
        <span className="font-bold font-secondary">
          {userCartItems?.length}
        </span>
      </div>
    </NavLink>
  );
}

export default CartButton;
