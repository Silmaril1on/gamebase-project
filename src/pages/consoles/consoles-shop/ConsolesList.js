import React, { useEffect } from "react";
import { getConsoles } from "../../../features/consolesSlice";
import { useSelector, useDispatch } from "react-redux";
import ConsolesCard from "./ConsolesCard";

function ConsolesList() {
  const { consolesData } = useSelector((store) => store.consoles);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getConsoles());
  }, [dispatch]);

  return (
    <div className="grid grid-cols-2 md:grid-cols-8 gap-1 justify-items-center">
      {consolesData.map((item) => {
        return <ConsolesCard key={item.id} {...item} item={item} />;
      })}
    </div>
  );
}

export default ConsolesList;
