import React, { useState } from 'react'
import PREGUNTAS_80 from '../data/preguntas80'
import Examen from './Examen'
import { calcularPuntaje } from '../utils/calcularPuntaje'
import Resultados from './Resultados'

function Simulador({ selectedArea, onBack }) {
  const [answers, setAnswers] = useState({}); // { questionId: selectedKey }
  const [isFinished, setIsFinished] = useState(false);
  const [timeLeft, setTimeLeft] = useState(10800); // 3 horas en segundos
  const [isDarkMode, setIsDarkMode] = useState(true);

  // We always use the 80-question set for a full exam simulation
  const filteredQuestions = PREGUNTAS_80;

  const restartExam = () => {
    setAnswers({});
    setTimeLeft(10800);
    setIsFinished(false);
  };

  const formatTime = (seconds) => {
    const h = Math.floor(seconds / 3600);
    const m = Math.floor((seconds % 3600) / 60);
    const s = seconds % 60;
    return `${h.toString().padStart(2, '0')}:${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
  };

  const results = calcularPuntaje(answers, filteredQuestions);
  const timeUsed = 10800 - timeLeft;

  const getAreaLabel = (areaId) => {
    const labels = {
      'all': 'General',
      'A': 'Área A (Ingenierías)',
      'B': 'Área B (Sociales y Derecho)',
      'C': 'Área C (Económicas)',
      'D': 'Área D (Salud)',
      'E': 'Área E (Ciencias)'
    };
    return labels[areaId] || areaId;
  };

  return (
    <div className={`min-h-screen transition-colors duration-300 font-sans ${isDarkMode ? 'bg-[#0f172a] text-slate-100' : 'bg-slate-50 text-slate-800'}`}>
      
      {/* Background Lights */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0 opacity-15">
        <div className="absolute -top-[10%] -left-[10%] w-[50%] h-[50%] rounded-full bg-blue-600 blur-[130px]"></div>
        <div className="absolute top-[30%] right-[-10%] w-[45%] h-[45%] rounded-full bg-amber-500 blur-[130px]"></div>
      </div>

      <div className="relative z-10 flex flex-col min-h-screen">
        
        {/* Navigation Header */}
        <header className={`border-b ${isDarkMode ? 'border-slate-800 bg-[#0f172a]/80' : 'border-slate-200 bg-white/80'} backdrop-blur-md sticky top-0 transition-colors duration-300 z-50`}>
          <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-blue-600 to-amber-500 flex items-center justify-center text-white font-extrabold shadow-lg shadow-blue-500/20">
                UN
              </div>
              <div>
                <h1 className="text-xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-amber-500">
                  UNASAM
                </h1>
                <p className="text-[10px] uppercase tracking-wider font-semibold opacity-60">Simulador de Admisión</p>
              </div>
            </div>

            <div className="flex items-center space-x-3">
              {!isFinished && (
                <div className={`flex items-center space-x-2 px-3 py-1.5 rounded-lg border font-mono text-sm ${
                  timeLeft < 900 
                    ? 'bg-rose-500/10 border-rose-500 text-rose-500 animate-pulse' 
                    : isDarkMode 
                      ? 'bg-slate-900 border-slate-800 text-amber-400' 
                      : 'bg-slate-100 border-slate-200 text-blue-700'
                }`}>
                  <svg className="w-4 h-4 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>{formatTime(timeLeft)}</span>
                </div>
              )}

              <button 
                onClick={() => setIsDarkMode(!isDarkMode)}
                className={`p-2 rounded-lg border transition-all duration-200 ${isDarkMode ? 'border-slate-800 hover:bg-slate-800 text-amber-400' : 'border-slate-200 hover:bg-slate-100 text-blue-600'}`}
                aria-label="Alternar modo de color"
              >
                {isDarkMode ? (
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364-6.364l-.707.707M6.343 17.657l-.707.707m2.828 0l-.707-.707m12.728-12.728l-.707-.707M12 8a4 4 0 100 8 4 4 0 000-8z" />
                  </svg>
                ) : (
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </header>

        {/* Content Container */}
        <main className="flex-grow max-w-5xl mx-auto px-4 py-8 w-full flex flex-col justify-center">
          
          {filteredQuestions.length === 0 ? (
            <div className="text-center py-12 space-y-4">
              <p className="text-lg opacity-70">No se encontraron preguntas cargadas para esta área académica.</p>
              <button 
                onClick={onBack}
                className="px-6 py-2.5 rounded-lg bg-blue-600 text-white font-bold text-sm"
              >
                Volver al Panel
              </button>
            </div>
          ) : !isFinished ? (
            <Examen
              selectedArea={selectedArea}
              isDarkMode={isDarkMode}
              onBack={onBack}
              onFinish={(finalAnswers, finalTimeLeft) => {
                setAnswers(finalAnswers);
                setTimeLeft(finalTimeLeft);
                setIsFinished(true);
              }}
            />
          ) : (
            <Resultados
              results={results}
              answers={answers}
              questions={filteredQuestions}
              timeUsed={timeUsed}
              formatTime={formatTime}
              selectedArea={selectedArea}
              onRestart={restartExam}
              onBack={onBack}
              isDarkMode={isDarkMode}
            />
          )}

        </main>

        {/* Footer */}
        <footer className={`py-6 text-center text-xs border-t transition-colors duration-300 ${
          isDarkMode ? 'bg-[#0b0f19] border-slate-900 text-slate-500' : 'bg-slate-100 border-slate-200 text-slate-500'
        }`}>
          <div className="max-w-6xl mx-auto px-4 space-y-2">
            <p>
              Simulador de Admisión UNASAM © 2026. Desarrollado bajo las normas oficiales de evaluación.
            </p>
            <p className="opacity-70">
              Hecho con React, Vite y Tailwind CSS v4
            </p>
          </div>
        </footer>

      </div>
    </div>
  )
}

export default Simulador
