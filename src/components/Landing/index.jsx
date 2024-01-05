import { SOCIALS, TOP_SECTION } from '../../Module/General';
import MytypedComponent from '../Typed/index.js';
import './style.css';

const Btn = props => {
  return (
    <button className={props.class}>
      <i className={props.ico}></i>
      {props.type}
      <div className="overlay">
        <div className="overlay-text">{props.overlay}</div>
      </div>
    </button>
  );
};

const About = () => {
  return (
    <>
    <div className="AboutMe">
    <img src={process.env.PUBLIC_URL + '/logo.png'} alt="" width={80}/>
    <img src={process.env.PUBLIC_URL + '/codedrills_logo.png'} alt="" width={180}/>
      <h2>{TOP_SECTION.TITLE}</h2>
      <MytypedComponent />
    </div>
    </>
  );
};

const Myinfo = () => {
  return (
    <div className="Myinfo">
      <About />
      <p> {TOP_SECTION.SHORT_DESCRIPTION}</p>
      {/* <Row key={"sai"}> */}

      <div className="join_dis">
        <a rel="noreferrer" target="_blank" href={SOCIALS.discord}>
          <Btn
            ico="fab fa-2x fa-discord"
            class="join_disco"
            type="Join our discord"
            overlay="Click the link"
          />
        </a>
        <a href={TOP_SECTION.HACKERS_REGISTRATION_FORM_LINK}>
          {' '}
          <Btn
           ico="fas fa-2x fa-user"
            class="register"
            type="         Register"
            overlay="BFME Registration"
          />
        </a>
      </div>
      <div className="buttom-group">
        {/* <a href={TOP_SECTION.JUDGES_FORM_LINK}>
          {' '}
          <Btn class="sponsor_btn" type="Judges" overlay="Fill the form" />
        </a> */}
{/* 
        <a href={TOP_SECTION.HACKERS_REGISTRATION_FORM_LINK}>
          {' '}
          <Btn
            class="register"
            type="Register "
            overlay="BFME Registration"
          />
        </a> */}
      </div>
      {/* </Row> */}
    </div>
  );
};

export { Btn, Myinfo };

