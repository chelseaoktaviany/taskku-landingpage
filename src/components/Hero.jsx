import heroImg from "../assets/heroimg.png";

const Hero = () => {
  return (
    <div id="home" className="w-full bg-white py-24">
      <div className="md:max-w-[1280px] m-auto grid md:grid-cols-2 sm:max-w-[600px] max-w-[400px]">
        <div className="flex flex-col md:justify-start gap-4">
          <p className="py-2 text-2xl text-[#7860C3] font-bold">TASKKU</p>
          <h1 className="md:leading-[72px] py-2 md:text-6xl text-5xl font-semibold">
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
              className="max-[780px]:w-full p-4 rounded-md bg-[#7860C3] text-[#f4f4f4] font-semibold w-40 flex justify-center items-center gap-4 text-center hover:bg-[#624ba7]"
            >
              Read more
            </a>
          </div>
        </div>
        <img src={heroImg} className="md:order-last order-first" />
      </div>
    </div>
  );
};

export default Hero;
