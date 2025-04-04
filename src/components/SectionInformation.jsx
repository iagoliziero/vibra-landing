import { Brain, HandHeart, Leaf, Wind } from 'lucide-react'
import Paragraph from './Paragraph';

const SectionInformation = () => {
    return ( 
        <div className='flex flex-col mt-6 xxl:mt-8 items-start justify-start relative right-5 '>
            <div className='flex gap-2'>
            <span>
              <Leaf className='text-darkPink' />
            </span>
              <Paragraph>
              Sem pressão.
              </Paragraph>
              </div>
              <div className='flex gap-2'>
            <span>
              <HandHeart className='text-darkPink' />
            </span>
              <Paragraph>
              Acolhimento
              </Paragraph>
              </div>
              <div className='flex gap-2'>
            <span>
              <Wind className='text-darkPink' />
            </span>
              <Paragraph>
              Leveza
              </Paragraph>
              </div>
              <div className='flex gap-2'>
            <span>
              <Brain className='text-darkPink' />
            </span>
              <Paragraph>
              Ação
              </Paragraph>
              </div>
      
            </div> 
     );
}
 
export default SectionInformation;