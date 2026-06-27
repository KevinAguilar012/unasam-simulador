import { useState } from 'react'
import Dashboard from './components/Dashboard'
import Simulador from './components/Simulador'

function App() {
  const [examStarted, setExamStarted] = useState(false);
  const [selectedArea, setSelectedArea] = useState(null);

  const handleStartExam = (area) => {
    setSelectedArea(area);
    setExamStarted(true);
  };

  const handleBackToDashboard = () => {
    setExamStarted(false);
    setSelectedArea(null);
  };

  return (
    <>
      {!examStarted ? (
        <Dashboard onStart={handleStartExam} />
      ) : (
        <Simulador selectedArea={selectedArea} onBack={handleBackToDashboard} />
      )}
    </>
  )
}

export default App
