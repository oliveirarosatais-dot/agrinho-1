import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';

export default function Tech() {
  return (
    <section id="tecnologia" className="py-24 md:py-32 bg-background overflow-hidden">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          
          <div className="flex-1 w-full">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative aspect-square md:aspect-[4/3] rounded-[2rem] bg-muted border border-border overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-primary/20" />
              {/* Abstract tech representation */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-3/4 h-3/4 border border-primary/20 rounded-full flex items-center justify-center animate-spin-slow" style={{ animationDuration: '20s' }}>
                  <div className="w-3/4 h-3/4 border border-secondary/30 rounded-full flex items-center justify-center animate-spin-slow" style={{ animationDuration: '15s', animationDirection: 'reverse' }}>
                    <div className="w-1/2 h-1/2 bg-primary/10 rounded-full backdrop-blur-md border border-primary/30 flex items-center justify-center">
                      <div className="w-1/2 h-1/2 bg-secondary rounded-full shadow-[0_0_30px_rgba(var(--secondary),0.5)]" />
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="absolute bottom-8 left-8 right-8 bg-background/90 backdrop-blur-sm p-6 rounded-xl border border-border shadow-lg">
                <div className="flex items-center gap-4 mb-2">
                  <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse" />
                  <span className="text-sm font-medium">Análise de Solo em Tempo Real</span>
                </div>
                <div className="h-2 bg-muted rounded-full overflow-hidden">
                  <div className="h-full bg-primary w-[78%]" />
                </div>
              </div>
            </motion.div>
          </div>

          <div className="flex-1">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-5xl font-serif font-bold text-foreground mb-6">
                A Revolução <br/> <span className="text-primary">AgriTech</span>
              </h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                A tecnologia é a nossa maior aliada na busca por um agronegócio mais eficiente e sustentável. Através de dados, inteligência artificial e conectividade, transformamos cada semente em uma promessa de produtividade consciente.
              </p>

              <div className="space-y-4">
                {[
                  "Monitoramento climático e predição de safras",
                  "Mapeamento por drones e satélites",
                  "Automação e robótica no campo",
                  "Rastreabilidade de ponta a ponta da cadeia",
                  "Manejo integrado e biológicos"
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-4">
                    <CheckCircle2 className="text-secondary w-6 h-6 flex-shrink-0" />
                    <span className="text-foreground font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
