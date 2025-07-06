"use client";

import { RepoType, type IProjectItem } from "@/types";
import { Balancer } from "react-wrap-balancer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faEye } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";
import Link from "next/link";
import Column from "@/components/core/Column";
import Row from "@/components/core/Row";
import CardBox from "@/components/core/CardBox";

const ProjectItem = ({ project }: { project: IProjectItem }) => {
  return (
    <CardBox classNames="w-full h-full p-4 sm:p-5 gap-6 sm:gap-8 items-center justify-between rounded-[var(--borderRadius)] border border-[rgba(255,255,255,0.10)] dark:bg-[var(--primaryColor5)] bg-[var(--primaryColor5)] shadow-[2px_4px_16px_0px_rgba(100,100,100,0.06)_inset] group slide_in">
      <Column classNames="w-full items-center justify-start">
        <Row classNames="w-[2rem] sm:w-[2.5rem] md:w-[3rem] aspect-square items-center justify-center">
          <Image
            src={project.icon}
            alt={`project-${project.title}`}
            width={100}
            height={100}
            sizes="100%"
            loading="lazy"
            placeholder="blur"
            blurDataURL={project.icon}
            className="w-full h-full object-cover aspect-square"
          />
        </Row>

        <p className="text-base sm:text-lg/6 font-semibold mt-3 sm:mt-4">{project.title}</p>

        <div
          className={`flex flex-row items-center justify-center rounded-full py-[0.05] px-[0.5rem] mt-3 sm:mt-4 capitalize text-center border ${
            project.repoType === RepoType.Private
              ? "text-[var(--errorColor)] border-[var(--errorColor50)]"
              : "text-[var(--successColor)] border-[var(--successColor50)]"
          }`}
        >
          <p className="text-xs/6 font-semibold">{project.repoType === RepoType.Private ? "Private" : "Public"}</p>
        </div>

        <Row classNames="w-full items-center justify-center mt-3 sm:mt-4 gap-2">
          {project.githubUrl ? (
            <Link
              href={project.githubUrl}
              aria-label={`${project.title} GitHub URL`}
              target="_blank"
              className="app__outlined_btn !rounded-full !p-1.5 sm:!p-2 lg:!p-3 !aspect-square !border-[var(--textColor)]"
            >
              <FontAwesomeIcon icon={faGithub} className="text-sm sm:text-base/6 text-[var(--textColor)]" />
            </Link>
          ) : null}

          {project.url ? (
            <Link
              href={project.url}
              aria-label={`${project.title} Project URL`}
              target="_blank"
              className="app__outlined_btn !rounded-full !p-1.5 sm:!p-2 lg:!p-3 !aspect-square !border-[var(--textColor)]"
            >
              <FontAwesomeIcon icon={faEye} className="text-sm sm:text-base/6 text-[var(--textColor)]" />
            </Link>
          ) : null}
        </Row>
      </Column>

      <Column classNames="w-full items-center">
        <p className="text-center text-sm sm:text-base/6">
          <Balancer>{project.description}</Balancer>
        </p>

        {project.tags && project.tags.length > 0 ? (
          <Row classNames="w-full items-center justify-center flex-wrap mt-3 sm:mt-4">
            {project.tags.map((tag, i) => {
              return (
                <p
                  key={`tag-${i}`}
                  className="rounded-[var(--borderRadius)] border border-[var(--textColor50)] py-[.125rem] px-1.5 sm:px-2 mr-1.5 sm:mr-2 mb-1.5 sm:mb-2 text-xs/6 font-normal"
                >
                  {tag}
                </p>
              );
            })}
          </Row>
        ) : null}
      </Column>
    </CardBox>
  );
};

export default ProjectItem;
