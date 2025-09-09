import { useTranslation } from "react-i18next";
import { Link } from "react-scroll";

const Home = () => {
  const { t, i18n } = useTranslation();

  const downloadCV = () => {
    const currentLanguage = i18n.language;
    const cvFileName = currentLanguage === 'fr' ? 'cv_fr.pdf' : 'cv_en.pdf';
    const cvDisplayName = currentLanguage === 'fr' ? 'CV_Maximilien_Bruyere_FR.pdf' : 'CV_Maximilien_Bruyere_EN.pdf';
    
    const link = document.createElement('a');
    link.href = `./src/assets/cv/${cvFileName}`;
    link.download = cvDisplayName;
    link.click();
  };

  return (
    <div className="container mx-auto px-4 md:px-8 lg:px-12 min-h-screen flex items-center">
      <div className="w-full max-w-4xl mx-auto text-center lg:text-left">
        <div className="space-y-6 md:space-y-8">
          {/* Greeting */}
          <p className="text-color-text-secondary/80 text-base sm:text-lg md:text-xl">
            {t("home.greeting")}
          </p>
          
          {/* Main Title */}
          <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold">
            <span className="bg-gradient-to-r from-color-text-secondary to-color-text-primary bg-clip-text text-transparent">
              {t("home.title")}
            </span>
          </h1>
          
          {/* Subtitle */}
          <h2 className="text-accent text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold">
            {t("home.subtitle")}
          </h2>
          
          {/* Description */}
          <p className="text-color-text-secondary/90 text-base sm:text-lg md:text-xl max-w-2xl mx-auto lg:mx-0 leading-relaxed">
            {t("home.description")}
          </p>
          
          {/* CTA Buttons */}
          <div className="pt-4 md:pt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start max-w-lg mx-auto lg:mx-0">
            <Link
              to="portfolio"
              smooth={true}
              duration={500}
              className="flex-1 inline-block bg-accent hover:bg-accent/90 text-primary font-semibold px-6 py-4 rounded-lg transition-all duration-300 cursor-pointer hover:transform hover:scale-105 shadow-lg hover:shadow-xl text-center"
            >
              {t("home.cta")}
            </Link>
            
            <button
              onClick={downloadCV}
              className="hover:cursor-pointer flex-1 bg-secondary/60 border border-white/3 hover:border-accent/50 text-color-text-primary hover:text-accent font-semibold px-6 py-4 rounded-lg transition-all duration-300 hover:transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
            >
              <svg className="w-4 h-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              <span className="truncate">{t("home.downloadCV")}</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;