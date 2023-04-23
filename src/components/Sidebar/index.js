import { Link, NavLink } from 'react-router-dom';
import './index.scss';
import LogoA from '../../assets/images/logo-a.png';
import LogoSubtitle from '../../assets/images/anaba_sub.png';
import ChelseaLogo from '../../assets/images/chelsea-logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faEnvelope,
  faHouse,
  faUser,
  faBriefcase,
} from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const Sidebar = () => (
  <div className="nav-bar">
    <Link className="logo" to="/">
      <img src={LogoA} alt="logo" />
      <img className="sub-logo" src={LogoSubtitle} alt="anaba" />
    </Link>
    <nav>
      <NavLink exact="true" activeclassname="active" to="/">
        <FontAwesomeIcon icon={faHouse} color="#4d4d4e" />
      </NavLink>

      <NavLink
        exact="true"
        activeclassname="active"
        className="about-link"
        to="/about"
      >
        <FontAwesomeIcon icon={faUser} color="#4d4d4e" />
      </NavLink>

      <NavLink
        exact="true"
        activeclassname="active"
        className="portfolio-link"
        to="/portfolio"
      >
        <FontAwesomeIcon icon={faBriefcase} />
      </NavLink>

      <NavLink
        exact="true"
        activeclassname="active"
        className="contact-link"
        to="/contact"
      >
        <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e" />
      </NavLink>
    </nav>

    <ul>
      <li>
        <a
          className="linkedin"
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.linkedin.com/in/anaba-wachuku/"
        >
          <FontAwesomeIcon icon={faLinkedin} color="#4d4d4e" />
        </a>
      </li>

      <li>
        <a
          className="github"
          target="_blank"
          rel="noopener noreferrer"
          href="https://github.com/a-maximus/"
        >
          <FontAwesomeIcon icon={faGithub} color="#4d4d4e" />
        </a>
      </li>

      <section>
        <div class="pulse">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </section>

      <div>
        <li>
          <a
            className="chelsea"
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.chelseanews.com/"
          >
            <img className="chelsea-logo" src={ChelseaLogo} alt="chelsea fc" />
          </a>
        </li>
      </div>
    </ul>
  </div>
);

export default Sidebar;
