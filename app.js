const serviceGroups = [
  {
    category: "Shaxsni tasdiqlash va fuqarolik",
    services: [
      "ID-karta olish yoki almashtirish",
      "Xorijga chiqish biometrik pasportini rasmiylashtirish",
      "Yashash joyi bo‘yicha ro‘yxatdan o‘tish",
      "Doimiy yashash joyi to‘g‘risida ma’lumotnoma olish",
      "Yashash joyida ro‘yxatdan o‘tgan shaxslar haqida ma’lumot olish",
      "Yashash manzili ma’lumotlarini tahrirlash",
      "O‘zbekiston fuqaroligiga qabul qilish",
      "Fuqarolikdan chiqish uchun ariza berish",
    ],
  },
  {
    category: "FHDYO va oilaviy xizmatlar",
    services: [
      "Tug‘ilganlikni qayd etish",
      "Tug‘ilganlik haqida ma’lumotnoma olish",
      "Nikohni qayd etish",
      "Nikohdan ajralish uchun ariza berish",
      "Nikoh qayd etilganligi haqida ma’lumotnoma olish",
      "Nikohda turmaslik haqida ma’lumotnoma olish",
      "O‘limni qayd etish",
      "Takroriy tug‘ilganlik guvohnomasini olish",
      "Takroriy nikoh guvohnomasini olish",
      "FHDYO arxiv ma’lumotnomalarini olish",
      "Fuqarolik holati dalolatnomalariga o‘zgartirish kiritish",
      "Otalikni belgilashni qayd etish",
      "Farzandlikka olish bilan bog‘liq xizmatlar",
    ],
  },
  {
    category: "Davlat xizmatlari va huquqiy xizmatlar",
    services: [
      "Davlat xizmatlari markaziga murojaat qilish",
      "Elektron raqamli imzo (ERI) olish",
      "Hujjatlarga apostil qo‘yish",
      "Notarial xizmatlar uchun qabulga yozilish",
      "Ishonchnoma rasmiylashtirish",
      "Hujjat nusxalarini notarial tasdiqlash",
      "Meros bilan bog‘liq notarial xizmatlar",
      "Yuridik shaxsni davlat ro‘yxatidan o‘tkazish",
      "Yakka tartibdagi tadbirkorni ro‘yxatdan o‘tkazish",
      "Tadbirkorlik faoliyatini tugatish uchun ariza berish",
    ],
  },
  {
    category: "Kadastr va ko‘chmas mulk",
    services: [
      "Ko‘chmas mulk uchun kadastr pasportini shakllantirish",
      "Ko‘chmas mulkka bo‘lgan huquqni davlat ro‘yxatidan o‘tkazish",
      "Uy-joyga egalik huquqini ro‘yxatdan o‘tkazish",
      "Kadastr hujjatlariga o‘zgartirish kiritish",
      "Ko‘chmas mulk haqida ma’lumotnoma olish",
      "Yer uchastkasiga oid ma’lumotlarni olish",
      "Ko‘chmas mulkni davlat ro‘yxatidan o‘tkazish holatini tekshirish",
      "Qurilish uchun ruxsatnoma olish",
      "Yakka tartibdagi uy-joy qurilishini kelishish",
      "Binoni foydalanishga topshirish bilan bog‘liq xizmatlar",
    ],
  },
  {
    category: "Soliq va moliyaviy xizmatlar",
    services: [
      "Jismoniy shaxsning soliq qarzdorligini tekshirish",
      "Mol-mulk solig‘ini hisoblash va to‘lash",
      "Yer solig‘ini hisoblash va to‘lash",
      "Daromad solig‘i bo‘yicha ma’lumot olish",
      "Soliq to‘lovchi sifatida ro‘yxatdan o‘tish",
      "Soliq imtiyozlaridan foydalanish uchun murojaat qilish",
      "Soliq qarzdorligi mavjud emasligi haqida ma’lumotnoma olish",
      "Soliq deklaratsiyasini topshirish",
      "Yuridik shaxsning soliq ma’lumotlarini olish",
      "Davlat bojlari va yig‘imlarini to‘lash",
    ],
  },
  {
    category: "Pensiya va ijtimoiy himoya",
    services: [
      "Pensiya tayinlash uchun murojaat qilish",
      "Pensiya miqdori haqida ma’lumot olish",
      "Nafaqa tayinlash uchun ariza berish",
      "Pensiya va nafaqa oluvchilar haqida ma’lumotnoma olish",
      "Bolalar nafaqasiga ariza berish",
      "Moddiy yordam olish uchun murojaat qilish",
      "Nogironlikni belgilash bilan bog‘liq xizmatlar",
      "Ijtimoiy himoya xizmatlariga murojaat qilish",
      "Ishsizlik nafaqasi bo‘yicha murojaat qilish",
      "Bandlik xizmatlariga ro‘yxatdan o‘tish",
      "Ish staji haqida ma’lumot olish",
      "Mehnat daftarchasi ma’lumotlarini olish",
    ],
  },
  {
    category: "Ta’lim xizmatlari",
    services: [
      "Bolani davlat maktabgacha ta’lim tashkilotiga joylashtirish",
      "Bog‘chaga navbatni tekshirish",
      "Umumta’lim maktabiga qabul bo‘yicha murojaat qilish",
      "Maktabdan maktabga ko‘chirish",
      "Oliy ta’lim muassasasiga kirish uchun ro‘yxatdan o‘tish",
      "O‘qish joyidan ma’lumotnoma olish",
      "Diplomni tan olish bo‘yicha murojaat qilish",
      "Xorijiy diplomni nostrifikatsiya qilish",
      "O‘qishni ko‘chirish bo‘yicha murojaat qilish",
      "Ta’lim hujjatlarining dublikatini olish",
    ],
  },
  {
    category: "Sog‘liqni saqlash",
    services: [
      "Oilaviy poliklinikaga biriktirish",
      "Shifokor qabuliga yozilish",
      "Tibbiy ma’lumotnoma olish",
      "Tibbiy ko‘rikdan o‘tish tartibi haqida ma’lumot olish",
      "Nogironlikni belgilash uchun tibbiy-ijtimoiy ekspertizaga murojaat qilish",
      "Emlash ma’lumotlarini olish",
      "Sanitariya-epidemiologiya xizmatlariga murojaat qilish",
      "Tibbiyot muassasalari manzillari va ish vaqtini ko‘rish",
    ],
  },
  {
    category: "Haydovchilar va transport",
    services: [
      "Haydovchilik guvohnomasini olish",
      "Haydovchilik guvohnomasini almashtirish",
      "Haydovchilik imtihoniga yozilish",
      "Avtotransport vositasini davlat ro‘yxatidan o‘tkazish",
      "Avtomobilni qayta ro‘yxatdan o‘tkazish",
      "Transport vositasi haqida ma’lumot olish",
      "Texnik ko‘rikdan o‘tish tartibi",
      "Avtomobilga davlat raqami olish bilan bog‘liq xizmatlar",
      "Transport jarimalarini tekshirish va to‘lash",
      "Yo‘qolgan haydovchilik hujjatini tiklash",
    ],
  },
  {
    category: "Qurilish va kommunal xizmatlar",
    services: [
      "Elektr ta’minotiga ulanish",
      "Tabiiy gaz tarmog‘iga ulanish",
      "Ichimlik suvi tarmog‘iga ulanish",
      "Elektr hisoblagichini o‘rnatish yoki almashtirish",
      "Gaz hisoblagichini o‘rnatish yoki almashtirish",
      "Suv hisoblagichini o‘rnatish yoki almashtirish",
      "Kommunal qarzdorlikni tekshirish",
      "Qurilish ishlariga ruxsat olish",
      "Arxitektura-rejalashtirish topshirig‘ini olish",
      "Manzil va bino raqami bo‘yicha ma’lumot olish",
    ],
  },
  {
    category: "Qishloq xo‘jaligi va yer",
    services: [
      "Fermer xo‘jaligini ro‘yxatdan o‘tkazish",
      "Qishloq xo‘jaligi yerlariga oid murojaat",
      "Yer ijarasi bilan bog‘liq xizmatlar",
      "Veterinariya ma’lumotnomalarini olish",
      "O‘simliklar karantini bo‘yicha murojaat qilish",
      "Qishloq xo‘jaligi subsidiyalariga ariza berish",
      "Urug‘lik va ko‘chatlarga oid ruxsatnomalar",
      "Chorva mollarini ro‘yxatga olishga oid xizmatlar",
    ],
  },
  {
    category: "Tadbirkorlik va litsenziyalar",
    services: [
      "Tadbirkorlik subyekti ma’lumotlarini o‘zgartirish",
      "Litsenziya olish uchun ariza berish",
      "Faoliyat uchun ruxsatnoma olish",
      "Litsenziya holatini tekshirish",
      "Tadbirkorlik faoliyatini vaqtincha to‘xtatish",
      "Davlat xaridlarida qatnashish bo‘yicha ma’lumot olish",
      "Elektron hisob-faktura bilan bog‘liq xizmatlar",
      "Tadbirkorlik subyekti haqida ma’lumotnoma olish",
      "Korxonani davlat ro‘yxatidan o‘tkazish",
      "Korxona faoliyatini tugatish",
    ],
  },
  {
    category: "Migratsiya va xorijga chiqish",
    services: [
      "Xorijda doimiy yashash uchun hujjatlarni rasmiylashtirish",
      "Chet el fuqarosini yashash joyi bo‘yicha ro‘yxatga olish",
      "Vaqtincha yashash ro‘yxatini rasmiylashtirish",
      "Migratsiya masalalari bo‘yicha murojaat qilish",
      "Fuqarolik masalalari bo‘yicha ariza yuborish",
      "Xorijda tug‘ilganlik yoki nikoh ma’lumotnomalarini olish",
    ],
  },
  {
    category: "Huquqni muhofaza qilish va boshqa xizmatlar",
    services: [
      "Ichki ishlar organlariga murojaat yuborish",
      "Yo‘qolgan hujjatlar bo‘yicha murojaat qilish",
      "Sudlanganlik haqida ma’lumotnoma olish",
      "Sudga elektron murojaat yuborish",
      "Sud hujjatlari haqida ma’lumot olish",
      "Ijro hujjatlari bo‘yicha qarzdorlikni tekshirish",
      "Davlat organiga elektron murojaat yuborish",
      "Ariza yoki shikoyat holatini tekshirish",
      "Davlat organlarining aloqa ma’lumotlarini topish",
    ],
  },
];

