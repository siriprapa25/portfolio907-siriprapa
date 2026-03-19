"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

type FileItem = {
  name: string;
  url: string;
  type: string;
  isSample?: boolean;
};

const STORAGE_KEY = "uploaded_files";

export default function FilesPage() {
  /* ================== ไฟล์ตัวอย่าง ================== */
  const sampleFiles: FileItem[] = [
    {
      name: "ประเภทของหน่วยงาน",
      url: "/uploads/chapter4/ประเภทของหน่วยงาน.pdf",
      type: "application/pdf",
    },
    {
      name: "กฎหมายแรงงาน",
      url: "/uploads/chapter4/กฎหมายแรงงาน.pdf",
      type: "application/pdf",
    },
    {
      name: "การประกันตนประกันสังคม",
      url: "/uploads/chapter4/การประกันตนประกันสังคม.pdf",
      type: "application/pdf",
    }
  ];

  const [files, setFiles] = useState<FileItem[]>([]);

  /* ================== โหลดข้อมูล + แก้ scroll ================== */
  useEffect(() => {
    window.scrollTo(0, 0);
    const saved = localStorage.getItem(STORAGE_KEY);
    const uploadedFiles = saved ? JSON.parse(saved) : [];
    setFiles([...sampleFiles, ...uploadedFiles]);
  }, []);

  /* ================== helper: icon by type ================== */
  const getIcon = (type: string) => {
    if (type.startsWith("video"))
      return (
        <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5l4.72-4.72a.75.75 0 011.28.53v11.38a.75.75 0 01-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 002.25-2.25v-9A2.25 2.25 0 0013.5 5.25h-9A2.25 2.25 0 002.25 7.5v9A2.25 2.25 0 004.5 18.75z" />
        </svg>
      );
    if (type.startsWith("image"))
      return (
        <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909M3 20.25h18A2.25 2.25 0 0023.25 18V6A2.25 2.25 0 0021 3.75H3A2.25 2.25 0 00.75 6v12A2.25 2.25 0 003 20.25z" />
        </svg>
      );
    return (
      <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
      </svg>
    );
  };

  const getTypeBadge = (type: string) => {
    if (type.startsWith("video")) return { label: "VDO", color: "bg-purple-100 text-purple-600" };
    if (type.startsWith("image")) return { label: "IMG", color: "bg-blue-100 text-blue-600" };
    return { label: "PDF", color: "bg-rose-100 text-rose-500" };
  };

  return (
    <main className="min-h-screen bg-background">


      {/* 🎨 Header — เต็มความกว้าง w-full อยู่นอก container */}
      <div className="w-full mb-10 mt-2">
        <div className="relative bg-[#FFDAB9] py-12 text-center overflow-hidden">
          {/* Decorative blobs */}
          <div className="pointer-events-none absolute -top-10 -left-10 w-56 h-56 rounded-full bg-white/20 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-10 -right-10 w-64 h-64 rounded-full bg-black/5 blur-3xl" />
          <div className="pointer-events-none absolute top-1/2 left-1/3 w-32 h-32 rounded-full bg-white/10 blur-2xl" />
          {/* Accent lines */}
          <div className="absolute top-0 left-0 right-0 h-px bg-white/50" />
          <div className="absolute bottom-0 left-0 right-0 h-px bg-black/10" />

          <h1 className="relative text-4xl md:text-5xl font-bold text-black/80 tracking-tight">
            ไฟล์งานและสื่อประกอบการเรียน
          </h1>
           <p className="relative mt-2 text-sm text-black/45 font-medium tracking-widest uppercase">
            บทเรียนที่ 4 คุณธรรม จริยธรรม และกฎหมายแรงงานที่เกี่ยวข้อง
          </p>
        </div>
      </div>

  {/* 🔙 ปุ่มย้อนกลับ — อยู่เหนือ header ชิดบน */}
      <div className="max-w-6xl mx-auto px-6 pt-4 pb-2">
        <Link
          href="/courses"
          className="inline-flex items-center gap-2 text-sm font-medium text-foreground/60 hover:text-foreground border border-border hover:border-foreground/30 bg-background hover:bg-secondary/40 px-4 py-2 rounded-xl transition-all duration-200 group"
        >
          <svg
            className="w-4 h-4 group-hover:-translate-x-0.5 transition-transform duration-200"
            fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
          </svg>
          ย้อนกลับ
        </Link>
      </div>

      {/* 📁 Files Grid */}
      <div className="max-w-6xl mx-auto px-6 pb-10">

        {/* Stats bar */}
        <div className="flex items-center justify-between mb-6">
          <p className="text-sm text-foreground/50 font-medium">
            ทั้งหมด <span className="text-foreground font-bold">{files.length}</span> ไฟล์
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {files.map((file, index) => {
            const badge = getTypeBadge(file.type);
            return (
              <div
                key={index}
                className="group bg-background border border-border rounded-2xl overflow-hidden shadow-sm hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300"
              >
                {/* Card header */}
                <div className="flex items-start gap-3 p-4 pb-3 border-b border-border/50">
                  <div className={`flex items-center justify-center w-8 h-8 rounded-lg ${badge.color} shrink-0 mt-0.5`}>
                    {getIcon(file.type)}
                  </div>
                  <div className="flex-1 min-w-0">
                    <h2 className="text-sm font-semibold text-gray-800 leading-snug line-clamp-2">
                      {file.name}
                    </h2>
                    <span className={`inline-block mt-1 text-[10px] font-bold px-2 py-0.5 rounded-full ${badge.color}`}>
                      {badge.label}
                    </span>
                  </div>
                </div>

                {/* Card body — media */}
                <div className="p-4 pt-3">
                  {/* Image */}
                  {file.type.startsWith("image") && (
                    <img src={file.url} className="rounded-xl w-full max-h-64 object-cover" />
                  )}

                  {/* Video */}
                  {file.type.startsWith("video") && (
                    <video src={file.url} controls className="rounded-xl w-full max-h-64" />
                  )}

                  {/* PDF */}
                  {file.type === "application/pdf" && (
                    <div className="relative">
                      <iframe src={file.url} className="w-full h-64 rounded-xl border border-border/30" />
                      <a
                        href={file.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="absolute bottom-2 right-2 inline-flex items-center gap-1 bg-black/60 hover:bg-black text-white text-xs px-3 py-1.5 rounded-lg transition-colors"
                      >
                        <svg className="w-3 h-3" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3.75v4.5m0-4.5h4.5m-4.5 0L9 9M3.75 20.25v-4.5m0 4.5h4.5m-4.5 0L9 15M20.25 3.75h-4.5m4.5 0v4.5m0-4.5L15 9m5.25 11.25h-4.5m4.5 0v-4.5m0 4.5L15 15" />
                        </svg>
                        เต็มจอ
                      </a>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* ===== FOOTER ===== */}
      <footer className="border-t border-border py-8 mt-4">
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