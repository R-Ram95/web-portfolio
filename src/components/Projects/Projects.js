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
                          background: url('https://cdn.wallpapersafari.com/55/31/UJ376L.jpg');
                          background-position: center;
                          background-size: cover;
                          background-attachment: fixed;
                          background-repeat: no-repeat;
                          display: flex;                          
                        `

  return (
      <div className="hero is-fullheight mt-6" css={backGroundStyle}>
        <div className="container mt-6 mb-6">
          <div className="columns is-centered">
            <h1 className='title has-text-white'>MY PROJECTS</h1>
          </div>
          <div className="columns is-centered is-multiline">
              {projects.map((project) =>
                <ProjectCard 
                  key={project.title} 
                  title={project.title} 
                  description={project.description} 
                  url={project.url}
                />
              )}
          </div>
        </div>
      </div>
  );
}

