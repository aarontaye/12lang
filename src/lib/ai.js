const GEMINI_URL =
  'https://generativelanguage.googleapis.com/v1beta/' +
  'models/gemini-1.5-flash:generateContent?key=' +
  import.meta.env.VITE_GEMINI_KEY

async function callGemini(prompt) {
  const response = await fetch(GEMINI_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      contents: [{ parts: [{ text: prompt }] }],
      generationConfig: {
        maxOutputTokens: 800,
        temperature: 0.3
      }
    })
  })
  const data = await response.json()
  if (data.error) throw new Error(data.error.message)
  return data.candidates[0].content.parts[0].text
}

async function callClaudeAPI(prompt) {
  const response = await fetch('https://api.anthropic.com/v1/messages', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'x-api-key': import.meta.env.VITE_CLAUDE_KEY,
      'anthropic-version': '2023-06-01'
    },
    body: JSON.stringify({
      model: 'claude-3-haiku-20240307',
      max_tokens: 800,
      messages: [{ role: 'user', content: prompt }]
    })
  })
  const data = await response.json()
  if (data.error) throw new Error(data.error.message)
  return data.content[0].text
}

export async function callAI(prompt, context) {
  const systemText = context === 'geez'
    ? 'You are a Geez language scholar expert in ancient Ethiopian classical language, Ethiopian Orthodox Church, Kebra Nagast, and connections between Geez and modern Amharic and Tigrinya. Always provide Geez script plus romanization plus meaning.\n\n'
    : 'You are an expert in all 13 Ethiopian languages including Amharic, Afaan Oromoo, Tigrinya, Somali, Afar, Sidama, Wolayta, Nuer, Harari, Berta, Gumuz, Bench and the classical Geez language. Be accurate concise and culturally respectful.\n\n'

  const fullPrompt = systemText + prompt

  try {
    return await callGemini(fullPrompt)
  } catch (geminiError) {
    console.log('Gemini unavailable, using Claude fallback')
    return await callClaudeAPI(fullPrompt)
  }
}
