import './index.scss';
import AnimatedLetters from '../../AnimatedLetters';
// import { useState, useEffect } from 'react';
import Loader from 'react-loaders';
import { useState, useEffect, useRef } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const [letterClass, setLetterClass] = useState('text-animate');
  const refForm = useRef();

  //without a return statement
  useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-animate-hover');
    }, 3000);
  }, []);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_0vmypin',
        'template_azh63tp',
        refForm.current,
        'pTyvUut0x_0LH-TJn'
      )

      .then(
        () => {
          alert('WOOhoo... Your message has been sent successfully!');
          window.location.reload(false);
        },
        () => {
          alert('Try sending your message again please!');
        }
      );
  };

  return (
    <>
      <div className="container contact-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterclass={letterClass}
              strArray={['C', 'o', 'n', 't', 'a', 'c', 't', '', 'm', 'e', '!']}
              idx={15}
            />
          </h1>
          <p>
            I am interested in full-time, part time, freelance, or contract
            opportunities; especially ambiguous or large projects.
          </p>
          <p>
            If you have any other questions or requests, dont hesitate to
            contact me throug this awesome form below 🤩
          </p>

          {/* Contact page form */}
          <div className="contact-form">
            <form ref={refForm} onSubmit={sendEmail}>
              <ul>
                <li className="half">
                  <input
                    type="text"
                    name=" name "
                    placeholder="Name"
                    required
                  />
                </li>
                <li className="half">
                  <input
                    type="email"
                    name=" email "
                    placeholder="Email"
                    required
                  />
                </li>

                <li>
                  <input
                    type="text"
                    name=" subject "
                    placeholder=" Subject "
                    required
                  />
                </li>

                <li>
                  <textarea
                    placeholder="Drop Your Message"
                    name="message"
                    required
                  ></textarea>
                </li>

                {/* <li>
                  <input
                    type=" submit "
                    value=" Send "
                    className=" flat-button "
                  />
                </li> */}
              </ul>

              <button className="flat-button" type="submit">
                {' '}
                Send{' '}
              </button>
            </form>
          </div>
        </div>
      </div>
      ;{/* Adding a pacman page loader */}
      <Loader type="pacman" />;
    </>
  );
};

export default Contact;
