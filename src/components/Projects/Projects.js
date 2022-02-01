/** @jsxImportSource @emotion/react */
import {css} from '@emotion/react'
import ProjectCard from './ProjectCard';
import ProjectsData from './ProjectsData'
import {useState, useEffect} from 'react'


export default function Projects() {

  // state for project data
  const [projects, setProjects] = useState([])
 
  // load projects when component renders
  useEffect(() =>{
    setProjects(ProjectsData)
  },[])

  let backGroundStyle = css`
                            background-color: rgb(29, 28, 26);                           
                        `

  return (
      <div className="hero is-fullheight mt-6" css={backGroundStyle}>
        <div className="container mt-6">
          <div className="columns">
            <h1 className='title has-text-white'>PROJECTS</h1>
          </div>
          <div className="columns is-centered is-multiline">
              {projects.map((project) =>
                <ProjectCard 
                key={project.title} 
                title={project.title} 
                description={project.description} 
                url={project.url}/>
              )}
          </div>
        </div>
      </div>
  );
}

