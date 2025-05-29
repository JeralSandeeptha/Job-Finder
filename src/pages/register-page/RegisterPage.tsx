import { useState } from "react";
import { roles } from "../../constants/role.constants";
import { collection, addDoc } from "firebase/firestore"; 
import { auth, db } from "../../config/firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import getUser from "../../services/getUser/getUser";

const RegisterPage = () => {

    // const [isLoading, setIsLoading] = useState<boolean>(false);
    // const [isSuccess, setIsSuccess] = useState<boolean>(false);
    // const [isError, setIsError] = useState<boolean>(false);
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [role, setRole] = useState<string>('');

    const usersCollection = collection(db, "users");

    const handleRegister = async () => {
        const newUser = { email, password, role };
        try {
            const data = await getUser({
                email
            });
            console.log(data);
            if (data && data.hasUser) {
                alert('User Already Exist');
            }
            await createUserWithEmailAndPassword(auth, email, password);
            await addDoc(usersCollection, newUser); 
            setPassword('');
            setEmail('');
            setRole('');
            alert("User Registered!");
        } catch (error) {
            console.log(error);
            alert('Please try again');
        }
    }

    return (
        <div>
            <input type="text" name="email" value={email} onChange={(e) => setEmail(e.target.value)} />
            <input type="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} />
            <select name="role" id="role" value={role} onChange={(e) => setRole(e.target.value)}>
                <option value="">Select Role</option>
                {
                    roles.map((role) => {
                        return (
                            <option key={role.id} value={role.role}>{role.role}</option>
                        )
                    })
                }
            </select>
            <button onClick={handleRegister}>Register</button>
        </div>
    );

}

export default RegisterPage;