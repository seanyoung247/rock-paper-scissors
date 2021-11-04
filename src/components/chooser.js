import './badges.css';
import './chooser.css';

function Chooser(props) {
  return (
    <div className={`chooser ${props.className}`}>
      <div className="circle" />
      <ul style={{"--n":props.choices.length }}>
        {props.choices.map((data, index)=>(
          <li key={index} style={{"--i":index}}>
            <button
              className={`${props.itemClass} ${data}`}
              onClick={()=>props.choose(props.player, index)}>
              {data}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Chooser;
