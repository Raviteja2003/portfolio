import React from "react";
import {
  Calendar,
  MapPin,
  ExternalLink,
  TrendingUp,
} from "lucide-react";
import { Badge } from "./ui/Badge";
import { Button } from "./ui/Button";

interface ExperienceItem {
  id: number;
  company: string;
  position: string;
  location: string;
  startDate: string;
  endDate: string;
  current: boolean;
  companyLogo: string;
  companyWebsite?: string;
  description: string;
  achievements: string[];
  technologies: string[];
  type: "full-time" | "part-time" | "contract" | "internship";
}

const experienceData: ExperienceItem[] = [
  {
  id: 1,
  company: "Quadrant Technologies",
  position: "Software Engineer",
  location: "Warangal, Telangana",
  startDate: "2025-05",
  endDate: "",
  current: true,
  companyLogo: "/experience/Quadrant.png",
  companyWebsite: "https://www.quadranttechnologies.com",
  description:
    "Designing and developing cloud-native full-stack applications across AWS and Azure, leveraging React, TypeScript, Python, AWS Lambda, and Azure Functions. Building AI-powered cost optimization and governance solutions, implementing secure authentication with Cognito and Azure AD, optimizing cloud resource management, and delivering scalable serverless architectures for enterprise users.",
  achievements: [
    "Built AI-powered cloud cost optimization workflows using Amazon Bedrock and Azure OpenAI.",
    "Reduced cloud API calls by ~30% through DynamoDB and Cosmos DB caching strategies.",
    "Implemented secure SSO authentication using AWS Cognito and Azure Active Directory.",
    "Developed serverless microservices handling infrastructure provisioning requests within SLA targets.",
    "Integrated AWS Cost Explorer and Azure Cost Management APIs for real-time cost visibility."
  ],
  technologies: [
    "React",
    "TypeScript",
    "Python",
    "AWS Lambda",
    "Azure Functions",
    "Amazon Bedrock",
    "Azure OpenAI",
    "API Gateway",
    "DynamoDB",
    "Cosmos DB",
    "AWS Cognito",
    "Azure AD",
    "Tailwind CSS",
    "REST APIs",
    "Git",
    "GitHub",
    "CI/CD"
  ],
  type: "full-time",
},
  {
    id: 1,
    company: "Quadrant Technologies",
    position: "Software Trainee",
    location: "Warangal, Telangana",
    startDate: "2024-12",
    endDate: "2025-04",
    current: false,
    companyLogo: "/experience/Quadrant.png",
    companyWebsite: "https://www.quadranttechnologies.com",
    description:
      "Gained hands-on experience in React, C#, ASP.NET Core Web API, and SQL Server. Developed and deployed an Assessment Module on Azure featuring Authentication, Authorization, reporting dashboards, and dynamic question generation. This role involved full lifecycle development using Vite, React, Tailwind CSS, and .NET APIs, laying the foundation for advanced cloud and application development expertise.",
    achievements: [],
    technologies: ["React", "HTML", "JS", "AWS", "CSS", "C#", "ASP.NET CORE WEB API", "Agile Methodologies", "Git", "GitHub"],
    type: "full-time",
  },
];

