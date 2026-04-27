import { useEffect, useState } from "react";
import {
  Leaf, Check, Clock, Shield, Download, Lock, BookOpen, Sprout, Calendar,
  Coffee, Archive, HeartPulse, Wind, Bed, Activity, ShieldCheck, ThermometerSnowflake,
  Salad, ChevronDown, Star, ArrowRight, BadgeCheck, Award, Users, Zap
} from "lucide-react";
import guiaMockup from "@/assets/ebook-mockup.png";

const CHECKOUT_URL = "https://pay.lowify.com.br/checkout.php?product_id=PhsXjU";

const reviewImages = [
  "https://king-assets.yampi.me/dooki/69eec685b35fe/69eec685b35ff.jpg",
  "https://king-assets.yampi.me/dooki/69eec75baaa07/69eec75baaa08.jpg",
  "https://king-assets.yampi.me/dooki/69eec6aad8cda/69eec6aad8cdc.jpg",
  "https://king-assets.yampi.me/dooki/69eec6a64616d/69eec6a64616f.jpg",
  "https://king-assets.yampi.me/dooki/69eec6a02c4bf/69eec6a02c4c1.jpg",
  "https://king-assets.yampi.me/dooki/69eec6939d9c2/69eec6939d9c4.jpg",
  "https://king-assets.yampi.me/dooki/69eec68dd2139/69eec68dd213b.jpg",
];

const trackPurchaseClick = () => {
  if (typeof window !== "undefined" && (window as any).fbq) {
    (window as any).fbq("track", "InitiateCheckout");
  }
};

const CTAButton = ({
  children,
  className = "",
  size = "lg",
  href,
}: {
  children: React.ReactNode;
  className?: string;
  size?: "lg" | "xl";
  href?: string;
}) => {
  const target = href ?? CHECKOUT_URL;
  const isAnchor = target.startsWith("#");
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (isAnchor) {
      e.preventDefault();
      const el = document.querySelector(target);
      if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
      return;
    }
    trackPurchaseClick();
  };
  return (
    <a
      href={target}
      onClick={handleClick}
      className={`inline-flex items-center justify-center gap-2 gradient-cta text-cta-foreground font-bold rounded-full shadow-cta hover:scale-[1.02] active:scale-[0.99] transition-transform animate-pulse-soft text-center ${
        size === "xl" ? "px-8 py-5 text-lg sm:text-xl" : "px-7 py-4 text-base sm:text-lg"
      } ${className}`}
    >
      {children}
      <ArrowRight className="w-5 h-5" />
    </a>
  );
};

const SectionTitle = ({ children, kicker }: { children: React.ReactNode; kicker?: string }) => (
  <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
    {kicker && (
      <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-secondary text-primary text-sm font-semibold mb-4">
        <Leaf className="w-4 h-4" />
        {kicker}
      </div>
    )}
    <h2 className="text-3xl sm:text-4xl md:text-5xl text-primary">{children}</h2>
  </div>
);

