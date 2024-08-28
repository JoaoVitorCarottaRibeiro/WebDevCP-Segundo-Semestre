import Header from '../../Header/Header'
import './sobre.css'

export default function Sobre() {
    return(
        <>
            <Header />
            <div className="container">
                <section className="secao1">
                    <div className="textos">
                    <h1 className="titulo">Bem-vindo à revolução dos vídeos!</h1><br></br>
                    <p className="paragrafo">Somos uma startup com o objetivo de facilitar a produção de conteúdo em larga escala com qualidade profissional, capaz de atingir uma audiência de milhões de seguidores.</p><br></br>
                    <button className="btnAPP">Baixe o app</button>
                    </div>
                    <div>
                        <img className='celularesIMG' src="/Imagens/IMGsobre.png" alt="IMGsobre" />
                    </div>

                </section>    
            </div>
            <section className='secao2'>
                <h1 className='titulosec2'>Planos</h1>
                <img className='IMGcelulares' src="/Imagens/IMGcelulares.png" alt="IMGcelulares" />
            </section>
        </>


    )
}