import {
    Search,
    Heart,
    Bell,
    MessageSquareText 
} from 'lucide-react';
import "../UserAccount/userprofile.css";


export default function UserProfileNav() {
    return (
        <div className="user_profile_nav">
            <div className='welcome'>
                <p>Welcome back, Emma!</p>
            </div>
            <div className='search_bar'>
                <div className='search_container'>
                    <input type='search' placeholder="Search" />
                    <Search className='search_icon' />
                </div>
            </div>
            <div className='right_nav'>
                <Heart className='mail_icon' />
                <Bell className='mail_icon' />
                <MessageSquareText className='mail_icon' />
                <div className='profile_container'>
                    <img src="https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" />
                </div>
            </div>
        </div>

    )
}