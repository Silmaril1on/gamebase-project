import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import WishListButton from "./WishListButton";
import DisplayNameButton from "./DisplayNameButton";
import CartButton from "./CartButton";

function UserButton() {
  const { userReg } = useSelector((store) => store.user);

  const navigate = useNavigate();

  return (
    <div className="cursor-pointer">
      {userReg?.email ? (
        <article className="flex flex-row">
          <WishListButton />
          <CartButton />
          <DisplayNameButton />
        </article>
      ) : (
        <h1 onClick={() => navigate("/registration")}>login</h1>
      )}
    </div>
  );
}

export default UserButton;

// const signUpUser = async (e) => {
//   e.preventDefault();
//   if (password !== passwordConfirmation) {
//     return setError("password do not match !");
//   }
//   try {
//     setError("");
//     setLoading(true);
//     const response = await createUserWithEmailAndPassword(
//       auth,
//       email,
//       password
//     );
//     await setDoc(doc(db, "users", response.user.uid), {
//       image: fileUrl,
//       email: email,
//       firstName: firstName,
//       lastName: lastName,
//       country: country,
//       city: city,
//       zip: zip,
//       userName: userName,
//     });
//   } catch (error) {
//     setError("failed to create an account");
//   }
//   setLoading(false);
// };
