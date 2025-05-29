import { useState } from "react";
import { useNavigate } from "react-router-dom";
import userLogin from "../../services/userLogin/userLogin";
import Alert from "../../components/alert/Alert";
import useAuth from "../../hooks/useAuth";
import useLocalStorage from "../../hooks/usLocalStorage";

const LoginPage = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isSuccess, setIsSuccess] = useState<boolean>(false);
  const [isError, setIsError] = useState<boolean>(false);
  const { setIsLoggedIn } = useAuth();
  const { setLocalStorageItem } = useLocalStorage();

  const handleLogin = async () => {
    try {
        await userLogin({
            email: email,
            navigate: navigate,
            password: password,
            setIsError: setIsError,
            setIsLoading: setIsLoading,
            setIsSuccess: setIsSuccess,
            setIsLoggedIn: setIsLoggedIn,
            setLocalStorageItem: setLocalStorageItem
        });
    } catch (error) {
        alert('Please enter valid credentails');
        console.log(error);
    }
  };

  return (
    <div>
        {
            isLoading && (
                <div>Loading</div>
            )
        }
        {
            isSuccess && (
                <Alert 
                    isSuccess={true}
                    title="Success"
                    description="Login Successful"
                />
            )
        }
        {
            isError && (
                <Alert
                    isError={true}
                    title="Error"
                    description="Login Failed. Please enter valid details"
                />
            )
        }
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
    </div>
  );
};

export default LoginPage;
