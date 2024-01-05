import { useEffect, useRef, useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import styled from 'styled-components';
import HomePage from '../Home/HomePage';
import { MdxContent } from '../Mdx';
import logoClose from './assets/ham-c.svg';
import hamLogo from './assets/ham.svg';
import './styles.scss';


const NAVIGATION_OFFSET = 66;

const Wrapper = styled.div`
  display: block;
  width: 40%;

  @media (max-width: 1000px) {
    margin: 0;
    display: ${props => (props.toggle ? 'none' : 'static')};
    height: 100vh;
    width: 100vw;
    position: fixed;
    top: ${props => (props.toggle ? '-1000px' : '0px')};
    transition: top 1s;
    .nav-content {
      height: 35%;
      background-color: rgba(50, 13, 136);
    }
  }
`;

// const MdxContent = () => {
//   return (
//     <div
//       style={{
//         backgroundColor: 'red'
//       }}
//     >
//       <h1>This is blog</h1>
//       <h1>This is blog</h1>
//       <h1>This is blog</h1>
//       <h1>This is blog</h1>
//       <h1>This is blog</h1>
//       <h1>This is blog</h1>
//       <h1>This is blog</h1>
//       <h1>This is blog</h1>
//       <h1>This is blog</h1>

//     </div>
//   );
// };

const NAVBAR = ({}) => {
  const [toggle, setToggle] = useState(true);
  const [isOffset, setIsOffset] = useState(false);

  const navigation = useRef();

  const listenScrollEvent = e => {
    if (window.scrollY >= NAVIGATION_OFFSET) {
      setIsOffset(true);
    } else {
      setIsOffset(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', listenScrollEvent);
    return () => window.removeEventListener('scroll', listenScrollEvent);
  }, []);

  const handleOutsideCick = (event, ref) => {
    if (!ref.current.contains(event.target)) {
      setToggle(true);
    } else {
      setToggle(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', e =>
      handleOutsideCick(e, navigation)
    );

    return () => {
      document.removeEventListener('mousedown', e =>
        handleOutsideCick(e, navigation)
      );
    };
  }, []);

  function scrolltoId(id){
    var access = document.getElementById(id);
    access.scrollIntoView({behavior: 'smooth'}, true);
    setToggle(true)
    }
  return (
    <Router>
      <nav className={`nav_bar ${isOffset && 'nav_bar-offset-crossed'}`}>
        <Wrapper toggle={toggle}>
          <div className="nav-content" ref={navigation}>
            <ul>
              <li>
                {/* <Link > */}
                  <span className="links"  onClick={()=>{scrolltoId('home')}}>Home </span>{' '}
                {/* </Link> */}
              </li>
              <li>
                {/* <Link > */}
                  <span className="links"  onClick={()=>{scrolltoId('timeline')}}>Timeline </span>{' '}
                {/* </Link> */}
              </li>
              <li>
                {/* <Link to={`#faq`}> */}
                  <span className="links" onClick={()=>{scrolltoId('faq')}}>FAQ </span>{' '}
                {/* </Link> */}
              </li>
              <li>
                {/* <Link to={`#prizes`}> */}
                  <span className="links" onClick={()=>{scrolltoId('prizes')}}>Prizes </span>{' '}
                {/* </Link> */}
              </li>
              <li>
                {/* <Link to={`#sponsors`}> */}
                  <span className="links" onClick={()=>{scrolltoId('sponsors')}}>Sponsors </span>{' '}
                {/* </Link> */}
              </li>
              <li>
                {/* <Link to={`#team`}> */}
                  <span className="links" onClick={()=>{scrolltoId('team')}}>Team </span>{' '}
                {/* </Link> */}
              </li>
              <img
                className="s-close"
                onClick={() => setToggle(true)}
                src={logoClose}
              />
            </ul>
          </div>
          <div className="ease" />
        </Wrapper>
        <img
          className="s-open"
          onClick={() => setToggle(false)}
          src={hamLogo}
        />
      </nav>

      <Switch>
        <Route path="/blog" exact={true}>
          <MdxContent />
        </Route>
        <Route path="/" exact={true}>
          <HomePage />
        </Route>
      </Switch>
    </Router>
  );
};

export default NAVBAR;
