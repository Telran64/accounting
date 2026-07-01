import './App.css'
import Guest from "./components/Guest";
import Profile from "./components/Profile";
import {Navigate, Route, Routes} from "react-router";

function App() {
    // TODO: Implement token retrieval from global state logic
    const token = 'fgnjg';

    return (
        <Routes>
            <Route path={'/'} element={token ? <Navigate to={'/profile'} replace/> : <Guest/>}/>
            <Route path={'/profile'} element={token ? <Profile/> : <Navigate to={'/'} replace/>}/>
        </Routes>

    )
}

export default App
