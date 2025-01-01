import { lusitana } from "../ui/fonts";
import { fetchCandidato } from "../lib/fetchDataDynamo";
import Candidato from "../ui/dashboard/candidato";
import { CandidatoObject } from "../lib/definitions"; // Adjust the path as necessary
import CandidatoComplementar from "../ui/dashboard/candidatoComplementar";
import CandidatoBens from "../ui/dashboard/candidatoBens";


//Page is an async component. This allows you to use await to fetch data.
export default async function Page() {

    const candidatoData = await fetchCandidato('250001957887');
    
    //console.log(candidato);
    // const NM_CANDIDATO = candidato.NM_CANDIDATO?.S || ''; 
    // const DS_OCUPACAO = candidato.DS_OCUPACAO?.S || '';  
    // const DC_CARGO = candidato.DS_CARGO?.S || '';  
    const candidato: CandidatoObject = JSON.parse(candidatoData.candidato.S);
    const candidatoComplementar: CandidatoComplementarObject = JSON.parse(candidatoData.complementar.S);
    //const candidatoBem: CandidatoBemObject = JSON.parse(candidatoData.bem.S);
    const candidatoBem: CandidatoBemObject[] = JSON.parse(candidatoData.bem.S);


    //console.log('Ready info' + JSON.stringify(candidatoBem));

    return (
    <main>
      <h1 className={`${lusitana.className} mb-4 text-xl md:text-2xl`}>
        Meu Voto - Dashboard Candidato
      </h1>
      {/* <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-1">
        <Candidato {...candidato}  />
      </div> */}
      {/* <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-4 lg:grid-cols-8">         */}
        {/* <RevenueChart revenue={revenue}  /> */}
        {/* <LatestInvoices latestInvoices={latestInvoices} /> */}
      {/* </div> */}
      <div className="grid gap-6 grid-cols-1">
        <div> <Candidato {...candidato}  /></div>
        <div> <CandidatoComplementar {...candidatoComplementar} /></div>
        <div> <CandidatoBens bens={candidatoBem} /></div>
        <div> Espaço do candidato</div>
        <div> Propostas</div>
        <div> Elogios</div>
        <div> Reclamações</div>
        <div> Informações Partido</div>
      </div>

    </main>)
  }