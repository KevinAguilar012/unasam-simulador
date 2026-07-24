import MenuPanelOverlay from './MenuPanelOverlay'
import { obtenerEstadisticas, limpiarEstadisticas } from '../../utils/estadisticas'

const AREA_LABELS = {
  A: 'Área A',
  B: 'Área B',
  C: 'Área C',
  D: 'Área D',
  E: 'Área E',
}

function formatFecha(iso) {
  return new Date(iso).toLocaleDateString('es-PE', {
    day: '2-digit',
    month: 'short',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  })
}

function formatTiempo(segundos) {
  const h = Math.floor(segundos / 3600)
  const m = Math.floor((segundos % 3600) / 60)
  return h > 0 ? `${h}h ${m}m` : `${m} min`
}

function EstadisticasPanel({ user, onClose }) {
  const { historial, resumen } = obtenerEstadisticas(user?.correo)

  const handleLimpiar = () => {
    if (window.confirm('¿Eliminar todo tu historial de simulacros?')) {
      limpiarEstadisticas(user?.correo)
      onClose()
    }
  }

  return (
    <MenuPanelOverlay title="Mis Estadísticas" onClose={onClose}>
      {!resumen ? (
        <div className="menu-panel-empty">
          <p>Aún no has completado ningún simulacro.</p>
          <p className="menu-panel-empty-hint">Selecciona un área académica e inicia un simulacro para ver tus resultados aquí.</p>
        </div>
      ) : (
        <>
          <div className="menu-panel-stats-grid">
            <div className="menu-panel-stat">
              <span className="menu-panel-stat-value">{resumen.totalSimulacros}</span>
              <span className="menu-panel-stat-label">Simulacros</span>
            </div>
            <div className="menu-panel-stat">
              <span className="menu-panel-stat-value menu-panel-stat-value--green">
                +{resumen.mejorNota.toFixed(2)}
              </span>
              <span className="menu-panel-stat-label">Mejor nota</span>
            </div>
            <div className="menu-panel-stat">
              <span className="menu-panel-stat-value">{resumen.promedio.toFixed(2)}</span>
              <span className="menu-panel-stat-label">Promedio</span>
            </div>
          </div>

          <h3 className="menu-panel-subtitle">Historial reciente</h3>
          <ul className="menu-panel-list">
            {historial.map((item) => (
              <li key={item.id} className="menu-panel-list-item">
                <div className="menu-panel-list-main">
                  <span className="menu-panel-badge">{AREA_LABELS[item.area] || item.area}</span>
                  <span className={`menu-panel-score ${item.score >= 0 ? 'menu-panel-score--pos' : 'menu-panel-score--neg'}`}>
                    {item.score > 0 ? '+' : ''}{item.score.toFixed(2)} pts
                  </span>
                </div>
                <div className="menu-panel-list-meta">
                  <span>{item.correct}✓ · {item.incorrect}✗ · {item.omitted}—</span>
                  <span>{formatTiempo(item.timeUsed)}</span>
                </div>
                <time className="menu-panel-list-date">{formatFecha(item.fecha)}</time>
              </li>
            ))}
          </ul>

          <button type="button" className="menu-panel-btn-muted" onClick={handleLimpiar}>
            Limpiar historial
          </button>
        </>
      )}
    </MenuPanelOverlay>
  )
}

export default EstadisticasPanel
