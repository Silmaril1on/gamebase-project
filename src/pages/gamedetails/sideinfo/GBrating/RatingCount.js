import { collection, getDocs } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { db } from "../../../../firebase/firebase";

function RatingCount({ details }) {
  // const [ratingsData, setRatingsData] = useState([]);
  // const ratingsRef = collection(db, "games");

  // useEffect(() => {
  //   const getRatingData = async () => {
  //     const data = await getDocs(ratingsRef);
  //     const ratings = data.docs.map((doc) => ({
  //       ...doc.data(),
  //       id: doc.id,
  //     }));
  //   };
  //   getRatingData();
  // }, []);

  return <div>RatingCount</div>;
}

export default RatingCount;