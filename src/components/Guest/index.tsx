import {useState} from "react";
import SignIn from "./SignIn.tsx";
import SignUp from "./SignUp.tsx";

const Guest = () => {
    const [isSignIn, setIsSignIn] = useState(true);

    return (
        <div>
            {isSignIn ? <SignIn/> : <SignUp/>}
            <button onClick={() => setIsSignIn(!isSignIn)}>
                Switch to {isSignIn ? "Sign Up" : "Sign In"}
            </button>
        </div>
    )
}

export default Guest;