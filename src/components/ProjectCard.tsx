
import React from "react";
import { Github, ExternalLink } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/Card";
import { Badge } from "./ui/Badge";
import { Button } from "./ui/Button";

const techColors: Record<string, string> = {
  "React.js": "bg-blue-100 text-blue-800 border-blue-200",
  "Node.js": "bg-green-100 text-green-800 border-green-200",
  "Express.js": "bg-gray-100 text-gray-800 border-gray-200",
  MongoDB: "bg-green-100 text-green-800 border-green-200",
  HTML: "bg-orange-100 text-orange-800 border-orange-200",
  CSS: "bg-blue-100 text-blue-800 border-blue-200",
  JavaScript: "bg-yellow-100 text-yellow-800 border-yellow-200",
  TypeScript: "bg-blue-100 text-blue-800 border-blue-200",
  "Google Cloud": "bg-red-100 text-red-800 border-red-200",
  AWS: "bg-orange-100 text-orange-800 border-orange-200",
  "Redux Toolkit": "bg-purple-100 text-purple-800 border-purple-200",
  "Tailwind CSS": "bg-cyan-100 text-cyan-800 border-cyan-200",
  "Material Tailwind": "bg-indigo-100 text-indigo-800 border-indigo-200",
  "Next.js": "bg-gray-100 text-gray-800 border-gray-200",
  Python: "bg-blue-100 text-blue-800 border-blue-200",
  Django: "bg-green-100 text-green-800 border-green-200",
  PostgreSQL: "bg-blue-100 text-blue-800 border-blue-200",
  MySQL: "bg-orange-100 text-orange-800 border-orange-200",
  Docker: "bg-blue-100 text-blue-800 border-blue-200",
  Kubernetes: "bg-blue-100 text-blue-800 border-blue-200",
};

interface ProjectCardProps {
  name: string;
  description: string;
  image: string;
  deployedLink: string;
  githubURL?: string;
  techStack: string[];
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  name,
  description,
  image,
  deployedLink,
  githubURL,
  techStack,
}) => {
  return (
    <Card className="h-full mx-auto overflow-hidden transition-all duration-300 bg-white border-0 shadow-md group hover:shadow-xl hover:-translate-y-1">
      <CardHeader className="p-0">
        <div className="relative overflow-hidden">
          <img
            src={image || "/placeholder.svg?height=200&width=400"}
            alt={`${name} project screenshot`}
            className="w-full h-48 transition-transform duration-300"
          />
          <div className="absolute inset-0 transition-opacity duration-300 opacity-0 bg-gradient-to-t from-black/20 to-transparent group-hover:opacity-100" />

          {/* Floating action buttons */}
          <div className="absolute flex items-end gap-2 transition-opacity duration-300 opacity-0 top-4 right-4 group-hover:opacity-100">
            {deployedLink && (
              <Button
                size="sm"
                variant="secondary"
                className="w-8 h-8 p-0 shadow-lg bg-white/90 hover:bg-white"
                asChild>
                <a
                  href={deployedLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`View ${name} live demo`}>
                  <ExternalLink className="w-4 h-4" />
                </a>
              </Button>
            )}
            {githubURL && (
              <Button
                size="sm"
                variant="secondary"
                className="w-8 h-8 p-0 shadow-lg bg-white/90 hover:bg-white"
                asChild>
                <a
                  href={githubURL}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`View ${name} source code`}>
                  <Github className="w-4 h-4" />
                </a>
              </Button>
            )}
          </div>
        </div>
      </CardHeader>

      <CardContent className="flex flex-col justify-between flex-1 p-6 md:h-80">
        <div className="space-y-4">
          <div>
            <CardTitle className="mb-2 text-xl font-bold text-gray-900 transition-colors duration-200 group-hover:text-blue-600">
              {name}
            </CardTitle>
            <CardDescription className="leading-relaxed text-gray-600 line-clamp-3">
              {description}
            </CardDescription>
          </div>

          <div className="flex flex-wrap gap-2">
            {techStack.map((tech, index) => (
              <Badge
                key={index}
                variant="secondary"
                className={`text-xs font-medium transition-all duration-200 hover:scale-105 ${
                  techColors[tech] ||
                  "bg-gray-100 text-gray-800 border-gray-200"
                }`}>
                {tech}
              </Badge>
            ))}
          </div>
        </div>

        <div className="flex gap-3 pt-4 mt-6 border-t border-gray-100">
          {deployedLink && (
            <Button
              variant="outline"
              className="flex-1 text-blue-600 transition-all duration-300 border-2 border-blue-200 group/button hover:bg-indigo-500 hover:text-white hover:border-indigo-500"
              asChild>
              <a
                href={deployedLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2">
                <ExternalLink className="w-4 h-4" />
                Live Demo
              </a>
            </Button>
          )}
          {githubURL && (
            <Button
              variant="outline"
              size="sm"
              className={`${
                deployedLink ? "flex-1" : "w-full"
              } border-gray-300 hover:bg-gray-50`}
              asChild>
              <a
                href={githubURL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2">
                <Github className="w-4 h-4" />
                Code
              </a>
            </Button>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default ProjectCard;
