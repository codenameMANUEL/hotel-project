import ImgOne from "./assets/queenRoomOne.jpeg";
import ImgTwo from "./assets/QueenRoomTwo.webp";
import ImgThree from "./assets/queenRoomThree.jpeg";

import {
    KeyRound,
    LayoutDashboard,
    BookOpenText,
    UserRound,
    Tag
} from 'lucide-react';

export const SIDEBAR_TAG = [
    {
        title: "Dashboard",
        icon: LayoutDashboard
    },
    {
        title: "Room",
        icon: KeyRound
    },
    {
        title: "Bookings",
        icon: BookOpenText
    },
    {
        title: "Guest",
        icon: UserRound
    },
    {
        title: "Special Offers",
        icon: Tag
    }
];

export const CURRENT_BOOKING = [
    {
        userId: 129,
        roomId: 304,
        bedSize: "Queen Room",
        roomCapacity: "3-4 persons",
        roomType: "Double",
        roomFacilities: [
            "AC", "Shower", "Bathtub", "Coffee Set", "LED TV", "Double Bed"
        ],
        currentRoom: [ImgOne, ImgTwo, ImgThree]
    }
];

export const HISTORY_BOOKING = [
    {
        userId: 129,
        roomId: 304,
        bedSize: "Queen Room",
        roomCapacity: "3-4 persons",
        roomType: "Double",
        roomFacilities: [
            "AC", "Shower", "Bathtub", "Coffee Set", "LED TV", "Double Bed"
        ],
        img: ImgOne,
        dateBooked: "Oct 20th 9:00am"
    },
    {
        userId: 229,
        roomId: 304,
        bedSize: "King Room",
        roomCapacity: "3-4 persons",
        roomType: "Double",
        roomFacilities: [
            "AC", "Shower", "Bathtub", "Coffee Set", "LED TV", "Double Bed"
        ],
        img: ImgOne,
        dateBooked: "Oct 20th 9:00am"
    },
    {
        userId: 129,
        roomId: 304,
        bedSize: "Regular",
        roomCapacity: "1 persons",
        roomType: "Double",
        roomFacilities: [
            "AC", "Shower", "Bathtub", "Coffee Set", "LED TV", "Double Bed"
        ],
        img: ImgOne,
        dateBooked: "Oct 20th 9:00am"
    },
    {
        userId: 129,
        roomId: 304,
        bedSize: "Queen Room",
        roomCapacity: "3-4 persons",
        roomType: "Double",
        roomFacilities: [
            "AC", "Shower", "Bathtub", "Coffee Set", "LED TV", "Double Bed"
        ],
        img: ImgOne,
        dateBooked: "Oct 20th 9:00am"
    },
    {
        userId: 129,
        roomId: 304,
        bedSize: "hynnjnmj Room",
        roomCapacity: "3-4 persons",
        roomType: "Double",
        roomFacilities: [
            "AC", "Shower", "Bathtub", "Coffee Set", "LED TV", "Double Bed"
        ],
        img: ImgOne,
        dateBooked: "Oct 20th 9:00am"
    },
];
