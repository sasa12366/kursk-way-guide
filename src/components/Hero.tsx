import { Button } from "@/components/ui/button";
import { Download, MapPin } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";
import appMockup from "@/assets/app-mockup.png";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroBg}
          alt="Курск и река Сейм"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 gradient-hero opacity-90" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="text-white space-y-6">
            <div className="flex items-center gap-2 mb-4">
              <MapPin className="w-6 h-6" />
              <span className="text-lg font-medium">Курск и Курская область</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
              Курский путь
            </h1>
            
            <p className="text-xl md:text-2xl text-white/90 max-w-xl">
              Откройте для себя красоту и историю Курской области с нашим мобильным гидом
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button 
                size="lg" 
                className="bg-white text-primary hover:bg-white/90 text-lg px-8 py-6 shadow-card"
                asChild
              >
                <a 
                  href="https://apps.rustore.ru" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-2"
                >
                  <Download className="w-5 h-5" />
                  Скачать в RuStore
                </a>
              </Button>
              
              <Button 
                size="lg" 
                variant="outline" 
                className="border-2 border-white bg-white text-primary hover:bg-white/90 hover:text-primary text-lg px-8 py-6"
                asChild
              >
                <a href="#about">
                  Узнать больше
                </a>
              </Button>
            </div>
          </div>

          {/* App Mockup */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <div className="absolute inset-0 bg-white/20 blur-3xl rounded-full transform scale-75" />
              <img
                src={appMockup}
                alt="Интерфейс приложения Курский путь"
                className="relative w-64 md:w-80 lg:w-96 drop-shadow-2xl animate-float"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-bounce" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
