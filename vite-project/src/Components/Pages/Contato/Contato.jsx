import Header from '../../Header/Header'
import './contato.css'

export default function Contato() {
    return(
        <>
            <Header />
            <div className="container">
                <div className="textos">
                    <h1 className='tituloCtt'>Dúvidas e suporte, entre em contato:</h1><br></br>
                    <div className="icon-container">
                        <div className="icon1">
                            <img className='iconIMG' src="/Imagens/twitter.png" alt="TwitterIMG" />
                        </div>
                        <div className="icon2">
                            <img className='iconIMG' src="/Imagens/InstagramIMG.png" alt="InstagramIMG" />
                        </div>
                        <div className="icon3">
                            <img className='iconIMG' src="/Imagens/discordIMG.png" alt="DiscordIMG" />
                        </div>
                    </div>
                </div>
                <div className="linha"></div>
                <div className="container-direita">
                    <form>
                        <div className="input-group">
                            <label htmlFor="nome">Nome:</label>
                            <input type="text" id="nome" name='nome' required />
                        </div>
                        
                        <div className="input-group">
                            <label htmlFor="email">E-mail:</label>
                            <input type="email" id="email" name='email' required />
                        </div>
                        
                        <div className="input-group">
                            <label htmlFor="mensagem">Mensagem:</label>
                            <textarea name="mensagem" id="mensagem" rows="5" required></textarea>
                        </div>
                        
                        <button className='enviar' type='submit'>Enviar</button>
                    </form>
                </div>
            </div>
        </>
    )
}