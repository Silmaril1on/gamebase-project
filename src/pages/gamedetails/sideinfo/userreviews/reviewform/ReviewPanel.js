import React, { useState } from "react";
import ReviewFormGameDetails from "./ReviewFormGameDetails";
import ReviewInput from "./ReviewInput";
import ReviewSuccess from "./ReviewSuccess";

function ReviewPanel({ setGameReviewForm }) {
  const [reviewAdded, setReviewAdded] = useState(false);
  return (
    <section className="w-full xl:w-3/12 bg-black p-2">
      <ReviewFormGameDetails setGameReviewForm={setGameReviewForm} />

      {reviewAdded ? (
        <ReviewSuccess />
      ) : (
        <ReviewInput setReviewAdded={setReviewAdded} />
      )}
    </section>
  );
}

export default ReviewPanel;
