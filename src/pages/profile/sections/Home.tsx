import { useTranslation } from "react-i18next";
import { Link } from "react-scroll";

const Home = () => {
  const { t } = useTranslation();

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
          
          {/* CTA Button */}
          <div className="pt-4 md:pt-8">
            <Link
              to="portfolio"
              smooth={true}
              duration={500}
              className="inline-block bg-accent hover:bg-accent/90 text-primary font-semibold px-8 py-4 rounded-lg transition-all duration-300 cursor-pointer hover:transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              {t("home.cta")}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;