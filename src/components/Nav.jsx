import { useState } from 'react'
import { nav } from '../data/config'

export default function Nav() {
  const [open, setOpen] = useState(false)

  return (
    <header className="nav">
      <div className="container nav-inner">
        <a href="#home" className="nav-mark" onClick={() => setOpen(false)}>
          <span className="nav-mark-dot" aria-hidden="true" />
          mj.dev
        </a>

        <ul className={`nav-links ${open ? 'open' : ''}`}>
          {nav.map((item) => (
            <li key={item.href}>
              <a href={item.href} onClick={() => setOpen(false)}>
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        <button
          className="nav-toggle"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? '×' : '☰'}
        </button>
      </div>
    </header>
  )
}
