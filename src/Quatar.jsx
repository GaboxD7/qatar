
import reactLogo from './assets/react.svg'
import './quatar.css'

function App() {


  return (
    <div className="App">
      <div className='container-logo'>
         <img className='logoQatar' logo src="../public/images/qatar-2022-logoletra.png" alt="" />
      </div>
     <div className='containerVs'> 
        <div className='containerVsIn'>
          <div className='container-fecha'>
               <h3>20/11/2022</h3><h5>13:00</h5>
          </div>
          <div className='container-team'>
            <div className='container-flag'>
              <h6>Qatar</h6>
              <span className="fi fi-qa flag"></span>
            </div>
            <div className='container-puntos'>
              <span>0</span>
              <span>-</span>
              <span>1</span>
            </div>
        
            <div className='container-flag'>
              <h6>Ecuador</h6>
              <span className="fi fi-ec flag"></span>
            </div>
            
          </div>
          
        </div>
     </div>
    {/* <span className="fi fi-qa flag"></span>*/}
    </div>
  )
}

export default App
