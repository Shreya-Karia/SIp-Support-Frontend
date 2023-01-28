import React from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLink } from '@fortawesome/free-solid-svg-icons';
import { faYoutube } from "@fortawesome/free-brands-svg-icons";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faSpotify } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
// import { faGlassWhiskey } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";



function WelcomePost() {
  return (
    <div className="flex flex-col bg-[#02001B] md:w-2/3 w-full rounded-2xl p-10 z-20 md:text-xl text-md space-y-7 justify-between">
      <div>
        Hello, Izabela from Prior Attire here.
        <br />
        If you enjoy my YouTube videos on dressing up in historical costumes,
        historical dressmaking and the history of fashion, and would like to
        support me so that I could create more free content, you can now buy me
        a coffee - either as a one off or a monthly treat!
        <br />
        For those of you who choose the membership option, I will be adding
        perks and discount codes for my online shop if you ever feel you would
        like to buy our merchandise, but that's at the later stage, for the
        moment I am keeping it simple.
        <br />
        Many thanks for your support, it is greatly appreciated!
      </div>
      {/* <div className='flex-grow'></div> */}
      <div className="flex flex-row items-center space-x-5">
        <FontAwesomeIcon icon={faLink} className="h-6" />
        <FontAwesomeIcon icon={faYoutube} className="h-6" />
        <FontAwesomeIcon icon={faFacebook} className="h-6" />
        <FontAwesomeIcon icon={faSpotify} className="h-6" />
        <FontAwesomeIcon icon={faInstagram} className="h-6" />
        {/* <FontAwesomeIcon icon={faGlassWhiskey} className="h-6" /> */}
      </div>
    </div>
  );
}

export default WelcomePost;