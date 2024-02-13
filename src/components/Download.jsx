import TaskkuApp from "../assets/taskku.png";
// import AppStore from "../assets/svg/appstore.svg";

const Download = () => {
  return (
    <div id="download" className="w-full bg-white py-24">
      <div className="md:max-w-[1280px] m-auto grid md:grid-cols-2 sm:max-w-[600px] max-w-[400px] items-center">
        <div className="flex flex-col justify-start gap-4">
          <h1 className="md:leading-[50px] py-2 md:text-4xl text-3xl font-semibold">
            Start experincing our new application called{" "}
            <span className="text-[#7860C3]">Taskku</span> App
          </h1>
          <p className="leading-[30px] py-1 text-xl text-gray-600">
            There are a few of features in the application. This boosts
            productivity and time management for developers, freelancers and
            other roles
          </p>
          <div className="max-w-[700px]">
            {/* <a href="#">
              <img src={AppStore} />
            </a> */}
            <p className="text-xl">Coming soon...</p>
          </div>
        </div>
        <img
          src={TaskkuApp}
          className="md:order-last order-first w-[1100px] h-[500px] object-contain"
        />
      </div>
    </div>
  );
};

export default Download;
