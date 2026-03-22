import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "leaflet/dist/leaflet.css";
import "./style.css";

import { Modal } from "bootstrap";
import L, { CircleMarker, Map } from "leaflet";

import {
  conclusionSummary,
  accountingControl,
  accountingEvents,
  accountingEventsSummary,
  accountingNetWorth,
  accountingSIC,
  accountingStructure,
  accountingStructureSummary,
  administrationClassification,
  administrationClassificationSummary,
  administrationEnvironment,
  administrationEnvironmentSummary,
  administrativeProcessStages,
  administrativeProcessSummary,
  companySignals,
  conclusions,
  cycleStages,
  economicActors,
  economicHubs,
  economicFlowSteps,
  economicModelSummary,
  identity,
  macroAssumption,
  macroIssues,
  macroSummary,
  marketHighlights,
  marketDeterminants,
  marketStructureAssumption,
  marketStructureSides,
  marketStructureSummary,
  metrics,
  pestelCriticalItems,
  pestelSummary,
  operationalSummary,
  productiveFactors,
  productiveFactorsSummary,
  projectMeta,
  structureHighlights,
  zones,
} from "./content";

type MarkerRegistry = Record<string, CircleMarker>;

const root = document.querySelector<HTMLDivElement>("#app");

if (!root) {
  throw new Error("No se encontro el contenedor principal.");
}

const metricsMarkup = metrics
  .map(
    (metric) => `
      <div class="col-12 col-sm-6 col-xl-3">
        <article class="metric-card h-100">
          <div class="metric-value" data-counter="${metric.value}" data-prefix="${metric.prefix ?? ""}" data-suffix="${metric.suffix ?? ""}">
            ${metric.prefix ?? ""}${metric.value}${metric.suffix ?? ""}
          </div>
          <h3 class="metric-label">${metric.label}</h3>
          <p class="metric-description">${metric.description}</p>
        </article>
      </div>
    `,
  )
  .join("");

const valuesMarkup = identity.values
  .map((value) => `<span class="value-pill">${value}</span>`)
  .join("");

const marketMarkup = marketHighlights
  .map(
    (item) => `
      <div class="col-12 col-lg-4">
        <article class="insight-card h-100">
          <div class="eyebrow">Análisis</div>
          <h3>${item.title}</h3>
          <p>${item.text}</p>
        </article>
      </div>
    `,
  )
  .join("");

const factorsMarkup = productiveFactors
  .map(
    (factor) => `
      <div class="col-12 col-md-6 col-xl-3">
        <article class="factor-card h-100">
          <div class="factor-icon"><i class="bi ${factor.icon}"></i></div>
          <div class="eyebrow">Factor productivo</div>
          <h3>${factor.title}</h3>
          <div class="factor-classification">${factor.classification}</div>
          <p>${factor.description}</p>
        </article>
      </div>
    `,
  )
  .join("");

const administrationClassificationMarkup = administrationClassification
  .map(
    (item) => `
      <div class="col-12 col-md-6 col-xl-4">
        <article class="factor-card h-100">
          <div class="factor-icon"><i class="bi ${item.icon}"></i></div>
          <div class="eyebrow">Clasificación</div>
          <h3>${item.title}</h3>
          <div class="factor-classification">${item.classification}</div>
          <p>${item.description}</p>
        </article>
      </div>
    `,
  )
  .join("");

const administrationEnvironmentMarkup = administrationEnvironment
  .map(
    (item) => `
      <div class="col-12 col-md-6">
        <article class="factor-card h-100">
          <div class="factor-icon"><i class="bi ${item.icon}"></i></div>
          <div class="eyebrow">Entorno</div>
          <h3>${item.title}</h3>
          <div class="factor-classification">${item.classification}</div>
          <p>${item.description}</p>
        </article>
      </div>
    `,
  )
  .join("");

const pestelMarkup = pestelCriticalItems
  .map(
    (item) => `
      <div class="col-12 col-lg-4">
        <article class="market-side-card h-100">
          <div class="section-kicker">${item.title}</div>
          <h3>${item.subtitle}</h3>
          <p>${item.impact}</p>
        </article>
      </div>
    `,
  )
  .join("");

const administrativeProcessMarkup = administrativeProcessStages
  .map(
    (item) => `
      <div class="col-12 col-md-6 col-xl-3">
        <article class="structure-card h-100">
          <div class="eyebrow">Proceso</div>
          <h3>${item.title}</h3>
          <p>${item.description}</p>
        </article>
      </div>
    `,
  )
  .join("");

const economicActorById = Object.fromEntries(
  economicActors.map((actor) => [actor.id, actor] as const),
);

const economicHubById = Object.fromEntries(
  economicHubs.map((hub) => [hub.id, hub] as const),
);