const storageKey = "navbatsiz-demo-state-v1";
const categoryNames = serviceGroups.map(({ category }) => category);
const makeId = (prefix) =>
  `${prefix}-${globalThis.crypto?.randomUUID?.() ?? `${Date.now()}-${Math.random().toString(16).slice(2)}`}`;

const initialServices = serviceGroups.flatMap(({ category, services }, groupIndex) =>
  services.map((name, serviceIndex) => ({
    id: `catalog-${groupIndex}-${serviceIndex}`,
    name,
    category,
    description: "",
    documents: "",
    organization: "",
    address: "",
    map: "",
    days: "",
    hours: "",
    price: "",
    estimatedWait: "",
    bookingUrl: "",
    phone: "",
    instructions: "",
    updatedAt: "",
    source: "",
  })),
);

const vehiclePlateServiceName = "Avtomobilga davlat raqami olish bilan bog‘liq xizmatlar";
const vehiclePlateGuide = {
  description:
    "Avtomobilga davlat raqami olish va transport vositasini ro‘yxatdan o‘tkazish tartibi. Aniq talablar avtomobil yangi yoki ishlatilgani, qayta ro‘yxatdan o‘tkazilishi va hududga qarab farq qilishi mumkin.",
  documents:
    "Shaxsni tasdiqlovchi hujjat; avtomobilga egalik yoki uni tasarruf etish huquqini tasdiqlovchi hujjat; mavjud bo‘lsa avtomobilning avvalgi ro‘yxat hujjatlari. Hujjatlarning aniq ro‘yxatini rasmiy manbadan oldindan tekshiring.",
  organization:
    "Hududingizdagi vakolatli transport vositalarini ro‘yxatdan o‘tkazish bo‘limi — aniq bo‘limni rasmiy manbadan tekshiring.",
  instructions:
    "1. Yangi yoki ishlatilgan avtomobil ekanini va ro‘yxatdan o‘tkazish sababini aniqlang. 2. Vakolatli ro‘yxatdan o‘tkazish bo‘limi yoki rasmiy elektron xizmatga murojaat tartibini tekshiring. 3. Kerakli hujjatlarni tayyorlab, avtomobilni ko‘rsatish talab qilinadimi-yo‘qmi aniqlang. 4. Amaldagi to‘lov va qabul vaqtini rasmiy manbadan tasdiqlang. Bu katalog arizani o‘zi yubormaydi.",
};

