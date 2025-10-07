//<div className={style.fotoContainer}></div>
// 
import { useEffect } from "react";
import style from "../../style/convidados.module.css";
import { Footer } from "../../shared/footer";
import { Navbar } from "../../shared/navbar";

export const Convidados = () =>{
    useEffect(() => {
    document.title = "Convidados";
  }, []);


    return(
        <>
        <Navbar/>
        <div className={style.body} translate="no">
            <h1>Convidados</h1>

            <div className={style.convidadosContainer}>

                <div className={style.convidado}>
                    <div className={style.fotoContainer}>
                        <img className={style.foto} src="/AdrianaPereira.jpg"/>
                    </div>
                   <span className={style.info}>
                        <strong><p className={style.nomeConvidado}>Dra. Adriana Pereira de Oliveira</p></strong>
                        <p>Mini-curso</p>
                    </span>
                </div> 

                <div className={style.convidado}>
                    <div className={style.fotoContainer}>
                        <img className={style.foto} src="/VóMera.png"/>
                    </div>
                   <span className={style.info}>
                        <strong><p className={style.nomeConvidado}>Vó Mera  (Domerina Nicolau da Silva)</p></strong>
                        <p>Palestrante</p>
                    </span>
                </div> 

                <div className={style.convidado}>
                    <div className={style.fotoContainer}>
                        <img className={style.foto} src="/AndersonBelmont.png"/>
                    </div>
                   <span className={style.info}>
                        <strong><p className={style.nomeConvidado}>Dr. Anderson Belmont Correia de Oliveira</p></strong>
                        <p>Mini-curso</p>
                    </span>
                </div> 

                <div className={style.convidado}>
                    <div className={style.fotoContainer}>
                        <img className={style.foto} src="/EmersonBu.jpg"/>
                    </div>
                   <span className={style.info}>
                        <strong><p className={style.nomeConvidado}>Dr. Emerson do Bú</p></strong>
                        <p>Palestrante</p>
                    </span>
                </div>

                <div className={style.convidado}>
                    <div className={style.fotoContainer}>
                        <img className={style.foto} src="/CarilesSilva.jpg"/>
                    </div>
                   <span className={style.info}>
                        <strong><p className={style.nomeConvidado}>Dra. Cariles Silva de Oliveira</p></strong>
                        <p>Palestrante</p>
                    </span>
                </div>

                <div className={style.convidado}>
                    <div className={style.fotoContainer}>
                        <img className={style.foto} src="/PadrePaulo.png"/>
                    </div>
                   <span className={style.info}>
                        <strong><p className={style.nomeConvidado}>Paulo Cordeiro Fontes</p></strong>
                        <p>Mini-curso</p>
                    </span>
                </div> 

                <div className={style.convidado}>
                    <div className={style.fotoContainer}>
                        <img className={style.foto} src="/Daniel Figueira.png"/>
                    </div>
                   <span className={style.info}>
                        <strong><p className={style.nomeConvidado}>Daniel Figueira Rolo</p></strong>
                        <p>Palestrante</p>
                    </span>
                </div>  

                <div className={style.convidado}>
                    <div className={style.fotoContainer}>
                        <img className={style.foto} src="/AngelicaMaria.png"/>
                    </div>
                   <span className={style.info}>
                        <strong><p className={style.nomeConvidado}>Angelica Maria da Costa</p></strong>
                        <p>Palestrante</p>
                    </span>
                </div> 

                <div className={style.convidado}>
                    <div className={style.fotoContainer}>
                        <img className={style.foto} src="/foto.jpeg"/>
                    </div>
                   <span className={style.info}>
                        <strong><p className={style.nomeConvidado}>Cláudio Emmanuel da Silva Filho</p></strong>
                        <p>Palestrante</p>
                    </span>
                </div>  

                <div className={style.convidado}>
                    <div className={style.fotoContainer}>
                        <img className={style.foto} src="/GeraldaRodrigues.jpg"/>
                    </div>
                   <span className={style.info}>
                        <strong><p className={style.nomeConvidado}>Geralda Rodrigues</p></strong>
                        <p>Palestrante</p>
                    </span>
                </div>  

                <div className={style.convidado}>
                    <div className={style.fotoContainer}>
                        <img className={style.foto} src="/AnaCarolina.jpeg"/>
                    </div>
                   <span className={style.info}>
                        <strong><p className={style.nomeConvidado}>Dra. Ana Carolina Bertoletti de Marchi</p></strong>
                        <p>Palestrante</p>
                    </span>
                </div> 

                <div className={style.convidado}>
                    <div className={style.fotoContainer}>
                        <img className={style.foto} src="/HaydeeCasse.png"/>
                    </div>
                   <span className={style.info}>
                        <strong><p className={style.nomeConvidado}>Dra. Haydêe Cassé da Silva</p></strong>
                        <p>Palestrante</p>
                    </span>
                </div>  

                <div className={style.convidado}>
                    <div className={style.fotoContainer}>
                        <img className={style.foto} src="/TatianeBezerra.jpg"/>
                    </div>
                   <span className={style.info}>
                        <strong><p className={style.nomeConvidado}>Dra. Tatiene Bezerra Leite Araújo</p></strong>
                        <p>Mini-curso</p>
                    </span>
                </div>    

                <div className={style.convidado}>
                    <div className={style.fotoContainer}>
                        <img className={style.foto} src="/LianaFilgueira.jpg"/>
                    </div>
                   <span className={style.info}>
                        <strong><p className={style.nomeConvidado}>Dra. Liana Filgueira Albuquerque</p></strong>
                        <p>Palestrante</p>
                    </span>
                </div> 

                <div className={style.convidado}>
                    <div className={style.fotoContainer}>
                        <img className={style.foto} src="/GuilhermeAugusto.jpg"/>
                    </div>
                   <span className={style.info}>
                        <strong><p className={style.nomeConvidado}>Dr. Guilherme Augusto Teodoro Athayde</p></strong>
                        <p>Palestrante</p>
                    </span>
                </div> 

                <div className={style.convidado}>
                    <div className={style.fotoContainer}>
                        <img className={style.foto} src="/KarlaSantos.jpg"/>
                    </div>
                   <span className={style.info}>
                        <strong><p className={style.nomeConvidado}>Dra. Karla Santos Mateus</p></strong>
                        <p>Palestrante</p>
                    </span>
                </div>  

                <div className={style.convidado}>
                    <div className={style.fotoContainer}>
                        <img className={style.foto} src="/KatiaLuna.png"/>
                    </div>
                   <span className={style.info}>
                        <strong><p className={style.nomeConvidado}>Katia Luna Freire</p></strong>
                        <p>Palestrante</p>
                    </span>
                </div>  

                <div className={style.convidado}>
                    <div className={style.fotoContainer}>
                        <img className={style.foto} src="/LauraSousa.jpg"/>
                    </div>
                   <span className={style.info}>
                        <strong><p className={style.nomeConvidado}>Laura de Sousa Gomes Veloso</p></strong>
                        <p>Palestrante</p>
                    </span>
                </div> 

                <div className={style.convidado}>
                    <div className={style.fotoContainer}>
                        <img className={style.foto} src="/AnaKarenina.jpg"/>
                    </div>
                   <span className={style.info}>
                        <strong><p className={style.nomeConvidado}>Dra. Ana Karenina de Freitas Jordão do Amaral</p></strong>
                        <p>Palestrante</p>
                    </span>
                </div> 

                <div className={style.convidado}>
                    <div className={style.fotoContainer}>
                        <img className={style.foto} src="/LiaMara.png"/>
                    </div>
                   <span className={style.info}>
                        <strong><p className={style.nomeConvidado}>Dra. Lia Mara Wibelinger</p></strong>
                        <p>Palestrante</p>
                    </span>
                </div> 
            </div>

            <Footer/>
        </div>
        </>
    )
}