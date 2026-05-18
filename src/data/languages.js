export const LANGUAGES = {
  am: {
    id: "am", name: "Amharic", native: "አማርኛ",
    region: "Amhara Region", speakers: "32M",
    color: "#D4A017", script: "Ge'ez", scriptType: "ethiopic",
    liturgical: false,
  },
  or: {
    id: "or", name: "Afaan Oromoo", native: "Afaan Oromoo",
    region: "Oromia Region", speakers: "40M",
    color: "#1B7A4A", script: "Latin (Qubee)", scriptType: "latin",
    liturgical: false,
  },
  ti: {
    id: "ti", name: "Tigrinya", native: "ትግርኛ",
    region: "Tigray Region", speakers: "7M",
    color: "#C41E3A", script: "Ge'ez", scriptType: "ethiopic",
    liturgical: false,
  },
  so: {
    id: "so", name: "Somali", native: "Soomaali",
    region: "Somali Region", speakers: "6M",
    color: "#1A6DB5", script: "Latin", scriptType: "latin",
    liturgical: false,
  },
  aa: {
    id: "aa", name: "Afar", native: "Qafar af",
    region: "Afar Region", speakers: "2M",
    color: "#7B2D8B", script: "Latin", scriptType: "latin",
    liturgical: false,
  },
  sid: {
    id: "sid", name: "Sidama", native: "Sidaamu Afoo",
    region: "Sidama Region", speakers: "4M",
    color: "#0E7C5A", script: "Latin", scriptType: "latin",
    liturgical: false,
  },
  wal: {
    id: "wal", name: "Wolayta", native: "Wolaytattuwa",
    region: "SNNPR Region", speakers: "2M",
    color: "#8B4A0A", script: "Latin", scriptType: "latin",
    liturgical: false,
  },
  nus: {
    id: "nus", name: "Nuer", native: "Thok Naath",
    region: "Gambela Region", speakers: "0.5M",
    color: "#1A5C3A", script: "Latin", scriptType: "latin",
    liturgical: false,
  },
  har: {
    id: "har", name: "Harari", native: "ሀረሪ",
    region: "Harari Region", speakers: "0.2M",
    color: "#C45A1A", script: "Ge'ez", scriptType: "ethiopic",
    liturgical: false,
  },
  ber: {
    id: "ber", name: "Berta", native: "Barta",
    region: "Benishangul-Gumuz", speakers: "0.8M",
    color: "#7A4A28", script: "Latin", scriptType: "latin",
    liturgical: false,
  },
  gum: {
    id: "gum", name: "Gumuz", native: "Gumuz",
    region: "Central Ethiopia", speakers: "0.3M",
    color: "#1A4A7A", script: "Latin", scriptType: "latin",
    liturgical: false,
  },
  bcq: {
    id: "bcq", name: "Bench", native: "Benchnon",
    region: "Southwest Ethiopia", speakers: "1M",
    color: "#5C3028", script: "Latin", scriptType: "latin",
    liturgical: false,
  },
  gez: {
    id: "gez", name: "Ge'ez", native: "ግዕዝ",
    region: "Classical / All Ethiopia", speakers: "Liturgical",
    color: "#C8A44A", script: "Ge'ez (Classical)", scriptType: "ethiopic",
    liturgical: true,
  },
}

export const LANG_LIST = Object.values(LANGUAGES)
