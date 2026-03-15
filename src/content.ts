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
  faculty: "Facultad de Ciencias Economicas",
  subject: "Area Integrada I / Introduccion a las Ciencias Economicas",
  title: "Trabajo Integrador Final",
  subtitle:
    "Caracterizacion y analisis integral de Familia Bercomat desde las areas de Administracion, Economia y Contabilidad",
};

export const metrics: Metric[] = [
  {
    label: "SKU relevados",
    value: 97,
    suffix: " mil",
    description: "Catalogo amplio para construccion, remodelacion y equipamiento del hogar.",
  },
  {
    label: "Categorias",
    value: 520,
    prefix: "+",
    description: "Oferta diversificada con logicas distintas de reposicion y exhibicion.",
  },
  {
    label: "Proveedores",
    value: 600,
    prefix: "~",
    description: "Red amplia de abastecimiento y negociacion comercial.",
  },
  {
    label: "Empleados activos",
    value: 750,
    prefix: "+",
    description: "Estructura humana distribuida entre areas comerciales, logisticas y de soporte.",
  },
];

export const operationalSummary = {
  intro:
    "Familia Bercomat se posiciona como una organizacion comercial regional con fuerte especializacion en materiales para la construccion, remodelacion y mejoramiento del hogar. Su estructura combina amplitud de surtido, cobertura geografica, gestion multisucursal y una operatoria que integra funciones comerciales, logisticas, financieras y de soporte.",
  market:
    "La empresa participa en un mercado sensible al nivel de actividad de la construccion, al financiamiento, a los costos y al poder adquisitivo de los hogares. Su diferenciacion se apoya en escala, cobertura regional, variedad de oferta y capacidad para articular atencion presencial con canales comerciales complementarios.",
};

export const identity = {
  mission:
    "Brindar una oferta integral de materiales, productos y servicios asociados a la construccion y al mejoramiento del hogar, con cercania, disponibilidad y acompanamiento comercial.",
  vision:
    "Consolidarse como una organizacion atractiva y exitosa dentro de la region, fortaleciendo su presencia, su propuesta de valor y su capacidad de innovacion.",
  values: ["Seriedad", "Cercania", "Compromiso", "Humildad", "Trabajo en equipo"],
};

export const zones: Zone[] = [
  {
    id: "colorada",
    title: "Zona Colorada",
    provinces: ["Misiones"],
    summary:
      "Zona asociada a la presencia historica de la firma y a la consolidacion territorial del negocio en el NEA.",
    focus: "Concentracion comercial y articulacion entre sucursales y logistica regional.",
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
    focus: "Dinamica comercial intensiva, desarrollo y canales complementarios.",
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
      "Region con importancia para el despliegue de sucursales, logistica y articulacion comercial de proximidad.",
    focus: "Gerenciamiento territorial, grandes cuentas y coordinacion interprovincial.",
    lat: -27.45,
    lng: -58.98,
    zoom: 6,
    color: "#7a9e9f",
  },
  {
    id: "verde",
    title: "Zona Verde",
    provinces: ["Entre Rios", "Santa Fe"],
    summary:
      "Area de relevancia para ventas, operacion y relacion con nodos logistica de la region centro.",
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
    text: "Familias, profesionales, pequenas constructoras, desarrolladores y clientes de grandes cuentas participan con necesidades heterogeneas de surtido, precio, financiamiento y servicio.",
  },
  {
    title: "Oferta",
    text: "La competencia incluye corralones tradicionales, cadenas especializadas, comercios regionales y canales digitales, en un entorno de fuerte sensibilidad al contexto macroeconomico.",
  },
  {
    title: "Diferenciacion",
    text: "La amplitud del catalogo, la cobertura regional, la estructura comercial y la coordinacion logistica permiten sostener una propuesta de valor mas robusta.",
  },
];

