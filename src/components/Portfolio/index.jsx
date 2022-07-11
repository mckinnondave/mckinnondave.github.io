import './index.scss';
import React, { useEffect, useState } from 'react';
import AnimatedLetters from '../AnimatedLetters';
import Loader from 'react-loaders';
import WorkingAnimation from '../WorkingAnimation';

const Portfolio = () => {
  const [letterClass, setLetterClass] = useState('text-animate');

  useEffect(() => {
    const timeout = setTimeout(() => {
      setLetterClass('text-animate-hover');
    }, 4000);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <>
      <div className="container portfolio-page">
        <div className="text-zone portfolio">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['M', 'y', ' ', 'R', 'e', 'c', 'e', 'n', 't', ' ', 'P', 'r', 'o', 'j', 'e', 'c', 't', 's']}
              idx={15}
            />
          </h1>
          <p>
            <a href="https://github.com/mckinnondave/Quick-Trivia" target="_blank">Quick Trivia</a><br />
            Quick Trivia is my most recent project since graduating from Lighthouse Labs and is a React based trivia game. Quick Trivia challenges users with 10 trivia questions per round they play, which are randomly selected from a category of their choosing. A user has 20 seconds to answer each question, and their score is based on how quickly they answer the question. As well, a user can submit their final score to be added to a persisting scoreboard. 
            
            This project uses React, Sass, Node, Express, Axios, MongoDB, Netlify, and Heroku. It can be played <a href='https://quick-trivia-game.netlify.app/' target="_blank">here!</a>
          </p>
          <p>
            <a href="https://github.com/mckinnondave/Hopper" target="_blank">Hopper</a><br />
            A react based application designed to simplify the
            decision making process when out with friends during a pub crawl.
            A user can select where they would like to
            begin their trip, and have pubs be randomly given to them that are
            within a 1km radius of where they choose to start. Google
            Autocomplete, Geolocation, and Places APIs are used to provide this
            information to the user.
          </p>
          <p>
          <a href="https://github.com/mckinnondave/Graigslist" target="_blank">Graigslist</a><br />
            Graigslist is an app that allows fictitious users to create items
            for sale, have those items saved to a database, and then displayed
            them on various pages. The items can be searched for and favourited
            by a user, and an owner for an item can delete or mark their items
            as sold. As well, a messaging app has been created for the site to
            allow users and owners to interact with one another.
          </p>
          <p>
          <a href="https://github.com/mckinnondave/scheduler" target="_blank">Scheduler</a><br />
            Scheduler is a single page application (SPA) built using
            React. Interviews can be booked during Monday and Friday, and a user
            can either edit/delete their bookings. The client application
            communicates with an API server over HTTP and users data is
            persisted by the API server using a PostgreSQL database.
          </p>
        </div>
      </div>
      <WorkingAnimation />
      <Loader type="pacman" />
    </>
  );
}

export default Portfolio;