import { useState } from 'react'
import { profile } from '../data/config'

export default function Contact() {
  const [sent, setSent] = useState(false)

  function handleSubmit(e) {
    e.preventDefault()
    // Wire this up to a form service (Formspree, Resend, etc.) or your own
    // backend endpoint. For now it just confirms the message locally.
    setSent(true)
  }

  return (
    <section id="contact" className="contact">
      <div className="container contact-grid">
        <div>
          <span className="section-kicker">Contact</span>
          <h2 className="section-heading">Let's build something together.</h2>
          <p className="section-intro" style={{ marginBottom: 0 }}>
            Open to full-stack and backend roles, especially where the work touches
            payments, banking, or other systems where correctness matters.
          </p>

          <div className="contact-links">
            <div className="contact-link-row">
              <span>Email</span>
              <a href={`mailto:${profile.email}`}>{profile.email}</a>
            </div>
            <div className="contact-link-row">
              <span>LinkedIn</span>
              <a href={profile.linkedin} target="_blank" rel="noreferrer">
                mary-jane-ocariza
              </a>
            </div>
            <div className="contact-link-row">
              <span>GitHub</span>
              <a href={profile.github} target="_blank" rel="noreferrer">
                Ocariza23
              </a>
            </div>
          </div>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="form-field">
            <label htmlFor="name">Name</label>
            <input id="name" name="name" type="text" required />
          </div>
          <div className="form-field">
            <label htmlFor="email">Email</label>
            <input id="email" name="email" type="email" required />
          </div>
          <div className="form-field">
            <label htmlFor="message">Message</label>
            <textarea id="message" name="message" rows={5} required />
          </div>
          <button type="submit" className="btn btn-primary" style={{ width: '100%' }}>
            {sent ? 'Message sent' : 'Send message'}
          </button>
          {sent && (
            <p className="form-note">
              Thanks for reaching out — connect this form to an email service to receive
              messages for real.
            </p>
          )}
        </form>
      </div>
    </section>
  )
}
