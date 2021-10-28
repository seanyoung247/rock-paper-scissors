import './chooser.css';

function Chooser(props) {
  return (
    <div className="chooser">
      <div className="circle" />
      <ul className="" style={{ "--n": props.choices.length }}>
        {props.choices.map((data, index)=>(
          <li key={index} style={{ "--i": index}}>
            <button
              className={`choice-icon ${data}`}
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
