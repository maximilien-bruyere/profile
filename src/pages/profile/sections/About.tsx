import { useTranslation } from "react-i18next";

const About = () => {
  const { t } = useTranslation();

  const webTechnologies = [
    "HTML5",
    "CSS3",
    "PHP",
    "JavaScript",
    "React Bootstrap",
    "React TypeScript",
    "Tailwind CSS",
    "NestJS",
    "Prisma",
  ];

  const programLang = ["Python", "C", "C#", "C++", "Bash", "Powershell"];

  const systemAndInfra = ["Git", "GitHub", "Docker", "Kubernetes", "Ansible"];

  const databases = ["MariaDB", "MySQL"];

  const systemsAndHardware = [
    "Windows",
    "Windows Server",
    "Cisco",
    "Fortinet",
    "Linux - RedHat",
    "Linux - Debian",
    "RaspberryPi OS",
  ];

  const otherSkills = ["Markdown", "LaTeX"];

  return (
    <div className="container mx-auto px-4 md:px-8 lg:px-12">
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-color-text-primary mb-4">
            {t("about.title")}
          </h2>
          <p className="text-accent text-xl md:text-2xl font-medium">
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
              <p className="text-color-text-primary font-bold text-lg">
                {t("about.education.degree")}
              </p>
              <p className="text-color-text-secondary/80">
                {t("about.education.school")}
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
                  {t('about.certifications.title')}
                </h3>
              </div>
              <div className="space-y-2">
                <p className="text-color-text-primary">
                  {t('about.certifications.first')}
                </p>
                <p className="text-color-text-primary">
                  {t('about.certifications.second')}
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
                <p>
                  {t("about.interests.interest_1")}
                </p>
                <p>
                  {t("about.interests.interest_2")}
                </p>
                <p>
                  {t("about.interests.interest_3")}
                </p>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-4 mb-6">
              <div className="text-center">
                <p className="text-accent text-2xl font-bold">30+</p>
                <p className="text-color-text-secondary/80 text-sm">
                  {t('about.stats.technologies')}
                </p>
              </div>
              <div className="text-center">
                <p className="text-accent text-2xl font-bold">12</p>
                <p className="text-color-text-secondary/80 text-sm">{t('about.stats.projects')}</p>
              </div>
              <div className="text-center">
                <p className="text-accent text-2xl font-bold">3</p>
                <p className="text-color-text-secondary/80 text-sm">
                  {t('about.stats.years')}
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
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                  {webTechnologies.map((skill) => (
                    <div
                      key={skill}
                      className="bg-primary border border-secondary p-3 rounded-lg text-center hover:bg-secondary transition-colors duration-300 hover:border-accent/30"
                    >
                      <span className="text-color-text-secondary font-medium text-sm">
                        {skill}
                      </span>
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
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                  {systemAndInfra.map((skill) => (
                    <div
                      key={skill}
                      className="bg-primary border border-secondary p-3 rounded-lg text-center hover:bg-secondary transition-colors duration-300 hover:border-accent/30"
                    >
                      <span className="text-color-text-secondary font-medium text-sm">
                        {skill}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Infrastructure & DevOps */}
              <div>
                <h4 className="text-accent text-xl font-semibold mb-4 flex items-center">
                  <span className="mr-3">🔧</span>
                  {t("about.categories.programming")}
                </h4>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                  {programLang.map((skill) => (
                    <div
                      key={skill}
                      className="bg-primary border border-secondary p-3 rounded-lg text-center hover:bg-secondary transition-colors duration-300 hover:border-accent/30"
                    >
                      <span className="text-color-text-secondary font-medium text-sm">
                        {skill}
                      </span>
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
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                  {databases.map((skill) => (
                    <div
                      key={skill}
                      className="bg-primary border border-secondary p-3 rounded-lg text-center hover:bg-secondary transition-colors duration-300 hover:border-accent/30"
                    >
                      <span className="text-color-text-secondary font-medium text-sm">
                        {skill}
                      </span>
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
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                  {systemsAndHardware.map((skill) => (
                    <div
                      key={skill}
                      className="bg-primary border border-secondary p-3 rounded-lg text-center hover:bg-secondary transition-colors duration-300 hover:border-accent/30"
                    >
                      <span className="text-color-text-secondary font-medium text-sm">
                        {skill}
                      </span>
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
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                  {otherSkills.map((skill) => (
                    <div
                      key={skill}
                      className="bg-primary border border-secondary p-3 rounded-lg text-center hover:bg-secondary transition-colors duration-300 hover:border-accent/30"
                    >
                      <span className="text-color-text-secondary font-medium text-sm">
                        {skill}
                      </span>
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
