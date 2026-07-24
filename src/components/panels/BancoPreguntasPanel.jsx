import { useMemo, useState } from 'react'
import PREGUNTAS_80 from '../../data/preguntas80'
import MenuPanelOverlay from './MenuPanelOverlay'

const CURSOS = [...new Set(PREGUNTAS_80.map((p) => p.curso))].sort()

function BancoPreguntasPanel({ onClose }) {
  const [filtroCurso, setFiltroCurso] = useState('todos')
  const [expandida, setExpandida] = useState(null)
  const [busqueda, setBusqueda] = useState('')

  const preguntas = useMemo(() => {
    let lista = PREGUNTAS_80
    if (filtroCurso !== 'todos') {
      lista = lista.filter((p) => p.curso === filtroCurso)
    }
    if (busqueda.trim()) {
      const q = busqueda.toLowerCase()
      lista = lista.filter(
        (p) => p.enunciado.toLowerCase().includes(q) || p.curso.toLowerCase().includes(q)
      )
    }
    return lista
  }, [filtroCurso, busqueda])

  return (
    <MenuPanelOverlay title="Banco de Preguntas" onClose={onClose}>
      <p className="menu-panel-desc">
        {PREGUNTAS_80.length} preguntas oficiales para repaso. Toca una para ver el enunciado completo y la respuesta correcta.
      </p>

      <input
        type="search"
        className="menu-panel-search"
        placeholder="Buscar por texto o curso..."
        value={busqueda}
        onChange={(e) => setBusqueda(e.target.value)}
      />

      <div className="menu-panel-filters">
        <button
          type="button"
          className={`menu-panel-filter ${filtroCurso === 'todos' ? 'menu-panel-filter--active' : ''}`}
          onClick={() => setFiltroCurso('todos')}
        >
          Todos
        </button>
        {CURSOS.map((curso) => (
          <button
            key={curso}
            type="button"
            className={`menu-panel-filter ${filtroCurso === curso ? 'menu-panel-filter--active' : ''}`}
            onClick={() => setFiltroCurso(curso)}
          >
            {curso}
          </button>
        ))}
      </div>

      <p className="menu-panel-count">{preguntas.length} preguntas encontradas</p>

      <ul className="menu-panel-banco-list">
        {preguntas.slice(0, 50).map((p) => (
          <li key={p.id} className="menu-panel-banco-item">
            <button
              type="button"
              className="menu-panel-banco-trigger"
              onClick={() => setExpandida(expandida === p.id ? null : p.id)}
            >
              <span className="menu-panel-banco-num">#{p.id}</span>
              <span className="menu-panel-banco-curso">{p.curso}</span>
              <span className="menu-panel-banco-text">{p.enunciado}</span>
            </button>
            {expandida === p.id && (
              <div className="menu-panel-banco-detail">
                <p className="menu-panel-banco-enunciado">{p.enunciado}</p>
                <ul className="menu-panel-banco-opciones">
                  {Object.entries(p.opciones).map(([key, val]) => (
                    <li
                      key={key}
                      className={key === p.respuestaCorrecta ? 'menu-panel-banco-opcion--correcta' : ''}
                    >
                      <strong>{key}.</strong> {val}
                      {key === p.respuestaCorrecta && ' ✓'}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </li>
        ))}
      </ul>
      {preguntas.length > 50 && (
        <p className="menu-panel-empty-hint">Mostrando las primeras 50. Usa el filtro o la búsqueda para acotar.</p>
      )}
    </MenuPanelOverlay>
  )
}

export default BancoPreguntasPanel
