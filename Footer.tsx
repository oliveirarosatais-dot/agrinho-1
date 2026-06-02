import React from 'react';
import { Leaf, Instagram, Twitter, Linkedin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-foreground text-background py-16">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-6 text-primary">
              <Leaf size={32} />
              <span className="font-serif font-bold text-2xl text-background">
                Agro Forte
              </span>
            </div>
            <p className="text-muted/60 max-w-md mb-6 leading-relaxed">
              O movimento que une a vocação agrícola brasileira à urgência ambiental global. Produzir e preservar: a nossa verdadeira força.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-background/10 flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-background/10 flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-background/10 flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="font-bold text-lg mb-6 font-serif">Plataforma</h4>
            <ul className="space-y-4 text-muted/60">
              <li><a href="#" className="hover:text-primary transition-colors">Sobre o Movimento</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Nossos Pilares</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Tecnologia</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Projetos Apoiados</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold text-lg mb-6 font-serif">Contato</h4>
            <ul className="space-y-4 text-muted/60">
              <li><a href="#" className="hover:text-primary transition-colors">Fale Conosco</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Imprensa</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Seja um Parceiro</a></li>
            </ul>
          </div>
          
        </div>
        
        <div className="pt-8 border-t border-background/10 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted/40">
          <p>© {new Date().getFullYear()} Agro Forte & Futuro Sustentável. Todos os direitos reservados.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-background transition-colors">Privacidade</a>
            <a href="#" className="hover:text-background transition-colors">Termos</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
