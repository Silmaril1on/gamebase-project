import React from "react";

function Form({ setUser, setFormUser }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const newUser = Object.fromEntries(formData);
    setUser(newUser);
    setFormUser(true);
    e.currentTarget.reset();
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full child:flexCol space-y-3 text-white flexCol h-full items-center justify-center"
    >
      <h1 className="font-primary uppercase tracking-wide text-2xl font-semibold">
        Sign-in to GAMEBASE
      </h1>
      <section className="h-auto child:flexCol w-8/12 md:w-2/5">
        <div className="my-2">
          <input
            placeholder="enter your username"
            className="form-style"
            type="name"
            name="name"
            id="name"
          />
        </div>
        <div className="my-2">
          <input
            placeholder="enter your email"
            className="form-style"
            type="email"
            name="email"
            id="email"
          />
        </div>
      </section>
      <h3 className="text-blue-500 font-secondary capitalize font-light hover:underline-offset-2 hover:underline cursor-pointer">
        About GAMEBASE account
      </h3>
      <h3 className="text-blue-500 font-secondary capitalize font-light hover:underline-offset-2 hover:underline cursor-pointer">
        Trouble Signing In?
      </h3>
      <button className="primary-button mt-5" type="submit">
        create an account
      </button>
    </form>
  );
}

export default Form;