const Index = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  // Intersection observer for fade-up
  useEffect(() => {
    const els = document.querySelectorAll("[data-reveal]");
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("animate-fade-up");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12 }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  const dores = [
    { icon: Wind, label: "Gripes frequentes" },
    { icon: Salad, label: "Má digestão" },
    { icon: Bed, label: "Insônia e ansiedade" },
    { icon: Activity, label: "Dores nas articulações" },
    { icon: HeartPulse, label: "Pressão alta" },
    { icon: ShieldCheck, label: "Imunidade baixa" },
  ];

  const beneficios = [
    { icon: Leaf, title: "350 plantas medicinais", desc: "Organizadas por região do Brasil para fácil consulta." },
    { icon: BookOpen, title: "Modo de preparo simples", desc: "Passo a passo claro, com letras grandes." },
    { icon: Shield, title: "Contraindicações", desc: "Uso seguro, com avisos importantes em cada planta." },
    { icon: Sprout, title: "Sabedoria popular", desc: "Conhecimento ancestral brasileiro preservado." },
  ];

  const faqs = [
    { q: "É fácil para pessoas mais velhas?", a: "Sim. O guia foi feito com letras grandes, linguagem simples e direta. Pensado especialmente para quem tem 50+ anos." },
    { q: "Como recebo o guia?", a: "Logo após o pagamento aprovado, você recebe um e-mail com o link de acesso imediato ao guia em PDF." },
    { q: "Precisa de internet para usar?", a: "Não. Após o download, o guia fica salvo no seu celular ou computador para consultar quando quiser, sem internet." },
    { q: "Posso imprimir o guia?", a: "Sim. Você pode imprimir todas as páginas e ter um livro físico em casa para consulta diária." },
    { q: "E se eu não gostar?", a: "Você tem 7 dias de garantia incondicional. Basta pedir o reembolso por e-mail e devolvemos 100% do valor, sem perguntas." },
  ];

  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      {/* TOP BAR — escassez */}
      <div className="bg-highlight text-highlight-foreground text-xs sm:text-sm py-2 px-3 text-center font-semibold">
        <span className="inline-flex items-center gap-1.5 sm:gap-2 flex-wrap justify-center leading-tight">
          <Clock className="w-3.5 h-3.5 sm:w-4 sm:h-4 flex-shrink-0" />
          <span>Oferta por tempo limitado — os descontos se encerram em breve</span>
        </span>
      </div>

      {/* HERO */}
      <header className="gradient-hero">
        <div className="container mx-auto px-8 sm:px-14 lg:px-24 py-10 sm:py-14 lg:py-16">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="order-2 lg:order-1" data-reveal>
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/70 backdrop-blur text-primary text-sm font-semibold mb-5 shadow-soft">
                <Leaf className="w-4 h-4" />
                Guia Digital — Acesso Imediato
              </div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl text-primary mb-4 leading-[1.15]">
                Descubra os <span className="text-accent">350 Remédios Naturais</span> que os Mais Velhos Usavam
              </h1>
              <p className="text-base sm:text-lg text-foreground/85 font-semibold mb-6 max-w-xl">
                Guia completo de plantas medicinais do Brasil, com linguagem simples e letras grandes.
              </p>

              <ul className="space-y-2.5 mb-7 text-sm sm:text-base">
                {["Acesso imediato após a compra", "100% seguro e baseado em sabedoria popular", "Fácil de entender, mesmo para iniciantes"].map((b) => (
                  <li key={b} className="flex items-start gap-3">
                    <span className="mt-0.5 w-6 h-6 rounded-full bg-accent/15 text-accent flex items-center justify-center flex-shrink-0">
                      <Check className="w-3.5 h-3.5" strokeWidth={3} />
                    </span>
                    <span className="text-foreground/90 font-semibold">{b}</span>
                  </li>
                ))}
              </ul>

              <CTAButton size="xl" href="#oferta">QUERO MEU GUIA AGORA</CTAButton>

              <div className="flex flex-wrap items-center gap-4 mt-6 text-xs sm:text-sm text-foreground/80 font-semibold">
                <div className="flex items-center gap-1.5"><Lock className="w-4 h-4 text-primary" /> Compra segura</div>
                <div className="flex items-center gap-1.5"><Download className="w-4 h-4 text-primary" /> Acesso imediato</div>
                <div className="flex items-center gap-1.5"><Shield className="w-4 h-4 text-primary" /> 7 dias de garantia</div>
              </div>
            </div>

            <div className="order-1 lg:order-2 flex justify-center" data-reveal>
              <div className="relative">
                <div className="absolute -inset-8 bg-accent/20 rounded-full blur-3xl" aria-hidden />
                <img
                  src={guiaMockup}
                  alt="Guia 350 Remédios Naturais do Mato"
                  width={1024}
                  height={1024}
                  className="relative max-w-full w-[500px] sm:w-[560px] lg:w-[420px] drop-shadow-2xl animate-float scale-110 sm:scale-100"
                />
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* DORES */}
      <section className="py-12 sm:py-20 bg-background">
        <div className="container mx-auto px-4">
          <SectionTitle kicker="Conexão Real">Você sofre com algum desses problemas?</SectionTitle>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 max-w-4xl mx-auto" data-reveal>
            {dores.map(({ icon: Icon, label }) => (
              <div key={label} className="bg-card rounded-2xl p-5 sm:p-6 text-center shadow-card border border-border hover:border-primary/30 transition-colors">
                <div className="w-14 h-14 mx-auto mb-3 rounded-2xl bg-secondary text-primary flex items-center justify-center">
                  <Icon className="w-7 h-7" />
                </div>
                <p className="font-semibold text-base sm:text-lg">{label}</p>
              </div>
            ))}
          </div>
          <p className="text-center text-xl sm:text-2xl mt-10 text-primary font-semibold" data-reveal>
            A natureza tem uma resposta para cada um deles.
          </p>
        </div>
      </section>

      {/* APRESENTAÇÃO PRODUTO */}
      <section className="py-12 sm:py-20 gradient-natural">
        <div className="container mx-auto px-4">
          <SectionTitle kicker="O que você recebe">O que você vai encontrar no Guia</SectionTitle>
          <div className="grid sm:grid-cols-2 gap-5 sm:gap-7 max-w-4xl mx-auto">
            {beneficios.map(({ icon: Icon, title, desc }) => (
              <div key={title} className="bg-card rounded-2xl p-6 sm:p-7 shadow-card border border-border" data-reveal>
                <div className="w-14 h-14 rounded-2xl gradient-cta text-cta-foreground flex items-center justify-center mb-4">
                  <Icon className="w-7 h-7" />
                </div>
                <h3 className="text-xl sm:text-2xl text-primary mb-2">{title}</h3>
                <p className="text-muted-foreground text-base sm:text-lg">{desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-12" data-reveal>
            <CTAButton>QUERO MEU GUIA AGORA</CTAButton>
          </div>
        </div>
      </section>

      {/* STORYTELLING */}
      <section className="py-12 sm:py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 max-w-4xl text-center" data-reveal>
          <Sprout className="w-12 h-12 mx-auto mb-5 text-accent" />
          <h2 className="text-3xl sm:text-4xl md:text-5xl mb-6">
            Antes das farmácias, nossos avós já sabiam cuidar da saúde com o que a terra oferecia
          </h2>
          <p className="text-lg sm:text-xl text-primary-foreground/85 mb-10 max-w-2xl mx-auto">
            Esse conhecimento atravessou gerações — simples, natural e acessível. E não pode se perder.
          </p>
          <div className="grid sm:grid-cols-3 gap-5">
            {[
              { icon: Users, t: "Conhecimento passado por gerações" },
              { icon: Leaf, t: "Simples, natural e acessível" },
              { icon: BookOpen, t: "Não pode se perder" },
            ].map(({ icon: Icon, t }) => (
              <div key={t} className="bg-primary-foreground/10 backdrop-blur rounded-2xl p-6 border border-primary-foreground/15">
                <Icon className="w-8 h-8 mx-auto mb-3 text-accent" />
                <p className="font-semibold">{t}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROVA SOCIAL */}
      <section className="py-12 sm:py-20 bg-background overflow-hidden">
        <div className="container mx-auto px-4">
          <SectionTitle>
            Mais de 2.000 leitores satisfeitos
          </SectionTitle>
          <div className="flex justify-center mb-8" data-reveal>
            <div className="flex items-center gap-1 text-highlight">
              {[...Array(5)].map((_, i) => <Star key={i} className="w-6 h-6 fill-current" />)}
              <span className="ml-2 text-foreground font-semibold">4.9 / 5 — avaliações reais</span>
            </div>
          </div>
        </div>

        <div className="relative" data-reveal>
          <div className="flex gap-5 animate-marquee w-max">
            {[...reviewImages, ...reviewImages].map((src, i) => (
              <div key={i} className="w-[260px] sm:w-[320px] flex-shrink-0">
                <img
                  src={src}
                  alt={`Depoimento de leitor ${i + 1}`}
                  loading="lazy"
                  className="w-full h-auto object-contain"
                />
              </div>
            ))}
          </div>
          <div className="pointer-events-none absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-background to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-background to-transparent" />
        </div>
      </section>

      {/* OFERTA */}
      <section id="oferta" className="py-12 sm:py-20 gradient-natural">
        <div className="container mx-auto px-4">
          <SectionTitle kicker="Oferta especial">Garanta o seu agora com desconto</SectionTitle>

          <div className="max-w-2xl mx-auto bg-card rounded-3xl shadow-soft border-2 border-accent/40 p-6 sm:p-10 relative" data-reveal>
            <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 gradient-cta text-cta-foreground text-[11px] sm:text-sm font-bold px-3.5 sm:px-5 py-1.5 sm:py-2 rounded-full shadow-cta inline-flex items-center gap-1.5 sm:gap-2 whitespace-nowrap max-w-[92%]">
              <Zap className="w-3.5 h-3.5 sm:w-4 sm:h-4 flex-shrink-0" /> OFERTA POR TEMPO LIMITADO
            </div>

            <h3 className="text-2xl sm:text-3xl text-primary text-center mb-2 mt-2">
              350 Remédios Naturais do Mato
            </h3>
            <p className="text-center text-muted-foreground mb-7">+ 5 Bônus Exclusivos Inclusos</p>

            <ul className="space-y-3 mb-8 max-w-md mx-auto text-base sm:text-lg">
              {[
                { icon: BookOpen, t: "Bônus 01 - Receitas para Imunidade" },
                { icon: Coffee, t: "Bônus 02 - Chás Poderosos" },
                { icon: Archive, t: "Bônus 03 - Ervas Essenciais" },
                { icon: Calendar, t: "Bônus 04 - Guia por Sintomas" },
                { icon: BookOpen, t: "Bônus 05 - Rotina Anti-inflamatória" },
              ].map(({ icon: Icon, t }) => (
                <li key={t} className="flex items-start gap-3">
                  <span className="w-9 h-9 rounded-xl bg-accent/15 text-accent flex items-center justify-center flex-shrink-0">
                    <Icon className="w-5 h-5" />
                  </span>
                  <span>{t}</span>
                </li>
              ))}
            </ul>

            <div className="text-center mb-7">
              <p className="text-muted-foreground line-through text-lg">De R$ 97,00</p>
              <p className="text-5xl sm:text-6xl font-extrabold text-highlight my-1">R$ 19,90</p>
              <p className="text-muted-foreground text-lg"></p>
            </div>

            <div className="flex justify-center">
              <CTAButton size="xl" className="w-full sm:w-auto">QUERO GARANTIR AGORA</CTAButton>
            </div>

            <div className="flex flex-wrap justify-center items-center gap-5 mt-7 text-sm text-muted-foreground">
              <div className="flex items-center gap-1.5"><Lock className="w-4 h-4 text-primary" /> Pagamento seguro</div>
              <div className="flex items-center gap-1.5"><BadgeCheck className="w-4 h-4 text-primary" /> Compra protegida</div>
              <div className="flex items-center gap-1.5"><Download className="w-4 h-4 text-primary" /> Acesso imediato</div>
            </div>
          </div>
        </div>
      </section>

      {/* GARANTIA */}
      <section className="py-12 sm:py-16 bg-background">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="bg-card border-2 border-primary/20 rounded-3xl p-8 sm:p-10 flex flex-col sm:flex-row items-center gap-6 shadow-card" data-reveal>
            <div className="w-24 h-24 rounded-full gradient-cta text-cta-foreground flex items-center justify-center flex-shrink-0">
              <Award className="w-12 h-12" />
            </div>
            <div className="text-center sm:text-left">
              <h3 className="text-2xl sm:text-3xl text-primary mb-2">Garantia incondicional de 7 dias</h3>
              <p className="text-muted-foreground text-lg">
                Se por qualquer motivo você não gostar do guia, basta enviar um e-mail em até 7 dias e fazemos o reembolso total — sem perguntas.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-12 sm:py-20 gradient-natural">
        <div className="container mx-auto px-4 max-w-3xl">
          <SectionTitle kicker="Dúvidas frequentes">Perguntas comuns</SectionTitle>
          <div className="space-y-3" data-reveal>
            {faqs.map((f, i) => (
              <button
                key={f.q}
                onClick={() => setOpenFaq(openFaq === i ? null : i)}
                className="w-full text-left bg-card rounded-2xl border border-border shadow-card overflow-hidden"
              >
                <div className="flex items-center justify-between gap-4 p-5 sm:p-6">
                  <span className="font-semibold text-lg text-primary">{f.q}</span>
                  <ChevronDown className={`w-5 h-5 text-primary transition-transform flex-shrink-0 ${openFaq === i ? "rotate-180" : ""}`} />
                </div>
                {openFaq === i && (
                  <div className="px-5 sm:px-6 pb-6 text-muted-foreground text-base sm:text-lg">
                    {f.a}
                  </div>
                )}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="py-16 sm:py-24 bg-primary text-primary-foreground text-center">
        <div className="container mx-auto px-4 max-w-3xl" data-reveal>
          <ThermometerSnowflake className="w-12 h-12 mx-auto mb-5 text-accent" />
          <h2 className="text-3xl sm:text-5xl mb-4">Não deixe esse conhecimento se perder</h2>
          <p className="text-lg sm:text-xl text-primary-foreground/85 mb-8">
            Tenha em suas mãos a sabedoria que curou gerações — por menos do que custa um almoço.
          </p>
          <CTAButton size="xl" className="mx-auto">QUERO MEU GUIA POR R$ 19,90</CTAButton>

          <div className="flex flex-wrap justify-center items-center gap-5 mt-8 text-sm text-primary-foreground/80">
            <div className="flex items-center gap-1.5"><Lock className="w-4 h-4" /> 100% seguro</div>
            <div className="flex items-center gap-1.5"><Shield className="w-4 h-4" /> 7 dias de garantia</div>
            <div className="flex items-center gap-1.5"><Download className="w-4 h-4" /> Acesso imediato</div>
          </div>
        </div>
      </section>

      {/* RODAPÉ */}
      <footer className="bg-secondary text-secondary-foreground py-10 pb-28 sm:pb-10">
        <div className="container mx-auto px-4 max-w-3xl text-center text-sm">
          <p className="mb-3 text-muted-foreground leading-relaxed">
            <strong>Aviso legal:</strong> Este material é baseado em conhecimento popular e tradicional brasileiro. Não substitui orientação, diagnóstico ou tratamento médico profissional. Consulte sempre um profissional de saúde.
          </p>
          <p className="text-muted-foreground">
            © {new Date().getFullYear()} 350 Remédios Naturais do Mato — Todos os direitos reservados.
          </p>
        </div>
      </footer>

      {/* STICKY MOBILE CTA */}
      <div className="fixed bottom-0 inset-x-0 z-50 sm:hidden p-3 bg-card/95 backdrop-blur border-t border-border shadow-2xl">
        <a
          href={CHECKOUT_URL}
          onClick={trackPurchaseClick}
          className="flex items-center justify-center gap-2 gradient-cta text-cta-foreground font-bold py-4 rounded-full shadow-cta text-base"
        >
          QUERO MEU GUIA POR R$ 19,90
          <ArrowRight className="w-5 h-5" />
        </a>
      </div>
    </div>
  );
};

export default Index;
