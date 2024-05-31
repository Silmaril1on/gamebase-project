import React, { useState } from "react";
import BorderSvg from "../../../../components/BorderSvg";
import { addDoc, collection, doc } from "firebase/firestore";
import { db } from "../../../../firebase/firebase";
import { useSelector } from "react-redux";
import { motion } from "framer-motion";
import { fadeOut700 } from "../../../../framerMotionValues/motionValues";

function BugForm({ setSubmited }) {
  const [message, setMessage] = useState("");
  const { userReg } = useSelector((store) => store.user);

  const bugRef = doc(db, "reports", `${userReg?.email}`);
  const reportsRef = collection(bugRef, "userReports");

  const reportBug = async () => {
    await addDoc(reportsRef, {
      author: userReg?.email,
      issue: message,
      createdAd: new Date().toDateString(),
    });
  };

  return (
    <motion.section
      variants={fadeOut700}
      initial="hidden"
      animate="visible"
      className="h-full w-full center flex-col font-primary"
    >
      <div className="w-6/12 space-y-2">
        <div className=" flex  items-center flex-row space-x-2">
          <img
            className="w-8 h-8 rounded-full object-cover"
            src={userReg?.userAvatar}
            alt="user_avatar"
          />
          <h1 className="font-secondary uppercase text-2xl pt-2">
            {userReg?.userName}
          </h1>
        </div>
        <div className="form-container">
          <label htmlFor="textarea">We Value Your Opinion</label>
          <textarea
            id="textarea"
            name="message"
            className="w-full h-[200px]"
            onChange={(e) => setMessage(e.target.value)}
          ></textarea>
        </div>
      </div>
      <button
        onClick={() => {
          reportBug();
          setSubmited(false);
        }}
        className="cream-button"
      >
        <BorderSvg />
        Bug Report
      </button>
    </motion.section>
  );
}

export default BugForm;
