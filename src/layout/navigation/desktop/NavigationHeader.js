import React, { useEffect } from "react";
import LogoTwo from "../../../components/LogoTwo";
import Regions from "../../regions/Regions";
import Socials from "../../../components/Socials";
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
import {
  collection,
  doc,
  getDocs,
  onSnapshot,
  setDoc,
} from "firebase/firestore";
import Bug from "./bug/Bug";

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
    onSnapshot(doc(db, "users", `${userReg?.email}`), (doc) => {
      dispatch(getUserProfile(doc.data()?.userProfile));
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
    <header className="flex font-tetriary flex-row items-center justify-between px-3">
      <SideButton />
      <div
        onClick={() => navigate("/")}
        className="cursor-pointer w-10 h-10 ml-14 md:ml-0"
      >
        <LogoTwo />
      </div>

      <div className="hidden md:flexRow items-center justify-between w-full ">
        <section className="w-auto h-8 flexRow items-center hover:bg-amber-400/40 duration-300 ml-2 mt-1 px-2">
          <div className="w-full hidden md:block">
            <Regions />
          </div>
        </section>
        <section className="flexRow">
          <Bug />
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
