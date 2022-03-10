import React from 'react';
import footer from './Footer.css';
import map from '../images/map.png';

const Footer = () => {
    return (
        <div className='bg-dark py-5'>
            <div className='row  text-white pt-5 mx-auto '>
                <div className=' col-md-3 mx-auto'>
                    <h5 className=''>ABOUT US</h5>
                    <h6 className='' >Objectively innovate empowered manufactured products whereas parallel platforms. Holisticly predominate extensible testing. Objectively innovate empowered manufactured products whereas parallel platforms. Holisticly predominate extensible testing.</h6>
                    <h6 className="pt-3" >
                   
                        <span ><a href="https://www.facebook.com/aibur007" target="_blank" className='text-white'><i class="fab fa-facebook-f "></i></a></span>

                        <span><a href="https://twitter.com/" target="_blank" className='text-white'><i class="fab fa-twitter" ></i></a></span>

                        <span><a href="https://www.youtube.com/" target="_blank" className='text-white'><i class="fab fa-youtube"></i></a></span>
                        
                    </h6>
                </div>
                <div className=' col-md-3 '>
                    <div className='  px-5'>
                    <h5 className="pb-3" >CATEGORIES</h5>
                    <h6>About Us</h6>
                    <h6>Services</h6>
                    <h6>News</h6>
                </div>
                <div className=' px-5 '>
                    <h5 className="" >INFO</h5>
                    <h6>Portfolio</h6>
                    <h6>Shop</h6>
                    <h6>Contact</h6>
                    <h6>Location</h6>
                    </div>
                </div>
                <div className=' col-md-5'>
                    <img className='img-fluid' src={map} />
                </div>
                
            </div>
        </div>
    );
};

export default Footer;