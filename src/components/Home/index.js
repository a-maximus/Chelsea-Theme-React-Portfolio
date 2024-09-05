import { Link } from 'react-router-dom';
import LogoA from '../../assets/images/logo-a.png';
import AnimatedLetters from '../AnimatedLetters';
import Logo from './Logo';
import './index.scss';
import { useState, useEffect } from 'react';
import Loader from 'react-loaders';

const Home = () => {
  //initializing state for my letterClass
  const [letterClass, setLetterClass] = useState('text-animate');

  //creating new arrays
  const nameArray = ['n', 'a', 'b', 'a', ';'];
  const jobArray = [
    'Y',
    'o',
    'u',
    'r',
    '',
    'w',
    'e',
    'b',
    '',
    'd',
    'e',
    'v',
    'e',
    'l',
    'o',
    'p',
    'e',
    'r',
    '!',
  ];

  //with a retun callbackfunction
  //useEffect hook returns a cleanup function, in this case is the 'setTimeout' callback, which is set to run after 4 seconds.
  useEffect(() => {
    return () =>
      setTimeout(() => {
        setLetterClass('text-animate-hover');
      }, 4000);
  }, []);

  //without a return statement - not recommended
  // useEffect(() => {
  //   setTimeout(() => {
  //     setLetterClass('text-animate-hover');
  //   }, 4000);
  // }, []);

  return (
    //creating the text zone where my animated letters will live on Home page
    <>
      <div className="container home-page">
        <div className="text-zone">
          <h1>
            <span className={letterClass}>H</span>
            <span className={`${letterClass} _12`}>i,</span>
            <br />
            <span className={`${letterClass} _13`}>I'</span>
            <span className={`${letterClass} _14`}>m</span>
            <img src={LogoA} alt="developer" />

            {/* substitutung hard coded string to animatedletters component created */}
            <AnimatedLetters
              letterclass={letterClass}
              strArray={nameArray}
              idx={15}
            />
            <br />
            <AnimatedLetters
              letterclass={letterClass}
              strArray={jobArray}
              idx={17}
            />
          </h1>

          <h2>Fullstack Developer / Husband / Father</h2>

          <Link to="/contact" className="flat-button">
            CONTACT ME
          </Link>
        </div>
        <Logo />
      </div>

      <Loader type="pacman" />
    </>
  );
};

export default Home;
