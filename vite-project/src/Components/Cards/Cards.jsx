import Yt from '../../../public/Imagens/ytIMG.png'
import Ttk from '../../../public/Imagens/ttkIMG.png'
import Face from '../../../public/Imagens/faceIMG.png'
import Insta from '../../../public/Imagens/InstaIMG.png'

export default function Card({numero,rede_social, texto, numero2, rede_social2, texto2, numero3, rede_social3, texto3, numero4, rede_social4, texto4}){
    return(
        <>
            <div className="cards">
               <div className="card1">
                    <div className="redes-sociais">
                        <h1 className='numero'>{numero}</h1>
                        <h2>{rede_social}</h2>
                        <p className='conteudo'>{texto}</p>
                    </div>
                    <div className="icon">
                        <img className='iconIMG' src={Yt} alt="YT" />
                    </div>
               </div>
               <div className="card2">
                    <div className="redes-sociais">
                        <h1 className='numero'>{numero2}</h1>
                        <h2>{rede_social2}</h2>
                        <p className='conteudo'>{texto2}</p>
                    </div>
                    <div className="icon">
                        <img className='iconIMG'  src={Ttk} alt="TTK" />
                    </div>
               </div>
               <div className="card3">
                    <div className="redes-sociais">
                        <h1 className='numero'>{numero3}</h1>
                        <h2>{rede_social3}</h2>
                        <p className='conteudo' >{texto3}</p>
                    </div>
                    <div className="icon">
                        <img className='iconIMG' src={Face} alt="FaceIMG" />
                    </div>
               </div>
               <div className="card4">
                    <div className="redes-sociais">
                        <h1 className='numero'>{numero4}</h1>
                        <h2>{rede_social4}</h2>
                        <p className='conteudo'>{texto4}</p>
                    </div>
                    <div className="icon">
                        <img className='iconIMG' src={Insta} alt="instaIMG" />
                    </div>
               </div>
            </div>
        </>
    )
}