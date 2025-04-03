import { Menu } from "lucide-react";

const Header = () => {
    return ( 
        <header className='bg-lightPink  fixed top-0 right-0 w-full  m-0 p-5 flex justify-center items-center '>
        <div className='flex justify-between items-center w-full max-w-4xl'>
          <h1 className='font-darker text-3xl font-semibold lg:text-4xl'>Comunidade Vibra</h1>
          <span> <Menu size={30} className="cursor-pointer" /> </span>
        </div>
      </header>
     );
}
 
export default Header;