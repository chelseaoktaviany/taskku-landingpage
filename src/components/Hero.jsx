import heroImg from "../assets/heroimg.png";

const Hero = () => {
  return (
    <div id="home" className="w-full bg-white py-24">
      <div className="m-auto grid max-w-[400px] sm:max-w-[600px] md:max-w-[1280px] md:grid-cols-2">
        <div className="flex flex-col gap-4 md:justify-start">
          <p className="py-2 text-2xl font-bold text-[#7860C3]">TASKKU</p>
          <h1 className="py-2 text-5xl font-semibold md:text-6xl md:leading-[72px]">
            An application that can manage{" "}
            <span className="text-[#7860C3]">100+</span> tasks in a mobile
            device
          </h1>
          <p className="py-2 text-lg text-gray-600">
            There are a few of features in the application
          </p>
          <div className="max-w-[700px]">
            <a
              href="#product"
              className="flex w-40 items-center justify-center gap-4 rounded-md bg-[#7860C3] p-4 text-center font-semibold text-[#f4f4f4] hover:bg-[#624ba7] max-[780px]:w-full"
            >
              Read more
            </a>
          </div>
        </div>
        <img src={heroImg} className="order-first md:order-last" />
      </div>
    </div>
  );
};

export default Hero;