const economicDiagramMarkup = `
      <div class="economic-svg-shell">
    <svg class="economic-svg" viewBox="0 0 900 560" role="img" aria-label="Flujo circular de la renta en una economía cerrada">
      <defs>
        <marker id="arrow-real" markerWidth="10" markerHeight="10" refX="8" refY="5" orient="auto" markerUnits="strokeWidth">
          <path d="M0,0 L10,5 L0,10 z" fill="#157a74"></path>
        </marker>
        <marker id="arrow-money" markerWidth="10" markerHeight="10" refX="8" refY="5" orient="auto" markerUnits="strokeWidth">
          <path d="M0,0 L10,5 L0,10 z" fill="#e76f51"></path>
        </marker>
      </defs>

      <g class="economic-svg-node economic-svg-hub" data-hub="bienes-servicios">
        <rect x="240" y="42" width="420" height="92" rx="26"></rect>
        <text x="450" y="76" class="node-kicker" text-anchor="middle">Mercado</text>
        <text x="450" y="102" class="node-title" text-anchor="middle">${economicHubById["bienes-servicios"].title}</text>
        <text x="450" y="126" class="node-subtitle" text-anchor="middle">${economicHubById["bienes-servicios"].subtitle}</text>
      </g>

      <g class="economic-svg-node economic-svg-actor" data-actor="empresa">
        <rect x="70" y="226" width="220" height="110" rx="24"></rect>
        <text x="180" y="258" class="node-kicker" text-anchor="middle">Actor</text>
        <text x="180" y="286" class="node-title" text-anchor="middle">${economicActorById["empresa"].title}</text>
        <text x="180" y="312" class="node-subtitle" text-anchor="middle">${economicActorById["empresa"].subtitle}</text>
      </g>

      <g class="economic-svg-node economic-svg-actor" data-actor="estado">
        <rect x="340" y="214" width="220" height="132" rx="24"></rect>
        <text x="450" y="248" class="node-kicker" text-anchor="middle">Actor</text>
        <text x="450" y="278" class="node-title" text-anchor="middle">${economicActorById["estado"].title}</text>
        <text x="450" y="306" class="node-subtitle" text-anchor="middle">${economicActorById["estado"].subtitle}</text>
      </g>

      <g class="economic-svg-node economic-svg-actor" data-actor="familias">
        <rect x="610" y="226" width="220" height="110" rx="24"></rect>
        <text x="720" y="258" class="node-kicker" text-anchor="middle">Actor</text>
        <text x="720" y="286" class="node-title" text-anchor="middle">${economicActorById["familias"].title}</text>
        <text x="720" y="312" class="node-subtitle" text-anchor="middle">${economicActorById["familias"].subtitle}</text>
      </g>

      <g class="economic-svg-node economic-svg-hub" data-hub="factores-produccion">
        <rect x="240" y="420" width="420" height="92" rx="26"></rect>
        <text x="450" y="454" class="node-kicker" text-anchor="middle">Mercado</text>
        <text x="450" y="480" class="node-title" text-anchor="middle">${economicHubById["factores-produccion"].title}</text>
        <text x="450" y="504" class="node-subtitle" text-anchor="middle">${economicHubById["factores-produccion"].subtitle}</text>
      </g>

      <g class="economic-svg-flow economic-svg-flow-real" data-flow="goods-offer">
        <path d="M292 214 C 292 162, 322 128, 370 118" marker-end="url(#arrow-real)"></path>
        <text x="235" y="162">Oferta de bienes y servicios</text>
      </g>

      <g class="economic-svg-flow economic-svg-flow-monetary" data-flow="consumption">
        <path d="M658 142 C 620 168, 600 194, 590 226" marker-end="url(#arrow-money)"></path>
        <text x="672" y="170">Consumo y gasto de los hogares</text>
      </g>

      <g class="economic-svg-flow economic-svg-flow-real" data-flow="factor-offer">
        <path d="M650 420 C 618 386, 600 366, 562 334" marker-end="url(#arrow-real)"></path>
        <text x="644" y="396">Oferta de factores productivos</text>
      </g>

      <g class="economic-svg-flow economic-svg-flow-monetary" data-flow="remuneration">
        <path d="M312 334 C 284 366, 264 392, 236 420" marker-end="url(#arrow-money)"></path>
        <text x="160" y="396">Remuneraciones e ingresos</text>
      </g>

      <g class="economic-svg-flow economic-svg-flow-monetary" data-flow="taxes">
        <line x1="450" y1="346" x2="450" y2="408" marker-end="url(#arrow-money)"></line>
        <text x="450" y="388" text-anchor="middle">Impuestos</text>
      </g>

      <g class="economic-svg-flow economic-svg-flow-monetary" data-flow="public-spending">
        <line x1="450" y1="214" x2="450" y2="142" marker-end="url(#arrow-money)"></line>
        <text x="450" y="194" text-anchor="middle">Gasto público</text>
      </g>
    </svg>
  </div>
`;

const economicStepButtonsMarkup = economicFlowSteps
  .map(
    (step, index) => `
      <button class="economic-step ${index === 0 ? "is-active" : ""}" type="button" data-economic-step="${step.id}">
        <span class="economic-step-index">0${index + 1}</span>
        <span class="economic-step-title">${step.title.replace(/^[0-9]+\\.\\s/, "")}</span>
      </button>
    `,
  )
  .join("");

