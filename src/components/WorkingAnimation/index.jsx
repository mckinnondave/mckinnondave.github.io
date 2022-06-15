import lottie from 'lottie-web';
import workingAnimation from "../../animations/working.json"
import React, { useEffect } from 'react';
import './index.scss'

export default function WorkingAnimation() {

  useEffect(() => {
    const timeout = setTimeout(() => {
      lottie
        .loadAnimation({
        container: document.querySelector('#working-animation'),
        animationData: workingAnimation,
        renderer: 'svg', 
        loop: true, 
        autoplay: true, 
      })
        .setSpeed(0.7)
     }, 2000);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <div id="working-animation" />
  )

}