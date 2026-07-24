import MenuPanelOverlay from './MenuPanelOverlay'

const REGLAS = [
  {
    titulo: 'Duración sugerida',
    desc: '3 horas continuas con cuenta regresiva.',
    color: 'blue',
  },
  {
    titulo: 'Estructura del Examen',
    desc: '80 preguntas divididas por materias oficiales.',
    color: 'indigo',
  },
  {
    titulo: 'Calificación UNASAM',
    desc: '+4.00 pts por respuesta correcta.',
    color: 'emerald',
  },
  {
    titulo: 'Penalización',
    desc: '−0.50 pts por respuesta incorrecta. Las omitidas no suman ni restan.',
    color: 'rose',
  },
  {
    titulo: 'Áreas académicas',
    desc: 'Selecciona tu área (A–E) antes de iniciar. Las preguntas se adaptan a tu postulación.',
    color: 'amber',
  },
]

function ReglamentoPanel({ onClose }) {
  return (
    <MenuPanelOverlay title="Reglamento del Examen" onClose={onClose}>
      <p className="menu-panel-desc">
        Normas oficiales aplicadas en este simulador de admisión UNASAM 2026-I.
      </p>
      <ul className="menu-panel-reglas">
        {REGLAS.map((r) => (
          <li key={r.titulo} className={`menu-panel-regla menu-panel-regla--${r.color}`}>
            <h4>{r.titulo}</h4>
            <p>{r.desc}</p>
          </li>
        ))}
      </ul>
    </MenuPanelOverlay>
  )
}

export default ReglamentoPanel
