import React from 'react';
import styled from 'styled-components';

const Button = () => {
  return (
    <StyledWrapper>
      <button> Quero entrar agora
      </button>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  button {
    position: relative;
    display: inline-block;
    margin: 15px;
    padding: 15px 30px;
    text-align: center;
    font-size: 18px;
    letter-spacing: 1px;
    text-decoration: none;
    color: #E5457D;
    background: transparent;
    cursor: pointer;
    transition: ease-out 0.5s;
    border: 2px solid #E5457D;
    border-radius: 10px;
    box-shadow: inset 0 0 0 0 #E5457D;
    font-family: 'darker', sans-serif;
  }

  button:hover {
    color: white;
    box-shadow: inset 0 -100px 0 0 #E5457D;
  }

  button:active {
    transform: scale(0.9);
  }
  
  @media (max-width: 600px) {
    button {
        padding: 10px 15px;
    }
}
  `;

export default Button;
