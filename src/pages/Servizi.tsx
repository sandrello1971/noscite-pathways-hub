import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { BookOpen, Rocket, Zap, Users, Settings, ArrowRight, CheckCircle, Clock, Euro } from "lucide-react";
import { Link } from "react-router-dom";

const Servizi = () => {
  const services = [
    {
      id: "academy",
      icon: BookOpen,
      title: "AI Academy",
      subtitle: "Formazione Completa sull'Intelligenza Artificiale",
      description: "Programma formativo strutturato per portare il tuo team dalle basi dell'AI all'implementazione pratica di soluzioni enterprise.",
      duration: "3-6 mesi",
      price: "A partire da €5.000",
      features: [
        "Corsi certificati su ML, Deep Learning, NLP",
        "Workshop pratici con progetti reali",
        "Community esclusiva di professionisti",
        "Follow-up personalizzato per 6 mesi",
        "Certificazioni riconosciute dal mercato"
      ],
      benefits: [
        "Team autonomo nell'AI",
        "Riduzione costi consulenza esterna",
        "Innovazione interna accelerata"
      ]
    },
    {
      id: "launchpad", 
      icon: Rocket,
      title: "AI Launchpad",
      subtitle: "Il Trampolino per la Trasformazione Digitale",
      description: "Programma di avviamento progettato per aziende che vogliono iniziare il loro viaggio nell'AI con una strategia chiara e risultati veloci.",
      duration: "6-8 settimane",
      price: "€15.000 - €25.000",
      features: [
        "Assessment completo dell'attuale stato digitale",
        "Roadmap strategica personalizzata",
        "Identificazione quick wins",
        "Primi 2 progetti pilota implementati",
        "Setup governance AI"
      ],
      benefits: [
        "ROI visibile in 60 giorni",
        "Strategia AI chiara e actionable",
        "Team preparato per l'evoluzione"
      ]
    },
    {
      id: "sprint",
      icon: Zap,
      title: "AI Sprint", 
      subtitle: "Implementazione Rapida e Misurabile",
      description: "Metodologia agile per implementare soluzioni AI specifiche con risultati tangibili e misurabili in tempi ridotti.",
      duration: "4-12 settimane",
      price: "€10.000 - €50.000",
      features: [
        "Metodologia sprint consolidata",
        "KPI definiti e monitoraggio continuo",
        "Moduli formativi integrati",
        "Implementazione hands-on",
        "Documentazione completa"
      ],
      benefits: [
        "Time-to-market ridotto del 70%",
        "Risultati misurabili garantiti",
        "Competenze trasferite al team"
      ]
    },
    {
      id: "evolution",
      icon: Users,
      title: "AI Evolution Partner",
      subtitle: "Partnership Strategica per la Trasformazione",
      description: "Accompagnamento completo e continuativo per aziende che vogliono fare dell'AI un pilastro strategico del loro business.",
      duration: "12+ mesi",
      price: "€3.000 - €10.000/mese",
      features: [
        "Governance AI continuativa",
        "Formazione team ongoing",
        "Roadmap evolutiva aggiornata",
        "Support tecnico dedicato",
        "Innovation scouting"
      ],
      benefits: [
        "Innovazione continua e sostenibile",
        "Competitive advantage duraturo",
        "Team sempre aggiornato"
      ]
    },
    {
      id: "cio",
      icon: Settings,
      title: "Fractional CIO",
      subtitle: "Consulenza Strategica di Alto Livello",
      description: "Servizio di CIO part-time per guidare la strategia tecnologica e l'innovazione digitale della tua azienda.",
      duration: "Flessibile",
      price: "€2.000 - €8.000/mese",
      features: [
        "Strategia IT e digital roadmap",
        "Team building e leadership",
        "Vendor management e partnership",
        "Innovation roadmap",
        "Board reporting"
      ],
      benefits: [
        "Leadership tecnologica senior",
        "Costi ridotti vs CIO full-time",
        "Accesso a network esteso"
      ]
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-16">
        {/* Hero Section */}
        <section className="gradient-hero py-20">
          <div className="container mx-auto px-4 lg:px-8 text-center">
            <h1 className="text-4xl lg:text-6xl font-bold text-foreground mb-6">
              I Nostri Servizi
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Soluzioni complete e modulari per accompagnare la tua azienda nel percorso 
              di trasformazione digitale, dall'analisi iniziale all'implementazione e governance continua.
            </p>
          </div>
        </section>

        {/* Services Details */}
        <section className="py-20">
          <div className="container mx-auto px-4 lg:px-8 space-y-20">
            {services.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <div key={service.id} id={service.id} className="scroll-mt-20">
                  <Card className="hover-lift">
                    <CardContent className="p-0">
                      <div className="grid lg:grid-cols-2 gap-0">
                        {/* Content */}
                        <div className="p-8 lg:p-12">
                          <div className="flex items-center space-x-4 mb-6">
                            <div className="p-3 rounded-lg bg-primary/10">
                              <IconComponent className="h-8 w-8 text-primary" />
                            </div>
                            <div>
                              <h2 className="text-2xl lg:text-3xl font-bold text-foreground">
                                {service.title}
                              </h2>
                              <p className="text-lg text-primary font-medium">
                                {service.subtitle}
                              </p>
                            </div>
                          </div>
                          
                          <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                            {service.description}
                          </p>

                          {/* Quick Info */}
                          <div className="grid md:grid-cols-2 gap-4 mb-8">
                            <div className="flex items-center space-x-3">
                              <Clock className="h-5 w-5 text-secondary" />
                              <span className="text-sm font-medium">{service.duration}</span>
                            </div>
                            <div className="flex items-center space-x-3">
                              <Euro className="h-5 w-5 text-secondary" />
                              <span className="text-sm font-medium">{service.price}</span>
                            </div>
                          </div>

                          <Button variant="cta" size="lg" asChild>
                            <Link to="/contatti">
                              Richiedi Informazioni
                              <ArrowRight className="ml-2 h-5 w-5" />
                            </Link>
                          </Button>
                        </div>

                        {/* Features & Benefits */}
                        <div className="bg-muted/30 p-8 lg:p-12">
                          <div className="space-y-8">
                            <div>
                              <h3 className="text-xl font-semibold text-foreground mb-4">
                                Cosa Include
                              </h3>
                              <ul className="space-y-3">
                                {service.features.map((feature, featureIndex) => (
                                  <li key={featureIndex} className="flex items-start space-x-3">
                                    <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                                    <span className="text-muted-foreground">{feature}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                            
                            <div>
                              <h3 className="text-xl font-semibold text-foreground mb-4">
                                Benefici Chiave
                              </h3>
                              <ul className="space-y-3">
                                {service.benefits.map((benefit, benefitIndex) => (
                                  <li key={benefitIndex} className="flex items-start space-x-3">
                                    <ArrowRight className="h-5 w-5 text-secondary mt-0.5 flex-shrink-0" />
                                    <span className="text-muted-foreground font-medium">{benefit}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              );
            })}
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-primary text-primary-foreground">
          <div className="container mx-auto px-4 lg:px-8 text-center">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              Pronto a Trasformare la Tua Azienda?
            </h2>
            <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
              Prenota una demo gratuita per scoprire quale servizio è più adatto alle tue esigenze
            </p>
            <Button variant="secondary" size="lg" asChild>
              <Link to="/contatti">
                Prenota Demo Gratuita
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Servizi;