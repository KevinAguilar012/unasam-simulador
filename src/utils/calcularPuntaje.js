import QUESTIONS from '../data/preguntas.json';

/**
 * Calculates the score for the exam simulation.
 * Scoring system:
 * - Correct answer: +4.00 points
 * - Incorrect answer: -0.50 points
 * - Omitted answer: 0.00 points
 * 
 * @param {Object} answers - User answers mapping questionId to selected key.
 * @param {Array} [questions] - The list of questions to compare against. Defaults to questions from preguntas.json.
 * @returns {Object} Result metrics including score, correct, incorrect, omitted, and total questions.
 */
export function calcularPuntaje(answers, questions = QUESTIONS) {
  let score = 0;
  let correct = 0;
  let incorrect = 0;
  let omitted = 0;

  questions.forEach((q) => {
    const userAnswer = answers[q.id];
    if (!userAnswer) {
      omitted++;
    } else if (userAnswer === q.respuestaCorrecta) {
      correct++;
      score += 4.0;
    } else {
      incorrect++;
      score -= 0.5;
    }
  });

  return {
    score: Number(score.toFixed(2)),
    correct,
    incorrect,
    omitted,
    total: questions.length
  };
}
