import { Star } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card.tsx';
import { Carousel, CarouselContent, CarouselItem } from '@/components/ui/carousel.tsx';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar.tsx';

const feedbacks = [
  {
    userImage: 'https://randomuser.me/api/portraits/men/1.jpg',
    userName: 'Lucas Pereira',
    rating: 5,
    comment: 'O serviço foi impecável, superou minhas expectativas!',
    approved: true,
  },
  {
    userImage: 'https://randomuser.me/api/portraits/women/2.jpg',
    userName: 'Ana Costa',
    rating: 5,
    comment: 'Bom atendimento, mas o produto poderia ser mais intuitivo.',
    approved: true,
  },
  {
    userImage: 'https://randomuser.me/api/portraits/men/3.jpg',
    userName: 'Rafael Almeida',
    rating: 3,
    comment: 'Gostei bastante, mas o preço é um pouco alto.',
    approved: false,
  },
  {
    userImage: 'https://randomuser.me/api/portraits/women/4.jpg',
    userName: 'Beatriz Santos',
    rating: 1,
    comment: 'Atendimento ruim, não recomendo.',
    approved: false,
  },
];

export function FeedBacks() {
  return (
    <section id="feedbacks" className="py-20 px-4 bg-background">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4 font-ccgrotesk">AVALIAÇÕES</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Veja o que nossos clientes tem a dizer sobre nossos produtos.
          </p>
        </div>

        <Carousel
          opts={{ loop: true }}
          autoScroll={{ enabled: true, interval: 3000, direction: 'next' }}
          className="select-none cursor-grab"
        >
          <CarouselContent className="gap-4 p-4">
            {feedbacks.map((feedback, index) => (
              <CarouselItem
                key={index}
                className="flex flex-col items-center justify-center"
              >
                <Card
                  className={`flex flex-col items-left justify-center gap-4 w-96 h-60 ${feedback.approved ? 'bg-[#91e600] text-black' : 'bg-background text-gray-500'
                    }`}
                >
                  <CardHeader className="flex items-center justify-center flex-col gap-2 w-full">
                    <Avatar>
                      <AvatarImage src={feedback.userImage} alt={feedback.userName} />
                      <AvatarFallback>{feedback.userName.charAt(0)}</AvatarFallback>
                    </Avatar>
                    <div>
                      <CardTitle className="text-lg font-semibold ">
                        {feedback.userName}
                      </CardTitle>
                      <div className="flex items-center justify-center">
                        {[...Array(feedback.rating)].map((_, i) => (
                          <Star key={i} className="h-4 w-4" />
                        ))}
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="text-center">
                    <p>{feedback.comment}</p>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </section>
  );
}