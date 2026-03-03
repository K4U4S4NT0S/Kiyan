import "./App.css";
import logo from "./assets/logo.png";
import predio from "./assets/fotoPredio.png";
import apresentacao from "./assets/apresentacao.png";

function App() {
  return (
    <>
      <nav>
        <div>
          <img className="logo" src={logo} alt="Logo Kiyan" />
        </div>
        <div className="menu">
          <ul>
            <li>
              <a href="#">Sobre nos</a>
            </li>
            <li>
              <a href="#">Produtos</a>
            </li>
            <li>
              <a href="#">Certificações</a>
            </li>
            <li>
              <a href="#">Representantes</a>
            </li>
          </ul>
        </div>
        <div>
          <ul>
            <li>
              <a className="faleConosco" href="#">
                Fale Conosco
              </a>
            </li>
          </ul>
        </div>
      </nav>
      <main>
        <div className="container">
          <div>
            <img src={apresentacao} alt="" />
          </div>
          <div className="textoApresentacao">
            <h3>Brocas para Perfuração Cranial</h3>
            <h1>PerfectDrill</h1>
            <h3>Quando errar não é uma opção</h3>
            <div className="btn">
              <a href="#">Conheça &gt; </a>
            </div>
          </div>
        </div>

        <div className="cor">
          <div className="container">
            
          </div>
        </div>
      </main>
    </>
  );
}

export default App;
