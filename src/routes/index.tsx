import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import {
  Brain, Rocket, Sparkles, Check, Star, Clock, Users, Trophy, Zap,
  GraduationCap, Github, Linkedin, Twitter, Mail, ShieldCheck, CreditCard,
  ChevronRight, Terminal, Bot, Database, Cpu, Server, Network, Workflow,
  Boxes, Layers, Activity,
} from "lucide-react";
import heroImage from "@/assets/hero-gopher.jpg";
import gopherIcon from "@/assets/gopher-icon.png";
import instructorPhoto from "@/assets/instructor.png";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Go AI Developer — IA e Engenharia de Dados de alta performance com Go" },
      { name: "description", content: "Curso definitivo de Go para IA e Dados. Construa agentes, RAG e LLMs ao lado de pipelines de Kafka, ClickHouse e Iceberg — APIs prontas para produção. Inscrições abertas." },
      { property: "og:title", content: "Go AI Developer — IA e Engenharia de Dados com Go" },
      { property: "og:description", content: "Domine Go aplicado a IA e Engenharia de Dados: agentes, RAG, LLMs, Kafka, ClickHouse, Iceberg e APIs de alta performance em produção." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Landing,
});

function Landing() {
  return (
    <div className="min-h-screen text-foreground overflow-x-hidden">
      <Nav />
      <Hero />
      <Marquee />
      <About />
      <Modules />
      <Features />
      <Instructor />
      <Testimonials />
      <Pricing />
      <FAQ />
      <Enroll />
      <Footer />
    </div>
  );
}

