import { useRef } from "react";
import Autoplay from "embla-carousel-autoplay";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Check, Leaf, Shield, Clock, Star, BookOpen, Heart, Sparkles, Download, Lock, Award } from "lucide-react";
import heroPlants from "@/assets/hero-plants.jpg";
import ebookMockup from "@/assets/ebook-mockup.png";
import teaCup from "@/assets/tea-cup.jpg";

const Index = () => {
  const autoplay = useRef(Autoplay({ delay: 5000, stopOnInteraction: true, stopOnMouseEnter: true }));

  const scrollToOffer = () => {
    document.getElementById("oferta")?.scrollIntoView({ behavior: "smooth" });
  };

  const benefits = [
    { icon: Leaf, title: "350 Plantas Medicinais", desc: "Catalogadas por região do Brasil, da Amazônia ao Sul." },
    { icon: BookOpen, title: "Modo de Preparo Simples", desc: "Passo a passo claro, em letras grandes e fáceis de ler." },
    { icon: Shield, title: "Contraindicações", desc: "Saiba o que evitar para usar com total segurança." },
    { icon: Heart, title: "Sabedoria dos Mais Velhos", desc: "Conhecimento passado de geração em geração." },
  ];

  const problems = [
    "Gripes e resfriados frequentes",
    "Má digestão e azia",
    "Insônia e ansiedade",
    "Dores nas articulações",
    "Pressão alta e colesterol",
    "Imunidade baixa",
  ];

  const testimonials = [
    { name: "Maria Aparecida, 62 anos", location: "Belo Horizonte/MG", text: "Letras grandes, fácil de entender. Já fiz três chás e me sinto muito melhor! Recomendo de coração.", rating: 5 },
    { name: "João Batista, 58 anos", location: "Recife/PE", text: "Lembrei dos remédios da minha vó. Vale cada centavo, recomendo demais para toda família.", rating: 5 },
    { name: "Cleide Ramos, 67 anos", location: "Curitiba/PR", text: "Finalmente um livro pensado pra gente da nossa idade. Maravilhoso, uso quase todos os dias!", rating: 5 },
    { name: "Antônio Carlos, 71 anos", location: "Salvador/BA", text: "Minha pressão melhorou muito depois que comecei a tomar os chás indicados. Material excelente!", rating: 5 },
    { name: "Dona Lourdes, 65 anos", location: "Goiânia/GO", text: "Achei que ia ser difícil de mexer no celular, mas é só baixar e ler. Muito prático e organizado.", rating: 5 },
    { name: "Sebastião, 60 anos", location: "Manaus/AM", text: "Encontrei plantas da nossa região aqui. Conhecimento de verdade, sem enrolação. Comprei e não me arrependo.", rating: 5 },
    { name: "Rosângela, 55 anos", location: "Porto Alegre/RS", text: "Os bônus valem mais que o próprio Guia! O calendário de colheita me ajudou demais na hortinha de casa.", rating: 5 },
    { name: "Geraldo Pereira, 68 anos", location: "Fortaleza/CE", text: "Comprei pra minha esposa e acabei lendo eu também. Aprendi muito sobre a sabedoria dos antigos.", rating: 5 },
  ];

  const faqs = [
    { q: "O Guia é fácil de ler para quem tem mais de 50 anos?", a: "Sim! Foi feito com letras grandes, alto contraste e linguagem simples, especialmente pensado para você." },
    { q: "Como recebo o material após a compra?", a: "Você recebe o link de download imediatamente no seu e-mail, logo após a confirmação do pagamento." },
    { q: "Preciso de internet para ler?", a: "Não. Você baixa o PDF uma vez e pode ler no celular, tablet ou computador, mesmo offline." },
    { q: "Posso imprimir o Guia?", a: "Sim! O layout foi preparado para impressão, caso prefira ler no papel." },
    { q: "E se eu não gostar?", a: "Você tem 7 dias de garantia incondicional. Se não gostar, devolvemos 100% do seu dinheiro." },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* HERO */}
      <header className="relative bg-gradient-hero text-primary-foreground overflow-x-hidden">
        <div className="absolute inset-0 opacity-20">
          <img src={heroPlants} alt="" className="w-full h-full object-cover" width={1536} height={1024} />
        </div>
        <div className="container relative z-10 mx-auto px-4 py-12 md:py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 bg-accent/20 border border-accent/40 rounded-full px-4 py-2 text-sm md:text-base font-medium">
                <Sparkles className="w-4 h-4 text-accent-glow" />
                <span>Sabedoria Popular Brasileira</span>
              </div>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight tracking-tight">
                Descubra os <span className="text-accent-glow">350 Remédios</span><br />
                que os Mais Velhos<br />
                Usavam
              </h1>
              <p className="text-lg md:text-2xl text-primary-foreground/90 leading-relaxed">
                O guia completo de plantas medicinais do Brasil — com letras grandes, linguagem simples e tudo o que sua avó já sabia.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-2">
                <Button
                  size="lg"
                  onClick={scrollToOffer}
                  className="bg-gradient-cta text-accent-foreground hover:opacity-90 text-lg md:text-xl py-7 px-8 rounded-full shadow-cta animate-pulse-glow font-bold"
                >
                  QUERO MEU GUIA AGORA
                </Button>
              </div>
              <div className="flex flex-wrap items-center gap-6 justify-center lg:justify-start pt-4 text-sm md:text-base">
                <div className="flex items-center gap-2"><Lock className="w-5 h-5 text-accent-glow" />Compra 100% segura</div>
                <div className="flex items-center gap-2"><Download className="w-5 h-5 text-accent-glow" />Acesso imediato</div>
              </div>
            </div>
            <div className="flex justify-center lg:justify-end">
              <img
                src={ebookMockup}
                alt="Capa do Guia 350 Remédios Naturais do Mato"
                className="w-full max-w-sm md:max-w-md lg:max-w-lg animate-float drop-shadow-2xl"
                width={1024}
                height={1024}
              />
            </div>
          </div>
        </div>
      </header>

      {/* PROBLEMA */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl md:text-5xl font-bold text-center text-foreground mb-6 leading-tight">
            Você sofre com algum desses problemas?
          </h2>
          <p className="text-center text-lg md:text-xl text-muted-foreground mb-12">
            A natureza tem a resposta para cada um deles.
          </p>
          <div className="grid md:grid-cols-2 gap-4">
            {problems.map((p, i) => (
              <Card key={i} className="p-5 flex items-center gap-4 border-l-4 border-l-accent shadow-soft">
                <div className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0">
                  <Check className="w-6 h-6 text-accent" />
                </div>
                <p className="text-lg md:text-xl text-foreground font-medium">{p}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* BENEFÍCIOS */}
      <section className="py-16 md:py-24 bg-gradient-warm">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4 leading-tight">
              O que você vai encontrar no Guia
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
              Um material completo, organizado e feito para ser usado todos os dias.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((b, i) => (
              <Card key={i} className="p-8 text-center hover:shadow-strong transition-all duration-300 border-2 border-transparent hover:border-accent/30">
                <div className="w-16 h-16 mx-auto mb-5 rounded-2xl bg-primary/10 flex items-center justify-center">
                  <b.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-foreground mb-3">{b.title}</h3>
                <p className="text-base md:text-lg text-muted-foreground leading-relaxed">{b.desc}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* IMAGEM SECCIONAL */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <img
              src={teaCup}
              alt="Chá natural com ervas medicinais"
              loading="lazy"
              width={1024}
              height={768}
              className="rounded-2xl shadow-strong w-full"
            />
            <div className="space-y-6">
              <h2 className="text-3xl md:text-5xl font-bold text-foreground leading-tight">
                Conhecimento que <span className="text-primary">atravessou gerações</span>
              </h2>
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                Muito antes das farmácias, nossos avós já curavam gripes, dores e inflamações com o que a terra oferecia. Esse saber não pode se perder.
              </p>
              <ul className="space-y-3 text-lg">
                {[
                  "Plantas organizadas por região do Brasil",
                  "Indicação clara para cada problema",
                  "Modo de preparo passo a passo",
                  "Avisos de contraindicação",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <div className="w-7 h-7 rounded-full bg-success flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="w-4 h-4 text-success-foreground" strokeWidth={3} />
                    </div>
                    <span className="text-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* DEPOIMENTOS */}
      <section className="py-16 md:py-24 bg-secondary">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-3xl md:text-5xl font-bold text-center text-foreground mb-4 leading-tight">
            O que estão dizendo
          </h2>
          <div className="flex justify-center items-center gap-2 mb-12">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-6 h-6 fill-accent text-accent" />
            ))}
            <span className="ml-2 text-lg font-medium text-foreground">+ de 12.000 leitores satisfeitos</span>
          </div>
          <Carousel opts={{ align: "start", loop: true }} plugins={[autoplay.current]} className="w-full">
            <CarouselContent className="-ml-4">
              {testimonials.map((t, i) => (
                <CarouselItem key={i} className="pl-4 basis-[85%] sm:basis-1/2 lg:basis-1/3 xl:basis-1/4">
                  <Card className="p-6 shadow-soft hover:shadow-strong transition-all duration-300 flex flex-col h-full">
                    <div className="flex gap-1 mb-3">
                      {[...Array(t.rating)].map((_, j) => (
                        <Star key={j} className="w-5 h-5 fill-accent text-accent" />
                      ))}
                    </div>
                    <p className="text-base md:text-lg text-foreground mb-4 leading-relaxed italic flex-1">"{t.text}"</p>
                    <div className="border-t border-border pt-4">
                      <p className="font-bold text-foreground">{t.name}</p>
                      <p className="text-sm text-muted-foreground">{t.location}</p>
                    </div>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="flex justify-center gap-3 mt-6">
              <CarouselPrevious className="static translate-y-0" />
              <CarouselNext className="static translate-y-0" />
            </div>
          </Carousel>
        </div>
      </section>

      {/* OFERTA */}
      <section id="oferta" className="py-16 md:py-24 bg-gradient-hero text-primary-foreground">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-10">
            <div className="inline-block bg-destructive text-destructive-foreground px-5 py-2 rounded-full font-bold text-sm md:text-base mb-6 animate-pulse">
              ⚡ OFERTA POR TEMPO LIMITADO
            </div>
            <h2 className="text-3xl md:text-5xl font-bold mb-4 leading-tight">
              Garanta o seu Guia agora
            </h2>
            <p className="text-lg md:text-xl text-primary-foreground/80">
              Acesso vitalício + bônus exclusivos
            </p>
          </div>

          <Card className="bg-card text-card-foreground p-8 md:p-12 rounded-3xl shadow-strong">
            <div className="text-center">
              <h3 className="text-2xl md:text-3xl font-bold mb-2">350 Remédios Naturais do Mato</h3>
              <p className="text-muted-foreground mb-8 text-lg">Guia completo + 3 bônus exclusivos</p>

              <div className="space-y-3 text-left max-w-md mx-auto mb-8">
                {[
                  "Guia completo com 350 plantas medicinais",
                  "BÔNUS 1: Receitas de chás caseiros",
                  "BÔNUS 2: Guia de armazenamento de ervas",
                  "BÔNUS 3: Calendário de colheita",
                  "Acesso vitalício e atualizações grátis",
                  "Garantia incondicional de 7 dias",
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-success flex items-center justify-center flex-shrink-0 mt-1">
                      <Check className="w-4 h-4 text-success-foreground" strokeWidth={3} />
                    </div>
                    <span className="text-base md:text-lg">{item}</span>
                  </div>
                ))}
              </div>

              <div className="border-t border-border pt-8">
                <p className="text-muted-foreground line-through text-lg md:text-xl">De R$ 97,00</p>
                <p className="text-sm text-muted-foreground mt-2">por apenas</p>
                <p className="text-5xl md:text-7xl font-bold text-primary my-2">R$ 19<span className="text-3xl md:text-4xl">,90</span></p>
                <p className="text-base md:text-lg text-muted-foreground mb-8">ou 3x de R$ 6,90 no cartão</p>

                <Button
                  size="lg"
                  asChild
                  className="bg-gradient-cta text-accent-foreground hover:opacity-90 w-full text-lg md:text-2xl py-8 rounded-full shadow-cta font-bold animate-pulse-glow"
                >
                  <a href="https://pay.lowify.com.br/checkout?product_id=PhsXjU">
                    QUERO GARANTIR O MEU AGORA →
                  </a>
                </Button>

                <div className="flex flex-wrap justify-center gap-6 mt-6 text-sm text-muted-foreground">
                  <div className="flex items-center gap-2"><Lock className="w-4 h-4" />Pagamento seguro</div>
                  <div className="flex items-center gap-2"><Download className="w-4 h-4" />Acesso imediato</div>
                  <div className="flex items-center gap-2"><Award className="w-4 h-4" />7 dias de garantia</div>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* GARANTIA */}
      <section className="py-16 md:py-20 bg-background">
        <div className="container mx-auto px-4 max-w-3xl text-center">
          <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-success/10 flex items-center justify-center">
            <Shield className="w-12 h-12 text-success" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">Garantia Incondicional de 7 Dias</h2>
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
            Se por qualquer motivo você não ficar 100% satisfeito, basta enviar um e-mail em até 7 dias e devolveremos todo o seu dinheiro. <strong className="text-foreground">Sem perguntas, sem burocracia.</strong>
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 md:py-24 bg-secondary">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-3xl md:text-5xl font-bold text-center text-foreground mb-12 leading-tight">
            Perguntas Frequentes
          </h2>
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, i) => (
              <AccordionItem key={i} value={`item-${i}`} className="bg-card rounded-xl px-6 border shadow-soft">
                <AccordionTrigger className="text-left text-lg md:text-xl font-semibold py-5 hover:no-underline">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-base md:text-lg text-muted-foreground leading-relaxed pb-5">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="py-16 md:py-24 bg-gradient-hero text-primary-foreground">
        <div className="container mx-auto px-4 max-w-3xl text-center space-y-6">
          <h2 className="text-3xl md:text-5xl font-bold leading-tight">
            Não deixe esse conhecimento se perder
          </h2>
          <p className="text-lg md:text-xl text-primary-foreground/90">
            Resgate a sabedoria dos mais velhos e tenha em mãos um guia que vai cuidar de você e da sua família por toda a vida.
          </p>
          <Button
            size="lg"
            asChild
            className="bg-gradient-cta text-accent-foreground hover:opacity-90 text-lg md:text-xl py-7 px-10 rounded-full shadow-cta font-bold"
          >
            <a href="https://pay.lowify.com.br/checkout?product_id=PhsXjU">
              QUERO MEU GUIA POR R$ 19,90
            </a>
          </Button>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-8 bg-foreground text-background/80">
        <div className="container mx-auto px-4 text-center text-sm">
          <p>© 2026 — 350 Remédios Naturais do Mato. Todos os direitos reservados.</p>
          <p className="mt-2 text-xs opacity-70">Este material é baseado em conhecimento popular e não substitui orientação médica.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
