import { useState, useEffect } from "react";
import "./App.css";

// Componente de Background Animado
const AnimatedBackground = () => {
  return (
    <div className="animated-background">
      <div className="floating-shapes">
        <div className="shape shape-1"></div>
        <div className="shape shape-2"></div>
        <div className="shape shape-3"></div>
        <div className="shape shape-4"></div>
        <div className="shape shape-5"></div>
        <div className="shape shape-6"></div>
      </div>
      {/* <div className="gradient-orbs">
        <div className="orb orb-1"></div>
        <div className="orb orb-2"></div>
        <div className="orb orb-3"></div>
      </div> */}
    </div>
  );
};

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };

  return (
    <div className="app">
      {/* Header */}
      <header className={`header ${scrolled ? "scrolled" : ""}`}>
        <div className="header-container">
          <div className="header-logo">
            <img
              src="/assets/logo.png"
              alt="Value Profit Bank"
              className="header-logo-img"
            />
            <span className="header-logo-text">Value Profit Bank</span>
          </div>

          <nav className={`header-nav ${isMenuOpen ? "header-nav-open" : ""}`}>
            <a
              href="#home"
              onClick={() => scrollToSection("home")}
              className="header-nav-link"
            >
              Início
            </a>
            <a
              href="#services"
              onClick={() => scrollToSection("services")}
              className="header-nav-link"
            >
              Serviços
            </a>
            <a
              href="#about"
              onClick={() => scrollToSection("about")}
              className="header-nav-link"
            >
              Sobre
            </a>
            <a
              href="#contact"
              onClick={() => scrollToSection("contact")}
              className="header-nav-link"
            >
              Contato
            </a>
          </nav>

          <button
            className={`header-menu-toggle ${
              isMenuOpen ? "header-menu-toggle-active" : ""
            }`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Menu"
          >
            <span className="header-menu-line"></span>
            <span className="header-menu-line"></span>
            <span className="header-menu-line"></span>
          </button>
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="hero">
        <div className="hero-background"></div>
        <AnimatedBackground />
        <div className="container">
          <div className="hero-content">
            <h1 className="hero-title">
              Ecossistema de Pagamento
              <span className="highlight"> que Impulsiona seu Negócio</span>
            </h1>
            <p className="hero-subtitle">
              A Value Profit Bank é especialista em checkouts de cartão de
              crédito, oferecendo as melhores taxas, tecnologia avançada e
              suporte completo para maximizar suas vendas e conversões.
            </p>
            <div className="hero-buttons">
              <button
                className="btn btn-primary"
                onClick={() => scrollToSection("services")}
              >
                Nossas Soluções
              </button>
              <button
                className="btn btn-secondary"
                onClick={() => scrollToSection("contact")}
              >
                Solicitar Proposta
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="services">
        <div className="container">
          <div className="section-header">
            <h2>Nossas Soluções</h2>
            <p>Tecnologia de pagamento avançada para impulsionar suas vendas</p>
          </div>

          <div className="services-grid">
            <div className="service-card">
              <div className="service-icon">💳</div>
              <h3>Checkout de Cartão</h3>
              <p>
                Soluções completas de checkout com as melhores taxas do mercado,
                processamento seguro e integração simples para seu e-commerce.
              </p>
            </div>

            <div className="service-card">
              <div className="service-icon">📱</div>
              <h3>Pagamentos Mobile</h3>
              <p>
                Soluções de pagamento para dispositivos móveis com tecnologia
                NFC, QR Code e aplicativos nativos para máxima conversão.
              </p>
            </div>

            <div className="service-card">
              <div className="service-icon">🔄</div>
              <h3>Parcelamento Inteligente</h3>
              <p>
                Sistema de parcelamento automático que aumenta a conversão com
                opções flexíveis de pagamento para seus clientes.
              </p>
            </div>

            <div className="service-card">
              <div className="service-icon">🛡️</div>
              <h3>Segurança Avançada</h3>
              <p>
                Proteção completa contra fraudes com criptografia de ponta,
                tokenização e monitoramento em tempo real.
              </p>
            </div>

            <div className="service-card">
              <div className="service-icon">🌐</div>
              <h3>API de Pagamentos</h3>
              <p>
                Integração completa via API REST com documentação detalhada,
                SDKs para todas as linguagens e suporte técnico especializado.
              </p>
            </div>

            <div className="service-card">
              <div className="service-icon">📊</div>
              <h3>Analytics Avançado</h3>
              <p>
                Dashboard completo com métricas de conversão, relatórios
                detalhados e insights para otimizar suas vendas e estratégias de
                pagamento.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="about">
        <div className="container">
          <div className="about-content">
            <div className="about-text">
              <h2>Sobre a Value Profit Bank</h2>
              <p>
                A Value Profit Bank é uma empresa especializada em soluções de
                checkout de cartão de crédito, oferecendo tecnologia de ponta
                para e-commerces, marketplaces e empresas que buscam maximizar
                suas conversões de pagamento.
              </p>
              <p>
                Nossa missão é simplificar e otimizar o processo de pagamento,
                oferecendo as melhores taxas do mercado, tecnologia avançada de
                segurança e suporte completo para impulsionar o crescimento dos
                nossos parceiros comerciais.
              </p>

              <div className="stats">
                <div className="stat">
                  <h3>R$ 5M+</h3>
                  <p>Em Transações Processadas</p>
                </div>
                <div className="stat">
                  <h3>99.9%</h3>
                  <p>Uptime Garantido</p>
                </div>
              </div>
            </div>

            <div className="about-image">
              <div className="image-placeholder">
                <div className="bank-building">💳</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact">
        <div className="container">
          <div className="section-header">
            <h2>Entre em Contato</h2>
            <p>
              Vamos impulsionar suas vendas com as melhores soluções de
              pagamento
            </p>
          </div>

          <div className="contact-content">
            <div className="contact-info">
              <div className="contact-item">
                <div className="contact-icon">📞</div>
                <div>
                  <h4>Telefone</h4>
                  <p>(11) 3000-0000</p>
                </div>
              </div>

              <div className="contact-item">
                <div className="contact-icon">✉️</div>
                <div>
                  <h4>Email</h4>
                  <p>contato@valuebank.com.br</p>
                </div>
              </div>

              <div className="contact-item">
                <div className="contact-icon">📍</div>
                <div>
                  <h4>Endereço</h4>
                  <p>Av. Brigadeiro Faria Lima, 1485 - São Paulo/SP</p>
                </div>
              </div>
            </div>

            <form className="contact-form">
              <div className="form-group">
                <input type="text" placeholder="Seu nome" required />
              </div>
              <div className="form-group">
                <input type="email" placeholder="Seu email" required />
              </div>
              <div className="form-group">
                <input type="tel" placeholder="Seu telefone" required />
              </div>
              <div className="form-group">
                <textarea
                  placeholder="Sua mensagem"
                  rows={5}
                  required
                ></textarea>
              </div>
              <button type="submit" className="btn btn-primary">
                Enviar Mensagem
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-logo">
              <img
                src="/assets/logo.png"
                alt="Value Profit Bank"
                className="logo-img"
              />
              <span>Value Profit Bank</span>
            </div>

            <div className="footer-links">
              <a href="#home">Início</a>
              <a href="#services">Serviços</a>
              <a href="#about">Sobre</a>
              <a href="#contact">Contato</a>
            </div>

            <div className="footer-social">
              <a href="#" aria-label="Facebook">
                📘
              </a>
              <a href="#" aria-label="Instagram">
                📷
              </a>
              <a href="#" aria-label="LinkedIn">
                💼
              </a>
              <a href="#" aria-label="Twitter">
                🐦
              </a>
            </div>
          </div>

          <div className="footer-bottom">
            <p>&copy; 2025 Value Profit Bank. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
