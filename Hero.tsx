import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center pt-24 overflow-hidden bg-primary">
      {/* Background Graphic - Represents abstract fields/sun */}
      <div className="absolute inset-0 z-0 opacity-20">
        <div className="absolute top-[-20%] right-[-10%] w-[60%] h-[80%] rounded-full bg-secondary blur-3xl" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[50%] h-[60%] rounded-full bg-background blur-3xl" />
      </div>

      <div className="container relative z-10 mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center gap-12">
        <div className="flex-1 text-primary-foreground max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <span className="inline-block py-1 px-3 rounded-full bg-secondary/20 text-secondary border border-secondary/30 font-medium text-sm mb-6 tracking-wide uppercase">
              O Futuro do Campo
            </span>
            <h1 className="text-5xl md:text-7xl font-serif font-bold leading-tight mb-6">
              A força da terra. <br/>
              <span className="text-secondary">O futuro de todos.</span>
            </h1>
            <p className="text-lg md:text-xl text-primary-foreground/80 mb-10 leading-relaxed max-w-xl font-light">
              Unindo a vocação agrícola do Brasil à responsabilidade ambiental. 
              Tecnologia de precisão e preservação caminhando juntas para alimentar 
              o mundo e proteger o planeta.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-secondary text-secondary-foreground hover:bg-secondary/90 rounded-full font-semibold text-base px-8 py-6 h-auto">
                Conheça a Visão
              </Button>
              <Button size="lg" variant="outline" className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 rounded-full font-medium text-base px-8 py-6 h-auto bg-transparent">
                Nossos Projetos <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </div>
          </motion.div>
        </div>
        
        <div className="flex-1 w-full relative">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
            className="relative aspect-[4/5] md:aspect-square w-full max-w-md mx-auto"
          >
            <div className="absolute inset-0 bg-gradient-to-tr from-secondary/40 to-primary/40 rounded-[2rem] mix-blend-overlay z-10" />
            <div className="w-full h-full rounded-[2rem] overflow-hidden border-4 border-background/10 shadow-2xl relative bg-primary-foreground/5 backdrop-blur-sm flex items-center justify-center">
              {/* Abstract pattern instead of image */}
              <div className="absolute inset-0 opacity-30" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '24px 24px' }}></div>
              <div className="text-primary-foreground/60 font-serif text-2xl italic text-center p-8 border border-primary-foreground/20 rounded-xl m-8 backdrop-blur-md">
                "O Brasil que preserva é o mesmo Brasil que produz."
              </div>
            </div>
            
            {/* Floating stats card */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="absolute -bottom-6 -left-6 md:-left-12 bg-background p-6 rounded-2xl shadow-xl border border-border"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold text-xl">
                  +
                </div>
                <div>
                  <div className="text-sm text-muted-foreground font-medium uppercase tracking-wider">Produtividade</div>
                  <div className="text-2xl font-bold text-foreground">Sustentável</div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
