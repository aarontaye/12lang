export async function speakText(text, langCode) {
  if ('speechSynthesis' in window) {
    const utterance = new SpeechSynthesisUtterance(text)
    utterance.lang = getLangCode(langCode)
    speechSynthesis.speak(utterance)
  }
}

function getLangCode(langCode) {
  const langMap = {
    'amharic': 'am-ET',
    'english': 'en-US',
    'tigrinya': 'ti-ER',
    'oromoo': 'om-ET',
    'somali': 'so-SO'
  }
  return langMap[langCode] || 'en-US'
}
