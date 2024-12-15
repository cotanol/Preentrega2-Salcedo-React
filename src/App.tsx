

import Greeting from './components/ItemListContainer/Greeting'

import ItemListContainer from './components/ItemListContainer/ItemListContainer';


const miSaludo = "Bievenido a la tienda";

function App() {

  return(
    <>
      
      <Greeting saludo={miSaludo} />
      <ItemListContainer />
    </>
    
    
  )
  
}

export default App
