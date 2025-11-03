import { useEffect } from "react";
import { Footer } from "../../shared/footer";
import { Navbar } from "../../shared/navbar"
import style from "../../style/trabalhos.module.css";

export const Trabalhos = () =>{
        useEffect(() => {
        document.title = "Trabalhos";
      }, []);
    return(
        <>
        <Navbar/>
        <div className={style.body} translate="no">
        <h1>Trabalhos</h1>

       <div className={style.normasContainer}>
        <h3>Normas para submissão de trabalhos científicos</h3>
        <ol>
        <li className={style.subtituloNormas}><strong>Objetivo:</strong>
            <ul className={style.norma}>
            <li>Divulgar pesquisas, relatos de experiência e revisões que contribuam para o avanço do conhecimento sobre envelhecimento humano nas dimensões biológica, psicológica, social, espiritual e interdisciplinar.</li>
            </ul>
        </li>

        <li className={style.subtituloNormas}><strong>Categorias de Submissão:</strong>
            <ul className={style.norma}>
            <li ><strong>Modalidades:</strong>
                <ul className={style.subnorma} >
                <li>Comunicação Oral</li>
                <li>Pôster (banner físico)</li>
                </ul>
            </li>

            <li><strong>Modelos Aceitos:</strong>
                <ul className={style.subnorma} >
                <li><strong>Pesquisa Original:</strong> Estudos experimentais, observacionais, clínicos ou de campo.</li>
                <li><strong>Relato de Experiência:</strong> Descrição de práticas profissionais ou projetos de extensão.</li>
                <li><strong>Revisão de Literatura:</strong> Síntese teórica ou revisão narrativa sobre temas relevantes e atuais.</li>
                </ul>
            </li>
            </ul>
        </li>

        <li className={style.subtituloNormas}><strong>Autores:</strong>
            <ul className={style.norma}>
            <li>Máximo de 5 participantes por trabalho (autor(a), coautores e orientador(a)).</li>
            <li>O(a) autor(a) principal será responsável pela submissão e comunicação com a Comissão Científica.</li>
            <li>Todos os autores devem estar inscritos no evento.</li>
            </ul>
        </li>

        <li className={style.subtituloNormas}><strong>Formatação do Trabalho:</strong>
            <ul className={style.norma}>
            <li>Arquivo em PDF</li>
            <li>Fonte: Times New Roman, tamanho 12</li>
            <li>Espaçamento: 1,5</li>
            <li>Margens: 2,5 cm (todos os lados)</li>
            <li>Alinhamento: Justificado</li>
            <li>Tamanho máximo: até 2 páginas (incluindo referências)</li>
            </ul>
        </li>

        <li className={style.subtituloNormas}><strong>Resumo:</strong>
            <ul className={style.norma}>
            <li>Parágrafo único entre 200 e 300 palavras</li>
            <li>Fonte tamanho 11, espaçamento simples</li>
            <li>Sem referências, tabelas, gráficos, citações ou destaques</li>
            <li>Deve conter síntese do trabalho, referencial teórico, percurso metodológico e principais resultados</li>
            <li>Será o instrumento de avaliação, devendo seguir rigor científico e correção gramatical</li>
            </ul>
        </li>

        <li className={style.subtituloNormas}><strong>Normas Éticas:</strong>
            <ul className={style.norma}>
            <li>Trabalhos com seres humanos ou animais devem mencionar aprovação do Comitê de Ética, com número do parecer (Resolução CNS nº 466/12).</li>
            <li>Trabalhos sem esse requisito poderão ser indeferidos.</li>
            </ul>
        </li>

        <li className={style.subtituloNormas}><strong>Envio dos Trabalhos:</strong>
            <ul className={style.norma}>
            <li>Enviar o resumo para: <strong>sieh.pb@gmail.com</strong></li>
            <li>Assunto do e-mail: <strong>“Submissão de Trabalho Científico”</strong> + modalidade (Comunicação Oral ou Pôster)</li>
            <li>Cada inscrito pode ser autor principal de até 2 trabalhos (1 oral e 1 pôster)</li>
            <li>Apenas o autor principal submete o trabalho</li>
            <li>Arquivo em formato PDF</li>
            <li><strong>Prazo de envio:</strong> até 24 de novembro de 2025 (23h59 – horário de Brasília)</li>
            <li>Resultado: até 26 de novembro de 2025 por e-mail</li>
            <li>Envios fora do prazo ou por outro meio não serão aceitos</li>
            </ul>
        </li>

        <li className={style.subtituloNormas}><strong>Avaliação:</strong>
            <ul className={style.norma}>
            <li>Relevância científica e coerência metodológica</li>
            <li>Clareza na redação e organização</li>
            <li>Originalidade e contribuição para o campo do envelhecimento humano</li>
            </ul>
        </li>

        <li className={style.subtituloNormas}><strong>Apresentação em Pôster:</strong>
            <ul className={style.norma}>
            <li>Apresentação presencial em banner físico no evento</li>
            <li>Banner deve seguir o modelo oficial do evento</li>
            <li>Dimensões: 90 cm (largura) × 120 cm (altura), formato vertical</li>
            <li>Presença do autor é obrigatória</li>
            <li>Tempo máximo: 10 minutos</li>
            </ul>
        </li>

        <li className={style.subtituloNormas}><strong>Apresentação em Comunicação Oral:</strong>
            <ul className={style.norma}>
            <li>Apresentação deve seguir o modelo de slides disponibilizado pela organização</li>
            <li>Duração máxima: 12 minutos</li>
            </ul>
        </li>

        <li className={style.subtituloNormas}><strong>Certificação:</strong>
            <ul className={style.norma}>
            <li>Todos os autores dos trabalhos apresentados receberão certificado</li>
            <li>Haverá premiação para o 1º lugar em Comunicação Oral e o 1º lugar em Pôster</li>
            </ul>
        </li>

        <li className={style.subtituloNormas}><strong>Disposições Gerais:</strong>
            <ul className={style.norma}>
            <li>Casos omissos serão resolvidos pela Comissão Organizadora e pela Comissão Científica</li>
            </ul>
        </li>
        </ol>

       </div>

        <div className={style.downloadContainer}>
            <h3>Baixe aqui os modelos</h3>

            <div className={style.botoesDownload}>
                <a href="/modeloBanner.jpg" download>
                    <img src="/baixarBanner.png" className={style.botaoDownload} />
                </a>

                <a href="/editalOficial.pdf" download>
                  <img src="/baixarNormas.png" className={style.botaoDownload} />
                </a>

                <a href="/modeloSlide.pdf" download>
                    <img src="/baixarSlide.png" className={style.botaoDownload} />
                </a>
                
            </div>
        </div>
        <Footer/>
        </div>
           
        </>
    )
}