function Nav() {
  return (
    <header className="fixed top-0 inset-x-0 z-50 glass">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#top" className="flex items-center gap-2 font-display font-bold">
          <img src={gopherIcon} alt="" width={32} height={32} className="w-8 h-8" />
          <span className="text-lg">Go<span className="text-gradient">AI</span></span>
        </a>
        <nav className="hidden md:flex items-center gap-8 text-sm text-muted-foreground">
          <a href="#sobre" className="hover:text-foreground transition">Sobre</a>
          <a href="#modulos" className="hover:text-foreground transition">Módulos</a>
          <a href="#instrutor" className="hover:text-foreground transition">Instrutor</a>
          <a href="#precos" className="hover:text-foreground transition">Preços</a>
          <a href="#faq" className="hover:text-foreground transition">FAQ</a>
        </nav>
        <a href="#inscricao" className="inline-flex items-center gap-2 rounded-full bg-primary text-primary-foreground px-5 py-2 text-sm font-semibold hover:opacity-90 transition glow-ring">
          Inscrever-se <ChevronRight className="w-4 h-4" />
        </a>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="relative pt-32 pb-24 grid-bg">
      <div className="absolute inset-0 pointer-events-none" style={{ background: "var(--gradient-hero)" }} />
      <div className="relative max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-xs font-mono mb-6">
            <span className="w-2 h-2 rounded-full bg-accent animate-pulse-glow" />
            Turma 02 · Inscrições abertas até 30/06
          </div>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.05]">
            <span className="text-gradient">Go AI Developer</span>
            <br />
            <span className="text-foreground/90">construa IA e dados</span>
            <br />
            <span className="text-foreground/70">de verdade.</span>
          </h1>
          <p className="mt-6 text-lg text-muted-foreground max-w-xl leading-relaxed">
            Domine <span className="text-foreground font-semibold">Go</span> aplicado a Inteligência Artificial e
            Engenharia de Dados: agentes, RAG e LLMs ao lado de pipelines de{" "}
            <span className="text-foreground font-semibold">Kafka, ClickHouse e Iceberg</span> — APIs de
            alta performance prontas para produção.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#inscricao" className="inline-flex items-center gap-2 rounded-full bg-primary text-primary-foreground px-7 py-3.5 font-semibold hover:opacity-90 transition glow-ring">
              <Rocket className="w-4 h-4" /> Garantir minha vaga
            </a>
            <a href="#modulos" className="inline-flex items-center gap-2 rounded-full border border-border px-7 py-3.5 font-semibold hover:bg-secondary transition">
              Ver ementa completa <ChevronRight className="w-4 h-4" />
            </a>
          </div>
          <div className="mt-10 grid grid-cols-3 gap-6 max-w-md">
            {[
              { v: "12", l: "Módulos" },
              { v: "130h+", l: "Conteúdo" },
              { v: "8", l: "Projetos" },
            ].map((s) => (
              <div key={s.l}>
                <div className="text-3xl font-display font-bold text-gradient">{s.v}</div>
                <div className="text-xs text-muted-foreground mt-1">{s.l}</div>
              </div>
            ))}
          </div>
        </div>
        <div className="relative animate-float">
          <div className="absolute -inset-8 rounded-3xl bg-primary/20 blur-3xl" />
          <img
            src={heroImage}
            alt="Gopher mascote do Go com cérebro de IA"
            width={1536}
            height={1280}
            className="relative rounded-3xl border border-border shadow-[var(--shadow-elegant)]"
          />
          <div className="absolute -bottom-6 -left-6 glass rounded-2xl p-4 flex items-center gap-3 shadow-[var(--shadow-card)]">
            <div className="w-10 h-10 rounded-xl bg-primary/20 flex items-center justify-center">
              <Trophy className="w-5 h-5 text-primary" />
            </div>
            <div>
              <div className="text-sm font-semibold">+2.300 alunos</div>
              <div className="text-xs text-muted-foreground">Aprovação 4.9/5</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Marquee() {
  const items = [
    "OpenAI", "Anthropic", "Ollama", "LangChain", "Qdrant", "pgvector",
    "Kafka", "ClickHouse", "Apache Iceberg", "Airflow", "dbt",
    "PostgreSQL", "Redis", "gRPC", "Prometheus", "Grafana", "Docker", "Kubernetes",
  ];
  return (
    <section className="border-y border-border py-8 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center text-xs font-mono uppercase tracking-widest text-muted-foreground mb-6">
          Stack que você vai dominar
        </div>
        <div className="flex flex-wrap justify-center gap-x-10 gap-y-4 text-lg font-display font-semibold text-muted-foreground/70">
          {items.map((i) => (
            <span key={i} className="hover:text-foreground transition">{i}</span>
          ))}
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="sobre" className="py-24">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
        <div>
          <div className="text-xs font-mono uppercase tracking-widest text-accent mb-4">// sobre o curso</div>
          <h2 className="text-4xl md:text-5xl font-bold leading-tight">
            O ecossistema de IA e dados é <span className="text-gradient">Python</span>.
            <br />A produção em escala é <span className="text-gradient">Go</span>.
          </h2>
          <p className="mt-6 text-muted-foreground leading-relaxed">
            Empresas como Uber, Cloudflare, iFood e Nubank usam Go para servir IA e processar bilhões
            de eventos por dia: baixa latência, concorrência nativa e binários únicos. Neste curso você
            une os dois mundos — consumindo modelos e orquestrando agentes, e ao mesmo tempo construindo
            pipelines de dados e APIs robustas de ponta a ponta.
          </p>
          <ul className="mt-8 space-y-3">
            {[
              "Pipeline real event-driven: Kafka → ClickHouse + dashboard",
              "Projetos reais publicados no seu GitHub",
              "Mentorias semanais ao vivo com o instrutor",
              "Comunidade privada no Discord e certificado reconhecido",
            ].map((t) => (
              <li key={t} className="flex items-center gap-3">
                <span className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center shrink-0">
                  <Check className="w-3.5 h-3.5 text-primary" />
                </span>
                <span className="text-foreground/90">{t}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="relative">
          <pre className="rounded-2xl glass p-6 text-sm font-mono overflow-x-auto shadow-[var(--shadow-card)]">
{`package main

import (
  "context"
  "github.com/sashabaranov/go-openai"
)

func main() {
  client := openai.NewClient("sk-...")

  resp, _ := client.CreateChatCompletion(
    context.Background(),
    openai.ChatCompletionRequest{
      Model: openai.GPT4o,
      Messages: []openai.ChatCompletionMessage{
        {Role: "user", Content: "Olá, Gopher!"},
      },
    },
  )

  println(resp.Choices[0].Message.Content)
}`}
          </pre>
          <div className="absolute -top-4 -right-4 glass rounded-xl px-4 py-2 text-xs font-mono">
            main.go
          </div>
        </div>
      </div>
    </section>
  );
}

function Modules() {
  const modules = [
    { icon: Terminal, hours: "8h", title: "Fundamentos de Go", desc: "Sintaxe, tipos, structs, goroutines, channels, context, erros e testes idiomáticos." },
    { icon: Cpu, hours: "10h", title: "Concorrência Avançada", desc: "Worker pools, fan-in/fan-out, sync/atomic, profiling com pprof e benchmarks." },
    { icon: Database, hours: "12h", title: "Ingestão de Dados", desc: "REST/GraphQL, web scraping, CDC com Debezium e batch vs streaming." },
    { icon: Server, hours: "12h", title: "Bancos & Stores", desc: "PostgreSQL, MongoDB, Redis, ClickHouse e estratégias de migração." },
    { icon: Brain, hours: "10h", title: "LLMs na prática", desc: "OpenAI, Anthropic, Gemini e modelos open-source com Ollama." },
    { icon: Bot, hours: "10h", title: "Agentes Autônomos", desc: "Function calling, tools, ReAct e arquiteturas multi-agente." },
    { icon: Network, hours: "10h", title: "RAG & Vector DBs", desc: "Embeddings, Qdrant, pgvector e busca semântica em escala." },
    { icon: Workflow, hours: "14h", title: "Kafka & Streaming", desc: "Producers/consumers, Schema Registry e entrega exactly-once." },
    { icon: Boxes, hours: "10h", title: "ETL/ELT em Produção", desc: "Orquestração com Airflow, dbt e frameworks de data quality." },
    { icon: Layers, hours: "10h", title: "Data Lakes & Lakehouse", desc: "Parquet/Avro/ORC, Apache Iceberg, S3 e query engines." },
    { icon: Activity, hours: "10h", title: "APIs, gRPC & Observabilidade", desc: "Protobuf, JWT/OAuth, rate-limit, Prometheus, OpenTelemetry e Grafana." },
    { icon: Rocket, hours: "16h", title: "Deploy & Projeto Final", desc: "Docker, Kubernetes, Helm, CI/CD, Terraform e pipeline event-driven Kafka→ClickHouse." },
  ];
  return (
    <section id="modulos" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="text-xs font-mono uppercase tracking-widest text-accent mb-4">// ementa completa</div>
          <h2 className="text-4xl md:text-5xl font-bold">12 módulos. <span className="text-gradient">1 carreira.</span></h2>
          <p className="mt-4 text-muted-foreground">130h+ de conteúdo prático — de Go puro ao deploy de IA e pipelines de dados em produção.</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
          {modules.map((m, i) => (
            <div
              key={m.title}
              className="group relative rounded-2xl p-6 border border-border hover:border-primary/50 transition"
              style={{ background: "var(--gradient-card)" }}
            >
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-mono text-muted-foreground">{String(i + 1).padStart(2, "0")}</span>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-secondary border border-border text-muted-foreground">{m.hours}</span>
              </div>
              <div className="w-11 h-11 rounded-xl bg-primary/15 flex items-center justify-center mb-4 group-hover:bg-primary/25 transition">
                <m.icon className="w-5 h-5 text-primary" />
              </div>
              <h3 className="font-display font-semibold text-lg mb-2">{m.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{m.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Features() {
  const feats = [
    { icon: Zap, title: "Aulas práticas", desc: "Cada conceito é codificado ao vivo." },
    { icon: Users, title: "Mentoria", desc: "Encontros semanais em grupo." },
    { icon: ShieldCheck, title: "Garantia 7 dias", desc: "Reembolso integral sem perguntas." },
    { icon: GraduationCap, title: "Certificado", desc: "Conclusão validada e compartilhável." },
    { icon: Clock, title: "Acesso vitalício", desc: "Conteúdo seu para sempre." },
    { icon: Sparkles, title: "Atualizações", desc: "Novos módulos a cada trimestre." },
  ];
  return (
    <section className="py-20 border-y border-border">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {feats.map((f) => (
          <div key={f.title} className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-xl bg-secondary border border-border flex items-center justify-center shrink-0">
              <f.icon className="w-5 h-5 text-accent" />
            </div>
            <div>
              <h3 className="font-display font-semibold text-lg">{f.title}</h3>
              <p className="text-sm text-muted-foreground mt-1">{f.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function Instructor() {
  return (
    <section id="instrutor" className="py-24">
      <div className="max-w-5xl mx-auto px-6">
        <div className="rounded-3xl p-10 md:p-14 relative overflow-hidden" style={{ background: "var(--gradient-card)" }}>
          <div className="absolute -right-20 -top-20 w-72 h-72 rounded-full bg-primary/20 blur-3xl" />
          <div className="relative grid md:grid-cols-[180px_1fr] gap-8 items-center">
            <div className="relative">
              <div className="absolute inset-0 rounded-full bg-primary/30 blur-2xl" />
              <img src={instructorPhoto} alt="Aécio Junior" width={176} height={176} className="relative w-44 h-44 rounded-full object-cover object-center border-2 border-primary/50" />
            </div>
            <div>
              <div className="text-xs font-mono uppercase tracking-widest text-accent mb-2">// instrutor</div>
              <h2 className="text-3xl md:text-4xl font-bold">Aécio Junior</h2>
              <p className="text-muted-foreground mt-1">Especialista em Gestão da Inovação Tecnológica · 25+ anos em TI · Pós em ML in Production (UFSCar)</p>
              <div className="mt-5 space-y-4 text-foreground/90 leading-relaxed">
                <p>
                  Com mais de 25 anos de experiência em Tecnologia da Informação, atuando desde 1998 em projetos
                  de Engenharia de Software, Banco de Dados, Dados e Inovação, Aécio Junior reúne sólida experiência
                  prática de mercado e forte atuação na formação e desenvolvimento de profissionais de tecnologia.
                </p>
                <p>
                  Graduado em Sistemas de Informação e pós-graduando em Machine Learning in Production pela
                  Universidade Federal de São Carlos (UFSCar), possui ampla experiência no desenvolvimento de
                  soluções escaláveis em Cloud, Engenharia de Dados, Analytics, Inteligência Artificial e
                  Arquitetura de Sistemas.
                </p>
                <p>
                  Atuou como Engenheiro de Software, Administrador de Banco de Dados, Engenheiro de Dados e líder
                  técnico em organizações nacionais e multinacionais, no desenho e implementação de pipelines de
                  dados, processos ETL/ELT, integrações, modelagem de dados, plataformas analíticas e soluções
                  orientadas por inteligência artificial — sempre pautado por boas práticas de engenharia,
                  governança, observabilidade e qualidade de dados.
                </p>
                <p>
                  Também construiu uma sólida carreira como professor e mentor, traduzindo conceitos complexos em
                  aplicações práticas, e participa ativamente de comunidades de tecnologia voltadas à disseminação
                  do conhecimento e ao desenvolvimento do ecossistema tecnológico brasileiro.
                </p>
                <p>
                  Neste curso, você aprende com um profissional que combina experiência prática de mercado, visão
                  estratégica de negócios e sólida formação acadêmica — em Programação, Engenharia de Dados, Cloud
                  Computing, Inteligência Artificial e desenvolvimento de soluções modernas.
                </p>
              </div>
              <div className="mt-5 flex gap-3">
                <a href="#" aria-label="GitHub" className="w-9 h-9 rounded-lg bg-secondary border border-border flex items-center justify-center hover:bg-primary/20 transition"><Github className="w-4 h-4" /></a>
                <a href="#" aria-label="LinkedIn" className="w-9 h-9 rounded-lg bg-secondary border border-border flex items-center justify-center hover:bg-primary/20 transition"><Linkedin className="w-4 h-4" /></a>
                <a href="#" aria-label="Twitter" className="w-9 h-9 rounded-lg bg-secondary border border-border flex items-center justify-center hover:bg-primary/20 transition"><Twitter className="w-4 h-4" /></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Testimonials() {
  const t = [
    { name: "Mariana S.", role: "Backend @ Nubank", text: "Em 3 meses migrei do Python pro Go e já entreguei um agente de IA em produção. Curso transformador." },
    { name: "Ricardo P.", role: "Data Engineer @ iFood", text: "A trilha de Kafka e ClickHouse é absurda. Reescrevi um pipeline em Go e cortei a latência pela metade." },
    { name: "Bruno A.", role: "Founder @ Startup IA", text: "Construí meu MVP inteiro — RAG na frente e pipeline de dados atrás. Performance e custo de inferência caíram pela metade." },
  ];
  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-14">
          <div className="text-xs font-mono uppercase tracking-widest text-accent mb-4">// depoimentos</div>
          <h2 className="text-4xl md:text-5xl font-bold">Quem fez, <span className="text-gradient">recomenda.</span></h2>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {t.map((x) => (
            <div key={x.name} className="rounded-2xl p-7 border border-border" style={{ background: "var(--gradient-card)" }}>
              <div className="flex gap-1 mb-4">
                {Array.from({ length: 5 }).map((_, i) => <Star key={i} className="w-4 h-4 fill-accent text-accent" />)}
              </div>
              <p className="text-foreground/90 leading-relaxed">"{x.text}"</p>
              <div className="mt-6 pt-5 border-t border-border">
                <div className="font-semibold">{x.name}</div>
                <div className="text-sm text-muted-foreground">{x.role}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Pricing() {
  const methods = ["Cartão em 12x sem juros", "Pix", "Boleto", "PayPal"];
  return (
    <section id="precos" className="py-24 relative">
      <div className="max-w-2xl mx-auto px-6">
        <div className="text-center mb-12">
          <div className="text-xs font-mono uppercase tracking-widest text-accent mb-4">// investimento</div>
          <h2 className="text-4xl md:text-5xl font-bold">Um <span className="text-gradient">preço</span>. Curso completo.</h2>
          <p className="mt-4 text-muted-foreground">Pagamento único com acesso a todo o conteúdo.</p>
        </div>
        <div className="relative rounded-3xl border border-primary glow-ring p-10 md:p-12 text-center" style={{ background: "var(--gradient-card)" }}>
          <div className="text-sm text-muted-foreground">Curso completo · Go AI Developer</div>
          <div className="mt-3 text-5xl md:text-6xl font-display font-bold text-gradient">R$ 1.497,00</div>
          <div className="mt-3 text-lg text-muted-foreground">
            em até <strong className="text-foreground">12x de R$ 124,75</strong> sem juros no cartão
          </div>

          <div className="mt-7 flex flex-wrap justify-center gap-2">
            {methods.map((m) => (
              <span key={m} className="inline-flex items-center gap-1.5 rounded-full border border-border bg-secondary px-3 py-1.5 text-xs text-foreground/90">
                <CreditCard className="w-3.5 h-3.5 text-accent" /> {m}
              </span>
            ))}
          </div>

          <a href="#inscricao" className="mt-8 inline-flex items-center gap-2 rounded-full bg-primary text-primary-foreground px-8 py-3.5 font-semibold hover:opacity-90 transition glow-ring">
            <Rocket className="w-4 h-4" /> Garantir minha vaga
          </a>

          <div className="mt-6 flex items-center justify-center gap-2 text-xs text-muted-foreground">
            <ShieldCheck className="w-4 h-4 text-accent" /> 7 dias de garantia incondicional · reembolso de 100%
          </div>
        </div>
      </div>
    </section>
  );
}

function FAQ() {
  const faqs = [
    { q: "Preciso saber Go antes?", a: "Não. O módulo 01 cobre fundamentos do zero, desde sintaxe até concorrência idiomática. Recomendamos apenas lógica de programação e SQL básico." },
    { q: "Preciso saber IA ou Engenharia de Dados?", a: "Também não. Você aprende na prática tanto LLMs, embeddings, RAG e agentes quanto Kafka, ClickHouse, Iceberg e Airflow — do essencial ao avançado." },
    { q: "Qual a carga horária e a duração?", a: "São 130h+ distribuídas em 12 módulos. Cerca de 12 semanas no ritmo guiado (plano Pro) ou no seu próprio ritmo (plano Starter)." },
    { q: "As aulas são gravadas ou ao vivo?", a: "Conteúdo principal gravado em alta qualidade + encontros ao vivo semanais para tirar dúvidas. Tudo fica gravado e disponível." },
    { q: "Por quanto tempo tenho acesso?", a: "Plano Starter: 1 ano. Plano Pro: vitalício, incluindo todas as atualizações futuras." },
    { q: "O certificado é reconhecido?", a: "Sim. Certificado digital ao concluir 80% do curso, validável por link público e compatível com o LinkedIn." },
  ];
  return (
    <section id="faq" className="py-24">
      <div className="max-w-3xl mx-auto px-6">
        <div className="text-center mb-12">
          <div className="text-xs font-mono uppercase tracking-widest text-accent mb-4">// faq</div>
          <h2 className="text-4xl md:text-5xl font-bold">Perguntas <span className="text-gradient">frequentes</span></h2>
        </div>
        <div className="space-y-3">
          {faqs.map((f, i) => (
            <details key={i} className="group rounded-xl border border-border p-5 [&_summary::-webkit-details-marker]:hidden" style={{ background: "var(--gradient-card)" }}>
              <summary className="flex items-center justify-between cursor-pointer font-semibold">
                {f.q}
                <ChevronRight className="w-5 h-5 transition group-open:rotate-90 text-primary" />
              </summary>
              <p className="mt-3 text-muted-foreground leading-relaxed">{f.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

function Enroll() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", payment: "card" });
  const [sent, setSent] = useState(false);

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <section id="inscricao" className="py-24 relative">
      <div className="max-w-5xl mx-auto px-6">
        <div className="rounded-3xl border border-primary/40 overflow-hidden shadow-[var(--shadow-elegant)]" style={{ background: "var(--gradient-card)" }}>
          <div className="grid md:grid-cols-2">
            <div className="p-10 md:p-12 border-r border-border">
              <div className="text-xs font-mono uppercase tracking-widest text-accent mb-3">// próxima turma</div>
              <h2 className="text-3xl md:text-4xl font-bold leading-tight">
                Garanta sua vaga <br /><span className="text-gradient">agora.</span>
              </h2>
              <p className="mt-4 text-muted-foreground">
                Vagas limitadas a <strong className="text-foreground">80 alunos</strong> para garantir a qualidade
                da mentoria. Início em <strong className="text-foreground">15 de julho</strong>.
              </p>
              <div className="mt-6 rounded-2xl border border-primary/40 p-5">
                <div className="text-3xl font-display font-bold text-gradient">R$ 1.497,00</div>
                <div className="text-sm text-muted-foreground mt-1">em até 12x de R$ 124,75 sem juros no cartão</div>
              </div>
              <ul className="mt-8 space-y-3 text-sm">
                {["7 dias de garantia incondicional", "Acesso liberado em até 5 min", "Suporte humano via WhatsApp"].map((b) => (
                  <li key={b} className="flex items-center gap-2"><ShieldCheck className="w-4 h-4 text-accent" />{b}</li>
                ))}
              </ul>
              <div className="mt-8 flex items-center gap-4 text-xs text-muted-foreground">
                <CreditCard className="w-4 h-4" />
                <span>Visa · Mastercard · Amex · Pix · Boleto · PayPal</span>
              </div>
            </div>

            <div className="p-10 md:p-12">
              {sent ? (
                <div className="h-full flex flex-col items-center justify-center text-center">
                  <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mb-4 animate-pulse-glow">
                    <Check className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold">Inscrição recebida!</h3>
                  <p className="mt-2 text-muted-foreground">Enviamos o link de pagamento para o seu e-mail.</p>
                </div>
              ) : (
                <form onSubmit={submit} className="space-y-4">
                  <style>{`.go-input{width:100%;background:var(--secondary);border:1px solid var(--border);border-radius:0.65rem;padding:0.7rem 0.9rem;color:var(--foreground);font-size:0.95rem;outline:none;transition:all .2s}.go-input:focus{border-color:var(--primary);box-shadow:0 0 0 3px oklch(0.78 0.16 210 / 25%)}`}</style>
                  <Field label="Nome completo">
                    <input required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} className="go-input" placeholder="Seu nome" />
                  </Field>
                  <Field label="E-mail">
                    <input required type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} className="go-input" placeholder="voce@email.com" />
                  </Field>
                  <Field label="WhatsApp">
                    <input required value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} className="go-input" placeholder="(11) 99999-9999" />
                  </Field>
                  <Field label="Forma de pagamento">
                    <div className="grid grid-cols-3 gap-2">
                      {[
                        { v: "card", l: "Cartão" },
                        { v: "pix", l: "Pix" },
                        { v: "boleto", l: "Boleto" },
                      ].map((o) => (
                        <button
                          key={o.v}
                          type="button"
                          onClick={() => setForm({ ...form, payment: o.v })}
                          className={`rounded-lg py-2.5 text-sm border transition ${
                            form.payment === o.v ? "border-primary bg-primary/15 text-foreground" : "border-border text-muted-foreground hover:text-foreground"
                          }`}
                        >
                          {o.l}
                        </button>
                      ))}
                    </div>
                  </Field>
                  <button type="submit" className="w-full mt-2 rounded-full bg-primary text-primary-foreground py-3.5 font-semibold hover:opacity-90 transition glow-ring inline-flex items-center justify-center gap-2">
                    <Rocket className="w-4 h-4" /> Finalizar inscrição
                  </button>
                  <p className="text-xs text-muted-foreground text-center">
                    Ao se inscrever, você concorda com nossos Termos e Política de Privacidade.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="text-xs font-mono uppercase tracking-widest text-muted-foreground">{label}</span>
      <div className="mt-1.5">{children}</div>
    </label>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border mt-12 py-12">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-8">
        <div className="md:col-span-2">
          <div className="flex items-center gap-2 font-display font-bold">
            <img src={gopherIcon} alt="" width={32} height={32} className="w-8 h-8" />
            <span>Go<span className="text-gradient">AI</span> Developer</span>
          </div>
          <p className="mt-3 text-sm text-muted-foreground max-w-sm">
            Formação completa em Go para Inteligência Artificial e Engenharia de Dados — de agentes e RAG
            a pipelines de Kafka, ClickHouse e Iceberg em produção.
          </p>
        </div>
        <div>
          <div className="text-sm font-semibold mb-3">Curso</div>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li><a href="#modulos" className="hover:text-foreground">Módulos</a></li>
            <li><a href="#precos" className="hover:text-foreground">Preços</a></li>
            <li><a href="#faq" className="hover:text-foreground">FAQ</a></li>
          </ul>
        </div>
        <div>
          <div className="text-sm font-semibold mb-3">Contato</div>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li className="flex items-center gap-2"><Mail className="w-4 h-4" /> contato@goai.dev</li>
            <li className="flex items-center gap-2"><Github className="w-4 h-4" /> /goai-dev</li>
          </ul>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-6 mt-10 pt-6 border-t border-border text-xs text-muted-foreground flex flex-wrap justify-between gap-4">
        <span>© {new Date().getFullYear()} Go AI Developer. Todos os direitos reservados.</span>
        <span className="font-mono">Made with Go 🐹 + AI & Data</span>
      </div>
    </footer>
  );
}
