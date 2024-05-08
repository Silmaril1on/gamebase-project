import React, { useState } from "react";
import GameInfo from "./GameInfo";
import ReviewForm from "../userreviews/reviewform/ReviewForm";
import ReviewList from "./reviewlists/ReviewList";
import { Helmet } from "react-helmet";

function UserReviews() {
  const [gameReviewForm, setGameReviewForm] = useState(false);

  return (
    <section className="w-full p-5">
      <Helmet>
        <title>GAMEBASE | Reviews</title>
      </Helmet>
      <GameInfo
        setGameReviewForm={setGameReviewForm}
        gameReviewForm={gameReviewForm}
      />
      {gameReviewForm ? (
        <ReviewForm setGameReviewForm={setGameReviewForm} />
      ) : (
        ""
      )}
      <ReviewList />
    </section>
  );
}

export default UserReviews;
