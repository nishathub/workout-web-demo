import { useContext } from "react";
import { Link, useLocation } from "react-router-dom";
import { EventContext } from "../AuthProvider/AuthProvider";

const Banner = () => {
  const location = useLocation();
  const page = location.pathname;
  const { user } = useContext(EventContext);

  let bannerHeading = "";
  if (page === "/") {
    bannerHeading = "Unlock Your Full Fitness Potential";
  } else if (page === "/Service") {
    bannerHeading = "Now or Never";
  } else if (page === "/Blog") {
    bannerHeading = "Workout Life";
  }
  return (
    <div id="banner">
      <div className="max-w-6xl mx-auto p-8">
        <div className="max-w-md lg:text-7xl text-3xl font-bold tracking-wide">
          {bannerHeading}
        </div>
        <Link
          className={`btn btn-accent capitalize text-lg mt-6 ${!user ? 'inline-flex': 'hidden'}`}
          to={"/Register"}
        >
          Join Now
        </Link>
      </div>
    </div>
  );
};

export default Banner;
