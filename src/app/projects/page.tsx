import React, { CSSProperties, FC } from "react";

interface IProjectsProps {
  className?: string | undefined;
}

const Projects: FC<IProjectsProps> = ({ className }) => {
  return (
    <div className={className}>
      <p>Projects</p>
    </div>
  );
};

export default Projects;
