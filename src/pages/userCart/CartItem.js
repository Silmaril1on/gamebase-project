import React from "react";
import { removeItem, increase, decrease } from "../../features/gamesSlice";
import { IoMdArrowDropdown, IoMdArrowDropup } from "react-icons/io";
import Button from "../../components/Button";
import { useDispatch } from "react-redux";

function CartItem({
  id,
  name,
  image,
  developer,
  platforms,
  year,
  price,
  amount,
}) {
  const dispatch = useDispatch();

  return (
    <div className="flexRow relative bg-stone-800 group hover:bg-stone-700 overflow-hidden duration-300">
      <div className="absolute bg-scratch z-0 bg-center bg-cover w-1/3 opacity-25 group-hover:opacity-100 duration-1000 rotate-45 h-64 -top-12 left-2/4"></div>
      <div className="w-32 h-32 m-1">
        <img className="w-full h-full object-cover" src={image} alt={name} />
      </div>
      <div className="flexCol md:flexRow w-full relative z-2">
        <article className="justify-center flexCol w-full text-cream font-primary pl-3">
          <h1 className="text-xl uppercase">{name}</h1>
          <h2 className="font-secondary capitalize">{developer}</h2>
          <h4>{year}</h4>
          <h4>$ {price}</h4>
        </article>
        <div className="flexCol space-y-2 md:flexRow w-full p-2 items-start md:items-center justify-around">
          <div className="flexRow space-x-2 w-20 justify-center">
            {platforms.ps ? (
              <img className="h-5 w-auto" src={platforms.ps} alt="platform" />
            ) : (
              ""
            )}

            {platforms.xbox ? (
              <img className="h-5 w-auto" src={platforms.xbox} alt="platform" />
            ) : (
              ""
            )}
            {platforms.pc ? (
              <img className="h-5 w-auto" src={platforms.pc} alt="platform" />
            ) : (
              ""
            )}
          </div>
          <div>
            <Button onClick={() => dispatch(removeItem(id))}>
              remove item
            </Button>
          </div>
          <div className="flexRow md:flexCol space-x-2 md:space-x-0 items-center text-cream">
            <Button onClick={() => dispatch(increase({ id }))}>
              <IoMdArrowDropup />
            </Button>
            <span className="font-bold text-xl">{amount}</span>
            <Button
              onClick={() => {
                if (amount === 1) {
                  dispatch(removeItem(id));
                  return;
                }
                dispatch(decrease({ id }));
              }}
            >
              <IoMdArrowDropdown />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CartItem;
