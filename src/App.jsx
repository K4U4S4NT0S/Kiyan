import "./App.css";
import logo from "./assets/logo.png";
import predio from "./assets/fotoPredio.png";
import apresentacao from "./assets/apresentacao.png";
import produtos from "./assets/produtos.png";
import iso from "./assets/iso13485.png";

function App() {
  return (
    <>
      <nav className="vidro">
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
        <div className="borda">
          <div className="container">
            <div className="divImage">
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
              <div className="divImage">
                <img src={predio} alt="" />
              </div>
              <div className="textoSobre">
                <h2>Segurança em suas mãos</h2>
                <div className="paragrafoSobre vidro">
                  <p>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Atque, illum? Excepturi quod aspernatur rerum consectetur
                    velit? Ad similique totam culpa vitae ut aliquid nihil quas
                    repudiandae, unde ex nostrum soluta!
                  </p>
                  <p>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Atque, illum? Excepturi quod aspernatur rerum consectetur
                    velit? Ad similique totam culpa vitae ut aliquid nihil quas
                    repudiandae, unde ex nostrum soluta!
                  </p>
                  <p>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Atque, illum? Excepturi quod aspernatur rerum consectetur
                    velit? Ad similique totam culpa vitae ut aliquid nihil quas
                    repudiandae, unde ex nostrum soluta!
                  </p>
                </div>
              </div>
            </div>
            <div className="verMais">
              <div className="btnVerMais">
                <a href="#">Ver Mais &gt; </a>
              </div>
            </div>
            <div className="barrinha">
              <div className="corBarrinha vidro"></div>
            </div>
          </div>
          <div className="produtos">
            <img src={produtos} alt="" />
            <h1>PerfectDrill</h1>
            <div className="vidro textoProdutos">
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minus
                dolor distinctio repudiandae molestiae totam nulla, voluptates
                impedit necessitatibus ipsam iste exercitationem enim omnis
                quibusdam officia, aliquam quod eius nihil tempore?
              </p>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minus
                dolor distinctio repudiandae molestiae totam nulla, voluptates
                impedit necessitatibus ipsam iste exercitationem enim omnis
                quibusdam officia, aliquam quod eius nihil tempore?
              </p>
            </div>
            <div className="corBarrinha2"></div>
          </div>
          <div className="cor">
            <div className="certificado">
              <h1>Certificações Nacionais</h1>
              <div className="container">
                <div className="carrosel">
                  <div className="fundoCertificado">
                    <img src={iso} alt="" />
                  </div>
                  <div className="displayBolinhas">
                    <div className="bolinha"></div>
                    <div className="bolinha"></div>
                  </div>
                </div>
                <div className="textoCertificado">
                  <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Eveniet tenetur sit explicabo, voluptatem, ipsum ullam
                    beatae voluptates nostrum incidunt quis iusto illum expedita
                    ratione assumenda aliquid in aliquam magni nam?
                  </p>
                  <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Eveniet tenetur sit explicabo, voluptatem, ipsum ullam
                    beatae voluptates nostrum incidunt quis iusto illum expedita
                    ratione assumenda aliquid in aliquam magni nam?
                  </p>
                  <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Eveniet tenetur sit explicabo, voluptatem, ipsum ullam
                    beatae voluptates nostrum incidunt quis iusto illum expedita
                    ratione assumenda aliquid in aliquam magni nam?
                  </p>
                  <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Eveniet tenetur sit explicabo, voluptatem, ipsum ullam
                    beatae voluptates nostrum incidunt quis iusto illum expedita
                    ratione assumenda aliquid in aliquam magni nam?
                  </p>
                </div>
              </div>
            </div>
            <div className="barrinha">
              <div className="corBarrinha vidro"></div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default App;
