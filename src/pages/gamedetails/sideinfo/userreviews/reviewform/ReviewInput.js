import React, { useEffect, useState } from "react";
import { addDoc, collection, doc } from "firebase/firestore";
import { useLocation } from "react-router-dom";
import { auth, db } from "../../../../../firebase/firebase";
import BorderSvg from "../../../../../components/BorderSvg";

function ReviewInput({ setReviewAdded }) {
  const location = useLocation();
  const details = location.state.details;
  const [headline, setHeadline] = useState("");
  const [review, setReview] = useState("");
  const [letterLength] = useState(300);
  const [disabled, setDisabled] = useState(true);
  const remainingLetters = letterLength - review.length;

  const gameRef = doc(db, "games", `${details.name}`);
  const gameReviewRef = collection(gameRef, "gameReviews");

  const addReview = async () => {
    try {
      await addDoc(gameReviewRef, {
        gameReview: review,
        gameHeadline: headline,
        email: auth.currentUser?.email,
        avatar: auth.currentUser?.photoURL,
        author: auth.currentUser?.displayName,
        createdAt: new Date().toDateString(),
      });
    } catch (error) {
      console.log(error);
    }
    setReviewAdded(true);
  };

  useEffect(() => {
    if (review.length > letterLength) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  }, [letterLength, disabled, review.length]);

  return (
    <div className="flex flex-col space-y-2 mt-10">
      <input
        name="headline"
        id="headline"
        placeholder="Headline for your review"
        type="text"
        onChange={(e) => setHeadline(e.target.value)}
      />
      <article className="*:text-xs pl-2 py-2">
        {letterLength > review.length ? (
          <h1 className=" text-red-500">
            Required characters:
            <span className="ml-1 font-bold">{remainingLetters}</span>{" "}
          </h1>
        ) : (
          <h1 className="text-green-500">Minimum character limit met</h1>
        )}
      </article>
      <textarea
        name="review"
        id="review"
        className="h-80 text-sm"
        placeholder="Write your review here"
        onChange={(e) => setReview(e.target.value)}
      />
      <div className="flex flex-col py-2 space-y-2">
        <button
          disabled={disabled}
          onClick={addReview}
          className="cream-button w-full"
        >
          <BorderSvg />
          Add Your review
        </button>
        <h1 className="text-[9px] text-center">
          I agree to the
          <span className="text-amber-400 hover:underline cursor-pointer">
            Conditions of Use.
          </span>
          The data I'm submitting is true and not copyrighted by a third party.
        </h1>
      </div>
    </div>
  );
}

export default ReviewInput;
