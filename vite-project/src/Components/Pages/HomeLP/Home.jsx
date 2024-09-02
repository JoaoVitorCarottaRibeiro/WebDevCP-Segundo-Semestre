import Card from '../../Cards/Cards'
import Header from '../../Header/Header'
import './home.css'


export default function Home() {
    return(
        <>
            <Header />
            <div className='container'>
                <div className='textos'>
                    <h1>Crie seus vídeos online</h1><br></br>
                    <p>Transforme suas ideias em filmes memoráveis: onde a criatividade encontra a simplicidade.</p><br></br>
                    <button className='btnComecarAgora'>Começar agora!</button>
                </div>
                <div>
                    <img className='IMGcontainer' src="/Imagens/ImgHome.png" alt="ImgHome" />
                </div>
            </div>
            <Card />
        </>
    )
}