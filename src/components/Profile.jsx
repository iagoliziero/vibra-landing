import Button from "./Button";
import H1 from "./H1";
import H2 from "./H2";
import Paragraph from "./Paragraph";

const Profile = () => {
    return ( 
        <div className="flex flex-col items-center h-[55rem] lg:h-[37rem] w-full bg-lightPink overflow-hidden mb-10 *:lg:mb-0 lg:rounded-3xl shadow-lg shadow-lightPink/50">
            <div className=' flex gap-8 max-w-[80%] '>
                <div className='text-center relative flex flex-col items-center justify-center  '>
                    <div className="mt-6 xxl:mt8 flex flex-col items-center justify-center max-w-4xl md:max-w-2xl">
                        <H1> 
                        Quem está por trás?
                        </H1>
                    <img src="./public/imgAna.png" alt="Imagem Ana Luyza" className="h-60 rounded-full w-60 bg-whiteBG mt-6  xxl:mt8 lg:hidden" />
                    </div>
                    <span className="mt-6"> <Paragraph> 
                    Oi! Eu sou a Ana Luyza, influenciadora digital,
                    <br /> estudante de nutrição e uma menina como você: cheia de sonhos, mas que já se viu perdida no meio do caminho.
                    </Paragraph> </span>
                    <br />
                    <span> <Paragraph> 
                    A Comunidade Vibra nasceu do meu próprio processo - de quando eu precisei reconstruir minha rotina, me entender e aprender a fazer as pazes com o tempo, com meu corpo e com a minha mente.
                    </Paragraph> </span>
                    <div className="relative lg:left-48 ">
                    <H2> 1% melhor que ontem!</H2> 
                    <div className="flex justify-center mt-6 xxl:mt8">
                        <Button />
                     </div>  
                    </div>
                     </div>  
                     <div className="hidden lg:block relative top-20">
                        <img  src="./public/imgAna.png" alt="Imagem Ana Luyza" className="h-[20rem] rounded-full w-[25rem] bg-whiteBG " />
                     </div>
          </div>
            
          
        </div>
     );
}
 
export default Profile;