import React from "react";
import { BsBookmarkHeartFill } from "react-icons/bs";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

function WishListButton() {
  const { userWishlistGames } = useSelector((store) => store.user);
  return (
    <NavLink to="/wishlist" className="center flex-row">
      <div className="center text-cream w-full space-x-1 hover:bg-stone-800 duration-300 px-3 py-1">
        <BsBookmarkHeartFill className="text-lg text-amber-400" />
        <h1>wishlist</h1>
        <span className="font-bold font-secondary">
          {userWishlistGames?.length}
        </span>
      </div>
    </NavLink>
  );
}

export default WishListButton;
