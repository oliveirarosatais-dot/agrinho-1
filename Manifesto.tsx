import React from 'react';
import { motion } from 'framer-motion';

export default function Manifesto() {
  return (
    <section id="manifesto" className="py-24 md:py-32 bg-background relative overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 max-w-5xl">
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h2 className="text-sm font-bold tracking-widest text-primary uppercase mb-6">Nosso Manifesto</h2>
          <p className="font-serif text-3xl md:text-5xl lg:text-6xl text-foreground leading-tight md:leading-tight lg:leading-tight">
            Acreditamos que não precisamos escolher entre <span className="text-primary italic">produzir</span> e <span className="text-primary italic">preservar</span>.
          </p>
          
          <div className="mt-12 max-w-3xl mx-auto space-y-6 text-lg md:text-xl text-muted-foreground leading-relaxed">
            <p>
              O agronegócio brasileiro é uma potência global. Nossa terra alimenta bilhões de pessoas. Mas o verdadeiro desafio do nosso tempo não é apenas produzir mais — é produzir melhor.
            </p>
            <p>
              O Agro Forte & Futuro Sustentável nasce da convicção de que a tecnologia, a inovação e o respeito profundo pela natureza são os únicos caminhos para a verdadeira prosperidade.
            </p>
            <p className="font-medium text-foreground">
              A preservação ambiental não é um custo para o produtor. É o maior investimento no nosso futuro.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
