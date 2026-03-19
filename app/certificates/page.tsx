'use client';

import Image from "next/image";
import { useState } from "react";
import ChapterCard from '@/components/ChapterCard';
import { Award, Calendar, Building2 } from 'lucide-react';

interface Certificate {
  id: string;
  title: string;
  issuer?: string;
  date: string;
  description?: string;
  image: string;
}

const certificates: Certificate[] = [
  {
    id: '1',
    title: 'MarTech Consultant to Enhance Lanna Craft Business',
    image: "/certificates/cert1.png",
    date: 'October 2023',
  },
  {
    id: '2',
    title: 'พลิกไปเดียธุรกิจ เส้นทางผู้ประกอบการยุคดิจิทัล',
    image: "/certificates/cert2.png",
    date: 'August 2025',
  },
  {
    id: '3',
    title: 'Artificial Intelligence Ethics',
    image: "/certificates/cert3.png",
    date: 'August 2025',
  },
];

export default function CertificatesPage() {
  const [activeImage, setActiveImage] = useState<string | null>(null);

  return (
    <main className="min-h-screen bg-background">

      {/* Header */}
      <section className="relative py-16 md:py-24 overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -z-10" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl -z-10" />

        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex justify-center mb-6">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                <Award className="w-8 h-8 text-white" />
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Certifications
            </h1>
            <p className="text-xl text-foreground/70">
              Professional certifications and courses I've completed.
            </p>
          </div>
        </div>
      </section>

      {/* Certificates Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
            {certificates.map((cert) => (
              <ChapterCard key={cert.id} title={cert.title}>
                <div className="cursor-pointer" onClick={() => setActiveImage(cert.image)}>
                  <Image
                    src={cert.image}
                    alt={cert.title}
                    width={400}
                    height={300}
                    className="rounded-lg object-cover w-full h-48 hover:scale-105 transition-transform"
                  />
                  <div className="mt-2 text-center text-foreground/70">
                    {cert.date}
                  </div>
                </div>
              </ChapterCard>
            ))}
          </div>
        </div>
      </section>

      {/* Modal */}
      {activeImage && (
        <div
          className="fixed inset-0 bg-black/70 flex items-center justify-center z-50"
          onClick={() => setActiveImage(null)}
        >
          <Image
            src={activeImage}
            alt="Certificate"
            width={900}
            height={700}
            className="rounded-xl shadow-2xl max-h-[90vh] object-contain"
          />
        </div>
      )}

     
      {/* Footer */}
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

    </main>
  );
}
