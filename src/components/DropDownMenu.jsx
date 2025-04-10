import { Menu, X } from "lucide-react";
import { useState } from "react";


const DropDownMenu = () => {
    const [isOpen, setIsOpen] = useState(false);

    return ( 
        <div className="relative right-0 z-50 flex items-center">
            <a onClick={() => setIsOpen(!isOpen)}> {!isOpen ? <Menu size={30} className="cursor-pointer" /> : <X size={30} className="cursor-pointer"  />} </a>
            {isOpen  && (
                <div className="absolute top-10 right-0 bg-darker  border-2 border-darkPink rounded-md p-5 w-44 text-center">
                    <div className="flex flex-col items-center gap-2 ">
                        <a href="#1" className="hover:text-darkPink transform duration-500 p-2 rounded-md text-xl font-medium  text-white">Você sente que tá meio travada?</a>
                        <a href="#2" className="hover:text-darkPink p-2 rounded-md duration-500 text-xl font-medium  text-white">O que é a vibra?</a>
                        <a href="#3" className="hover:text-darkPink p-2 rounded-md text-xl duration-500 font-medium  text-white">Quem está por trás?</a>
                        <a href="#4" className="hover:text-darkPink p-2 rounded-md text-xl duration-500 font-medium  text-white">Feedbacks</a>
                        <a href="#5" className="hover:text-darkPink transform duration-500 p-2 rounded-md text-xl font-medium text-white">E o melhor...</a>
                    </div>
                    <div className="mt-10">
                    <a href="https://wa.me/5511968995367?text=Ol%C3%A1%2C%20quero%20fazer%20parte%20da%20comunidade%20Vibra%20%F0%9F%8C%9F" className="hover:text-darkPink text-darkPink p-2 rounded-md text-xl font-medium ">Entrar agora</a>
                    </div>
                </div>
            )}
        </div>
     );
}
 
export default DropDownMenu;