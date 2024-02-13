import { useState } from "react";

const Newsletter = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email);
  };

  return (
    <div id="newsletter" className="w-full bg-white py-24">
      <div className="md:max-w-[1280px] sm:max-w-[600px] max-w-[400px] m-auto">
        <h1 className="py-2 text-2xl text-[#7860C3] font-bold text-center">
          Stay Updated with Taskku App
        </h1>
        <p className="text-lg text-gray-800 text-center">
          Subscribe to our newsletter for the latest updates.
        </p>
        <div className="py-8 flex flex-col justify-center items-center">
          <form onSubmit={handleSubmit}>
            <input
              className="px-4 py-2 rounded-xl border border-gray-400 max-[780px]:w-full md:w-[400px] placeholder:italic placeholder:text-gray-700"
              type="email"
              name="email"
              placeholder="Enter your e-mail address"
              onChange={(e) => setEmail(e.target.value)}
            />
            <button
              className="max-[780px]:w-full md:mx-3 my-5 px-12 py-2 rounded-xl bg-[#7860C3] text-[#f4f4f4] hover:bg-[#624ba7] font-semibold text-center"
              type="submit"
              onClick={handleSubmit}
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
