import { useState } from 'react'
import { callAI } from '../lib/ai'
import SpeakButton from '../components/SpeakButton'

export default function Phrases() {
  const [phrase, setPhrase] = useState('')
  const [toLang, setToLang] = useState('english')
  const [phraseResult, setPhraseResult] = useState(null)
  const [loading, setLoading] = useState(false)

  const handleTranslate = async () => {
    if (!phrase.trim()) return
    setLoading(true)
    try {
      const prompt = `Translate this phrase to ${toLang}: "${phrase}"`
      const translation = await callAI(prompt)
      setPhraseResult({ phrase: translation })
    } catch (error) {
      console.error('Translation error:', error)
      setPhraseResult({ error: 'Translation failed' })
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">Phrases</h1>

      <div className="mb-4">
        <select
          value={toLang}
          onChange={(e) => setToLang(e.target.value)}
          className="p-2 border rounded mb-4"
        >
          <option value="english">English</option>
          <option value="amharic">Amharic</option>
          <option value="tigrinya">Tigrinya</option>
        </select>

        <input
          type="text"
          value={phrase}
          onChange={(e) => setPhrase(e.target.value)}
          placeholder="Enter a phrase..."
          className="w-full p-3 border rounded mb-4"
        />

        <button
          onClick={handleTranslate}
          disabled={loading}
          className="bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600 disabled:opacity-50"
        >
          {loading ? 'Translating...' : 'Translate'}
        </button>
      </div>

      {phraseResult && (
        <div className="mt-6 p-4 bg-gray-100 rounded">
          {phraseResult.error ? (
            <p className="text-red-600">{phraseResult.error}</p>
          ) : (
            <div className="flex items-center gap-2">
              <p className="text-lg">{phraseResult.phrase}</p>
              <SpeakButton text={phraseResult.phrase} langCode={toLang} />
            </div>
          )}
        </div>
      )}
    </div>
  )
}
