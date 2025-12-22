"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { Mail, Github, Linkedin } from 'lucide-react';
import ChapterCard from '@/components/ChapterCard';



export default function ProfilePage() {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative py-16 md:py-24 overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -z-10" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl -z-10" />

        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Profile Header */}
            <div className="mb-12 text-center md:text-left">
              <div className="flex flex-col md:flex-row items-center md:items-start gap-8 mb-8">
                {/* Avatar */}
                <div className="flex-shrink-0">
                  <div className="w-32 h-32 md:w-40 md:h-40 rounded-full bg-gradient-to-br from-primary to-accent p-1">
                    <div className="w-full h-full rounded-full bg-secondary flex items-center justify-center text-5xl">
                    <Image
                      src="/profile.jpg" // ใส่ชื่อไฟล์รูปของคุณใน public folder
                       alt=""
                       width={160}       // ปรับขนาดตามต้องการ
                        height={160}
                        className="object-cover w-full h-full"
                        />
                    </div>
                  </div>
                </div>

                {/* Info */}
                <div className="flex-1">
                  <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-2">
                    Siriprapa Horadee
                  </h1>
                  <p className="text-xl text-primary font-semibold mb-4">
                    Information Technology • IT
                  </p>
                  <p className="text-foreground/70 text-lg mb-6">
                    Passionate about creating beautiful and functional web applications.
                  </p>

                  {/* Contact Links */}
                  <div className="flex flex-wrap gap-3">
                    <a
                      href="mailto:your.email@example.com"
                      className="flex items-center gap-2 px-4 py-2 rounded-full bg-primary text-primary-foreground hover:shadow-lg transition-all hover:scale-105"
                    >
                      <Mail className="w-4 h-4" />
                      Email
                    </a>
                    <a
                      href="#"
                      className="flex items-center gap-2 px-4 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-all"
                    >
                      <Github className="w-4 h-4" />
                      GitHub
                    </a>
                    <a
                      href="#"
                      className="flex items-center gap-2 px-4 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-all"
                    >
                      <Linkedin className="w-4 h-4" />
                      LinkedIn
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-foreground mb-8">About Me</h2>
            <ChapterCard title="Personal Information">
              <p className="mb-4">
               I am a passionate developer who enjoys building modern web
              applications using React, Next.js, Tailwind CSS, and UI/UX
              design. I love creating clean, minimal, and enjoyable user
              experiences.
              </p>
            </ChapterCard>
          </div>
        </div>
      </section>

      {/* Education Section */}
<section className="py-16">
  <div className="container mx-auto px-4">
    <div className="max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold text-foreground mb-8">Education</h2>

      <ChapterCard title="">
        {/* ระดับมัธยม */}
        <div className="mb-6">
          <p className="font-semibold text-foreground mb-1">ระดับมัธยมศึกษาตอนปลาย</p>
          <p className="text-foreground/70 mb-2">2563 - 2566 | สายวิทย์‑คณิต </p>
          <p className="text-foreground/80">โรงเรียนเกาะคาวิทยาคม</p>
        </div>

        {/* เส้นแบ่ง (optional) */}
        <hr className="border-border my-4" />

        {/* ระดับมหาวิทยาลัย */}
        <div>
          <p className="font-semibold text-foreground mb-1">ระดับปริญญาตรี</p>
          <p className="text-foreground/70 mb-2">2566 - 2568 | Information Technology</p>
          <p className="text-foreground/80">มหาวิทยาลัยเทคโนโลยีราชมงคลล้านนา ลำปาง</p>
        </div>
      </ChapterCard>
    </div>
  </div>
</section>


      {/* Skills Section */}
      <section className="py-16 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-foreground mb-8">Skills</h2>

            {/* Programming Languages */}
            <div className="mb-8">
              <h3 className="text-2xl font-bold text-foreground mb-6">Programming Languages</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <ChapterCard title="Frontend">
                  <div className="space-y-3">
                    <div>
                      <p className="font-semibold text-foreground mb-1">JavaScript / TypeScript</p>
                      <div className="w-full bg-border rounded-full h-2">
                        <div className="bg-primary h-2 rounded-full" style={{ width: '40%' }} />
                      </div>
                    </div>
                    <div>
                      <p className="font-semibold text-foreground mb-1">React</p>
                      <div className="w-full bg-border rounded-full h-2">
                        <div className="bg-primary h-2 rounded-full" style={{ width: '40%' }} />
                      </div>
                    </div>
                  </div>
                </ChapterCard>

                <ChapterCard title="Backend">
                  <div className="space-y-3">
                    <div>
                      <p className="font-semibold text-foreground mb-1">Node.js</p>
                      <div className="w-full bg-border rounded-full h-2">
                        <div className="bg-primary h-2 rounded-full" style={{ width: '40%' }} />
                      </div>
                    </div>
                    <div>
                      <p className="font-semibold text-foreground mb-1">Python</p>
                      <div className="w-full bg-border rounded-full h-2">
                        <div className="bg-primary h-2 rounded-full" style={{ width: '40%' }} />
                      </div>
                    </div>
                  </div>
                </ChapterCard>
              </div>
            </div>

            {/* Technical Skills */}
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-6">Technical Skills</h3>
              <ChapterCard title="Tools & Technologies" variant="highlight">
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {['Git', 'Docker', 'REST APIs', 'Next.js', 'MongoDB', 'PostgreSQL'].map((skill) => (
                    <div
                      key={skill}
                      className="px-4 py-2 rounded-lg bg-primary/10 text-primary font-medium text-center"
                    >
                      {skill}
                    </div>
                  ))}
                </div>
              </ChapterCard>
            </div>
          </div>
        </div>
      </section>

      {/* Hobbies Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-foreground mb-8">Hobbies & Interests</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <ChapterCard title="Open Source">
                Contributing to open-source projects and building tools for the community.
              </ChapterCard>
              <ChapterCard title="Tech Writing">
                Sharing knowledge through blog posts and technical articles.
              </ChapterCard>
              <ChapterCard title="Gaming">
                Enjoying video games and exploring game development.
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