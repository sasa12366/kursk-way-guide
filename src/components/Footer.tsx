import { MapPin } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-white py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2">
            <MapPin className="w-6 h-6" />
            <span className="text-xl font-bold">Курский путь</span>
          </div>
          
          <div className="flex flex-wrap justify-center gap-6 text-sm">
            <a href="#about" className="hover:text-white/80 transition-colors">
              О проекте
            </a>
            <a href="#features" className="hover:text-white/80 transition-colors">
              Функции
            </a>
            <a href="#gallery" className="hover:text-white/80 transition-colors">
              Галерея
            </a>
            <a href="#contact" className="hover:text-white/80 transition-colors">
              Контакты
            </a>
          </div>
          
          <div className="text-sm text-white/80">
            © {currentYear} Курский путь
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
