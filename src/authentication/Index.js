import React, { useState } from "react";
import CloseButton from "../components/CloseButton";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import Registration from "./registration/Registration";
import WelcomeUser from "./WelcomeUser";

function Index() {
  const [loading, setLoading] = useState(false);
  const { userReg } = useSelector((store) => store.user);
  const navigate = useNavigate("/");

  return (
    <main className="bg-psBack w-full h-screen absolute top-0 z-5 text-cream font-primary">
      <section className="w-2/4 h-full bg-400 backdrop-blur-md center flex-col">
        <CloseButton onClick={() => navigate("/")} />
        {userReg && userReg.email ? (
          <WelcomeUser />
        ) : (
          <Registration loading={loading} setLoading={setLoading} />
        )}
      </section>
    </main>
  );
}

export default Index;
