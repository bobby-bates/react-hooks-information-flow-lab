const Header = ({ onDarkModeClick, isDarkMode }) => {
// debugger

  return (
    <>
      <h2>Shopster</h2>
      <button onClick={onDarkModeClick}>
        {isDarkMode ? "Dark" : "Light"} Mode
      </button>
    </>
  )
}

export default Header