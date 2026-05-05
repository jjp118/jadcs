
import './App.css'
import Container from './Container'


function App() {
  

  return (
    <div className="page bg-[#9BB291] w-screen h-screen flex flex-col  items-center">
      <div className="bg-[#98B06F] h-[5%] w-full flex items-center justify-center relative">
        <div className="content  h-full w-[50%] flex items-center justify-between">
          <div className="name">
            <h1 className='font-bold text-3xl text-white'>JADCS</h1>
          </div>
          <div className="flex flex-row ">
            <h1 className='m-2 text-white font-bold link cursor-pointer'>About</h1>
            <h1 className='m-2 text-[#F3B391] font-bold link cursor-pointer'><a href="https://givebutter.com/laptops-for-stem-students-y64rsa">Donate</a></h1> 
          </div>
        </div>
        </div>

        <Container />
        

    </div>
  )
}

export default App