const marketStructureSidesMarkup = marketStructureSides
  .map(
    (side) => `
      <div class="col-12 col-xl-6">
        <article class="market-side-card h-100">
          <div class="market-side-icon"><i class="bi ${side.icon}"></i></div>
          <div class="section-kicker">${side.title}</div>
          <h3>${side.subtitle}</h3>
          <p>${side.description}</p>
          <div class="market-bullet-list">
            ${side.bullets.map((bullet) => `<span class="market-bullet">${bullet}</span>`).join("")}
          </div>
        </article>
      </div>
    `,
  )
  .join("");

const marketDeterminantsMarkup = marketDeterminants
  .map(
    (group) => `
      <article class="determinant-card determinant-card-${group.tone}">
        <div class="eyebrow">${group.id === "demanda" ? "Demanda" : "Oferta"}</div>
        <h3>${group.title}</h3>
        <p class="determinant-copy">${group.subtitle}</p>
        <div class="determinant-pill-row">
          ${group.items.map((item) => `<span class="determinant-pill">${item}</span>`).join("")}
        </div>
      </article>
    `,
  )
  .join("");

const macroIssuesMarkup = macroIssues
  .map(
    (issue) => `
      <article class="macro-issue-card macro-issue-${issue.id}">
          <div class="eyebrow">Problema macroeconómico</div>
        <h4>${issue.title}</h4>
        <div class="macro-signal-pill">${issue.signal}</div>
        <p>${issue.impact}</p>
        <div class="macro-rationale">
          <strong>Justificación:</strong>
          <span>${issue.rationale}</span>
        </div>
      </article>
    `,
  )
  .join("");

const accountingStructureMarkup = accountingStructure
  .map(
    (item) => `
      <div class="col-12 col-md-6 col-xl-4">
        <article class="factor-card h-100">
          <div class="eyebrow">Estructura patrimonial</div>
          <h3>${item.title}</h3>
          <div class="factor-classification">${item.subtitle}</div>
          <p>${item.description}</p>
        </article>
      </div>
    `,
  )
  .join("");

const accountingEventsMarkup = accountingEvents
  .map(
    (item) => `
      <div class="col-12 col-xl-6">
        <article class="market-side-card h-100">
          <div class="section-kicker">Hecho económico</div>
          <h3>${item.title}</h3>
          <ul class="accounting-detail-list">
            <li><strong>Documentación de respaldo:</strong> ${item.documents}</li>
            <li><strong>Efecto patrimonial:</strong> ${item.effect}</li>
          </ul>
        </article>
      </div>
    `,
  )
  .join("");

const companySignalsMarkup = companySignals
  .map(
    (signal) => `
      <article class="company-signal-item">
        <span class="company-signal-year">${signal.year}</span>
        <div class="company-signal-body">
          <h4>${signal.title}</h4>
          <p>${signal.detail}</p>
        </div>
      </article>
    `,
  )
  .join("");

const structureMarkup = structureHighlights
  .map(
    (item) => `
      <div class="col-12 col-lg-4">
        <article class="structure-card h-100">
          <h3>${item.title}</h3>
          <p>${item.text}</p>
        </article>
      </div>
    `,
  )
  .join("");

const zoneCardsMarkup = zones
  .map(
    (zone) => `
      <button class="zone-card" type="button" data-zone="${zone.id}">
        <span class="zone-badge" style="--zone-color: ${zone.color}"></span>
        <div class="zone-copy">
          <div class="zone-title">${zone.title}</div>
          <div class="zone-provinces">${zone.provinces.join(" | ")}</div>
          <p>${zone.summary}</p>
          <small>${zone.focus}</small>
        </div>
      </button>
    `,
  )
  .join("");

const cycleButtonsMarkup = cycleStages
  .map(
    (stage, index) => `
      <button class="cycle-step ${index === 0 ? "is-active" : ""}" type="button" data-stage="${stage.id}">
        <span class="cycle-step-index">0${index + 1}</span>
        <span class="cycle-step-title">${stage.title.replace(/^[0-9]+\\.\\s/, "")}</span>
      </button>
    `,
  )
  .join("");

const galleryMarkup = [
  {
    src: "/assets/organigrama-general.jpg",
    title: "Organigrama general",
    description: "Síntesis jerárquica de alto nivel de la organización.",
  },
  {
    src: "/assets/organigrama-comercial.jpg",
    title: "Detalle del área comercial",
    description: "Gerencias regionales, zonas, canales y frentes comerciales.",
  },
  {
    src: "/assets/ciclo-operativo.jpg",
    title: "Ciclo operativo",
    description: "Fases del proceso comercial, logístico y administrativo.",
  },
]
  .map(
    (image) => `
      <div class="col-12 col-lg-4">
        <article class="gallery-card h-100">
          <button
            class="gallery-trigger"
            type="button"
            data-bs-toggle="modal"
            data-bs-target="#imageModal"
            data-image-src="${image.src}"
            data-image-title="${image.title}"
            data-image-description="${image.description}"
          >
            <img src="${image.src}" alt="${image.title}" />
          </button>
          <div class="gallery-copy">
            <h3>${image.title}</h3>
            <p>${image.description}</p>
            <small class="visual-source">${
              image.title === "Ciclo operativo"
                ? "Fuente: elaboración propia con base en fuentes internas de FBM y documentación institucional."
                : "Fuente: elaboración propia con base en documentación institucional interna de Familia Bercomat."
            }</small>
          </div>
        </article>
      </div>
    `,
  )
  .join("");

