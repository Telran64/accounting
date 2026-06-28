import {useState} from "react";
import EditProfile from "./EditProfile.tsx";
import ChangePassword from "./ChangePassword.tsx";
import {UPDATE_MODE_CHANGE_PASSWORD, UPDATE_MODE_DEFAULT, UPDATE_MODE_EDIT_PROFILE} from "../../utils/constants.ts";

const UpdateUser = () => {
    const [updateMode, setUpdateMode] = useState(UPDATE_MODE_DEFAULT);

    const close = () => {
        setUpdateMode(UPDATE_MODE_DEFAULT);
    }

    switch (updateMode) {
        case UPDATE_MODE_EDIT_PROFILE:
            return <EditProfile close={close}/>
        case UPDATE_MODE_CHANGE_PASSWORD:
            return <ChangePassword close={close}/>
        default:
            return (
                <div>
                    <button onClick={() => setUpdateMode(UPDATE_MODE_EDIT_PROFILE)}>Edit profile</button>
                    <button onClick={() => setUpdateMode(UPDATE_MODE_CHANGE_PASSWORD)}>Change password</button>
                </div>
            )
    }
}

export default UpdateUser;