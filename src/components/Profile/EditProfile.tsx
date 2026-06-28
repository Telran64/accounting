import {useState} from "react";

interface Props {
    close: () => void;
}

const EditProfile = ({close}: Props) => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');

    const handleClickSave = () => {
        // TODO: Implement save and close logic
        alert('Save and close clicked');
        close();
    }

    const handleClickClear = () => {
        setFirstName('');
        setLastName('');
    }

    return (
        <>
            <label>First name:
                <input
                    type={'text'}
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                />
            </label>
            <label>Last name:
                <input
                    type={'text'}
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                />
            </label>
            <button onClick={handleClickSave}>Save and Close</button>
            <button onClick={close}>Close without saving</button>
            <button onClick={handleClickClear}>Clear</button>
        </>
    )
}

export default EditProfile;