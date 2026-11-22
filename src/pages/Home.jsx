import { useState } from "react";
import { Link } from "react-router-dom";
import "../landing-mtto.css";

const demos = [
  { to: "/crm", label: "CRM" },
  { to: "/taskflow", label: "TaskFlow" },
  { to: "/barbershop", label: "BarberShop" },
];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="chacdev-landing">
      <header className="site-header">
        <a className="brand" href="#inicio" aria-label="ChacDev, inicio">
          <span className="brand-mark">&lt;/&gt;</span>
          <span>
            <strong>ChacDev</strong>
            <small>Soluciones web para PYMES</small>
          </span>
        </a>
        <nav
          className={`main-nav${menuOpen ? " nav-open" : ""}`}
          aria-label="Navegación principal"
        >
          <a href="#inicio" onClick={closeMenu}>
            Inicio
          </a>
          <a href="#servicios" onClick={closeMenu}>
            Servicios
          </a>
          <a href="#ejemplos" onClick={closeMenu}>
            Ejemplos
          </a>
          <a href="#proceso" onClick={closeMenu}>
            Cómo trabajamos
          </a>
          <a href="#contacto" onClick={closeMenu}>
            Contacto
          </a>
        </nav>
        <a className="button button-blue header-cta" href="#contacto">
          ◉ Hablemos
        </a>
        <button
          className="menu-toggle"
          aria-label="Abrir menú"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((v) => !v)}
        >
          ☰
        </button>
      </header>

      <div>
        <section className="hero" id="inicio">
          <div className="hero-copy">
            <p className="eyebrow">SOLUCIONES WEB PARA EMPRESAS</p>
            <h1>
              Tu negocio no necesita más complicaciones.{" "}
              <span>Necesita mejores herramientas.</span>
            </h1>
            <p className="hero-lead">
              Desarrollo aplicaciones web a la medida para que tu negocio
              trabaje mejor, sin hojas de cálculo ni mensajes dispersos.
            </p>
            <div className="hero-points">
              <span>✓ A la medida</span>
              <span>✓ Seguras</span>
              <span>✓ Fáciles de usar</span>
            </div>
            <a className="button button-green" href="#ejemplos">
              ◉ Ver demos <b>→</b>
            </a>
            <p className="microcopy">
              Una conversación puede ser el primer paso hacia una solución.
            </p>
          </div>
          <div
            className="hero-visual"
            aria-label="Ilustración de trabajo digital y panel de operaciones"
          >
            <div className="visual-glow" />
            <div className="person-card">
              <div className="person-avatar">CD</div>
              <div className="person-caption">
                <strong>Tu negocio, mejor organizado</strong>
                <span>Herramientas que trabajan contigo</span>
              </div>
            </div>
            <div className="floating-card chart-card">
              <strong>Operaciones en orden</strong>
              <div className="chart-bars">
                <i />
                <i />
                <i />
                <i />
                <i />
                <i />
              </div>
              <div className="chart-line" />
            </div>
            <div className="floating-card checklist-card">
              <span>🟢 Solicitudes</span>
              <span>🟢 Reportes</span>
              <span>🟢 Control de equipos</span>
            </div>
            <div className="floating-card time-card">
              <b>✓</b>
              <span>
                Más tiempo
                <br />
                para tu negocio
              </span>
            </div>
          </div>
        </section>

        <section className="problem-strip">
          <div className="problem-intro">
            <h2>¿Te sucede esto?</h2>
            <p>
              Estos son algunos retos comunes en las empresas que queremos
              ayudar:
            </p>
          </div>
          <div className="problem-item">
            <span className="problem-icon excel">X</span>
            <p>
              Procesos manuales
              <br />y hojas de Excel desordenadas
            </p>
          </div>
          <div className="problem-item">
            <span className="problem-icon">◷</span>
            <p>
              Tareas repetitivas
              <br />
              que quitan tiempo
            </p>
          </div>
          <div className="problem-item">
            <span className="problem-icon">▥</span>
            <p>
              Información dispersa
              <br />y sin control
            </p>
          </div>
          <div className="problem-item">
            <span className="problem-icon">♧</span>
            <p>
              Dificultad para dar
              <br />
              seguimiento
            </p>
          </div>
        </section>

        <section className="services section" id="servicios">
          <div className="section-heading">
            <h2>¿Qué podemos desarrollar?</h2>
            <p>
              Soluciones flexibles y escalables, enfocadas en las necesidades de
              tu negocio.
            </p>
          </div>
          <div className="service-grid">
            <article className="service-card">
              <span>⚙</span>
              <p>
                Aplicaciones
                <br />
                de control y gestión
              </p>
            </article>
            <article className="service-card">
              <span>♧</span>
              <p>
                CRM y seguimiento
                <br />
                de clientes
              </p>
            </article>
            <article className="service-card">
              <span>▤</span>
              <p>
                Solicitudes y<br />
                reportes en línea
              </p>
            </article>
            <article className="service-card">
              <span>⬡</span>
              <p>
                Inventarios y<br />
                almacenes
              </p>
            </article>
            <article className="service-card">
              <span>▥</span>
              <p>
                Automatización
                <br />
                de procesos
              </p>
            </article>
            <article className="service-card">
              <span>＋</span>
              <p>Y mucho más...</p>
            </article>
          </div>
        </section>

        <section className="examples section" id="ejemplos">
          <div className="examples-copy">
            <h2>Ejemplos de soluciones</h2>
            <p>
              Desde un CRM para dar seguimiento a clientes, hasta un tablero de
              tareas o una agenda de citas. Abre cualquiera de las tres demos y
              compruébalo.
            </p>
            <div className="demo-links">
              {demos.map((d) => (
                <Link key={d.to} className="button button-outline" to={d.to}>
                  {d.label} →
                </Link>
              ))}
            </div>
          </div>
          <div className="laptop">
            <div className="laptop-screen">
              <aside>
                <strong>Panel de Control</strong>
                <span>⌂ &nbsp; Inicio</span>
                <span>▣ &nbsp; Solicitudes</span>
                <span>▤ &nbsp; Reportes</span>
                <span>⚙ &nbsp; Configuración</span>
              </aside>
              <div className="dashboard">
                <div className="stats">
                  <div>
                    <b>12</b>
                    <small>Solicitudes</small>
                  </div>
                  <div>
                    <b>8</b>
                    <small>En proceso</small>
                  </div>
                  <div>
                    <b>4</b>
                    <small>Completadas</small>
                  </div>
                </div>
                <strong>Actividad del mes</strong>
                <div className="fake-chart">
                  <svg
                    viewBox="0 0 500 120"
                    preserveAspectRatio="none"
                    aria-hidden="true"
                  >
                    <polyline
                      points="0,95 45,80 90,88 135,48 180,68 225,28 270,55 315,38 360,65 405,18 450,34 500,8"
                      fill="none"
                      stroke="#1685f8"
                      strokeWidth="4"
                    />
                    <polyline
                      points="0,95 45,80 90,88 135,48 180,68 225,28 270,55 315,38 360,65 405,18 450,34 500,8 500,120 0,120"
                      fill="rgba(22,133,248,.10)"
                      stroke="none"
                    />
                  </svg>
                </div>
              </div>
            </div>
            <div className="laptop-base" />
          </div>
          <ul className="example-benefits">
            <li>Acceso seguro</li>
            <li>Información en tiempo real</li>
            <li>Reportes claros</li>
            <li>Desde cualquier dispositivo</li>
          </ul>
        </section>

        <section className="process section" id="proceso">
          <div className="section-heading">
            <h2>Cómo trabajamos</h2>
          </div>
          <div className="process-grid">
            <article>
              <span>☏</span>
              <h3>1. Escuchamos</h3>
              <p>Entendemos tus necesidades y objetivos.</p>
            </article>
            <b className="process-arrow">→</b>
            <article>
              <span>♧</span>
              <h3>2. Proponemos</h3>
              <p>Te sugerimos la mejor solución, sin complicaciones.</p>
            </article>
            <b className="process-arrow">→</b>
            <article>
              <span>&lt;/&gt;</span>
              <h3>3. Desarrollamos</h3>
              <p>Creamos tu aplicación con calidad y rapidez.</p>
            </article>
            <b className="process-arrow">→</b>
            <article>
              <span>➤</span>
              <h3>4. Implementamos</h3>
              <p>Te acompañamos en la puesta en marcha y soporte.</p>
            </article>
          </div>
        </section>

        <section className="contact-banner">
          <div className="quote">
            <div className="quote-avatar">CD</div>
            <div>
              <blockquote>
                “Con una herramienta adecuada, tu empresa puede ahorrar tiempo y
                trabajar con mayor claridad.”
              </blockquote>
              <small>
                Un mejor proceso comienza con una buena conversación.
              </small>
            </div>
          </div>
          <div className="contact-callout">
            <h2>¿Hablamos de tu proyecto?</h2>
            <p>
              Cuéntame qué necesitas y te ayudo a encontrar la mejor solución.
            </p>
            <a className="button button-green" href="#contacto">
              ◉ Escribirme <b>→</b>
            </a>
          </div>
        </section>

        <section className="contact-form" id="contacto">
          <h2>Cuéntame tu problema</h2>
          <p>Respondo en menos de 24 horas. Sin compromiso.</p>
          <form action="https://formspree.io/f/TU-FORM-ID" method="POST">
            <div className="demo-links">
              <input
                type="text"
                name="nombre"
                placeholder="Tu nombre"
                required
                aria-label="Tu nombre"
              />
              <input
                type="email"
                name="email"
                placeholder="Tu email"
                required
                aria-label="Tu email"
              />
            </div>
            <textarea
              name="mensaje"
              placeholder="¿Qué problema quieres resolver?"
              rows="4"
              required
              aria-label="Tu mensaje"
            />
            <button type="submit" className="button button-green">
              Enviar mensaje
            </button>
          </form>
        </section>
      </div>

      <footer className="site-footer">
        <a className="brand" href="#inicio">
          <span className="brand-mark">&lt;/&gt;</span>
          <span>
            <strong>ChacDev</strong>
            <small>Soluciones web para PYMES</small>
          </span>
        </a>
        <nav>
          <a href="#inicio">Inicio</a>
          <a href="#servicios">Servicios</a>
          <a href="#ejemplos">Ejemplos</a>
          <a href="#proceso">Cómo trabajamos</a>
          <a href="#contacto">Contacto</a>
        </nav>
        <span className="footer-note">Tu aliado en soluciones web</span>
      </footer>
    </div>
  );
}
