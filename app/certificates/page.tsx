'use client';

import ChapterCard from '@/components/ChapterCard';
import { Award, Calendar, Building2 } from 'lucide-react';

interface Certificate {
  id: string;
  title: string;
  issuer: string;
  date: string;
  description: string;
}

const certificates: Certificate[] = [
  {
    id: '1',
    title: 'React Advanced Patterns',
    issuer: 'Udemy',
    date: 'March 2024',
    description: 'Advanced React patterns including hooks and performance optimization.',
  },
  {
    id: '2',
    title: 'Full Stack Web Development',
    issuer: 'Coursera',
    date: 'January 2024',
    description: 'Complete full stack development course covering frontend, backend, and databases.',
  },
  {
    id: '3',
    title: 'UI/UX Design Fundamentals',
    issuer: 'Interaction Design Foundation',
    date: 'November 2023',
    description: 'Comprehensive course on user interface and user experience design principles.',
  },
];

export default function Certificates() {
  return (
    <>

      <main className="min-h-screen bg-background">
        {/* Header Section */}
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
            <div className="max-w-4xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {certificates.map((cert) => (
                  <ChapterCard key={cert.id} title={cert.title}>
                    <div className="space-y-4">
                      <div className="flex items-center gap-2 text-foreground/70">
                        <Building2 className="w-4 h-4 text-primary" />
                        <span className="font-semibold">{cert.issuer}</span>
                      </div>

                      <div className="flex items-center gap-2 text-foreground/70">
                        <Calendar className="w-4 h-4 text-primary" />
                        <span>{cert.date}</span>
                      </div>

                      <p className="text-foreground/80 pt-2 border-t border-border">
                        {cert.description}
                      </p>
                    </div>
                  </ChapterCard>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 bg-secondary/30">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-foreground mb-8 text-center">
                Learning Journey
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <ChapterCard title="Total Certificates" variant="highlight">
                  <p className="text-4xl font-bold text-primary text-center">
                    {certificates.length}
                  </p>
                </ChapterCard>
                <ChapterCard title="Years Active" variant="highlight">
                  <p className="text-4xl font-bold text-primary text-center">
                    2+
                  </p>
                </ChapterCard>
                <ChapterCard title="Skills Gained" variant="highlight">
                  <p className="text-4xl font-bold text-primary text-center">
                    10+
                  </p>
                </ChapterCard>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