root.innerHTML = `
  <div class="site-shell">
    <nav class="navbar navbar-expand-lg app-navbar">
      <div class="container">
        <a class="navbar-brand" href="#inicio">TIF Familia Bercomat</a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#mainNav"
          aria-controls="mainNav"
          aria-expanded="false"
          aria-label="Abrir navegación"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="mainNav">
          <ul class="navbar-nav ms-auto">
            <li class="nav-item"><a class="nav-link" href="#inicio">1. Introducción</a></li>
            <li class="nav-item"><a class="nav-link" href="#caracterizacion">2.1 Descripción</a></li>
            <li class="nav-item"><a class="nav-link" href="#identidad">2.2 Identidad</a></li>
            <li class="nav-item"><a class="nav-link" href="#mercado">2.3 Mercado</a></li>
            <li class="nav-item"><a class="nav-link" href="#estructura">2.4 Estructura</a></li>
            <li class="nav-item"><a class="nav-link" href="#ciclo">2.5 Ciclo</a></li>
            <li class="nav-item"><a class="nav-link" href="#administracion">3.1-3.3 Administración</a></li>
            <li class="nav-item"><a class="nav-link" href="#economia">4.1-4.4 Economía</a></li>
            <li class="nav-item"><a class="nav-link" href="#contabilidad">5.1-5.5 Contabilidad</a></li>
            <li class="nav-item"><a class="nav-link" href="#cierre">7. Conclusión</a></li>
          </ul>
        </div>
      </div>
    </nav>

    <main>
      <section class="hero-section" id="inicio">
        <div class="container hero-grid">
          <div class="hero-copy">
            <div class="hero-meta">1. Introducción | ${projectMeta.university} | ${projectMeta.faculty}</div>
            <h1>${projectMeta.title}</h1>
            <p class="hero-subtitle">${projectMeta.subtitle}</p>
            <p class="hero-description">
              Micrositio interactivo para presentar el análisis académico de una organización real del sector de materiales para la construcción,
              articulando procesos, estructura, mercado y ciclo operativo.
            </p>
            <div class="hero-actions">
              <a class="btn btn-primary btn-lg" href="#cobertura">Explorar mapa comercial</a>
              <a class="btn btn-outline-light btn-lg" href="#ciclo">Ver ciclo operativo</a>
            </div>
          </div>
          <aside class="hero-panel">
            <div class="hero-panel-header">Ficha de lectura</div>
            <ul class="hero-list">
              <li><strong>Materia:</strong> ${projectMeta.subject}</li>
              <li><strong>Empresa:</strong> Familia Bercomat</li>
              <li><strong>Ejes:</strong> Administración, Economía y Contabilidad</li>
              <li><strong>Formato:</strong> navegación interactiva para defensa oral</li>
            </ul>
          </aside>
        </div>
      </section>

      <section class="metrics-section">
        <div class="container">
          <div class="section-intro compact">
            <span class="section-kicker">Panorama general</span>
            <h2>Indicadores sintéticos del caso</h2>
          </div>
          <div class="row g-4">${metricsMarkup}</div>
        </div>
      </section>

      <section class="content-section" id="caracterizacion">
        <div class="container">
          <div class="section-intro">
            <span class="section-kicker">2. Parte 1: Caracterización de la organización</span>
            <h2>2.1 Descripción operativa</h2>
            <p>${operationalSummary.intro}</p>
          </div>
          <div class="row g-4 align-items-stretch">
            <div class="col-12 col-xl-7">
              <article class="feature-panel h-100">
                <div class="panel-icon"><i class="bi bi-box-seam"></i></div>
                <h3>Descripción operativa</h3>
                <p>
                  La empresa ofrece una estructura comercial con surtido profundo, gestión de categorías, cobertura territorial y una operatoria que
                  requiere coordinar disponibilidad, abastecimiento, atención comercial, logística y administración.
                </p>
                <p>
                  Su propuesta excede la venta de materiales básicos y se organiza en múltiples líneas para obras, remodelaciones y equipamiento del hogar.
                </p>
              </article>
            </div>
            <div class="col-12 col-xl-5">
              <article class="identity-panel h-100" id="identidad">
                <span class="section-kicker">2.2 Identidad organizacional</span>
                <h3>Misión, visión y valores</h3>
                <div class="identity-block">
                  <strong>Misión</strong>
                  <p>${identity.mission}</p>
                </div>
                <div class="identity-block">
                  <strong>Visión</strong>
                  <p>${identity.vision}</p>
                </div>
                <div class="identity-block">
                  <strong>Valores</strong>
                  <div class="values-row">${valuesMarkup}</div>
                </div>
              </article>
            </div>
          </div>
        </div>
      </section>

      <section class="content-section section-accent" id="mercado">
        <div class="container">
          <div class="section-intro">
            <span class="section-kicker">2. Parte 1: Caracterización de la organización</span>
            <h2>2.3 Análisis de mercado</h2>
            <p>${operationalSummary.market}</p>
          </div>
          <div class="row g-4">${marketMarkup}</div>
        </div>
      </section>

      <section class="content-section" id="cobertura">
        <div class="container">
          <div class="section-intro">
            <span class="section-kicker">2.3 Análisis de mercado</span>
            <h2>Apoyo visual: cobertura regional del mercado</h2>
            <p>
              La estructura comercial se organiza por zonas con distintas provincias de referencia, dinámicas de demanda y prioridades operativas.
              Seleccioná una zona para enfocar el mapa y ver su composición.
            </p>
          </div>
          <div class="row g-4">
            <div class="col-12 col-xl-5">
              <div class="zone-list">${zoneCardsMarkup}</div>
            </div>
            <div class="col-12 col-xl-7">
              <div class="map-card">
                <div id="coverage-map" class="coverage-map" aria-label="Mapa de cobertura regional"></div>
                <p class="visual-source map-source">
                  Fuente: elaboración propia con base en el sitio web oficial de Familia Bercomat y documentación interna de FBM.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="content-section section-dark" id="estructura">
        <div class="container">
          <div class="section-intro inverted">
            <span class="section-kicker">2. Parte 1: Caracterización de la organización</span>
            <h2>2.4 Estructura humana</h2>
            <p>
              La empresa combina áreas comerciales, logísticas, administrativas y de soporte con una estructura jerárquica orientada a la coordinación
              multisucursal y a la mejora continua.
            </p>
          </div>
          <div class="row g-4 mb-5">${structureMarkup}</div>
          <div class="row g-4">${galleryMarkup}</div>
        </div>
      </section>

      <section class="content-section" id="ciclo">
        <div class="container">
          <div class="section-intro">
            <span class="section-kicker">2. Parte 1: Caracterización de la organización</span>
            <h2>2.5 Ciclo operativo</h2>
            <p>
              El circuito operativo se sostiene por puestos y funciones articuladas entre compras, depósito, ventas, logística, administración y
              servicio al cliente.
            </p>
          </div>
          <div class="cycle-layout">
            <div class="cycle-steps">${cycleButtonsMarkup}</div>
            <article class="cycle-detail" id="cycle-detail"></article>
          </div>
        </div>
      </section>

      <section class="content-section section-accent" id="administracion">
        <div class="container">
          <div class="section-intro">
            <span class="section-kicker">3. Parte 2: Análisis desde Administración</span>
            <h2>3.1 Clasificación</h2>
            <p>
              De acuerdo con los criterios trabajados en clase, la empresa puede clasificarse según propiedad, finalidad,
              actividad económica, tamaño, origen del capital, alcance geográfico, forma jurídica y trayectoria institucional.
            </p>
          </div>
          <div class="row g-4 mb-4">${administrationClassificationMarkup}</div>
          <article class="economic-summary-note">
            <div class="eyebrow">Síntesis administrativa</div>
            <p>${administrationClassificationSummary}</p>
          </article>
          <div class="section-intro admin-subsection-intro">
            <span class="section-kicker">3. Parte 2: Análisis desde Administración</span>
            <h2>3.2 Entorno</h2>
            <p>
              El entorno de la empresa puede analizarse a partir de sus clientes, competidores, proveedores y productos sustitutos,
              junto con variables del macroentorno que condicionan la estrategia y la toma de decisiones.
            </p>
          </div>
          <div class="row g-4 mb-4">${administrationEnvironmentMarkup}</div>
          <article class="economic-summary-note">
            <div class="eyebrow">Entorno inmediato</div>
            <p>${administrationEnvironmentSummary}</p>
          </article>
          <div class="section-intro compact admin-subsection-intro">
            <span class="section-kicker">3.2 Entorno</span>
            <h2>Variables del macroentorno críticas para el rubro</h2>
          </div>
          <div class="row g-4 mb-4">${pestelMarkup}</div>
          <article class="economic-summary-note">
            <div class="eyebrow">Lectura PESTEL</div>
            <p>${pestelSummary}</p>
          </article>
          <div class="section-intro compact admin-subsection-intro">
            <span class="section-kicker">3. Parte 2: Análisis desde Administración</span>
            <h2>3.3 Proceso administrativo</h2>
          </div>
          <div class="row g-4 mb-4">${administrativeProcessMarkup}</div>
          <article class="economic-summary-note">
            <div class="eyebrow">Lectura administrativa</div>
            <p>${administrativeProcessSummary}</p>
          </article>
        </div>
      </section>

      <section class="content-section" id="economia">
        <div class="container">
          <div class="section-intro">
            <span class="section-kicker">4. Parte 2: Análisis desde Economía</span>
            <h2>4.1 Factores productivos</h2>
            <p>
              Desde la teoría económica, Familia Bercomat combina tierra, trabajo, capital y tecnología para sostener su actividad comercial,
              logístico-administrativa y su capacidad de generar valor en el mercado regional.
            </p>
          </div>
          <div class="row g-4 mb-4">${factorsMarkup}</div>
          <article class="factor-summary">
            <div class="section-kicker">Lectura económica</div>
            <p>${productiveFactorsSummary}</p>
          </article>
          <div class="economy-layout">
            <article class="economic-model-card">
              <div class="section-kicker">4.2 Modelo económico</div>
              <h3>Flujo circular de la renta en una economía cerrada</h3>
              <p class="economic-model-intro">
                Adaptado al caso de Familia Bercomat, el modelo se construye a partir de la relación entre familias, empresa y Estado,
                sin incorporar sector externo. La empresa genera valor organizando abastecimiento, almacenamiento, comercialización,
                distribución y servicio, mientras el ingreso y el gasto circulan entre los tres sectores.
              </p>
              <div class="economic-diagram-board">
                ${economicDiagramMarkup}
                <div class="economic-legend-row">
                  <span class="economic-legend-item">
                    <span class="economic-legend-line is-real"></span>
                    Flujo real
                  </span>
                  <span class="economic-legend-item">
                    <span class="economic-legend-line is-monetary"></span>
                    Flujo monetario
                  </span>
                </div>
              </div>
              <article class="economic-summary-note compact">
                <div class="eyebrow">Supuesto del modelo</div>
                <p>${economicModelSummary}</p>
              </article>
            </article>
            <article class="economic-sequence-card">
              <div class="section-kicker">Secuencia interactiva</div>
              <h3>Cómo se relacionan los sectores</h3>
              <p class="economic-sequence-copy">
                Recorre el circuito paso a paso para ver cómo se vinculan factores productivos, ingresos, consumo, impuestos y gasto público.
              </p>
              <div class="economic-sequence-controls">
                ${economicStepButtonsMarkup}
              </div>
              <div class="economic-sequence-footer">
                <button class="btn btn-outline-secondary btn-sm" type="button" id="economic-prev">
                  <i class="bi bi-arrow-left"></i>
                  Paso anterior
                </button>
                <button class="btn btn-primary btn-sm" type="button" id="economic-next">
                  Siguiente paso
                  <i class="bi bi-arrow-right"></i>
                </button>
              </div>
              <article class="economic-sequence-detail" id="economic-sequence-detail"></article>
            </article>
          </div>
          <article class="market-structure-panel">
              <div class="section-kicker">4.3 Estructura de mercado</div>
              <h3>Competencia perfecta como supuesto de análisis</h3>
            <p class="market-structure-intro">${marketStructureAssumption}</p>
            <div class="row g-4 mb-4">${marketStructureSidesMarkup}</div>
            <div class="market-determinants-grid">
              ${marketDeterminantsMarkup}
            </div>
            <article class="economic-summary-note market-structure-note">
              <div class="eyebrow">Lectura aplicada</div>
              <p>${marketStructureSummary}</p>
            </article>
          </article>
          <article class="macro-panel">
            <div class="section-kicker">4.4 Análisis macroeconómico</div>
            <h3>Problemas macroeconómicos actuales que afectan a la organización</h3>
            <p class="market-structure-intro">${macroAssumption}</p>
            <div class="macro-grid">
              <div class="macro-issue-grid">
                ${macroIssuesMarkup}
              </div>
              <aside class="company-signal-panel">
                <div class="eyebrow">Señales de gestión recientes</div>
                <h4>Cómo se relaciona el contexto con la estrategia empresaria</h4>
                <p>
                  Señales públicas recientes, junto con fuentes internas de FBM sobre organización y operación, muestran que la compañía
                  respondió al entorno con reenfoque estratégico, disciplina comercial, financiación y cambios operativos.
                </p>
                <div class="company-signal-timeline">
                  ${companySignalsMarkup}
                </div>
              </aside>
            </div>
            <article class="economic-summary-note macro-summary-note">
              <div class="eyebrow">Relación macroeconómica</div>
              <p>${macroSummary}</p>
            </article>
          </article>
        </div>
      </section>

      <section class="content-section section-accent" id="contabilidad">
        <div class="container">
          <div class="section-intro">
            <span class="section-kicker">5. Parte 2: Análisis desde Contabilidad</span>
            <h2>5.1 Estructura patrimonial</h2>
            <p>
              Desde el enfoque contable, la empresa puede analizarse a partir de los recursos que posee, los derechos que mantiene
              frente a terceros y las obligaciones que debe atender para sostener su operatoria.
            </p>
          </div>
          <div class="row g-4 mb-4">${accountingStructureMarkup}</div>
          <article class="economic-summary-note">
            <div class="eyebrow">Lectura patrimonial</div>
            <p>${accountingStructureSummary}</p>
          </article>
          <div class="section-intro compact admin-subsection-intro">
            <span class="section-kicker">5. Parte 2: Análisis desde Contabilidad</span>
            <h2>5.2 Patrimonio neto</h2>
          </div>
          <article class="economic-summary-note mb-4">
            <div class="eyebrow">Expresión formal</div>
            <p>${accountingNetWorth}</p>
          </article>
          <div class="section-intro compact admin-subsection-intro">
            <span class="section-kicker">5. Parte 2: Análisis desde Contabilidad</span>
            <h2>5.3 Hechos económicos</h2>
          </div>
          <div class="row g-4 mb-4">${accountingEventsMarkup}</div>
          <article class="economic-summary-note mb-4">
            <div class="eyebrow">Trazabilidad</div>
            <p>${accountingEventsSummary}</p>
          </article>
          <div class="row g-4">
            <div class="col-12 col-xl-6">
              <article class="feature-panel h-100">
                <div class="section-kicker">5.4 Control contable</div>
                <h3>Recuento cíclico de inventarios</h3>
                <p>${accountingControl}</p>
              </article>
            </div>
            <div class="col-12 col-xl-6">
              <article class="identity-panel h-100">
                <div class="section-kicker">5.5 Importancia del SIC</div>
                <h3>Sistema de Información Contable</h3>
                <p>${accountingSIC}</p>
              </article>
            </div>
          </div>
        </div>
      </section>

      <section class="content-section section-accent" id="cierre">
        <div class="container">
          <div class="section-intro">
            <span class="section-kicker">7. Conclusión</span>
            <h2>Conclusiones del trabajo</h2>
            <p>${conclusionSummary}</p>
          </div>
          <div class="row g-4">
            ${conclusions
              .map(
                (item, index) => `
                  <div class="col-12 col-lg-4">
                    <article class="conclusion-card h-100">
                      <span class="conclusion-index">0${index + 1}</span>
                      <p>${item}</p>
                    </article>
                  </div>
                `,
              )
              .join("")}
          </div>
        </div>
      </section>
    </main>
  </div>

  <div class="modal fade" id="imageModal" tabindex="-1" aria-hidden="true">
    <div class="modal-dialog image-modal-dialog modal-dialog-centered modal-dialog-scrollable">
      <div class="modal-content image-modal-content">
        <div class="modal-header border-0">
          <div>
            <div class="section-kicker mb-1">Recurso visual</div>
            <h3 class="modal-title fs-4" id="imageModalTitle">Gráfico</h3>
          </div>
          <div class="modal-actions">
            <a
              id="modalOpenOriginal"
              class="btn btn-sm btn-outline-light"
              href="#"
              target="_blank"
              rel="noreferrer"
            >
              Abrir imagen completa
            </a>
            <button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal" aria-label="Cerrar"></button>
          </div>
        </div>
        <div class="modal-body">
          <div class="modal-image-shell">
            <img id="modalPreview" class="modal-preview-image" alt="" />
          </div>
          <p id="modalDescription" class="modal-description mb-0"></p>
        </div>
      </div>
    </div>
  </div>
`;

