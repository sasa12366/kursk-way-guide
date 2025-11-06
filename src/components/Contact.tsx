import { Mail, MessageSquare, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

const Contact = () => {
  return (
    <section id="contact" className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Контакты и поддержка
            </h2>
            <p className="text-xl text-muted-foreground">
              Есть вопросы или предложения? Мы всегда рады помочь!
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="text-center p-8 bg-card rounded-2xl shadow-soft">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <Mail className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Email</h3>
              <a
                href="mailto:support@kurskway.ru"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                support@kurskway.ru
              </a>
            </div>

            <div className="text-center p-8 bg-card rounded-2xl shadow-soft">
              <div className="w-16 h-16 rounded-full bg-secondary/10 flex items-center justify-center mx-auto mb-4">
                <Phone className="w-8 h-8 text-secondary" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Телефон</h3>
              <a
                href="tel:+78005551234"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                8 (800) 555-12-34
              </a>
            </div>

            <div className="text-center p-8 bg-card rounded-2xl shadow-soft">
              <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-4">
                <MessageSquare className="w-8 h-8 text-accent" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Telegram</h3>
              <a
                href="https://t.me/kurskway"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                @kurskway
              </a>
            </div>
          </div>

          <div className="bg-gradient-hero rounded-2xl p-8 md:p-12 text-center text-black shadow-card"> 
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Начните своё путешествие прямо сейчас
            </h3>
            <p className="text-lg mb-8 text-white/90 max-w-2xl mx-auto">
              Скачайте приложение "Курский путь" и откройте для себя все красоты Курской области
            </p>
            <Button
              size="lg"
              className="bg-white text-primary hover:bg-white/90 text-lg px-8 py-6"
              asChild
            >
              <a
                href="https://apps.rustore.ru"
                target="_blank"
                rel="noopener noreferrer"
              >
                Скачать приложение
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
