import './index.scss';
import AnimatedLetters from '../../AnimatedLetters';
import { useState, useEffect } from 'react';
import Loader from 'react-loaders';
// import portfolioData from '/Users/cannibus/Desktop/anabareactportfolio/src/data/portfolio.json';
import portfolioData from 'data/portfolio.json';
import RenderPortfolio from './RenderPortfolio';

// import ChelseaLogo from '../../../assets/images/chelsea-logo.png';

const Portfolio = () => {
  const [letterClass, setLetterClass] = useState('text-animate');
  console.log(portfolioData);

  //   //without a return statement
  //   useEffect(() => {
  //     setTimeout(() => {
  //       setLetterClass('text-animate-hover');
  //     }, 3000);
  //   }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLetterClass('text-animate-hover');
    }, 3000);

    return () => {
      clearTimeout(timer);
    };
  });

  return (
    <>
      <div className="container portfolio-page">
        <h1 className="page-title">
          <AnimatedLetters
            letterclass={letterClass}
            // Using .split() function
            strArray={'Check out my projects!'.split('')}
            // using a normal strArray
            // strArray={[
            //   'C',
            //   'h',
            //   'e',
            //   'c',
            //   'k',
            //   '',
            //   'o',
            //   'u',
            //   't',
            //   '',
            //   'm',
            //   'y',
            //   '',
            //   'p',
            //   'r',
            //   'o',
            //   'j',
            //   'e',
            //   'c',
            //   't',
            //   's',
            //   '!',
            // ]}
            idx={9}
          />
        </h1>

        {/* <img
          style={{ borderRadius: '50%' }}
          //src="https://media.cnn.com/api/v1/images/stellar/prod/130831195426-24-iconic-einstein.jpg?q=w_1280,h_720,x_0,y_0,c_fill/w_1280"
          //was having issues with below file path but finally figured it out
          src="/portfolio/portfolio-1/Ryu.jpeg"
          alt="ryu"
        /> */}

        <div>{RenderPortfolio(portfolioData.portfolio)}</div>

        {/* <RenderPortfolio /> */}
      </div>
      <Loader type="pacman" />
    </>
  );
};

export default Portfolio;
