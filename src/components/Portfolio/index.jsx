import './index.scss';
import Loader from 'react-loaders';

const Portfolio = () => {

  return (
    <>
      <div className="container portfolio-page">
        <div className="text-zone port">
          <div className="project">
            <div className="project-image"></div>
            <div className='project-box'>
              <div className="project-box-title"></div>
              <div className="project-box-description"></div>
            </div>
          </div>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  );
}

export default Portfolio;