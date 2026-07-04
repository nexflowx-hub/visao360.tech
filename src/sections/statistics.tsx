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
    <section className="py-14 md:py-16 bg-[#0A2647]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-6">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="text-center"
            >
              <div className="flex items-center justify-center mb-3">
                <stat.icon className="w-6 h-6 text-blue-300" />
              </div>
              <p className="text-3xl md:text-4xl font-extrabold text-white tracking-tight">{stat.value}</p>
              <p className="mt-1 text-sm text-blue-200/70">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}