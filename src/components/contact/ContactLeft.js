import React from 'react'
import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";
import { contactImg } from "../../assets/index";

const ContactLeft = () => {
  let facebookUrl = 'https://www.facebook.com/nur.ahamed.3538/';
  let twitterUrl = 'https://twitter.com/nurahamed62';
  let inkedinInUrl = ' https://www.linkedin.com/in/nur-ahamed-mondal/';


  return (
    <div className="w-full lgl:w-[35%] h-full bg-gradient-to-r from-[#1e2024] to-[#23272b] p-4 lgl:p-8 rounded-lg shadow-shadowOne flex flex-col gap-8 justify-center">
      <img
        className="w-full h-64 object-contain rounded-lg mb-2"
        src={contactImg}
        alt="contactImg"
      />
      <div className="flex flex-col gap-4">
        <h3 className="text-3xl font-bold text-white">Nur Ahamed Mondal</h3>
        <p className="text-lg font-normal text-gray-400">
         Aspiring MERN Stack Developer
        </p>
        <p className="text-base text-gray-400 tracking-wide">
        I am passionate about designing responsive web apps that can be run across the web and all platforms.
        </p>
        <p className="text-base text-gray-400 flex items-center gap-2">
          Phone: <span className="text-lightText">+917003072029</span>
        </p>
        <p className="text-base text-gray-400 flex items-center gap-2">
          Email: <span className="text-lightText">nurahamed62@gmail.com</span>
        </p>
      </div>
      <div className="flex flex-col gap-4">
        <h2 className="text-base uppercase font-titleFont mb-4">Find me in</h2>
        <div className="flex gap-4">
          <span className="bannerIcon">
            <FaFacebookF  onClick={() => window.open(facebookUrl, '_blank')}/>
          </span>
          <span className="bannerIcon">
            <FaTwitter  onClick={() => window.open(twitterUrl, '_blank')}/>
          </span>
          <span className="bannerIcon">
            <FaLinkedinIn onClick={() => window.open(inkedinInUrl, '_blank')} />
          </span>
        </div>
      </div>
    </div>
  );
}

export default ContactLeft