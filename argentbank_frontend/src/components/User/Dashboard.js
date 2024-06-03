import {AccountCard} from "./AccountCard";
import store from "../../store";
import {useEffect, useState} from "react";
import { postUsernameChange} from "../../features/authActions";
import {useDispatch, useSelector} from "react-redux";
import {useNavigate} from "react-router-dom";

export default function Dashboard() {
    const dispatch = useDispatch()
    const [userName, setUsername] = useState('');
    const firstName = store.getState().auth?.firstName?.payload?.firstName
    const lastName = store.getState().auth?.lastName?.payload?.lastName
    const [isEditFormVisible, setEditFormVisible] = useState(false);

    const isAuthenticated = store.getState().auth.isAuthenticated
    const navigate = useNavigate();
    useEffect(() => {
        if (!isAuthenticated) {
            navigate("/")
        }
    })

    function displayEditNameForm() {
        setEditFormVisible(true);
    }

    function closeEditNameForm() {
        setEditFormVisible(false);
    }

    function handleUsername(e) {
        e.preventDefault()
        dispatch(postUsernameChange(userName))
    }

    return (
        <main className="main bg-dark">
            <div className="header">
                <h1>Welcome back<br/>{firstName} {lastName}</h1>
                {!isEditFormVisible && (
                    <button onClick={displayEditNameForm} className="edit-button">Edit Name</button>
                )}
                {isEditFormVisible && (
                    <div className={"editusername"}>
                        <form>
                            <div className={"form-field"}>
                                <label htmlFor={"username"}>User name:</label>
                                <input id={"username"} type={"text"} value={userName}
                                       onChange={(e) => setUsername(e.target.value)}/>
                            </div>
                            <div className={"form-field"}>
                                <label htmlFor={"firstname"}>First name:</label>
                                <input id={"firstname"} placeholder={firstName} type={"text"} disabled></input>
                            </div>
                            <div className={"form-field"}>
                                <label htmlFor={"lastname"}>Last name:</label>
                                <input id={"lastname"} placeholder={lastName} type={"text"} disabled></input>
                            </div>
                            <div className={"form-buttons"}>
                                <button type="button" onClick={closeEditNameForm} className="sign-in-button">Cancel
                                </button>
                                <button type="submit" onClick={handleUsername} className="sign-in-button">Save</button>
                            </div>
                        </form>
                    </div>
                    )}
            </div>
            <h2 className="sr-only">Accounts</h2>
            <AccountCard accountId={"8349"} type={"Checking"} balance={"2,082.79"}/>
            <AccountCard accountId={"6712"} type={"Savings"} balance={"10,928.42"}/>
            <AccountCard accountId={"8349"} type={"Credit Card"} balance={"184.30"}/>
        </main>
    )
}
