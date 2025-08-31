import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Partners from "@/components/Partners";
import Testimonials from "@/components/Testimonials";
import Chatbot from "@/components/Chatbot";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      {/* DEBUG: Pulsante temporaneo per test admin */}
      <div className="fixed top-4 right-4 z-50">
        <Button asChild variant="outline">
          <Link to="/nosciteadmin/auth">🔧 Test Admin Login</Link>
        </Button>
      </div>
      <main>
        <Hero />
        <Partners />
        <Services />
        <Testimonials />
      </main>
      <Footer />
      <Chatbot />
    </div>
  );
};

export default Index;
