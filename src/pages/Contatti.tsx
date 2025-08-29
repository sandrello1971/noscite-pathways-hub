import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Mail, Phone, MapPin, Calendar, MessageSquare } from "lucide-react";

const Contatti = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-16">
        {/* Hero Section */}
        <section className="gradient-hero py-20">
          <div className="container mx-auto px-4 lg:px-8 text-center">
            <h1 className="text-4xl lg:text-6xl font-bold text-foreground mb-6">
              Contattaci
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Siamo pronti ad ascoltare le tue sfide e trasformarle in opportunità di crescita. 
              Iniziamo insieme il tuo percorso verso il futuro digitale.
            </p>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-20">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16">
              {/* Contact Form */}
              <Card className="hover-lift">
                <CardHeader>
                  <CardTitle className="text-2xl">Invia una Richiesta</CardTitle>
                  <p className="text-muted-foreground">
                    Compila il form e ti ricontatteremo entro 24 ore
                  </p>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="firstName">Nome *</Label>
                      <Input id="firstName" placeholder="Il tuo nome" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName">Cognome *</Label>
                      <Input id="lastName" placeholder="Il tuo cognome" />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="email">Email *</Label>
                    <Input id="email" type="email" placeholder="la-tua@email.com" />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="company">Azienda</Label>
                    <Input id="company" placeholder="Nome della tua azienda" />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="phone">Telefono</Label>
                    <Input id="phone" placeholder="+39 123 456 7890" />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="service">Servizio di Interesse</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Seleziona un servizio" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="academy">AI Academy</SelectItem>
                        <SelectItem value="launchpad">AI Launchpad</SelectItem>
                        <SelectItem value="sprint">AI Sprint</SelectItem>
                        <SelectItem value="evolution">AI Evolution Partner</SelectItem>
                        <SelectItem value="cio">Fractional CIO</SelectItem>
                        <SelectItem value="consultation">Consulenza Generale</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="message">Messaggio *</Label>
                    <Textarea 
                      id="message" 
                      placeholder="Descrivi la tua sfida o il tuo progetto..."
                      className="min-h-[120px]"
                    />
                  </div>
                  
                  <Button variant="cta" size="lg" className="w-full">
                    Invia Richiesta
                  </Button>
                  
                  <p className="text-sm text-muted-foreground text-center">
                    * Campi obbligatori. I tuoi dati sono protetti dalla nostra 
                    <a href="/privacy" className="text-primary hover:underline ml-1">Privacy Policy</a>
                  </p>
                </CardContent>
              </Card>

              {/* Contact Info & Quick Actions */}
              <div className="space-y-8">
                {/* Direct Contact */}
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-2">
                      <MessageSquare className="h-6 w-6 text-primary" />
                      <span>Contatto Diretto</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="flex items-center space-x-4">
                      <Mail className="h-6 w-6 text-secondary" />
                      <div>
                        <div className="font-medium">Email</div>
                        <a href="mailto:info@noscite.it" className="text-muted-foreground hover:text-primary">
                          info@noscite.it
                        </a>
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-4">
                      <Phone className="h-6 w-6 text-secondary" />
                      <div>
                        <div className="font-medium">Telefono</div>
                        <a href="tel:+390212345678" className="text-muted-foreground hover:text-primary">
                          +39 02 1234 5678
                        </a>
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-4">
                      <MapPin className="h-6 w-6 text-secondary" />
                      <div>
                        <div className="font-medium">Sede</div>
                        <div className="text-muted-foreground">Milano, Italia</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Quick Demo */}
                <Card className="bg-primary text-primary-foreground">
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-2">
                      <Calendar className="h-6 w-6 text-secondary" />
                      <span>Demo Veloce</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="mb-6 opacity-90">
                      Prenota una demo di 30 minuti per vedere in azione le nostre soluzioni AI
                    </p>
                    <Button variant="secondary" size="lg" className="w-full">
                      Prenota Demo Ora
                    </Button>
                  </CardContent>
                </Card>

                {/* WhatsApp */}
                <Card className="bg-[#25D366] text-white">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="font-semibold text-lg mb-2">WhatsApp Business</div>
                        <p className="text-sm opacity-90">
                          Scrivici per informazioni veloci
                        </p>
                      </div>
                      <Button variant="outline" className="bg-white text-[#25D366] border-white hover:bg-gray-100">
                        Chatta Ora
                      </Button>
                    </div>
                  </CardContent>
                </Card>

                {/* Office Hours */}
                <Card>
                  <CardHeader>
                    <CardTitle>Orari di Contatto</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span>Lunedì - Venerdì</span>
                        <span className="text-muted-foreground">9:00 - 18:00</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Sabato</span>
                        <span className="text-muted-foreground">9:00 - 13:00</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Domenica</span>
                        <span className="text-muted-foreground">Chiuso</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">
                Domande Frequenti
              </h2>
              <p className="text-muted-foreground">
                Le risposte alle domande più comuni sui nostri servizi
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold text-lg mb-3">Quanto costa una consulenza iniziale?</h3>
                  <p className="text-muted-foreground">
                    La prima consulenza di 1 ora è sempre gratuita e senza impegno. 
                    È un'opportunità per conoscerci e valutare insieme le tue esigenze.
                  </p>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold text-lg mb-3">Quanto tempo richiede un progetto?</h3>
                  <p className="text-muted-foreground">
                    Dipende dal servizio: da 4 settimane per un AI Sprint fino a 12+ mesi 
                    per partnership evolutive. Ti forniremo sempre una timeline chiara.
                  </p>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold text-lg mb-3">Lavorate con PMI o solo grandi aziende?</h3>
                  <p className="text-muted-foreground">
                    Lavoriamo con aziende di tutte le dimensioni. I nostri servizi sono 
                    modulari e si adattano sia a startup che a enterprise.
                  </p>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold text-lg mb-3">Offrite supporto post-implementazione?</h3>
                  <p className="text-muted-foreground">
                    Sì, tutti i nostri servizi includono supporto e follow-up. 
                    Inoltre offriamo contratti di mantenimento per supporto continuativo.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Contatti;