function applyBuiltInGuides(service) {
  if (service.name !== vehiclePlateServiceName) return service;
  return {
    ...service,
    description: service.description || vehiclePlateGuide.description,
    documents: service.documents || vehiclePlateGuide.documents,
    organization: service.organization || vehiclePlateGuide.organization,
    instructions: service.instructions || vehiclePlateGuide.instructions,
  };
}

function createInitialState() {
  return {
    services: initialServices.map(applyBuiltInGuides),
    visits: [],
    feedback: [],
    views: {},
    auditLog: [],
  };
}

const demoWarning = document.querySelector(".demo-warning");
let persistenceWarning = "";

function loadState() {
  try {
    const stored = localStorage.getItem(storageKey);
    if (!stored) return createInitialState();
    const parsed = JSON.parse(stored);
    if (parsed && !Object.hasOwn(parsed, "auditLog")) parsed.auditLog = [];
    if (
      !parsed ||
      !Array.isArray(parsed.services) ||
      !Array.isArray(parsed.visits) ||
      !Array.isArray(parsed.feedback) ||
      !Array.isArray(parsed.auditLog) ||
      typeof parsed.views !== "object" ||
      parsed.views === null
    ) {
      throw new Error("Saqlangan ma’lumotlar kutilgan formatga mos emas.");
    }
    parsed.services = parsed.services.map(applyBuiltInGuides);
    return parsed;
  } catch (error) {
    console.error("NAVBATSIZ ma’lumotlarini o‘qib bo‘lmadi:", error);
    persistenceWarning =
      "Saqlangan demo ma’lumotlarini o‘qib bo‘lmadi. Brauzer xotirasi tekshirilsin.";
    return createInitialState();
  }
}

const state = loadState();

function saveState() {
  try {
    localStorage.setItem(storageKey, JSON.stringify(state));
    if (persistenceWarning) {
      persistenceWarning = "";
      updateStorageNotice();
    }
    return true;
  } catch (error) {
    console.error("NAVBATSIZ ma’lumotlarini saqlab bo‘lmadi:", error);
    persistenceWarning =
      "O‘zgarishlar brauzerda saqlanmadi. Brauzer xotirasi uchun ruxsat va joyni tekshiring.";
    updateStorageNotice();
    return false;
  }
}

function recordChange(action, detail) {
  state.auditLog.push({
    id: makeId("audit"),
    action,
    detail,
    createdAt: new Date().toISOString(),
  });
  if (state.auditLog.length > 300) state.auditLog.splice(0, state.auditLog.length - 300);
}

function updateStorageNotice() {
  demoWarning.textContent =
    "Demo ma’lumotlar faqat ushbu brauzerda saqlanadi. Administrator akkauntlari, rollar va umumiy ma’lumotlar bazasi uchun server hamda xavfsiz kirish tizimi kerak." +
    (persistenceWarning ? ` ${persistenceWarning}` : "");
}

const categoryList = document.querySelector("#category-list");
const serviceGrid = document.querySelector("#service-grid");
const searchInput = document.querySelector("#service-search");
const resultCount = document.querySelector("#result-count");
const emptyState = document.querySelector("#empty-state");
const dialog = document.querySelector("#service-dialog");
const dialogTitle = document.querySelector("#dialog-title");
const dialogCategory = document.querySelector("#dialog-category");
const dialogDescription = document.querySelector("#dialog-description");
const detailGrid = document.querySelector("#detail-grid");
const preparationList = document.querySelector("#preparation-list");
const appointmentInstructions = document.querySelector("#appointment-instructions");
const bookingLink = document.querySelector("#booking-link");
const mapLink = document.querySelector("#map-link");
const feedbackForm = document.querySelector("#feedback-form");
const feedbackStatus = document.querySelector("#feedback-status");
const serviceForm = document.querySelector("#service-form");
const serviceIdInput = document.querySelector("#service-id");
const adminServiceList = document.querySelector("#admin-service-list");
const waitForm = document.querySelector("#wait-form");
const waitServiceSelect = document.querySelector("#wait-service");
const waitList = document.querySelector("#wait-list");
const assistantPanel = document.querySelector("#assistant-panel");
const assistantMessages = document.querySelector("#assistant-messages");
const assistantForm = document.querySelector("#assistant-form");
const assistantInput = document.querySelector("#assistant-input");
let selectedCategory = "Barchasi";
let activeServiceId = null;

