import Image from "next/image";
import CandidatoStatus from './dashboard/candidato/status';
import { lusitana } from './ui/fonts';


// page.tsx is a special Next.js file that exports a React component, and it's required for the route to be accessible. 
// In your application, you already have a page file: /app/page.tsx - this is the home page associated with the route /.

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <h1>Welcome to MeuVoto Dashboard</h1>
        <p className={lusitana.className}>
        This is a paragraph styled with the Lusitana font.
      </p>
      <Image src="/VoteTodos.jfif" alt="Cofre do Brasil" width={760} height={500} className="hidden md:block" />

        <CandidatoStatus status="pending" />
        <div
          className="relative w-0 h-0 border-l-[15px] border-r-[15px] border-b-[26px] border-l-transparent border-r-transparent "
        > Test 123 </div>

    </main>
  );
}
