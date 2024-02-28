import { useState } from "react";

const Newsletter = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email);
  };

  return (
    <div id="newsletter" className="w-full bg-white py-24">
      <div className="m-auto max-w-[400px] sm:max-w-[600px] md:max-w-[1280px]">
        <h1 className="py-2 text-center text-2xl font-bold text-[#7860C3]">
          Stay Updated with Taskku App
        </h1>
        <p className="text-center text-lg text-gray-800">
          Subscribe to our newsletter for the latest updates.
        </p>
        <div className="flex flex-col items-center justify-center py-8">
          <form onSubmit={handleSubmit}>
            <input
              className="rounded-xl border border-gray-400 px-4 py-2 placeholder:italic placeholder:text-gray-700 max-[780px]:w-full md:w-[400px]"
              type="email"
              name="email"
              placeholder="Enter your e-mail address"
              onChange={(e) => setEmail(e.target.value)}
            />
            <button
              className="my-5 rounded-xl bg-[#7860C3] px-12 py-2 text-center font-semibold text-[#f4f4f4] hover:bg-[#624ba7] max-[780px]:w-full md:mx-3"
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
