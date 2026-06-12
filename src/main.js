import './style.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import {
  createIcons,
  MapPin,
  Bed,
  Maximize,
  Car,
  Phone,
  Mail,
  Award,
  Check,
  ShieldCheck,
  TrendingUp,
  Users,
  Calendar,
  Camera,
  ArrowRight,
  ArrowDown
} from 'lucide';

// Import images
import johnyImg from './assets/johny_hero.png';
import johnyHeroMobileImg from './assets/johny_hero_mobile.png';
import johnyAboutImg from './assets/johny.jpg';
import prop1Img from './assets/prop1.png';
import prop2Img from './assets/prop2.png';
import prop3Img from './assets/prop3.png';
import prop4Img from './assets/prop4.png';
import p1f from './assets/perfil-1f.jpg';
import p1m from './assets/perfil-1m.jpg';
import p2f from './assets/perfil-2f.jpg';
import p2m from './assets/perfil-2m.jpg';
import p3f from './assets/perfil-3f.jpg';
import p3m from './assets/perfil-3m.jpg';
import p4f from './assets/perfil-4f.jpg';
import p4m from './assets/perfil-4m.jpg';

// Testimonials Groups HTML
const testimonialGroup1Html = `
          <!-- Card 1 -->
          <div class="testimonial-card-marquee">
            <p class="testimonial-quote-marquee">"Assessoria impecável! Vendi minha cobertura rapidamente com o marketing do Johny."</p>
            <div class="testimonial-author-marquee">
              <div class="testimonial-avatar">
                <img src="${p1m}" alt="Ricardo M. Silveira" />
              </div>
              <div class="testimonial-author-info">
                <span class="testimonial-author-name">Ricardo M. Silveira</span>
                <span class="testimonial-author-role">Investidor</span>
              </div>
            </div>
          </div>
          <!-- Card 2 -->
          <div class="testimonial-card-marquee">
            <p class="testimonial-quote-marquee">"Segurança jurídica total. Johny nos guiou com maestria em cada detalhe."</p>
            <div class="testimonial-author-marquee">
              <div class="testimonial-avatar">
                <img src="${p1f}" alt="Dra. Heloísa Vasconcellos" />
              </div>
              <div class="testimonial-author-info">
                <span class="testimonial-author-name">Dra. Heloísa Vasconcellos</span>
                <span class="testimonial-author-role">Médica</span>
              </div>
            </div>
          </div>
          <!-- Card 3 -->
          <div class="testimonial-card-marquee">
            <p class="testimonial-quote-marquee">"Atendimento excelente. Encontramos nosso apto de frente para o mar facilmente."</p>
            <div class="testimonial-author-marquee">
              <div class="testimonial-avatar">
                <img src="${p2f}" alt="Patrícia Lima" />
              </div>
              <div class="testimonial-author-info">
                <span class="testimonial-author-name">Patrícia Lima</span>
                <span class="testimonial-author-role">Moradora</span>
              </div>
            </div>
          </div>
          <!-- Card 4 -->
          <div class="testimonial-card-marquee">
            <p class="testimonial-quote-marquee">"Conhecimento de mercado excepcional. O investimento valorizou muito rápido."</p>
            <div class="testimonial-author-marquee">
              <div class="testimonial-avatar">
                <img src="${p2m}" alt="Marcus Rocha" />
              </div>
              <div class="testimonial-author-info">
                <span class="testimonial-author-name">Marcus Rocha</span>
                <span class="testimonial-author-role">Diretor de Investimentos</span>
              </div>
            </div>
          </div>
`;

const testimonialGroup2Html = `
          <!-- Card 5 -->
          <div class="testimonial-card-marquee">
            <p class="testimonial-quote-marquee">"Parceria de sucesso! Agilidade impressionante em conectar nossa construtora a clientes de alto padrão."</p>
            <div class="testimonial-author-marquee">
              <div class="testimonial-avatar">
                <img src="${p3f}" alt="Mariana Costa" />
              </div>
              <div class="testimonial-author-info">
                <span class="testimonial-author-name">Mariana Costa</span>
                <span class="testimonial-author-role">Construtora</span>
              </div>
            </div>
          </div>
          <!-- Card 6 -->
          <div class="testimonial-card-marquee">
            <p class="testimonial-quote-marquee">"Como advogado, prezo pela segurança jurídica. A condução do Johny em transações complexas é exemplar."</p>
            <div class="testimonial-author-marquee">
              <div class="testimonial-avatar">
                <img src="${p3m}" alt="Rodrigo Lima" />
              </div>
              <div class="testimonial-author-info">
                <span class="testimonial-author-name">Rodrigo Lima</span>
                <span class="testimonial-author-role">Advogado</span>
              </div>
            </div>
          </div>
          <!-- Card 7 -->
          <div class="testimonial-card-marquee">
            <p class="testimonial-quote-marquee">"Atendimento exclusivo, discrição total e curadoria impecável de imóveis. Poupou muito nosso tempo."</p>
            <div class="testimonial-author-marquee">
              <div class="testimonial-avatar">
                <img src="${p4f}" alt="Larissa Souza" />
              </div>
              <div class="testimonial-author-info">
                <span class="testimonial-author-name">Larissa Souza</span>
                <span class="testimonial-author-role">Empresária</span>
              </div>
            </div>
          </div>
          <!-- Card 8 -->
          <div class="testimonial-card-marquee">
            <p class="testimonial-quote-marquee">"Buscávamos uma cobertura linear e o Johny nos apresentou opções fantásticas fora do mercado."</p>
            <div class="testimonial-author-marquee">
              <div class="testimonial-avatar">
                <img src="${p4m}" alt="Roberto Junior" />
              </div>
              <div class="testimonial-author-info">
                <span class="testimonial-author-name">Roberto Junior</span>
                <span class="testimonial-author-role">Empresário</span>
              </div>
            </div>
          </div>
`;

