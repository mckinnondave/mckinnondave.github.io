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
          <p>
            <a href="https://github.com/mckinnondave/tweeter" target="_blank">Tweeter</a><br />
            Tweeter is a simple, single-page Twitter clone. This repository is
            the starter code for the project: Students will fork and clone this
            repository, then build upon it to practice their HTML, CSS, JS,
            jQuery and AJAX front-end skills, and their Node, Express back-end
            skills.
          </p>
        </div>
      </div>
      <WorkingAnimation />
      <Loader type="pacman" />
    </>
  );
}

export default Portfolio;