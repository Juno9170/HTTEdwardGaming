import { Link } from "react-router-dom";
import "./HeaderLinks.style.scss";
import { useAccountContext } from "@/context";
import { CornerUpLeft, Map, Info, LogOut } from "lucide-react";

function HeaderLinks() {
  const { logout } = useAccountContext();
  return (
    <div className="HeaderLinks">
      <CornerUpLeft width={'12px'}/>
      <Link to={"/"}>Return To Menu</Link>|
      <Map width={"12px"}/>
      <Link to={"/sitemap"}>Site Map</Link>
      |
      <Info width={"12px"}/>
      <Link to={"/help"}>Help</Link>|
      <LogOut width={"12px"}/>
      <Link to={"/login"}>
        <span onClick={() => logout()}>Logout</span>
      </Link>
    </div>
  );
}

export default HeaderLinks;
