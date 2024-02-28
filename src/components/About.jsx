import screenshot from "../assets/screenshot-app.png";

const About = () => {
  return (
    <div id="about" className="w-full bg-white py-20">
      <div className="m-auto grid max-w-[400px] items-center sm:max-w-[600px] md:max-w-[1280px] md:grid-cols-2">
        <div className="flex flex-col justify-start gap-4">
          <h1 className="py-2 text-3xl font-semibold md:text-4xl md:leading-[50px]">
            About <span className="text-[#7860C3]">Taskku</span> App
          </h1>
          <h1 className="text-2xl font-bold text-[#4a3b78]">
            #1 Task Management Application
          </h1>
          <p className="py-1 text-xl leading-[30px] text-gray-600">
            Downloaded by over 100 users around the world. Leading users use the
            application to help users managing their tasks to be completed
          </p>
          <div className="max-w-[700px]">
            <a
              href="#"
              className="flex w-40 items-center justify-center gap-4 rounded-md bg-[#7860C3] p-4 text-center font-semibold text-[#f4f4f4] hover:bg-[#624ba7] max-[780px]:w-full"
            >
              Read more
            </a>
          </div>
        </div>
        <img
          src={screenshot}
          className="order-first h-[500px] w-[1100px] object-contain md:order-last"
        />
      </div>
    </div>
  );
};

export default About;