// Setup HTML Skeleton
document.querySelector('#app').innerHTML = `
  <!-- Hero Section (No Header) -->
  <section class="min-h-screen flex items-center pt-28 pb-28 bg-black relative overflow-hidden hero-section" id="home">
    <!-- Background Watermarks -->
    <div class="watermark-vertical wm-left">JOHNY</div>
    <div class="watermark-vertical wm-right">LUXO</div>
 
    <picture>
      <source media="(max-width: 992px)" srcset="${johnyHeroMobileImg}" />
      <img src="${johnyImg}" alt="Johny Corretor" class="absolute top-0 left-0 w-full h-full object-cover object-right z-1 pointer-events-none max-lg:object-center max-lg:opacity-65" />
    </picture>
    
    <div class="container mx-auto px-6 relative z-[3] w-full">
      <div class="max-w-[600px] relative max-lg:mx-auto max-lg:text-center max-lg:max-w-[500px]">
        <!-- Logo inside Hero content flow to prevent misalignment -->
        <div class="flex items-center justify-between mb-1.5 max-w-[600px] max-lg:justify-center max-lg:flex-col max-lg:gap-3 max-lg:mx-auto max-lg:mb-6">
          <div class="flex items-center">
            <svg class="w-21 h-21 filter drop-shadow-[0_0_4px_var(--color-gold-glow)]" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M25 35L38 48L50 28L62 48L75 35L70 65H30L25 35Z" fill="url(#gold-gradient-hero)" />
              <rect x="47" y="55" width="6" height="25" fill="url(#gold-gradient-hero)" />
              <path d="M53 70H60V74H53V70ZM53 76H60V80H53V76Z" fill="url(#gold-gradient-hero)" />
              <defs>
                <linearGradient id="gold-gradient-hero" x1="25" y1="28" x2="75" y2="80" gradientUnits="userSpaceOnUse">
                  <stop offset="0%" stop-color="#dfba5d" />
                  <stop offset="100%" stop-color="#8f6c1e" />
                </linearGradient>
              </defs>
            </svg>
            <div class="flex flex-col text-left max-lg:items-center max-lg:text-center">
              <span class="font-sans font-extrabold text-lg tracking-[0.05em] text-white leading-tight">JOHNY CORRETOR</span>
              <span class="font-sans text-[9px] tracking-[0.25em] text-gold-primary font-semibold mt-0.5">MERCADO DE LUXO</span>
            </div>
          </div>
          <span class="text-[11px] text-gold-primary border border-border-gold py-1 px-2.5 rounded-full font-bold tracking-[0.05em] max-sm:hidden">CRECI 249849-F</span>
        </div>
 
        <div data-aos="fade-down" data-aos-duration="400" class="inline-flex items-center gap-2 bg-gold-primary/10 border border-border-gold py-1.5 px-4 rounded-full text-[11px] font-bold text-gold-primary tracking-[0.15em] mb-6 max-lg:mx-auto max-lg:mb-5">
          <i data-lucide="award" class="w-3.5 h-3.5 text-gold-primary"></i> MINHA CURADORIA DE LUXO Nº 1 DE PRAIA GRANDE
        </div>
        <h1 data-aos="fade-up" data-aos-delay="100" class="text-[38px] lg:text-[56px] font-extrabold leading-none tracking-tight mb-5 text-white">
          TRANSFORME SEU SUCESSO EM <span class="text-gold-primary">PATRIMÔNIO DE ALTO PADRÃO</span>
        </h1>
        <p data-aos="fade-up" data-aos-delay="200" class="text-base mb-7.5 max-w-[580px] font-light text-slate-300 max-lg:mx-auto">
          Acesso exclusivo a coberturas lineares, penthouses e mansões off-market no Canto do Forte. Atendimento boutique com assessoria jurídica completa para investidores exigentes.
        </p>
        
        <!-- Lead Capture Form (Direct flow style, matching the reference image) -->
        <form id="hero-lead-form" class="flex flex-col gap-3 mt-7.5 w-full">
          <div data-aos="fade-up" data-aos-delay="300" class="mb-0">
            <input type="text" id="name" class="w-full bg-bg-input border border-white/10 rounded-xl py-4 px-5 text-white font-sans text-sm font-medium transition-all duration-150 placeholder-[#888] focus:outline-none focus:border-gold-primary focus:bg-black focus:shadow-[0_0_10px_rgba(204,164,59,0.15)]" placeholder="Nome Completo" required />
          </div>
          <div data-aos="fade-up" data-aos-delay="350" class="mb-0">
            <input type="tel" id="whatsapp" class="w-full bg-bg-input border border-white/10 rounded-xl py-4 px-5 text-white font-sans text-sm font-medium transition-all duration-150 placeholder-[#888] focus:outline-none focus:border-gold-primary focus:bg-black focus:shadow-[0_0_10px_rgba(204,164,59,0.15)]" placeholder="(XX) XXXXX-XXXX" maxlength="15" pattern="\\(\\d{2}\\) \\d{5}-\\d{4}" title="Por favor, insira o WhatsApp no formato (XX) XXXXX-XXXX" required />
          </div>
          <button data-aos="fade-up" data-aos-delay="400" type="submit" class="w-full p-[18px] text-sm font-extrabold tracking-[0.08em] uppercase rounded-full bg-gold-primary text-black flex items-center justify-center gap-2 cursor-pointer transition-all duration-300 border-none shadow-[0_4px_15px_rgba(204,164,59,0.25)] hover:bg-gold-light hover:-translate-y-0.5 hover:shadow-[0_0_40px_rgba(204,164,59,0.3)]">
            AGENDAR MINHA CONSULTORIA EXCLUSIVA <i data-lucide="arrow-right" class="w-4 h-4"></i>
          </button>
        </form>
  
        <!-- Form Footer Badges -->
        <div data-aos="fade-up" data-aos-delay="450" class="flex gap-6 mt-5 max-lg:justify-center max-lg:items-center max-sm:flex-col max-sm:gap-2.5">
          <div class="flex items-center gap-2 text-[11px] text-slate-300 font-bold tracking-[0.05em]">
            <i data-lucide="check" class="w-3.5 h-3.5 text-gold-primary"></i> ATENDIMENTO PERSONALIZADO
          </div>
          <div class="flex items-center gap-2 text-[11px] text-slate-300 font-bold tracking-[0.05em]">
            <i data-lucide="shield-check" class="w-3.5 h-3.5 text-gold-primary"></i> CONSULTORIA 100% EXCLUSIVA
          </div>
        </div>
      </div>
    </div>
 
    <!-- Down Scroll Arrow -->
    <div class="absolute bottom-7.5 left-1/2 -translate-x-1/2 z-10">
      <a href="#properties" class="w-[50px] h-[50px] rounded-full bg-gold-primary text-black flex items-center justify-center shadow-[0_0_15px_rgba(204,164,59,0.4)] animate-bounce" aria-label="Role para baixo">
        <i data-lucide="arrow-down" class="w-[22px] h-[22px]"></i>
      </a>
    </div>
  </section>
 
  <!-- Marquee Ribbons Divider (Elemento do Anexo) -->
  <div class="ticker-ribbons-wrapper">
    <!-- Faixa de Fundo (Blurred & Crossing) -->
    <div class="ticker-ribbon ribbon-bg">
      <div class="ticker-track track-right">
        <div class="ticker-group">
          <span>PRIVACIDADE & CONFIDENCIALIDADE</span> <span class="gold-diamond">♦</span>
          <span>SEGURANÇA JURÍDICA</span> <span class="gold-diamond">♦</span>
          <span>INVESTIMENTOS SÓLIDOS</span> <span class="gold-diamond">♦</span>
          <span>CURADORIA DE ALTO PADRÃO</span> <span class="gold-diamond">♦</span>
        </div>
        <div class="ticker-group">
          <span>PRIVACIDADE & CONFIDENCIALIDADE</span> <span class="gold-diamond">♦</span>
          <span>SEGURANÇA JURÍDICA</span> <span class="gold-diamond">♦</span>
          <span>INVESTIMENTOS SÓLIDOS</span> <span class="gold-diamond">♦</span>
          <span>CURADORIA DE ALTO PADRÃO</span> <span class="gold-diamond">♦</span>
        </div>
        <div class="ticker-group">
          <span>PRIVACIDADE & CONFIDENCIALIDADE</span> <span class="gold-diamond">♦</span>
          <span>SEGURANÇA JURÍDICA</span> <span class="gold-diamond">♦</span>
          <span>INVESTIMENTOS SÓLIDOS</span> <span class="gold-diamond">♦</span>
          <span>CURADORIA DE ALTO PADRÃO</span> <span class="gold-diamond">♦</span>
        </div>
        <!-- Duplicados para transição infinita e sem cortes -->
        <div class="ticker-group" aria-hidden="true">
          <span>PRIVACIDADE & CONFIDENCIALIDADE</span> <span class="gold-diamond">♦</span>
          <span>SEGURANÇA JURÍDICA</span> <span class="gold-diamond">♦</span>
          <span>INVESTIMENTOS SÓLIDOS</span> <span class="gold-diamond">♦</span>
          <span>CURADORIA DE ALTO PADRÃO</span> <span class="gold-diamond">♦</span>
        </div>
        <div class="ticker-group" aria-hidden="true">
          <span>PRIVACIDADE & CONFIDENCIALIDADE</span> <span class="gold-diamond">♦</span>
          <span>SEGURANÇA JURÍDICA</span> <span class="gold-diamond">♦</span>
          <span>INVESTIMENTOS SÓLIDOS</span> <span class="gold-diamond">♦</span>
          <span>CURADORIA DE ALTO PADRÃO</span> <span class="gold-diamond">♦</span>
        </div>
        <div class="ticker-group" aria-hidden="true">
          <span>PRIVACIDADE & CONFIDENCIALIDADE</span> <span class="gold-diamond">♦</span>
          <span>SEGURANÇA JURÍDICA</span> <span class="gold-diamond">♦</span>
          <span>INVESTIMENTOS SÓLIDOS</span> <span class="gold-diamond">♦</span>
          <span>CURADORIA DE ALTO PADRÃO</span> <span class="gold-diamond">♦</span>
        </div>
      </div>
    </div>
 
    <!-- Faixa de Primeiro Plano (Sharp) -->
    <div class="ticker-ribbon ribbon-fg">
      <div class="ticker-track track-left">
        <div class="ticker-group">
          <span>COBERTURAS EXCLUSIVAS</span> <span class="gold-diamond">♦</span>
          <span>CANTO DO FORTE</span> <span class="gold-diamond">♦</span>
          <span>PENTHOUSES OFF-MARKET</span> <span class="gold-diamond">♦</span>
          <span>MERCADO DE LUXO</span> <span class="gold-diamond">♦</span>
          <span>ATENDIMENTO BOUTIQUE</span> <span class="gold-diamond">♦</span>
        </div>
        <div class="ticker-group">
          <span>COBERTURAS EXCLUSIVAS</span> <span class="gold-diamond">♦</span>
          <span>CANTO DO FORTE</span> <span class="gold-diamond">♦</span>
          <span>PENTHOUSES OFF-MARKET</span> <span class="gold-diamond">♦</span>
          <span>MERCADO DE LUXO</span> <span class="gold-diamond">♦</span>
          <span>ATENDIMENTO BOUTIQUE</span> <span class="gold-diamond">♦</span>
        </div>
        <div class="ticker-group">
          <span>COBERTURAS EXCLUSIVAS</span> <span class="gold-diamond">♦</span>
          <span>CANTO DO FORTE</span> <span class="gold-diamond">♦</span>
          <span>PENTHOUSES OFF-MARKET</span> <span class="gold-diamond">♦</span>
          <span>MERCADO DE LUXO</span> <span class="gold-diamond">♦</span>
          <span>ATENDIMENTO BOUTIQUE</span> <span class="gold-diamond">♦</span>
        </div>
        <!-- Duplicados para transição infinita e sem cortes -->
        <div class="ticker-group" aria-hidden="true">
          <span>COBERTURAS EXCLUSIVAS</span> <span class="gold-diamond">♦</span>
          <span>CANTO DO FORTE</span> <span class="gold-diamond">♦</span>
          <span>PENTHOUSES OFF-MARKET</span> <span class="gold-diamond">♦</span>
          <span>MERCADO DE LUXO</span> <span class="gold-diamond">♦</span>
          <span>ATENDIMENTO BOUTIQUE</span> <span class="gold-diamond">♦</span>
        </div>
        <div class="ticker-group" aria-hidden="true">
          <span>COBERTURAS EXCLUSIVAS</span> <span class="gold-diamond">♦</span>
          <span>CANTO DO FORTE</span> <span class="gold-diamond">♦</span>
          <span>PENTHOUSES OFF-MARKET</span> <span class="gold-diamond">♦</span>
          <span>MERCADO DE LUXO</span> <span class="gold-diamond">♦</span>
          <span>ATENDIMENTO BOUTIQUE</span> <span class="gold-diamond">♦</span>
        </div>
        <div class="ticker-group" aria-hidden="true">
          <span>COBERTURAS EXCLUSIVAS</span> <span class="gold-diamond">♦</span>
          <span>CANTO DO FORTE</span> <span class="gold-diamond">♦</span>
          <span>PENTHOUSES OFF-MARKET</span> <span class="gold-diamond">♦</span>
          <span>MERCADO DE LUXO</span> <span class="gold-diamond">♦</span>
          <span>ATENDIMENTO BOUTIQUE</span> <span class="gold-diamond">♦</span>
        </div>
      </div>
    </div>
  </div>
 
  <!-- Featured Properties Section (Integrado com Mock API do Instagram) -->
  <section class="py-28 relative bg-black" id="properties">
    <!-- Background Watermark -->
    <div class="watermark-vertical wm-left" style="top: auto; bottom: 5%; font-size: clamp(60px, 8vw, 110px); color: rgba(212,175,55,0.02);">INSTAGRAM</div>
 
    <div class="container mx-auto px-6">
      <div data-aos="fade-up" class="text-center max-w-[750px] mx-auto mb-[70px] z-10 relative">
        <span class="text-gold-primary text-[13px] font-bold tracking-[0.25em] uppercase mb-4 block">Minha Coleção Privada</span>
        <h2 class="text-[32px] md:text-[44px] font-extrabold mb-5 text-white tracking-tight leading-none">MEUS DESTAQUES NO INSTAGRAM</h2>
        <p class="text-base text-slate-300 font-light">Acompanhe minhas visitas guiadas, bastidores e lançamentos de altíssimo padrão em tempo real no meu feed.</p>
      </div>

      <div class="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-7 relative z-10">
        <!-- Insta Post 1 -->
        <a data-aos="fade-up" data-aos-delay="0" href="https://www.instagram.com/corretorjohny/" target="_blank" class="flex flex-col rounded-2xl overflow-hidden text-white insta-card group">
          <div class="flex items-center p-2.5 md:p-3 border-b border-white/5">
            <div class="w-7 h-7 md:w-8 md:h-8 rounded-full overflow-hidden border border-gold-primary shrink-0">
              <img src="${johnyAboutImg}" alt="Johny" />
            </div>
            <div class="flex flex-col ml-2 md:ml-3 grow text-left min-w-0">
              <span class="text-xs md:text-[13px] font-bold text-white leading-none truncate">corretorjohny</span>
              <span class="text-[9px] md:text-[10px] text-gold-primary leading-none mt-0.5 truncate">Canto do Forte, PG</span>
            </div>
            <span class="text-[#666] text-xs cursor-pointer ml-auto hidden sm:inline">&bull;&bull;&bull;</span>
          </div>
          <div class="relative aspect-square overflow-hidden bg-black">
            <img src="${prop1Img}" alt="Splendido Residences" class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-104" />
            <div class="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-150 z-5">
              <span class="text-[10px] md:text-xs font-extrabold text-gold-primary tracking-[0.05em] flex items-center gap-1 md:gap-1.5 border border-gold-primary py-1.5 px-3 md:py-2 md:px-4 bg-black/80"><i data-lucide="camera" class="w-3.5 h-3.5"></i> VER NO INSTA</span>
            </div>
          </div>
          <div class="p-3 md:p-4 pb-0.5 text-left">
            <span class="text-[11px] md:text-xs font-bold text-white">❤️ 1.204 curtidas</span>
          </div>
          <div class="p-3 md:p-4 pt-0.5 pb-3 text-left text-[11px] md:text-xs leading-relaxed">
            <p class="text-slate-300 line-clamp-2 md:line-clamp-3"><strong>corretorjohny</strong> Exclusividade de frente para o mar no Canto do Forte. Cobertura linear com piscina privativa e acabamento impecável. Agende sua consultoria comigo no link da bio! #PraiaGrande #AltoPadrao</p>
            <span class="block text-[8px] md:text-[9px] text-[#666] mt-2 tracking-[0.05em]">HÁ 2 DIAS</span>
          </div>
        </a>

        <!-- Insta Post 2 -->
        <a data-aos="fade-up" data-aos-delay="100" href="https://www.instagram.com/corretorjohny/" target="_blank" class="flex flex-col rounded-2xl overflow-hidden text-white insta-card group">
          <div class="flex items-center p-2.5 md:p-3 border-b border-white/5">
            <div class="w-7 h-7 md:w-8 md:h-8 rounded-full overflow-hidden border border-gold-primary shrink-0">
              <img src="${johnyAboutImg}" alt="Johny" />
            </div>
            <div class="flex flex-col ml-2 md:ml-3 grow text-left min-w-0">
              <span class="text-xs md:text-[13px] font-bold text-white leading-none truncate">corretorjohny</span>
              <span class="text-[9px] md:text-[10px] text-gold-primary leading-none mt-0.5 truncate">Canto do Forte, PG</span>
            </div>
            <span class="text-[#666] text-xs cursor-pointer ml-auto hidden sm:inline">&bull;&bull;&bull;</span>
          </div>
          <div class="relative aspect-square overflow-hidden bg-black">
            <img src="${prop2Img}" alt="Lumière Penthouse" class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-104" />
            <div class="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-150 z-5">
              <span class="text-[10px] md:text-xs font-extrabold text-gold-primary tracking-[0.05em] flex items-center gap-1 md:gap-1.5 border border-gold-primary py-1.5 px-3 md:py-2 md:px-4 bg-black/80"><i data-lucide="camera" class="w-3.5 h-3.5"></i> VER NO INSTA</span>
            </div>
          </div>
          <div class="p-3 md:p-4 pb-0.5 text-left">
            <span class="text-[11px] md:text-xs font-bold text-white">❤️ 874 curtidas</span>
          </div>
          <div class="p-3 md:p-4 pt-0.5 pb-3 text-left text-[11px] md:text-xs leading-relaxed">
            <p class="text-slate-300 line-clamp-2 md:line-clamp-3"><strong>corretorjohny</strong> Sofisticação e a melhor vista do litoral paulista. Mais um empreendimento de alto padrão entregue com minha assessoria jurídica completa e personalizada. #CantoDoForte #Luxo</p>
            <span class="block text-[8px] md:text-[9px] text-[#666] mt-2 tracking-[0.05em]">HÁ 3 DIAS</span>
          </div>
        </a>

        <!-- Insta Post 3 -->
        <a data-aos="fade-up" data-aos-delay="200" href="https://www.instagram.com/corretorjohny/" target="_blank" class="flex flex-col rounded-2xl overflow-hidden text-white insta-card group">
          <div class="flex items-center p-2.5 md:p-3 border-b border-white/5">
            <div class="w-7 h-7 md:w-8 md:h-8 rounded-full overflow-hidden border border-gold-primary shrink-0">
              <img src="${johnyAboutImg}" alt="Johny" />
            </div>
            <div class="flex flex-col ml-2 md:ml-3 grow text-left min-w-0">
              <span class="text-xs md:text-[13px] font-bold text-white leading-none truncate">corretorjohny</span>
              <span class="text-[9px] md:text-[10px] text-gold-primary leading-none mt-0.5 truncate">Guilhermina, PG</span>
            </div>
            <span class="text-[#666] text-xs cursor-pointer ml-auto hidden sm:inline">&bull;&bull;&bull;</span>
          </div>
          <div class="relative aspect-square overflow-hidden bg-black">
            <img src="${prop3Img}" alt="Infinity Sea Concept" class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-104" />
            <div class="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-150 z-5">
              <span class="text-[10px] md:text-xs font-extrabold text-gold-primary tracking-[0.05em] flex items-center gap-1 md:gap-1.5 border border-gold-primary py-1.5 px-3 md:py-2 md:px-4 bg-black/80"><i data-lucide="camera" class="w-3.5 h-3.5"></i> VER NO INSTA</span>
            </div>
          </div>
          <div class="p-3 md:p-4 pb-0.5 text-left">
            <span class="text-[11px] md:text-xs font-bold text-white">❤️ 956 curtidas</span>
          </div>
          <div class="p-3 md:p-4 pt-0.5 pb-3 text-left text-[11px] md:text-xs leading-relaxed">
            <p class="text-slate-300 line-clamp-2 md:line-clamp-3"><strong>corretorjohny</strong> Seu novo estilo de vida começa aqui. Apartamento pronto para morar na Guilhermina com área de lazer completa e segurança total para sua família. #Guilhermina</p>
            <span class="block text-[8px] md:text-[9px] text-[#666] mt-2 tracking-[0.05em]">HÁ 5 DIAS</span>
          </div>
        </a>

        <!-- Insta Post 4 -->
        <a data-aos="fade-up" data-aos-delay="300" href="https://www.instagram.com/corretorjohny/" target="_blank" class="flex flex-col rounded-2xl overflow-hidden text-white insta-card group">
          <div class="flex items-center p-2.5 md:p-3 border-b border-white/5">
            <div class="w-7 h-7 md:w-8 md:h-8 rounded-full overflow-hidden border border-gold-primary shrink-0">
              <img src="${johnyAboutImg}" alt="Johny" />
            </div>
            <div class="flex flex-col ml-2 md:ml-3 grow text-left min-w-0">
              <span class="text-xs md:text-[13px] font-bold text-white leading-none truncate">corretorjohny</span>
              <span class="text-[9px] md:text-[10px] text-gold-primary leading-none mt-0.5 truncate">Canto do Forte, PG</span>
            </div>
            <span class="text-[#666] text-xs cursor-pointer ml-auto hidden sm:inline">&bull;&bull;&bull;</span>
          </div>
          <div class="relative aspect-square overflow-hidden bg-black">
            <img src="${prop4Img}" alt="Golden Gate Mansion" class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-104" />
            <div class="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-150 z-5">
              <span class="text-[10px] md:text-xs font-extrabold text-gold-primary tracking-[0.05em] flex items-center gap-1 md:gap-1.5 border border-gold-primary py-1.5 px-3 md:py-2 md:px-4 bg-black/80"><i data-lucide="camera" class="w-3.5 h-3.5"></i> VER NO INSTA</span>
            </div>
          </div>
          <div class="p-3 md:p-4 pb-0.5 text-left">
            <span class="text-[11px] md:text-xs font-bold text-white">❤️ 1.420 curtidas</span>
          </div>
          <div class="p-3 md:p-4 pt-0.5 pb-3 text-left text-[11px] md:text-xs leading-relaxed">
            <p class="text-slate-300 line-clamp-2 md:line-clamp-3"><strong>corretorjohny</strong> Golden Gate Mansion: a definição de luxo e sofisticação em Praia Grande. Agende uma consultoria privativa comigo. #LuxuryHome #Broker</p>
            <span class="block text-[8px] md:text-[9px] text-[#666] mt-2 tracking-[0.05em]">HÁ 1 SEMANA</span>
          </div>
        </a>
      </div>

      <div data-aos="fade-up" data-aos-delay="200" class="text-center mt-[50px]">
        <a href="https://www.instagram.com/corretorjohny/" target="_blank" class="relative overflow-hidden inline-flex items-center justify-center py-4 px-9 font-black text-xs tracking-[0.12em] uppercase rounded-full transition-all duration-300 gap-2.5 bg-gradient-to-r from-gold-dark via-gold-primary to-gold-light text-black shadow-[0_4px_20px_rgba(204,164,59,0.4)] hover:-translate-y-1 hover:shadow-[0_8px_30px_rgba(204,164,59,0.6)] group">
          <!-- Shimmer reflection effect -->
          <span class="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:animate-shimmer"></span>
          <i data-lucide="camera" class="w-4 h-4 shrink-0 transition-transform duration-300 group-hover:scale-110"></i>
          <span>ME SEGUIR NO INSTAGRAM @CORRETORJOHNY</span>
        </a>
      </div>
    </div>
  </section>
 
  <!-- Authority Section (Yellow Color Blocked - "O Que Você Vai Aprender" style) -->
  <section class="py-28 relative bg-gradient-to-br from-gold-light via-gold-primary to-gold-dark text-[#1c1912] z-5 border-y border-[rgba(0,0,0,0.05)]" id="why-johny">
    <div class="container mx-auto px-6 relative z-10 max-w-[1280px]">
      <div data-aos="fade-up" class="text-center max-w-[750px] mx-auto mb-[70px] z-10 relative">
        <span class="text-[#1c1912] opacity-80 text-[13px] font-extrabold tracking-[0.25em] uppercase mb-4 block">Liderança & Confiança</span>
        <h2 class="text-[30px] md:text-[44px] font-extrabold mb-5 text-black tracking-tight leading-none">POR QUE CONFIAR SEU PATRIMÔNIO A QUEM LIDERA O MERCADO DE LUXO?</h2>
        <p class="text-base text-[#2c261b] font-medium">Aliando minha curadoria de propriedades selecionadas à minha blindagem jurídica, asseguro sua tranquilidade e liquidez patrimonial.</p>
      </div>
      
      <!-- Swiper Container -->
      <div class="swiper swiper-authority w-full overflow-visible">
        <div class="authority-grid swiper-wrapper max-lg:flex max-lg:gap-0 lg:grid lg:grid-cols-4 lg:gap-6 lg:items-stretch">
          <!-- Card 1: Wide (Marketing Digital Dominante with Authority Badge) -->
          <div data-aos="fade-up" data-aos-delay="0" class="swiper-slide bg-bg-card text-white p-6 md:p-7.5 rounded-2xl flex flex-col justify-start shadow-[0_10px_30px_rgba(0,0,0,0.15)] border border-border-gold relative overflow-hidden lg:col-span-2 lg:flex-col lg:items-start lg:justify-start lg:gap-5 max-lg:w-[85%] bento-card bento-card-wide-1">
            <div class="flex justify-start items-center">
              <div class="w-[115px] h-[115px] rounded-full bg-gradient-to-br from-gold-light via-gold-primary to-gold-dark flex items-center justify-center p-[3px] shadow-[0_0_15px_rgba(204,164,59,0.25)]">
                <div class="w-full h-full rounded-full bg-black flex flex-col items-center justify-center p-2 text-center text-gold-primary">
                  <svg class="w-[60px] h-3 mb-1 text-gold-primary" viewBox="0 0 100 24" fill="currentColor">
                    <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2ZM32 2L35.09 8.26L42 9.27L37 14.14L38.18 21.02L32 17.77L25.82 21.02L27 14.14L22 9.27L28.91 8.26L32 2ZM50 2L53.09 8.26L60 9.27L55 14.14L56.18 21.02L50 17.77L43.82 21.02L45 14.14L40 9.27L46.91 8.26L50 2ZM68 2L71.09 8.26L78 9.27L73 14.14L74.18 21.02L68 17.77L61.82 21.02L63 14.14L58 9.27L64.91 8.26L68 2ZM86 2L89.09 8.26L96 9.27L91 14.14L92.18 21.02L86 17.77L79.82 21.02L81 14.14L76 9.27L82.91 8.26L86 2Z"/>
                  </svg>
                  <div class="font-sans text-[7px] font-extrabold tracking-[0.08em] text-white">ENTRE OS MAIORES</div>
                  <div class="font-sans text-xs font-black tracking-wider text-gold-primary my-0.5">DO DIGITAL</div>
                  <div class="font-sans text-[7px] tracking-[0.15em] font-semibold text-white/60">PRAIA GRANDE</div>
                </div>
              </div>
            </div>
            <h3 class="text-gold-primary font-sans font-extrabold text-xl leading-snug mb-2 tracking-wide text-left">MARKETING DE IMPACTO & MÁXIMA LIQUIDEZ</h3>
            <p class="text-sm text-white leading-relaxed font-normal text-left">Com a maior vitrine digital de luxo da Praia Grande, conecto proprietários e compradores qualificados em tempo recorde.</p>
          </div>
 
          <!-- Card 2: Highlight (Confidencialidade Absoluta) -->
          <div data-aos="fade-up" data-aos-delay="100" class="swiper-slide bg-bg-card text-white p-6 md:p-7.5 rounded-2xl flex flex-col justify-start shadow-[0_10px_30px_rgba(0,0,0,0.15)] border border-border-gold relative overflow-hidden lg:col-span-1 max-lg:w-[85%] bento-card bento-card-highlight">
            <div class="w-12 h-12 rounded-xl bg-gold-primary/15 border border-gold-primary/30 text-gold-primary flex items-center justify-center mb-5 shrink-0">
              <i data-lucide="shield-check" class="w-5 h-5"></i>
            </div>
            <h4 class="text-base text-gold-primary font-sans font-extrabold leading-snug mb-2 tracking-wide text-left">DISCRIÇÃO E SIGILO OFF-MARKET</h4>
            <p class="text-[13.5px] text-white leading-relaxed font-normal text-left">Garanto confidencialidade absoluta para transações de alto escalão, protegendo seu patrimônio e privacidade em cada etapa.</p>
          </div>
 
          <!-- Card 3: Narrow (Segurança Jurídica) -->
          <div data-aos="fade-up" data-aos-delay="200" class="swiper-slide bg-bg-card text-white p-6 md:p-7.5 rounded-2xl flex flex-col justify-start shadow-[0_10px_30px_rgba(0,0,0,0.15)] border border-border-gold relative overflow-hidden lg:col-span-1 max-lg:w-[85%] bento-card bento-card-narrow-1">
            <div class="w-12 h-12 rounded-xl bg-gold-primary/10 border border-border-gold text-gold-primary flex items-center justify-center mb-5 shrink-0">
              <i data-lucide="check" class="w-5 h-5"></i>
            </div>
            <h4 class="text-base text-gold-primary font-sans font-extrabold leading-snug mb-2 tracking-wide text-left">MINHA BLINDAGEM JURÍDICA PERSONALIZADA</h4>
            <p class="text-[13.5px] text-white leading-relaxed font-normal text-left">Protejo suas transações com minha própria auditoria jurídica e rigoroso compliance, assegurando sua total tranquilidade patrimonial.</p>
          </div>
 
          <!-- Card 4: Narrow (Rentabilidade) -->
          <div data-aos="fade-up" data-aos-delay="300" class="swiper-slide bg-bg-card text-white p-6 md:p-7.5 rounded-2xl flex flex-col justify-start shadow-[0_10px_30px_rgba(0,0,0,0.15)] border border-border-gold relative overflow-hidden lg:col-span-1 max-lg:w-[85%] bento-card bento-card-narrow-2">
            <div class="w-12 h-12 rounded-xl bg-gold-primary/10 border border-border-gold text-gold-primary flex items-center justify-center mb-5 shrink-0">
              <i data-lucide="trending-up" class="w-5 h-5"></i>
            </div>
            <h4 class="text-base text-gold-primary font-sans font-extrabold leading-snug mb-2 tracking-wide text-left">VALORIZAÇÃO PATRIMONIAL ATIVA</h4>
            <p class="text-[13.5px] text-white leading-relaxed font-normal text-left">Minha curadoria estratégica é focada em liquidez e valorização real no Canto do Forte, transformando metro quadrado em patrimônio sólido.</p>
          </div>
 
          <!-- Card 5: Narrow (Off-Market) -->
          <div data-aos="fade-up" data-aos-delay="400" class="swiper-slide bg-bg-card text-white p-6 md:p-7.5 rounded-2xl flex flex-col justify-start shadow-[0_10px_30px_rgba(0,0,0,0.15)] border border-border-gold relative overflow-hidden lg:col-span-1 max-lg:w-[85%] bento-card bento-card-narrow-3">
            <div class="w-12 h-12 rounded-xl bg-gold-primary/10 border border-border-gold text-gold-primary flex items-center justify-center mb-5 shrink-0">
              <i data-lucide="award" class="w-5 h-5"></i>
            </div>
            <h4 class="text-base text-gold-primary font-sans font-extrabold leading-snug mb-2 tracking-wide text-left">ACESSO ANTECIPADO E OFF-MARKET</h4>
            <p class="text-[13.5px] text-white leading-relaxed font-normal text-left">Te garanto prioridade e acesso exclusivo a coberturas e mansões off-market antes que cheguem aos portais tradicionais.</p>
          </div>
 
          <!-- Card 6: Wide (Atendimento Boutique) -->
          <div data-aos="fade-up" data-aos-delay="500" class="swiper-slide bg-bg-card text-white p-6 md:p-7.5 rounded-2xl flex flex-col justify-start shadow-[0_10px_30px_rgba(0,0,0,0.15)] border border-border-gold relative overflow-hidden lg:col-span-2 lg:flex-col lg:items-start lg:justify-start lg:gap-5 max-lg:w-[85%] bento-card bento-card-wide-2">
            <div class="w-12 h-12 rounded-xl bg-gold-primary/10 border border-border-gold text-gold-primary flex items-center justify-center mb-5 shrink-0">
              <i data-lucide="users" class="w-5 h-5"></i>
            </div>
            <h3 class="text-gold-primary font-sans font-extrabold text-xl leading-snug mb-2 tracking-wide text-left">CURADORIA EXCLUSIVA SOB MEDIDA</h3>
            <p class="text-sm text-white leading-relaxed font-normal text-left">Realizo visitas privadas e faço o mapeamento cirúrgico de imóveis alinhados ao seu estilo de vida, com total discrição.</p>
          </div>
        </div>
        <!-- Paginação (Bullets) -->
        <div class="swiper-pagination swiper-pagination-authority"></div>
      </div>
    </div>
  </section>
 
  <!-- Testimonials Section (Infinite Marquee Loop Edge-to-Edge) -->
  <section class="py-24 relative bg-bg-secondary overflow-hidden testimonials-section" id="testimonials">
    <div class="container mx-auto px-6">
      <div data-aos="fade-up" class="text-center max-w-[750px] mx-auto mb-[70px] z-10 relative">
        <span class="text-gold-primary text-[13px] font-bold tracking-[0.25em] uppercase mb-4 block">Prova Social</span>
        <h2 class="text-[32px] md:text-[44px] font-extrabold mb-5 text-white tracking-tight leading-none">O QUE MEUS CLIENTES DIZEM</h2>
        <p class="text-base text-slate-300 font-light">Experiências reais de quem encontrou o lar dos sonhos or realizou investimentos de alto padrão comigo.</p>
      </div>
    </div>
 
    <!-- Row 1: Slides to Left -->
    <div data-aos="fade-in" data-aos-duration="500" class="marquee-wrapper">
      <div class="marquee-track marquee-left">
        <div class="marquee-group">${testimonialGroup1Html}</div>
        <div class="marquee-group">${testimonialGroup1Html}</div>
        <div class="marquee-group">${testimonialGroup1Html}</div>
        <!-- Duplicados para transição infinita e sem cortes -->
        <div class="marquee-group" aria-hidden="true">${testimonialGroup1Html}</div>
        <div class="marquee-group" aria-hidden="true">${testimonialGroup1Html}</div>
        <div class="marquee-group" aria-hidden="true">${testimonialGroup1Html}</div>
      </div>
    </div>
 
    <!-- Row 2: Slides to Right -->
    <div data-aos="fade-in" data-aos-duration="500" class="marquee-wrapper">
      <div class="marquee-track marquee-right">
        <div class="marquee-group">${testimonialGroup2Html}</div>
        <div class="marquee-group">${testimonialGroup2Html}</div>
        <div class="marquee-group">${testimonialGroup2Html}</div>
        <!-- Duplicados para transição infinita e sem cortes -->
        <div class="marquee-group" aria-hidden="true">${testimonialGroup2Html}</div>
        <div class="marquee-group" aria-hidden="true">${testimonialGroup2Html}</div>
        <div class="marquee-group" aria-hidden="true">${testimonialGroup2Html}</div>
      </div>
    </div>
  </section>
 
  <section class="py-28 relative about-section-bg" id="about">
    <!-- Overlay to ensure text readability -->
    <div class="absolute inset-0 bg-black/60 lg:bg-gradient-to-r lg:from-black/80 lg:via-black/45 lg:to-black/10 z-1"></div>
    <!-- Background Watermark -->
    <div class="watermark-vertical wm-left z-1">JOHNY</div>
 
    <div class="container mx-auto px-6 relative z-2">
      <div class="grid grid-cols-1 lg:grid-cols-[1.05fr_0.95fr] gap-15 items-center">
        <div data-aos="fade-right" class="relative z-2 max-lg:text-center">
          <span class="text-gold-primary text-[13px] font-bold tracking-[0.25em] uppercase mb-4 block">Sobre Mim</span>
          <h2 class="text-[32px] md:text-[40px] font-extrabold mb-6 text-white tracking-tight leading-none">MINHA AUTORIDADE E COMPROMISSO DE ALTO PADRÃO</h2>
          <p class="text-base mb-5 font-light text-slate-300">
            Com presença consolidada e autoridade inquestionável na Praia Grande, sou a referência definitiva em transações imobiliárias de alto padrão. Focado em inovação e alta performance, aplico as melhores estratégias de marketing digital imobiliário para garantir máxima liquidez a você, meu cliente.
          </p>
          <p class="text-base mb-5 font-light text-slate-300">
            Minha atuação é pautada por três pilares inegociáveis: confidencialidade absoluta, precisão jurídica e curadoria cirúrgica de oportunidades, proporcionando a você uma jornada imobiliária fluida, segura e de altíssima rentabilidade.
          </p>
          <div data-aos="fade-up" data-aos-delay="150" class="flex gap-7.5 my-9 border-y border-white/5 py-6 max-lg:justify-center max-sm:flex-col max-sm:gap-6">
            <div class="flex items-center gap-3 text-left">
              <i data-lucide="shield-check" class="w-8 h-8 text-gold-primary shrink-0"></i>
              <div>
                <strong class="text-sm text-white block">Registro Profissional</strong>
                <span class="text-xs text-slate-300">CRECI SP: 249849-F</span>
              </div>
            </div>
            <div class="flex items-center gap-3 text-left">
              <i data-lucide="calendar" class="w-8 h-8 text-gold-primary shrink-0"></i>
              <div>
                <strong class="text-sm text-white block">Atendimento Privado</strong>
                <span class="text-xs text-slate-300">Com Hora Marcada</span>
              </div>
            </div>
          </div>
          <div data-aos="fade-up" data-aos-delay="250" class="flex gap-4 max-sm:flex-col">
            <a href="#contact" class="inline-flex items-center justify-center py-3.5 px-8 font-extrabold text-xs tracking-wider uppercase rounded-full transition-all duration-300 gap-2 bg-gold-primary text-black shadow-[0_4px_15px_rgba(204,164,59,0.3)] hover:bg-gold-light hover:-translate-y-0.5 hover:shadow-[0_0_40px_rgba(204,164,59,0.3)] max-sm:w-full">FALE COMIGO AGORA</a>
            <a href="https://www.instagram.com/corretorjohny/" target="_blank" class="inline-flex items-center justify-center py-3.5 px-8 font-extrabold text-xs tracking-wider uppercase rounded-full transition-all duration-300 gap-2 bg-transparent text-white border-2 border-gold-primary hover:bg-gold-primary hover:text-black hover:-translate-y-0.5 max-sm:w-full">
              <i data-lucide="camera" class="w-4 h-4"></i> ME SEGUIR NO INSTAGRAM
            </a>
          </div>
        </div>
 
        <!-- Right side empty so the background image shows clearly on desktop -->
        <div class="hidden lg:block"></div>
      </div>
    </div>
  </section>
 
  <!-- Contact Form Section -->
  <section class="py-28 relative bg-bg-secondary border-b border-white/5" id="contact">
    <div class="container mx-auto px-6">
      <div class="grid grid-cols-1 lg:grid-cols-[0.95fr_1.05fr] gap-12 max-lg:gap-10">
        <div data-aos="fade-right" class="flex flex-col justify-between max-lg:gap-6">
          <div>
            <span class="text-gold-primary text-[13px] font-bold tracking-[0.25em] uppercase mb-4 block text-left">Contato Direto</span>
            <h2 class="text-[32px] md:text-[40px] font-extrabold mb-4 text-white tracking-tight leading-none text-left">INICIE SUA CONSULTORIA EXCLUSIVA COMIGO</h2>
            <p class="text-base font-light text-slate-300 text-left">Agende uma reunião privada comigo e tenha acesso à seleção de imóveis mais exclusiva da Praia Grande.</p>
          </div>
          
          <div class="flex flex-col gap-4 mt-8">
            <div class="flex items-center gap-4 p-5.5 rounded-2xl contact-info-card">
              <div class="w-11 h-11 rounded-xl bg-gold-primary/10 border border-border-gold text-gold-primary flex items-center justify-center shrink-0"><i data-lucide="phone" class="w-5 h-5"></i></div>
              <div>
                <h4 class="text-xs text-slate-500 uppercase tracking-wider mb-1 font-sans font-bold text-left">Telefone / WhatsApp</h4>
                <p class="text-base text-white font-semibold text-left">(13) 99999-9999</p>
              </div>
            </div>
            <div class="flex items-center gap-4 p-5.5 rounded-2xl contact-info-card">
              <div class="w-11 h-11 rounded-xl bg-gold-primary/10 border border-border-gold text-gold-primary flex items-center justify-center shrink-0"><i data-lucide="camera" class="w-5 h-5"></i></div>
              <div>
                <h4 class="text-xs text-slate-500 uppercase tracking-wider mb-1 font-sans font-bold text-left">Instagram Oficial</h4>
                <p class="text-base text-white font-semibold text-left"><a href="https://www.instagram.com/corretorjohny/" target="_blank" class="hover:text-gold-primary">@corretorjohny</a></p>
              </div>
            </div>
          </div>
        </div>
 
        <div data-aos="fade-left" class="w-full">
          <div class="p-6 md:p-11 bg-[rgba(10,10,10,0.8)] backdrop-blur-xl border border-border-gold rounded-2xl">
            <form id="contact-page-form">
              <div class="mb-4 text-left">
                <label for="c-name" class="block text-[11px] text-gold-primary uppercase tracking-[0.08em] font-bold mb-2">Nome Completo</label>
                <input type="text" id="c-name" class="w-full bg-bg-input border border-white/10 rounded-xl py-4 px-5 text-white font-sans text-sm font-medium transition-all duration-150 placeholder-[#888] focus:outline-none focus:border-gold-primary focus:bg-black focus:shadow-[0_0_10px_rgba(204,164,59,0.15)]" placeholder="SEU NOME COMPLETO" required />
              </div>
              <div class="mb-4 text-left">
                <label for="c-phone" class="block text-[11px] text-gold-primary uppercase tracking-[0.08em] font-bold mb-2">WhatsApp</label>
                <input type="tel" id="c-phone" class="w-full bg-bg-input border border-white/10 rounded-xl py-4 px-5 text-white font-sans text-sm font-medium transition-all duration-150 placeholder-[#888] focus:outline-none focus:border-gold-primary focus:bg-black focus:shadow-[0_0_10px_rgba(204,164,59,0.15)]" placeholder="(12) 34567-8910" maxlength="15" pattern="\\(\\d{2}\\) \\d{5}-\\d{4}" title="Por favor, insira o WhatsApp no formato (XX) XXXXX-XXXX" required />
              </div>
              <div class="mb-4 text-left">
                <label for="c-message" class="block text-[11px] text-gold-primary uppercase tracking-[0.08em] font-bold mb-2">Como posso te ajudar?</label>
                <textarea id="c-message" class="w-full bg-bg-input border border-white/10 rounded-xl py-4 px-5 text-white font-sans text-sm font-medium transition-all duration-150 placeholder-[#888] focus:outline-none focus:border-gold-primary focus:bg-black focus:shadow-[0_0_10px_rgba(204,164,59,0.15)] h-32 resize-none" placeholder="COMO POSSO TE AJUDAR?" required></textarea>
              </div>
              <button type="submit" class="w-full py-4 px-8 text-sm font-extrabold tracking-[0.08em] uppercase rounded-full bg-gold-primary text-black flex items-center justify-center gap-2 cursor-pointer transition-all duration-300 border-none shadow-[0_4px_15px_rgba(204,164,59,0.25)] hover:bg-gold-light hover:-translate-y-0.5 hover:shadow-[0_0_40px_rgba(204,164,59,0.3)]">
                FALAR DIRETAMENTE COMIGO <i data-lucide="arrow-right" class="w-4 h-4"></i>
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </section>
 
  <!-- Footer -->
  <footer class="bg-black pt-16 pb-8 border-t border-white/5">
    <div class="container mx-auto px-6">
      <!-- Centered Logo Block -->
      <div class="flex flex-col items-center justify-center mb-12">
        <div class="flex items-center gap-4">
          <svg class="w-12 h-12 filter drop-shadow-[0_0_4px_var(--color-gold-glow)]" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M25 35L38 48L50 28L62 48L75 35L70 65H30L25 35Z" fill="url(#gold-gradient-footer)" />
            <rect x="47" y="55" width="6" height="25" fill="url(#gold-gradient-footer)" />
            <path d="M53 70H60V74H53V70ZM53 76H60V80H53V76Z" fill="url(#gold-gradient-footer)" />
            <defs>
              <linearGradient id="gold-gradient-footer" x1="25" y1="28" x2="75" y2="80" gradientUnits="userSpaceOnUse">
                <stop offset="0%" stop-color="#dfba5d" />
                <stop offset="100%" stop-color="#8f6c1e" />
              </linearGradient>
            </defs>
          </svg>
          <div class="flex flex-col text-left">
            <span class="font-sans font-extrabold text-xl tracking-[0.05em] text-white leading-tight uppercase">JOHNY CORRETOR</span>
            <span class="font-sans text-[10px] tracking-[0.25em] text-gold-primary font-semibold mt-0.5 uppercase">MERCADO DE LUXO</span>
          </div>
        </div>
      </div>
 
      <!-- Divider and Bottom Metas -->
      <div class="border-t border-white/5 pt-6 flex justify-between items-center text-[11px] text-slate-500 max-md:flex-col max-md:gap-3 max-md:text-center">
        <p>&copy; 2026 Johny Corretor. Todos os direitos reservados. CRECI: 249849-F</p>
        <p><a href="https://www.instagram.com/alexsander.code" target="_blank" class="hover:text-gold-primary transition-colors duration-200">Desenvolvido por @alexsander.code</a></p>
        <p class="italic text-[11px]">A intermediação imobiliária é garantida por profissionais credenciados. Exija o CRECI.</p>
      </div>
    </div>
  </footer>
`;

