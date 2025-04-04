
import './App.css'
import Card from './components/Card'
import H1 from './components/H1'
import Header from './components/Header'
import Paragraph from './components/Paragraph'
import CardInformation from './components/CardInformation'

function App() {


  return (
    <>
      <div className=' flex flex-col items-center  h-screen  bg-whiteMain m-0 p-0'>
        <Header />
          <div className='mt-[3.5rem] xl:mt-16 flex flex-col gap-4 max-w-[90%]'>
            <div className='text-center'>
              <H1> 
              Você sente que tá 
              meio travada?
              </H1>
            </div>
            <span> <Paragraph> 
            Como se tivesse muita coisa dentro de você querendo sair, mas não sabe por onde começar?
              </Paragraph> </span>
              
          </div>
      </div>
    </>
  )
}

export default App