const detailContainer = document.querySelector<HTMLElement>("#cycle-detail");
const cycleButtons = Array.from(document.querySelectorAll<HTMLButtonElement>(".cycle-step"));

function renderCycleDetail(stageId: string): void {
  const stage = cycleStages.find((item) => item.id === stageId) ?? cycleStages[0];

  if (!detailContainer) {
    return;
  }

  detailContainer.innerHTML = `
    <span class="section-kicker">Etapa seleccionada</span>
    <h3>${stage.title}</h3>
    <p class="cycle-subtitle">${stage.subtitle}</p>
    <p>${stage.description}</p>
    <div class="role-chip-row">
      ${stage.roles.map((role) => `<span class="role-chip">${role}</span>`).join("")}
    </div>
  `;
}

cycleButtons.forEach((button) => {
  button.addEventListener("click", () => {
    cycleButtons.forEach((item) => item.classList.remove("is-active"));
    button.classList.add("is-active");
    renderCycleDetail(button.dataset.stage ?? cycleStages[0].id);
  });
});

renderCycleDetail(cycleStages[0].id);

const economicDetailContainer = document.querySelector<HTMLElement>("#economic-sequence-detail");
const economicStepButtons = Array.from(
  document.querySelectorAll<HTMLButtonElement>("[data-economic-step]"),
);
const economicActorCards = Array.from(
  document.querySelectorAll<HTMLElement>("[data-actor]"),
);
const economicHubCards = Array.from(
  document.querySelectorAll<HTMLElement>("[data-hub]"),
);
const economicFlowChips = Array.from(
  document.querySelectorAll<HTMLElement>("[data-flow]"),
);
const economicPrevButton = document.querySelector<HTMLButtonElement>("#economic-prev");
const economicNextButton = document.querySelector<HTMLButtonElement>("#economic-next");

