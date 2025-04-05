import Paragraph from "./Paragraph";
import Tooltip from "./Tooltip";

const Footer = () => {
    return ( 
        <footer className="bg-lightPink flex-col w-full m-0 p-5 flex justify-center items-center z-50 mt-6 xxl:mt-8'">
          <div className="flex justify-center items-center w-full max-w-4xl md:max-w-2xl p-6">
            <Tooltip />
          </div>
          <span > <Paragraph> @analuzyza. Todos os direitos reservados.</Paragraph>  </span>
        </footer>
     );
}
 
export default 
Footer;