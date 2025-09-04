import { useTranslation } from "react-i18next";

const Portfolio = () => {
  const { t } = useTranslation();

  const projects = [
    {
      id: 1,
      title: "Portfolio/CV",
      description: "Site web personnel responsive avec système de langues dynamique",
      tech: ["React", "TypeScript", "Tailwind CSS", "Vite"],
      image: "/api/placeholder/400/300",
      demoUrl: "#",
      codeUrl: "https://github.com/maximilien-bruyere/profile",
      status: "completed"
    },
    {
      id: 2,
      title: "QuizApp",
      description: "Application de quiz interactive en cours de développement",
      tech: ["React", "TypeScript", "Node.js"],
      image: "/api/placeholder/400/300",
      demoUrl: "#",
      codeUrl: "https://github.com/maximilien-bruyere/quizapp",
      status: "inDevelopment"
    }
  ];

  return (
    <div className="container mx-auto px-4 md:px-8 lg:px-12">
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-color-text-primary mb-4">
            {t("portfolio.title")}
          </h2>
          <p className="text-accent text-xl md:text-2xl font-medium">
            {t("portfolio.subtitle")}
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8 md:gap-10 max-w-4xl mx-auto">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-secondary/20 border border-secondary/30 rounded-lg overflow-hidden hover:border-accent/50 transition-all duration-300 hover:transform hover:scale-105 group"
            >
              {/* Project Image */}
              <div className="h-48 md:h-56 bg-secondary/40 border-b border-secondary/30 flex items-center justify-center relative">
                <div className="text-color-text-secondary/60 text-6xl">
                  {project.title === "Portfolio/CV" ? "�" : "❓"}
                </div>
                {project.status === "inDevelopment" && (
                  <div className="absolute top-4 right-4 bg-accent/20 border border-accent/40 text-accent px-3 py-1 rounded-full text-sm font-medium">
                    {t("portfolio.inDevelopment")}
                  </div>
                )}
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-color-text-primary text-xl font-bold mb-3 group-hover:text-accent transition-colors">
                  {project.title}
                </h3>
                <p className="text-color-text-secondary/80 mb-4 leading-relaxed">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="bg-primary/60 text-color-text-secondary/90 px-3 py-1 rounded-full text-sm border border-secondary/40"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex gap-4">
                  {project.status === "completed" && (
                    <a
                      href={project.demoUrl}
                      className="flex-1 bg-accent hover:bg-accent/90 text-primary font-semibold py-2 px-4 rounded-md transition-colors text-center"
                    >
                      {t("portfolio.viewProject")}
                    </a>
                  )}
                  <a
                    href={project.codeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`${
                      project.status === "completed" ? "flex-1" : "w-full"
                    } border border-accent text-accent hover:bg-accent hover:text-primary font-semibold py-2 px-4 rounded-md transition-colors text-center`}
                  >
                    {t("portfolio.viewCode")}
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Note about more projects */}
        <div className="text-center mt-12">
          <p className="text-color-text-secondary/70 text-lg">
            🚀 Plus de projets à venir au cours de mes études !
          </p>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;