export const productiveFactors: ProductiveFactor[] = [
  {
    id: "tierra",
    title: "Tierra",
    icon: "bi-geo-alt",
    classification: "Base fisica y territorial",
    description:
      "Comprende sucursales, depositos, centros de distribucion, espacios de atencion y localizaciones estrategicas que permiten sostener la cobertura regional de la empresa.",
  },
  {
    id: "trabajo",
    title: "Trabajo",
    icon: "bi-people",
    classification: "Estructura humana y organizacional",
    description:
      "Se expresa en la participacion de vendedores, operarios, administrativos, jefaturas, gerencias y areas de soporte que articulan el funcionamiento comercial y logistico.",
  },
  {
    id: "capital",
    title: "Capital",
    icon: "bi-building",
    classification: "Capital fijo y circulante",
    description:
      "Incluye infraestructura, equipamiento, vehiculos, mobiliario, stock de mercaderias y recursos financieros aplicados al sostenimiento de la operatoria diaria.",
  },
  {
    id: "tecnologia",
    title: "Tecnologia",
    icon: "bi-cpu",
    classification: "Herramientas, informacion e innovacion",
    description:
      "Interviene en inventarios, coordinacion comercial, administracion de informacion y canales digitales, con una apuesta creciente al desarrollo de soluciones propias.",
  },
];

export const productiveFactorsSummary =
  "La combinacion de tierra, trabajo, capital y tecnologia permite explicar la capacidad operativa de Familia Bercomat para sostener una oferta amplia, coordinar procesos y atender un mercado regional con multiples sucursales y funciones interdependientes.";

export const administrationClassification: AdministrationClassificationItem[] = [
  {
    id: "privada",
    title: "Empresa privada",
    icon: "bi-briefcase",
    classification: "Segun propiedad y finalidad",
    description:
      "Se encuadra como empresa privada porque su capital y su direccion pertenecen al ambito no estatal, y su actividad se orienta a la obtencion de resultados economicos positivos.",
  },
  {
    id: "comercial",
    title: "Sector terciario o comercial",
    icon: "bi-shop-window",
    classification: "Segun actividad economica",
    description:
      "Su funcion principal no es extraer ni transformar materias primas, sino comercializar materiales, articulos y servicios asociados a la construccion, la remodelacion y el mejoramiento del hogar.",
  },
  {
    id: "grande",
    title: "Empresa grande",
    icon: "bi-building",
    classification: "Segun tamano",
    description:
      "La magnitud del catalogo, la estructura multisucursal y una dotacion superior a setecientos empleados permiten ubicarla dentro de la categoria de empresa grande.",
  },
  {
    id: "nacional",
    title: "Capital nacional y alcance nacional",
    icon: "bi-geo-alt",
    classification: "Segun origen del capital y alcance geografico",
    description:
      "La firma responde a capital nacional y desarrolla operaciones en distintas provincias argentinas, con fuerte implantacion regional y presencia en varios mercados del pais.",
  },
  {
    id: "juridica",
    title: "Sociedad anonima",
    icon: "bi-file-earmark-text",
    classification: "Segun forma juridica",
    description:
      "La organizacion opera bajo la razon social UNIMACO S.A., por lo que corresponde clasificarla como una sociedad anonima dentro de las formas empresariales colegiadas.",
  },
  {
    id: "familiar",
    title: "Empresa familiar",
    icon: "bi-people",
    classification: "Segun composicion y trayectoria",
    description:
      "Su historia institucional, su identidad corporativa y la continuidad generacional permiten reconocerla como una empresa familiar con desarrollo profesionalizado.",
  },
];

export const administrationClassificationSummary =
  "Tomando los criterios trabajados en clase, Familia Bercomat puede clasificarse como una empresa privada, familiar, grande, del sector terciario o comercial, de capital nacional, con forma juridica de sociedad anonima y con alcance nacional de fuerte desarrollo regional.";

