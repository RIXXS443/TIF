export type Metric = {
  label: string;
  value: number;
  prefix?: string;
  suffix?: string;
  description: string;
};

export type Zone = {
  id: string;
  title: string;
  provinces: string[];
  summary: string;
  focus: string;
  lat: number;
  lng: number;
  zoom: number;
  color: string;
};

export type CycleStage = {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  roles: string[];
};

export type ProductiveFactor = {
  id: string;
  title: string;
  icon: string;
  classification: string;
  description: string;
};

export type AdministrationClassificationItem = {
  id: string;
  title: string;
  icon: string;
  classification: string;
  description: string;
};

export type AdministrationEnvironmentItem = {
  id: string;
  title: string;
  icon: string;
  classification: string;
  description: string;
};

export type PestelItem = {
  id: string;
  title: string;
  subtitle: string;
  impact: string;
};

export type AdministrativeProcessStage = {
  id: string;
  title: string;
  description: string;
};

export type EconomicActor = {
  id: string;
  title: string;
  subtitle: string;
};

export type EconomicHub = {
  id: string;
  title: string;
  subtitle: string;
};

export type EconomicFlow = {
  id: string;
  title: string;
  description: string;
};

export type EconomicFlowStep = {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  activeActors: string[];
  activeHubs: string[];
  activeFlows: string[];
  takeaway: string;
};

export type MarketStructureSide = {
  id: string;
  title: string;
  subtitle: string;
  icon: string;
  description: string;
  bullets: string[];
};

export type MarketDeterminantGroup = {
  id: string;
  title: string;
  subtitle: string;
  tone: "demand" | "supply";
  items: string[];
};

export type MacroIssue = {
  id: string;
  title: string;
  signal: string;
  impact: string;
  rationale: string;
};

export type AccountingStructureItem = {
  id: string;
  title: string;
  subtitle: string;
  description: string;
};

export type AccountingEvent = {
  id: string;
  title: string;
  documents: string;
  effect: string;
};

export type CompanySignal = {
  year: string;
  title: string;
  detail: string;
};

export const projectMeta = {
  university: "Universidad Nacional de Misiones",
  faculty: "Facultad de Ciencias Económicas",
  subject: "Área Integrada I / Introducción a las Ciencias Económicas",
  title: "Trabajo Integrador Final",
  subtitle:
    "Caracterización y análisis integral de Familia Bercomat desde las áreas de Administración, Economía y Contabilidad",
};

export const metrics: Metric[] = [
  {
    label: "SKU relevados",
    value: 97,
    suffix: " mil",
    description: "Catálogo amplio para construcción, remodelación y equipamiento del hogar.",
  },
  {
    label: "Categorías",
    value: 520,
    prefix: "+",
    description: "Oferta diversificada con lógicas distintas de reposición y exhibición.",
  },
  {
    label: "Proveedores",
    value: 600,
    prefix: "~",
    description: "Red amplia de abastecimiento y negociación comercial.",
  },
  {
    label: "Empleados activos",
    value: 750,
    prefix: "+",
    description: "Estructura humana distribuida entre áreas comerciales, logísticas y de soporte.",
  },
];

export const operationalSummary = {
  intro:
    "Familia Bercomat se posiciona como una organización comercial regional con fuerte especialización en materiales para la construcción, remodelación y mejoramiento del hogar. Su estructura combina amplitud de surtido, cobertura geográfica, gestión multisucursal y una operatoria que integra funciones comerciales, logísticas, financieras y de soporte.",
  market:
    "La empresa participa en un mercado sensible al nivel de actividad de la construcción, al financiamiento, a los costos y al poder adquisitivo de los hogares. Su diferenciación se apoya en escala, cobertura regional, variedad de oferta y capacidad para articular atención presencial con canales comerciales complementarios.",
};

export const identity = {
  mission:
    "Brindar una oferta integral de materiales, productos y servicios asociados a la construcción y al mejoramiento del hogar, con cercanía, disponibilidad y acompañamiento comercial.",
  vision:
    "Consolidarse como una organización atractiva y exitosa dentro de la región, fortaleciendo su presencia, su propuesta de valor y su capacidad de innovación.",
  values: ["Seriedad", "Cercanía", "Compromiso", "Humildad", "Trabajo en equipo"],
};

