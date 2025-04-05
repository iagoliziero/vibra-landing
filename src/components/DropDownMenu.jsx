import { Menu, X } from "lucide-react";
import { useState } from "react";

const DropDownMenu = () => {
    const [isOpen, setIsOpen] = useState(false);

    return ( 
        <div className="relative right-0 z-50 flex items-center">
            <button onClick={() => setIsOpen(!isOpen)}> {!isOpen ? <Menu size={30} className="cursor-pointer" /> : <X size={30} className="cursor-pointer"  />} </button>
            {isOpen  && (
                <div className="absolute top-10 right-0 bg-white shadow-lg rounded-md p-5 w-44 text-center">
                    <div className="flex flex-col items-center gap-2 ">
                        <button className="hover:bg-gray-200 p-2 rounded-md text-xl font-medium ">Você sente que tá meio travada?</button>
                        <button className="hover:bg-gray-200 p-2 rounded-md text-xl font-medium ">O que é a vibra?</button>
                        <button className="hover:bg-gray-200 p-2 rounded-md text-xl font-medium">Quem está por trás?</button>
                        <button className="hover:bg-gray-200 p-2 rounded-md text-xl font-medium">Feedbacks</button>
                        <button className="hover:bg-gray-200 p-2 rounded-md text-xl font-medium">E o melhor...</button>
                    </div>
                </div>
            )}
        </div>
     );
}
 
export default DropDownMenu;