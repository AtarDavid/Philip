import React from 'react';
import styled from 'styled-components';

export default function Home() {
  return (
    <StyledDiv>
      <div>
        <h1>Lieber Philip,</h1>
        <p>
          vielen lieben Dank für dieses Jahr. Du warst der beste Mentor, den man
          sich wünschen kann,{' '}
          <span title="&#129345;">
            und ein echt Toll<sup>*</sup>er Kollege.{' '}
          </span>
          Das Homeoffice wird sich ohne dich leer anfühlen.
        </p>
        <p>Ich wünsche dir alles Gute für die Zukunft.</p>
        <p>Deine Atar</p>
      </div>
    </StyledDiv>
  );
}

const StyledDiv = styled.div`
  cursor: default;
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  padding: 50px 5px;
`;