const detailFields = [
  ["Xizmat tavsifi", "description"],
  ["Kerakli hujjatlar ro‘yxati", "documents"],
  ["Rasmiy yozilish havolasi", "bookingUrl"],
  ["Xizmat ko‘rsatuvchi tashkilot nomi", "organization"],
  ["Tashkilot manzili", "address"],
  ["Xarita havolasi yoki koordinatalar", "map"],
  ["Ish kunlari", "days"],
  ["Ish vaqti", "hours"],
  ["Davlat boji yoki xizmat narxi", "price"],
  ["Taxminiy kutish vaqti", "estimatedWait"],
  ["Telefon raqami", "phone"],
  ["Murojaat qilish tartibi", "instructions"],
  ["Ma’lumot oxirgi yangilangan sana", "updatedAt"],
  ["Ma’lumot manbasi", "source"],
];

const assistantAliases = {
  "Yashash joyida ro‘yxatdan o‘tgan shaxslar haqida ma’lumot olish": [
    "uyimda kimlar propiskada",
    "manzilimda ro‘yxatdan o‘tgan odamlar",
    "uyda kim ro‘yxatda",
    "kimlar yashash manzilimda ro‘yxatdan o‘tgan",
  ],
  "Yashash joyi bo‘yicha ro‘yxatdan o‘tish": [
    "propiska qilish",
    "yangi manzilga ro‘yxatga turish",
    "manzil bo‘yicha ro‘yxatdan o‘tish",
  ],
  "ID-karta olish yoki almashtirish": ["id karta", "pasport karta", "shaxsni tasdiqlovchi hujjat"],
  "Xorijga chiqish biometrik pasportini rasmiylashtirish": [
    "chet elga chiqish pasporti",
    "zagran pasport",
    "xorij pasporti",
  ],
  "Pensiya tayinlash uchun murojaat qilish": ["pensiyaga chiqish", "pensiya rasmiylashtirish"],
  "Bolalar nafaqasiga ariza berish": ["bola puli", "bolalar nafaqasi"],
  "Kommunal qarzdorlikni tekshirish": ["svet qarzi", "gaz qarzi", "suv qarzi"],
  "Haydovchilik guvohnomasini olish": ["prava olish", "haydovchilik hujjati"],
  [vehiclePlateServiceName]: [
    "mashinaga nomer olish",
    "mashinaga raqam olish",
    "avtomobilga nomer olish",
    "mashina davlat raqami",
    "avtomobil davlat raqami",
    "yangi mashinaga nomer",
    "nomer olish uchun nima kerak",
  ],
  "Nikohdan ajralish uchun ariza berish": ["ajrashish", "nikohni bekor qilish"],
};

const assistantStopWords = new Set([
  "men", "menga", "mening", "uchun", "haqida", "bo‘yicha", "bo‘yicha",
  "kerak", "qanday", "qilmoqchiman", "qilmoqchi", "xohlayman", "iltimos",
  "ariza", "shikoyat", "murojaat", "olish", "berish", "bermoqchiman", "olmoqchiman", "yuborish",
  "yubormoqchiman", "qilish", "qilishni", "mumkin", "bormi", "bor",
]);

function assistantTokens(value) {
  return normalizeText(value)
    .replace(/[^\p{L}\p{N}\s-]/gu, " ")
    .split(/[\s-]+/)
    .map((token) => token.trim())
    .filter((token) => token.length >= 3 && !assistantStopWords.has(token));
}

function getAssistantMatches(query) {
  const normalizedQuery = normalizeText(query);
  const queryTokens = assistantTokens(query);
  const isComplaint = /\b(shikoyat|norozi|ishlamay|muammo|arz qil)\b/.test(normalizedQuery);
  const scores = state.services.map((service) => {
    const titleTokens = assistantTokens(service.name);
    const categoryTokens = assistantTokens(service.category);
    const aliases = Object.entries(assistantAliases).find(([name]) =>
      service.name.includes(name),
    )?.[1] || [];
    const aliasTokens = assistantTokens(aliases.join(" "));
    let score = 0;

    for (const token of queryTokens) {
      if (titleTokens.includes(token)) score += 4;
      else if (titleTokens.some((titleToken) => titleToken.startsWith(token) || token.startsWith(titleToken))) {
        score += 2;
      }
      if (aliasTokens.includes(token)) score += 4;
      else if (aliasTokens.some((aliasToken) => aliasToken.startsWith(token) || token.startsWith(aliasToken))) {
        score += 2;
      }
      if (categoryTokens.includes(token)) score += 1;
    }

    const normalizedTitle = normalizeText(service.name);
    if (normalizedQuery.includes(normalizedTitle) || normalizedTitle.includes(normalizedQuery)) {
      score += 10;
    }

    if (isComplaint && service.name === "Davlat organiga elektron murojaat yuborish") {
      score += 5;
    }
    return { service, score };
  });

  const matches = scores
    .filter(({ score }) => score >= 3)
    .sort((first, second) => second.score - first.score)
    .slice(0, 3);

  if (
    isComplaint &&
    !matches.some(({ service }) => service.name === "Davlat organiga elektron murojaat yuborish")
  ) {
    const complaintService = state.services.find(
      ({ name }) => name === "Davlat organiga elektron murojaat yuborish",
    );
    if (complaintService) matches.unshift({ service: complaintService, score: 5 });
  }

  return matches.slice(0, 3);
}

function addAssistantMessage(kind, content) {
  const message = document.createElement("div");
  message.className = `assistant-message ${kind}`;
  if (typeof content === "string") {
    message.textContent = content;
  } else {
    message.append(content);
  }
  assistantMessages.append(message);
  assistantMessages.scrollTop = assistantMessages.scrollHeight;
  return message;
}

