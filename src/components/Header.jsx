import DropDownMenu from "./DropDownMenu";

const Header = () => {
    return ( 
        <header className='bg-lightPink  fixed top-0 right-0 w-full m-0 p-5 flex justify-center items-center z-50'>
          <div className='flex justify-center items-center w-full max-w-4xl md:max-w-2xl'>
        <img src="./public/LogoVibra.png" alt="Logo comunidade vibra" className="w-36 xxl:w-48" />
        </div>
        <DropDownMenu />
      </header>
     );
}
 
export default Header;