const STATS_KEY = 'unasam_estadisticas'

function getAllStats() {
  try {
    return JSON.parse(localStorage.getItem(STATS_KEY) || '{}')
  } catch {
    return {}
  }
}

function saveAllStats(data) {
  localStorage.setItem(STATS_KEY, JSON.stringify(data))
}

export function guardarResultado(correo, { area, score, correct, incorrect, omitted, total, timeUsed }) {
  if (!correo) return

  const all = getAllStats()
  const userStats = all[correo] || { historial: [] }

  userStats.historial.unshift({
    id: Date.now(),
    fecha: new Date().toISOString(),
    area,
    score,
    correct,
    incorrect,
    omitted,
    total,
    timeUsed,
  })

  if (userStats.historial.length > 20) {
    userStats.historial = userStats.historial.slice(0, 20)
  }

  all[correo] = userStats
  saveAllStats(all)
}

export function obtenerEstadisticas(correo) {
  if (!correo) return { historial: [], resumen: null }

  const historial = getAllStats()[correo]?.historial || []

  if (historial.length === 0) {
    return { historial: [], resumen: null }
  }

  const scores = historial.map((h) => h.score)
  const mejorNota = Math.max(...scores)
  const promedio = scores.reduce((a, b) => a + b, 0) / scores.length

  return {
    historial,
    resumen: {
      totalSimulacros: historial.length,
      mejorNota,
      promedio: Number(promedio.toFixed(2)),
      ultimoSimulacro: historial[0],
    },
  }
}

export function limpiarEstadisticas(correo) {
  if (!correo) return
  const all = getAllStats()
  delete all[correo]
  saveAllStats(all)
}
