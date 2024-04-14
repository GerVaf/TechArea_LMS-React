import { Link } from "react-router-dom";
import BetterChange from "@/assets/better-change-text-logo.png";

const Logo = () => {
  return (
    <Link to="/" className="flex items-center gap-2">
      {/* <img src={"/logo.svg"} alt="logo" className="h-[50px] object-cover" />
      <p className="text-base">Better Change</p> */}
      <img src={BetterChange} alt="logo" className="w-[170px]" />
    </Link>
  );
};

export default Logo;