export const administrationEnvironment: AdministrationEnvironmentItem[] = [
  {
    id: "clientes",
    title: "Clientes",
    icon: "bi-people",
    classification: "Demandantes del entorno cercano",
    description:
      "La empresa atiende a hogares y consumidores finales que construyen, amplian o refaccionan; tambien a profesionales, instaladores, pequenos contratistas, constructoras, desarrolladores y clientes corporativos. La oferta mayorista y las acciones de formacion muestran que no se dirige a un unico perfil de comprador, sino a segmentos diversos con necesidades de precio, asesoramiento, volumen y servicio.",
  },
  {
    id: "competidores",
    title: "Competidores",
    icon: "bi-shop-window",
    classification: "Rivales directos e indirectos",
    description:
      "La competencia no es homogenea en todas las plazas. En la zona amarilla, y especialmente en Buenos Aires, la presion competitiva es mayor por la presencia de homecenters, cadenas especializadas, corralones de escala y canales digitales. En las zonas blanca, verde y colorada, en cambio, pesan mas los corralones regionales, distribuidores provinciales y comercios de cercania con fuerte conocimiento del mercado local. En determinados productos tambien aparecen competidores de menor escala, con estructuras mas livianas e incluso distintos grados de formalidad, que pueden ofrecer precios mas bajos y tensionar los margenes de una empresa mas grande y estructurada.",
  },
  {
    id: "proveedores",
    title: "Proveedores",
    icon: "bi-truck",
    classification: "Abastecimiento y negociacion comercial",
    description:
      "Fuentes internas de FBM muestran que el catalogo comercial se apoya en una red cercana a seiscientos proveedores, integrada por fabricantes, distribuidores e importadores de materiales, sanitarios, griferias, aberturas, pinturas, revestimientos, productos metalurgicos y articulos complementarios. Su disponibilidad y condiciones comerciales inciden de forma directa sobre costos, reposicion y margen.",
  },
  {
    id: "sustitutos",
    title: "Productos sustitutos",
    icon: "bi-arrow-left-right",
    classification: "Alternativas para satisfacer una misma necesidad",
    description:
      "Los sustitutos no son solo otras empresas, sino soluciones alternativas dentro del rubro: construccion en seco y steel frame frente a obra humeda tradicional, PVC o aluminio frente a madera, porcelanatos frente a ceramicas u otras terminaciones, y propuestas prefabricadas o modulares frente a esquemas constructivos convencionales. Estos cambios alteran la composicion de la demanda y la mezcla de categorias vendidas.",
  },
];

export const administrationEnvironmentSummary =
  "El entorno inmediato de Familia Bercomat esta compuesto por clientes heterogeneos, competidores cuyo peso cambia segun la region, una red amplia de proveedores respaldada por informacion interna y productos sustitutos que obligan a revisar permanentemente surtido, servicio, precios y posicionamiento comercial.";

export const pestelCriticalItems: PestelItem[] = [
  {
    id: "economica",
    title: "Variable economica",
    subtitle: "Inflacion, financiamiento, actividad de la construccion y poder adquisitivo",
    impact:
      "Es critica porque modifica el volumen de obra, la reposicion, el precio de venta, la rotacion del stock y la decision de compra de hogares, profesionales y empresas.",
  },
  {
    id: "tecnologica",
    title: "Variable tecnologica",
    subtitle: "Digitalizacion comercial, integracion de sistemas y desarrollo de herramientas propias",
    impact:
      "Resulta central porque condiciona la experiencia del cliente, la eficiencia de procesos, la trazabilidad de la informacion y la capacidad de competir con canales online y formatos omnicanal.",
  },
  {
    id: "politico-legal",
    title: "Variable politico-legal",
    subtitle: "Carga tributaria, normativa laboral, regulacion comercial y politica publica sectorial",
    impact:
      "Afecta costos, cumplimiento, estructura operativa y demanda agregada, especialmente cuando existen cambios impositivos, regulatorios o variaciones en la dinamica de la obra publica.",
  },
];

export const pestelSummary =
  "Siguiendo el enfoque PESTEL, las variables economica, tecnologica y politico-legal aparecen como las mas criticas para el rubro porque atraviesan de manera simultanea la demanda, los costos, la organizacion del trabajo, el abastecimiento y la competitividad de la empresa.";

export const administrativeProcessStages: AdministrativeProcessStage[] = [
  {
    id: "planificacion",
    title: "Planificacion",
    description:
      "Se observa en la definicion de objetivos comerciales, campanas, politicas de margen, metas de venta y decisiones de abastecimiento.",
  },
  {
    id: "organizacion",
    title: "Organizacion",
    description:
      "Se expresa en la division por areas, zonas, sucursales, jefaturas y circuitos de trabajo articulados entre lo comercial, lo logistico y lo administrativo.",
  },
  {
    id: "direccion",
    title: "Direccion",
    description:
      "Aparece en la coordinacion de equipos, la comunicacion institucional, el liderazgo de gerencias y la orientacion operativa hacia resultados.",
  },
  {
    id: "control",
    title: "Control",
    description:
      "Se refleja en el seguimiento de indicadores, inventarios, cobranzas, cumplimiento operativo, rentabilidad y desempeno por canal, zona y tienda, con foco en que cada sucursal alcance su punto de equilibrio y genere rentabilidad propia.",
  },
];

