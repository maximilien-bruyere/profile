import { useTranslation } from "react-i18next";

const About = () => {
  const { t } = useTranslation();

  const languages = {
    webTechnologies: {
      HTML5: {
        level: t("levels.veryGood"),
      },
      CSS3: {
        level: t("levels.good"),
      },
      PHP: {
        level: t("levels.acceptable"),
      },
      JavaScript: {
        level: t("levels.acceptable"),
      },
      "React Bootstrap": {
        level: t("levels.acceptable"),
      },
      "React TypeScript": {
        level: t("levels.good"),
      },
      "Tailwind CSS": {
        level: t("levels.good"),
      },
      NestJS: {
        level: t("levels.passable"),
      },
      Prisma: {
        level: t("levels.passable"),
      },
    },
    programLang: {
      Python: {
        level: t("levels.good"),
      },
      C: {
        level: t("levels.acceptable"),
      },
    },
    systemAndInfra: {
      Docker: {
        level: t("levels.good"),
      },
      Kubernetes: {
        level: t("levels.passable"),
      },
      Ansible: {
        level: t("levels.passable"),
      },
    },
    teamWork: {
      Git: {
        level: t("levels.veryGood"),
      },
      Github: {
        level: t("levels.veryGood"),
      },
    },
    databases: {
      MariaDB: {
        level: t("levels.acceptable"),
      },
      MySQL: {
        level: t("levels.acceptable"),
      },
      SQLite: {
        level: t("levels.passable"),
      },
    },
    systemsAndHardware: {
      Windows: {
        level: t("levels.good"),
      },
      "Windows Server": {
        level: t("levels.acceptable"),
      },
      Cisco: {
        level: t("levels.veryGood"),
      },
      Fortinet: {
        level: t("levels.good"),
      },
      "Linux - RedHat": {
        level: t("levels.veryGood"),
      },
      "Linux - Debian": {
        level: t("levels.veryGood"),
      },
      "RaspberryPi OS": {
        level: t("levels.veryGood"),
      },
      Bash: {
        level: t("levels.veryGood"),
      },
      Powershell: {
        level: t("levels.acceptable"),
      },
    },
    otherSkills: {
      Markdown: {
        level: t("levels.veryGood"),
      },
      LaTeX: {
        level: t("levels.good"),
      },
    },
  };

  const getLevelColor = (level: string) => {
    const veryGood = t("levels.veryGood");
    const good = t("levels.good");
    const acceptable = t("levels.acceptable");
    const passable = t("levels.passable");

    switch (level) {
      case veryGood:
        return "text-lime-400";
      case good:
        return "text-emerald-400";
      case acceptable:
        return "text-cyan-400";
      case passable:
        return "text-blue-400";
      default:
        return "text-accent";
    }
  };

  return (
    <div className="container mx-auto px-4 md:px-8 lg:px-12">
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-color-text-primary mb-6">
            {t("about.title")}
          </h2>
          <p className="text-accent text-2xl md:text-3xl lg:text-4xl font-medium">
            {t("about.subtitle")}
          </p>
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-3 gap-8 lg:gap-12 ">
          {/* Left Column - Description & Info */}
          <div className="lg:col-span-1 space-y-6 ">
            <p className="text-color-text-secondary/90 text-lg leading-relaxed">
              {t("about.description")}
            </p>

            {/* Education Card */}
            <div className="bg-secondary p-6 rounded-lg border border-secondary/50">
              <div className="flex items-center mb-3">
                <span className="text-accent text-2xl mr-3">🎓</span>
                <h3 className="text-accent text-lg font-semibold">
                  {t("about.education.title")}
                </h3>
              </div>
              <p className="text-color-text-primary font-bold">
                {t("about.education.degree")}
              </p>
              <p className="text-color-text-secondary/80 hover:underline hover:underline-offset-3 active:text-accent transition-colors duration-300">
                <a
                  href="https://www.heh.be/bachelier-informatique"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {t("about.education.school")}
                </a>
              </p>
              <p className="text-accent font-medium">
                {t("about.education.year")}
              </p>
            </div>

            {/* Location Card */}
            <div className="bg-secondary p-6 rounded-lg border border-secondary/50">
              <div className="flex items-center mb-3">
                <span className="text-accent text-2xl mr-3">📍</span>
                <h3 className="text-accent text-lg font-semibold">
                  {t("about.location.title")}
                </h3>
              </div>
              <p className="text-color-text-primary font-medium">
                {t("about.location.country")}
              </p>
            </div>

            <div className="bg-secondary p-6 rounded-lg border border-secondary/50">
              <div className="flex items-center mb-3">
                <span className="text-accent text-2xl mr-3">🏆</span>
                <h3 className="text-accent text-lg font-semibold">
                  {t("about.certifications.title")}
                </h3>
              </div>
              <div className="space-y-2">
                <p className="text-color-text-primary hover:underline hover:underline-offset-3 active:text-color-text-secondary transition-colors duration-300">
                  <a href="https://www.credly.com/earner/earned/badge/650c28c5-dde9-44c0-99d8-9307c694d206" target="_blank" rel="noopener noreferrer">
                    {t("about.certifications.first")}
                  </a>
                </p>
                <p className="text-color-text-primary hover:underline hover:underline-offset-3 active:text-color-text-secondary transition-colors duration-300">
                  <a href="https://www.credly.com/earner/earned/badge/ef4cc47c-4a19-4522-936d-aa3aa20aea0a" target="_blank" rel="noopener noreferrer">
                    {t("about.certifications.second")}
                  </a>
                </p>
              </div>
            </div>

            {/* Languages Card */}
            <div className="bg-secondary p-6 rounded-lg border border-secondary/50">
              <div className="flex items-center mb-3">
                <span className="text-accent text-2xl mr-3">🗣️</span>
                <h3 className="text-accent text-lg font-semibold">
                  {t("about.languages.title")}
                </h3>
              </div>
              <div className="space-y-2">
                <p className="text-color-text-primary">
                  {t("about.languages.french")}
                </p>
                <p className="text-color-text-primary">
                  {t("about.languages.english")}
                </p>
              </div>
            </div>

            <div className="bg-secondary p-6 rounded-lg border border-secondary/50">
              <div className="flex items-center mb-3">
                <span className="text-accent text-2xl mr-3">⚡</span>
                <h3 className="text-accent text-lg font-semibold">
                  {t("about.interests.title")} {/* "Centres d'intérêt" */}
                </h3>
              </div>
              <div className="space-y-2 text-color-text-primary">
                <p>{t("about.interests.interest_1")}</p>
                <p>{t("about.interests.interest_2")}</p>
                <p>{t("about.interests.interest_3")}</p>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-4 mb-6">
              <div className="text-center">
                <p className="text-accent text-2xl font-bold">30+</p>
                <p className="text-color-text-secondary/80 text-sm">
                  {t("about.stats.technologies")}
                </p>
              </div>
              <div className="text-center">
                <p className="text-accent text-2xl font-bold">12</p>
                <p className="text-color-text-secondary/80 text-sm">
                  {t("about.stats.projects")}
                </p>
              </div>
              <div className="text-center">
                <p className="text-accent text-2xl font-bold">3</p>
                <p className="text-color-text-secondary/80 text-sm">
                  {t("about.stats.years")}
                </p>
              </div>
            </div>
          </div>

          {/* Right Column - Skills */}
          <div className="lg:col-span-2 md:pl-11 md:border-l md:border-secondary">
            <h3 className="text-color-text-primary text-3xl font-bold mb-8 text-center lg:text-left">
              {t("about.skills")}
            </h3>

            <div className="space-y-8">
              {/* Web Technologies */}
              <div>
                <h4 className="text-accent text-xl font-semibold mb-4 flex items-center">
                  <span className="mr-3">💻</span>
                  {t("about.categories.web")}
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                  {Object.entries(languages.webTechnologies).map(([skill, data]) => (
                    <div
                      key={skill}
                      className="bg-primary border border-secondary p-3 rounded-lg hover:bg-secondary transition-colors duration-300 hover:border-accent/30"
                    >
                      <div className="flex justify-between items-center">
                        <span className="text-color-text-secondary font-medium text-sm">
                          {skill}
                        </span>
                        <span className={`${getLevelColor(data.level)} text-xs font-semibold`}>
                          {data.level}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Infrastructure & DevOps */}
              <div>
                <h4 className="text-accent text-xl font-semibold mb-4 flex items-center">
                  <span className="mr-3">🔧</span>
                  {t("about.categories.infrastructure")}
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                  {Object.entries(languages.systemAndInfra).map(([skill, data]) => (
                    <div
                      key={skill}
                      className="bg-primary border border-secondary p-3 rounded-lg hover:bg-secondary transition-colors duration-300 hover:border-accent/30"
                    >
                      <div className="flex justify-between items-center">
                        <span className="text-color-text-secondary font-medium text-sm">
                          {skill}
                        </span>
                        <span className={`${getLevelColor(data.level)} text-xs font-semibold`}>
                          {data.level}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* TeamWork */}
              <div>
                <h4 className="text-accent text-xl font-semibold mb-4 flex items-center">
                  <span className="mr-3">🤝</span>
                  {t("about.categories.teamwork")}
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                  {Object.entries(languages.teamWork).map(([skill, data]) => (
                    <div
                      key={skill}
                      className="bg-primary border border-secondary p-3 rounded-lg hover:bg-secondary transition-colors duration-300 hover:border-accent/30"
                    >
                      <div className="flex justify-between items-center">
                        <span className="text-color-text-secondary font-medium text-sm">
                          {skill}
                        </span>
                        <span className={`${getLevelColor(data.level)} text-xs font-semibold`}>
                          {data.level}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Programming */}
              <div>
                <h4 className="text-accent text-xl font-semibold mb-4 flex items-center">
                  <span className="mr-3">🔧</span>
                  {t("about.categories.programming")}
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                  {Object.entries(languages.programLang).map(([skill, data]) => (
                    <div
                      key={skill}
                      className="bg-primary border border-secondary p-3 rounded-lg hover:bg-secondary transition-colors duration-300 hover:border-accent/30"
                    >
                      <div className="flex justify-between items-center">
                        <span className="text-color-text-secondary font-medium text-sm">
                          {skill}
                        </span>
                        <span className={`${getLevelColor(data.level)} text-xs font-semibold`}>
                          {data.level}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Databases */}
              <div>
                <h4 className="text-accent text-xl font-semibold mb-4 flex items-center">
                  <span className="mr-3">🗃️</span>
                  {t("about.categories.databases")}
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                  {Object.entries(languages.databases).map(([skill, data]) => (
                    <div
                      key={skill}
                      className="bg-primary border border-secondary p-3 rounded-lg hover:bg-secondary transition-colors duration-300 hover:border-accent/30"
                    >
                      <div className="flex justify-between items-center">
                        <span className="text-color-text-secondary font-medium text-sm">
                          {skill}
                        </span>
                        <span className={`${getLevelColor(data.level)} text-xs font-semibold`}>
                          {data.level}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Systems & Hardware */}
              <div>
                <h4 className="text-accent text-xl font-semibold mb-4 flex items-center">
                  <span className="mr-3">⚙️</span>
                  {t("about.categories.systems")}
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                  {Object.entries(languages.systemsAndHardware).map(([skill, data]) => (
                    <div
                      key={skill}
                      className="bg-primary border border-secondary p-3 rounded-lg hover:bg-secondary transition-colors duration-300 hover:border-accent/30"
                    >
                      <div className="flex justify-between items-center">
                        <span className="text-color-text-secondary font-medium text-sm">
                          {skill}
                        </span>
                        <span className={`${getLevelColor(data.level)} text-xs font-semibold`}>
                          {data.level}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Other Skills */}
              <div>
                <h4 className="text-accent text-xl font-semibold mb-4 flex items-center">
                  <span className="mr-3">📝</span>
                  {t("about.categories.other")}
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                  {Object.entries(languages.otherSkills).map(([skill, data]) => (
                    <div
                      key={skill}
                      className="bg-primary border border-secondary p-3 rounded-lg hover:bg-secondary transition-colors duration-300 hover:border-accent/30"
                    >
                      <div className="flex justify-between items-center">
                        <span className="text-color-text-secondary font-medium text-sm">
                          {skill}
                        </span>
                        <span className={`${getLevelColor(data.level)} text-xs font-semibold`}>
                          {data.level}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