let activeEconomicStepIndex = 0;

function renderEconomicStep(stepIndex: number): void {
  const normalizedIndex =
    (stepIndex + economicFlowSteps.length) % economicFlowSteps.length;
  const step = economicFlowSteps[normalizedIndex];

  activeEconomicStepIndex = normalizedIndex;

  economicStepButtons.forEach((button) => {
    button.classList.toggle("is-active", button.dataset.economicStep === step.id);
  });

  economicActorCards.forEach((card) => {
    const actorId = card.dataset.actor ?? "";
    card.classList.toggle("is-active", step.activeActors.includes(actorId));
  });

  economicHubCards.forEach((card) => {
    const hubId = card.dataset.hub ?? "";
    card.classList.toggle("is-active", step.activeHubs.includes(hubId));
  });

  economicFlowChips.forEach((chip) => {
    const flowId = chip.dataset.flow ?? "";
    chip.classList.toggle("is-active", step.activeFlows.includes(flowId));
  });

  if (!economicDetailContainer) {
    return;
  }

  economicDetailContainer.innerHTML = `
    <span class="section-kicker">Paso seleccionado</span>
    <h3>${step.title}</h3>
    <p class="cycle-subtitle">${step.subtitle}</p>
    <p>${step.description}</p>
    <div class="economic-takeaway">
      <strong>Clave de lectura:</strong>
      <span>${step.takeaway}</span>
    </div>
  `;
}

