"use client";

import { useEffect, useState } from "react";
import ChapterCard from "@/components/ChapterCard";

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
      name: "การต่ออุปกรณ์ไฟฟ้า.pdf",
      url: "/sample.pdf",
      type: "application/pdf",
      isSample: true,
    },
    {
      name: "ตัวอย่างรูปภาพกิจกรรม.jpg",
      url: "/sample-image.jpg",
      type: "image/jpeg",
      isSample: true,
    },
    {
      name: "ตัวอย่างวิดีโอการเรียน.mp4",
      url: "/sample-video.mp4",
      type: "video/mp4",
      isSample: true,
    },
  ];

  /* ================== ไฟล์ที่ผู้ใช้เพิ่ม ================== */
  const [uploadedFiles, setUploadedFiles] = useState<FileItem[]>([]);

  /* โหลดจาก localStorage */
  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) {
      try {
        setUploadedFiles(JSON.parse(stored));
      } catch {
        setUploadedFiles([]);
      }
    }
  }, []);

  /* บันทึกลง localStorage */
  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(uploadedFiles));
  }, [uploadedFiles]);

  /* รวมไฟล์ทั้งหมด */
  const files = [...sampleFiles, ...uploadedFiles];

  /* ================== Upload ================== */
  const handleUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) return;

    const newFiles: FileItem[] = Array.from(e.target.files).map((file) => ({
      name: file.name,
      url: URL.createObjectURL(file),
      type: file.type,
    }));

    setUploadedFiles((prev) => [...prev, ...newFiles]);
  };

  /* ================== Delete ================== */
  const handleDelete = (index: number) => {
    const file = files[index];

    if (file.isSample) {
      alert("ไฟล์ตัวอย่างไม่สามารถลบได้");
      return;
    }

    if (!confirm("ต้องการลบไฟล์นี้หรือไม่?")) return;

    const realIndex = index - sampleFiles.length;
    setUploadedFiles((prev) => prev.filter((_, i) => i !== realIndex));
  };

  return (
    <main className="min-h-screen bg-[#0d0d1f] text-white pt-20 px-6">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold mb-10 text-center">
          ไฟล์งานและสื่อประกอบการเรียน
        </h1>

        {/* Upload */}
        <input
          type="file"
          multiple
          onChange={handleUpload}
          className="mb-10 block w-full text-sm
            file:mr-4 file:py-2 file:px-4
            file:rounded-lg file:border-0
            file:bg-purple-600 file:text-white
            hover:file:bg-purple-700"
        />

        {/* Preview */}
        <div className="grid md:grid-cols-2 gap-6">
          {files.map((file, index) => (
            <div
              key={index}
              className="relative bg-white/5 border border-white/10 rounded-xl p-4"
            >
              {!file.isSample && (
                <button
                  onClick={() => handleDelete(index)}
                  className="absolute top-2 right-2 text-xs bg-red-500 px-2 py-1 rounded"
                >
                  ลบ
                </button>
              )}

              <p className="text-sm mb-3 font-medium">
                {file.name}
                {file.isSample && (
                  <span className="ml-2 text-xs text-green-400">
                    (ตัวอย่าง)
                  </span>
                )}
              </p>

              {file.type.startsWith("image") && (
                <img
                  src={file.url}
                  className="rounded-lg w-full max-h-64 object-cover"
                />
              )}

              {file.type.startsWith("video") && (
                <video
                  src={file.url}
                  controls
                  className="rounded-lg w-full max-h-64"
                />
              )}

              {file.type === "application/pdf" && (
                <iframe
                  src={file.url}
                  className="w-full h-64 rounded-lg"
                />
              )}
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