export const zones: Zone[] = [
  {
    id: "colorada",
    title: "Zona Colorada",
    provinces: ["Misiones"],
    summary:
      "Zona asociada a la presencia histórica de la firma y a la consolidación territorial del negocio en el NEA.",
    focus: "Concentración comercial y articulación entre sucursales y logística regional.",
    lat: -27.3671,
    lng: -55.8961,
    zoom: 7,
    color: "#e76f51",
  },
  {
    id: "amarilla",
    title: "Zona Amarilla",
    provinces: ["Buenos Aires", "CABA"],
    summary:
      "Espacio de alto volumen, fuerte competencia y diversidad de segmentos entre consumo minorista y demanda profesional.",
    focus: "Dinámica comercial intensiva, desarrollo y canales complementarios.",
    lat: -34.6037,
    lng: -58.3816,
    zoom: 7,
    color: "#d4a017",
  },
  {
    id: "blanca",
    title: "Zona Blanca",
    provinces: ["Chaco", "Corrientes", "Formosa"],
    summary:
      "Región con importancia para el despliegue de sucursales, logística y articulación comercial de proximidad.",
    focus: "Gerenciamiento territorial, grandes cuentas y coordinación interprovincial.",
    lat: -27.45,
    lng: -58.98,
    zoom: 6,
    color: "#7a9e9f",
  },
  {
    id: "verde",
    title: "Zona Verde",
    provinces: ["Entre Ríos", "Santa Fe"],
    summary:
      "Área de relevancia para ventas, operación y relación con nodos logísticos de la región centro.",
    focus: "Cobertura regional, abastecimiento y complementariedad comercial.",
    lat: -31.6333,
    lng: -60.7,
    zoom: 6,
    color: "#3d9970",
  },
];

export const marketHighlights = [
  {
    title: "Demanda",
    text: "Familias, profesionales, pequeñas constructoras, desarrolladores y clientes de grandes cuentas participan con necesidades heterogéneas de surtido, precio, financiamiento y servicio.",
  },
  {
    title: "Oferta",
    text: "La competencia incluye corralones tradicionales, cadenas especializadas, comercios regionales y canales digitales, en un entorno de fuerte sensibilidad al contexto macroeconómico.",
  },
  {
    title: "Diferenciación",
    text: "La amplitud del catálogo, la cobertura regional, la estructura comercial y la coordinación logística permiten sostener una propuesta de valor más robusta.",
  },
];

export const productiveFactors: ProductiveFactor[] = [
  {
    id: "tierra",
    title: "Tierra",
    icon: "bi-geo-alt",
    classification: "Base física y territorial",
    description:
      "Comprende sucursales, depósitos, centros de distribución, espacios de atención y localizaciones estratégicas que permiten sostener la cobertura regional de la empresa.",
  },
  {
    id: "trabajo",
    title: "Trabajo",
    icon: "bi-people",
    classification: "Estructura humana y organizacional",
    description:
      "Se expresa en la participación de vendedores, operarios, administrativos, jefaturas, gerencias y áreas de soporte que articulan el funcionamiento comercial y logístico.",
  },
  {
    id: "capital",
    title: "Capital",
    icon: "bi-building",
    classification: "Capital fijo y circulante",
    description:
      "Incluye infraestructura, equipamiento, vehículos, mobiliario y stock de mercaderías, junto con el capital circulante necesario para sostener la operatoria diaria.",
  },
  {
    id: "tecnologia",
    title: "Tecnología",
    icon: "bi-cpu",
    classification: "Herramientas, información e innovación",
    description:
      "Interviene en inventarios, coordinación comercial, administración de información y canales digitales, con una apuesta creciente al desarrollo de soluciones propias.",
  },
];

export const productiveFactorsSummary =
  "La combinación de tierra, trabajo, capital y tecnología permite explicar la capacidad operativa de Familia Bercomat para sostener una oferta amplia, coordinar procesos y atender un mercado regional con múltiples sucursales y funciones interdependientes.";

export const administrationClassification: AdministrationClassificationItem[] = [
  {
    id: "privada",
    title: "Empresa privada",
    icon: "bi-briefcase",
    classification: "Según propiedad y finalidad",
    description:
      "Se encuadra como empresa privada porque su capital y su dirección pertenecen al ámbito no estatal, y su actividad se orienta a la obtención de resultados económicos positivos.",
  },
  {
    id: "comercial",
    title: "Sector terciario o comercial",
    icon: "bi-shop-window",
    classification: "Según actividad económica",
    description:
      "Su función principal no es extraer ni transformar materias primas, sino comercializar materiales, artículos y servicios asociados a la construcción, la remodelación y el mejoramiento del hogar.",
  },
  {
    id: "grande",
    title: "Empresa grande",
    icon: "bi-building",
    classification: "Según tamaño",
    description:
      "La magnitud del catálogo, la estructura multisucursal y una dotación superior a setecientos empleados permiten ubicarla dentro de la categoría de empresa grande.",
  },
  {
    id: "nacional",
    title: "Capital nacional y alcance nacional",
    icon: "bi-geo-alt",
    classification: "Según origen del capital y alcance geográfico",
    description:
      "La firma responde a capital nacional y desarrolla operaciones en distintas provincias argentinas, con fuerte implantación regional y presencia en varios mercados del país.",
  },
  {
    id: "juridica",
    title: "Sociedad anónima",
    icon: "bi-file-earmark-text",
    classification: "Según forma jurídica",
    description:
      "La organización opera bajo la razón social UNIMACO S.A., por lo que corresponde clasificarla como una sociedad anónima dentro de las formas empresariales colegiadas.",
  },
  {
    id: "familiar",
    title: "Empresa familiar",
    icon: "bi-people",
    classification: "Según composición y trayectoria",
    description:
      "Su historia institucional, su identidad corporativa y la continuidad generacional permiten reconocerla como una empresa familiar con desarrollo profesionalizado.",
  },
];

