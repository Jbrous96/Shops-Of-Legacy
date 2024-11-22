"use client";

import { useRef } from "react";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, useScroll, useTransform } from "framer-motion";

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <motion.section
      ref={ref}
      className="relative min-h-[100vh] overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <motion.div
        className="absolute inset-0 z-0"
        style={{ y }}
      >
        <motion.div
          className="absolute inset-0 hero-gradient"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1582647509711-c8aa8eb7c7a4?q=80&w=2070')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            opacity: 0.1,
          }}
        />
      </motion.div>

      <motion.div 
        className="container relative z-10 flex min-h-[100vh] items-center"
        style={{ opacity }}
      >
        <div className="max-w-2xl">
          <motion.h1
            className="mb-6 text-4xl font-bold leading-tight tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Discover Legacy-Making{" "}
            <span className="bg-gradient-to-r from-blue-600 to-violet-600 bg-clip-text text-transparent">
              Businesses
            </span>
          </motion.h1>

          <motion.p
            className="mb-8 max-w-[600px] text-lg text-muted-foreground sm:text-xl"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Join our curated directory of exceptional enterprises, from Plano to the world.
            Connect with businesses that are building lasting legacies.
          </motion.p>

          <motion.div
            className="flex flex-col gap-4 sm:flex-row"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <Button size="lg" className="group">
              Submit Your Business
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button size="lg" variant="outline">
              Explore Directory
            </Button>
          </motion.div>
        </div>
      </motion.div>
    </motion.section>
  );
}