economicStepButtons.forEach((button, index) => {
  button.addEventListener("click", () => {
    renderEconomicStep(index);
  });
});

economicPrevButton?.addEventListener("click", () => {
  renderEconomicStep(activeEconomicStepIndex - 1);
});

economicNextButton?.addEventListener("click", () => {
  renderEconomicStep(activeEconomicStepIndex + 1);
});

renderEconomicStep(0);

const modalElement = document.querySelector<HTMLElement>("#imageModal");
const modalTitle = document.querySelector<HTMLElement>("#imageModalTitle");
const modalDescription = document.querySelector<HTMLElement>("#modalDescription");
const modalPreview = document.querySelector<HTMLImageElement>("#modalPreview");
const modalOpenOriginal = document.querySelector<HTMLAnchorElement>("#modalOpenOriginal");

if (modalElement && modalTitle && modalDescription && modalPreview && modalOpenOriginal) {
  const modal = new Modal(modalElement);
  const triggers = Array.from(document.querySelectorAll<HTMLButtonElement>(".gallery-trigger"));

  triggers.forEach((trigger) => {
    trigger.addEventListener("click", () => {
      const imageSrc = trigger.dataset.imageSrc ?? "";

      modalTitle.textContent = trigger.dataset.imageTitle ?? "Gráfico";
      modalDescription.textContent = trigger.dataset.imageDescription ?? "";
      modalPreview.src = imageSrc;
      modalPreview.alt = trigger.dataset.imageTitle ?? "Gráfico ampliado";
      modalOpenOriginal.href = imageSrc;
      modal.show();
    });
  });
}

