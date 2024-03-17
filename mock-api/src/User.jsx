import { useState } from "react";
import { useUser } from "./UserProvider";

export default function User() {
    const { user, setUser } = useUser();
    const [tempUser, setTempUser] = useState("");

    const handleButtonClick = () => {
        setUser(tempUser); 
    };

    return (
        <div>
            <input
                type="text"
                value={tempUser}
                onChange={(e) => setTempUser(e.target.value)} 
            />
            <button onClick={handleButtonClick}>Set User</button>
        </div>
    );
}