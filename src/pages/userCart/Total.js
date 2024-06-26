import React from "react";
import { useSelector } from "react-redux";
import Button from "../../components/Button";
import { doc, updateDoc } from "firebase/firestore";
import { db } from "../../firebase/firebase";

function Total() {
  const { totalPrice, totalProducts, tax, userReg } = useSelector(
    (store) => store.user
  );
  const gameRef = doc(db, "userGames", `${userReg?.email}`);

  const clearCart = async () => {
    try {
      await updateDoc(gameRef, {
        cartGames: [],
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <section className="bg-stone-800 overflow-hidden group flexCol items-center py-3 mt-1 hover:bg-stone-700 duration-300 h-64 w-full md:w-1/3 sticky top-1">
      <div className="absolute bg-scratch -z-2 bg-center bg-cover w-4/5 opacity-25 group-hover:opacity-100 duration-1000 rotate-45 h-64 top-0 left-10"></div>
      <Button onClick={clearCart} className="cream-button">
        clear cart
      </Button>
      <div className=" child:px-2 text-cream w-full flexRow justify-between">
        <h1 className="font-primary tracking-wide font-light">
          Total Products
        </h1>
        <h1 className="italic font-bold">{totalProducts}</h1>
      </div>
      <div className=" child:px-2 text-cream w-full flexRow justify-between">
        <h1 className="font-primary tracking-wide font-light">Tax</h1>
        <h1 className="italic font-bold">1%</h1>
      </div>
      <div className=" child:px-2 text-cream w-full flexRow justify-between">
        <h1 className="font-primary tracking-wide font-light">Sub-total:</h1>
        <h1 className="italic font-bold">$ {totalPrice.toFixed(2)}</h1>
      </div>
      <div className=" child:px-2 text-cream w-full flexRow justify-between">
        <h1 className="font-primary tracking-wide font-light">Total Price:</h1>
        <h1 className="italic font-bold">$ {tax.toFixed(2)}</h1>
      </div>
      <Button>proceed to checkout</Button>
    </section>
  );
}

export default Total;
