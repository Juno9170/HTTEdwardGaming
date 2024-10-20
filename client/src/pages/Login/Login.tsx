import { useState } from "react";
import { useAccountContext } from "../../context";
import { Base as Layout } from "@/layouts";
import "./Login.style.scss";
import { Button } from "@/components/ui/button"

function Login() {
  const [message, setMessage] = useState(null);
  const { login } = useAccountContext();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const attemptLogin = async () => {
    try {
      const message = await login(username, password); // Use the username and password state here
      setMessage(message);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Layout>
      <div className="Login"></div>
      <div className="Login__panel">
        <div className="Login__panel__content">
          <img src="/carleton_logo_black.png" alt="Carleton logo"></img>
          <div className="Login__panel__content__message">
            <div>Welcome to the Carleton SSO Federated Portal.</div>
            <div>
              Enter your{" "}
              <a href="https://myone.carleton.ca" target="_blank" rel="noopener noreferrer">
                MyCarletonOne
              </a>{" "}
              username and password.
            </div>
          </div>
          {message && <p className="my-2 text-red-600">{message}</p>}
          <div className="Login__panel__content__input">
            <input
              type="text"
              placeholder="MyCarletonOne username"
              value={username}
              onChange={(e) => setUsername(e.target.value)} // Sync with username state
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)} // Sync with password state
            />
          </div>
          <div className="Login__panel__content__checkbox">
            <input type="checkbox" />
            <label>Keep me signed in</label>
          </div>
          <Button onClick={attemptLogin} className="text-[0.9rem] bg-[#2672ec] hover:bg-[#6ca1f6] active:bg-black  text-white">Sign In</Button>
        </div>
      </div>
    </Layout>
  );
}
export default Login;
