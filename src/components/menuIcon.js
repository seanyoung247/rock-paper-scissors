import './menuIcon.css';

function MenuIcon(props) {
  return (
    <button className={`menu-icon ${props.show && 'open'}`}
      onClick={props.toggle} >
      <span/>
      <span/>
      <span/>
      menu
    </button>
  );
}

export default MenuIcon;
