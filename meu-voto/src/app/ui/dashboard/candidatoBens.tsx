import { ArrowPathIcon } from '@heroicons/react/24/outline';
import clsx from 'clsx';
import Image from 'next/image';
import { CandidatoBemObject as CandidatoBemProps } from "../../lib/definitions";
import { lusitana } from '../fonts';

interface CandidatoBensProps {
    bens: CandidatoBemProps[];
}


export default function CandidatoBens({ bens = [] }: CandidatoBensProps) {

    console.log('Type of bens:', typeof bens);
    console.log('Is bens an array?', Array.isArray(bens));
    
    // Calculate the total value of VR_BEM_CANDIDATO
    const totalBemValue = bens.reduce((total, bem) => {
        // Remove commas and convert to number
        const value = parseFloat(bem.VR_BEM_CANDIDATO.replace(/,/g, ''));
        return total + value;
    }, 0);

    

    return (
        <div className="flex w-full flex-col md:col-span-4">
          <h2 className={`${lusitana.className} mb-4 text-xl md:text-2xl`}>
            Bens do Candidato - Declarado para a Justiça Eleitoral
          </h2>
          <div className="flex grow flex-col justify-between rounded-xl bg-gray-50 p-4">
            <div className="bg-white px-6">
              {bens.map((bem, i) => {
                return (
                  <div
                    key={bem.SQ_CANDIDATO}
                    className={clsx(
                      'flex flex-row items-center justify-between py-4',
                      {
                        'border-t': i !== 0,
                      },
                    )}
                  >
                    <div className="flex items-center">
                      {/* <Image
                        src={invoice.image_url}
                        alt={`${invoice.name}'s profile picture`}
                        className="mr-4 rounded-full"
                        width={32}
                        height={32}
                      /> */}
                      <div className="min-w-0">
                        <p className="truncate text-sm font-semibold md:text-base">
                          {bem.DS_TIPO_BEM_CANDIDATO}
                        </p>
                        <p className="hidden text-sm text-gray-500 sm:block">
                          {bem.DS_BEM_CANDIDATO}
                        </p>
                      </div>
                    </div>
                    <p
                      className={`${lusitana.className} truncate text-sm font-medium md:text-base`}
                    >
                      {bem.VR_BEM_CANDIDATO}
                    </p>
                  </div>
                );
              })}
            </div>
            <div className="flex items-center pb-2 pt-6">
              <ArrowPathIcon className="h-5 w-5 text-gray-500" />
              <h3 className="ml-2 text-sm text-gray-500 ">Updated just now - Valor total {totalBemValue}</h3>
            </div>
          </div>
        </div>
      );
}