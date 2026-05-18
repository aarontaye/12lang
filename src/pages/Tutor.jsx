import { useState } from 'react'
import supabase from '../lib/supabase'

export default function Tutor() {
  const [messages, setMessages] = useState([])
  const [toLang, setToLang] = useState('amharic')

  async function saveXP(langCode) {
    const userStr = localStorage.getItem('user')
    if (!userStr) return

    const user = JSON.parse(userStr)

    const { data: existing } = await supabase
      .from('learning_progress')
      .select('*')
      .eq('user_id', user.id)
      .eq('lang_code', langCode)
      .maybeSingle()

    if (existing) {
      await supabase.from('learning_progress')
        .update({
          xp: existing.xp + 10,
          sessions: existing.sessions + 1,
          last_activity: new Date().toISOString()
        })
        .eq('id', existing.id)
    } else {
      await supabase.from('learning_progress').insert({
        user_id: user.id,
        lang_code: langCode,
        xp: 10,
        sessions: 1,
        last_activity: new Date().toISOString()
      })
    }

    const current = parseInt(
      localStorage.getItem('xpTotal') || '0'
    )
    localStorage.setItem('xpTotal', current + 10)
  }

  function addAIMessage(text) {
    setMessages(prev => {
      const updated = [...prev, { role: 'ai', text }]
      saveXP(toLang)
      return updated
    })
  }

  return <div>Tutor Page</div>
}