// Initialize Lucide Icons (using PascalCase keys as required by Lucide createIcons helper)
createIcons({
  icons: {
    MapPin,
    Bed,
    Maximize,
    Car,
    Phone,
    Mail,
    Award,
    Check,
    ShieldCheck,
    TrendingUp,
    Users,
    Calendar,
    Camera,
    camera: Camera, // Fallback for single-word lowercase data-lucide attribute lookups
    ArrowRight,
    ArrowDown
  }
});

// Navigation togglers removed

// Broker's WhatsApp Phone Number (55 for Brazil, 13 for Praia Grande/Baixada Santista)
// Replace with the real phone number for deployment
const BROKER_PHONE = '5513988343158';

// Hero form submission with direct WhatsApp redirect
const heroForm = document.getElementById('hero-lead-form');
if (heroForm) {
  heroForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const whatsapp = document.getElementById('whatsapp').value;

    // Construct WhatsApp message
    const message = `Olá, Johny! Acabei de enviar meus dados no seu site e gostaria de receber atendimento exclusivo para imóveis de alto padrão.\n\n` +
      `*Meus Dados:*\n` +
      `• *Nome:* ${name}\n` +
      `• *WhatsApp:* ${whatsapp}`;

    const whatsappUrl = `https://wa.me/${BROKER_PHONE}?text=${encodeURIComponent(message)}`;

    // Open WhatsApp in a new tab
    window.open(whatsappUrl, '_blank');

    // Reset the form
    heroForm.reset();
  });
}

