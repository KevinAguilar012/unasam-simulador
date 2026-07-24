import { useState } from 'react'
import '../AuthModal.css'

const USERS_KEY = 'unasam_users'

function getStoredUsers() {
  try {
    return JSON.parse(localStorage.getItem(USERS_KEY) || '[]')
  } catch {
    return []
  }
}

function AuthModal({ onAuthSuccess, fading }) {
  const [activeTab, setActiveTab] = useState('login')
  const [nombre, setNombre] = useState('')
  const [correo, setCorreo] = useState('')
  const [contrasena, setContrasena] = useState('')
  const [error, setError] = useState('')

  const resetForm = () => {
    setNombre('')
    setCorreo('')
    setContrasena('')
    setError('')
  }

  const switchTab = (tab) => {
    setActiveTab(tab)
    resetForm()
  }

  const handleLogin = (e) => {
    e.preventDefault()
    setError('')

    if (!correo.trim() || !contrasena) {
      setError('Completa tu correo y contraseña.')
      return
    }

    const users = getStoredUsers()
    const user = users.find(
      (u) => u.correo.toLowerCase() === correo.trim().toLowerCase() && u.contrasena === contrasena
    )

    if (!user) {
      setError('Correo o contraseña incorrectos.')
      return
    }

    onAuthSuccess({ nombre: user.nombre, correo: user.correo })
  }

  const handleRegister = (e) => {
    e.preventDefault()
    setError('')

    if (!nombre.trim() || !correo.trim() || !contrasena) {
      setError('Completa todos los campos.')
      return
    }

    if (contrasena.length < 6) {
      setError('La contraseña debe tener al menos 6 caracteres.')
      return
    }

    const users = getStoredUsers()
    const exists = users.some(
      (u) => u.correo.toLowerCase() === correo.trim().toLowerCase()
    )

    if (exists) {
      setError('Este correo ya está registrado.')
      return
    }

    const newUser = {
      nombre: nombre.trim(),
      correo: correo.trim().toLowerCase(),
      contrasena,
    }

    localStorage.setItem(USERS_KEY, JSON.stringify([...users, newUser]))
    onAuthSuccess({ nombre: newUser.nombre, correo: newUser.correo })
  }

  return (
    <div
      className={`auth-modal-overlay ${fading ? 'auth-modal-overlay--fade-out' : ''}`}
      role="dialog"
      aria-modal="true"
      aria-labelledby="auth-modal-title"
    >
      <div className={`auth-modal-card ${fading ? 'auth-modal-card--fade-out' : ''}`}>
        <div className="auth-modal-header">
          <div className="auth-modal-logo">UN</div>
          <div>
            <h2 id="auth-modal-title" className="auth-modal-title">UNASAM</h2>
            <p className="auth-modal-subtitle">Simulador de Admisión</p>
          </div>
        </div>

        <div className="auth-modal-tabs">
          <button
            type="button"
            className={`auth-modal-tab ${activeTab === 'login' ? 'auth-modal-tab--active' : ''}`}
            onClick={() => switchTab('login')}
          >
            Iniciar Sesión
          </button>
          <button
            type="button"
            className={`auth-modal-tab ${activeTab === 'register' ? 'auth-modal-tab--active' : ''}`}
            onClick={() => switchTab('register')}
          >
            Registrarse
          </button>
        </div>

        {activeTab === 'login' ? (
          <form className="auth-modal-form" onSubmit={handleLogin}>
            <div className="auth-modal-field">
              <label htmlFor="auth-correo-login">Correo</label>
              <input
                id="auth-correo-login"
                type="email"
                placeholder="tu@correo.com"
                value={correo}
                onChange={(e) => setCorreo(e.target.value)}
                autoComplete="email"
              />
            </div>
            <div className="auth-modal-field">
              <label htmlFor="auth-contrasena-login">Contraseña</label>
              <input
                id="auth-contrasena-login"
                type="password"
                placeholder="••••••••"
                value={contrasena}
                onChange={(e) => setContrasena(e.target.value)}
                autoComplete="current-password"
              />
            </div>
            {error && <p className="auth-modal-error">{error}</p>}
            <button type="submit" className="auth-modal-submit">
              Iniciar Sesión
            </button>
          </form>
        ) : (
          <form className="auth-modal-form" onSubmit={handleRegister}>
            <div className="auth-modal-field">
              <label htmlFor="auth-nombre">Nombre</label>
              <input
                id="auth-nombre"
                type="text"
                placeholder="Tu nombre completo"
                value={nombre}
                onChange={(e) => setNombre(e.target.value)}
                autoComplete="name"
              />
            </div>
            <div className="auth-modal-field">
              <label htmlFor="auth-correo-register">Correo</label>
              <input
                id="auth-correo-register"
                type="email"
                placeholder="tu@correo.com"
                value={correo}
                onChange={(e) => setCorreo(e.target.value)}
                autoComplete="email"
              />
            </div>
            <div className="auth-modal-field">
              <label htmlFor="auth-contrasena-register">Contraseña</label>
              <input
                id="auth-contrasena-register"
                type="password"
                placeholder="Mínimo 6 caracteres"
                value={contrasena}
                onChange={(e) => setContrasena(e.target.value)}
                autoComplete="new-password"
              />
            </div>
            {error && <p className="auth-modal-error">{error}</p>}
            <button type="submit" className="auth-modal-submit">
              Crear Cuenta
            </button>
          </form>
        )}

        <p className="auth-modal-footer">
          Accede para comenzar tu simulacro de admisión UNASAM
        </p>
      </div>
    </div>
  )
}

export default AuthModal
