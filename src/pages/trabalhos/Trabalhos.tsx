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
            <li>A submissão de trabalhos científicos tem como objetivo divulgar pesquisas, relatos de experiência e revisões que contribuam para o avanço do conhecimento na área do envelhecimento humano, em suas dimensões biológicas, psicológicas, sociais, espirituais e interdisciplinares.</li>
            </ul>
        </li>

        <li className={style.subtituloNormas}><strong>Categorias de Submissão:</strong>
            <ul className={style.norma}>
                <li>Os trabalhos poderão ser submetidos nas modalidades: Comunicação Oral ou Pôster (banner físico). Serão considerados os seguintes modelos:</li>
                <ul className={style.subnorma}>
                    <li>Pesquisa Original: estudos experimentais, observacionais, clínicos ou de campo.</li>
                    <li>Relato de Experiência: descrição de práticas profissionais ou projetos de extensão.</li>
                    <li>Revisão de Literatura: síntese teórica ou revisão narrativa sobre temas relevantes e atualizados.</li>
                </ul> 
            </ul>
        </li>
        

        <li className={style.subtituloNormas}><strong>Autores:</strong>
            <ul className={style.norma}>
                <ul className={style.subnorma}>
                    <li>Cada trabalho poderá ter até 5 (cinco) participantes, incluindo autor(a), coautores e orientador(a).</li>
                    <li>O(a) autor(a) principal será responsável pela submissão e comunicação com a Comissão Científica.</li>
                    <li>Todos os autores devem estar inscritos no evento.</li>
                </ul> 
            </ul>
        </li>

        <li className={style.subtituloNormas}><strong>Formatação do Trabalho:</strong>
            <ul className={style.norma}>
                <ul className={style.subnorma}>
                    <li>Arquivo: formato PDF.</li>
                    <li>Fonte: Times New Roman, tamanho 12.</li>
                    <li>Espaçamento: 1,5 entre linhas.</li>
                    <li>Margens: 2,5 cm em todos os lados.</li>
                    <li>Alinhamento: justificado.</li>
                    <li>Tamanho máximo: até 2 páginas (incluindo texto e referências).</li>
                </ul> 
            </ul>
        </li>

        <li className={style.subtituloNormas}><strong>Resumo:</strong>
            <ul className={style.norma}>
            <li>O texto do resumo deverá ser em parágrafo único de 200 a 300 palavras, justificado,
regular, tamanho 11, espaçamento simples (1,0), sem referências bibliográficas,
tabelas, gráficos, citações ou destaques de qualquer natureza. Devem constar a
síntese do trabalho, referencial teórico, percuso metodológico e principais resultados. <br /><br />
O resumo será o instrumento de avaliação para aprovação dos trabalhos. Logo, deverá
apresentar um rigor científico, correções ortográficas e o tema pautado no
Envelhecimento Humano.Salientamos que é de responsabilidade dos autores atenção às normas.</li>

            </ul>
        </li>

        <li className={style.subtituloNormas}><strong>Normas Éticas:</strong>
            <ul className={style.norma}>
                <ul className={style.subnorma}>
                    <li>Trabalhos envolvendo seres humanos ou animais devem mencionar aprovação  pelo Comitê de Ética em Pesquisa, informando o número do parecer, conforme  Resolução CNS nº 466/12.</li>
                    <li>Trabalhos sem esse requisito poderão ser indeferidos.</li>
                </ul> 
            </ul>
        </li>

        <li className={style.subtituloNormas}><strong>Envio dos Trabalhos</strong>
            <ul className={style.norma}>
                <ul className={style.subnorma}>
                    <li>O resumo do trabalho deverá ser enviado para o e-mail sieh.pb@gmail.com, com
                    o assunto: “Submissão de Trabalho Científico” e a modalidade da apresentação (Comunicação Oral ou Pôster).</li>
                    <li>Cada inscrito pode ser autor principal de até dois trabalhos (1 Comunição Oral e 1 Pôster físico).</li>
                    <li>Apenas o autor principal submete o trabalho.</li>
                    <li>O arquivo deve ser anexado em formato PDF.</li>
                    <li>Prazo de envio: Impreterivelmente até meia-noite de 24 de novembro de 2025 (horário de Brasília).</li>
                    <li>Até a data 26 de novembro de 2025, os trabalhos aprovados serão notificados por
                    e-mail.</li>
                    <li>Trabalhos enviados fora do prazo ou por outros meios não serão considerados.</li>
                </ul> 
            </ul>
        </li>

        <li className={style.subtituloNormas}><strong>Avaliação:</strong>
            <ul className={style.norma}>
                <li>Os trabalhos serão avaliados por membros da Comissão Científica, considerando os seguintes critérios:</li>
                <ul className={style.subnorma}>
                    <li>Relevância científica e coerência metodológica.</li>
                    <li>Clareza na redação e organização das seções.</li>
                    <li>Originalidade e contribuição ao campo do envelhecimento humano.</li>
                </ul> 
            </ul>
        </li>


        <li className={style.subtituloNormas}><strong>Apresentação em Pôster:</strong>
            <ul className={style.norma}>
                <ul className={style.subnorma}>
                    <li>A apresentação ocorrerá em banner físico no local do evento.</li>
                    <li>Cada autor apresentador será responsável pela confecção do seu banner, devendo
                    seguir o modelo de design oficial do evento, que será disponibilizado
                    posteriormente pela comissão organizadora.</li>
                    <li>O banner deverá ter dimensão 90 cm (largura) x 120 cm (altura), em formato vertical, e seguir o modelo timbrado disponilizado pelo SIEH-PB.</li>
                    <li>A presença do autor durante a sessão será obrigatória. A apresentação deverá ser realizada em até 10 minutos. </li>

                </ul> 
            </ul>
        </li>


        <li className={style.subtituloNormas}><strong>Apresentação em Comunicação Oral:</strong>
            <ul className={style.norma}>
                <ul className={style.subnorma}>
                <li>Cada autor apresentador será responsável por seguir o modelo designado em ppt. pela Comissão Organizadora do SIEH-PB.</li>
                <li>A apresentação deverá ser realizada em até 12 minutos.</li>

                </ul> 
            </ul>
        </li>


        <li className={style.subtituloNormas}><strong>Certificação:</strong>
            <ul className={style.norma}>
            <li>Os autores dos trabalhos apresentados receberão certificado de apresentação
científica com carga horária correspondente. Além disso, ocorrerá a premiação do
primeiro colocado na modalidade de Comunicação Oral e na modalidade Pôster.
</li>
            </ul>
        </li>

        <li className={style.subtituloNormas}><strong>Disposições Gerais:</strong>
            <ul className={style.norma}>
            <li>Casos omissos serão resolvidos pela Comissão Organizadora e Científica do evento.</li>
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