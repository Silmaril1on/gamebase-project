import React, { useState } from "react";
import CloseButton from "../../../../components/CloseButton";
import { useDispatch } from "react-redux";
import { closeModal } from "../../../../features/gamesSlice";
import BugForm from "./BugForm";
import BugSubmited from "./BugSubmited";

function BugPanel() {
  const dispatch = useDispatch();
  const [submited, setSubmited] = useState(true);
  return (
    <div className="fixed z-6 top-0 left-0 w-full h-full bg-black/60 center">
      <section className="w-2/4 h-[450px] center flex-col bg-black">
        <div className="flex justify-end w-full">
          <CloseButton onClick={() => dispatch(closeModal())} />
        </div>

        {submited ? <BugForm setSubmited={setSubmited} /> : <BugSubmited />}
      </section>
    </div>
  );
}

export default BugPanel;