export const administrationClassificationSummary =
  "Tomando los criterios trabajados en clase, Familia Bercomat puede clasificarse como una empresa privada, familiar, grande, del sector terciario o comercial, de capital nacional, con forma jurídica de sociedad anónima y con alcance nacional de fuerte desarrollo regional.";

export const administrationEnvironment: AdministrationEnvironmentItem[] = [
  {
    id: "clientes",
    title: "Clientes",
    icon: "bi-people",
    classification: "Demandantes del entorno cercano",
    description:
      "La empresa atiende a hogares y consumidores finales que construyen, amplían o refaccionan; también a profesionales, instaladores, pequeños contratistas, constructoras, desarrolladores y clientes corporativos. La oferta mayorista y las acciones de formación muestran que no se dirige a un único perfil de comprador, sino a segmentos diversos con necesidades de precio, asesoramiento, volumen y servicio.",
  },
  {
    id: "competidores",
    title: "Competidores",
    icon: "bi-shop-window",
    classification: "Rivales directos e indirectos",
    description:
      "La competencia no es homogénea en todas las plazas. En la zona amarilla, y especialmente en Buenos Aires, la presión competitiva es mayor por la presencia de homecenters, cadenas especializadas, corralones de escala y canales digitales. En las zonas blanca, verde y colorada, en cambio, pesan más los corralones regionales, distribuidores provinciales y comercios de cercanía con fuerte conocimiento del mercado local. En determinados productos también aparecen competidores de menor escala, con estructuras más livianas e incluso distintos grados de formalidad, que pueden ofrecer precios más bajos y tensionar los márgenes de una empresa más grande y estructurada.",
  },
  {
    id: "proveedores",
    title: "Proveedores",
    icon: "bi-truck",
    classification: "Abastecimiento y negociación comercial",
    description:
      "Fuentes internas de FBM muestran que el catálogo comercial se apoya en una red cercana a seiscientos proveedores, integrada por fabricantes, distribuidores e importadores de materiales, sanitarios, griferías, aberturas, pinturas, revestimientos, productos metalúrgicos y artículos complementarios. Su disponibilidad y condiciones comerciales inciden de forma directa sobre costos, reposición y margen.",
  },
  {
    id: "sustitutos",
    title: "Productos sustitutos",
    icon: "bi-arrow-left-right",
    classification: "Alternativas para satisfacer una misma necesidad",
    description:
      "Los sustitutos no son solo otras empresas, sino soluciones alternativas dentro del rubro: construcción en seco y steel frame frente a obra húmeda tradicional, PVC o aluminio frente a madera, porcelanatos frente a cerámicas u otras terminaciones, y propuestas prefabricadas o modulares frente a esquemas constructivos convencionales. Estos cambios alteran la composición de la demanda y la mezcla de categorías vendidas.",
  },
];

export const administrationEnvironmentSummary =
  "El entorno inmediato de Familia Bercomat está compuesto por clientes heterogéneos, competidores cuyo peso cambia según la región, una red amplia de proveedores respaldada por información interna y productos sustitutos que obligan a revisar permanentemente surtido, servicio, precios y posicionamiento comercial.";

export const pestelCriticalItems: PestelItem[] = [
  {
    id: "economica",
    title: "Variable económica",
    subtitle: "Inflación, financiamiento, actividad de la construcción y poder adquisitivo",
    impact:
      "Es crítica porque modifica el volumen de obra, la reposición, el precio de venta, la rotación del stock y la decisión de compra de hogares, profesionales y empresas.",
  },
  {
    id: "tecnologica",
    title: "Variable tecnológica",
    subtitle: "Digitalización comercial, integración de sistemas y desarrollo de herramientas propias",
    impact:
      "Resulta central porque condiciona la experiencia del cliente, la eficiencia de procesos, la trazabilidad de la información y la capacidad de competir con canales online y formatos omnicanal.",
  },
  {
    id: "politico-legal",
    title: "Variable político-legal",
    subtitle: "Carga tributaria, normativa laboral, regulación comercial y política pública sectorial",
    impact:
      "Afecta costos, cumplimiento, estructura operativa y demanda agregada, especialmente cuando existen cambios impositivos, regulatorios o variaciones en la dinámica de la obra pública.",
  },
];

export const pestelSummary =
  "Siguiendo el enfoque PESTEL, las variables económica, tecnológica y político-legal aparecen como las más críticas para el rubro porque atraviesan de manera simultánea la demanda, los costos, la organización del trabajo, el abastecimiento y la competitividad de la empresa.";

