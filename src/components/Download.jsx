import TaskkuApp from "../assets/taskku.png";
// import AppStore from "../assets/svg/appstore.svg";

const Download = () => {
  return (
    <div id="download" className="w-full bg-white py-24">
      <div className="m-auto grid max-w-[400px] items-center sm:max-w-[600px] md:max-w-[1280px] md:grid-cols-2">
        <div className="flex flex-col justify-start gap-4">
          <h1 className="py-2 text-3xl font-semibold md:text-4xl md:leading-[50px]">
            Start experincing our new application called{" "}
            <span className="text-[#7860C3]">Taskku</span> App
          </h1>
          <p className="py-1 text-xl leading-[30px] text-gray-600">
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
          className="order-first h-[500px] w-[1100px] object-contain md:order-last"
        />
      </div>
    </div>
  );
};

export default Download;
