import React, { useState, useEffect } from 'react';
import PREGUNTAS_80 from '../data/preguntas80';

function Examen({ selectedArea, onFinish, onBack, isDarkMode }) {
  const [currentIdx, setCurrentIdx] = useState(0);
  const [answers, setAnswers] = useState({}); // { [questionId]: 'A'/'B'/etc }
  const [timeLeft, setTimeLeft] = useState(10800); // 3 hours (10800 seconds)
  const [showConfirmModal, setShowConfirmModal] = useState(false);
  const [isTimeUp, setIsTimeUp] = useState(false);

  // Get the 80 questions directly
  const questions = PREGUNTAS_80;

  // Real-time Countdown Timer
  useEffect(() => {
    if (timeLeft <= 0) {
      setIsTimeUp(true);
      // Auto-submit when time reaches zero
      handleAutoSubmit();
      return;
    }

    const timer = setInterval(() => {
      setTimeLeft((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [timeLeft]);

  const handleAutoSubmit = () => {
    onFinish(answers, 0); // time remaining is 0
  };

  const handleSelectOption = (questionId, optionKey) => {
    setAnswers((prev) => ({
      ...prev,
      [questionId]: optionKey,
    }));
  };

  const handleNext = () => {
    if (currentIdx < questions.length - 1) {
      setCurrentIdx(currentIdx + 1);
    }
  };

  const handlePrev = () => {
    if (currentIdx > 0) {
      setCurrentIdx(currentIdx - 1);
    }
  };

  const formatTime = (seconds) => {
    const h = Math.floor(seconds / 3600);
    const m = Math.floor((seconds % 3600) / 60);
    const s = seconds % 60;
    return `${h.toString().padStart(2, '0')}:${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
  };

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

  const answeredCount = Object.keys(answers).length;
  const pendingCount = questions.length - answeredCount;

  const currentQuestion = questions[currentIdx];

  return (
    <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 items-start w-full max-w-6xl mx-auto px-4 py-6 relative">
      
      {/* Sticky Top Timer Bar (For Mobile) / Info header */}
      <div className="lg:col-span-4 flex flex-col md:flex-row justify-between items-center bg-slate-900/30 dark:bg-slate-950/20 backdrop-blur-md border border-slate-800/80 dark:border-slate-800/30 p-4 rounded-2xl mb-2 gap-4">
        <div className="flex items-center space-x-3">
          <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-blue-600 to-indigo-500 flex items-center justify-center text-white font-extrabold shadow-lg shadow-blue-500/20 text-sm">
            UN
          </div>
          <div>
            <h2 className="text-base font-bold tracking-tight text-white">
              Simulación de Examen Oficial
            </h2>
            <p className="text-[10px] text-slate-400 font-medium uppercase tracking-wider">
              Área: {getAreaLabel(selectedArea)} • 80 Preguntas
            </p>
          </div>
        </div>

        {/* Live glowing timer */}
        <div className="flex items-center space-x-4">
          <div className={`flex items-center space-x-2.5 px-4 py-2 rounded-xl border font-mono text-base font-bold transition-all duration-300 shadow-md ${
            timeLeft < 900
              ? 'bg-rose-500/10 border-rose-500 text-rose-500 animate-pulse shadow-rose-500/10'
              : 'bg-slate-950/40 dark:bg-slate-900/50 border-slate-800 text-amber-400 shadow-amber-500/5'
          }`}>
            <svg className="w-5 h-5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span>{formatTime(timeLeft)}</span>
          </div>

          <button
            onClick={() => setShowConfirmModal(true)}
            className="px-5 py-2.5 bg-gradient-to-r from-rose-600 to-red-600 hover:from-rose-500 hover:to-red-500 text-white font-bold text-xs rounded-xl shadow-lg shadow-rose-500/15 transform hover:-translate-y-0.5 transition-all duration-150"
          >
            Terminar Examen
          </button>
        </div>
      </div>

      {/* Sidebar: Navigation Grid (1 to 80) */}
      <div className={`p-5 rounded-2xl border lg:col-span-1 flex flex-col space-y-4 shadow-xl backdrop-blur-md ${
        isDarkMode ? 'bg-slate-900/40 border-slate-800/80' : 'bg-white border-slate-200 shadow-slate-200/50'
      }`}>
        <div className="flex flex-col space-y-1">
          <h3 className="text-xs font-bold uppercase tracking-wider opacity-60">
            Ficha de Respuestas
          </h3>
          <div className="flex justify-between items-center text-[10px] font-semibold text-slate-400">
            <span>Respondidas: <strong className="text-emerald-500">{answeredCount}</strong></span>
            <span>Pendientes: <strong className="text-slate-400">{pendingCount}</strong></span>
          </div>
        </div>

        {/* 80-question grid */}
        <div className="grid grid-cols-5 sm:grid-cols-8 lg:grid-cols-5 gap-2 max-h-[360px] lg:max-h-none overflow-y-auto pr-1">
          {questions.map((q, idx) => {
            const isAnswered = !!answers[q.id];
            const isCurrent = idx === currentIdx;
            return (
              <button
                key={q.id}
                onClick={() => setCurrentIdx(idx)}
                className={`w-9 h-9 rounded-lg border font-bold text-xs flex items-center justify-center transition-all duration-150 ${
                  isCurrent
                    ? 'bg-blue-600 border-blue-500 text-white shadow-md shadow-blue-500/20 scale-105 ring-2 ring-blue-500/20'
                    : isAnswered
                      ? isDarkMode
                        ? 'bg-emerald-500/20 border-emerald-500/50 text-emerald-400 hover:bg-emerald-500/30'
                        : 'bg-emerald-50 border-emerald-300 text-emerald-700 hover:bg-emerald-100'
                      : isDarkMode
                        ? 'bg-slate-950/50 border-slate-850 text-slate-400 hover:border-slate-700 hover:bg-slate-900/40'
                        : 'bg-slate-50 border-slate-200 text-slate-600 hover:border-slate-300 hover:bg-slate-100'
                }`}
              >
                {idx + 1}
              </button>
            );
          })}
        </div>

        <div className="pt-3 border-t border-slate-800/10 dark:border-slate-800/60">
          <button
            onClick={onBack}
            className={`w-full py-2.5 rounded-xl border font-bold text-[10px] uppercase tracking-wider transition-all duration-150 ${
              isDarkMode
                ? 'border-slate-800 hover:bg-slate-800/50 text-slate-400 hover:text-slate-300'
                : 'border-slate-200 hover:bg-slate-50 text-slate-500 hover:text-slate-700'
            }`}
          >
            Abandonar Simulacro
          </button>
        </div>
      </div>

      {/* Main Panel: Active Question Canvas */}
      <div className="lg:col-span-3 flex flex-col space-y-4">
        
        {/* Course details, status progress */}
        <div className="flex items-center justify-between px-1">
          <span className="px-3 py-1 text-[11px] font-extrabold rounded-lg bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 uppercase tracking-wide">
            {currentQuestion?.curso || "Pregunta"}
          </span>
          <span className="text-xs opacity-60 font-semibold tracking-wide">
            Pregunta {currentIdx + 1} de {questions.length}
          </span>
        </div>

        {/* Central Question Display */}
        <div className={`p-6 sm:p-8 rounded-3xl border shadow-xl backdrop-blur-md space-y-6 transition-all duration-300 ${
          isDarkMode ? 'bg-slate-900/40 border-slate-800/80' : 'bg-white border-slate-200 shadow-slate-200/50'
        }`}>
          {/* Question Enunciado */}
          <h3 className="text-lg sm:text-xl font-bold leading-relaxed whitespace-pre-wrap dark:text-slate-100 text-slate-850">
            {currentQuestion?.enunciado}
          </h3>

          {/* Answer Options list */}
          <div className="grid grid-cols-1 gap-3.5">
            {currentQuestion &&
              Object.entries(currentQuestion.opciones).map(([key, text]) => {
                const isSelected = answers[currentQuestion.id] === key;
                return (
                  <button
                    key={key}
                    onClick={() => handleSelectOption(currentQuestion.id, key)}
                    className={`p-4 rounded-2xl border text-left flex items-start space-x-3.5 transition-all duration-200 group relative ${
                      isSelected
                        ? isDarkMode
                          ? 'bg-blue-600/15 border-blue-500 text-white shadow-inner ring-1 ring-blue-500/40'
                          : 'bg-blue-50/70 border-blue-500 text-blue-900 shadow-inner'
                        : isDarkMode
                          ? 'border-slate-850 hover:border-slate-700 bg-slate-950/20 hover:bg-slate-900/10 text-slate-300'
                          : 'border-slate-200 hover:border-slate-350 bg-slate-50/30 hover:bg-slate-100/50 text-slate-700'
                    }`}
                  >
                    <span className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold shrink-0 transition-all ${
                      isSelected
                        ? 'bg-blue-600 text-white shadow-md shadow-blue-500/20 scale-105'
                        : isDarkMode
                          ? 'bg-slate-900 text-slate-450 group-hover:text-slate-300 border border-slate-800'
                          : 'bg-slate-200/60 text-slate-550 group-hover:text-slate-750'
                    }`}>
                      {key}
                    </span>
                    <span className="text-sm font-semibold pt-0.5 leading-relaxed">{text}</span>
                  </button>
                );
              })}
          </div>
        </div>

        {/* Previous and Next Navigation buttons */}
        <div className="flex justify-between items-center px-1 pt-2">
          <button
            onClick={handlePrev}
            disabled={currentIdx === 0}
            className={`px-5 py-2.5 rounded-xl border font-bold flex items-center gap-2 transition-all text-xs ${
              currentIdx === 0
                ? 'opacity-30 cursor-not-allowed border-transparent text-slate-500'
                : isDarkMode
                  ? 'border-slate-850 hover:bg-slate-800/80 text-slate-350 hover:border-slate-700'
                  : 'border-slate-200 hover:bg-slate-50 text-slate-650'
            }`}
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Anterior
          </button>

          <button
            onClick={handleNext}
            disabled={currentIdx === questions.length - 1}
            className={`px-5 py-2.5 rounded-xl border font-bold flex items-center gap-2 transition-all text-xs ${
              currentIdx === questions.length - 1
                ? 'opacity-30 cursor-not-allowed border-transparent text-slate-500'
                : isDarkMode
                  ? 'border-slate-850 hover:bg-slate-800/80 text-slate-350 hover:border-slate-700'
                  : 'border-slate-200 hover:bg-slate-50 text-slate-650'
            }`}
          >
            Siguiente
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>

      {/* Confirmation Modal (Premium Overlay Blur Design) */}
      {showConfirmModal && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          {/* Backdrop Blur */}
          <div 
            className="absolute inset-0 bg-slate-950/80 backdrop-blur-sm transition-opacity duration-300"
            onClick={() => setShowConfirmModal(false)}
          ></div>

          {/* Modal Container */}
          <div className="relative w-full max-w-md p-6 rounded-3xl border border-slate-800 bg-[#0f172a] shadow-2xl text-center space-y-5 animate-scale-up">
            
            {/* Warning Icon Badge */}
            <div className="w-14 h-14 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-500 flex items-center justify-center mx-auto shadow-lg shadow-amber-500/5 animate-pulse">
              <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
              </svg>
            </div>

            <div className="space-y-2">
              <h3 className="text-xl font-extrabold text-white">¿Finalizar el simulacro?</h3>
              <p className="text-slate-400 text-xs leading-relaxed">
                Estás por culminar tu examen oficial de admisión. Por favor, revisa tus estadísticas antes de finalizar.
              </p>
            </div>

            {/* Quick Stats Grid */}
            <div className="grid grid-cols-2 gap-3 p-3 rounded-2xl bg-slate-950/50 border border-slate-900 text-center">
              <div className="py-1">
                <div className="text-[10px] text-slate-500 uppercase font-semibold">Respondidas</div>
                <div className="text-lg font-extrabold text-emerald-500">{answeredCount} / 80</div>
              </div>
              <div className="py-1">
                <div className="text-[10px] text-slate-500 uppercase font-semibold">Omitidas</div>
                <div className="text-lg font-extrabold text-slate-400">{pendingCount} / 80</div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col gap-2.5 pt-2">
              <button
                onClick={() => {
                  setShowConfirmModal(false);
                  onFinish(answers, timeLeft);
                }}
                className="w-full py-3 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-bold text-xs rounded-xl shadow-lg shadow-blue-500/10 transition-colors"
              >
                Sí, finalizar y ver resultados
              </button>
              <button
                onClick={() => setShowConfirmModal(false)}
                className="w-full py-2.5 rounded-xl border border-slate-800 text-slate-400 hover:bg-slate-900 hover:text-slate-300 font-bold text-xs transition-colors"
              >
                No, seguir respondiendo
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Examen;
