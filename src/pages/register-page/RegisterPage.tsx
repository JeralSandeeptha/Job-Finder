import { useState } from "react";
import { roles } from "../../constants/role.constants";
import registerUser from "../../services/registerUser/registerUser";
import { useNavigate } from "react-router-dom";
import Alert from "../../components/alert/Alert";

const RegisterPage = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [role, setRole] = useState<string>("");
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isSuccess, setIsSuccess] = useState<boolean>(false);
  const [isError, setIsError] = useState<boolean>(false);

  const handleRegister = async () => {
    const trimmedEmail = email.trim();
    const trimmedPassword = password.trim();
    const trimmedRole = role.trim();
    if (
      trimmedEmail.length === 0 ||
      trimmedPassword.length === 0 ||
      trimmedRole.length === 0
    ) {
      alert("Please Enter Valid Details");
    } else {
      await registerUser({
        email: email,
        navigate: navigate,
        password: password,
        role: role,
        setEmail: setEmail,
        setIsError: setIsError,
        setIsLoading: setIsLoading,
        setIsSuccess: setIsSuccess,
        setPassword: setPassword,
        setRole: setRole,
      });
    }
  };

  return (
    <div>
      {isLoading && <div>Loading</div>}
      {isSuccess && (
        <Alert
          isSuccess={true}
          title="Success"
          description="Login Successful"
        />
      )}
      {isError && (
        <Alert
          isError={true}
          title="Error"
          description="Login Failed. Please enter valid details"
        />
      )}
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
      <select
        name="role"
        id="role"
        value={role}
        onChange={(e) => setRole(e.target.value)}
      >
        <option value="">Select Role</option>
        {roles.map((role) => {
          return (
            <option key={role.id} value={role.role}>
              {role.role}
            </option>
          );
        })}
      </select>
      <button onClick={handleRegister}>Register</button>
    </div>
  );
};

export default RegisterPage;