export const administrativeProcessSummary =
  "El proceso administrativo puede reconocerse en la forma en que la empresa planifica, organiza, dirige y controla recursos, equipos y circuitos de gestion para sostener su operatoria comercial y logistica.";

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
    subtitle: "Regulacion y gasto publico",
  },
];

export const economicHubs: EconomicHub[] = [
  {
    id: "bienes-servicios",
    title: "Mercado de bienes y servicios",
    subtitle: "Circulacion de bienes, servicios comerciales y consumo",
  },
  {
    id: "factores-produccion",
    title: "Mercado de factores de produccion",
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
    title: "Gasto publico",
    description: "Reinyeccion del Estado hacia la economia interna y el sector.",
  },
];

export const economicFlowSteps: EconomicFlowStep[] = [
  {
    id: "oferta-factores",
    title: "1. Oferta de factores productivos",
    subtitle: "Las familias aportan trabajo al circuito economico",
    description:
      "En el caso de Familia Bercomat, las familias se vinculan con la empresa como oferentes de trabajo, permitiendo sostener funciones comerciales, logisticas, administrativas y de soporte.",
    activeActors: ["familias", "empresa"],
    activeHubs: ["factores-produccion"],
    activeFlows: ["factor-offer"],
    takeaway:
      "El circuito comienza cuando los factores productivos ingresan a la empresa y hacen posible su actividad comercial y logistica.",
  },
  {
    id: "generacion-ingreso",
    title: "2. Generacion y distribucion del ingreso",
    subtitle: "La empresa remunera a los factores que emplea",
    description:
      "La empresa transforma esos factores en actividad economica y paga salarios y otras remuneraciones, generando ingresos que vuelven a las familias.",
    activeActors: ["empresa", "familias"],
    activeHubs: ["factores-produccion"],
    activeFlows: ["remuneration"],
    takeaway:
      "El flujo monetario aparece cuando la empresa retribuye el trabajo y convierte la produccion y la comercializacion en ingreso.",
  },
  {
    id: "consumo-hogares",
    title: "3. Consumo de los hogares",
    subtitle: "Las familias demandan bienes y servicios",
    description:
      "Con parte de esos ingresos, las familias demandan materiales para obra, remodelacion y mejoramiento del hogar, convirtiendo el ingreso recibido en consumo dentro del mercado interno.",
    activeActors: ["familias", "empresa"],
    activeHubs: ["bienes-servicios"],
    activeFlows: ["goods-offer", "consumption"],
    takeaway:
      "El consumo cierra el vinculo principal entre hogares y empresa, porque el ingreso vuelve al circuito como demanda efectiva.",
  },
  {
    id: "tributacion",
    title: "4. Tributacion y regulacion",
    subtitle: "El Estado participa mediante impuestos",
    description:
      "Tanto las familias como la empresa realizan aportes al Estado a traves de impuestos, mientras la actividad economica queda alcanzada por normas y regulaciones del marco institucional.",
    activeActors: ["familias", "empresa", "estado"],
    activeHubs: [],
    activeFlows: ["taxes"],
    takeaway:
      "Los impuestos representan una salida monetaria del circuito, pero forman parte del funcionamiento normal de una economia con sector publico.",
  },
  {
    id: "gasto-publico",
    title: "5. Gasto publico y dinamizacion sectorial",
    subtitle: "El Estado reinyecta recursos en la economia",
    description:
      "El Estado vuelve a intervenir mediante gasto publico, infraestructura, mantenimiento, vivienda y otras acciones que pueden sostener o estimular la actividad del sector de la construccion.",
    activeActors: ["estado", "familias", "empresa"],
    activeHubs: ["bienes-servicios"],
    activeFlows: ["public-spending"],
    takeaway:
      "En una economia cerrada de tres sectores, el circuito se mantiene porque el gasto publico compensa parte de las fugas asociadas al ahorro y a los impuestos.",
  },
];

export const economicModelSummary =
  "En este modelo no se incorpora sector externo: la dinamica economica se interpreta desde la relacion entre familias, empresa y Estado, articulando flujo real y flujo monetario.";

export const marketStructureAssumption =
  "A efectos del analisis academico, se adopta el supuesto de competencia perfecta para interpretar el mercado de materiales para la construccion. Esto implica considerar una gran cantidad de compradores y vendedores, productos comparables y fuerte influencia del precio de mercado sobre las decisiones de compra y venta, aunque en la realidad el sector presenta diferencias de escala, marca, servicio y cobertura.";

