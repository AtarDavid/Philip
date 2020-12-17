import React, { useEffect, useState } from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import Confetti from 'react-dom-confetti';
import Tooltip from './Tooltip';

export default function Home() {
  const direction = ['bottom', 'right', 'top', 'left'];
  const [active, setActive] = useState(false);

  const [x, setX] = useState(2);

  const throwConfetti = () => {
    setTimeout(() => {
      setActive(false);
      const num = Math.floor(Math.random() * Math.floor(4));
      setX(num);
      throwConfetti();
    }, (x + 1) * 1500);
    setActive(true);
  };

  const loadImage = () => {
    console.log(
      '%cNeugierig, wa?!',
      'color: #527397; font-family: sans-serif; font-size: 2.5em; font-weight: bolder; text-shadow: #39597cde 1px 1px 2px;'
    );
    const url =
      'https://cdn.pixabay.com/photo/2016/11/13/21/46/sheep-1822137__340.jpg';
    var image = new Image();

    image.onload = function () {
      var style = [
        `font-size: 1px;`,
        `line-height: ${this.height * 0.5}px;`,
        `padding: ${this.height * 0.5}px ${this.width * 0.5}px;`,
        `background-size: ${this.width}px ${this.height}px;`,
        `background: url(${url});`,
        `background: no-repeat url(${url})`,
      ].join(' ');
      console.log('%c ', style);
    };

    image.src = url;
  };

  useEffect(() => {
    throwConfetti();
    loadImage();
    // eslint-disable-next-line
  }, []);

  const config = {
    angle: (x + 1) * 90,
    spread: x === 2 ? '360' : '115',
    startVelocity: 40,
    elementCount: '150',
    dragFriction: 0.12,
    duration: 10000,
    stagger: 2,
    width: '7px',
    height: '7px',
    perspective: '800px',
    colors: ['#a864fd', '#29cdff', '#78ff44', '#ff718d', '#fdff6a'],
  };

  return (
    <StyledDiv>
      <GlobalStyle />
      <ConfettiContainer direction={direction[x]}>
        <Confetti active={active} config={config} />
      </ConfettiContainer>
      <div>
        <H1>Lieber Philip,</H1>
        <p>
          vielen lieben Dank für dieses Jahr. Du warst der beste Mentor, den man
          sich wünschen kann, und ein echt{' '}
          <Tooltip position={'top'}>
            <b>Toll</b>er
          </Tooltip>{' '}
          Kollege. Das Homeoffice wird sich ohne dich leer anfühlen.
        </p>
        <p>Ich wünsche dir alles Gute für die Zukunft.</p>
        <p>Deine Atar</p>
      </div>
    </StyledDiv>
  );
}

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    background-color: #aadeea30;
    font-family: 'Montserrat', sans-serif;
  }

  .tooltip {
    position: relative;
    color: #004360;
  }
  
  .tooltip-trigger {
    display: inline-block;
    text-decoration: underline;
  }
  
  .tooltip-bubble {
    max-width: 210px;
    position: absolute;
    z-index: 10;
    &::after {
      content: '';
      position: absolute;
    }
  }
  
  .tooltip-top {
    bottom: 100%;
    left: 50%;
    padding-bottom: 9px;
    transform: translateX(-50%);
    
    &::after {
      border-left: 9px solid transparent;
      border-right: 9px solid transparent;
      border-top: 9px solid rgba(0,0,0,.7);
      bottom: 0;
      left: 50%;
      transform: translateX(-50%);
    }
  }  

  .tooltip-message {
    background: rgba(0,0,0,.7);
    border-radius: 3px;
    font-size: 1.5rem;
    line-height: 1.4;
    padding: .3em .4em;
    text-align: center;
  }
`;

const StyledDiv = styled.div`
  @media (min-width: 480px) and (max-width: 1000px) and (orientation: landscape) {
    padding: 5px;
  }
  max-width: 1000px;
  margin: 0 auto;
  cursor: default;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  padding: 50px 5px;
  font-size: 20px;
  line-height: 1.6;
  p {
    padding: 5px;
  }
  span {
    cursor: pointer;
  }
`;

const ConfettiContainer = styled.div`
  ${(props) => props.direction} : 0;
  position: fixed;
`;

const H1 = styled.h1`
  font-family: 'Cookie', cursive;
  font-size: 60px;
  margin: 0;
  color: #004360;
`;
