import { useState, useEffect } from 'react'
import { obtenerEstadisticas } from '../utils/estadisticas'
import '../SidebarMenu.css'

const AREA_LABELS = {
  A: 'Área A · Ingenierías',
  B: 'Área B · Sociales',
  C: 'Área C · Económicas',
  D: 'Área D · Salud',
  E: 'Área E · Ciencias',
}

const LINKS = {
  prospecto: 'https://www.unasam.edu.pe/publicaciones',
  portal: 'https://www.unasam.edu.pe',
  admision: 'https://www.unasam.edu.pe/admision',
}

function SidebarMenu({
  user,
  examStarted,
  selectedArea,
  onGoHome,
  onLogout,
  onChangeAccount,
  onOpenPanel,
}) {
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setIsOpen(false)
      }
    }

    if (isOpen) {
      document.body.classList.add('sidebar-open')
      window.addEventListener('keydown', handleKeyDown)
    } else {
      document.body.classList.remove('sidebar-open')
    }

    return () => {
      document.body.classList.remove('sidebar-open')
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [isOpen])

  const closeMenu = () => setIsOpen(false)

  const handleAction = (callback) => {
    closeMenu()
    callback?.()
  }

  const handlePanel = (panel) => {
    closeMenu()
    onOpenPanel(panel)
  }

  const openExternal = (url) => {
    closeMenu()
    window.open(url, '_blank', 'noopener,noreferrer')
  }

  const displayName = user?.nombre || 'Estudiante UNASAM'
  const displayEmail = user?.correo || 'estudiante@unasam.edu.pe'
  const { resumen } = obtenerEstadisticas(user?.correo)

  return (
    <div className="sidebar-root">
      <button
        type="button"
        className="sidebar-hamburger-btn"
        aria-label={isOpen ? "Cerrar menú" : "Abrir menú"}
        aria-expanded={isOpen}
        onClick={() => setIsOpen((prev) => !prev)}
      >
        <span className="sidebar-hamburger-line" />
        <span className="sidebar-hamburger-line" />
        <span className="sidebar-hamburger-line" />
      </button>

      <div
        className={`sidebar-overlay ${isOpen ? 'is-active' : ''}`}
        onClick={closeMenu}
        aria-hidden="true"
      />

      <aside className={`sidebar-menu ${isOpen ? 'is-active' : ''}`} aria-label="Menú de navegación">
        <div className="sidebar-menu-header">
          <h2 className="sidebar-menu-title">Menú</h2>
          <button type="button" className="sidebar-close-btn" onClick={closeMenu} aria-label="Cerrar menú">
            ×
          </button>
        </div>

        <div className="sidebar-menu-body">
          {examStarted && selectedArea && (
            <p className="sidebar-context-badge">
              Simulacro en curso · {AREA_LABELS[selectedArea] || selectedArea}
            </p>
          )}

          <section className="sidebar-section">
            <p className="sidebar-section-label">Usuario</p>
            <div className="sidebar-user-card">
              <p className="sidebar-user-name">{displayName}</p>
              <p className="sidebar-user-email">{displayEmail}</p>
            </div>
            {resumen && (
              <div className="sidebar-user-stats-mini">
                <span>
                  <strong>{resumen.totalSimulacros}</strong>
                  Simulacros
                </span>
                <span>
                  <strong>+{resumen.mejorNota.toFixed(0)}</strong>
                  Mejor nota
                </span>
              </div>
            )}
            <button
              type="button"
              className="menu-item"
              onClick={() => handlePanel('estadisticas')}
            >
              <svg className="menu-item-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
              Mis Estadísticas
              {resumen && <span className="menu-item-badge">{resumen.totalSimulacros}</span>}
            </button>
          </section>

          <div className="sidebar-divider" />

          <section className="sidebar-section">
            <p className="sidebar-section-label">Simulador</p>
            <button
              type="button"
              className="menu-item"
              onClick={() => handleAction(onGoHome)}
            >
              <svg className="menu-item-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
              </svg>
              {examStarted ? 'Salir del simulacro' : 'Inicio / Cambiar de Área'}
            </button>
            <button
              type="button"
              className="menu-item"
              onClick={() => handlePanel('reglamento')}
            >
              <svg className="menu-item-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
              Reglamento del Examen
            </button>
            <button
              type="button"
              className="menu-item"
              onClick={() => handlePanel('banco')}
            >
              <svg className="menu-item-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Banco de Preguntas
              <span className="menu-item-badge">80</span>
            </button>
          </section>

          <div className="sidebar-divider" />

          <section className="sidebar-section">
            <p className="sidebar-section-label">Recursos UNASAM</p>
            <button
              type="button"
              className="menu-item menu-item--external"
              onClick={() => openExternal(LINKS.prospecto)}
            >
              <svg className="menu-item-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              Prospecto Oficial
              <svg className="menu-item-external-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </button>
            <button
              type="button"
              className="menu-item menu-item--external"
              onClick={() => openExternal(LINKS.admision)}
            >
              <svg className="menu-item-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
              </svg>
              Portal de Admisión
              <svg className="menu-item-external-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </button>
            <button
              type="button"
              className="menu-item menu-item--external"
              onClick={() => openExternal(LINKS.portal)}
            >
              <svg className="menu-item-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
              </svg>
              Sitio Web UNASAM
              <svg className="menu-item-external-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </button>
          </section>

          <div className="sidebar-divider" />

          <section className="sidebar-section">
            <p className="sidebar-section-label">Ayuda</p>
            <button
              type="button"
              className="menu-item"
              onClick={() => handlePanel('ayuda')}
            >
              <svg className="menu-item-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Cómo usar el simulador
            </button>
          </section>

          <div className="sidebar-divider" />

          <section className="sidebar-section">
            <p className="sidebar-section-label">Ajustes y Sesión</p>
            <button
              type="button"
              className="menu-item menu-item--muted"
              onClick={() => handleAction(onChangeAccount)}
            >
              <svg className="menu-item-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
              Cambiar de Cuenta
            </button>
            <button
              type="button"
              className="menu-item menu-item--danger"
              onClick={() => handleAction(onLogout)}
            >
              <svg className="menu-item-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
              </svg>
              Cerrar Sesión
            </button>
          </section>
        </div>

        <p className="sidebar-menu-footer">UNASAM · Admisión 2026-I</p>
      </aside>
    </div>
  )
}

export default SidebarMenu
