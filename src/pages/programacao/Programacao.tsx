import { useEffect, useState } from "react";
import style from "../../style/programacao.module.css";
import { Footer } from "../../shared/footer";
import { Navbar } from "../../shared/navbar";

interface Evento {
  data: string;
  hora: string;
  dia_semana: string;
}

export const Programacao = () => {
  const [eventos, setEventos] = useState<Evento[]>([]);
  const [loading, setLoading] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [eventoSelecionado, setEventoSelecionado] = useState<string>("");

  useEffect(() => {
    document.title = "Programação";

    fetch(
      `https://opensheet.elk.sh/1tkwdVzVYRHdm90iotrMXPV4ZG7RDIrMl1li8p7EzBpw/Página1`
    )
      .then((response) => response.json())
      .then((data: Evento[]) => {
        setEventos(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Erro ao carregar programação:", error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div className={style.loading}>
        <p>Carregando progamação...</p>
      </div>

  )
  }

  return (

    <>
    <Navbar/>
    <div className={style.body} translate="no">


      <h1><strong>1° Simpósio interdisciplinar de evelhecimento humano da Paraíba:</strong> Integração de saberes, valorização da longevidade.</h1>

      <div className={style.containerTitulo}>
        <h2>Garanta seu ingresso!</h2>
      <div className={style.linha}></div>
      </div>
      
      <div className={style.eventoContainer}>
        {eventos.length === 0 ? (
          <p>Nenhum evento encontrado.</p>
        ) : (
          eventos.map((evento, index) => {
            
            return (
              <div key={index} className={style.eventoCard}>

                <div className={style.data}>
                  <img src="https://cdn-icons-png.flaticon.com/512/42/42371.png" />
                  <div className={style.textos}>
                      <h3 id={style.dia}>Data: {evento.data} - {evento.dia_semana}</h3>
                      <h4 id={style.hora}>{evento.hora}</h4>
                  </div>
                </div>

                <div className={style.local}>    
                  <img src="https://cdn-icons-png.flaticon.com/256/535/535239.png" />
                    <div className={style.textos}>
                      <h3>Auditório Foco Consultoria</h3>
                      <p>R. Esmeraldo Gomes Vieira, 338 Bancários, João Pessoa - PB</p>
                    </div>
                </div>

                

                <button className={style.botaoIngresso} onClick={() => {
                  setEventoSelecionado(evento.data);
                  setIsModalOpen(true);
                }}>Comprar Ingresso</button>

              </div>
            );
          })
        )}
      </div>

      <div className={style.programacao}>
        <div className={style.containerTitulo}>
          <h2>Nossa Programação</h2>
        <div className={style.linha} id={style.segundaLinha}></div>
        </div>

        <div className={style.diasContainer}>

          <div className={style.diaCard}>
            <h3 id={style.dia}>28 de Novembro</h3>
              <span>
                <ul>
                  <li><strong>19h00 - Vó Mera (Domerina Nicolau da Silva):</strong> Apresentação Cultural da Pessoa Idosa</li>
                  <li><strong>19h30 - Dra. Liana Filgueira Albuquerque:</strong> Felicidade: sorte ou escolha?</li>
                  <li><strong>20h00 – 21h30 - Mesa redonda: Desafios e Avanços nas Políticas Públicas para Pessoas Idosas</strong>
                    <ul>
                      <li><strong>Angélica Maria Moreira da Costa:</strong> O Conselho de Direitos da Pessoa Idosa e seu Papel na Sociedade</li>
                      <li><strong>Kátia Luna Freire:</strong> Dialogando sobre o Estatuto da Pessoa Idosa na contemporaneidade</li>
                      <li><strong>Dra. Haydêe Cassé da Silva:</strong> O pensar político na atenção integral de pessoas idosas em vulnerabilidade social</li>
                    </ul>
                  </li>
                </ul>
              </span>
          </div>

          {/*Dia 29 manhã*/}

          <div className={style.diaCard}>
            <h3 id={style.dia}>29 de Novembro - Manhã</h3>
            <span>
              <ul>
                <li><strong>08h00 - Daniel Felgueiras Rolo:</strong> Saúde Planetária e Envelhecimento: Desafios para o próximo século</li>
                <li><strong>09h00 - Cariles Silva de Oliveira:</strong> Odontologia à beira do leito: novas perspectivas de atendimento à pessoa idosa fragilizada</li>
                <li><strong>09h00 – 10h30 - Minicursos</strong>
                  <ul>
                    <li><strong>Anderson Belmont Correia de Oliveira:</strong> Prevenção de quedas: um olhar interdisciplinar na prática da fisioterapia</li>
                    <li><strong>Dra. Tatiene Bezerra Leite Araújo:</strong> Nutrição para Pessoas Idosas: mitos e verdades</li>
                    <li><strong>Adriana Pereira de Oliveira:</strong> Práticas Integrativas na Saúde do Idoso: da evidência à experiência</li>
                    <li><strong>Paulo Cordeiro Fontes:</strong> Espiritualidade e Saúde Mental: pilares para o Envelhecer Saudável</li>
                  </ul>
                </li>
                <li><strong>10h00 - Dr. Guilherme Augusto Teodoro Athayde:</strong> Prevenção Cardiovascular como Pilar da Longevidade Saudável</li>
                <li><strong>10h30 - Coffee Break</strong></li>
                <li><strong>11h00 - Dr. Emerson do Bú e Dra. Karla Santos Mateus:</strong> Do Estigma ao Sintoma: Como Internalizamos o Idadismo e suas Consequências para a Saúde de Pessoas Idosas</li>
              </ul>
            </span>
          </div>

          <div className={style.diaCard}>
            <h3 id={style.dia}>29 de Novembro - Tarde</h3>
            <span>
              <ul>
                <li><strong>13h30 - Dra. Ana Karênina de Freitas Jordão do Amaral:</strong> Contribuições da Fonoaudiologia para o envelhecimento ativo</li>
                <li><strong>14h00 - Dra. Lia Mara Wibelinger e Dra. Ana Carolina Bertoletti de Marchi:</strong> Perspectivas interdisciplinares no envelhecimento humano</li>
                <li><strong>15h00 - Cláudio Emmanuel da Silva Filho:</strong> Integração dos cuidados paliativos no processo de envelhecimento</li>
                <li><strong>15h30 - Geralda Rodrigues:</strong> Cuidado Integral à Pessoa Idosa: o papel da Enfermagem na Gestão Pública da Saúde</li>
                <li><strong>16h00 - Laura de Sousa Gomes Veloso:</strong> Controle postural e envelhecimento: um novo paradigma na saúde da pessoa idosa</li>
                <li><strong>Encerramento:</strong> Homenagens e cerimônia de encerramento</li>
              </ul>
            </span>
          </div>

        </div>
      </div>        




      







        <div className={style.realApoio}>
          <div className={style.realizacao}>
            <h2>Realização</h2>
            <img src="/ispi.png" className={style.logo}/>
          </div>

          <div className={style.apoio}>
            <h2>Apoio</h2>
            <div className={style.logos}>
              <img src="/FocoConsultoria.png" className={style.logo}/>
              <img src="/FocoTerapia.png" className={style.logo}/>
            </div>
            
          </div>
        </div>
        <Footer/>
                

       

      {/* Modal */}
      {isModalOpen && (
        <div className={style.formularioBackground} >
          <div className={style.formularioBody}>

            <h2>Inscrição no Evento</h2>

            <form
              onSubmit={(e) => {e.preventDefault();

                const form = e.currentTarget;
                const nome = (form.elements.namedItem("nome") as HTMLInputElement).value;
                const formaPagamento = (form.elements.namedItem("formaPagamento") as RadioNodeList).value;
                const telefone = "5583998035774";

                const mensagem = `Olá! Gostaria de comprar um ingresso para o Simpósio:\n\n` +
                  `Nome: ${nome}\n` +
                  `Dia: ${eventoSelecionado}\n` +
                  `Forma de pagamento: ${formaPagamento}\n\n` +
                  `Por favor, me envie as instruções para finalizar o pagamento.`;

                const url = `https://wa.me/${telefone}?text=${encodeURIComponent(mensagem)}`;

                window.open(url, "_blank");
                setIsModalOpen(false);
              }}
            >
              <div className={style.campoNome}>
                <label>Nome completo:</label>
                <input type="text" name="nome" required placeholder="Insira aqui seu nome completo" />
              </div>

              <div className={style.selectContainer}>
                <label>Evento:</label>
                <select
                  value={eventoSelecionado}
                  onChange={(e) => setEventoSelecionado(e.target.value)}
                >
                  {eventos.map((evento, i) => (
                    <option key={i} value={evento.data}>
                      {evento.data}
                    </option>
                  ))}
                </select>
              </div>


              <div className={style.formaPagamento}>
                <p>Forma de Pagamento</p>

                <div className={style.pagamentoOpcoes}>
                <span>
                  <input type="radio" id="pix" value="Pix" name="formaPagamento" required />
                  <label htmlFor="pix">Pix</label>
                </span>

                <span>
                  <input type="radio" id="debito" value="Débito" name="formaPagamento" />
                  <label htmlFor="debito">Débito</label>
                </span>

                <span>
                  <input type="radio" id="credito" value="Crédito" name="formaPagamento" />
                  <label htmlFor="credito">Crédito</label>
                </span>
                </div>
              </div>
              
              <div className={style.botoes}>
                <button type="submit" className={style.botaoEnviar}>Enviar</button>
                <button type="button" onClick={() => setIsModalOpen(false)} className={style.botaoCancelar}>Cancelar</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
    </>
  );
};
