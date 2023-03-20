import { StyledSection } from "./styles";
import miniCarro from "../../assets/especificaçoes.png";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Accordion, AccordionSummary, AccordionDetails } from "@mui/material";
import { darkBlue } from "../../styles/colorProvider";

export default function Especificaçoes() {
  return (
    <StyledSection id="especificaçoes">
      <div className="div-image">
        <img className="minicarro" src={miniCarro} alt="Foto mini carro" loading="lazy" />
      </div>

      <div className="div-accordions">
        <h1 className="title">Especificações:</h1>

        <div className="accordion">
          <Accordion style={{ background: darkBlue, color: "#fff" }}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon style={{ color: "#fff" }} />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <p>Materiais</p>
            </AccordionSummary>
            <AccordionDetails>
              <ul>
                <li>01 - Base de plástico</li>
                <li>01 - Engrenagem</li>
                <li>01 - Pinhão</li>
                <li>01 - Painel Solar Monocristalino</li>
                <li>01 - Motor</li>
                <li>08 - Parafusos e Porcas de Fixação</li>
                <li>04 - Fixadores dos Eixos</li>
                <li>02 - Eixos</li>
                <li>04 - Anilhas</li>
                <li>04 - Rodas</li>
              </ul>
            </AccordionDetails>
          </Accordion>
        </div>

        <div className="accordion">
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <p>Caracteristicas</p>
            </AccordionSummary>
            <AccordionDetails>
              <ul>
                <li>Peso: 23g.</li>
                <li>Dimensões do mini painel solar: 30x25mm.</li>
                <li>Dimensões do chassi: 0x37, 5x2, 5mm.</li>
                <li>Dimensões totais: 80x65x30mm.</li>
                <li>Kit Chassi.</li>
                <li>Movido a energia fotovoltaica.</li>
                <li>Dispensa a utilização de baterias.</li>
                <li>Modelo autônomo.</li>
                <li>
                  Indicado para estimular o aprendizado em projetos de
                  tecnologia e eletrônica.
                </li>
                <li>Possui um baixo custo e é de fácil montagem.</li>
                <li>Motor e painel solar são fixados com fita dupla face.</li>
              </ul>
            </AccordionDetails>
          </Accordion>
        </div>

        <div className="accordion">
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <p>Observações</p>
            </AccordionSummary>
            <AccordionDetails>
              <ul>
                <li>Adequado para crianças entre 5 a 12 anos.</li>
                <li>A corrente gerada é de aproximadamente 20mA.</li>
                <li>Tensão do motor e painel é de aproximadamente 2V.</li>
                <li>
                  A tensão e a corrente gerada dependerá do nível de incidência
                  do sol.
                </li>
              </ul>
            </AccordionDetails>
          </Accordion>
        </div>
      </div>
    </StyledSection>
  );
}
