import { createFileRoute } from "@tanstack/react-router";
import {
  Brain, Rocket, Sparkles, Check, Clock, Users, Trophy, Zap,
  GraduationCap, Github, Mail, ShieldCheck, CreditCard,
  ChevronRight, Terminal, Bot, Database, Cpu, Server, Network, Workflow,
  Boxes, Layers, Activity, Gift, BookOpen, Globe,
} from "lucide-react";
import heroImage from "@/assets/hero-gopher.webp";
import gopherIcon from "@/assets/gopher-icon.png";
import instructorPhoto from "@/assets/instructor.webp";

const SYMPLA_URL =
  "https://www.sympla.com.br/evento-online/ia-e-dados-com-go-ao-vivo-construa-ia-e-dados-de-verdade/3470670";

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
      <Bonus />
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
          <a href="#bonus" className="hover:text-foreground transition">Bônus</a>
          <a href="#precos" className="hover:text-foreground transition">Investimento</a>
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
            Encontros ao vivo e imersivos · Início 01/08/2026
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
            <a href={SYMPLA_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-full bg-primary text-primary-foreground px-7 py-3.5 font-semibold hover:opacity-90 transition glow-ring">
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
            alt="Go AI Developer — gopher construindo IA e pipelines de dados"
            width={1600}
            height={873}
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
              "Grupo privado no Telegram e certificado reconhecido",
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
    { icon: Users, title: "Encontros ao vivo", desc: "8 sábados de imersão, das 14h às 17h." },
    { icon: ShieldCheck, title: "Garantia 7 dias", desc: "Reembolso integral sem perguntas." },
    { icon: GraduationCap, title: "Certificado", desc: "Conclusão validada e compartilhável." },
    { icon: Clock, title: "Gravações disponíveis", desc: "Reveja todos os encontros quando quiser." },
    { icon: Sparkles, title: "Material de apoio", desc: "Exercícios e códigos de cada aula." },
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
              <p className="text-muted-foreground mt-1">25+ anos em Tecnologia da Informação · desde 1998</p>
              <div className="mt-3 flex flex-wrap gap-2">
                <span className="inline-flex items-center gap-1.5 rounded-full border border-primary/40 bg-primary/10 px-3 py-1.5 text-xs font-medium text-foreground">
                  <GraduationCap className="w-3.5 h-3.5 text-accent" /> Pós-graduado em Gestão da Inovação Tecnológica · UEFS
                </span>
                <span className="inline-flex items-center gap-1.5 rounded-full border border-primary/40 bg-primary/10 px-3 py-1.5 text-xs font-medium text-foreground">
                  <GraduationCap className="w-3.5 h-3.5 text-accent" /> Pós-graduado em Machine Learning in Production · UFSCar
                </span>
              </div>
              <div className="mt-5 space-y-4 text-foreground/90 leading-relaxed">
                <p>
                  Com mais de 25 anos de experiência em Tecnologia da Informação, atuando desde 1998 em projetos
                  de Engenharia de Software, Banco de Dados, Dados e Inovação, Aécio Junior reúne sólida experiência
                  prática de mercado e forte atuação na formação e desenvolvimento de profissionais de tecnologia.
                </p>
                <p>
                  Pós-graduado em Machine Learning in Production pela Universidade Federal de São Carlos
                  (UFSCar), possui ampla experiência no desenvolvimento de soluções escaláveis em Cloud,
                  Engenharia de Dados, Analytics, Inteligência Artificial e Arquitetura de Sistemas.
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
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Bonus() {
  const bonuses = [
    { icon: GraduationCap, title: "Mentoria individual de carreira técnica", desc: "Sessão 1:1 para revisar seu momento, traçar um plano de evolução e acelerar sua carreira em tech." },
    { icon: BookOpen, title: "2 e-books de Golang", desc: "Materiais autorais para dominar a linguagem — da base aos padrões avançados de produção." },
    { icon: Bot, title: "Mini curso de Claude Code", desc: "Programe com IA na prática usando o Claude Code e multiplique sua produtividade no dia a dia." },
    { icon: Globe, title: "Skills de busca de vagas internacionais", desc: "Estratégias e ferramentas para conquistar vagas remotas em empresas do exterior (USD/EUR)." },
  ];
  return (
    <section id="bonus" className="py-24 relative">
      <div className="max-w-6xl mx-auto px-6">
        <div className="relative rounded-3xl border border-primary glow-ring overflow-hidden p-8 md:p-14" style={{ background: "var(--gradient-card)" }}>
          <div className="absolute -right-24 -top-24 w-80 h-80 rounded-full bg-primary/20 blur-3xl pointer-events-none" />
          <div className="absolute -left-24 -bottom-24 w-80 h-80 rounded-full bg-accent/10 blur-3xl pointer-events-none" />

          <div className="relative text-center max-w-2xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 rounded-full bg-primary/15 border border-primary/40 px-4 py-1.5 text-xs font-mono uppercase tracking-widest text-foreground mb-5">
              <Gift className="w-4 h-4 text-accent" /> Bônus exclusivos
            </div>
            <h2 className="text-4xl md:text-5xl font-bold leading-tight">
              Inscreva-se hoje e leve <span className="text-gradient">tudo isso de bônus</span>
            </h2>
            <p className="mt-4 text-muted-foreground">Incluídos gratuitamente na sua inscrição — sem nenhum custo adicional.</p>
          </div>

          <div className="relative grid md:grid-cols-2 gap-5">
            {bonuses.map((b) => (
              <div key={b.title} className="flex items-start gap-4 rounded-2xl border border-border bg-background/40 p-6 hover:border-primary/50 transition">
                <div className="w-12 h-12 rounded-xl bg-primary/15 flex items-center justify-center shrink-0">
                  <b.icon className="w-6 h-6 text-primary" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between gap-3">
                    <h3 className="font-display font-semibold text-lg leading-snug">{b.title}</h3>
                    <span className="shrink-0 text-[10px] font-bold tracking-wide rounded-full bg-accent/20 text-accent px-2 py-1">GRÁTIS</span>
                  </div>
                  <p className="text-sm text-muted-foreground mt-1.5 leading-relaxed">{b.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="relative text-center mt-10">
            <a href={SYMPLA_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-full bg-primary text-primary-foreground px-8 py-3.5 font-semibold hover:opacity-90 transition glow-ring">
              <Rocket className="w-4 h-4" /> Quero minha vaga + bônus
            </a>
          </div>
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
          <h2 className="text-4xl md:text-5xl font-bold">Invista uma vez, <span className="text-gradient">colha a carreira inteira</span>.</h2>
          <p className="mt-4 text-muted-foreground">Domine as habilidades de IA e Engenharia de Dados mais valorizadas do mercado — e veja o curso se pagar logo na primeira oportunidade.</p>
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

          <a href={SYMPLA_URL} target="_blank" rel="noopener noreferrer" className="mt-8 inline-flex items-center gap-2 rounded-full bg-primary text-primary-foreground px-8 py-3.5 font-semibold hover:opacity-90 transition glow-ring">
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
    { q: "Como funcionam os encontros?", a: "São 8 encontros ao vivo e imersivos, sempre aos sábados das 14h às 17h, de 01/08 a 19/09/2026 — 24h de imersão ao vivo, com prática hands-on e espaço para tirar dúvidas em tempo real." },
    { q: "As aulas são gravadas ou ao vivo?", a: "Os encontros são 100% ao vivo e imersivos. Todos ficam gravados em alta qualidade para você revisar quando quiser, junto com os materiais de apoio." },
    { q: "Vou ter acesso às gravações?", a: "Sim. Todos os encontros ao vivo ficam gravados e disponíveis para você revisar, junto com os materiais de apoio do curso." },
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
                <strong className="text-foreground">Encontros ao vivo e imersivos</strong>, aos sábados das
                14h às 17h. Vagas limitadas a <strong className="text-foreground">80 alunos</strong>. Início em{" "}
                <strong className="text-foreground">1º de agosto de 2026</strong>.
              </p>
              <div className="mt-6 rounded-2xl border border-primary/40 p-5">
                <div className="text-3xl font-display font-bold text-gradient">R$ 1.497,00</div>
                <div className="text-sm text-muted-foreground mt-1">em até 12x de R$ 124,75 sem juros no cartão</div>
              </div>
              <ul className="mt-8 space-y-3 text-sm">
                {["7 dias de garantia incondicional", "Aulas ao vivo / Hands-On", "Suporte humano via WhatsApp"].map((b) => (
                  <li key={b} className="flex items-center gap-2"><ShieldCheck className="w-4 h-4 text-accent" />{b}</li>
                ))}
              </ul>
              <div className="mt-8 flex items-center gap-4 text-xs text-muted-foreground">
                <CreditCard className="w-4 h-4" />
                <span>Visa · Mastercard · Amex · Pix · Boleto · PayPal</span>
              </div>
            </div>

            <div className="p-10 md:p-12 flex flex-col justify-center">
              <div className="text-xs font-mono uppercase tracking-widest text-accent mb-3">// inscrição</div>
              <h3 className="text-2xl md:text-3xl font-bold leading-tight">
                Inscrições pela <span className="text-gradient">Sympla</span>
              </h3>
              <p className="mt-4 text-muted-foreground">
                A inscrição e o pagamento são feitos com segurança pela plataforma Sympla. Clique no botão
                abaixo para garantir sua vaga — você será redirecionado para a página oficial do evento.
              </p>
              <a
                href={SYMPLA_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 inline-flex items-center justify-center gap-2 rounded-full bg-primary text-primary-foreground py-4 px-8 font-semibold hover:opacity-90 transition glow-ring"
              >
                <Rocket className="w-5 h-5" /> Inscrever-se na Sympla
              </a>
              <div className="mt-6 space-y-2 text-xs text-muted-foreground">
                <div className="flex items-center gap-2"><ShieldCheck className="w-4 h-4 text-accent" /> Pagamento seguro processado pela Sympla</div>
                <div className="flex items-center gap-2"><CreditCard className="w-4 h-4 text-accent" /> Cartão (12x sem juros), Pix e boleto</div>
              </div>
              <p className="mt-6 text-xs text-muted-foreground">
                Ao se inscrever, você concorda com nossos Termos e Política de Privacidade.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
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
            <li><a href="#precos" className="hover:text-foreground">Investimento</a></li>
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
