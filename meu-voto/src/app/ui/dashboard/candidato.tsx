import React from "react";
import { lusitana } from "../fonts";
import { CandidatoObject as CandidatoProps } from "../../lib/definitions";
import Image from 'next/image';

const generateRoboHashUrl = (text: string) => {
  return `https://robohash.org/${encodeURIComponent(text)}.png`;
};

export default async function Candidato(props: CandidatoProps) {
  const fields = [
    { label: "CPF", value: props.NR_CPF_CANDIDATO },
    { label: "Email", value: props.DS_EMAIL },
    { label: "Nome na Urna", value: props.NM_URNA_CANDIDATO },
    { label: "Data de Geração", value: props.DT_GERACAO },
    { label: "Hora de Geração", value: props.HH_GERACAO },
    { label: "Ano da Eleição", value: props.ANO_ELEICAO },
    { label: "Tipo de Eleição", value: props.NM_TIPO_ELEICAO },
    { label: "Turno", value: props.NR_TURNO },
    { label: "Descrição da Eleição", value: props.DS_ELEICAO },
    { label: "Data da Eleição", value: props.DT_ELEICAO },
    { label: "UF", value: props.SG_UF },
    { label: "UE", value: props.SG_UE },
    { label: "Cargo", value: props.DS_CARGO },
    { label: "Número do Candidato", value: props.NR_CANDIDATO },
    { label: "Nome Social", value: props.NM_SOCIAL_CANDIDATO },
    { label: "Situação da Candidatura", value: props.DS_SITUACAO_CANDIDATURA },
    { label: "Partido", value: props.NM_PARTIDO },
    { label: "UF de Nascimento", value: props.SG_UF_NASCIMENTO },
    { label: "Data de Nascimento", value: props.DT_NASCIMENTO },
    { label: "Título Eleitoral", value: props.NR_TITULO_ELEITORAL_CANDIDATO },
    { label: "Gênero", value: props.DS_GENERO },
    { label: "Grau de Instrução", value: props.DS_GRAU_INSTRUCAO },
    { label: "Estado Civil", value: props.DS_ESTADO_CIVIL },
    { label: "Cor/Raça", value: props.DS_COR_RACA },
    { label: "Ocupação", value: props.DS_OCUPACAO },
    { label: "Situação no Turno", value: props.DS_SIT_TOT_TURNO },
  ];

  return (
    <div className="mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
      <div className="flex-grow px-6 py-4 flex flex-col h-full">
      <div className="flex items-center mb-4 border-b">
          <Image
            src={generateRoboHashUrl(props.NM_URNA_CANDIDATO)}
            alt={`${props.NM_URNA_CANDIDATO}`}
            width={60}
            height={60}
            className="mr-4 rounded-full"
          />
          <h2 className={`text-2xl font-bold text-gray-800 text-left ${lusitana.className}`}>
            {props.NM_URNA_CANDIDATO}
          </h2>
        </div>
        <div className="flex items-center mb-4 border-b">
          <h2>
              Candidato à {props.DS_CARGO === 'PREFEITO' ? 'prefeitura' : 'vereador'} de <strong>{props.NM_UE} - {props.SG_UF}</strong>
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 w-full">
          {fields.map((field, index) => (
            <p key={index} className="mb-2">
              <strong>{field.label}:</strong> {field.value}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
}
