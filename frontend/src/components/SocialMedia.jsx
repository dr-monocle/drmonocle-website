import React from 'react';
import { BsDiscord, BsGithub, BsGlobe2 } from 'react-icons/bs';

const SocialMedia = () => {
  return (
    <div className="app__social">
      <div onClick={() => window.open('https://discord.com/channels/@me/549619189271494676', '_blank')}>
        <BsDiscord />
      </div>
      <div onClick={() => window.open('https://github.com/dr-monocle', '_blank')}>
        <BsGithub />
      </div>
      <div onClick={() => window.open('https://www.lambdadev.xyz', '_blank')}>
        <BsGlobe2 />         
      </div>
    </div>
  );
}

export default SocialMedia;