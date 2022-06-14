import './index.scss';
import React, { useEffect, useState } from 'react';
import AnimatedLetters from '../AnimatedLetters';
import Loader from 'react-loaders';
import { FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faCss3, faGitAlt, faHtml5, faJsSquare, faReact, faAngular} from '@fortawesome/free-brands-svg-icons'

const About = () => {
  const [letterClass, setLetterClass] = useState('text-animate');

  useEffect(() => {
    const timeout = setTimeout(() => {
      setLetterClass('text-animate-hover');
    }, 3000);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <>
    <div className="container about-page">
      <div className="text-zone">
        <h1>
          <AnimatedLetters
            letterClass={letterClass}
            strArray={['A', 'b', 'o', 'u', 't', ' ', 'm', 'e']}
            idx={15}
          />
        </h1>
        <p>
          I'm a full stack developer from Vancouver, BC with a 9 year background
          in Aviation. Because of Covid, I was forced to take a step away from
          aviation and realized that during this time away, I had an opportunity
          to find new interests. I took this time to study a number of courses
          through Thompson Rivers University, but ultimately found a passion for
          coding while working through a number of free online courses during
          the summer of 2021. Since then, I've done my own studying, enrolled
          into Lighthouse Labs, and have just recently graduated from that
          program. While I enjoyed flying, I found a passion for code, and now
          want to see where this new, exciting path might lead me.
        </p>
        <p>
          Previous experience includes operating commercial domestic flights in
          Canada with Westjet Encore, scheduled passenger flights and Medevac
          operations with Perimeter Aviation. As well, I have a background in
          retail, where I worked in a Point of Sales position for Choices
          Markets during Covid, and in several departments for Canadian Tire and
          Rona prior to entering the aviation industry.
        </p>
        <p>
          <strong>TECH STACK</strong> <br />
          Languages: Javascript, Ruby, HTML, CSS Frameworks,
          Libraries, and Environments: NodeJS, ReactJS, Ajax, Express, EJS,
          JQuery, Bootstrap, ActiveRecord, React Native, Rails, Sass, Google
          APIs Testing: Storybook, Cypress, RSpec, Jest, Mocha, Chai Systems,
          CMS, and Databases: SQL, Git
        </p>
      </div>

      <div className='stage-cube-cont'>
          <div className='cubespinner'>
            <div className='face1'>
              <FontAwesomeIcon icon={faAngular} />
            </div>
            <div className='face2'>
              <FontAwesomeIcon icon={faHtml5} />
            </div>
            <div className='face3'>
              <FontAwesomeIcon icon={faCss3} />
            </div>
            <div className='face4'>
              <FontAwesomeIcon icon={faReact} />
            </div>
            <div className='face5'>
              <FontAwesomeIcon icon={faJsSquare} />
            </div>
            <div className='face6'>
              <FontAwesomeIcon icon={faGitAlt} />
            </div>
          </div>
      </div>
    </div>
    <Loader type="pacman" />
    </>
  );
};

export default About;
