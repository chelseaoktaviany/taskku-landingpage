import StarRating from "./StarRating";

const Card = ({ name, role, image, star, comment }) => {
  return (
    <div className="h-[350px] w-[300px] rounded-2xl bg-white drop-shadow-md">
      <div className="p-5">
        <img
          src={image}
          className="m-auto my-2 size-[100px] rounded-full object-cover"
          alt={name}
        />
        <div className="py-2 text-center">
          <p>{name}</p>
        </div>
        <div className="py-0 text-center italic text-gray-900">
          <p>{role}</p>
        </div>
        <StarRating rating={star} />
        <div className="flex items-center justify-center p-2">
          <p className="text-center italic">&quot;{comment}&quot;</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
