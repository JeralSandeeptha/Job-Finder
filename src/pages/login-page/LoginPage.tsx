import { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../config/firebase";
import getUser from "../../services/getUser/getUser";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const navigate = useNavigate();
  // const [isLoading, setIsLoading] = useState<boolean>(false);
  // const [isSuccess, setIsSuccess] = useState<boolean>(false);
  // const [isError, setIsError] = useState<boolean>(false);

  const handleLogin = async () => {
    try {
        const userCredential = await signInWithEmailAndPassword(auth, email, password);
        console.log(userCredential);
        const data = await getUser({
          email,
        });
        console.log(data);
        alert('Login Successful');
        navigate('/');
    } catch (error) {
        alert('Please enter valid credentails');
        console.log(error);
    }
  };

  return (
    <div>
      <input
        type="text"
        name="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        name="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default LoginPage;
