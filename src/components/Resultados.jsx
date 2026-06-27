import React from 'react';

function Resultados({ 
  results, 
  answers, 
  questions, 
  timeUsed, 
  formatTime, 
  selectedArea, 
  onRestart, 
  onBack, 
  isDarkMode 
}) {
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

  const maxScore = results.total * 4.0;
  const scorePercent = (results.score / maxScore) * 100;
  
  // Decide feedback message based on score (e.g. threshold of 50% of max score)
  const isCompetitive = results.score >= (maxScore * 0.5);
  const feedbackMessage = isCompetitive 
    ? "¡Casi logras la vacante!" 
    : "¡Sigue intentándolo!";

  return (
    <div className="space-y-8 animate-fade-in max-w-3xl mx-auto w-full px-4 py-4">
      {/* Header */}
      <div className="text-center space-y-2">
        <h2 className="text-3xl font-extrabold tracking-tight dark:text-white text-slate-900">
          Resultado Simulacro UNASAM
        </h2>
        <p className="opacity-75 text-sm dark:text-slate-300 text-slate-650">
          Cómputo oficial basado en tus respuestas marcadas
        </p>
      </div>

      {/* Score breakdown board */}
      <div className={`p-8 rounded-3xl border shadow-2xl space-y-6 relative overflow-hidden backdrop-blur-md ${
        isDarkMode ? 'bg-slate-900/40 border-slate-800/80 text-slate-100' : 'bg-white border-slate-200 text-slate-850'
      }`}>
        
        {/* Scoring Big Circle */}
        <div className="flex flex-col items-center justify-center">
          <div className={`w-40 h-40 rounded-full border-4 flex flex-col items-center justify-center relative shadow-lg ${
            isDarkMode ? 'border-slate-800 bg-slate-950/40' : 'border-slate-200 bg-slate-50/50'
          }`}>
            <span className="text-[10px] uppercase font-bold tracking-wider opacity-60">Nota Final</span>
            <span className={`text-4xl font-extrabold ${isCompetitive ? 'text-emerald-500' : 'text-rose-500'}`}>
              {results.score > 0 ? `+${results.score.toFixed(2)}` : results.score.toFixed(2)}
            </span>
            <span className="text-[10px] opacity-60">de {maxScore.toFixed(2)} pts</span>
          </div>
          
          {/* Motivation Feedback Message */}
          <div className="mt-4 text-center space-y-1">
            <h3 className={`text-lg font-bold tracking-tight ${isCompetitive ? 'text-emerald-500' : 'text-amber-500'}`}>
              {feedbackMessage}
            </h3>
            <span className="inline-block text-[11px] font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-blue-500/10 text-blue-400 border border-blue-500/20">
              Área: {getAreaLabel(selectedArea)}
            </span>
          </div>
        </div>

        {/* Score details grid */}
        <div className="grid grid-cols-3 gap-3.5 max-w-md mx-auto text-center">
          <div className={`p-3 rounded-2xl border ${
            isDarkMode ? 'bg-slate-950/50 border-slate-850' : 'bg-slate-100/50 border-slate-200'
          }`}>
            <div className="text-[10px] uppercase font-bold opacity-55">Correctas (+4.00)</div>
            <div className="text-xl font-black text-emerald-500 mt-0.5">{results.correct}</div>
          </div>
          <div className={`p-3 rounded-2xl border ${
            isDarkMode ? 'bg-slate-950/50 border-slate-855' : 'bg-slate-100/50 border-slate-200'
          }`}>
            <div className="text-[10px] uppercase font-bold opacity-55">Incorrectas (-0.50)</div>
            <div className="text-xl font-black text-rose-500 mt-0.5">{results.incorrect}</div>
          </div>
          <div className={`p-3 rounded-2xl border ${
            isDarkMode ? 'bg-slate-950/50 border-slate-850' : 'bg-slate-100/50 border-slate-200'
          }`}>
            <div className="text-[10px] uppercase font-bold opacity-55">Omitidas (0.00)</div>
            <div className="text-xl font-black text-slate-450 mt-0.5">{results.omitted}</div>
          </div>
        </div>

        {/* Time details */}
        <div className="flex justify-center items-center gap-2 text-xs opacity-75 dark:text-slate-300 text-slate-650">
          <svg className="w-4 h-4 text-amber-500 animate-pulse" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <span>Tiempo utilizado: <strong>{formatTime(timeUsed)}</strong> de 3 horas</span>
        </div>

        {/* Restart / Back Actions */}
        <div className="flex flex-col sm:flex-row justify-center gap-3 pt-5 border-t border-slate-800/10 dark:border-slate-850/60">
          <button
            onClick={onRestart}
            className="px-6 py-3 rounded-2xl bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-bold shadow-lg shadow-blue-500/15 text-xs transition-all duration-150 transform hover:-translate-y-0.5"
          >
            Simular de Nuevo
          </button>
          <button
            onClick={onBack}
            className={`px-6 py-3 rounded-2xl border font-bold text-xs transition-all duration-150 transform hover:-translate-y-0.5 ${
              isDarkMode 
                ? 'border-slate-800 hover:bg-slate-800/50 text-slate-350 hover:border-slate-700' 
                : 'border-slate-200 hover:bg-slate-50 text-slate-650'
            }`}
          >
            Volver a la Bienvenida
          </button>
        </div>
      </div>

      {/* Detailed review of each question */}
      <div className="space-y-4">
        <h3 className="text-lg font-bold dark:text-white text-slate-850 flex items-center gap-2 px-1">
          <svg className="w-5 h-5 text-amber-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          Hoja de Claves y Calificación
        </h3>

        <div className="space-y-3.5">
          {questions.map((q, idx) => {
            const userAnswer = answers[q.id];
            const isCorrect = userAnswer === q.respuestaCorrecta;
            const isOmitted = !userAnswer;
            
            return (
              <div 
                key={q.id} 
                className={`p-5 rounded-2xl border shadow-sm backdrop-blur-md transition-all duration-200 ${
                  isCorrect 
                    ? isDarkMode 
                      ? 'bg-emerald-950/15 border-emerald-900/60 text-slate-100' 
                      : 'bg-emerald-50/40 border-emerald-200 text-slate-850' 
                    : isOmitted
                      ? isDarkMode 
                        ? 'bg-slate-900/30 border-slate-850 text-slate-100' 
                        : 'bg-slate-50/40 border-slate-200 text-slate-850'
                      : isDarkMode 
                        ? 'bg-rose-950/15 border-rose-900/60 text-slate-100' 
                        : 'bg-rose-50/40 border-rose-200 text-slate-850'
                }`}
              >
                <div className="flex items-center justify-between mb-2 px-0.5">
                  <span className="text-[10px] font-extrabold px-2 py-0.5 rounded bg-slate-500/10 dark:text-slate-400 text-slate-500 uppercase tracking-wider">
                    {q.curso} - Pregunta {idx + 1}
                  </span>
                  <span className={`text-[11px] font-black uppercase tracking-wide ${
                    isCorrect ? 'text-emerald-500' : isOmitted ? 'text-slate-450' : 'text-rose-500'
                  }`}>
                    {isCorrect ? 'Correcta (+4.00)' : isOmitted ? 'Omitida (0.00)' : 'Incorrecta (-0.50)'}
                  </span>
                </div>
                <h4 className="text-sm font-bold mb-3.5 leading-relaxed">{q.enunciado}</h4>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                  {Object.entries(q.opciones).map(([key, text]) => {
                    const isUserSelected = userAnswer === key;
                    const isAnswerKey = q.respuestaCorrecta === key;
                    
                    let itemStyle = 'opacity-60';
                    if (isAnswerKey) {
                      itemStyle = 'text-emerald-600 dark:text-emerald-450 font-bold';
                    } else if (isUserSelected && !isCorrect) {
                      itemStyle = 'text-rose-600 dark:text-rose-450 font-bold line-through';
                    }
                    
                    return (
                      <div key={key} className={`flex items-start gap-2.5 py-1 ${itemStyle}`}>
                        <span className={`w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-bold shrink-0 ${
                          isAnswerKey
                            ? 'bg-emerald-500 text-white shadow-sm shadow-emerald-500/20'
                            : isUserSelected
                              ? 'bg-rose-500 text-white shadow-sm shadow-rose-500/20'
                              : isDarkMode
                                ? 'bg-slate-850 text-slate-400 border border-slate-800'
                                : 'bg-slate-200 text-slate-650'
                        }`}>
                          {key}
                        </span>
                        <span className="pt-0.5 leading-relaxed">{text}</span>
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Resultados;