const counters = Array.from(document.querySelectorAll<HTMLElement>("[data-counter]"));

function animateCounter(element: HTMLElement): void {
  const target = Number(element.dataset.counter ?? 0);
  const prefix = element.dataset.prefix ?? "";
  const suffix = element.dataset.suffix ?? "";
  const start = performance.now();
  const duration = 450;

  const tick = (time: number) => {
    const progress = Math.min((time - start) / duration, 1);
    const value = Math.round(target * (1 - Math.pow(1 - progress, 3)));
    element.textContent = `${prefix}${value}${suffix}`;

    if (progress < 1) {
      window.requestAnimationFrame(tick);
    }
  };

  window.requestAnimationFrame(tick);
}

const metricsObserver = new IntersectionObserver(
  (entries, observer) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) {
        return;
      }

      animateCounter(entry.target as HTMLElement);
      observer.unobserve(entry.target);
    });
  },
  { threshold: 0.4 },
);

counters.forEach((counter) => metricsObserver.observe(counter));

const mapContainer = document.querySelector<HTMLDivElement>("#coverage-map");
const zoneButtons = Array.from(document.querySelectorAll<HTMLButtonElement>("[data-zone]"));

if (mapContainer) {
  const map: Map = L.map(mapContainer, {
    zoomControl: true,
    scrollWheelZoom: false,
  }).setView([-31.2, -60.5], 5);

  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    attribution: "&copy; OpenStreetMap contributors",
  }).addTo(map);

  const markers: MarkerRegistry = {};

  zones.forEach((zone) => {
    const marker = L.circleMarker([zone.lat, zone.lng], {
      radius: 14,
      color: zone.color,
      fillColor: zone.color,
      fillOpacity: 0.78,
      weight: 3,
    })
      .bindPopup(
        `<strong>${zone.title}</strong><br/>${zone.provinces.join(", ")}<br/><small>${zone.focus}</small>`,
      )
      .addTo(map);

    markers[zone.id] = marker;
  });

  const activateZone = (zoneId: string) => {
    const current = zones.find((zone) => zone.id === zoneId) ?? zones[0];
    const marker = markers[current.id];

    zoneButtons.forEach((button) => {
      button.classList.toggle("is-active", button.dataset.zone === current.id);
    });

    map.flyTo([current.lat, current.lng], current.zoom, {
      animate: true,
      duration: 1.2,
    });
    marker.openPopup();
  };

  zoneButtons.forEach((button) => {
    button.addEventListener("click", () => {
      activateZone(button.dataset.zone ?? zones[0].id);
    });
  });

  activateZone(zones[0].id);
}
