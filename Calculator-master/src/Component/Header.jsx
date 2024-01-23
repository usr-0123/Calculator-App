import ColorThemeToggle from "./ColorThemeToggle"
import './Header.css'

function Header() {
  return (
    <div className="header">
      <h3 className="calc">Calc</h3>
      <div className="toggle-container">
        <h4 className="toggle-container-themes">Theme</h4>
        <ColorThemeToggle />
      </div>
    </div>
  )
}

export default Header