import React, { useEffect } from "react";
import CartList from "./CartList";
import Total from "./Total";
import { useDispatch, useSelector } from "react-redux";
import { calculateTotals } from "../../features/gamesSlice";

function UserCart() {
  const { cartItems } = useSelector((store) => store.games);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(calculateTotals());
  }, [cartItems, dispatch]);

  return (
    <main className="p-1 flexCol md:flexRow space-x-1 relative">
      <CartList />
      <Total />
    </main>
  );
}

export default UserCart;
