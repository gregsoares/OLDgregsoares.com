import React from 'react'

/*Tree fills from Top to bottom
*
* <TreeSection title subtitle nodes: [{ imgPath, title, subtitle, text}] />
*
*/
export default function TreeSection(props) {
  const title = props.title;
  const subtitle = props.subtitle;
  const nodes = props.nodes;

  return (
    <section id="about">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 text-center">
            <h2 className="section-heading text-uppercase">{title}</h2>
            <h3 className="section-subheading text-muted">{subtitle}</h3>
          </div>
        </div>

        <div className="row">
          <div className="col-lg-12">
            <ul className="timeline">

              {nodes.map((node,index) => {
                 if((index%2) === 0) {
                   return (
                       <li key={index} >
                         <div className="timeline-image">
                           {/*TODO: Add confition: If imgPath !== ''/null/undefined, then put img element in.*/}
                           <img className="rounded-circle img-fluid" src={node.imgPath} alt="" />
                         </div>
                         <div className="timeline-panel">
                           <div className="timeline-heading">
                             <h3>{node.title}</h3>
                             <h4 className="subheading">{node.subtitle}</h4>
                           </div>
                           <div className="timeline-body">
                             <p className="text-muted">{node.text}</p>
                          </div>
                         </div>
                       </li>
                     )
                 } else {
                   return (
                   <li className="timeline-inverted" key={index}>
                     <div className="timeline-image">
                       <img className="rounded-circle img-fluid" src={node.imgPath} alt="" />
                     </div>
                     <div className="timeline-panel">
                       <div className="timeline-heading">
                         <h4>{node.title}</h4>
                         <h4 className="subheading">{node.subtitle}</h4>
                       </div>
                       <div className="timeline-body">
                         <p className="text-muted">{node.text}</p>
                       </div>
                     </div>
                   </li>
                   )}
              })
              }

            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
