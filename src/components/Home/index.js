import { Link } from 'react-router-dom';
import LogoA from '../../assets/images/logo-a.png';
import AnimatedLetters from '../AnimatedLetters';
import Logo from './Logo';
import './index.scss';
import { useState, useEffect } from 'react';
import Loader from 'react-loaders';

const Home = () => {
  //initializing stste for my letterClass
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
  // useEffect(() => {
  //   return () =>
  //     setTimeout(() => {
  //       setLetterClass('text-animate-hover');
  //     }, 4000);
  // }, []);

  //without a return statement
  useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-animate-hover');
    }, 4000);
  }, []);

  return (
    //creating tht text zone where my animated letters will live on Home page
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

            {/* substitutung hard coded string to animated letters component created */}
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

          <h2>Frontend Developer / Husband / Father</h2>

          <Link to="/contact" className="flat-button">
            CONTACT ME
          </Link>
        </div>
        <Logo />
      </div>

      <Loader type="pacman" />

      {/* <div id="loader">
        <div class="ls-particles ls-part-1"></div>
        <div class="ls-particles ls-part-2"></div>
        <div class="ls-particles ls-part-3"></div>
        <div class="ls-particles ls-part-4"></div>
        <div class="ls-particles ls-part-5"></div>
        <div class="lightsaber ls-left ls-green"></div>
        <div class="lightsaber ls-right ls-red"></div>
      </div> */}
    </>
  );
};

export default Home;
