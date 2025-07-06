"use client";

import { useState } from "react";
import { IProjectItem } from "@/types";
import ProjectItem from "./ProjectItem";
import Column from "@/components/core/Column";
import Row from "@/components/core/Row";

const ProjectList = ({ projects }: Readonly<{ projects: IProjectItem[] }>) => {
  const INITIAL_VISIBLE_COUNT = 3;
  const [visibleCount, setVisibleCount] = useState(INITIAL_VISIBLE_COUNT);

  const handleLoadMore = () => {
    setVisibleCount(projects.length); // Show all projects
  };

  return (
    <Column classNames="w-full mt-8 sm:mt-12 lg:mt-16">
      {/* <Row classNames=" gap-3 sm:gap-4 ">
        {projects.slice(0, visibleCount).map((item, index) => (
          <ProjectItem key={`project-item-${index}`} project={item} />
        ))}
      </Row> */}
      <Row classNames="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {projects.slice(0, visibleCount).map((item, index) => (
          <ProjectItem key={`project-item-${index}`} project={item} />
        ))}
      </Row>
      {visibleCount < projects.length && (
        <Row classNames="w-full items-center justify-center mt-8 sm:mt-12 lg:mt-16">
          <button
            type="button"
            className="app__filled_btn !px-4 !py-2 !text-sm sm:!text-base/6 !font-normal min-w-[100px]"
            onClick={handleLoadMore}
          >
            Load More
          </button>
        </Row>
      )}
    </Column>
  );
};

export default ProjectList;
