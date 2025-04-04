import { Menu } from "lucide-react";

const Header = () => {
    return ( 
        <header className='bg-lightPink  fixed top-0 right-0 w-full m-0 p-5 flex justify-center items-center'>
          <div className='flex justify-between items-center w-full max-w-4xl md:max-w-2xl'>
          <h1 className='font-darker font-semibold text-3xl md:text-4xl xxl:text-[3rem] '>Comunidade Vibra</h1>
          <span> <Menu size={30} className="cursor-pointer" /> </span>
        </div>
        
      </header>
     );
}
 
export default Header;