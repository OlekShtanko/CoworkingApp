import React from 'react';
import WaveBorderDown from './Wave/WaveBorderDown'
import WaveBorderUp from './Wave/WaveBorderUp'
import AboutUs from './AboutUs/AboutUs'
import Tagline from './Tagline/Tagline'
function MainPage() {
    return (
      <div>
      <Tagline/>
      <WaveBorderUp/>
      <AboutUs/>
      <WaveBorderDown/>
      </div>
    );
  }
  
  export default MainPage;