export const administrativeProcessStages: AdministrativeProcessStage[] = [
  {
    id: "planificacion",
    title: "Planificación",
    description:
      "Se observa en la definición de objetivos comerciales, campañas, políticas de margen, metas de venta y decisiones de abastecimiento.",
  },
  {
    id: "organizacion",
    title: "Organización",
    description:
      "Se expresa en la división por áreas, zonas, sucursales, jefaturas y circuitos de trabajo articulados entre lo comercial, lo logístico y lo administrativo.",
  },
  {
    id: "direccion",
    title: "Dirección",
    description:
      "Aparece en la coordinación de equipos, la comunicación institucional, el liderazgo de gerencias y la orientación operativa hacia resultados.",
  },
  {
    id: "control",
    title: "Control",
    description:
      "Se refleja en el seguimiento de indicadores, inventarios, cobranzas, cumplimiento operativo, rentabilidad y desempeño por canal, zona y tienda, con foco en que cada sucursal alcance su punto de equilibrio y genere rentabilidad propia.",
  },
];

export const administrativeProcessSummary =
  "El proceso administrativo puede reconocerse en la forma en que la empresa planifica, organiza, dirige y controla recursos, equipos y circuitos de gestión para sostener su operatoria comercial y logística.";

export const economicActors: EconomicActor[] = [
  {
    id: "familias",
    title: "Familias",
    subtitle: "Oferentes de factores y demandantes",
  },
  {
    id: "empresa",
    title: "Empresa",
    subtitle: "Familia Bercomat",
  },
  {
    id: "estado",
    title: "Estado",
    subtitle: "Regulación y gasto público",
  },
];

export const economicHubs: EconomicHub[] = [
  {
    id: "bienes-servicios",
    title: "Mercado de bienes y servicios",
    subtitle: "Circulación de bienes, servicios comerciales y consumo",
  },
  {
    id: "factores-produccion",
    title: "Mercado de factores de producción",
    subtitle: "Trabajo, capital y otros factores aplicados a la actividad",
  },
];

export const economicFlows: EconomicFlow[] = [
  {
    id: "goods-offer",
    title: "Oferta de bienes y servicios",
    description: "Flujo real desde la empresa hacia el mercado de bienes y servicios.",
  },
  {
    id: "consumption",
    title: "Consumo y gasto de los hogares",
    description: "Flujo monetario de las familias hacia el mercado de bienes y servicios.",
  },
  {
    id: "factor-offer",
    title: "Oferta de factores productivos",
    description: "Flujo real de trabajo y otros factores desde las familias al mercado de factores.",
  },
  {
    id: "remuneration",
    title: "Remuneraciones e ingresos",
    description: "Flujo monetario derivado del pago a los factores utilizados por la empresa.",
  },
  {
    id: "taxes",
    title: "Impuestos",
    description: "Flujo monetario desde familias y empresa hacia el Estado.",
  },
  {
    id: "public-spending",
    title: "Gasto público",
    description: "Reinyección del Estado hacia la economía interna y el sector.",
  },
];

export const economicFlowSteps: EconomicFlowStep[] = [
  {
    id: "oferta-factores",
    title: "1. Oferta de factores productivos",
    subtitle: "Las familias aportan trabajo al circuito económico",
    description:
      "En el caso de Familia Bercomat, las familias se vinculan con la empresa como oferentes de trabajo, permitiendo sostener funciones comerciales, logísticas, administrativas y de soporte.",
    activeActors: ["familias", "empresa"],
    activeHubs: ["factores-produccion"],
    activeFlows: ["factor-offer"],
    takeaway:
      "El circuito comienza cuando los factores productivos ingresan a la empresa y hacen posible su actividad comercial y logística.",
  },
  {
    id: "generacion-ingreso",
    title: "2. Generación y distribución del ingreso",
    subtitle: "La empresa remunera a los factores que emplea",
    description:
      "La empresa transforma esos factores en actividad económica y paga salarios y otras remuneraciones, generando ingresos que vuelven a las familias.",
    activeActors: ["empresa", "familias"],
    activeHubs: ["factores-produccion"],
    activeFlows: ["remuneration"],
    takeaway:
      "El flujo monetario aparece cuando la empresa retribuye el trabajo y convierte la producción y la comercialización en ingreso.",
  },
  {
    id: "consumo-hogares",
    title: "3. Consumo de los hogares",
    subtitle: "Las familias demandan bienes y servicios",
    description:
      "Con parte de esos ingresos, las familias demandan materiales para obra, remodelación y mejoramiento del hogar, convirtiendo el ingreso recibido en consumo dentro del mercado interno.",
    activeActors: ["familias", "empresa"],
    activeHubs: ["bienes-servicios"],
    activeFlows: ["goods-offer", "consumption"],
    takeaway:
      "El consumo cierra el vínculo principal entre hogares y empresa, porque el ingreso vuelve al circuito como demanda efectiva.",
  },
  {
    id: "tributacion",
    title: "4. Tributación y regulación",
    subtitle: "El Estado participa mediante impuestos",
    description:
      "Tanto las familias como la empresa realizan aportes al Estado a través de impuestos, mientras la actividad económica queda alcanzada por normas y regulaciones del marco institucional.",
    activeActors: ["familias", "empresa", "estado"],
    activeHubs: [],
    activeFlows: ["taxes"],
    takeaway:
      "Los impuestos representan una salida monetaria del circuito, pero forman parte del funcionamiento normal de una economía con sector público.",
  },
  {
    id: "gasto-publico",
    title: "5. Gasto público y dinamización sectorial",
    subtitle: "El Estado reinyecta recursos en la economía",
    description:
      "El Estado vuelve a intervenir mediante gasto público, infraestructura, mantenimiento, vivienda y otras acciones que pueden sostener o estimular la actividad del sector de la construcción.",
    activeActors: ["estado", "familias", "empresa"],
    activeHubs: ["bienes-servicios"],
    activeFlows: ["public-spending"],
    takeaway:
      "En una economía cerrada de tres sectores, el circuito se mantiene porque el gasto público compensa parte de las fugas asociadas al ahorro y a los impuestos.",
  },
];

