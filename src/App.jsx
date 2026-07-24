import { useState, useEffect } from 'react'
import Dashboard from './components/Dashboard'
import Simulador from './components/Simulador'
import AuthModal from './components/AuthModal'
import SidebarMenu from './components/SidebarMenu'
import EstadisticasPanel from './components/panels/EstadisticasPanel'
import BancoPreguntasPanel from './components/panels/BancoPreguntasPanel'
import ReglamentoPanel from './components/panels/ReglamentoPanel'
import AyudaPanel from './components/panels/AyudaPanel'
import './AuthModal.css'
import './MenuPanel.css'

const SESSION_KEY = 'unasam_session'

function App() {
  const [examStarted, setExamStarted] = useState(false);
  const [selectedArea, setSelectedArea] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [authModalVisible, setAuthModalVisible] = useState(true);
  const [authModalFading, setAuthModalFading] = useState(false);
  const [user, setUser] = useState(null);
  const [activePanel, setActivePanel] = useState(null);

  useEffect(() => {
    const session = localStorage.getItem(SESSION_KEY);
    if (session) {
      try {
        setUser(JSON.parse(session));
      } catch {
        setUser(null);
      }
      setIsAuthenticated(true);
      setAuthModalVisible(false);
    }
  }, []);

  const handleAuthSuccess = (userData) => {
    localStorage.setItem(SESSION_KEY, JSON.stringify(userData));
    setUser(userData);
    setAuthModalFading(true);
    setTimeout(() => {
      setIsAuthenticated(true);
      setAuthModalVisible(false);
      setAuthModalFading(false);
    }, 400);
  };

  const handleLogout = () => {
    localStorage.removeItem(SESSION_KEY);
    setUser(null);
    setIsAuthenticated(false);
    setAuthModalVisible(true);
    setExamStarted(false);
    setSelectedArea(null);
    setActivePanel(null);
  };

  const handleChangeAccount = () => {
    handleLogout();
  };

  const handleStartExam = (area) => {
    setSelectedArea(area);
    setExamStarted(true);
    setActivePanel(null);
  };

  const handleBackToDashboard = () => {
    setExamStarted(false);
    setSelectedArea(null);
    setActivePanel(null);
  };

  return (
    <>
      <div className={isAuthenticated ? 'dashboard-visible' : 'dashboard-hidden'}>
        {!examStarted ? (
          <Dashboard onStart={handleStartExam} />
        ) : (
          <Simulador
            selectedArea={selectedArea}
            user={user}
            onBack={handleBackToDashboard}
          />
        )}
      </div>

      {isAuthenticated && (
        <SidebarMenu
          user={user}
          examStarted={examStarted}
          selectedArea={selectedArea}
          onGoHome={handleBackToDashboard}
          onLogout={handleLogout}
          onChangeAccount={handleChangeAccount}
          onOpenPanel={setActivePanel}
        />
      )}

      {activePanel === 'estadisticas' && (
        <EstadisticasPanel user={user} onClose={() => setActivePanel(null)} />
      )}
      {activePanel === 'banco' && (
        <BancoPreguntasPanel onClose={() => setActivePanel(null)} />
      )}
      {activePanel === 'reglamento' && (
        <ReglamentoPanel onClose={() => setActivePanel(null)} />
      )}
      {activePanel === 'ayuda' && (
        <AyudaPanel onClose={() => setActivePanel(null)} />
      )}

      {authModalVisible && (
        <AuthModal onAuthSuccess={handleAuthSuccess} fading={authModalFading} />
      )}
    </>
  )
}

export default App
