import React, { useEffect } from "react";
import CartList from "./CartList";
import Total from "./Total";
import { useDispatch, useSelector } from "react-redux";
import { Helmet } from "react-helmet";
import { calculateTotals } from "../../features/user";
import { doc, updateDoc } from "firebase/firestore";
import { db } from "../../firebase/firebase";

function UserCart() {
  const dispatch = useDispatch();
  const { userReg, userCartItems } = useSelector((store) => store.user);
  const gameRef = doc(db, "userGames", `${userReg?.email}`);

  const deleteShow = async (passedID) => {
    try {
      const result = userCartItems.filter((item) => item.id !== passedID);
      await updateDoc(gameRef, {
        cartGames: result,
      });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    dispatch(calculateTotals());
  }, [userCartItems, dispatch]);

  return (
    <main className="p-1 flexCol md:flexRow space-x-1 relative">
      <Helmet>
        <title>GAMEBASE | Cart</title>
      </Helmet>
      <CartList deleteShow={deleteShow} />
      <Total />
    </main>
  );
}

export default UserCart;
