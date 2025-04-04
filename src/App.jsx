import "./App.css";
import H1 from "./components/H1";
import Header from "./components/Header";
import Paragraph from "./components/Paragraph";
import CardInformation from "./components/CardInformation";

import Button from "./components/Button";
import SectionInformation from "./components/SectionInformation";
import Profile from "./components/Profile";
import { BusIcon, Dumbbell, HeartHandshake, Play, Sprout, TriangleAlert } from "lucide-react";
import Cards from "./components/Icon";
import Icon from "./components/Icon";

function App() {
  return (
    <>
      <div className=" flex flex-col items-center  h-screen  bg-whiteMain m-0 p-0 overflow-auto">
        <Header />
        <div className="mt-[3.5rem] xl:mt-20 flex flex-col gap-4 max-w-[90%]">
          <div className="text-center relative">
            <H1>Você sente que tá meio travada?</H1>
          </div>
          <span>
            {" "}
            <Paragraph>
              Como se tivesse muita coisa dentro de você querendo sair, mas não
              sabe por onde começar?
            </Paragraph>{" "}
          </span>
        </div>
        <div className="mt-6 xxl:mt8">
          <Button />
        </div>
        <div className=" flex flex-col gap-4">
          <div className="text-center relative">
            <H1>O que é a vibra?</H1>
          </div>
          <span>
            {" "}
            <Paragraph>
              É um grupo no WhatsApp só com meninas que querem sair da
              estagnação e começar a virar a chave.
            </Paragraph>{" "}
          </span>
          <div className="flex justify-center xxl:mt8">
            <SectionInformation />
          </div>
          <div className="flex justify-center mt-6 xxl:mt8">
            <CardInformation />
          </div>
        </div>
        <div className="mt-6 xxl:mt-8">
          <Button />
        </div>
        <div className="mt-6 xxl:mt8">
          <Profile />
        </div>
        <div className="mt-6 xxl:mt8 border-2 round border-darkPink w-full max-w-[70%] flex flex-col gap-2 p-6 rounded-3xl ">
          <Icon>
            <Dumbbell size={80} strokeWidth={1.25} className="text-darkPink" />
          </Icon>
          <Paragraph>
            Quer criar novos hábitos mas não sabe por onde começar
          </Paragraph>
        </div>
        <div className="mt-6 xxl:mt8 border-2 round border-darkPink w-full max-w-[70%] flex flex-col gap-2 p-6 rounded-3xl ">
          <Icon>
            <Play size={80} strokeWidth={1.25} className="text-darkPink" />
          </Icon>
          <Paragraph>
          Pra quem sente que tá parada e quer se mexer.
          </Paragraph>
        </div>
        <div className="mt-6 xxl:mt8 border-2 round border-darkPink w-full max-w-[70%] flex flex-col gap-2 p-6 rounded-3xl ">
          <Icon>
            <Sprout size={80} strokeWidth={1.25} className="text-darkPink" />
          </Icon>
          <Paragraph>
          Sente que precisa de leveza, direção e acolhimento
          </Paragraph>
        </div>
        <div className="mt-6 xxl:mt8 border-2 round border-darkPink w-full max-w-[70%] flex flex-col gap-2 p-6 rounded-3xl ">
          <Icon>
            <TriangleAlert size={80} strokeWidth={1.25} className="text-darkPink" />
          </Icon>
          <Paragraph>
          Vive se sabotando e quer sair desse ciclo
          </Paragraph>
        </div>
        <div className="mt-6 xxl:mt8 border-2 round border-darkPink w-full max-w-[70%] flex flex-col gap-2 p-6 rounded-3xl ">
          <Icon>
            <HeartHandshake size={80} strokeWidth={1.25} className="text-darkPink" />
          </Icon>
          <Paragraph>
          Gosta de estar em grupo e trocar com outras meninas
          </Paragraph>
        </div>
      </div>
    </>
  );
}

export default App;
