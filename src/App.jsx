
import './App.css'
import Card from './components/CardInformation'
import H1 from './components/H1'
import Header from './components/Header'
import Paragraph from './components/Paragraph'

function App() {


  return (
    <>
      <body className='h-screen  bg-whiteMain m-0 p-0'>
        <Header />
        <main>
          <div className='mt-16 xxl:mt-20 flex flex-col items-center justify-center gap-4 '>
            <H1> 
            Você sente que tá 
            meio travada?
            </H1>
            <span> <Paragraph> 
            Como se tivesse muita coisa dentro de você querendo sair, mas não sabe por onde começar?
              </Paragraph> </span>
          </div>
        </main>
      </body>
    </>
  )
}

export default App
