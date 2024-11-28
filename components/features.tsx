"use client";

import { motion } from "framer-motion";
import { MapPin, Shield, Paintbrush, Zap } from "lucide-react";

const features = [
  {
    icon: MapPin,
    title: "Never Lose Track of Your Furry Friend",
    description: "Seamlessly integrate your AirTag for real-time location tracking anywhere in the world.",
  },
  {
    icon: Shield,
    title: "Comfort Meets Durability",
    description: "Crafted from premium Italian leather and marine-grade stainless steel for lasting quality.",
  },
  {
    icon: Paintbrush,
    title: "Personalized for Your Pup",
    description: "Custom engraving options to add your pet's name and your contact information.",
  },
  {
    icon: Zap,
    title: "Secure AirTag Insertion and Removal",
    description: "Innovative snap-lock mechanism for easy AirTag installation while keeping it securely in place.",
  },
];

export function Features() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">Premium Features</h2>
          <p className="text-xl text-gray-600">Designed with your dog's safety and comfort in mind</p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow"
            >
              <feature.icon className="h-12 w-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}