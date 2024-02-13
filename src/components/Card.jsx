import StarRating from "./StarRating";

const Card = ({ name, role, image, star, comment }) => {
  return (
    <div className="bg-white drop-shadow-md rounded-2xl w-[300px] h-[350px]">
      <div className="p-5">
        <img
          src={image}
          className="my-2 h-[100px] w-[100px] object-cover rounded-full m-auto"
          alt={name}
        />
        <div className="py-2 text-center">
          <p>{name}</p>
        </div>
        <div className="py-0 text-center italic text-gray-900">
          <p>{role}</p>
        </div>
        <StarRating rating={star} />
        <div className="p-2 flex justify-center items-center">
          <p className="text-center italic">&quot;{comment}&quot;</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
