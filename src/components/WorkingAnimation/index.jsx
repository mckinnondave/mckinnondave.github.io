import lottie from 'lottie-web';
import workingAnimation from "../../animations/working.json"
import React, { useEffect } from 'react';
import './index.scss'

export default function MessageAnimation() {

  useEffect(() => {
    const timeout = setTimeout(() => {
      lottie
        .loadAnimation({
        container: document.querySelector('#working-animation'),
        animationData: workingAnimation,
        renderer: 'svg', 
        loop: false, 
        autoplay: true, 
      })
        .setSpeed(0.8)
     }, 2000);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <div id="working-animation" />
  )

}