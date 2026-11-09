// EmailJS integration (the original site uses EmailJS too).
// Create a .env file with:
//   VITE_EMAILJS_SERVICE_ID=...
//   VITE_EMAILJS_TEMPLATE_ID=...
//   VITE_EMAILJS_PUBLIC_KEY=...
// Without those, forms fall back to opening the visitor's mail client.

import { COMPANY } from '../data.js'

const SERVICE = import.meta.env.VITE_EMAILJS_SERVICE_ID
const TEMPLATE = import.meta.env.VITE_EMAILJS_TEMPLATE_ID
const KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY

export async function sendForm(fields) {
  if (SERVICE && TEMPLATE && KEY) {
    try {
      const res = await fetch('https://api.emailjs.com/api/v1.0/email/send', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ service_id: SERVICE, template_id: TEMPLATE, user_id: KEY, template_params: fields }),
      })
      return res.ok
    } catch {
      return false
    }
  }

  // Fallback: mailto
  const body = Object.entries(fields)
    .filter(([k]) => k !== 'subject')
    .map(([k, v]) => `${k}: ${v}`)
    .join('\n')
  window.location.href = `mailto:${COMPANY.email}?subject=${encodeURIComponent(fields.subject || 'Website enquiry')}&body=${encodeURIComponent(body)}`
  return true
}