const Experience: React.FC = () => {
  const getTypeColor = (type: string) => {
    switch (type) {
      case "full-time":
        return "bg-green-100 text-green-800 border-green-200";
      case "part-time":
        return "bg-blue-100 text-blue-800 border-blue-200";
      case "contract":
        return "bg-purple-100 text-purple-800 border-purple-200";
      case "internship":
        return "bg-orange-100 text-orange-800 border-orange-200";
      default:
        return "bg-gray-100 text-gray-800 border-gray-200";
    }
  };

  const formatDate = (dateString: string) => {
    if (!dateString) return "Present";
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", { year: "numeric", month: "short" });
  };

  const calculateDuration = (startDate: string, endDate: string) => {
    const start = new Date(startDate);
    const end = endDate ? new Date(endDate) : new Date();
    const diffTime = Math.abs(end.getTime() - start.getTime());
    const diffMonths = Math.ceil(diffTime / (1000 * 60 * 60 * 24 * 30));

    if (diffMonths < 12) {
      return `${diffMonths} month${diffMonths > 1 ? "s" : ""}`;
    } else {
      const years = Math.floor(diffMonths / 12);
      const months = diffMonths % 12;
      return `${years} year${years > 1 ? "s" : ""}${
        months > 0 ? ` ${months} month${months > 1 ? "s" : ""}` : ""
      }`;
    }
  };

  return (
    <div className="py-12 sm:py-16 lg:py-20" id="experience">
      <div className="max-w-4xl px-4 mx-auto lg:max-w-6xl sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-12 text-center sm:mb-16">
          <div className="inline-block mb-4">
            <span className="px-3 py-1 text-sm font-medium text-orange-800 bg-blue-100 rounded-full">
              💼 Professional Journey
            </span>
          </div>
          <h1 className="mb-4 text-3xl font-bold text-gray-900 sm:text-4xl lg:text-5xl">
            Work Experience
          </h1>
          <p className="max-w-2xl px-4 mx-auto text-lg leading-relaxed text-gray-600 sm:text-xl">
            My professional journey through various roles and the impact
            I&apos;ve made along the way.
          </p>
          <div className="w-20 h-1 mx-auto mt-6 rounded-full bg-gradient-to-r from-blue-500 to-indigo-500"></div>
        </div>

        {/* Experience Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute hidden md:block left-0 sm:left-6 lg:left-1/2 lg:transform lg:-translate-x-px top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 via-indogo-500 to-blue-500"></div>

          {/* Experience Items */}
          <div className="space-y-8 sm:space-y-12">
            {experienceData.map((experience, index) => (
              <div
                key={experience.id}
                className={`relative flex items-start ${
                  index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                } flex-col lg:justify-between`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-0 z-10 hidden w-3 h-3 mt-6 bg-white border-blue-500 rounded-full shadow-lg md:block sm:left-6 lg:left-1/2 lg:transform lg:-translate-x-1/2 sm:w-4 sm:h-4 border-3 sm:border-4">
                  {experience.current && (
                    <div className="absolute inset-0.5 sm:inset-1 bg-blue-500 rounded-full animate-pulse"></div>
                  )}
                </div>

                {/* Content Card */}
                <div
                  className={`w-full lg:w-5/12 sm:ml-14 lg:ml-0 ${
                    index % 2 === 0 ? "lg:mr-8" : "lg:ml-8"
                  }`}
                >
                  <div className="overflow-hidden transition-all duration-300 transform bg-white shadow-lg group rounded-xl sm:rounded-2xl hover:shadow-2xl hover:-translate-y-1">
                    {/* Card Header */}
                    <div className="p-4 border-b border-gray-100 bg-gradient-to-r from-blue-50 to-indigo-50 sm:p-6">
                      <div className="flex flex-col gap-3 mb-4 sm:flex-row sm:items-start sm:justify-between sm:gap-4">
                        <div className="flex items-start flex-1 gap-3 sm:gap-4">
                          <div className="relative flex-shrink-0">
                            <img
                              src={experience.companyLogo || "/placeholder.svg"}
                              alt={`${experience.company} logo`}
                              className="object-cover w-10 h-10 border-2 border-white rounded-lg shadow-md sm:w-12 sm:h-12"
                            />
                            {experience.current && (
                              <div className="absolute w-3 h-3 bg-green-500 border-2 border-white rounded-full -top-1 -right-1 sm:w-4 sm:h-4"></div>
                            )}
                          </div>
                          <div className="flex-1 min-w-0">
                            <h3 className="text-lg font-bold leading-tight text-gray-900 transition-colors duration-300 sm:text-xl group-hover:text-blue-600">
                              {experience.position}
                            </h3>
                            <div className="flex items-center gap-2 mt-1">
                              <p className="text-base font-semibold text-gray-700 truncate sm:text-lg">
                                {experience.company}
                              </p>
                              {experience.companyWebsite && (
                                <a
                                  href={experience.companyWebsite}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="flex-shrink-0 text-blue-500 transition-colors duration-200 hover:text-indigo-600"
                                >
                                  <ExternalLink
                                    size={14}
                                    className="sm:w-4 sm:h-4"
                                  />
                                </a>
                              )}
                            </div>
                          </div>
                        </div>
                        <Badge
                          className={`${getTypeColor(
                            experience.type
                          )} capitalize text-xs flex-shrink-0 self-start`}
                        >
                          {experience.type.replace("-", " ")}
                        </Badge>
                      </div>

                      <div className="flex flex-col gap-2 text-xs text-gray-600 sm:flex-row sm:flex-wrap sm:items-center sm:gap-4 sm:text-sm">
                        <div className="flex items-center gap-1">
                          <Calendar
                            size={12}
                            className="sm:w-3.5 sm:h-3.5 flex-shrink-0"
                          />
                          <span className="truncate">
                            {formatDate(experience.startDate)} -{" "}
                            {formatDate(experience.endDate)}
                          </span>
                        </div>
                        <div className="flex items-center gap-1">
                          <TrendingUp
                            size={12}
                            className="sm:w-3.5 sm:h-3.5 flex-shrink-0"
                          />
                          <span>
                            {calculateDuration(
                              experience.startDate,
                              experience.endDate
                            )}
                          </span>
                        </div>
                        <div className="flex items-center gap-1">
                          <MapPin
                            size={12}
                            className="sm:w-3.5 sm:h-3.5 flex-shrink-0"
                          />
                          <span className="truncate">{experience.location}</span>
                        </div>
                      </div>
                    </div>

                    {/* Card Content */}
                    <div className="p-4 space-y-4 sm:p-6 sm:space-y-6">
                      <p className="text-sm leading-relaxed text-gray-600 sm:text-base">
                        {experience.description}
                      </p>

                      {/* Technologies */}
                      <div>
                        <h4 className="mb-3 text-base font-semibold text-gray-900 sm:text-lg">
                          Technologies Used
                        </h4>
                        <div className="flex flex-wrap gap-1.5 sm:gap-2">
                          {experience.technologies.map((tech, techIndex) => (
                            <Badge
                              key={techIndex}
                              variant="secondary"
                              className="px-2 py-1 text-xs text-gray-700 transition-colors duration-200 bg-gray-100 hover:bg-orange-100 hover:text-blue-700 sm:text-sm"
                            >
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Spacer for alternating layout - only on desktop */}
                <div className="hidden w-5/12 lg:block"></div>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="px-4 mt-12 text-center sm:mt-16">
          <p className="mb-4 text-sm text-gray-600 sm:text-base sm:mb-6">
            Interested in my professional background?
          </p>
          <Button
            size="lg"
            className="w-full text-white transition-all duration-300 shadow-lg bg-gradient-to-r from-blue-500 to-indigo-500 hover:from-blue-600 hover:to-indigo-600 hover:shadow-xl sm:w-auto"
            asChild
          >
            <a
              href="./Tadikonda_Ravi_Teja_Resume.pdf"
              download="Tadikonda Ravi Teja Resume.pdf"
              className="flex items-center justify-center gap-2 px-6 py-3"
            >
              Download Full Resume
            </a>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Experience;
