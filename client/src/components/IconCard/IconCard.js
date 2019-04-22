import React from 'react'

  
function IconCard(props) {
  const iconClass = "fas fa-stack-1x fa-inverse " + props.icon;
  const title = props.title;
  const text = props.text
  return (
    <div className="col-md-4">
      <span className="fa-stack fa-4x">
        <i className="fas fa-circle fa-stack-2x text-primary"></i>
        <i className={iconClass} ></i>
      </span>
      <h4 className="skill-heading">{title}</h4>
      <p className="text-muted">{text}</p>
    </div>
  )
}


export default IconCard;