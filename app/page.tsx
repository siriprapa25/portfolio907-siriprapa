"use client";

import { useRouter } from "next/navigation";
import { ArrowRight, Sparkles } from "lucide-react";
import ChapterCard from "@/components/ChapterCard"; 

export default function ProfilePage() {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-background">

      {/* ================= HERO SECTION ================= */}
      <section className="relative min-h-screen flex items-center justify-center py-20 overflow-hidden">

        {/* Animated background blobs */}
        <div className="absolute top-20 right-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-pulse" />
        <div
          className="absolute bottom-20 left-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "1s" }}
        />
        <div className="absolute top-1/2 left-1/3 w-64 h-64 bg-secondary/20 rounded-full blur-3xl" />

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">

            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary border border-border mb-8">
              <Sparkles className="w-4 h-4 text-primary animate-spin [animation-duration:3s]" />
              <span className="text-sm font-semibold">
                Welcome to my portfolio
              </span>
            </div>

            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Hello, I'm <span className="text-primary">Siriprapa</span>
            </h1>

            <p className="text-xl text-foreground/70 mb-8">
              Full Stack Developer & Designer
            </p>

            <p className="text-lg text-foreground/60 mb-12 max-w-2xl mx-auto">
              Welcome to my portfolio. Explore my work, skills, and certifications below.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => router.push("/courses")}
                className="px-8 py-4 rounded-full bg-primary text-primary-foreground font-bold hover:scale-105 transition flex items-center gap-2"
              >
                View Courses <ArrowRight className="w-5 h-5" />
              </button>

              <button
                onClick={() => router.push("/profile")}
                className="px-8 py-4 rounded-full bg-primary text-primary-foreground font-bold hover:scale-105 transition flex items-center gap-2"
              >
                View Profile <ArrowRight className="w-5 h-5" />
              </button>

              <button
                onClick={() => router.push("/certificates")}
                className="px-8 py-4 rounded-full bg-primary text-primary-foreground font-bold hover:scale-105 transition flex items-center gap-2"
              >
                View Certificates <ArrowRight className="w-5 h-5" />
              </button>
            </div>

            {/* Scroll Indicator */}
            <div className="flex justify-center mt-16 animate-bounce">
              <div className="w-6 h-10 border-2 border-primary rounded-full flex items-start justify-center p-2">
                <div className="w-1 h-2 bg-primary rounded-full animate-pulse" />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ================= WHAT I DO ================= */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">

            <h2 className="text-4xl font-bold text-center mb-12">
              What I Do
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <ChapterCard title="Web Development">
                Building responsive, performant web applications using React,
                Next.js, and TypeScript.
              </ChapterCard>

              <ChapterCard title="UI / UX Design">
                Creating intuitive and beautiful interfaces with a strong
                focus on accessibility and user experience.
              </ChapterCard>

              <ChapterCard title="Full Stack Solutions">
                Developing complete solutions including databases, APIs,
                and deployment.
              </ChapterCard>
            </div>

          </div>
        </div>
      </section>

      {/* ================= FOOTER ================= */}
      <footer className="py-8 border-t border-border">
        <div className="container mx-auto px-4 text-center">
          <p className="text-foreground/60 mb-4">
            © 2024 Siriprapa. All rights reserved.
          </p>

          <div className="flex justify-center gap-6">
            <a className="hover:text-primary" href="#">GitHub</a>
            <a className="hover:text-primary" href="#">LinkedIn</a>
            <a className="hover:text-primary" href="#">Twitter</a>
            <a className="hover:text-primary" href="#">Email</a>
          </div>
        </div>
      </footer>
      
    </div>
  );
}
