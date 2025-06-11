import { useState} from 'react';
import '../style/Hero.css';
import '../style/Fonts.css'
import '../style/Skill.css'
import pic from '../assets/pic.png';
import Button from '../shared_component/Button';

type Props = {};

const Hero = (props: Props) => {


  return (
    <div className="d-flex flex-column align-items-center">
      <h1 style={{fontFamily: 'Bebas Neue',fontSize: '7rem',textAlign: 'center',}}>
        FULL STACK WEB DEV
      </h1>
      <img src={pic} className="hero-image" alt="Hero Graphic" />
      <h1 style={{position: "relative", fontFamily: "Bebas Neue", fontSize: '4rem', top: "-100px"}}>Abin Jose</h1>
      {/* <h1 style={{position: "relative", fontFamily: "Bebas Neue", fontSize: '2rem', top: "-120px"}}>kerala</h1> */}
      <div className='d-flex'>
        <a href="https://drive.google.com/file/d/1kG6L0X8aJCwE9a_f6Pm_hXRR67NafrtL/view?usp=sharing" download="resume"><Button classname='button-54' style={{position: "relative", top: "-100px"}} value="Resume" /></a>
        <a ><Button classname="button-54" value="Contact Me" style={{position: 'relative', top: '-100px'}}/></a>
      
      </div>
    </div>
  );
};

export default Hero;
