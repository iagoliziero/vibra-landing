import React from 'react';
import styled from 'styled-components';

const Card = () => {
  return (
    <StyledWrapper>
      <div className="e-card playing">
        <div className="image" />
        <div className="wave" />
        <div className="wave" />
        <div className="wave" />
        <div className="infotop">
          <div className="name">Tarefas leves pra te tirar <br />do piloto automático</div>
          <div className="name">Troca real com outras meninas</div>
          <div className="name">1 vídeo chamada por semana comigo</div>
        </div>
      </div>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  .e-card {
    background: transparent;
    box-shadow: 0px 8px 28px -9px rgba(0,0,0,0.45);
    position: relative;
    width: 240px;
    height: 225px;
    border-radius: 16px;
    overflow: hidden;
    font-size: 30px;
  }

  .wave {
    position: absolute;
    width: 540px;
    height: 700px;
    opacity: 0.6;
    left: 0;
    top: 0;
    margin-left: -50%;
    margin-top: -70%;
    background: linear-gradient(744deg,#FFC0D6,#E5457D 60%,#AC164BFF);
  }

  .infotop {
    text-align: center;
    padding: 12px;
    position: absolute;
    left: 0;
    right: 0;
    color: #1E1E1E;
    font-weight: 800;
    display: flex;
    flex-direction: column;
    gap: 8px;
  }

  .name {
    font-size: 1.3rem;
    font-weight: 600;
    text-transform: lowercase;
    max-width: 95%;
  }

  .wave:nth-child(2),
  .wave:nth-child(3) {
    top: 190px;
  }

  .playing .wave {
    border-radius: 40%;
    animation: wave 3000ms infinite linear;
  }

  .wave {
    border-radius: 40%;
    animation: wave 55s infinite linear;
  }

  .playing .wave:nth-child(2) {
    animation-duration: 4000ms;
  }

  .wave:nth-child(2) {
    animation-duration: 50s;
  }

  .playing .wave:nth-child(3) {
    animation-duration: 5000ms;
  }

  .wave:nth-child(3) {
    animation-duration: 45s;
  }

  @keyframes wave {
    0% {
      transform: rotate(0deg);
    }

    100% {
      transform: rotate(360deg);
    }
  }`;

export default Card;