export const marketStructureSides: MarketStructureSide[] = [
  {
    id: "demandantes",
    title: "Demandantes",
    subtitle: "Quienes demandan materiales, insumos y soluciones para obra y refaccion",
    icon: "bi-cart-check",
    description:
      "En el caso de Familia Bercomat, la demanda se compone principalmente por hogares, profesionales de la construccion, pequenas constructoras, desarrolladores y clientes corporativos que adquieren productos para construir, remodelar o mantener inmuebles.",
    bullets: [
      "Familias y consumidores finales orientados a obra, ampliacion y mejoramiento del hogar",
      "Profesionales, instaladores y pequenos contratistas con demanda recurrente",
      "Constructoras, desarrolladores y grandes cuentas con compras de mayor escala",
    ],
  },
  {
    id: "oferentes",
    title: "Oferentes",
    subtitle: "Empresas y comercios que colocan productos similares en el mercado",
    icon: "bi-shop",
    description:
      "Bajo este supuesto, Familia Bercomat actua como uno de los multiples oferentes del mercado junto a corralones, cadenas especializadas, ferreterias, comercios regionales y canales digitales que compiten por precio, disponibilidad, cobertura y servicio.",
    bullets: [
      "Corralones y distribuidores tradicionales de materiales para la construccion",
      "Cadenas especializadas con presencia regional o nacional",
      "Comercios locales, ferreterias ampliadas y oferentes digitales",
    ],
  },
];

export const marketDeterminants: MarketDeterminantGroup[] = [
  {
    id: "demanda",
    title: "Determinantes de la demanda",
    subtitle: "Factores que modifican la cantidad demandada de materiales y productos asociados",
    tone: "demand",
    items: [
      "Ingreso disponible y poder adquisitivo de los hogares",
      "Nivel de actividad de la construccion y de las refacciones",
      "Acceso al credito, cuotas y financiamiento comercial",
      "Expectativas sobre inflacion, reposicion futura y costo de obra",
      "Precio de bienes sustitutos y complementarios",
      "Estacionalidad, mantenimiento y decisiones de inversion en vivienda",
    ],
  },
  {
    id: "oferta",
    title: "Determinantes de la oferta",
    subtitle: "Factores que inciden en la capacidad de venta y reposicion de los oferentes",
    tone: "supply",
    items: [
      "Costo de reposicion, insumos, energia y transporte",
      "Disponibilidad de proveedores y condiciones de abastecimiento",
      "Capacidad logistica, stock y cobertura territorial",
      "Tecnologia aplicada a la gestion, coordinacion y productividad",
      "Carga tributaria, regulaciones y costos operativos",
      "Expectativas empresariales sobre demanda futura y margen esperado",
    ],
  },
];

export const marketStructureSummary =
  "Bajo el supuesto de competencia perfecta, el mercado puede interpretarse como un espacio con numerosos demandantes y oferentes donde el precio cumple un papel central en la asignacion. Aplicado a Familia Bercomat, este enfoque permite reconocer que la demanda depende del ingreso, la construccion, el credito y las expectativas, mientras que la oferta se ve condicionada por costos, abastecimiento, logistica, tecnologia y regulacion.";

export const macroAssumption =
  "El analisis macroeconomico se construye con datos oficiales recientes del INDEC y del BCRA, y se relaciona con hechos empresariales observables en la evolucion comercial, organizativa y territorial de Familia Bercomat y UNIMACO S.A. En algunos aspectos, fuentes internas de FBM tambien confirman el reenfoque operativo y comercial adoptado por la compania. La interpretacion aplicada al caso es una inferencia economica a partir de esas fuentes y de supuestos razonables sobre el comportamiento del sector.";

