import { Link } from "react-router-dom";

function HomePage() {
  const cardDivClasses =
    "flex font-inter backdrop-blur p-3 bg-stone-100/20 flex-col rounded md:text-base flex flex-col justify-center";

  const readMoreClasses = "self-end text-sm hover:text-stone-500 duration-300 mt-2";

  return (
    <div className="m-5 text-sm">
      <div className="flex flex-row justify-between gap-3 hero mb-5">
        <div className="flex basis-1/2 justify-center items-center h-[400px] bg-slate-500 rounded hero-1">
          <img
            src="https://images.unsplash.com/photo-1424847651672-bf20a4b0982b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            className="object-cover w-full h-full rounded hero-img"
          />
        </div>
        <div className="flex flex-col basis-1/2 justify-center h-[400px] py-3">
          <div className="flex px-2 font-inter text-sm md:text-base">
            Unlock the power of our restaurant app to showcase your
            establishment to a wide audience of hungry diners. With our
            easy-to-use platform, you can quickly upload your restaurant
            details, menus, and photos to attract new customers and grow your
            business.
          </div>
          <div className="flex justify-end px-3 py-3">
            <Link className="hover:cursor-pointer px-3  md:text-base md:py-1 md:px-4 bg-scarlet-400 text-white rounded py-1 flex justify-center">
              Learn more
            </Link>
          </div>
        </div>
      </div>
      <div className="flex flex-row justify-between  parent-cards-hp gap-3 text-stone-700  p-3 rounded-lg">
        <div className={cardDivClasses}>
          <p className="text-lg font-medium">Menu Management</p>
          <p className="text-sm">
            Effortlessly manage and update your restaurants menu. Showcase your
            culinary creations with precision and keep your customers informed
            about the latest offerings.
          </p>
          <Link to={"/userRestaurnats"} className={readMoreClasses}>
            Read more
          </Link>
        </div>
        <div className={cardDivClasses}>
          <p className="text-lg font-medium">Menu Management</p>
          <p className="text-sm">
            Effortlessly manage and update your restaurants menu. Showcase your
            culinary creations with precision and keep your customers informed
            about the latest offerings.
          </p>
          <Link className={readMoreClasses}>Read more</Link>
        </div>
        <div className={cardDivClasses}>
          <p className="text-lg font-medium">Menu Management</p>
          <p className="text-sm">
            Effortlessly manage and update your restaurants menu. Showcase your
            culinary creations with precision and keep your customers informed
            about the latest offerings.
          </p>
          <Link className={readMoreClasses}>Read more</Link>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
