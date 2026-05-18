export const LANGUAGES = {
  am: {
    id: "am", name: "Amharic", native: "አማርኛ",
    region: "Amhara", speakers: "32M",
    color: "#D4A017", script: "Ge'ez", scriptType: "ethiopic",
    isOfficial: true, liturgical: false,
    description: "Official working language of Ethiopia"
  },
  or: {
    id: "or", name: "Afaan Oromoo", native: "Afaan Oromoo",
    region: "Oromia", speakers: "40M",
    color: "#1B7A4A", script: "Latin (Qubee)", scriptType: "latin",
    isOfficial: false, liturgical: false,
    description: "Most widely spoken Ethiopian language"
  },
  ti: {
    id: "ti", name: "Tigrinya", native: "ትግርኛ",
    region: "Tigray", speakers: "7M",
    color: "#C41E3A", script: "Ge'ez", scriptType: "ethiopic",
    isOfficial: false, liturgical: false,
    description: "Language of the Tigray region"
  },
  so: {
    id: "so", name: "Somali", native: "Soomaali",
    region: "Somali", speakers: "6M",
    color: "#1A6DB5", script: "Latin", scriptType: "latin",
    isOfficial: false, liturgical: false,
    description: "Language of the Somali region"
  },
  aa: {
    id: "aa", name: "Afar", native: "Qafar af",
    region: "Afar", speakers: "2M",
    color: "#7B2D8B", script: "Latin", scriptType: "latin",
    isOfficial: false, liturgical: false,
    description: "Language of the Afar region"
  },
  sid: {
    id: "sid", name: "Sidama", native: "Sidaamu Afoo",
    region: "Sidama", speakers: "4M",
    color: "#0E7C5A", script: "Latin", scriptType: "latin",
    isOfficial: false, liturgical: false,
    description: "Language of the Sidama region"
  },
  wal: {
    id: "wal", name: "Wolayta", native: "Wolaytattuwa",
    region: "SNNPR", speakers: "2M",
    color: "#8B4A0A", script: "Latin", scriptType: "latin",
    isOfficial: false, liturgical: false,
    description: "Language of the Wolayta zone"
  },
  nus: {
    id: "nus", name: "Nuer", native: "Thok Naath",
    region: "Gambela", speakers: "0.5M",
    color: "#1A5C3A", script: "Latin", scriptType: "latin",
    isOfficial: false, liturgical: false,
    description: "Language of the Gambela region"
  },
  har: {
    id: "har", name: "Harari", native: "ሀረሪ",
    region: "Harari", speakers: "0.2M",
    color: "#C45A1A", script: "Ge'ez", scriptType: "ethiopic",
    isOfficial: false, liturgical: false,
    description: "Language of the ancient walled city of Harar"
  },
  ber: {
    id: "ber", name: "Berta", native: "Barta",
    region: "Benishangul-Gumuz", speakers: "0.8M",
    color: "#7A4A28", script: "Latin", scriptType: "latin",
    isOfficial: false, liturgical: false,
    description: "Language of the Benishangul-Gumuz region"
  },
  gum: {
    id: "gum", name: "Gumuz", native: "Gumuz",
    region: "Central Ethiopia", speakers: "0.3M",
    color: "#1A4A7A", script: "Latin", scriptType: "latin",
    isOfficial: false, liturgical: false,
    description: "Language of the Gumuz people"
  },
  bcq: {
    id: "bcq", name: "Bench", native: "Benchnon",
    region: "Southwest Ethiopia", speakers: "1M",
    color: "#5C3028", script: "Latin", scriptType: "latin",
    isOfficial: false, liturgical: false,
    description: "Language of the Southwest Ethiopia region"
  },
  gez: {
    id: "gez", name: "Ge'ez", native: "ግዕዝ",
    region: "Classical / All Ethiopia", speakers: "Liturgical",
    color: "#C8A44A", script: "Ge'ez (Classical)", scriptType: "ethiopic",
    isOfficial: false, liturgical: true,
    description: "Ancient classical language. Mother of Amharic, Tigrinya and Harari scripts. Used in Ethiopian Orthodox and Eritrean Orthodox Church liturgy."
  },
}

export const LANG_LIST = Object.values(LANGUAGES)

// Grouped for UI display
export const MODERN_LANGS = LANG_LIST.filter(l => !l.liturgical)
export const LITURGICAL_LANGS = LANG_LIST.filter(l => l.liturgical)
export const GEEZ_SCRIPT_LANGS = LANG_LIST.filter(l => l.scriptType === "ethiopic")
export const LATIN_SCRIPT_LANGS = LANG_LIST.filter(l => l.scriptType === "latin")
