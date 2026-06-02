import React from 'react';
import { motion } from 'framer-motion';
import { Sprout, Droplets, Sun, Wind, BarChart3, ShieldCheck } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const PILLARS = [
  {
    icon: <Sprout className="w-8 h-8" />,
    title: "Agricultura Regenerativa",
    description: "Práticas que restauram a saúde do solo, aumentam a biodiversidade e melhoram o ciclo da água, garantindo a produtividade a longo prazo."
  },
  {
    icon: <BarChart3 className="w-8 h-8" />,
    title: "Tecnologia de Precisão",
    description: "Uso de dados, IA e IoT para otimizar recursos, reduzindo desperdícios e maximizando o rendimento de cada hectare cultivado."
  },
  {
    icon: <ShieldCheck className="w-8 h-8" />,
    title: "Preservação Nativa",
    description: "Integração inteligente entre áreas produtivas e reservas legais, valorizando a floresta em pé e os serviços ambientais."
  },
  {
    icon: <Droplets className="w-8 h-8" />,
    title: "Gestão Hídrica",
    description: "Sistemas avançados de irrigação e captação que respeitam os ciclos naturais e garantem segurança hídrica para as próximas gerações."
  },
  {
    icon: <Sun className="w-8 h-8" />,
    title: "Energia Limpa",
    description: "Transição das propriedades rurais para matrizes energéticas renováveis, como solar e biomassa, reduzindo a pegada de carbono."
  },
  {
    icon: <Wind className="w-8 h-8" />,
    title: "Carbono Neutro",
    description: "Técnicas de manejo que transformam as lavouras em sumidouros de carbono, gerando novas oportunidades no mercado verde."
  }
];

export default function Pillars() {
  return (
    <section id="pilares" className="py-24 bg-muted/30">
      <div className="container mx-auto px-6 md:px-12">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-foreground mb-6">
            Os Pilares do <span className="text-primary">Novo Agro</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            A fundação de um modelo produtivo que respeita o tempo da natureza enquanto acelera a inovação.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PILLARS.map((pillar, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
            >
              <Card className="h-full bg-background border-border hover:border-primary/30 hover:shadow-lg transition-all duration-300">
                <CardContent className="p-8">
                  <div className="w-16 h-16 rounded-2xl bg-primary/10 text-primary flex items-center justify-center mb-6">
                    {pillar.icon}
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-4 font-serif">{pillar.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {pillar.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
