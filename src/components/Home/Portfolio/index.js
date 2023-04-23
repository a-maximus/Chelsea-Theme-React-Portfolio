import './index.scss';
import AnimatedLetters from '../../AnimatedLetters';
import { useState, useEffect } from 'react';
import Loader from 'react-loaders';
// import portfolioData from '/Users/cannibus/Desktop/anabareactportfolio/src/data/portfolio.json';
import portfolioData from 'data/portfolio.json';

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

  const renderPortfolio = (portfolio) => {
    return (
      <div className="images-container">
        {portfolio.map((port, idx) => {
          return (
            <div key={idx} className="image-box">
              <img src={port.cover} alt="Ryu" className="portfolio-image" />
            </div>
          );
        })}
      </div>
    );
  };

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

        <div>{renderPortfolio(portfolioData.portfolio)}</div>
      </div>
      <Loader type="pacman" />
    </>
  );
};

export default Portfolio;
