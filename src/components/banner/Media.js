import * as React from "react";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaReact } from "react-icons/fa";
import { SiTailwindcss, } from "react-icons/si";
import { BsFillBootstrapFill} from "react-icons/bs";
import { RiJavascriptFill} from "react-icons/ri";

const Media = () => {
  let facebookUrl = 'https://www.facebook.com/nur.ahamed.3538/';
  let twitterUrl = 'https://twitter.com/nurahamed62';
  let inkedinInUrl = ' https://www.linkedin.com/in/nur-ahamed-mondal/';
  return (
    <div className="flex flex-col xl:flex-row gap-6 lgl:gap-0 justify-between">
        <div>
          <h2 className="text-base uppercase font-titleFont mb-4">
            Find me in
          </h2>
          <div className="flex gap-4">
            <span className="bannerIcon">
              <FaFacebookF  onClick={() => window.open(facebookUrl, '_blank')}   />
            </span>
            <span className="bannerIcon">
              <FaTwitter  onClick={() => window.open(twitterUrl, '_blank')}/>
              
            </span>
            <span className="bannerIcon">
              <FaLinkedinIn  onClick={() => window.open(inkedinInUrl, '_blank')}/>
            </span>
          </div>
        </div>
        <div>
          <h2 className="text-base uppercase font-titleFont mb-4">
            BEST SKILL ON
          </h2>
          <div className="flex gap-4">
            <span className="bannerIcon">
              <FaReact />
            </span>
            <span className="bannerIcon">
              <RiJavascriptFill/>
              {/* <SiNextdotjs /> */}
            </span>
            <span className="bannerIcon">
              <SiTailwindcss />
            </span>
            <span className="bannerIcon">
              <BsFillBootstrapFill/>
            </span>
          </div>
        </div>
      </div>
  )
}

export default Media