import './header.css'

function Header(props) {
  return (
    <header>
      <div className="title-bar">
        <div className="title">
          {props.title}
        </div>
        <div className="score-wrapper">
          {props.children}
        </div>
      </div>
    </header>
  );
}

export default Header;
