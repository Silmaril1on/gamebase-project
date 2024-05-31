import React, { useState, useEffect } from "react";
import BorderSvg from "../../../components/BorderSvg";
import { auth, db, storage } from "../../../firebase/firebase";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import ErrorMsg from "../../ErrorMsg";
import { ref, getDownloadURL, uploadBytes } from "firebase/storage";
import uploadLogo from "../../../assets/image.png";

function SignUp({ loading, setLoading }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [country, setCountry] = useState("");
  const [city, setCity] = useState("");
  const [zip, setZip] = useState("");
  const [file, setFile] = useState(null);
  const [fileUrl, setFileUrl] = useState(null);
  const [userName, setUserName] = useState("");
  const [error, setError] = useState("");

  const signUpUser = async (e) => {
    e.preventDefault();
    if (password !== passwordConfirmation) {
      return setError("password do not match !");
    }
    setError("");
    setLoading(true);
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        setDoc(doc(db, "userGames", email), {
          savedGames: [],
          cartGames: [],
        });
        setDoc(doc(db, "users", userCredential.user.email), {
          userProfile: [
            {
              image: fileUrl,
              email: email,
              firstName: firstName,
              lastName: lastName,
              country: country,
              city: city,
              zip: zip,
              userName: userName,
            },
          ],
        });
        updateProfile(auth.currentUser, {
          displayName: userName,
          photoURL: fileUrl,
        });

        setLoading(false);
      })
      .catch((error) => {
        setLoading(false);
      });
  };

  useEffect(() => {
    const handleSubmit = () => {
      const imageRef = ref(storage, `user_images/${file.name}`);
      uploadBytes(imageRef, file).then(() => {
        getDownloadURL(imageRef).then((url) => {
          setFileUrl(url);
        });
      });
    };
    file && handleSubmit();
  }, [file]);

  return (
    <div id="1">
      {error && <ErrorMsg>{error}</ErrorMsg>}
      <form onSubmit={signUpUser} className="px-5 md:px-0">
        <div className="flex items-center flex-row w-80">
          <img
            className="w-16 h-auto mr-5 rounded-xl"
            src={file ? URL.createObjectURL(file) : `${uploadLogo}`}
            alt="user_avatar"
          />
          <label
            className="w-full cursor-pointer hover:text-amber-400 duration-300"
            htmlFor="file"
          >
            Upload Your Photo
          </label>
          <input
            className="invisible"
            type="file"
            id="file"
            onChange={(e) => setFile(e.target.files[0])}
          />
        </div>
        <section className="flex flex-row space-x-2  w-full">
          <div className="form-container">
            <label htmlFor="firstName">First Name</label>
            <input
              autoComplete="on"
              id="firstName"
              type="firstName"
              onChange={(e) => setFirstName(e.target.value)}
            />
          </div>
          <div className="form-container">
            <label htmlFor="lastName">Last Name</label>
            <input
              autoComplete="on"
              id="lastName"
              type="lastName"
              onChange={(e) => setLastName(e.target.value)}
            />
          </div>
        </section>
        <div className="form-container">
          <label htmlFor="email">Email Address</label>
          <input
            autoComplete="on"
            id="email"
            type="email"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <section className="flex flex-row w-full space-x-2">
          <div className="form-container">
            <label htmlFor="password">Password</label>
            <input
              autoComplete="on"
              id="password"
              type="password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="form-container">
            <label htmlFor="passwordConfirmation">Confirm Password</label>
            <input
              autoComplete="on"
              id="passwordConfirmation"
              type="password"
              onChange={(e) => setPasswordConfirmation(e.target.value)}
            />
          </div>
        </section>
        <section className="flex flex-row w-full space-x-2 *:w-auto">
          <div className="form-container">
            <label htmlFor="country">Country</label>
            <input
              autoComplete="on"
              id="country"
              type="country"
              onChange={(e) => setCountry(e.target.value)}
            />
          </div>
          <div className="form-container">
            <label htmlFor="city">City</label>
            <input
              autoComplete="on"
              id="city"
              type="city"
              onChange={(e) => setCity(e.target.value)}
            />
          </div>
          <div className="form-container w-20">
            <label htmlFor="zip">Postal Code</label>
            <input
              autoComplete="on"
              id="zip"
              type="zip"
              onChange={(e) => setZip(e.target.value)}
            />
          </div>
        </section>
        <div className="form-container">
          <label htmlFor="userName">Your Username</label>
          <input
            autoComplete="on"
            id="userName"
            type="userName"
            onChange={(e) => setUserName(e.target.value)}
          />
        </div>

        <div className="w-full center my-3">
          <button disabled={loading} className="cream-button" type="submit">
            <BorderSvg />
            submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default SignUp;
