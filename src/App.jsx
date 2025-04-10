import "./App.css";
import H1 from "./components/H1";
import Header from "./components/Header";
import Paragraph from "./components/Paragraph";
import CardInformation from "./components/CardInformation";
import Button from "./components/Button";
import SectionInformation from "./components/SectionInformation";
import Profile from "./components/Profile";
import SectionIcons from "./components/SectionIcons";
import ImageCarousel from "./components/ImageCarousel";
import Footer from "./components/Footer";

import ScrollGsap from "./components/ScrollGsap";
import ScrollLeftToRight from "./components/ScrollLeftToRight";
import ScrollRightToLeft from "./components/ScrollRightToLeft";


function App() {

  return (
    <>
      <div className="flex flex-col items-center h-full bg-darker m-0 p-0 overflow-x-auto ">
        <Header />
        <span id="1"></span>
        <ScrollGsap>
        <div className="flex justify-center flex-col items-center">
        <div className="mt-[4.5rem] xl:mt-24 flex flex-col gap-4 max-w-[90%] ">
          <div className="text-center relative ">
            <H1>Você sente que tá meio travada?</H1>
          </div>
          <span>
            <Paragraph>
              Como se tivesse muita coisa dentro de você querendo sair, mas não
              sabe por onde começar?
            </Paragraph>
          </span>
        </div>
        <span id="2"></span>
        <div className="mt-6 xxl:mt8">
          <Button />
        </div>

        <div className="flex flex-col gap-4 max-w-[90%]">
          <div id="2" className="text-center relative">
            <H1>O que é a vibra?</H1>
          </div>
          <span>
            <Paragraph>
              É um grupo no WhatsApp só com meninas que querem sair da
              estagnação e começar a virar a chave.
            </Paragraph>
          </span>

          <div className="flex justify-center xxl:mt8">
            <SectionInformation />
          </div>

          <div className="flex justify-center mt-6 xxl:mt8">
            <CardInformation />
          </div>
        </div>
        <span id="3"></span>
        <div className="mt-6 xxl:mt-8 ">
          <Button />
        </div>
        </div>
        </ScrollGsap>
        <ScrollGsap>
          <div className="flex flex-col justify-center items-center">
            <div className="mt-6 xxl:mt8">
              <Profile />
            </div>
          </div>
        </ScrollGsap>
        <ScrollRightToLeft>
          <div className="flex flex-col justify-center items-center">
            <div className="w-full flex flex-col gap-4 mt-6 xxl:mt-8 flex-wrap justify-center items-center xl:flex-row lg:max-w-[65%]">
              <SectionIcons />
            </div>

            <div className="mt-6 xxl:mt-8">
              <Button />
            </div>
          </div>
        </ScrollRightToLeft>

        <span id="4"></span>

        <ScrollLeftToRight>
          <div className="flex flex-col items-center mt-6 xxl:mt-8 ">
            <div className="text-center relative">
              <H1>Feedbacks</H1>
            </div>

            <span className="mt-6 xxl:mt-8">
              <ImageCarousel />
            </span>
          </div>
        </ScrollLeftToRight>
        <ScrollGsap >
          <div className="flex flex-col justify-center items-center">
            <div
              id="5"
              className="flex flex-col gap-4 max-w-[90%] mt-6 xxl:mt-8 mb-6 xxl:mb-8"
            >
              <H1>E o melhor...</H1>
              <span>
                <Paragraph>
                  É de graça! Sem enrolação. Sem promessa mirabolante. Só um
                  espaço real, com muita troca e transformação juntas.
                </Paragraph>
              </span>
            </div>
          </div>
        </ScrollGsap>
        <Footer />
      </div>
    </>
  );
}

export default App;
