"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { ArrowRight } from 'lucide-react';
import Header from "@/components/Header";
import ChapterCard from "@/components/ChapterCard";

export default function ProfilePage() {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center py-20 overflow-hidden">
        {/* Decorative blobs */}
        <div className="absolute top-20 right-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
              Hello, I'm <span className="text-primary">Your Name</span>
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
                onClick={() => router.push("/profile")}
                className="px-8 py-4 rounded-full bg-primary text-primary-foreground font-bold hover:shadow-lg transition-all hover:scale-105 flex items-center justify-center gap-2 group"
              >
                View Profile
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button
                onClick={() => router.push("/certificates")}
                className="px-8 py-4 rounded-full border-2 border-primary text-primary font-bold hover:bg-primary/10 transition-all hover:scale-105"
              >
                View Certificates
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
