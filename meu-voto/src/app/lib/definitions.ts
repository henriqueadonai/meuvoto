// definitions.ts
// For defining the shape of an object, such as your Candidato, using interface is 
//generally preferred. However, if you need to use more complex types or unions, you might opt for type.
//return JSON.parse(jsonData) as Candidato;
export interface CandidatoObject {
    DT_GERACAO: string;
    HH_GERACAO: string;
    ANO_ELEICAO: string;
    CD_TIPO_ELEICAO: string;
    NM_TIPO_ELEICAO: string;
    NR_TURNO: string;
    CD_ELEICAO: string;
    DS_ELEICAO: string;
    DT_ELEICAO: string;
    TP_ABRANGENCIA_ELEICAO: string;
    SG_UF: string;
    SG_UE: string;
    NM_UE: string;
    CD_CARGO: string;
    DS_CARGO: string;
    NR_CANDIDATO: string;
    NM_CANDIDATO: string;
    NM_URNA_CANDIDATO: string;
    NM_SOCIAL_CANDIDATO: string;
    NR_CPF_CANDIDATO: string;
    DS_EMAIL: string;
    CD_SITUACAO_CANDIDATURA: string;
    DS_SITUACAO_CANDIDATURA: string;
    TP_AGREMIACAO: string;
    NR_PARTIDO: string;
    SG_PARTIDO: string;
    NM_PARTIDO: string;
    NR_FEDERACAO: string;
    NM_FEDERACAO: string;
    SG_FEDERACAO: string;
    DS_COMPOSICAO_FEDERACAO: string;
    SQ_COLIGACAO: string;
    NM_COLIGACAO: string;
    DS_COMPOSICAO_COLIGACAO: string;
    SG_UF_NASCIMENTO: string;
    DT_NASCIMENTO: string;
    NR_TITULO_ELEITORAL_CANDIDATO: string;
    CD_GENERO: string;
    DS_GENERO: string;
    CD_GRAU_INSTRUCAO: string;
    DS_GRAU_INSTRUCAO: string;
    CD_ESTADO_CIVIL: string;
    DS_ESTADO_CIVIL: string;
    CD_COR_RACA: string;
    DS_COR_RACA: string;
    CD_OCUPACAO: string;
    DS_OCUPACAO: string;
    CD_SIT_TOT_TURNO: string;
    DS_SIT_TOT_TURNO: string;
}

// definitions.ts
//return JSON.parse(jsonData) as CandidatoComplementar;
export interface CandidatoComplementarObject {
    VR_DESPESA_MAX_CAMPANHA: string;
    ST_REELEICAO: string;
    ST_DECLARAR_BENS: string;
    NR_PROTOCOLO_CANDIDATURA: string;
    NR_PROCESSO: string;
    CD_SITUACAO_CANDIDATO_PLEITO: string;
    DS_SITUACAO_CANDIDATO_PLEITO: string;
    CD_SITUACAO_CANDIDATO_URNA: string;
    DS_SITUACAO_CANDIDATO_URNA: string;
    ST_CANDIDATO_INSERIDO_URNA: string;
    NM_TIPO_DESTINACAO_VOTOS: string;
    CD_SITUACAO_CANDIDATO_TOT: string;
    DS_SITUACAO_CANDIDATO_TOT: string;
    ST_PREST_CONTAS: string;
    ST_SUBSTITUIDO: string;
    SQ_SUBSTITUIDO: string;
    SQ_ORDEM_SUPLENCIA: string;
    DT_ACEITE_CANDIDATURA: string;
    CD_SITUACAO_JULGAMENTO: string;
    DS_SITUACAO_JULGAMENTO: string;
    CD_SITUACAO_JULGAMENTO_PLEITO: string;
    DS_SITUACAO_JULGAMENTO_PLEITO: string;
    CD_SITUACAO_JULGAMENTO_URNA: string;
    DS_SITUACAO_JULGAMENTO_URNA: string;
    CD_SITUACAO_CASSACAO: string;
    DS_SITUACAO_CASSACAO: string;
    CD_SITUACAO_CASSACAO_MIDIA: string;
    DS_SITUACAO_CASSACAO_MIDIA: string;
    CD_SITUACAO_DIPLOMA: string;
    DS_SITUACAO_DIPLOMA: string;
}

// definitions.ts
//JSON.parse(jsonData) as CandidatoBem[];
export interface CandidatoBemObject {
    DT_GERACAO: string;
    HH_GERACAO: string;
    ANO_ELEICAO: string;
    CD_TIPO_ELEICAO: string;
    NM_TIPO_ELEICAO: string;
    CD_ELEICAO: string;
    DS_ELEICAO: string;
    DT_ELEICAO: string;
    SG_UF: string;
    SG_UE: string;
    NM_UE: string;
    SQ_CANDIDATO: string;
    NR_ORDEM_BEM_CANDIDATO: string;
    CD_TIPO_BEM_CANDIDATO: string;
    DS_TIPO_BEM_CANDIDATO: string;
    DS_BEM_CANDIDATO: string;
    VR_BEM_CANDIDATO: string;
    DT_ULT_ATUAL_BEM_CANDIDATO: string;
    HH_ULT_ATUAL_BEM_CANDIDATO: string;
}