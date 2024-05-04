import React, { useEffect } from "react";
import LogoTwo from "../../../components/LogoTwo";
import Regions from "../../regions/Regions";
import Socials from "../../../components/Socials";
import { FaBug } from "react-icons/fa";
import SideButton from "../mobile/SideButton";
import { useNavigate } from "react-router-dom";
import UserButton from "./userspanel/UserButton";
import { onAuthStateChanged } from "firebase/auth";
import { auth, db } from "../../../firebase/firebase";
import { useDispatch, useSelector } from "react-redux";
import {
  getUser,
  getUserCartGames,
  getUserProfile,
  getUserWishlistGames,
  logOutUser,
} from "../../../features/user";
import { collection, doc, getDocs, onSnapshot } from "firebase/firestore";

function NavigationHeader() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { userReg } = useSelector((store) => store.user);

  useEffect(() => {
    onSnapshot(doc(db, "userGames", `${userReg?.email}`), (doc) => {
      dispatch(getUserWishlistGames(doc.data()?.savedGames));
    });
  }, [userReg?.email, dispatch]);

  useEffect(() => {
    onSnapshot(doc(db, "userGames", `${userReg?.email}`), (doc) => {
      dispatch(getUserCartGames(doc.data()?.cartGames));
    });
  }, [userReg?.email, dispatch]);

  useEffect(() => {
    const fetchData = async () => {
      const list = [];
      try {
        const querySnapShot = await getDocs(collection(db, "users"));
        querySnapShot.forEach((doc) => {
          list.push(doc.data());
        });
        dispatch(getUserProfile(list));
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [dispatch]);

  useEffect(() => {
    onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        dispatch(
          getUser({
            email: currentUser.email,
            userName: currentUser.displayName,
            userID: currentUser.uid,
            userAvatar: currentUser.photoURL,
          })
        );
      } else {
        dispatch(logOutUser());
      }
    });
  }, [dispatch]);

  return (
    <header className="flex font-tetriary flex-row items-center justify-between">
      <SideButton />
      <div
        onClick={() => navigate("/")}
        className="cursor-pointer w-10 h-10 ml-14 md:ml-0"
      >
        <LogoTwo />
      </div>

      <div className="hidden md:flexRow items-center justify-between w-full">
        <section className="w-auto h-10 flexRow items-center">
          <div className="w-full ml-2 hidden md:block">
            <Regions />
          </div>
        </section>
        <section className="flexRow">
          <div className="flexRow items-center text-cream px-2 py-2 cursor-pointer hover:bg-stone-800 duration-300">
            <FaBug className="mr-2" />
            <h1 className="text-xs">report a bug</h1>
          </div>
          <div className="hidden md:flex items-center">
            <Socials />
          </div>
        </section>
      </div>

      <UserButton />
    </header>
  );
}

export default NavigationHeader;
