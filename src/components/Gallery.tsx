import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery3 from "@/assets/gallery-3.jpg";
import gallery4 from "@/assets/gallery-4.jpg";
import gallery5 from "@/assets/gallery-5.jpg";
import gallery6 from "@/assets/gallery-6.jpg";

const Gallery = () => {
  const images = [
    {
      src: gallery1,
      alt: "Знаменский собор в Курске",
      title: "Знаменский собор"
    },
    {
      src: gallery2,
      alt: "Мемориальный комплекс Курская дуга",
      title: "Триумфальная арка"
    },
    {
      src: gallery3,
      alt: "Парк в Курске",
      title: "Городские парки"
    },
    {
      src: gallery4,
      alt: "Река Сейм",
      title: "Река Сейм"
    },
    {
      src: gallery5,
      alt: "Исторический центр Курска",
      title: "Центр города"
    },
    {
      src: gallery6,
      alt: "Курская область",
      title: "Природа области"
    }
  ];

  return (
    <section id="gallery" className="py-20 md:py-32 gradient-section">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Галерея
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Познакомьтесь с красотой и достопримечательностями Курской области
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((image, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-2xl shadow-soft hover:shadow-card transition-all duration-300 aspect-square"
            >
              <img
                src={image.src}
                alt={image.alt}
                className={`w-full h-full ${index === 2 ? 'object-cover object-left' : 'object-cover'} group-hover:scale-110 transition-transform duration-500`}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-white text-xl font-semibold">
                    {image.title}
                  </h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
