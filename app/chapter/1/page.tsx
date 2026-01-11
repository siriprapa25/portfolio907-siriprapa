"use client";

import { useEffect, useState } from "react";

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
      name: "คำอธิอบายรายวิชาการเตรียมความพร้อมฝึกประสบการณ์วิชาชีพทางเทคโนโลยี",
      url: "/uploads/chapter1/คำอธิอบายรายวิชาการเตรียมความพร้อมฝึกประสบการณ์วิชาชีพทางเทคโนโลยี.pdf",
      type: "application/pdf",
      isSample: true,
    },
    {
      name: "การเตรียมความพร้อมฝึกประสบการณ์",
      url: "/uploads/chapter1/02-เตรียมความพร้อมฝึกประสบการณ์วิชาชีพ WiFi.pdf",
      type: "application/pdf",
      isSample: true,
    },
    {
      name: "ประเภทของหน่วยงาน",
      url: "/uploads/chapter1/ประเภทของหน่วยงาน.pdf",
      type: "application/pdf",
      isSample: true,
    },
    {
      name: "วิดีโอสื่อการสอนการต่อวงจรไฟฟ้า",
      url: "/uploads/chapter1/video.mp4",
      type: "video/mp4",
      isSample: true,
    },
    {
      name: "RPA เบื้องต้น",
      url: "/uploads/chapter1/RPA เบื้องต้น.pdf",
      type: "application/pdf",
      isSample: true,
    },
    {
      name: "กฎหมายแรงงาน",
      url: "/uploads/chapter1/กฎหมายแรงงาน.pdf",
      type: "application/pdf",
      isSample: true,
    },   
  ];

  /* ================== State ================== */
  const [files, setFiles] = useState<FileItem[]>([]);

  /* ================== โหลดข้อมูล ================== */
  useEffect(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    const uploadedFiles = saved ? JSON.parse(saved) : [];
    setFiles([...sampleFiles, ...uploadedFiles]);
  }, []);

  /* ================== Delete ================== */
  const handleDelete = (index: number) => {
    const updated = files.filter((_, i) => i !== index);
    setFiles(updated);

    const onlyUploaded = updated.filter((f) => !f.isSample);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(onlyUploaded));
  };

  return (
    <main className="min-h-screen bg-background pt-20 px-6">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-8">
          ไฟล์งานและสื่อประกอบการเรียน
        </h1>

        {/* Preview */}
        <div className="grid md:grid-cols-2 gap-6">
          {files.map((file, index) => (
            <div
              key={index}
              className="relative bg-white border border-gray-200 
                         rounded-xl p-4 shadow-md hover:shadow-lg transition"
            >
              {/* ชื่อไฟล์ */}
              <h2 className="text-lg font-semibold mb-2 text-gray-800">
                {file.name}
                {file.isSample && (
                  <span className="ml-2 text-xs text-green-600">
                    
                  </span>
                )}
              </h2>

              {/* ปุ่มลบไฟล์ */}
              {!file.isSample && (
                <button
                  onClick={() => handleDelete(index)}
                  className="absolute top-2 right-2 text-xs bg-red-500 px-2 py-1 rounded"
                >
                  ลบ
                </button>
              )}

              {/* แสดงไฟล์ประเภทต่าง ๆ */}
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
                  className="rounded-lg w-full mb-2 max-h-64"
                />
              )}

              {file.type === "application/pdf" && (
                <div className="relative">
                  <iframe
                    src={file.url}
                    className="w-full h-64 rounded-lg"
                  />
                  {/* ปุ่ม ⛶ ขยายเต็มจอ */}
                  <a
                    href={file.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="absolute bottom-2 right-2 bg-black/60 text-white px-2 py-1 rounded hover:bg-black transition"
                    title="เปิดเต็มหน้าจอ"
                  >
                    ⛶
                  </a>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Footer */}
      <footer className="py-8 border-t border-border mt-10">
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
