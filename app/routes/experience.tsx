import type { MetaFunction } from "@remix-run/node";
import ExperienceCard from "~/components/experience/ExperienceCard";
import configs from "~/configs/configs";

export const meta: MetaFunction = () => {
  return [
    { title: `${configs.name} | Experience` },
    {
      name: "description",
      content: `${configs.name} work experience and education`,
    },
    {
      name: "keywords",
      content: `personal, website, about, profile, ${configs.name}, education, work experience`,
    },
    { name: "author", content: configs.name },
    { name: "viewport", content: "width=device-width, initial-scale=1" },
  ];
};

export default function Experience() {
  if (!configs.experiencePage) return null;

  return (
    <div className="mx-4 mt-10 md:mx-0 md:mt-12">
      {configs.experiencePage.map((section) => (
        <div className="mb-12">
          <h1 className="text-3xl font-blackOpsOne mt-0 mb-6">
            {section.sectionName}
          </h1>
          {section.items.map((item) => (
            <ExperienceCard
              title={item.title}
              date={item.date}
              content={item.content}
              location={item.location}
            ></ExperienceCard>
          ))}
        </div>
      ))}
    </div>
  );
}
