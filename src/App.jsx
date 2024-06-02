import { useEffect } from 'react'
import './App.css'
import UseGlobalState from './components/context'

function App() {
  const { state, dispatch } = UseGlobalState()

  useEffect(() => {
    setTimeout(() => {
      dispatch({ type: "changeName", payload: { name: "begum", surName: "irci" } });
    }, 2000)
  }, [])

  console.log(state);
  return (
    <>

      Global state Context
    </>
  )
}

export default App

