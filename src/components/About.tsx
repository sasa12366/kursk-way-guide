import { MapPin, Users, Heart, Compass } from "lucide-react";

const About = () => {
  const features = [
    {
      icon: MapPin,
      title: "Для туристов",
      description: "Найдите все достопримечательности и интересные места региона"
    },
    {
      icon: Users,
      title: "Для жителей",
      description: "Откройте новые места в родном городе и области"
    },
    {
      icon: Heart,
      title: "С любовью",
      description: "Создано местными жителями для знакомства с нашим краем"
    },
    {
      icon: Compass,
      title: "Удобная навигация",
      description: "Простой интерфейс и детальные маршруты к каждому месту"
    }
  ];

  return (
    <section id="about" className="py-20 md:py-32 gradient-section">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            О проекте
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed">
            <span className="font-semibold text-primary">Курский путь</span> — это мобильное приложение, 
            которое помогает туристам и жителям находить достопримечательности, 
            маршруты, интересные факты и места для отдыха в Курске и Курской области.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-card rounded-2xl p-8 shadow-soft hover:shadow-card transition-all duration-300 hover:-translate-y-1"
            >
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                <feature.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-foreground">
                {feature.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
