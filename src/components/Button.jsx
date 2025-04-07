import React from 'react';
import styled from 'styled-components';

const Button = () => {
  return (
    <StyledWrapper>
      <a href='https://wa.me/5511968995367?text=Ol%C3%A1%2C%20quero%20fazer%20parte%20da%20comunidade%20Vibra%20%F0%9F%8C%9F' > Quero entrar agora
      </a>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  a {
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

  a:hover {
    color: white;
    box-shadow: inset 0 -100px 0 0 #E5457D;
  }

  a:active {
    transform: scale(0.9);
  }
  
  @media (max-width: 600px) {
    a {
        padding: 10px 15px;
    }
}
  `;

export default Button;
