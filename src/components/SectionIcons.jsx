import { Dumbbell, HeartHandshake,Play, Sprout, TriangleAlert } from "lucide-react";
import Paragraph from "./Paragraph";
import DivIcons from "./DivIcons";
import Icon from "./Icon";


const SectionIcons = () => {
    return ( 
        <> 
        <DivIcons>
          <Icon>
            <Dumbbell size={80} strokeWidth={1.25} className="text-darkPink" />
          </Icon>
          <Paragraph>
            Quer criar novos hábitos mas não sabe por onde começar
          </Paragraph>
        </DivIcons>

        <DivIcons>
          <Icon>
            <Play size={80} strokeWidth={1.25} className="text-darkPink" />
          </Icon>
          <Paragraph>Pra quem sente que tá parada e quer se mexer.</Paragraph>
        </DivIcons>

        <DivIcons>
          <Icon>
            <Sprout size={80} strokeWidth={1.25} className="text-darkPink" />
          </Icon>
          <Paragraph>Sente que precisa de leveza, direção e acolhimento</Paragraph>
        </DivIcons>

        <DivIcons>
          <Icon>
            <TriangleAlert size={80} strokeWidth={1.25} className="text-darkPink" />
          </Icon>
          <Paragraph>Vive se sabotando e quer sair desse ciclo</Paragraph>
        </DivIcons>

        <DivIcons>
          <Icon>
            <HeartHandshake size={80} strokeWidth={1.25} className="text-darkPink" />
          </Icon>
          <Paragraph>
            Gosta de estar em grupo e trocar com outras meninas
          </Paragraph>
        </DivIcons>
        </>
     );
}
 
export default SectionIcons;