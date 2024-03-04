import React from "react";
import BorderSvg from "../../../components/BorderSvg";
import { useDispatch } from "react-redux";
import { IoCartOutline, IoHeartOutline } from "react-icons/io5";
import { addToCart } from "../../../features/gamesSlice";

function ConsolesCard({ name, image, price, item }) {
  const dispatch = useDispatch();
  return (
    <section className="w-40 md:w-44 h-64 relative group outline outline-offset-2 outline-none hover:cream-outline duration-300 my-1">
      <div className="h-44 w-full">
        <img
          className="h-44 w-full object-cover"
          src={image}
          alt="console_info"
        />
      </div>
      <article className="space-y-1">
        <h1 className="capitalize text-sm font-bold">{name}</h1>
        <h4>$ {price}</h4>
      </article>
      <section className="space-y-2 backdrop-blur-sm absolute w-full h-full top-0 left-0 bg-600 flexCol items-center scale-0 group group-hover:scale-100 duration-300 justify-center">
        <button className="cream-button text-xs md:text-sm">
          <BorderSvg />
          visit page
        </button>
        <div className="flexCol child:font-light child:py-1 w-28 font-secondary capitalize child:text-xs md:child:text-sm child:flexRow child:cursor-pointer hover:child:font-bold child:duration-300">
          <button
            onClick={() => {
              dispatch(addToCart(item));
            }}
            className="justify-center"
          >
            <IoCartOutline className="md:text-xl mr-1" />
            Add to cart
          </button>
          <button className="justify-center">
            <IoHeartOutline className="md:text-xl mr-1" />
            Wishlist
          </button>
        </div>
      </section>
    </section>
  );
}

export default ConsolesCard;
