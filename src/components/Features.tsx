import { MapIcon, Route, Sparkles, Clock } from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: MapIcon,
      title: "Интерактивная карта",
      description: "Все достопримечательности на одной карте с подробными описаниями и фотографиями"
    },
    {
      icon: Route,
      title: "Тематические маршруты",
      description: "Готовые маршруты: исторические места, природные объекты, семейный отдых"
    },
    {
      icon: Sparkles,
      title: "Интересные факты",
      description: "Узнайте удивительные истории и легенды о каждом месте Курской области"
    },
    {
      icon: Clock,
      title: "Рекомендации по времени",
      description: "Оптимальное время для посещения каждой достопримечательности"
    }
  ];

  return (
    <section id="features" className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Функции приложения
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Всё необходимое для комфортного путешествия по Курской области
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative bg-card rounded-2xl p-8 shadow-soft hover:shadow-card transition-all duration-300"
            >
              <div className="flex items-start gap-6">
                <div className="w-16 h-16 rounded-xl bg-gradient-hero flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-semibold mb-3 text-foreground">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