export const economicModelSummary =
  "En este modelo no se incorpora sector externo: la dinámica económica se interpreta desde la relación entre familias, empresa y Estado, articulando flujo real y flujo monetario.";

export const marketStructureAssumption =
  "A efectos del análisis académico, se adopta el supuesto de competencia perfecta para interpretar el mercado de materiales para la construcción. Para simplificar el análisis de oferta y demanda, se toma como referencia el producto cerámicos para piso. Esto implica considerar una gran cantidad de compradores y vendedores, productos comparables y fuerte influencia del precio de mercado sobre las decisiones de compra y venta, aunque en la realidad el sector presenta diferencias de escala, marca, servicio y cobertura.";

export const marketStructureSides: MarketStructureSide[] = [
  {
    id: "demandantes",
    title: "Demandantes",
    subtitle: "Quiénes demandan materiales, insumos y soluciones para obra y refacción",
    icon: "bi-cart-check",
    description:
      "En el caso de Familia Bercomat, la demanda se compone principalmente por hogares, profesionales de la construcción, pequeñas constructoras, desarrolladores y clientes corporativos que adquieren productos para construir, remodelar o mantener inmuebles.",
    bullets: [
      "Familias y consumidores finales orientados a obra, ampliación y mejoramiento del hogar",
      "Profesionales, instaladores y pequeños contratistas con demanda recurrente",
      "Constructoras, desarrolladores y grandes cuentas con compras de mayor escala",
    ],
  },
  {
    id: "oferentes",
    title: "Oferentes",
    subtitle: "Empresas y comercios que colocan productos similares en el mercado",
    icon: "bi-shop",
    description:
      "Bajo este supuesto, Familia Bercomat actúa como uno de los múltiples oferentes del mercado junto a corralones, cadenas especializadas, ferreterías, comercios regionales y canales digitales que compiten por precio, disponibilidad, cobertura y servicio.",
    bullets: [
      "Corralones y distribuidores tradicionales de materiales para la construcción",
      "Cadenas especializadas con presencia regional o nacional",
      "Comercios locales, ferreterías ampliadas y oferentes digitales",
    ],
  },
];

export const marketDeterminants: MarketDeterminantGroup[] = [
  {
    id: "demanda",
    title: "Determinantes de la demanda de cerámicos para piso",
    subtitle: "Factores que modifican la cantidad demandada de este producto dentro del mercado",
    tone: "demand",
    items: [
      "Ingreso disponible y poder adquisitivo de los hogares",
      "Nivel de actividad de la construcción, ampliaciones y refacciones",
      "Acceso al crédito, cuotas y financiamiento comercial",
      "Expectativas sobre inflación, reposición futura y costo de obra",
      "Precio de sustitutos como porcelanatos, pisos vinílicos o microcemento",
      "Decisiones de inversión en vivienda y ritmo de terminaciones de obra",
    ],
  },
  {
    id: "oferta",
    title: "Determinantes de la oferta de cerámicos para piso",
    subtitle: "Factores que inciden en la capacidad de venta, reposición y disponibilidad del producto",
    tone: "supply",
    items: [
      "Costo de reposición, energía, transporte y almacenamiento",
      "Disponibilidad de proveedores y condiciones de abastecimiento",
      "Capacidad logística, stock y cobertura territorial",
      "Carga tributaria, regulaciones y costos operativos",
      "Tecnología aplicada a la gestión y a la coordinación comercial",
      "Expectativas empresariales sobre demanda futura y margen esperado",
    ],
  },
];

