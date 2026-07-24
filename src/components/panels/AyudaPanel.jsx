import MenuPanelOverlay from './MenuPanelOverlay'

const PASOS = [
  { n: 1, titulo: 'Inicia sesión', desc: 'Regístrate o ingresa con tu correo para acceder al simulador.' },
  { n: 2, titulo: 'Elige tu área', desc: 'Selecciona el área académica (A–E) según la carrera que postulas.' },
  { n: 3, titulo: 'Comienza el simulacro', desc: 'Pulsa "Comenzar Simulacro". Tendrás 3 horas y 80 preguntas.' },
  { n: 4, titulo: 'Responde y finaliza', desc: 'Marca tus respuestas y entrega el examen cuando termines.' },
  { n: 5, titulo: 'Revisa resultados', desc: 'Consulta tu nota, aciertos y revisión detallada al finalizar.' },
  { n: 6, titulo: 'Practica más', desc: 'Usa el Banco de Preguntas y revisa tus estadísticas desde el menú ☰.' },
]

function AyudaPanel({ onClose }) {
  return (
    <MenuPanelOverlay title="Cómo usar el simulador" onClose={onClose}>
      <p className="menu-panel-desc">
        Guía rápida para aprovechar al máximo tu preparación para la admisión UNASAM.
      </p>
      <ol className="menu-panel-ayuda">
        {PASOS.map((p) => (
          <li key={p.n} className="menu-panel-ayuda-item">
            <span className="menu-panel-ayuda-num">{p.n}</span>
            <div>
              <h4>{p.titulo}</h4>
              <p>{p.desc}</p>
            </div>
          </li>
        ))}
      </ol>
    </MenuPanelOverlay>
  )
}

export default AyudaPanel
