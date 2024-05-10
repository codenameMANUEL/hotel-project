import { AlignLeft, Tally1  } from 'lucide-react';
import '../pages/banner.css'
import video from "../assets/welcome_video.mp4"
import './contentbody.css';
import imageOne from '../assets/row1_imgOne.jpeg';
import pool from '../assets/pool.jpeg';
import wine from '../assets/wine.webp'
import spa from '../assets/spa.webp'
import spaCare from '../assets/spaCare.webp'
import twoPlate from '../assets/twoPlate.webp'
import sihoutte from '../assets/sihoutte.webp'
import poolview from '../assets/poolView.jpeg'

const Banner = () => {
    return (
        <>
            <div className="home">
            <nav>
                <div className='nav_left'>
                    <ul>
                        <li>
                            <AlignLeft />
                        </li>
                        <li>
                            |
                        </li>
                        <li>
                            <p>Regular</p>
                        </li>
                        <li>
                            <p>Spa</p>
                        </li>
                        <li>
                            <p>Dinning</p>
                        </li>
                    </ul>
                </div>
                <div className='nav_center'>
                    <p>Blissful</p>
                    <p>Oasis</p>
                </div>
                <div className='nav_right'>
                    <button className="btn-68">Book With Us</button>
                </div>
            </nav>
            <div className="banner-video">
                <video autoPlay loop muted width="1920" height="1080">
                    <source src={video} type="video/mp4"/>
                </video>
            </div>
            <div className="content">
                <p>Serenity Haven</p>
                <h1> Discover the Essence of Bliss</h1>
                <div className='separator'>|</div>
                <button>Explore our rooms</button>
            </div>
        </div>
        <div className='content_body'>
            <div className='warm_intro_text'>
                <h1>Our haven, where passion yields.</h1>
                <p>Here, time dances to the rhythm of our hearts, each beat synchronizing with the soft rustle of leaves in the gentle breeze. As the sun sets, casting hues of gold and pink across the sky, we find ourselves enveloped in the warm embrace of love's embrace.
                    As night falls and the stars sprinkle the sky with their luminous glow, our haven becomes a sanctuary of dreams, where our love knows no bounds. And in the quietude of the night, we find ourselves lost in the beauty of this shared moment, grateful for the sanctuary of passion that we have built together.
                </p>
            </div>
            <div className='VisualNarrative'>
                <div className='VisualNarrative_img'>
                    <img src={imageOne} alt="" />
                </div>
                <div className='VisualNarrative_text'>
                    <div>
                        <h1>Luxuriate in Begur's Elegance and Convenience</h1>
                        <p>Embark on a journey of indulgence in Bliss Oasis, where elegance and convenience intertwine seamlessly. From luxurious accommodations to effortless amenities, every moment promises refined pleasures amidst stunning coastal beauty. Whether dining at our exquisite restaurants or exploring our charming hotels, we guarantee a sanctuary where luxury awaits at every turn.</p>
                        <p>explore now</p>
                    </div>
                </div>      
            </div>
            <div className='pool_view'>
                <img src={pool} alt="" />
                <h1>Elegance is discovered in the finer points</h1>
                <p>Find the perfect balance of luxury and tranquility at Oasis Bliss, where unforgettable experiences await. At Oasis Bliss, embrace the serene, cosmopolitan essence for ultimate relaxation.</p>
                <button>BOOK NOW</button>
            </div>

            <div className='our_options'>
                <div className='our_options_frame_one'>
                    <img src={wine} alt="" />
                    <h1>Fine Dining</h1>
                    <p>Indulge in our restaurant's culinary excellence, where each dish is a masterpiece. Elevate your dining experience with flavors crafted to perfection, promising unforgettable moments of delight.</p>
                    <p>explore now</p>
                </div>
                <div className='our_options_frame_two'>
                    <img src={spa} alt="" />
                    <h1>spa</h1>
                    <p>Embark on a journey of tranquility at our luxurious spa sanctuary. Experience unparalleled relaxation with our expertly crafted treatments and serene ambiance, providing a haven for rejuvenation and renewal. Escape the everyday hustle and embrace a world of serenity and indulgence.</p>
                    <p>explore now</p>
                </div>
            </div>

            <div className='image_row'>
                <div>
                    <img src={twoPlate} alt="" />
                </div>
                <div>
                    <img src={spaCare} alt="" />
                </div>
                <div>
                    <img src={poolview} alt="" />
                </div>
                <div>
                    <img src={sihoutte} alt="" />
                </div>
            </div>
        </div>
        </>
    );
};

export default Banner;