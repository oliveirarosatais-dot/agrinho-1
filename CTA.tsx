import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';

export default function CTA() {
  return (
    <section className="py-24 relative overflow-hidden bg-primary text-primary-foreground">
      {/* Decorative background */}
      <div className="absolute inset-0 opacity-10" 
           style={{ backgroundImage: 'repeating-linear-gradient(45deg, var(--color-primary-foreground) 0, var(--color-primary-foreground) 1px, transparent 0, transparent 50%)', backgroundSize: '20px 20px' }}>
      </div>
      
      <div className="container mx-auto px-6 md:px-12 relative z-10 text-center max-w-4xl">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-6xl font-serif font-bold mb-6">
            O futuro da terra está em nossas mãos.
          </h2>
          <p className="text-xl md:text-2xl text-primary-foreground/80 mb-10 font-light">
            Seja você um produtor rural, investidor ou entusiasta da tecnologia, 
            há um lugar para você neste movimento.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-secondary text-secondary-foreground hover:bg-secondary/90 rounded-full font-bold text-lg px-10 py-7 h-auto">
              Fazer Parte do Movimento
            </Button>
            <Button size="lg" variant="outline" className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 rounded-full font-medium text-lg px-10 py-7 h-auto bg-transparent">
              Falar com um Consultor
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
