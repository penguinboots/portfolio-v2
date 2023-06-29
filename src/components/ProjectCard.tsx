import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";

interface Project {
  title: string;
  image: string;
  description: string;
  live: string | null;
  repo: string;
  stack: string[];
}

const ProjectCard: React.FC<{ project: Project }> = ({ project }) => {

  const stack = project.stack.map((item) => {
    return <li key={item}>{item}</li>;
  });

  return (
    <div className="card project">
      <div className="placeholder project-img">{`< 🚧 Under Construction 🚧 >`}</div>
      <div className="title-box">
        <h3>{project.title}</h3>
        <ul className="links">
          {project.live ? (
            <>
              <li>
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  LIVE <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
                </a>
              </li>
              <li>|</li>
            </>
          ) : (
            ""
          )}
          <li>
            <a href={project.repo} target="_blank" rel="noopener noreferrer">
              REPO <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
            </a>
          </li>
        </ul>
      </div>
      <p className="description">{project.description}</p>
      <ul className="stack">{stack}</ul>
    </div>
  );
};

export default ProjectCard;