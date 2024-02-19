import React from "react";
import LogoTwo from "../../../components/LogoTwo";
import Regions from "../../regions/Regions";
import Socials from "../../../components/Socials";
import UserForm from "../../../forms/UserForm";
import { FaBug } from "react-icons/fa";
import SideButton from "../mobile/SideButton";
import { useNavigate } from "react-router-dom";

function NavigationHeader() {
  const navigate = useNavigate();

  const goToPage = () => {
    navigate("/");
  };

  return (
    <header className="flex font-tetriary flex-row p-1 items-center justify-between">
      <SideButton />
      <div
        onClick={goToPage}
        className="cursor-pointer w-10 h-10 ml-14 md:ml-0"
      >
        <LogoTwo />
      </div>

      <div className="hidden md:flexRow items-center justify-between w-full">
        <section className="w-auto h-10 flexRow items-center">
          <div className="w-full ml-2 hidden md:block">
            <Regions />
          </div>
        </section>

        <section className="flexRow">
          <div className="flexRow items-center text-cream cursor-pointer">
            <FaBug className="mr-2" />
            <h1 className="text-xs">report a bug</h1>
          </div>
          <div className="hidden md:flex items-center">
            <Socials />
          </div>
        </section>
      </div>

      <UserForm />
    </header>
  );
}

export default NavigationHeader;
