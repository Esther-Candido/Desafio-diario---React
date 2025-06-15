
import './App.css'
import Button from './components/Button'
import Header from './components/Header'
import Counter from './components/Counter'
import InputText from './components/InputText'
import UserForm from './components/UserForm'
import MultiStepForm from './components/MultiStepForm'
import ProductList from './components/ProductList'

function App() {
  
//funcao para mostrar um alert
const handleClick = () => {
  alert('Você clicou no botão!');
}

const soma = () =>{
  alert("1 + 2 =" + (1 + 2));
}

const vezes = () =>{
  alert("1 * 2 =" + (1 * 2));
}

  return (
    <>
      <div>
       <Header />
       <Button label="clique aqui" onClick={handleClick}/>
       <Button label="Somar" onClick={soma}/>
       <Button label="Vezes" onClick={vezes}/>
      <br></br>
       <Counter />
       <br></br>
       <InputText />
       <br></br>
       <br></br>
       <UserForm />
        <br></br>
      <div>
        <h1>Cadastro Multi-Etapas</h1>
        <MultiStepForm />
      </div>
      </div>
      <br></br>
       <div>
        <h1>Minha Loja</h1>
        <ProductList />
      </div>
      
    </>
  )
}

export default App
