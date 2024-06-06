import CurrentBooking from "./CurrentBooking";
import History from "./History";


export default function MainView({ selectedView }) {
    return (
        <div className="main_content">
            {selectedView === "Dashboard" && <div>
                    <CurrentBooking/>
                </div>}
            {selectedView === "Room" && <div>
                    <History/>
                </div>}
            {selectedView === "Bookings" && <div>Bookings View</div>}
            {selectedView === "Guest" && <div>Guest View</div>}
            {selectedView === "Special Offers" && <div>Special Offers View</div>}
        </div>
    );
}