// Header shows the title of the current page (passed in as a prop).
export default function Header({ title, subtitle }) {
  return (
    <header className="header">
      <div>
        <h2>{title}</h2>
        <p>{subtitle}</p>
      </div>
      <div className="avatar">FY</div>
    </header>
  );
}
