import { MIDDLE_SECTION } from '../../Module/General';
import './style.css';


function LogoSectionAbout() {
  return (
    <div className="LogoSectionAbout">
      <h1>{MIDDLE_SECTION.TITLE}</h1>
      <p>{MIDDLE_SECTION.LONG_DESCRIPTION}</p>
    </div>
  );
}

function Logo() {
  return (
    <div className="logoS">
      <img className="Logo" src={MIDDLE_SECTION.LOGO} alt="Limbohacks" />
    </div>
  );
}

function Timeline (){
  return (
    <div className="logoT">
      <img className="Timeline" src={process.env.PUBLIC_URL + '/timeline.png'} alt="BFME" />
    </div>
  );
}
export { Logo, LogoSectionAbout, Timeline };

