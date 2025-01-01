import { ShoppingCart, FileCode } from 'lucide-react';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardImage,
  CardTitle,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { toast } from '@/components/ui/sonner';

const readyProducts = [
  {
    id: 1,
    name: 'Base RPG Básica',
    image: 'https://media.istockphoto.com/id/1648827349/photo/wood-pattern.webp?b=1&s=612x612&w=0&k=20&c=lYcwMDdLfciBxyYCV5dREniV9qbr1Bd1Cmhhr0AZFf8=',
    description: 'Sistema completo de RPG com economia, empregos e inventário.',
    price: 'R$ 100,00',
    features: ['Economia Balanceada', 'Empregos Básicos', 'Inventário', 'Banco'],
  },
  {
    id: 2,
    name: 'Base RPG Premium',
    image: 'https://i.pinimg.com/originals/c8/9e/87/c89e8708b8916fa7aba3c36dcd787526.jpg',
    description: 'Sistema avançado com recursos premium e otimização.',
    price: 'R$ 599,90',
    features: ['Economia Avançada', 'Sistema de Casas', 'Facções', 'Otimização Premium'],
  },
];

const customProducts = [
  {
    id: 3,
    name: 'Base Personalizada',
    description: 'Desenvolvimento sob medida para suas necessidades.',
    features: ['Sistema Personalizado', 'Suporte Dedicado', 'Documentação Completa'],
  }
];

export function Products() {
  return (
    <section id="products" className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl font-bold text-center mb-12 font-ccgrotesk">NOSSOS PRODUTOS</h2>

        <Tabs defaultValue="ready" className="w-full">
          <TabsList className="grid w-full grid-cols-2 max-w-[400px] mx-auto mb-8">
            <TabsTrigger value="ready">Pronta Entrega</TabsTrigger>
            <TabsTrigger value="custom">Encomendas</TabsTrigger>
          </TabsList>

          <TabsContent value="ready">
            <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-6">
              {readyProducts.map((product) => (
                <Card key={product.id} className="group hover:shadow-lg transition-shadow transition-all duration-500 ease-in-out opacity-80 hover:opacity-100">
                  <CardHeader>
                    <CardImage
                      src={product.image}
                      alt={product.name}
                      className="object-cover w-full h-64"
                    />
                    <CardTitle>{product.name}</CardTitle>
                    <CardDescription>{product.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {product.features.map((feature, index) => (
                        <li key={index} className="flex items-center">
                          <Badge variant="default" className="mr-2">
                            {feature}
                          </Badge>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                  <CardFooter className="flex flex-col sm:flex-row justify-between items-center">
                    <span className="text-2xl font-bold mb-2 sm:mb-0">{product.price}</span>
                    <Button className="w-full sm:w-auto" size="lg" onClick={() => {
                      toast.success('Produto adicionado ao carrinho');
                    }}>
                      <ShoppingCart className="mr-2 h-4 w-4" />
                      Comprar
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="custom">
            <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-6">
              {customProducts.map((product) => (
                <Card key={product.id} className="group hover:shadow-lg transition-shadow transition-opacity duration-500 ease-in-out opacity-80 hover:opacity-100">
                  <CardHeader>
                    <CardTitle>{product.name}</CardTitle>
                    <CardDescription>{product.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {product.features.map((feature, index) => (
                        <li key={index} className="flex items-center">
                          <Badge variant="secondary" className="mr-2">
                            {feature}
                          </Badge>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                  <CardFooter className="flex flex-col sm:flex-row justify-between items-center">
                    <Button className="w-full sm:w-auto" variant="outline" size="lg" disabled>
                      <FileCode className="mr-2 h-4 w-4" />
                      Solicitar Orçamento
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
}