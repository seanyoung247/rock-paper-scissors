import './tooltip.css';

export default function ToolTip(props = {position: "top"}) {
  return (
    <div className={`tooltip-wrapper ${props.position}`}>
      <div className="tooltip-body">
        {props.children}
      </div>
    </div>
  );
}
