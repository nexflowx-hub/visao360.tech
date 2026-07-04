"use client";

import { motion } from "framer-motion";
import { ShieldCheck, Wrench, Users, Activity } from "lucide-react";

const stats = [
  { icon: ShieldCheck, value: "+2.500", label: "Clientes Protegidos" },
  { icon: Wrench, value: "+6.800", label: "Instalações Realizadas" },
  { icon: Users, value: "+120", label: "Parceiros Técnicos" },
  { icon: Activity, value: "99.8%", label: "Uptime dos Sistemas" },
];

export function Statistics() {
  return (
    <section className="py-12 md:py-16 bg-[#0A2647]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4 text-center sm:text-left"
            >
              <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-white/10 shrink-0">
                <stat.icon className="w-5 h-5 text-blue-300" />
              </div>
              <div>
                <p className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight">{stat.value}</p>
                <p className="mt-0.5 text-xs sm:text-sm text-blue-200/70">{stat.label}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}