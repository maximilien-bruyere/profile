import { useTranslation } from "react-i18next";

export default function Contact() {
  const { t } = useTranslation();

  return (
    <section 
      id="contact" 
      className="min-h-screen px-4 sm:px-6 lg:px-8 bg-primary/5 border-t border-secondary/20"
    >
      <div className="container mx-auto">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16 lg:mb-20">
          <h2 className="text-color-text-primary text-4xl sm:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6">
            {t("contact.title")}
          </h2>
          <p className="text-accent text-xl md:text-2xl font-medium">
            {t("contact.subtitle")}
          </p>
          <p className="text-color-text-secondary text-lg sm:text-xl max-w-2xl mx-auto">
            {t("contact.description")}
          </p>
        </div>

        {/* Contact Content */}
        <div className="max-w-4xl mx-auto">
          {/* Contact Info Card */}
          <div className="bg-secondary/20 border border-secondary/30 p-6 sm:p-8 lg:p-10 rounded-lg">
            <h3 className="text-color-text-primary text-2xl sm:text-3xl font-bold mb-6 sm:mb-8 text-center">
              {t("contact.info.title")}
            </h3>
            
            {/* Contact Information Grid */}
            <div className="grid md:grid-cols-2 gap-6 sm:gap-8 mb-8 sm:mb-10">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-accent/20 border border-accent/30 rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-accent text-xl">📧</span>
                </div>
                <div className="min-w-0 flex-1">
                  <p className="text-color-text-secondary/80 text-sm mb-1">{t("contact.info.email")}</p>
                  <a 
                    href="mailto:maximilien-bruyere@hotmail.com"
                    className="text-color-text-primary font-medium hover:text-accent transition-colors break-all"
                  >
                    maximilien-bruyere@hotmail.com
                  </a>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-accent/20 border border-accent/30 rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-accent text-xl">📍</span>
                </div>
                <div className="min-w-0 flex-1">
                  <p className="text-color-text-secondary/80 text-sm mb-1">{t("contact.info.location")}</p>
                  <p className="text-color-text-primary font-medium">{t("about.location.country")}</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-accent/20 border border-accent/30 rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-accent text-xl">🎓</span>
                </div>
                <div className="min-w-0 flex-1">
                  <p className="text-color-text-secondary/80 text-sm mb-1">{t("contact.info.education")}</p>
                  <p className="text-color-text-primary font-medium">{t("about.education.school")}</p>
                  <p className="text-color-text-secondary/70 text-sm">{t("about.education.degree")} - {t("about.education.year")}</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-accent/20 border border-accent/30 rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-accent text-xl">🗣️</span>
                </div>
                <div className="min-w-0 flex-1">
                  <p className="text-color-text-secondary/80 text-sm mb-1">{t("contact.info.languages")}</p>
                  <p className="text-color-text-primary font-medium">{t("about.languages.french")}</p>
                  <p className="text-color-text-primary font-medium">{t("about.languages.english")}</p>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
              <a
                href="https://github.com/maximilien-bruyere"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 bg-secondary/40 border border-secondary/60 hover:border-accent/50 text-color-text-primary font-semibold py-4 px-6 rounded-lg transition-all duration-300 hover:transform hover:scale-105 flex items-center justify-center space-x-3 group"
              >
                <svg className="w-6 h-6 group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
                <span>{t("contact.buttons.github")}</span>
              </a>
              
              <a
                href="https://linkedin.com/in/maximilien-bruyere"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 bg-accent hover:bg-accent/90 text-primary font-semibold py-4 px-6 rounded-lg transition-all duration-300 hover:transform hover:scale-105 flex items-center justify-center space-x-3 group"
              >
                <svg className="w-6 h-6 group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
                <span>{t("contact.buttons.linkedin")}</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