export const macroIssues: MacroIssue[] = [
  {
    id: "inflacion",
    title: "Inflacion y reposicion",
    signal: "IPC nacional +2,9% mensual y +32,4% interanual en enero de 2026.",
    impact:
      "Afecta la definicion de precios, la actualizacion de listas, la reposicion de stock y la administracion del capital de trabajo.",
    rationale:
      "En una empresa comercial de materiales, la inflacion altera los costos de reposicion y comprime margenes si la actualizacion de precios no acompana el ritmo del mercado. Tambien modifica la conducta de compra de los clientes, que pueden adelantar consumos o postergar decisiones segun sus expectativas.",
  },
  {
    id: "tipo-cambio",
    title: "Tipo de cambio y entorno bimonetario",
    signal:
      "El REM de febrero de 2026 ubico el tipo de cambio nominal esperado en $1.429/USD para marzo y $1.707/USD para diciembre de 2026.",
    impact:
      "Incide sobre productos dolarizados o con insumos importados, expectativas de precios y decisiones de stock.",
    rationale:
      "Aunque la empresa opera localmente, parte de la cadena de abastecimiento esta expuesta al valor del dolar. Variaciones cambiarias pueden trasladarse a costos, importados, sustitutos y expectativas de remarcacion, especialmente en lineas metalurgicas, sanitarias o de terminacion.",
  },
  {
    id: "actividad",
    title: "Nivel de actividad de la construccion",
    signal:
      "El ISAC de enero de 2026 mostro un aumento interanual de 1,2% y una variacion mensual desestacionalizada cercana a cero, con fuerte heterogeneidad entre insumos.",
    impact:
      "Condiciona el volumen de ventas y la mezcla de categorias demandadas en obra nueva, ampliacion, mantenimiento y terminaciones.",
    rationale:
      "La empresa depende del dinamismo del sector. Cuando la construccion crece, mejora la rotacion de materiales; cuando se estanca, la demanda se vuelve mas selectiva y puede desplazarse hacia reparacion, refaccion y promociones por categoria.",
  },
  {
    id: "obra-publica",
    title: "Obra publica y demanda derivada",
    signal:
      "En la encuesta cualitativa del ISAC de diciembre de 2024, 21,9% de las firmas orientadas a obra publica esperaba caida de actividad; entre los factores de recuperacion se destacaron reinicio de obras publicas y nuevos planes de obras publicas.",
    impact:
      "Puede reducir ventas directas al Estado y compras de contratistas, constructoras y proveedores vinculados a licitaciones y proyectos publicos.",
    rationale:
      "En el sector de materiales para la construccion, la obra publica funciona como demandante directo e indirecto. Si se desacelera la ejecucion, se frenan desembolsos o se postergan proyectos, cae parte de la demanda agregada del sector y se resiente la compra de clientes corporativos o profesionales vinculados a ese circuito.",
  },
  {
    id: "credito",
    title: "Credito, tasas y financiamiento comercial",
    signal:
      "El BCRA informo en febrero de 2026 que el credito en pesos al sector privado se mantuvo estable en terminos reales, luego de dos meses de expansion, con crecimiento interanual cercano al 19,8%.",
    impact:
      "Afecta la capacidad de compra de hogares y profesionales, y vuelve estrategica la financiacion propia o acordada con bancos y tarjetas.",
    rationale:
      "En bienes para construccion, una parte importante de la demanda depende de cuotas, prestamos o financiamiento comercial. Si el credito se encarece o se frena, la empresa debe compensar con promociones, acuerdos financieros y herramientas comerciales para sostener volumen.",
  },
];

export const companySignals: CompanySignal[] = [
  {
    year: "2023-2024",
    title: "Expansion en Buenos Aires",
    detail:
      "Familia Bercomat inauguro el Centro de la Construccion en Don Torcuato, con una inversion difundida publicamente de $800 millones y la expectativa de seguir expandiendo presencia en Buenos Aires.",
  },
  {
    year: "2024",
    title: "Caida sectorial y foco en sustentabilidad",
    detail:
      "Puede inferirse un contexto de fuerte tension sobre ventas y resultados, coherente con el deterioro sectorial, la necesidad de equilibrar cuentas y la priorizacion de medidas orientadas a sostener la sustentabilidad de la compania.",
  },
  {
    year: "2024-2025",
    title: "Reenfoque estrategico y cierre de Keracasa",
    detail:
      "La retraccion del formato Keracasa, el menor impulso expansivo en Buenos Aires y la concentracion de recursos en FBM sugieren un reenfoque hacia mercados historicamente mas solidos y una asignacion mas conservadora del capital comercial; fuentes internas de FBM respaldan esa interpretacion.",
  },
  {
    year: "2025",
    title: "Recuperacion comercial y disciplina de rentabilidad",
    detail:
      "La evidencia operativa es consistente con una estrategia de mayor disciplina comercial: mejora de margenes, concentracion en clientes relevantes, recupero de fletes, marketing local, negociacion con proveedores y fortalecimiento de los planes de financiacion, lineamientos que tambien aparecen confirmados por fuentes internas de FBM.",
  },
  {
    year: "2026",
    title: "Comite de Gestion Operativa y cambio de sistema",
    detail:
      "La conformacion de un Comite de Gestion Operativa y la revision del sistema de ventas muestran una busqueda de mayor velocidad decisoria, control de costos y eficiencia de procesos en un entorno exigente, extremo que tambien es confirmado por fuentes internas de FBM.",
  },
];

