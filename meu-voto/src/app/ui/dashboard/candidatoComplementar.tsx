import React from "react";
import { CandidatoComplementarObject as CandidatoComplementarProps } from "../../lib/definitions";

export default async function CandidatoComplementar(
  props: CandidatoComplementarProps
) {
  // Define the fields to be displayed
  const fields = [
    {
      label: "Valor Máximo de Despesa de Campanha",
      value: props.VR_DESPESA_MAX_CAMPANHA,
    },
    { label: "Reeleição", value: props.ST_REELEICAO },
    { label: "Declarar Bens", value: props.ST_DECLARAR_BENS },
    {
      label: "Número do Protocolo da Candidatura",
      value: props.NR_PROTOCOLO_CANDIDATURA,
    },
    { label: "Número do Processo", value: props.NR_PROCESSO },
    {
      label: "Situação do Candidato no Pleito",
      value: props.DS_SITUACAO_CANDIDATO_PLEITO,
    },
    {
      label: "Situação do Candidato na Urna",
      value: props.DS_SITUACAO_CANDIDATO_URNA,
    },
    {
      label: "Candidato Inserido na Urna",
      value: props.ST_CANDIDATO_INSERIDO_URNA,
    },
    {
      label: "Tipo de Destinação de Votos",
      value: props.NM_TIPO_DESTINACAO_VOTOS,
    },
    {
      label: "Situação do Candidato no Total",
      value: props.DS_SITUACAO_CANDIDATO_TOT,
    },
    { label: "Prestação de Contas", value: props.ST_PREST_CONTAS },
    { label: "Substituído", value: props.ST_SUBSTITUIDO },
    { label: "Sequência do Substituído", value: props.SQ_SUBSTITUIDO },
    { label: "Ordem de Suplência", value: props.SQ_ORDEM_SUPLENCIA },
    {
      label: "Data de Aceite da Candidatura",
      value: props.DT_ACEITE_CANDIDATURA,
    },
    { label: "Situação do Julgamento", value: props.DS_SITUACAO_JULGAMENTO },
    {
      label: "Situação do Julgamento no Pleito",
      value: props.DS_SITUACAO_JULGAMENTO_PLEITO,
    },
    {
      label: "Situação do Julgamento na Urna",
      value: props.DS_SITUACAO_JULGAMENTO_URNA,
    },
    { label: "Situação de Cassação", value: props.DS_SITUACAO_CASSACAO },
    {
      label: "Situação de Cassação na Mídia",
      value: props.DS_SITUACAO_CASSACAO_MIDIA,
    },
    { label: "Situação do Diploma", value: props.DS_SITUACAO_DIPLOMA },
  ];

  return (
    <div className="mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
      <div className="flex-grow px-6 py-4 flex flex-col h-full">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 w-full">
          {fields.map((field, index) => (
            <p key={index} className="mb-2">
              <strong>{field.label}:</strong> {field.value}
            </p>
          ))}
        </div>
      </div>
      {/* Render the content of CandidatoComplementar component here */}
    </div>
  );
}
