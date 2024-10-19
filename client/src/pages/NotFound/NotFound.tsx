import { Central as Layout } from "@/layouts";
import "./NotFound.style.scss";
import { Link } from "react-router-dom";
function NotFound() {
  return (
    <Layout title={"Page Not Found"}>
      <h1>404! Are you sure thats what you're looking for?</h1>
      <Link to={"/"}>
        <h2 className=" underline text-blue-300">Click me to go home!</h2>
      </Link>
    </Layout>
  );
}

export default NotFound;
