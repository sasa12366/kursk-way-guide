import { MapPin, Users, Heart, Compass, Lightbulb } from "lucide-react";

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

  const facts = [
    {
      title: "Битва на Курской дуге",
      description: "Курская битва 1943 года — крупнейшее танковое сражение в истории, ставшее переломным моментом Великой Отечественной войны"
    },
    {
      title: "Соловьиный край",
      description: "Курск называют соловьиным краем — здесь обитает огромное количество этих певчих птиц, символизирующих красоту природы региона"
    },
    {
      title: "Первое летописное упоминание",
      description: "Курск впервые упоминается в летописи в 1032 году, что делает его одним из древнейших городов России"
    },
    {
      title: "Знаменский собор",
      description: "Знаменский кафедральный собор XVII века — место явления чудотворной иконы Божией Матери «Знамение» Курская-Коренная"
    },
    {
      title: "Родина соловья-разбойника",
      description: "По одной из версий, легендарный былинный герой Соловей-разбойник жил именно в окрестностях Курска у реки Смородинной"
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

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
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

        {/* Интересные факты */}
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center justify-center gap-3 mb-12">
            <Lightbulb className="w-8 h-8 text-accent" />
            <h3 className="text-3xl md:text-4xl font-bold text-foreground">
              Интересные факты
            </h3>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            {facts.map((fact, index) => (
              <div
                key={index}
                className="bg-card rounded-xl p-6 shadow-soft border-l-4 border-accent hover:shadow-card transition-all duration-300"
              >
                <h4 className="text-lg font-semibold text-foreground mb-3">
                  {fact.title}
                </h4>
                <p className="text-muted-foreground leading-relaxed">
                  {fact.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
