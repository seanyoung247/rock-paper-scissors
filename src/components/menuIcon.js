import './menuIcon.css';

function MenuIcon(props) {
  return (
    <button className={`menu-icon ${props.show && 'open'}`}
      onClick={props.toggle} >

      <span/>
      <span/>
      <span/>
    </button>
  );
}

export default MenuIcon;
