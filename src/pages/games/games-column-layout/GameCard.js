import React from "react";
import BorderSvg from "../../../components/BorderSvg";
import { IoCartOutline, IoHeartOutline } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import { motion } from "framer-motion";
import { db } from "../../../firebase/firebase";
import { arrayUnion, doc, updateDoc } from "firebase/firestore";
import { NavLink } from "react-router-dom";
import { openModal } from "../../../features/gamesSlice";
import { FaStar } from "react-icons/fa";
import Loader from "../../../components/Loader";

function GameCard({
  loading,
  category,
  id,
  name,
  image,
  price,
  platforms,
  developer,
  year,
  info,
  amount,
  banner,
  game,
  free,
}) {
  const dispatch = useDispatch();
  const { userReg } = useSelector((store) => store.user);
  const gameRef = doc(db, "userGames", `${userReg?.email}`);
  const { averageRating } = useSelector((store) => store.games);
  const currRating = averageRating.find((item) => item.id === name);

  const saveShow = async () => {
    if (userReg?.email) {
      await updateDoc(gameRef, {
        savedGames: arrayUnion({
          category: category,
          id: id,
          name: name,
          image: image,
          price: price,
          platforms: platforms,
          developer: developer,
          year: year,
          info: info,
          amount: amount,
          banner: banner,
        }),
      });
    } else {
      dispatch(openModal());
    }
  };

  const addToCart = async () => {
    if (userReg?.email) {
      await updateDoc(gameRef, {
        cartGames: arrayUnion({
          id: id,
          name: name,
          price: price,
          image: image,
          info: info,
          year: year,
          amount: amount,
        }),
      });
    } else {
      dispatch(openModal());
    }
  };

  const truncateString = (str, num) => {
    if (str?.length > num) {
      return str.slice(0, num) + "...";
    } else {
      return str;
    }
  };
  const truncateRating = (str, num) => {
    if (str?.length > num) {
      return str.slice(0, num);
    } else {
      return str;
    }
  };

  return (
    <>
      <motion.div
        layout
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
        className="w-24 h-48 md:w-40 mb-4 bg-black md:h-auto relative cursor-pointer group duration-300"
      >
        <div className="w-24 h-32 md:h-56 md:w-40 center">
          <img
            className="w-full h-full object-cover object-top"
            src={image}
            alt={name}
          />
        </div>
        <article className="font-secondary py-1 flex-col child:text-start">
          <div className="flexRow space-x-2 py-1 child:h-2 child:w-2 md:child:h-4 md:child:w-4">
            {platforms.ps ? <img src={platforms.ps} alt="platform" /> : ""}
            {platforms.xbox ? <img src={platforms.xbox} alt="platform" /> : ""}
            {platforms.pc ? <img src={platforms.pc} alt="platform" /> : ""}
          </div>
          <h1 className="text-xxs md:text-sm font-bold uppercase">
            {truncateString(name, 15)}
          </h1>
          <div className="flex flex-row items-center">
            <FaStar className="text-amber-400 mr-2 text-xs md:text-lg" />
            <span className=" relative w-20 h-5 *:text-xs *:md:text-lg flex flex-row items-center justify-start">
              {loading ? (
                <Loader />
              ) : (
                <span className="pt-1  font-light">
                  {truncateRating(
                    currRating?.averageRating.toLocaleString(),
                    3
                  )}{" "}
                  / 10
                </span>
              )}
            </span>
          </div>
          {price === null ? (
            ""
          ) : (
            <h6 className="font-light text-xs md:text-base">$ {price}</h6>
          )}
          <h6 className="font-normal text-xs md:text-base capitalize text-amber-400">
            {free}
          </h6>
        </article>
        <section className="space-y-2 backdrop-blur-sm absolute w-full h-full top-0 left-0 bg-600 flexCol items-center scale-0 group group-hover:scale-100 duration-300 justify-center">
          <NavLink to="/gamepage" state={{ game }}>
            <button className="cream-button text-xs md:text-sm">
              <BorderSvg />
              visit page
            </button>
          </NavLink>
          <div className="flexCol w-full child:font-light child:py-1 font-secondary capitalize child:text-xs md:child:text-sm child:flexRow child:cursor-pointer hover:child:text-amber-400 child:duration-300">
            <button onClick={addToCart} className="justify-center">
              <IoCartOutline className="md:text-xl mr-1" />
              Add to cart
            </button>
            <button onClick={saveShow} className="justify-center">
              <IoHeartOutline className="md:text-xl mr-1" />
              Add To Wishlist
            </button>
          </div>
        </section>
      </motion.div>
    </>
  );
}

export default GameCard;
