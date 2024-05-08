import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { db } from "../../../../../firebase/firebase";
import { collection, doc, getDocs } from "firebase/firestore";
import { motion } from "framer-motion";
import { zoomIn } from "../../../../../framerMotionValues/motionValues";

function ReviewList() {
  const location = useLocation();
  const details = location.state.details;
  const [reviewData, setReviewData] = useState([]);

  const gameRef = doc(db, "games", `${details.name}`);
  const reviewRef = collection(gameRef, "gameReviews");

  useEffect(() => {
    const getReviews = async () => {
      try {
        const data = await getDocs(reviewRef);
        const filteredReviews = data.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
        }));
        setReviewData(filteredReviews);
      } catch (error) {
        console.log(error);
      }
    };
    getReviews();
  }, [reviewRef]);

  return (
    <div className="my- w-full lg:w-2/4">
      <h1 className="my-5">{reviewData.length} Reviews</h1>
      {reviewData.map((item) => {
        return (
          <motion.div
            variants={zoomIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="w-full py-2 pr-5 my-2 bg-stone-800"
            key={item.id}
          >
            <h1 className="text-lg capitalize font-bold">
              {item.gameHeadline}
            </h1>
            <div className="flexRow items-center space-x-2">
              <img
                className="w-6 object-cover rounded-full"
                src={item.avatar}
                alt=""
              />
              <h1 className="text-bold font-primary font-bold text-amber-400">
                {item.author}
              </h1>
              <h1 className="text-xs">{item.createdAt}</h1>
            </div>
            <p className="text-xs">{item.gameReview}</p>
          </motion.div>
        );
      })}
    </div>
  );
}

export default ReviewList;
