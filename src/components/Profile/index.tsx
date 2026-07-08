import ProfileData from "./ProfileData.tsx";
import UpdateUser from "./UpdateUser.tsx";
import {useAppDispatch} from "../../app/hooks.ts";
import {clearToken} from "../../features/token/tokenSlice.ts";

const Profile = () => {
    const dispatch = useAppDispatch();

    return (
        <div>
            <ProfileData />
            <button onClick={() => dispatch(clearToken())}>Logout</button>
            <UpdateUser />
        </div>
    )
}

export default Profile;