// Contact page form submission logic with WhatsApp redirect
const contactForm = document.getElementById('contact-page-form');
if (contactForm) {
  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('c-name').value;
    const phone = document.getElementById('c-phone').value;
    const userMessage = document.getElementById('c-message').value;

    // Construct WhatsApp message
    const message = `Olá, Johny! Enviei uma mensagem pelo formulário de contato do seu site:\n\n` +
      `*Meus Dados:*\n` +
      `• *Nome:* ${name}\n` +
      `• *WhatsApp:* ${phone}\n\n` +
      `*Mensagem:*\n` +
      `"${userMessage}"`;

    const whatsappUrl = `https://wa.me/${BROKER_PHONE}?text=${encodeURIComponent(message)}`;

    // Open WhatsApp in a new tab
    window.open(whatsappUrl, '_blank');

    // Reset the form
    contactForm.reset();
  });
}

// Inicialização do Swiper para a Seção Liderança & Confiança no Mobile
let swiperAuthorityInstance = null;

function handleSwiperAuthority() {
  const isMobile = window.matchMedia('(max-width: 992px)').matches;

  if (isMobile) {
    if (!swiperAuthorityInstance) {
      // Swiper is loaded globally from CDN in index.html
      swiperAuthorityInstance = new Swiper('.swiper-authority', {
        slidesPerView: 'auto',
        spaceBetween: 16,
        grabCursor: true,
        pagination: {
          el: '.swiper-pagination-authority',
          clickable: true,
        }
      });
    }
  } else {
    if (swiperAuthorityInstance) {
      swiperAuthorityInstance.destroy(true, true);
      swiperAuthorityInstance = null;
    }
  }
}

// Inicializa no load e adiciona listener de resize
window.addEventListener('resize', handleSwiperAuthority);
handleSwiperAuthority();

// Máscara para formatação automática do WhatsApp
const applyPhoneMask = (inputElement) => {
  if (!inputElement) return;
  inputElement.addEventListener('input', (e) => {
    let value = e.target.value.replace(/\D/g, '');
    if (value.length > 11) {
      value = value.slice(0, 11);
    }

    let formatted = '';
    if (value.length > 0) {
      formatted += `(${value.slice(0, 2)}`;
    }
    if (value.length > 2) {
      formatted += `) ${value.slice(2, 7)}`;
    }
    if (value.length > 7) {
      formatted += `-${value.slice(7, 11)}`;
    }

    e.target.value = formatted;
  });
};

const whatsappHero = document.getElementById('whatsapp');
const whatsappContact = document.getElementById('c-phone');

applyPhoneMask(whatsappHero);
applyPhoneMask(whatsappContact);

// Inicializar animações AOS
AOS.init({
  duration: 400,
  easing: 'ease-out-cubic',
  once: true,
  offset: 100
});
