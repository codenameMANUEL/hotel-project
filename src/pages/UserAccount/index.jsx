import SideBar from "./SideBar.jsx";
import "../UserAccount/userprofile.css";
import Nav from "./UserProfileNav.jsx";
import MainLayout from "./MainLayout.jsx";
import { useState } from "react";

const UserProfile = () => {
    const [selectedView, setSelectedView] = useState("Dashboard");
    return (
        <>
            <div className="layout-wrapper">
            <SideBar setSelectedView={setSelectedView}/>
            <div className="main_content_layout">
                <Nav/>
                <MainLayout selectedView={selectedView}/>
            </div>
            </div>
        </>
    )
}

export default UserProfile;