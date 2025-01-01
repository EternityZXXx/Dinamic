import { Mail, MessageSquare } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export function Contact() {
  return (
    <section id="contact" className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4 font-ccgrotesk">ENTRE EM CONTATO</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Estamos aqui para ajudar. Entre em contato conosco para tirar suas dúvidas
            ou solicitar um orçamento.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {[
            { icon: Mail, title: 'Email', content: 'contato@mtastore.com', href: 'mailto:contato@mtastore.com' },
            { icon: MessageSquare, title: 'Discord', content: 'discord.gg/mtastore', href: 'https://discord.gg/mtastore' },
          ].map((contact, index, array) => (
            <Card key={index} className={array.length % 2 !== 0 && index === array.length - 1 ? 'col-span-2' : ''}>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <contact.icon className="h-5 w-5" />
                  {contact.title}
                  <Button asChild className="gap-2">
                    <a href={contact.href} target="_blank">
                      <contact.icon className="mr-2 h-5 w-5" />
                      {contact.title}
                    </a>
                  </Button>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{contact.content}</p>
              </CardContent>
            </Card>
          ))}
        </div>


          {/* <form className="space-y-4">
            <Input placeholder="Nome" />
            <Input type="email" placeholder="Email" />
            <Input placeholder="Assunto" />
            <Textarea placeholder="Mensagem" className="min-h-[150px]" />
            <Button className="w-full">Enviar Mensagem</Button>
          </form> */}
        </div>
    </section>
  );
}