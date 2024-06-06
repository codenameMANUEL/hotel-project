import "../Homepage/frontpageNav.css"

const BookingFooter = () => {
    return (
        <div className="form_container">
            <form>
                <div className="first_night">
                    <label className="booking_label">FROM</label>
                    <input type="date" />
                </div>
                <div className="last_night">
                    <label className="booking_label">TO</label>
                    <input type="date" />
                </div>
                <div className="guest">
                    <label className="booking_label">GUESTS</label>
                    <input type="number" />
                </div>
                <div className="footer_booking">
                    <button type="button">Book</button>
                </div>
            </form>
        </div>
    )
}

export default BookingFooter;