function createAssistantServiceCard(service) {
  const card = document.createElement("article");
  card.className = "assistant-result";
  card.append(
    makeTextElement("span", "assistant-result-category", service.category),
    makeTextElement("strong", "assistant-result-title", service.name),
  );
  const organization = service.organization || "Tashkilot ma’lumoti hali tasdiqlanmagan";
  card.append(makeTextElement("span", "assistant-result-meta", organization));
  const button = document.createElement("button");
  button.type = "button";
  button.className = "assistant-result-button";
  button.textContent = "Xizmat va murojaat tartibini ko‘rish";
  button.addEventListener("click", () => openServiceDetails(service));
  card.append(button);
  return card;
}

function respondToAssistant(query) {
  const cleanQuery = query.trim();
  if (!cleanQuery) return;
  addAssistantMessage("user", cleanQuery);
  assistantInput.value = "";

  const matches = getAssistantMatches(cleanQuery);
  if (!matches.length) {
    const reply = document.createElement("div");
    reply.append(
      makeTextElement(
        "p",
        "",
        "Qaysi yo‘nalish bo‘yicha murojaat qilmoqchisiz? Masalan: hujjat, yashash manzili, oila, soliq, pensiya, ta’lim, tibbiyot, transport yoki kommunal xizmatlar.",
      ),
    );
    addAssistantMessage("bot", reply);
    return;
  }

  const response = document.createElement("div");
  response.append(
    makeTextElement(
      "p",
      "",
      "Yozganingizga mos kelishi mumkin bo‘lgan xizmatlarni topdim. Tegishlisini tanlasangiz, kimga murojaat qilish, manzil, telefon, kerakli hujjatlar va rasmiy havolani ko‘rasiz.",
    ),
  );
  if (/\b(shikoyat|norozi|ishlamay|muammo|arz qil)\b/.test(normalizeText(cleanQuery))) {
    response.append(
      makeTextElement(
        "p",
        "assistant-caution",
        "Eslatma: bu demo murojaat yoki shikoyatni idoraga yubormaydi — faqat mos xizmatni topib yo‘naltiradi.",
      ),
    );
  }
  const results = document.createElement("div");
  results.className = "assistant-results";
  for (const { service } of matches) results.append(createAssistantServiceCard(service));
  response.append(results);
  addAssistantMessage("bot", response);
}

