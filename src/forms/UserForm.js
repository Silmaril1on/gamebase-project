import React, { useState } from "react";
import UserRegister from "./UserRegister";
import { useDispatch, useSelector } from "react-redux";
import { openUserModal } from "../features/user";
import UserContainer from "./UserContainer";
import { FaCaretDown, FaCaretUp } from "react-icons/fa";

function UserForm() {
  const [user, setUser] = useState([]);
  const [userProfile, setUserProfile] = useState(false);
  const { userModal } = useSelector((store) => store.user);
  const dispatch = useDispatch();

  return (
    <>
      {user.name ? (
        <div
          onClick={() => setUserProfile(!userProfile)}
          className="text-cream cursor-pointer"
        >
          <h1 className="flexRow items-center text-xs md:text-lg">
            {userProfile ? (
              <FaCaretUp className="mr-1" />
            ) : (
              <FaCaretDown className="mr-1" />
            )}
            {user.name}
          </h1>
          <h5 className="text-xs text-end font-primary text-cream">
            {user.email}
          </h5>
        </div>
      ) : (
        <section
          onClick={() => dispatch(openUserModal())}
          className="text-white w-auto md:w-20 cursor-pointer"
        >
          <h1 className="text-cream">sign in</h1>
        </section>
      )}
      {userModal && <UserRegister setUser={setUser} user={user} />}
      {userProfile && <UserContainer setUserProfile={setUserProfile} />}
    </>
  );
}

export default UserForm;
