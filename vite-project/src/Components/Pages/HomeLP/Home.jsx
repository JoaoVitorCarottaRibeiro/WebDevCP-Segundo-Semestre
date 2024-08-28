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
            <div className="cards">
               <div className="card1">
                    <div className="redes-sociais">
                        <h1 className='numero'>01</h1>
                        <h2>Youtube</h2>
                        <p className='conteudo'>Produza conteúdo cativante e conquiste seu público com vídeos de alta qualidade no maior palco digital do mundo. </p>
                    </div>
                    <div className="icon">
                        <img className='iconIMG' src="/Imagens/ytIMG.png" alt="YT" />
                    </div>
               </div>
               <div className="card2">
                    <div className="redes-sociais">
                        <h1 className='numero'>02</h1>
                        <h2>Tiktok</h2>
                        <p className='conteudo'>Faça sua criatividade brilhar em vídeos curtos e envolventes que vão cativar a comunidade global do TikTok.</p>
                    </div>
                    <div className="icon">
                        <img className='iconIMG'  src="/Imagens/ttkIMG.png" alt="TTK" />
                    </div>
               </div>
               <div className="card3">
                    <div className="redes-sociais">
                        <h1 className='numero'>03</h1>
                        <h2>Facebook</h2>
                        <p className='conteudo' >Conecte-se com sua audiência de forma autêntica e impactante através de vídeos que se destacam no feed do Facebook.</p>
                    </div>
                    <div className="icon">
                        <img className='iconIMG' src="/Imagens/faceIMG.png" alt="FaceIMG" />
                    </div>
               </div>
               <div className="card4">
                    <div className="redes-sociais">
                        <h1 className='numero'>04</h1>
                        <h2>Instagram</h2>
                        <p className='conteudo'>Compartilhe suas histórias de maneira única e conquiste milhões de likes no Instagram utilizando Stories e Reels.</p>
                    </div>
                    <div className="icon">
                        <img className='iconIMG' src="/Imagens/InstaIMG.png" alt="instaIMG" />
                    </div>
               </div>
            </div>
        </>
    )
}