import { useTranslation } from "react-i18next";
import { useState } from "react";

const Portfolio = () => {
  const { t } = useTranslation();
  const [filter, setFilter] = useState("all");
  const [typeFilter, setTypeFilter] = useState("all");
  const [expandedTech, setExpandedTech] = useState<number | null>(null);

  const projects = [
    // Projets Personnels
    {
      id: 1,
      titleKey: "portfolio.projects.portfolio.title",
      descriptionKey: "portfolio.projects.portfolio.description",
      tech: ["React", "TypeScript", "Tailwind CSS", "Vite", "i18n", "Git"],
      category: "web",
      icon: "🏠",
      demoUrl: "#",
      codeUrl: "https://github.com/maximilien-bruyere/profile",
      status: "completed",
      featured: true,
      type: "personal",
      year: "2025",
      teamWork: false
    },
    {
      id: 2,
      titleKey: "portfolio.projects.quizapp.title",
      descriptionKey: "portfolio.projects.quizapp.description",
      tech: ["React", "TypeScript", "Prisma", "NestJs", "SQLite", "Git"],
      category: "web",
      icon: "❓",
      demoUrl: "#",
      codeUrl: "https://github.com/maximilien-bruyere/quizapp",
      status: "inDevelopment",
      featured: false,
      type: "personal",
      year: "2025",
      teamWork: false
    },
    {
      id: 3,
      titleKey: "portfolio.projects.homelab.title",
      descriptionKey: "portfolio.projects.homelab.description",
      tech: ["Raspberry Pi", "Linux", "Docker", "Monitoring", "SSH", "Git"],
      category: "infrastructure",
      icon: "🏗️",
      status: "ongoing",
      featured: true,
      type: "personal",
      year: "2025",
      teamWork: false
    },
  
    // Projets d'École - 2ème Année
    {
      id: 4,
      titleKey: "portfolio.projects.interdisciplinary.title",
      descriptionKey: "portfolio.projects.interdisciplinary.description",
      tech: ["Linux", "Windows Server", "MySQL", "PHP", "Alcatel", "Git"],
      category: "infrastructure",
      icon: "🌐",
      demoUrl: "#",
      codeUrl: "#",
      status: "completed",
      featured: true,
      type: "school",
      yearKey: "portfolio.projects.years.second",
      teamWork: true
    },
    {
      id: 5,
      titleKey: "portfolio.projects.ecommerce.title",
      descriptionKey: "portfolio.projects.ecommerce.description",
      tech: ["React", "Bootstrap", "JavaScript", "CSS", "Git"],
      category: "web",
      icon: "🛒",
      demoUrl: "#",
      codeUrl: "#",
      status: "completed",
      featured: false,
      type: "school",
      yearKey: "portfolio.projects.years.second",
      teamWork: false
    },
    {
      id: 6,
      titleKey: "portfolio.projects.autonomousCar.title",
      descriptionKey: "portfolio.projects.autonomousCar.description",
      tech: ["Python", "Raspberry Pi", "Électronique", "Git"],
      category: "hardware",
      icon: "🚗",
      demoUrl: "#",
      codeUrl: "#",
      status: "completed",
      featured: true,
      type: "school",
      yearKey: "portfolio.projects.years.second",
      teamWork: true
    },
    {
      id: 7,
      titleKey: "portfolio.projects.linuxProject.title",
      descriptionKey: "portfolio.projects.linuxProject.description",
      tech: ["Linux", "Services", "Git"],
      category: "infrastructure",
      icon: "🐧",
      demoUrl: "#",
      codeUrl: "#",
      status: "completed",
      featured: false,
      type: "school",
      yearKey: "portfolio.projects.years.second",
      teamWork: true
    },
    {
      id: 8,
      titleKey: "portfolio.projects.cybersecurity.title",
      descriptionKey: "portfolio.projects.cybersecurity.description",
      tech: ["Cisco", "Fortinet", "Teams", "Git"],
      category: "security",
      icon: "🔒",
      demoUrl: "#",
      codeUrl: "#",
      status: "ongoing",
      featured: false,
      type: "school",
      yearKey: "portfolio.projects.years.secondThird",
      teamWork: true
    },
    {
      id: 9,
      titleKey: "portfolio.projects.interactiveCV.title",
      descriptionKey: "portfolio.projects.interactiveCV.description",
      tech: ["JavaScript", "jQuery", "HTML", "CSS", "Git"],
      category: "web",
      icon: "📄",
      demoUrl: "#",
      codeUrl: "#",
      status: "completed",
      featured: false,
      type: "school",
      yearKey: "portfolio.projects.years.second",
      teamWork: false
    },

    // Projets d'École - 1ère Année
    {
      id: 10,
      titleKey: "portfolio.projects.hackathon.title",
      descriptionKey: "portfolio.projects.hackathon.description",
      tech: ["Python", "Pygame", "Git"],
      category: "gaming",
      icon: "🎮",
      demoUrl: "#",
      codeUrl: "#",
      status: "completed",
      featured: false,
      type: "school",
      yearKey: "portfolio.projects.years.first",
      teamWork: true
    },
    {
      id: 11,
      titleKey: "portfolio.projects.htmlWebsite.title",
      descriptionKey: "portfolio.projects.htmlWebsite.description",
      tech: ["HTML", "CSS", "Git"],
      category: "web",
      icon: "🌍",
      demoUrl: "#",
      codeUrl: "#",
      status: "completed",
      featured: false,
      type: "school",
      yearKey: "portfolio.projects.years.first",
      teamWork: false
    },
    {
      id: 12,
      titleKey: "portfolio.projects.cableTester.title",
      descriptionKey: "portfolio.projects.cableTester.description",
      tech: ["C++", "Électronique", "Circuits", "Multimètre"],
      category: "hardware",
      icon: "🔌",
      demoUrl: "#",
      codeUrl: "#",
      status: "completed",
      featured: false,
      type: "school",
      yearKey: "portfolio.projects.years.first",
      teamWork: false
    }
  ];

  const categories = [
    { id: "all", name: t("portfolio.categories.all"), icon: "📁" },
    { id: "web", name: t("portfolio.categories.web"), icon: "🌐" },
    { id: "infrastructure", name: t("portfolio.categories.infrastructure"), icon: "🏗️" },
    { id: "security", name: t("portfolio.categories.security"), icon: "🔐" },
    { id: "hardware", name: t("portfolio.categories.hardware"), icon: "💻" },
    { id: "gaming", name: t("portfolio.categories.gaming"), icon: "🎮" }
  ];

  const filteredProjects = projects.filter(project => {
    const matchesCategory = filter === "all" || project.category === filter;
    const matchesType = typeFilter === "all" || project.type === typeFilter;
    return matchesCategory && matchesType;
  });

  const getStatusColor = (status: string) => {
    switch (status) {
      case "completed":
        return "bg-green-500/20 border-green-500/40 text-green-400";
      case "inDevelopment":
        return "bg-blue-500/20 border-blue-500/40 text-blue-400";
      case "ongoing":
        return "bg-yellow-500/20 border-yellow-500/40 text-yellow-400";
      default:
        return "bg-gray-500/20 border-gray-500/40 text-gray-400";
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case "completed":
        return t("portfolio.status.completed");
      case "inDevelopment":
        return t("portfolio.status.inDevelopment");
      case "ongoing":
        return t("portfolio.status.ongoing");
      default:
        return t("portfolio.status.unknown");
    }
  };

  return (
    <div className="container mx-auto px-4 md:px-8 lg:px-12">
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-color-text-primary mb-4">
            {t("portfolio.title")}
          </h2>
          <p className="text-accent text-xl md:text-2xl font-medium mb-8">
            {t("portfolio.subtitle")}
          </p>
          
          {/* Filters Section */}
          <div className="flex flex-col sm:flex-row justify-center items-center gap-6 mb-8">
            {/* Category Filter */}
            <div className="relative group">
              <div className="relative">
                <select
                  id="category-select"
                  value={filter}
                  onChange={(e) => setFilter(e.target.value)}
                  className="appearance-none bg-primary border border-secondary rounded-xl px-4 py-3 pr-10 text-color-text-primary font-medium focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20 transition-all duration-300 min-w-[200px] cursor-pointer hover:border-accent/50 hover:bg-secondary/10"
                >
                  {categories.map((category) => (
                    <option key={category.id} value={category.id} className="bg-primary text-color-text-primary py-2">
                      {category.icon} {category.name}
                    </option>
                  ))}
                </select>
                <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                  <svg className="w-5 h-5 text-color-text-secondary group-hover:text-accent transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </div>
            </div>

            {/* Type Filter */}
            <div className="relative group">
              <div className="relative">
                <select
                  id="type-select"
                  value={typeFilter}
                  onChange={(e) => setTypeFilter(e.target.value)}
                  className="appearance-none bg-primary border border-secondary rounded-xl px-4 py-3 pr-10 text-color-text-primary font-medium focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20 transition-all duration-300 min-w-[200px] cursor-pointer hover:border-accent/50 hover:bg-secondary/10"
                >
                  <option value="all" className="bg-primary text-color-text-primary py-2">
                    🎯 {t("portfolio.filters.all")}
                  </option>
                  <option value="personal" className="bg-primary text-color-text-primary py-2">
                    💼 {t("portfolio.filters.personal")}
                  </option>
                  <option value="school" className="bg-primary text-color-text-primary py-2">
                    🎓 {t("portfolio.filters.school")}
                  </option>
                </select>
                <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                  <svg className="w-5 h-5 text-color-text-secondary group-hover:text-accent transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* All Projects Grid */}
        <div className="mb-16">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                className="bg-primary border border-white/8 rounded-lg overflow-hidden hover:border-accent/50 transition-all duration-300 hover:transform hover:scale-[1.02] group flex flex-col h-96"
              >
                {/* Project Header */}
                <div className="h-16 bg-secondary/90 border-b border-secondary/30 flex items-center justify-center relative flex-shrink-0">
                  <div className="text-xl opacity-70 group-hover:scale-110 transition-transform duration-300">
                    {project.icon}
                  </div>
                  <div className={`absolute top-1 right-1 px-1.5 py-0.5 rounded text-xs font-medium border ${getStatusColor(project.status)}`}>
                    {getStatusText(project.status)}
                  </div>
                  <div className={`absolute top-1 left-1 px-1.5 py-0.5 rounded text-xs font-medium ${
                    project.type === "personal" 
                      ? "bg-blue-500/20 text-blue-400 border border-blue-500/40" 
                      : "bg-purple-500/20 text-purple-400 border border-purple-500/40"
                  }`}>
                    {project.type === "personal" ? "💼" : "🎓"}
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-3 flex flex-col flex-grow">
                  <div className="mb-2">
                    <h3 className="text-color-text-primary text-sm font-bold group-hover:text-accent transition-colors line-clamp-1">
                      {t(project.titleKey)}
                    </h3>
                    {(project.year || project.yearKey) && (
                      <div className="text-color-text-secondary/60 text-xs">
                        {project.yearKey ? t(project.yearKey) : project.year}
                      </div>
                    )}
                  </div>

                  <p className="text-color-text-secondary/80 mb-2 h-20 leading-relaxed text-xs line-clamp-4">
                    {t(project.descriptionKey)}
                  </p>

                  {project.teamWork !== undefined && (
                    <div className="mb-2 pt-3 border-t border-white/3">
                      <span className={`inline-flex items-center gap-1 px-2 py-1 rounded text-xs ${
                        project.teamWork 
                          ? "bg-green-500/20 text-green-400"
                          : "bg-blue-500/20 text-blue-400"
                      }`}>
                        {project.teamWork ? "👥" : "👤"}
                        <span className="text-xs">{project.teamWork ? t("portfolio.teamWork.team") : t("portfolio.teamWork.solo")}</span>
                      </span>
                    </div>
                  )}

                  {/* Tech Stack - Limited to 3 main technologies */}
                  <div className="flex flex-wrap gap-1 mb-3">
                    {(expandedTech === project.id ? project.tech : project.tech.slice(0, 3)).map((tech) => (
                      <span
                        key={tech}
                        className="text-color-text-secondary/90 px-2 py-1 rounded text-xs border border-secondary/80 h-fit"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.tech.length > 3 && expandedTech !== project.id && (
                      <button
                        onClick={() => setExpandedTech(project.id)}
                        className="text-color-text-secondary/60 hover:text-accent hover:cursor-pointer text-xs px-2 py-1 flex items-center transition-colors h-fit"
                      >
                        +{project.tech.length - 3}
                      </button>
                    )}
                    {expandedTech === project.id && project.tech.length > 3 && (
                      <button
                        onClick={() => setExpandedTech(null)}
                        className="text-color-text-secondary/60 hover:text-accent hover:cursor-pointer text-xs px-2 py-1 flex items-center transition-colors h-fit"
                      >
                        ↑ {t("portfolio.collapse")}
                      </button>
                    )}
                  </div>

                  {/* Action Button - Always at bottom */}
                  <div className="text-xs mt-auto flex-shrink-0">
                    {project.type === "personal" && project.codeUrl && project.codeUrl !== "#" && (
                      <a
                        href={project.codeUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full block border border-accent text-accent hover:bg-accent hover:text-primary font-semibold py-2 px-3 rounded transition-colors text-center"
                      >
                        {t("portfolio.viewCode")}
                      </a>
                    )}
                    {project.type === "personal" && (!project.codeUrl || project.codeUrl === "#") && (
                      <div className="w-full bg-secondary text-color-text-secondary/60 font-medium py-2 px-3 rounded text-center border border-secondary/40 hover:cursor-not-allowed">
                        💼 {t("portfolio.privateCode")}
                      </div>
                    )}
                    {project.type === "school" && (
                      <div className="w-full bg-secondary text-color-text-secondary/60 font-medium py-2 px-3 rounded text-center border border-secondary/40 hover:cursor-not-allowed">
                        🎓 {t("portfolio.schoolProject")}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Stats Section */}
        <div className="bg-primary border border-white/8 rounded-xl p-6 mb-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            <div className="space-y-1">
              <div className="text-2xl font-bold text-accent">{projects.length}</div>
              <div className="text-color-text-secondary text-sm">{t("portfolio.stats.total")}</div>
            </div>
            <div className="space-y-1">
              <div className="text-2xl font-bold text-accent">
                {projects.filter(p => p.type === "personal").length}
              </div>
              <div className="text-color-text-secondary text-sm">{t("portfolio.stats.personal")}</div>
            </div>
            <div className="space-y-1">
              <div className="text-2xl font-bold text-accent">
                {projects.filter(p => p.type === "school").length}
              </div>
              <div className="text-color-text-secondary text-sm">{t("portfolio.stats.school")}</div>
            </div>
            <div className="space-y-1">
              <div className="text-2xl font-bold text-accent">
                {new Set(projects.flatMap(p => p.tech)).size}
              </div>
              <div className="text-color-text-secondary text-sm">{t("portfolio.stats.technologies")}</div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="inline-flex items-center gap-3 bg-gradient-to-r from-accent/20 to-accent/10 border border-accent/30 rounded-full px-8 py-4">
            <span className="text-2xl">🚀</span>
            <p className="text-color-text-primary text-lg font-medium">
              {t("portfolio.moreProjects")}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
