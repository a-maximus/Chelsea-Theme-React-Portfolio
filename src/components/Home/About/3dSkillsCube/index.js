import './index.scss';
import Html from '../../../../assets/images/html5.png';
import Reacts from '../../../../assets/images/React-icon.svg.png';
import JavaScript from '../../../../assets/images/js.png';
import Git from '../../../../assets/images/Git-Icon.png';
import Sass from '../../../../assets/images/sass.png';
import Css from '../../../../assets/images/css3.png';

const SkillsCube = () => {
  function RotateCube(e) {
    var cube = document.getElementsByClassName('cube');
    var x = e.clientX - window.innerWidth / 2;
    var y = e.clientY - window.innerHeight / 2;
    var q = 0.15;
    var i;

    x = x * q * 1.25;
    x = y * q * 1.25;

    for (i = 0; i < cube.length; i++) {
      cube[i].style.transform = 'rotateY(' + x + 'deg) rotateX(' + x + 'deg)';
    }
  }

  document.addEventListener('mousemove', RotateCube);

  return (
    <div className="wrap">
      <div className="cube">
        <img src={Html} alt="html" />
        <img src={Reacts} alt="react" />
        <img src={JavaScript} alt="javascript" />
        <img src={Git} alt="git" />
        <img src={Sass} alt="sass" />
        <img src={Css} alt="css" />
      </div>
    </div>
  );
};

export default SkillsCube;
