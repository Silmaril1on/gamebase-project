import React, { useState } from "react";
import CloseButton from "../components/CloseButton";
import { useDispatch } from "react-redux";
import { closeUserModal } from "../features/user";
import FormikForm from "./FormikForm";
import WelcomeUser from "./WelcomeUser";
import { motion } from "framer-motion";
import { fadeOut200 } from "../framerMotionValues/motionValues";

function UserRegister({ setUser, user }) {
  const [formUser, setFormUser] = useState(false);

  const dispatch = useDispatch();
  return (
    <motion.section
      variants={fadeOut200}
      initial="hidden"
      animate="visible"
      className="fixed w-full z-10 h-full flex justify-end bg-psBack bg-center bg-cover left-0 top-0"
    >
      <div className="bg-400 flexCol items-end w-full md:w-2/4 h-full backdrop-blur-md">
        <CloseButton onClick={() => dispatch(closeUserModal())} />
        {formUser ? (
          <WelcomeUser user={user} />
        ) : (
          <FormikForm setUser={setUser} setFormUser={setFormUser} />
        )}
        <h1 className="text-blue-500 w-full text-center mb-2 font-primary">
          Help/Site Map
        </h1>
      </div>
    </motion.section>
  );
}

export default UserRegister;
