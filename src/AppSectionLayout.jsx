import "./styles/app-section-layout.css";

function AppSectionLayout({ title, children }) {
  return (
    <div className="app-section">
      <h1 className="app-section__title">{title}</h1>
      <main className="app-section__main">{children}</main>
    </div>
  );
}

export default AppSectionLayout;
