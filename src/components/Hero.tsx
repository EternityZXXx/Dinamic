import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button'

export function Hero() {
  return (
    <section id="home" className="relative h-screen flex flex-col items-center justify-center text-center px-4 bg-gradient-to-b from-background via-background/95 to-background/90">
      <div className="relative z-10 max-w-3xl mx-auto ">
        <h1 className="font-ccgrotesk text-4xl md:text-6xl mb-6 bg-clip-text text-[#C2EA01]">
          BASES DE MTA DE ALTA QUALIDADE
        </h1>
        <p className="font-body text-lg md:text-xl text-muted-foreground mb-8">
          Transforme seu servidor com nossas bases exclusivas e personalizadas.
          Qualidade garantida e suporte especializado.
        </p>
        <Button size="lg" className="group bg-[#C2EA01] text-black" onClick={() => window.location.href = '#products'}>
          Ver Produtos
          <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
        </Button>
      </div>
    </section>
  );
}