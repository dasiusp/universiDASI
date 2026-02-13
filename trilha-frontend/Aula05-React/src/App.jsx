import { PricingCard } from './components/PricingCard';

function App() {
  return (
    <div className="bg-gray-50 min-h-screen flex flex-col items-center justify-center p-8">
      
      <h1 className="text-3xl font-bold text-gray-800 mb-10 text-center">
        Escolha o seu plano
      </h1>

      <div className="flex flex-col md:flex-row gap-8 w-full max-w-5xl justify-center items-center">
        
        <PricingCard titulo="Iniciante" preco="0" destaque={false} />
        <PricingCard titulo="Profissional" preco="49" destaque={true} />
        <PricingCard titulo="Enterprise" preco="199" destaque={false} />
        
      </div>
    </div>
  );
}

export default App;