export const marketStructureSummary =
  "Bajo el supuesto de competencia perfecta, el mercado puede interpretarse como un espacio con numerosos demandantes y oferentes donde el precio cumple un papel central en la asignación. Aplicado al caso de los cerámicos para piso, este enfoque permite reconocer que la demanda depende del ingreso, la construcción, el crédito y las expectativas, mientras que la oferta se ve condicionada por costos, abastecimiento, logística, tecnología y regulación.";

export const macroAssumption =
  "El análisis macroeconómico se construye con datos oficiales recientes del INDEC y del BCRA, y se relaciona con hechos empresariales observables en la evolución comercial, organizativa y territorial de Familia Bercomat y UNIMACO S.A. En algunos aspectos, fuentes internas de FBM también confirman el reenfoque operativo y comercial adoptado por la compañía. La interpretación aplicada al caso es una inferencia económica a partir de esas fuentes y de supuestos razonables sobre el comportamiento del sector.";

export const macroIssues: MacroIssue[] = [
  {
    id: "inflacion",
    title: "Inflación y reposición",
    signal: "IPC nacional +2,9% mensual y +32,4% interanual en enero de 2026.",
    impact:
      "Afecta la definición de precios, la actualización de listas, la reposición de stock y la administración del capital de trabajo.",
    rationale:
      "En una empresa comercial de materiales, la inflación altera los costos de reposición y comprime márgenes si la actualización de precios no acompaña el ritmo del mercado. También modifica la conducta de compra de los clientes, que pueden adelantar consumos o postergar decisiones según sus expectativas.",
  },
  {
    id: "tipo-cambio",
    title: "Tipo de cambio y entorno bimonetario",
    signal:
      "El REM de febrero de 2026 ubicó el tipo de cambio nominal esperado en $1.429/USD para marzo y $1.707/USD para diciembre de 2026.",
    impact:
      "Incide sobre productos dolarizados o con insumos importados, expectativas de precios y decisiones de stock.",
    rationale:
      "Aunque la empresa opera localmente, parte de la cadena de abastecimiento está expuesta al valor del dólar. Variaciones cambiarias pueden trasladarse a costos, importados, sustitutos y expectativas de remarcación, especialmente en líneas metalúrgicas, sanitarias o de terminación.",
  },
  {
    id: "actividad",
    title: "Nivel de actividad de la construcción",
    signal:
      "El ISAC de enero de 2026 mostró un aumento interanual de 1,2% y una variación mensual desestacionalizada cercana a cero, con fuerte heterogeneidad entre insumos.",
    impact:
      "Condiciona el volumen de ventas y la mezcla de categorías demandadas en obra nueva, ampliación, mantenimiento y terminaciones.",
    rationale:
      "La empresa depende del dinamismo del sector. Cuando la construcción crece, mejora la rotación de materiales; cuando se estanca, la demanda se vuelve más selectiva y puede desplazarse hacia reparación, refacción y promociones por categoría.",
  },
  {
    id: "obra-publica",
    title: "Obra pública y demanda derivada",
    signal:
      "En la encuesta cualitativa del ISAC de diciembre de 2024, 21,9% de las firmas orientadas a obra pública esperaba caída de actividad; entre los factores de recuperación se destacaron reinicio de obras públicas y nuevos planes de obras públicas.",
    impact:
      "Puede reducir ventas directas al Estado y compras de contratistas, constructoras y proveedores vinculados a licitaciones y proyectos públicos.",
    rationale:
      "En el sector de materiales para la construcción, la obra pública funciona como demandante directo e indirecto. Si se desacelera la ejecución, se frenan desembolsos o se postergan proyectos, cae parte de la demanda agregada del sector y se resiente la compra de clientes corporativos o profesionales vinculados a ese circuito.",
  },
  {
    id: "credito",
    title: "Crédito, tasas y financiamiento comercial",
    signal:
      "El BCRA informó en febrero de 2026 que el crédito en pesos al sector privado se mantuvo estable en términos reales, luego de dos meses de expansión, con crecimiento interanual cercano al 19,8%.",
    impact:
      "Afecta la capacidad de compra de hogares y profesionales, y vuelve estratégica la financiación propia o acordada con bancos y tarjetas.",
    rationale:
      "En bienes para construcción, una parte importante de la demanda depende de cuotas, préstamos o financiamiento comercial. Si el crédito se encarece o se frena, la empresa debe compensar con promociones, acuerdos financieros y herramientas comerciales para sostener volumen.",
  },
];

