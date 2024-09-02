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
            <Card numero={'01'} rede_social={'Youtube'} texto={'Produza conteúdo cativante e conquiste seu público com vídeos de alta qualidade no maior palco digital do mundo.'} numero2={'02'} rede_social2={'Tiktok'} texto2={'Faça sua criatividade brilhar em vídeos curtos e envolventes que vão cativar a comunidade global do TikTok.'} numero3={'03'} rede_social3={'Facebook'} texto3={'Conecte-se com sua audiência de forma autêntica e impactante através de vídeos que se destacam no feed do Facebook.'} numero4={'04'} rede_social4={'Instagram'} texto4={'Compartilhe suas histórias de maneira única e conquiste milhões de likes no Instagram utilizando Stories e Reels.'}/>
        </>
    )
}