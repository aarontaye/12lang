import { useState } from 'react'
import { callAI } from '../lib/ai'
import SpeakButton from '../components/SpeakButton'

export default function Translate() {
  const [fromLang, setFromLang] = useState('amharic')
  const [toLang, setToLang] = useState('english')
  const [input, setInput] = useState('')
  const [result, setResult] = useState(null)
  const [loading, setLoading] = useState(false)

  const handleTranslate = async () => {
    if (!input.trim()) return
    setLoading(true)
    try {
      const prompt = `Translate this ${fromLang} text to ${toLang}: "${input}"`
      const translation = await callAI(prompt)
      setResult({ translation })
    } catch (error) {
      console.error('Translation error:', error)
      setResult({ error: 'Translation failed' })
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">Translate</h1>

      <div className="flex gap-4 mb-4">
        <select
          value={fromLang}
          onChange={(e) => setFromLang(e.target.value)}
          className="flex-1 p-2 border rounded"
        >
          <option value="amharic">Amharic</option>
          <option value="english">English</option>
          <option value="tigrinya">Tigrinya</option>
        </select>

        <select
          value={toLang}
          onChange={(e) => setToLang(e.target.value)}
          className="flex-1 p-2 border rounded"
        >
          <option value="english">English</option>
          <option value="amharic">Amharic</option>
          <option value="tigrinya">Tigrinya</option>
        </select>
      </div>

      <textarea
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Enter text to translate..."
        className="w-full p-3 border rounded mb-4 h-24"
      />

      <button
        onClick={handleTranslate}
        disabled={loading}
        className="bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600 disabled:opacity-50"
      >
        {loading ? 'Translating...' : 'Translate'}
      </button>

      {result && (
        <div className="mt-6 p-4 bg-gray-100 rounded">
          {result.error ? (
            <p className="text-red-600">{result.error}</p>
          ) : (
            <div className="flex items-center gap-2">
              <p className="text-lg">{result.translation}</p>
              <SpeakButton text={result.translation} langCode={toLang} />
            </div>
          )}
        </div>
      )}
    </div>
  )
}
