import { Code2, Users, Zap } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const features = [
  {
    icon: Code2,
    title: 'Código Limpo',
    description: 'Desenvolvemos com as melhores práticas para garantir qualidade e manutenibilidade.',
  },
  {
    icon: Zap,
    title: 'Alta Performance',
    description: 'Nossas bases são otimizadas para rodar com o melhor desempenho possível.',
  },
  {
    icon: Users,
    title: 'Suporte Dedicado',
    description: 'Oferecemos suporte técnico especializado para todas as nossas bases.',
  }
];

export function About() {
  return (
    <section id="about" className="py-20 px-4 bg-muted/50">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4 font-ccgrotesk">SOBRE NÓS</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Somos especialistas no desenvolvimento de bases para MTA, com anos de experiência
            e centenas de clientes satisfeitos.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <Card key={index} className="group hover:shadow-lg transition-shadow duration-300 ease-in-out">
              <CardHeader>
                <feature.icon className="h-10 w-10 mb-4 text-primary" />
                <CardTitle>{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}