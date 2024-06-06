import { SIDEBAR_TAG } from "../../mockData.js";
import TabViews from './TabViews.jsx';


const SideBar = ({ setSelectedView}) => {

    const handleClick = (title) => {
        console.log(`${title} clicked`);
        setSelectedView(title);
    }

    return (
        <div className="sidebar_container">
            <div>
                <ul>
                    <div className="initials">
                        <p>E</p>
                    </div>
                    {SIDEBAR_TAG.map((data, index) => (
                        <TabViews 
                            key={index} 
                            onClick={() => handleClick(data.title)} 
                            icon={data.icon} 
                            title={data.title} 
                        />
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default SideBar;