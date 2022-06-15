import lottie from 'lottie-web';
import messageAnimation from "../../animations/message.json"
import React, { useEffect } from 'react';
import './index.scss'

export default function MessageAnimation() {

  useEffect(() => {
    const timeout = setTimeout(() => {
      lottie
        .loadAnimation({
        container: document.querySelector('#message-animation'),
        animationData: messageAnimation,
        renderer: 'svg', // "canvas", "html"
        loop: false, // boolean
        speed: 4,
        autoplay: true, // boolean
      })
        .setSpeed(0.8)
     }, 2000);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <div id="message-animation" />
  )

}