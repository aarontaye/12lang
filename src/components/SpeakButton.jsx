import { speakText } from '../lib/voice'

export default function SpeakButton({ text, langCode }) {
  return (
    <button
      onClick={() => speakText(text, langCode)}
      style={{
        background: 'transparent',
        border: `1px solid #D4A01755`,
        borderRadius: '8px',
        padding: '6px 10px',
        cursor: 'pointer',
        color: '#D4A017'
      }}
      title="Hear pronunciation"
    >
      🔊
    </button>
  )
}
