import React, { useState } from 'react'

const AREAS = [
  {
    id: 'A',
    name: 'Área A',
    title: 'Ingenierías',
    desc: 'Ingeniería Civil, Sistemas, Minas, Ambiental, Industrial, Agrícola, etc.',
    icon: (
      <svg className="w-8 h-8 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
      </svg>
    ),
    borderColor: 'group-hover:border-blue-500/50',
    selectedBg: 'bg-blue-600/10 border-blue-500 shadow-blue-500/10'
  },
  {
    id: 'B',
    name: 'Área B',
    title: 'Ciencias Sociales y Derecho',
    desc: 'Derecho y Ciencias Políticas, Ciencias de la Comunicación, Educación, Arqueología.',
    icon: (
      <svg className="w-8 h-8 text-purple-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
      </svg>
    ),
    borderColor: 'group-hover:border-purple-500/50',
    selectedBg: 'bg-purple-600/10 border-purple-500 shadow-purple-500/10'
  },
  {
    id: 'C',
    name: 'Área C',
    title: 'Económicas y Administrativas',
    desc: 'Administración, Economía, Contabilidad, Turismo.',
    icon: (
      <svg className="w-8 h-8 text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    borderColor: 'group-hover:border-emerald-500/50',
    selectedBg: 'bg-emerald-600/10 border-emerald-500 shadow-emerald-500/10'
  },
  {
    id: 'D',
    name: 'Área D',
    title: 'Ciencias de la Salud',
    desc: 'Medicina Humana, Enfermería, Obstetricia.',
    icon: (
      <svg className="w-8 h-8 text-rose-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    ),
    borderColor: 'group-hover:border-rose-500/50',
    selectedBg: 'bg-rose-600/10 border-rose-500 shadow-rose-500/10'
  },
  {
    id: 'E',
    name: 'Área E',
    title: 'Ciencias',
    desc: 'Matemática, Física, Estadística, Química.',
    icon: (
      <svg className="w-8 h-8 text-amber-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364.364l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
    borderColor: 'group-hover:border-amber-500/50',
    selectedBg: 'bg-amber-600/10 border-amber-500 shadow-amber-500/10'
  }
];

function Dashboard({ onStart }) {
  const [selectedArea, setSelectedArea] = useState(null);

  const handleStart = () => {
    if (selectedArea) {
      onStart(selectedArea);
    }
  };

  return (
    <div className="min-h-screen bg-[#0b0f19] text-slate-100 font-sans flex flex-col justify-between relative overflow-hidden">
      
      {/* Decorative background glows */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0 opacity-20">
        <div className="absolute -top-[10%] -left-[10%] w-[50%] h-[50%] rounded-full bg-blue-600/30 blur-[130px]"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] rounded-full bg-indigo-500/20 blur-[130px]"></div>
      </div>

      {/* Header */}
      <header className="relative z-10 border-b border-slate-800 bg-[#0f172a]/60 backdrop-blur-md">
        <div className="max-w-6xl mx-auto px-4 py-5 flex justify-between items-center">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-blue-600 to-indigo-500 flex items-center justify-center text-white font-extrabold shadow-lg shadow-blue-500/20">
              UN
            </div>
            <div>
              <h1 className="text-xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-indigo-400">
                UNASAM
              </h1>
              <p className="text-[10px] uppercase tracking-wider font-semibold opacity-60">Simulador de Admisión</p>
            </div>
          </div>
          <span className="text-xs px-3 py-1 rounded-full bg-slate-800/80 border border-slate-700 text-slate-300">
            Admisión 2026-I
          </span>
        </div>
      </header>

      {/* Main Content */}
      <main className="relative z-10 flex-grow max-w-6xl mx-auto px-4 py-10 w-full grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
        
        {/* Left/Middle Column: Area Selector */}
        <div className="lg:col-span-2 space-y-6">
          <div className="space-y-2">
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
              ¿Qué carrera vas a postular?
            </h2>
            <p className="text-slate-400 text-sm max-w-xl">
              Selecciona tu área académica para filtrar las preguntas específicas de tu examen y simular el entorno oficial.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {AREAS.map((area) => {
              const isSelected = selectedArea === area.id;
              return (
                <button
                  key={area.id}
                  onClick={() => setSelectedArea(area.id)}
                  className={`group p-5 rounded-2xl border text-left transition-all duration-300 focus:outline-none ${
                    isSelected
                      ? area.selectedBg + ' border-2 ring-1 ring-offset-0'
                      : 'border-slate-800 hover:border-slate-700 bg-slate-900/40 hover:bg-slate-900/60'
                  } shadow-lg`}
                >
                  <div className="flex items-start justify-between space-x-3">
                    <div className="space-y-1.5">
                      <div className="flex items-center space-x-2">
                        <span className={`text-[10px] font-extrabold uppercase px-2 py-0.5 rounded ${
                          isSelected ? 'bg-blue-500/20 text-blue-400' : 'bg-slate-800 text-slate-400'
                        }`}>
                          {area.name}
                        </span>
                        {isSelected && (
                          <span className="w-2 h-2 rounded-full bg-blue-500 animate-ping"></span>
                        )}
                      </div>
                      <h3 className="font-bold text-base text-white group-hover:text-blue-400 transition-colors">
                        {area.title}
                      </h3>
                      <p className="text-xs text-slate-400 line-clamp-2 leading-relaxed">
                        {area.desc}
                      </p>
                    </div>
                    <div className={`p-2 rounded-xl bg-slate-950/40 border border-slate-800 group-hover:scale-110 transition-transform ${
                      isSelected ? 'border-blue-500/30' : ''
                    }`}>
                      {area.icon}
                    </div>
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Right Column: Rules & Actions */}
        <div className="space-y-6 lg:col-span-1">
          
          {/* Rules Card */}
          <div className="p-6 rounded-2xl border border-slate-800 bg-slate-900/30 backdrop-blur-sm shadow-xl space-y-5">
            <h3 className="text-lg font-bold text-white flex items-center gap-2">
              <svg className="w-5 h-5 text-amber-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
              Reglamento del Examen
            </h3>

            <div className="space-y-4 text-xs">
              <div className="flex items-start space-x-3">
                <div className="p-1.5 rounded-lg bg-blue-600/10 text-blue-500 border border-blue-500/20 shrink-0">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-bold text-slate-200">Duración sugerida</h4>
                  <p className="text-slate-400">3 horas continuas (cuenta regresiva).</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <div className="p-1.5 rounded-lg bg-indigo-600/10 text-indigo-400 border border-indigo-500/20 shrink-0">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-bold text-slate-200">Estructura del Examen</h4>
                  <p className="text-slate-400">80 preguntas divididas por materias oficiales.</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <div className="p-1.5 rounded-lg bg-emerald-600/10 text-emerald-500 border border-emerald-500/20 shrink-0">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-bold text-slate-200">Calificación UNASAM</h4>
                  <p className="text-slate-400"><strong>+4.00 pts</strong> por respuesta correcta.</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <div className="p-1.5 rounded-lg bg-rose-600/10 text-rose-500 border border-rose-500/20 shrink-0">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-bold text-slate-200">Penalización</h4>
                  <p className="text-slate-400"><strong>-0.50 pts</strong> por respuesta incorrecta.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Action Trigger */}
          <div className="space-y-3">
            <button
              onClick={handleStart}
              disabled={!selectedArea}
              className={`w-full py-4 rounded-xl font-bold shadow-lg transition-all duration-200 text-sm tracking-wide ${
                selectedArea
                  ? 'bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white hover:shadow-blue-500/30 transform hover:-translate-y-0.5'
                  : 'bg-slate-800 text-slate-500 cursor-not-allowed opacity-50 border border-slate-700/50'
              }`}
            >
              {selectedArea ? 'Comenzar Simulacro' : 'Selecciona un Área Académica'}
            </button>
            <p className="text-[10px] text-slate-500 text-center uppercase tracking-wider">
              Sistema de Preparación Universitaria UNASAM
            </p>
          </div>

        </div>

      </main>

      {/* Footer */}
      <footer className="relative z-10 border-t border-slate-900 bg-[#070b13] py-6 text-center text-xs text-slate-500">
        <p>Simulador de Admisión UNASAM © 2026. Todos los derechos reservados.</p>
      </footer>

    </div>
  )
}

export default Dashboard
