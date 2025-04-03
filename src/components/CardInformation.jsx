import styled from 'styled-components';

const CardInformation = () => {
  return (
    <StyledWrapper>
      <div className="notification">
        <div className="notiglow" />
        <div className="notiborderglow" />
        <div className="notibody">Tarefas leves pra te tirar do piloto automático</div>
        <div className="notibody">Troca real com outras meninas</div>
        <div className="notibody">1 vídeo chamada por semana comigo</div>
      </div>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  .notification {
    display: flex;
    flex-direction: column;
    isolation: isolate;
    justify-content: center;

    position: relative;
    width: 18rem;
    gap: 0.3rem;
    height: 12rem;
    border-radius: 1rem;
    overflow: hidden;
    
    font-family: 'darker', sans-serif;
    font-size: 16px;
    --gradient: linear-gradient(to bottom, #FFC0D6, #E5457D);
    --color: linear-gradient(to right, #FFC0D6, #E5457D);
  }

  .notification:before {
    position: absolute;
    content: "";
    inset: 0rem;
    border-radius: 0.9375rem;
    background: #FFC0D6;
    z-index: 2
  }

  .notification:after {
    position: absolute;
    content: "";
    width: 0.25rem;
    inset: 0.65rem auto 0.65rem 0.5rem;
    border-radius: 0.125rem;
    background: var(--gradient);
    transition: transform 300ms ease;
    z-index: 4;
  }

  .notification:hover:after {
    transform: translateX(0.15rem)
  }

  .notititle {
    color: var(--color);
    padding: 0.65rem 0.25rem 0.4rem 1.25rem;
    font-weight: 500;
    font-size: 1.1rem;
    transition: transform 300ms ease;
    z-index: 5;
  }

  .notification:hover .notititle {
    transform: translateX(0.30rem)
  }

  .notibody {
    color: #2D2D2D;
    padding: 0 1.50rem;
    transition: transform 300ms ease;
    z-index: 5;
    text-align: start;
  }

  .notification:hover .notibody {
    transform: translateX(0.30rem)
  }

  .notiglow,
  .notiborderglow {
    position: absolute;
    width: 20rem;
    height: 20rem;
    transform: translate(-50%, -50%);
    background: radial-gradient(circle closest-side at center, white, transparent);
    opacity: 0;
    transition: opacity 300ms ease;
  }

  .notiglow {
    z-index: 3;
  }

  .notiborderglow {
    z-index: 1;
  }

  .notification:hover .notiglow {
    opacity: 0.2;
  }

  .notification:hover .notiborderglow {
    opacity: 0.2;
  }

  .note {
    color: var(--color);
    position: fixed;
    top: 80%;
    left: 50%;
    transform: translateX(-50%);
    text-align: center;
    font-size: 0.9rem;
    width: 75%;
  }`;

export default CardInformation;
