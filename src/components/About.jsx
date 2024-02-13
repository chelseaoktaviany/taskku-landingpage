import screenshot from "../assets/screenshot-app.png";

const About = () => {
  return (
    <div id="about" className="w-full bg-white py-20">
      <div className="md:max-w-[1280px] m-auto grid md:grid-cols-2 sm:max-w-[600px] max-w-[400px] items-center">
        <div className="flex flex-col justify-start gap-4">
          <h1 className="md:leading-[50px] py-2 md:text-4xl text-3xl font-semibold">
            About <span className="text-[#7860C3]">Taskku</span> App
          </h1>
          <h1 className="text-2xl font-bold text-[#4a3b78]">
            #1 Task Management Application
          </h1>
          <p className="leading-[30px] py-1 text-xl text-gray-600">
            Downloaded by over 100 users around the world. Leading users use the
            application to help users managing their tasks to be completed
          </p>
          <div className="max-w-[700px]">
            <a
              href="#"
              className="max-[780px]:w-full p-4 rounded-md bg-[#7860C3] text-[#f4f4f4] font-semibold w-40 flex justify-center items-center gap-4 text-center hover:bg-[#624ba7]"
            >
              Read more
            </a>
          </div>
        </div>
        <img
          src={screenshot}
          className="md:order-last order-first w-[1100px] h-[500px] object-contain"
        />
      </div>
    </div>
  );
};

export default About;
