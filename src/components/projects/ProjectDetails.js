import React from 'react'

const ProjectDetails = (props) => {
  const id = props.match.params.id;
  return (
    <div className="container section project-details">
      <div className="card z-depth-0">
        <div className="card-content">
          <span className="card-title">Project Title - {id}</span>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo, inventore? Quasi commodi facere recusandae aperiam aliquid aspernatur quod tempora doloribus, a illum quae esse? Aspernatur vero voluptatum tenetur minus quos.</p>
        </div>
        <div className="card-action gret lighten-4 grey-text">
          <div>Posted by The Net Ninja</div>
          <div>2nd September, 2am</div>
        </div>
      </div>
    </div>
  )
}

export default ProjectDetails
