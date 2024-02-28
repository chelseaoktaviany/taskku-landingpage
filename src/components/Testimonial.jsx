import Card from "../components/Card";

const data = [
  {
    id: 1,
    name: "Alexa Doe",
    role: "Web Developer",
    image:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&dl=aiony-haust-3TLl_97HNJo-unsplash.jpg",
    star: 5,
    comment: "This application is useful for boosting my productivity",
  },
  {
    id: 2,
    name: "Ian",
    role: "Video Editor",
    image:
      "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&dl=ian-dooley-d1UPkiFd04A-unsplash.jpg",
    star: 4,
    comment:
      "This makes it easy to create tasks and also helps with my productivity",
  },
  {
    id: 3,
    name: "Nicole",
    role: "Accountant",
    image:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&dl=jake-nackos-IF9TK5Uy-KI-unsplash.jpg",
    star: 5,
    comment: "This is actually perfect application for creating to do list",
  },
];

const Testimonial = () => {
  return (
    <div id="testimonial" className="w-full bg-[#dbd8ec] py-24">
      <div className="m-auto max-w-[400px] sm:max-w-[600px] md:max-w-[1280px]">
        <p className="py-2 text-center text-2xl font-bold text-[#7860C3]">
          Hear What Our Users Say
        </p>
        <p className="text-center text-lg text-gray-600">
          Discover why users love Taskku app
        </p>
        <div className="flex justify-center py-7">
          <div className="grid items-center gap-10 md:grid-cols-3">
            {data.map((item) => (
              <Card
                key={item.id}
                name={item.name}
                role={item.role}
                image={item.image}
                star={item.star}
                comment={item.comment}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
