import '../../MenuPanel.css'

function MenuPanelOverlay({ title, onClose, children }) {
  return (
    <div className="menu-panel-overlay" role="dialog" aria-modal="true" aria-labelledby="menu-panel-title">
      <div className="menu-panel-backdrop" onClick={onClose} aria-hidden="true" />
      <div className="menu-panel-card">
        <header className="menu-panel-header">
          <h2 id="menu-panel-title" className="menu-panel-title">{title}</h2>
          <button type="button" className="menu-panel-close" onClick={onClose} aria-label="Cerrar">
            ×
          </button>
        </header>
        <div className="menu-panel-body">
          {children}
        </div>
      </div>
    </div>
  )
}

export default MenuPanelOverlay
