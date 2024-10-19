import { Central as Layout } from "@/layouts";
import './NotFound.style.scss';
import { Link } from "react-router-dom";
function NotFound() {
  return (
    <Layout title={"Page Not Found"}>
      <h1 className="text-404">404! Are you sure thats what you're looking for?</h1>
      <Link to={"/"}>
        <h2 className="home-text">Click me to go home!</h2>
      </Link>
    </Layout>
  );
}

export default NotFound;