function normalizeText(value) {
  return value
    .toLocaleLowerCase("uz")
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[‘’ʻ`´']/g, "");
}

function safeExternalUrl(value) {
  try {
    const url = new URL(value);
    return ["https:", "http:"].includes(url.protocol) ? url.href : "";
  } catch {
    return "";
  }
}

function makeTextElement(tag, className, text) {
  const element = document.createElement(tag);
  element.className = className;
  element.textContent = text;
  return element;
}

function renderCategories() {
  const categories = ["Barchasi", ...categoryNames];
  categoryList.replaceChildren(
    ...categories.map((category) => {
      const button = document.createElement("button");
      button.type = "button";
      button.className = "category-button";
      button.classList.toggle("active", category === selectedCategory);
      button.setAttribute("aria-pressed", String(category === selectedCategory));
      button.textContent = category;
      button.addEventListener("click", () => {
        selectedCategory = category;
        renderCategories();
        renderServices();
      });
      return button;
    }),
  );
}

function createServiceCard(service) {
  const button = document.createElement("button");
  button.type = "button";
  button.className = "service-card";
  button.setAttribute("aria-label", `${service.name} — tafsilotlarni ko‘rish`);
  button.append(
    makeTextElement("span", "card-category", service.category),
    makeTextElement("span", "card-title", service.name),
  );
  const footer = makeTextElement("span", "card-link", "Tafsilotlarni ko‘rish");
  footer.append(makeTextElement("span", "card-arrow", "→"));
  footer.lastElementChild.setAttribute("aria-hidden", "true");
  button.append(footer);
  button.addEventListener("click", () => openServiceDetails(service));
  return button;
}

function renderServices() {
  const query = normalizeText(searchInput.value.trim());
  const filteredServices = state.services.filter((service) => {
    const matchesCategory =
      selectedCategory === "Barchasi" || service.category === selectedCategory;
    const matchesQuery =
      !query || normalizeText(`${service.name} ${service.category}`).includes(query);
    return matchesCategory && matchesQuery;
  });
  serviceGrid.replaceChildren(...filteredServices.map(createServiceCard));
  resultCount.textContent = `${filteredServices.length} ta xizmat`;
  emptyState.hidden = filteredServices.length > 0;
  serviceGrid.hidden = filteredServices.length === 0;
}

function formatDetailValue(service, key) {
  const value = service[key]?.trim();
  if (!value) return "Rasmiy manbadan kiritiladi";
  if (key === "source" || key === "bookingUrl") {
    const safeUrl = safeExternalUrl(value);
    if (safeUrl) {
      const link = document.createElement("a");
      link.className = "detail-value detail-external-link";
      link.href = safeUrl;
      link.target = "_blank";
      link.rel = "noopener noreferrer";
      link.textContent = key === "source" ? "Manbani ochish ↗" : "Yozilish sahifasini ochish ↗";
      return link;
    }
  }
  return value;
}

function addDetail(labelText, key, service) {
  const item = document.createElement("div");
  item.className = "detail-item";
  item.append(makeTextElement("span", "detail-label", labelText));
  const value = formatDetailValue(service, key);
  if (value instanceof Node) item.append(value);
  else item.append(makeTextElement("span", "detail-value", value));
  detailGrid.append(item);
}

function renderPreparation(service) {
  const documentItems = service.documents
    .split(/[\n,;]+/)
    .map((item) => item.trim())
    .filter(Boolean);
  const checklist = [
    ...(documentItems.length
      ? documentItems
      : ["Kerakli hujjatlar ro‘yxatini rasmiy manbadan tekshiring"]),
    "Tashkilot manzili va ish vaqtini borishdan oldin tasdiqlang",
    "Onlayn qabul bo‘lmasa, telefon orqali murojaat qilish tartibini aniqlang",
  ];
  preparationList.replaceChildren(
    ...checklist.map((item) => {
      const li = document.createElement("li");
      const label = document.createElement("label");
      const checkbox = document.createElement("input");
      checkbox.type = "checkbox";
      label.append(checkbox, document.createTextNode(item));
      li.append(label);
      return li;
    }),
  );
  appointmentInstructions.textContent =
    service.instructions || "Onlayn yozilish mavjudligi va murojaat tartibi rasmiy manbadan aniqlashtiriladi.";

  const safeBookingUrl = safeExternalUrl(service.bookingUrl || "");
  bookingLink.hidden = !safeBookingUrl;
  if (safeBookingUrl) {
    bookingLink.href = safeBookingUrl;
    bookingLink.target = "_blank";
    bookingLink.rel = "noopener noreferrer";
  } else {
    bookingLink.removeAttribute("href");
  }

  const safeMapUrl = safeExternalUrl(service.map || "");
  mapLink.hidden = !safeMapUrl;
  if (safeMapUrl) mapLink.href = safeMapUrl;
  else mapLink.removeAttribute("href");
}

function openServiceDetails(service) {
  activeServiceId = service.id;
  dialogCategory.textContent = service.category;
  dialogTitle.textContent = service.name;
  dialogDescription.textContent =
    service.description || "Xizmat tafsilotlari katalogga rasmiy manba asosida kiritiladi.";
  detailGrid.replaceChildren();
  for (const [label, key] of detailFields) addDetail(label, key, service);
  appointmentInstructions.textContent = "";
  renderPreparation(service);
  feedbackForm.reset();
  feedbackStatus.textContent = "";
  state.views[service.id] = (state.views[service.id] || 0) + 1;
  saveState();
  dialog.showModal();
  document.querySelector("#dialog-close").focus();
}

function populateAdminSelects() {
  const categorySelect = document.querySelector("#admin-service-category");
  categorySelect.replaceChildren(
    ...categoryNames.map((category) => {
      const option = document.createElement("option");
      option.value = category;
      option.textContent = category;
      return option;
    }),
  );

  const currentWaitService = waitServiceSelect.value;
  waitServiceSelect.replaceChildren(
    ...state.services.map((service) => {
      const option = document.createElement("option");
      option.value = service.id;
      option.textContent = service.name;
      return option;
    }),
  );
  if (state.services.some((service) => service.id === currentWaitService)) {
    waitServiceSelect.value = currentWaitService;
  }
}

function renderAdminServiceList() {
  adminServiceList.replaceChildren(
    ...state.services.map((service) => {
      const row = document.createElement("tr");
      row.append(
        makeTextElement("td", "", service.name),
        makeTextElement("td", "", service.category),
        makeTextElement("td", "", service.source ? "Kiritilgan" : "Kiritilmagan"),
      );
      const actions = document.createElement("td");
      actions.className = "table-actions";
      const editButton = document.createElement("button");
      editButton.type = "button";
      editButton.className = "table-button";
      editButton.textContent = "Tahrirlash";
      editButton.dataset.action = "edit";
      editButton.dataset.id = service.id;
      const deleteButton = document.createElement("button");
      deleteButton.type = "button";
      deleteButton.className = "table-button danger";
      deleteButton.textContent = "O‘chirish";
      deleteButton.dataset.action = "delete";
      deleteButton.dataset.id = service.id;
      actions.append(editButton, deleteButton);
      row.append(actions);
      return row;
    }),
  );
}

function renderWaitList() {
  const sortedVisits = [...state.visits].sort(
    (first, second) => new Date(second.arrival) - new Date(first.arrival),
  );
  waitList.replaceChildren(
    ...sortedVisits.map((visit) => {
      const service = state.services.find(({ id }) => id === visit.serviceId);
      const row = document.createElement("tr");
      row.append(
        makeTextElement("td", "", service?.name || "O‘chirilgan xizmat"),
        makeTextElement("td", "", new Date(visit.arrival).toLocaleString("uz-UZ")),
        makeTextElement("td", "", `${visit.waitMinutes} daqiqa`),
      );
      const actions = document.createElement("td");
      const remove = document.createElement("button");
      remove.type = "button";
      remove.className = "table-button danger";
      remove.textContent = "O‘chirish";
      remove.dataset.action = "delete-visit";
      remove.dataset.id = visit.id;
      actions.append(remove);
      row.append(actions);
      return row;
    }),
  );
}

function calculateWaitStats() {
  const grouped = new Map();
  for (const visit of state.visits) {
    const current = grouped.get(visit.serviceId) || { total: 0, count: 0 };
    current.total += visit.waitMinutes;
    current.count += 1;
    grouped.set(visit.serviceId, current);
  }
  return [...grouped.entries()]
    .map(([serviceId, value]) => ({
      service: state.services.find(({ id }) => id === serviceId),
      average: Math.round(value.total / value.count),
      count: value.count,
    }))
    .filter(({ service }) => service)
    .sort((first, second) => second.average - first.average);
}

function renderBarList(container, entries, valueLabel, maxValue) {
  container.replaceChildren();
  if (!entries.length) {
    container.append(makeTextElement("p", "report-empty", "Hozircha ma’lumot yo‘q."));
    return;
  }
  for (const entry of entries) {
    const row = document.createElement("div");
    row.className = "bar-row";
    const header = document.createElement("div");
    header.className = "bar-header";
    header.append(
      makeTextElement("span", "bar-name", entry.service.name),
      makeTextElement("span", "bar-value", valueLabel(entry)),
    );
    const track = document.createElement("div");
    track.className = "bar-track";
    const fill = document.createElement("span");
    fill.className = "bar-fill";
    fill.style.width = `${Math.max(5, (entry.value / maxValue) * 100)}%`;
    track.append(fill);
    row.append(header, track);
    container.append(row);
  }
}

function renderFeedbackList() {
  const entries = [...state.feedback].reverse().slice(0, 15);
  const container = document.querySelector("#feedback-list");
  container.replaceChildren();
  if (!entries.length) {
    container.append(makeTextElement("p", "report-empty", "Hozircha fikr qoldirilmagan."));
    return;
  }
  for (const entry of entries) {
    const service = state.services.find(({ id }) => id === entry.serviceId);
    const item = document.createElement("article");
    item.className = "feedback-entry";
    item.append(
      makeTextElement("strong", "feedback-service", service?.name || "O‘chirilgan xizmat"),
      makeTextElement("span", "feedback-rating", `${"★".repeat(entry.rating)}${"☆".repeat(5 - entry.rating)}`),
      makeTextElement("p", "feedback-comment", entry.comment || "Izoh qoldirilmagan."),
      makeTextElement(
        "time",
        "feedback-date",
        new Date(entry.createdAt).toLocaleDateString("uz-UZ"),
      ),
    );
    container.append(item);
  }
}

function renderAuditHistory() {
  const auditList = document.querySelector("#audit-list");
  const entries = [...state.auditLog].reverse().slice(0, 100);
  auditList.replaceChildren(
    ...entries.map((entry) => {
      const row = document.createElement("tr");
      row.append(
        makeTextElement("td", "", new Date(entry.createdAt).toLocaleString("uz-UZ")),
        makeTextElement("td", "", entry.action),
        makeTextElement("td", "", entry.detail),
      );
      return row;
    }),
  );
  if (!entries.length) {
    const row = document.createElement("tr");
    const cell = makeTextElement("td", "report-empty", "Hozircha o‘zgarishlar yo‘q.");
    cell.colSpan = 3;
    row.append(cell);
    auditList.append(row);
  }
}

function renderAdmin() {
  populateAdminSelects();
  renderAdminServiceList();
  renderWaitList();

  const visits = state.visits.length;
  const waitTotal = state.visits.reduce((total, visit) => total + visit.waitMinutes, 0);
  const averageWait = visits ? Math.round(waitTotal / visits) : 0;
  const averageRating = state.feedback.length
    ? (
        state.feedback.reduce((total, item) => total + item.rating, 0) /
        state.feedback.length
      ).toFixed(1)
    : "—";
  const stats = [
    ["Katalogdagi xizmatlar", state.services.length],
    ["Qayd qilingan tashriflar", visits],
    ["O‘rtacha kutish vaqti", visits ? `${averageWait} daqiqa` : "—"],
    ["O‘rtacha baho", averageRating],
  ];
  document.querySelector("#stats-grid").replaceChildren(
    ...stats.map(([label, value]) => {
      const card = document.createElement("div");
      card.className = "stat-card";
      card.append(
        makeTextElement("span", "stat-label", label),
        makeTextElement("strong", "stat-value", String(value)),
      );
      return card;
    }),
  );

  const popular = state.services
    .map((service) => ({ service, value: state.views[service.id] || 0 }))
    .filter(({ value }) => value > 0)
    .sort((first, second) => second.value - first.value)
    .slice(0, 5);
  renderBarList(
    document.querySelector("#popular-services"),
    popular,
    ({ value }) => `${value} ko‘rish`,
    Math.max(1, ...popular.map(({ value }) => value)),
  );

  const waits = calculateWaitStats().slice(0, 5);
  renderBarList(
    document.querySelector("#wait-report"),
    waits.map((entry) => ({ ...entry, value: entry.average })),
    ({ average, count }) => `${average} daqiqa · ${count} tashrif`,
    Math.max(1, ...waits.map(({ average }) => average)),
  );
  renderFeedbackList();
  renderAuditHistory();
}

function resetServiceForm() {
  serviceForm.reset();
  serviceIdInput.value = "";
  document.querySelector("#cancel-edit").hidden = true;
  document.querySelector("#save-service").textContent = "Xizmatni saqlash";
}

function startEditing(service) {
  serviceIdInput.value = service.id;
  document.querySelector("#admin-service-name").value = service.name;
  document.querySelector("#admin-service-category").value = service.category;
  document.querySelector("#admin-description").value = service.description || "";
  document.querySelector("#admin-documents").value = service.documents || "";
  document.querySelector("#admin-organization").value = service.organization || "";
  document.querySelector("#admin-phone").value = service.phone || "";
  document.querySelector("#admin-address").value = service.address || "";
  document.querySelector("#admin-map").value = service.map || "";
  document.querySelector("#admin-booking").value = service.bookingUrl || "";
  document.querySelector("#admin-days").value = service.days || "";
  document.querySelector("#admin-hours").value = service.hours || "";
  document.querySelector("#admin-price").value = service.price || "";
  document.querySelector("#admin-wait").value = service.estimatedWait || "";
  document.querySelector("#admin-instructions").value = service.instructions || "";
  document.querySelector("#admin-source").value = service.source || "";
  document.querySelector("#admin-updated").value = service.updatedAt || "";
  document.querySelector("#cancel-edit").hidden = false;
  document.querySelector("#save-service").textContent = "O‘zgarishlarni saqlash";
  serviceForm.scrollIntoView({ behavior: "smooth", block: "start" });
}

function switchView(viewId) {
  for (const section of document.querySelectorAll(".view-section")) {
    section.hidden = section.id !== viewId;
  }
  for (const button of document.querySelectorAll(".nav-link")) {
    button.classList.toggle("active", button.dataset.view === viewId);
    button.setAttribute("aria-current", button.dataset.view === viewId ? "page" : "false");
  }
  if (viewId === "admin-view") renderAdmin();
  else renderServices();
}

searchInput.addEventListener("input", renderServices);
document.querySelectorAll(".nav-link").forEach((button) => {
  button.addEventListener("click", () => switchView(button.dataset.view));
});
document.querySelector("[data-home]").addEventListener("click", (event) => {
  event.preventDefault();
  switchView("catalog-view");
  window.scrollTo({ top: 0, behavior: "smooth" });
});
document.querySelector("#dialog-close").addEventListener("click", () => dialog.close());
dialog.addEventListener("click", (event) => {
  if (event.target === dialog) dialog.close();
});

feedbackForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const rating = Number(document.querySelector("#feedback-rating").value);
  if (!activeServiceId || !Number.isInteger(rating) || rating < 1 || rating > 5) {
    feedbackStatus.textContent = "Iltimos, 1 dan 5 gacha baho tanlang.";
    return;
  }
  state.feedback.push({
    id: makeId("feedback"),
    serviceId: activeServiceId,
    rating,
    comment: document.querySelector("#feedback-comment").value.trim(),
    createdAt: new Date().toISOString(),
  });
  if (saveState()) {
    feedbackForm.reset();
    feedbackStatus.textContent = "Fikringiz saqlandi. Rahmat!";
  } else {
    feedbackStatus.textContent = persistenceWarning;
  }
});

serviceForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const formData = new FormData(serviceForm);
  const name = String(formData.get("name") || "").trim();
  const category = String(formData.get("category") || "");
  if (!name || !categoryNames.includes(category)) return;

  const values = Object.fromEntries(
    [
      "name",
      "category",
      "description",
      "documents",
      "organization",
      "address",
      "map",
      "days",
      "hours",
      "price",
      "estimatedWait",
      "bookingUrl",
      "phone",
      "instructions",
      "updatedAt",
      "source",
    ].map((key) => [key, String(formData.get(key) || "").trim()]),
  );
  const id = serviceIdInput.value;
  if (id) {
    const index = state.services.findIndex((service) => service.id === id);
    if (index < 0) {
      window.alert("Tahrirlanayotgan xizmat topilmadi. Ro‘yxatni yangilang.");
      return;
    }
    state.services[index] = { ...state.services[index], ...values };
    recordChange("Xizmat tahrirlandi", values.name);
  } else {
    state.services.push({ ...values, id: makeId("service") });
    recordChange("Xizmat qo‘shildi", values.name);
  }
  if (saveState()) {
    resetServiceForm();
    renderAdmin();
    renderCategories();
    renderServices();
  }
});

document.querySelector("#cancel-edit").addEventListener("click", resetServiceForm);
adminServiceList.addEventListener("click", (event) => {
  const button = event.target.closest("button[data-action]");
  if (!button) return;
  const service = state.services.find(({ id }) => id === button.dataset.id);
  if (!service) return;
  if (button.dataset.action === "edit") {
    startEditing(service);
    return;
  }
  if (!window.confirm(`“${service.name}” xizmatini o‘chirasizmi?`)) return;
  state.services = state.services.filter(({ id }) => id !== service.id);
  recordChange("Xizmat o‘chirildi", service.name);
  if (saveState()) {
    resetServiceForm();
    renderAdmin();
    renderCategories();
    renderServices();
  }
});

waitForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const arrivalValue = document.querySelector("#arrival-time").value;
  const servedValue = document.querySelector("#served-time").value;
  const arrival = new Date(arrivalValue);
  const served = new Date(servedValue);
  if (!arrivalValue || !servedValue || Number.isNaN(+arrival) || Number.isNaN(+served)) {
    window.alert("Kelgan va xizmat ko‘rsatilgan vaqtni to‘g‘ri kiriting.");
    return;
  }
  const waitMinutes = Math.round((served - arrival) / 60000);
  if (waitMinutes < 0) {
    window.alert("Xizmat ko‘rsatilgan vaqt kelgan vaqtdan oldin bo‘lishi mumkin emas.");
    return;
  }
  state.visits.push({
    id: makeId("visit"),
    serviceId: waitServiceSelect.value,
    arrival: arrival.toISOString(),
    served: served.toISOString(),
    waitMinutes,
  });
  recordChange("Kutish vaqti qayd etildi", `${waitServiceSelect.selectedOptions[0].textContent}: ${waitMinutes} daqiqa`);
  if (saveState()) {
    waitForm.reset();
    renderAdmin();
  }
});

waitList.addEventListener("click", (event) => {
  const button = event.target.closest("button[data-action='delete-visit']");
  if (!button) return;
  const visit = state.visits.find(({ id }) => id === button.dataset.id);
  if (!visit) return;
  const service = state.services.find(({ id }) => id === visit.serviceId);
  state.visits = state.visits.filter(({ id }) => id !== button.dataset.id);
  recordChange("Tashrif qaydi o‘chirildi", service?.name || "O‘chirilgan xizmat");
  if (saveState()) renderAdmin();
});

document.addEventListener("keydown", (event) => {
  if (
    event.key === "/" &&
    !["INPUT", "TEXTAREA", "SELECT"].includes(document.activeElement.tagName)
  ) {
    event.preventDefault();
    switchView("catalog-view");
    searchInput.focus();
  }
});

const assistantLauncher = document.querySelector("#assistant-launcher");
const assistantClose = document.querySelector("#assistant-close");

function setAssistantOpen(isOpen) {
  assistantPanel.hidden = !isOpen;
  assistantLauncher.setAttribute("aria-expanded", String(isOpen));
  if (isOpen) assistantInput.focus();
}

assistantLauncher.addEventListener("click", () => {
  setAssistantOpen(assistantPanel.hidden);
});
assistantClose.addEventListener("click", () => {
  setAssistantOpen(false);
  assistantLauncher.focus();
});
assistantForm.addEventListener("submit", (event) => {
  event.preventDefault();
  respondToAssistant(assistantInput.value);
});
document.querySelector("#assistant-examples").addEventListener("click", (event) => {
  const button = event.target.closest("button[data-prompt]");
  if (button) respondToAssistant(button.dataset.prompt);
});
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && !assistantPanel.hidden) setAssistantOpen(false);
});

updateStorageNotice();
renderCategories();
renderServices();
