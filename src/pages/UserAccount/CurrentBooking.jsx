import ImgOne from "../../assets/queenRoomOne.jpeg";
import ImgTwo from "../../assets/QueenRoomTwo.webp";
import ImgThree from "../../assets/queenRoomThree.jpeg";

const CurrentBooking = () => {
    return (
        <div className="current_booking_container">
            <p>Curent Booking</p>
            <div className="room_info">
                <ul>
                    <li>
                        <span>
                            <img src="" alt="" />
                        </span>
                        <span className="">
                            <p>#0004</p>
                            <p>Queen Room</p>
                        </span>
                    </li>
                    <li>
                        <p>Room Capacity</p>
                        <p>3-4 person</p>
                    </li>
                    <li>
                        <p>Room Type</p>
                        <p>Double</p>
                    </li>
                </ul>
            </div>

            <div className="room_facilities">
                <div>
                    <p>Room Facilities</p>
                    <p>"AC", "Shower", "Bathtub", "Coffee Set", "LED TV", "Double Bed"</p>
                </div>
                <div>
                    <img src={ImgOne} alt="" />
                    <img src={ImgTwo} alt="" />
                    <img src={ImgThree} alt="" />
                </div>
            </div>
        </div>
    );
};

export default CurrentBooking;