export const macroSummary =
  "La macroeconomia afecta de manera directa a Familia Bercomat porque su negocio combina venta minorista, abastecimiento, logistica y financiamiento comercial dentro de un sector altamente sensible al ingreso, la inflacion, el credito, la actividad de la construccion y la dinamica de la obra publica. La evolucion reciente de la empresa sugiere respuestas concretas a ese contexto: cierres y reenfoques, priorizacion de mercados historicos, disciplina de rentabilidad, financiamiento comercial, cambios organizativos y revision de sistemas para mejorar eficiencia.";

export const accountingStructure: AccountingStructureItem[] = [
  {
    id: "bienes",
    title: "Bienes",
    subtitle: "Recursos aplicados de forma directa a la operatoria",
    description:
      "Comprenden mercaderias destinadas a la venta, stock distribuido en tiendas y depositos, disponibilidades, equipamiento operativo, instalaciones y otros bienes de uso necesarios para sostener la actividad comercial y logistica.",
  },
  {
    id: "derechos",
    title: "Derechos",
    subtitle: "Creditos y saldos a favor de la empresa",
    description:
      "Se reflejan principalmente en las cuentas por cobrar a clientes, ventas financiadas, saldos pendientes de cancelacion y otros creditos originados en operaciones comerciales.",
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
  "Fuentes internas de FBM y evidencia relevada en SAP productivo muestran una composicion patrimonial apoyada en casi 97 mil materiales, stock valorizado, cuentas de clientes, maestro de proveedores y documentacion contable de gran escala, rasgos consistentes con una empresa comercial de gran tamano.";

export const accountingNetWorth =
  "De acuerdo con su forma juridica, el patrimonio neto se expresa formalmente en los estados contables de una sociedad anonima. En ese marco, se integra por el capital social, las reservas, los resultados acumulados y el resultado del ejercicio, reflejando la participacion residual de los propietarios una vez deducidas todas las obligaciones frente a terceros.";

export const accountingEvents: AccountingEvent[] = [
  {
    id: "compra",
    title: "Compra de mercaderia",
    documents:
      "Orden de compra, factura del proveedor, remito y comprobante de pago o recibo, segun corresponda.",
    effect:
      "Aumenta el stock de mercaderias y, simultaneamente, aumenta el pasivo con proveedores o disminuyen las disponibilidades si la operacion se cancela al contado.",
  },
  {
    id: "venta",
    title: "Venta de productos",
    documents:
      "Factura o ticket fiscal, remito de entrega y recibo o comprobante de cobranza.",
    effect:
      "Disminuye el stock, aumenta caja o bancos o cuentas por cobrar y se genera el resultado derivado de la operacion.",
  },
];

export const accountingEventsSummary =
  "Fuentes internas de FBM muestran trazabilidad entre la facturacion, los movimientos de clientes y la registracion de cobranzas, lo que permite vincular la operacion comercial con su efecto contable.";

export const accountingControl =
  "Un control contable especialmente aplicable a la organizacion es el recuento ciclico de inventarios en tiendas y depositos. El procedimiento consiste en comparar el stock fisico de determinadas lineas o ubicaciones con el stock registrado, identificar diferencias, analizarlas y autorizar los ajustes correspondientes. En una empresa multisucursal con alto volumen de articulos, este control permite resguardar bienes, reducir perdidas, mejorar la confiabilidad del inventario y respaldar decisiones comerciales y logisticas.";

export const accountingSIC =
  "El Sistema de Informacion Contable es clave porque integra ventas, facturacion, cuentas por cobrar, inventarios, deudas con proveedores, cobranzas y registracion financiera en una misma logica de control. Para una organizacion como Familia Bercomat, el SIC no solo cumple una funcion legal e impositiva, sino que tambien aporta informacion para fijar precios, evaluar margenes, administrar liquidez, controlar el capital de trabajo y medir la rentabilidad por tienda, zona o canal. En este sentido, su valor principal radica en transformar operaciones dispersas en informacion util para la toma de decisiones.";

export const structureHighlights = [
  {
    title: "Estructura formal",
    text: "Se distinguen areas como Comercial, Planeamiento y Categorias, Soporte, Operaciones y Finanzas, Cadena de Suministros, Legales y Auditoria.",
  },
  {
    title: "Transformacion Digital",
    text: "No se limita al soporte operativo: la compania la utiliza para desarrollar herramientas, procesos y productos propios orientados a mejorar la experiencia del cliente y la operacion.",
  },
  {
    title: "Recursos Humanos",
    text: "Ademas de administrar personal, participa en comunicacion interna, acompanamiento organizacional y articulacion entre equipos.",
  },
];

export const cycleStages: CycleStage[] = [
  {
    id: "abastecimiento",
    title: "1. Abastecimiento y reposicion",
    subtitle: "Planificacion del surtido y negociacion comercial",
    description:
      "La fase inicial comprende la seleccion de proveedores, definicion de condiciones comerciales y reposicion de productos para sostener la oferta disponible.",
    roles: ["Compras", "Planeamiento del surtido", "Analisis comercial"],
  },
  {
    id: "recepcion",
    title: "2. Recepcion, almacenamiento y control",
    subtitle: "Ingreso y disponibilidad de mercaderia",
    description:
      "Una vez recibida la mercaderia, la organizacion verifica, almacena y controla existencias para asegurar disponibilidad en depositos y sucursales.",
    roles: ["Operarios", "Administracion de deposito", "Inventario"],
  },
  {
    id: "ventas",
    title: "3. Comercializacion y cierre de ventas",
    subtitle: "Asesoramiento, cotizacion y atencion",
    description:
      "La etapa comercial articula vendedores, grandes cuentas, jefaturas y cajas para transformar disponibilidad de producto en operaciones concretas.",
    roles: ["Ventas de salon", "Grandes cuentas", "Cajas y atencion"],
  },
  {
    id: "logistica",
    title: "4. Preparacion, distribucion y entrega",
    subtitle: "Salida de mercaderia y traslado al cliente",
    description:
      "Despues de la venta se organiza el armado de pedidos, la coordinacion logistica y la distribucion hacia el cliente final.",
    roles: ["Transporte", "Distribucion", "Entrega"],
  },
  {
    id: "cobranza",
    title: "5. Cobranza y registracion administrativa",
    subtitle: "Facturacion, tesoreria y control",
    description:
      "La organizacion asegura el cierre administrativo y financiero mediante procesos de facturacion, cobranza, tesoreria y seguimiento de cuentas.",
    roles: ["Administracion", "Tesoreria", "Control financiero"],
  },
  {
    id: "postventa",
    title: "6. Postventa y retroalimentacion",
    subtitle: "Consultas, reclamos y mejora",
    description:
      "El circuito se completa con la atencion posterior a la venta, resolucion de reclamos y devoluciones, y aprendizaje para la mejora continua.",
    roles: ["Servicio al cliente", "Postventa", "Control y mejora"],
  },
];

export const conclusionSummary =
  "El caso de Familia Bercomat permite comprender que la sustentabilidad de una empresa comercial grande y multisucursal no depende de un unico factor, sino de la articulacion entre estrategia, operacion, entorno economico y control contable.";

export const conclusions = [
  "Familia Bercomat se presenta como una organizacion comercial grande, familiar y multisucursal, cuya competitividad depende de coordinar surtido, cobertura territorial, estructura humana, logistica y soporte administrativo.",
  "El analisis mostro que su desempeno esta fuertemente condicionado por el contexto: inflacion, credito, tipo de cambio, obra publica, competencia por region y cambios en las formas de construir obligan a revisar precios, margenes, stock y posicionamiento.",
  "Desde la perspectiva contable y de gestion, el control de inventarios, las cuentas por cobrar, las obligaciones con proveedores y el Sistema de Informacion Contable resultan decisivos para sostener liquidez, medir rentabilidad por tienda, zona y canal, y transformar la operacion diaria en informacion util para decidir.",
];
