import React from "react";
import { useSelector } from "react-redux";

function WishListHeader() {
  const { userWishlistGames } = useSelector((store) => store.user);
  return (
    <header>
      <div className="flex flex-col border-t border-b border-stone-600 py-3">
        <h1 className="text-4xl font-tetriary">Your Gamelist</h1>
        <p>You have {userWishlistGames?.length} games saved</p>
      </div>
    </header>
  );
}

export default WishListHeader;
