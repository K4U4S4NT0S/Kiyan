import './App.css'
import logo from './assets/logo.png'

function App() {
  return (
    <>
      <nav>
        <div>
          <img className='logo' src={logo} alt="Logo Kiyan" />
        </div>
        <div className='menu'>
          <ul>
            <li><a href="#">Sobre nos</a></li>
            <li><a href="#">Produtos</a></li>
            <li><a href="#">Certificações</a></li>
            <li><a href="#">Representantes</a></li>
          </ul>
        </div>
        <div className='faleConosco'>
          <ul>
            <li><a href="#">Fale Conosco</a></li>
          </ul>
        </div>
      </nav>
    </>
  )
}

export default App