export const companySignals: CompanySignal[] = [
  {
    year: "2023-2024",
    title: "Expansión en Buenos Aires",
    detail:
      "Familia Bercomat inauguró el Centro de la Construcción en Don Torcuato, con una inversión difundida públicamente de $800 millones y la expectativa de seguir expandiendo presencia en Buenos Aires.",
  },
  {
    year: "2024",
    title: "Caída sectorial y foco en sustentabilidad",
    detail:
      "Puede inferirse un contexto de fuerte tensión sobre ventas y resultados, coherente con el deterioro sectorial, la necesidad de equilibrar cuentas y la priorización de medidas orientadas a sostener la sustentabilidad de la compañía.",
  },
  {
    year: "2024-2025",
    title: "Reenfoque estratégico y cierre de Keracasa",
    detail:
      "La retracción del formato Keracasa, el menor impulso expansivo en Buenos Aires y la concentración de recursos en FBM sugieren un reenfoque hacia mercados históricamente más sólidos y una asignación más conservadora del capital comercial; fuentes internas de FBM respaldan esa interpretación.",
  },
  {
    year: "2025",
    title: "Recuperación comercial y disciplina de rentabilidad",
    detail:
      "La evidencia operativa es consistente con una estrategia de mayor disciplina comercial: mejora de márgenes, concentración en clientes relevantes, recupero de fletes, marketing local, negociación con proveedores y fortalecimiento de los planes de financiación, lineamientos que también aparecen confirmados por fuentes internas de FBM.",
  },
  {
    year: "2026",
    title: "Comité de Gestión Operativa y cambio de sistema",
    detail:
      "La conformación de un Comité de Gestión Operativa y la revisión del sistema de ventas muestran una búsqueda de mayor velocidad decisoria, control de costos y eficiencia de procesos en un entorno exigente, extremo que también es confirmado por fuentes internas de FBM.",
  },
];

export const macroSummary =
  "La macroeconomía afecta de manera directa a Familia Bercomat porque su negocio combina venta minorista, abastecimiento, logística y financiamiento comercial dentro de un sector altamente sensible al ingreso, la inflación, el crédito, la actividad de la construcción y la dinámica de la obra pública. La evolución reciente de la empresa sugiere respuestas concretas a ese contexto: cierres y reenfoques, priorización de mercados históricos, disciplina de rentabilidad, financiamiento comercial, cambios organizativos y revisión de sistemas para mejorar eficiencia.";

export const accountingStructure: AccountingStructureItem[] = [
  {
    id: "bienes",
    title: "Bienes",
    subtitle: "Recursos aplicados de forma directa a la operatoria",
    description:
      "Comprenden mercaderías destinadas a la venta, stock distribuido en tiendas y depósitos, disponibilidades, equipamiento operativo, instalaciones y otros bienes de uso necesarios para sostener la actividad comercial y logística.",
  },
  {
    id: "derechos",
    title: "Derechos",
    subtitle: "Créditos y saldos a favor de la empresa",
    description:
      "Se reflejan principalmente en las cuentas por cobrar a clientes, ventas financiadas, saldos pendientes de cancelación y otros créditos originados en operaciones comerciales.",
  },
  {
    id: "obligaciones",
    title: "Obligaciones",
    subtitle: "Fuentes ajenas de financiamiento operativo",
    description:
      "Incluyen deudas con proveedores, compromisos fiscales y laborales, saldos a cancelar con entidades financieras y otras obligaciones vinculadas al giro normal de la empresa.",
  },
];

export const accountingStructureSummary =
  "Fuentes internas de FBM y evidencia relevada en SAP productivo muestran una composición patrimonial apoyada en casi 97 mil materiales, stock valorizado, cuentas de clientes, maestro de proveedores y documentación contable de gran escala, rasgos consistentes con una empresa comercial de gran tamaño.";

export const accountingNetWorth =
  "De acuerdo con su forma jurídica, el patrimonio neto se expresa formalmente en los estados contables de una sociedad anónima. En ese marco, se integra por el capital social, las reservas, los resultados acumulados y el resultado del ejercicio, reflejando la participación residual de los propietarios una vez deducidas todas las obligaciones frente a terceros.";

export const accountingEvents: AccountingEvent[] = [
  {
    id: "compra",
    title: "Compra de mercadería",
    documents:
      "Orden de compra, factura del proveedor, remito y comprobante de pago o recibo, según corresponda.",
    effect:
      "Aumenta el stock de mercaderías y, simultáneamente, aumenta el pasivo con proveedores o disminuyen las disponibilidades si la operación se cancela al contado.",
  },
  {
    id: "venta",
    title: "Venta de productos",
    documents:
      "Factura o ticket fiscal, remito de entrega y recibo o comprobante de cobranza.",
    effect:
      "Disminuye el stock, aumenta caja o bancos o cuentas por cobrar y se genera el resultado derivado de la operación.",
  },
];

export const accountingEventsSummary =
  "Fuentes internas de FBM muestran trazabilidad entre la facturación, los movimientos de clientes y la registración de cobranzas, lo que permite vincular la operación comercial con su efecto contable.";

