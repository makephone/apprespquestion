import { useRef , useState } from 'react'
import axios from 'axios'
import './App.css';

function App() {

  const entrada = useRef()

  const [numero, setNumero] = useState(null)
  

  function dolarReal() {
  pesquisaDR(entrada.current.value)
  }

  function realDolar() {
    pesquisaRD(entrada.current.value)
    }

  function pesquisaRD(texto) {
    
    if(texto===""){
      return false
    }    
      axios.get('https://economia.awesomeapi.com.br/BRL-USD/1').then(
      resposta => setNumero(resposta.data[0].ask*texto)
    )
  }

  function pesquisaDR(texto) {
    if(texto==="" && typeof texto !== 'number'){
      return false
    }    
    axios.get('https://economia.awesomeapi.com.br/USD-BRL/1').then(
      resposta => setNumero(resposta.data[0].ask*texto)
    )    
  }


  

  return (
    <div className="App">
      <input type="numb" ClassName="input-field " ref={entrada}  ></input> 
      <button className="Button waves-effect waves-light btn red" onClick={dolarReal}>Dolar/Real</button>
      <button className="Button waves-effect waves-light btn" onClick={realDolar}>Real/Dolar</button>
      {numero!==null&&(<div><p>O Dinheiro Vale Agora:R${numero.toFixed(2)}!</p></div>)}  
    </div>
  );
}

export default App;
