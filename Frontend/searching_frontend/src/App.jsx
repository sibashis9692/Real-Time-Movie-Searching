import { useState } from 'react'

import './assets/css/app.css'

import Api_calling from './components/api_calling'

function App() {
  const [quearyset, setQuearyset] = useState(null)


  function type() {
    const value = document.getElementById("input").value

    setQuearyset(value)
  }

  return (
    <>
      <div className="container">

        <div className="row d-flex justify-content-center mt-5 ">

          <div className="col-md-8">


            <div className="card">

              <div className="d-flex justify-content-center align-items-center">

                <span className="font-weight-bold">Real Time Movie Searching</span>

              </div>

              <div className="mt-3 inputs">
                <i className="fa fa-search"></i>
                <input type="text" id="input" className="form-control " placeholder="Search Movies..." onChange={type} value={quearyset} autocomplete="off" />

              </div>



              <Api_calling quearyset={quearyset} setQuearyset={setQuearyset} />
            </div>
          </div>


        </div>

      </div>
    </>
  )
}

export default App
