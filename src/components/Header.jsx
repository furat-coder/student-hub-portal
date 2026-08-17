// Header shows the title of the current page (passed in as a prop).
// It also has the dark mode button, which calls a function from App.jsx.
export default function Header({ title, subtitle, theme, onToggleTheme }) {
  return (
    <header className="header">
      <div>
        <h2>{title}</h2>
        <p>{subtitle}</p>
      </div>

      <div className="header-right">
        {/* Conditional rendering: the label changes with the theme */}
        <button className="btn btn-light" onClick={onToggleTheme}>
          {theme === "dark" ? "☀️ Light mode" : "🌙 Dark mode"}
        </button>
        <div className="avatar">FY</div>
      </div>
    </header>
  );
}
