/**
 * Lógica nativa para abrir/cerrar el sidebar lateral.
 * Alterna la clase .is-active en el panel y el overlay.
 */
export function bindSidebarMenu(container) {
  if (!container) return null

  const sidebar = container.querySelector('.sidebar-menu')
  const overlay = container.querySelector('.sidebar-overlay')
  const openBtn = container.querySelector('.sidebar-hamburger-btn')
  const closeBtn = container.querySelector('.sidebar-close-btn')

  function openMenu() {
    sidebar?.classList.add('is-active')
    overlay?.classList.add('is-active')
    document.body.classList.add('sidebar-open')
  }

  function closeMenu() {
    sidebar?.classList.remove('is-active')
    overlay?.classList.remove('is-active')
    document.body.classList.remove('sidebar-open')
  }

  function toggleMenu() {
    if (sidebar?.classList.contains('is-active')) {
      closeMenu()
    } else {
      openMenu()
    }
  }

  openBtn?.addEventListener('click', toggleMenu)
  closeBtn?.addEventListener('click', closeMenu)
  overlay?.addEventListener('click', closeMenu)

  return { openMenu, closeMenu, toggleMenu }
}
