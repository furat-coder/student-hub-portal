// Sidebar receives the current page and a function to change it (props).
export default function Sidebar({ currentPage, onChangePage }) {
  // A simple array of menu items, rendered with .map()
  const menuItems = [
    "Dashboard",
    "My Profile",
    "Students",
    "Tasks",
    "Register Student",
  ];

  return (
    <aside className="sidebar">
      <div className="brand">
        <h1>Student Portal</h1>
        <p className="subtitle">Management System</p>
      </div>

      {menuItems.map((item) => (
        <button
          key={item}
          // Conditional class: highlight the active page
          className={currentPage === item ? "nav-button active" : "nav-button"}
          onClick={() => onChangePage(item)}
        >
          {item}
        </button>
      ))}
    </aside>
  );
}