export const accountingControl =
  "Un control contable especialmente aplicable a la organización es el recuento cíclico de inventarios en tiendas y depósitos. El procedimiento consiste en comparar el stock físico de determinadas líneas o ubicaciones con el stock registrado, identificar diferencias, analizarlas y autorizar los ajustes correspondientes. En una empresa multisucursal con alto volumen de artículos, este control permite resguardar bienes, reducir pérdidas, mejorar la confiabilidad del inventario y respaldar decisiones comerciales y logísticas.";

export const accountingSIC =
  "El Sistema de Información Contable es clave porque integra ventas, facturación, cuentas por cobrar, inventarios, deudas con proveedores, cobranzas y registración financiera en una misma lógica de control. Para una organización como Familia Bercomat, el SIC no solo cumple una función legal e impositiva, sino que también aporta información para fijar precios, evaluar márgenes, administrar liquidez, controlar el capital de trabajo y medir la rentabilidad por tienda, zona o canal. En este sentido, su valor principal radica en transformar operaciones dispersas en información útil para la toma de decisiones.";

export const structureHighlights = [
  {
    title: "Estructura formal",
    text: "Se distinguen áreas como Comercial, Planeamiento y Categorías, Soporte, Operaciones y Finanzas, Cadena de Suministros, Legales y Auditoría.",
  },
  {
    title: "Transformación Digital",
    text: "No se limita al soporte operativo: la compañía la utiliza para desarrollar herramientas, procesos y productos propios orientados a mejorar la experiencia del cliente y la operación.",
  },
  {
    title: "Recursos Humanos",
    text: "Además de administrar personal, participa en comunicación interna, acompañamiento organizacional y articulación entre equipos.",
  },
];

export const cycleStages: CycleStage[] = [
  {
    id: "abastecimiento",
    title: "1. Abastecimiento y reposición",
    subtitle: "Planificación del surtido y negociación comercial",
    description:
      "La fase inicial comprende la selección de proveedores, definición de condiciones comerciales y reposición de productos para sostener la oferta disponible.",
    roles: ["Compras", "Planeamiento del surtido", "Análisis comercial"],
  },
  {
    id: "recepcion",
    title: "2. Recepción, almacenamiento y control",
    subtitle: "Ingreso y disponibilidad de mercadería",
    description:
      "Una vez recibida la mercadería, la organización verifica, almacena y controla existencias para asegurar disponibilidad en depósitos y sucursales.",
    roles: ["Operarios", "Administración de depósito", "Inventario"],
  },
  {
    id: "ventas",
    title: "3. Comercialización y cierre de ventas",
    subtitle: "Asesoramiento, cotización y atención",
    description:
      "La etapa comercial articula vendedores, grandes cuentas, jefaturas y cajas para transformar disponibilidad de producto en operaciones concretas.",
    roles: ["Ventas de salón", "Grandes cuentas", "Cajas y atención"],
  },
  {
    id: "logistica",
    title: "4. Preparación, distribución y entrega",
    subtitle: "Salida de mercadería y traslado al cliente",
    description:
      "Después de la venta se organiza el armado de pedidos, la coordinación logística y la distribución hacia el cliente final.",
    roles: ["Transporte", "Distribución", "Entrega"],
  },
  {
    id: "cobranza",
    title: "5. Cobranza y registración administrativa",
    subtitle: "Facturación, tesorería y control",
    description:
      "La organización asegura el cierre administrativo y financiero mediante procesos de facturación, cobranza, tesorería y seguimiento de cuentas.",
    roles: ["Administración", "Tesorería", "Control financiero"],
  },
  {
    id: "postventa",
    title: "6. Postventa y retroalimentación",
    subtitle: "Consultas, reclamos y mejora",
    description:
      "El circuito se completa con la atención posterior a la venta, resolución de reclamos y devoluciones, y aprendizaje para la mejora continua.",
    roles: ["Servicio al cliente", "Postventa", "Control y mejora"],
  },
];

export const conclusionSummary =
  "El caso de Familia Bercomat permite comprender que la sustentabilidad de una empresa comercial grande y multisucursal no depende de un único factor, sino de la articulación entre estrategia, operación, entorno económico y control contable.";

export const conclusions = [
  "Familia Bercomat se presenta como una organización comercial grande, familiar y multisucursal, cuya competitividad depende de coordinar surtido, cobertura territorial, estructura humana, logística y soporte administrativo.",
  "El análisis mostró que su desempeño está fuertemente condicionado por el contexto: inflación, crédito, tipo de cambio, obra pública, competencia por región y cambios en las formas de construir obligan a revisar precios, márgenes, stock y posicionamiento.",
  "Desde la perspectiva contable y de gestión, el control de inventarios, las cuentas por cobrar, las obligaciones con proveedores y el Sistema de Información Contable resultan decisivos para sostener liquidez, medir rentabilidad por tienda, zona y canal, y transformar la operación diaria en información útil para decidir.",
];
