import React from "react";
import { useSelector } from "react-redux";

function UserProfile() {
  const { userProfile } = useSelector((store) => store.user);

  return (
    <div className="">
      <div className="w-72 h-auto">
        <img src={userProfile[0]?.image} alt="" />
      </div>
      <h1>first name: {userProfile[0]?.firstName}</h1>
      <h1>last name: {userProfile[0]?.lastName}</h1>
      <h1>email: {userProfile[0]?.email}</h1>
      <h1>Region: {userProfile[0]?.country}</h1>
      <h1>city: {userProfile[0]?.city}</h1>
      <h1>postal code: {userProfile[0]?.zip}</h1>
      <h1>username: {userProfile[0]?.userName}</h1>
    </div>
  );
}

export default UserProfile;
