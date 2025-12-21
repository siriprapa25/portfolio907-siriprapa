'use client';

import { useState } from 'react';
import Link from 'next/link';
import FileUpload from '@/components/FileUpload';

const chapters: Record<number, { title: string; description: string }> = {
  1: { title: 'บทที่ 1: ความรู้พื้นฐาน', description: 'พื้นฐานการฝึกประสบการณ์วิชาชีพ' },
  2: { title: 'บทที่ 2: การสมัครงาน', description: 'การเขียนจดหมายสมัครและ CV' },
  3: { title: 'บทที่ 3: สัมภาษณ์งาน', description: 'การเตรียมตัวสัมภาษณ์งาน' },
  4: { title: 'บทที่ 4: จริยธรรมวิชาชีพ', description: 'คุณธรรมและจริยธรรมในการทำงาน' },
  5: { title: 'บทที่ 5: กฎหมายแรงงาน', description: 'สิทธิและหน้าที่แรงงาน' },
  6: { title: 'บทที่ 6: มาตรฐานคุณภาพ', description: '5S และความปลอดภัย' },
  7: { title: 'บทที่ 7: การพัฒนาตนเอง', description: 'บุคลิกภาพและความก้าวหน้าในอาชีพ' },
};

export default function ChapterPage({ params }: { params: { id: string } }) {
  const chapterId = Number(params.id);
  const chapter = chapters[chapterId];

  const [pdfs, setPdfs] = useState<string[]>([]);
  const [videos, setVideos] = useState<string[]>([]);

  if (!chapter) {
    return <div className="p-10 text-center">ไม่พบบทเรียน</div>;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <Link href="/courses" className="text-primary hover:underline">
        ← กลับหน้ารายวิชา
      </Link>

      <h1 className="text-3xl font-bold mt-4">{chapter.title}</h1>
      <p className="text-lg text-muted-foreground mb-6">{chapter.description}</p>

      {/* PDF */}
      <div className="border rounded-xl p-6 mb-6">
        <h2 className="text-2xl font-bold mb-4">📄 เอกสารประกอบ (PDF)</h2>

        {pdfs.length > 0 ? (
          <ul className="space-y-2">
            {pdfs.map((name, i) => (
              <li key={i}>📄 {name}</li>
            ))}
          </ul>
        ) : (
          <p>ยังไม่มีไฟล์ PDF</p>
        )}

        <FileUpload
          onUpload={(file) => {
            if (file.type === 'application/pdf') {
              setPdfs((prev) => [...prev, file.name]);
            }
          }}
        />
      </div>

      {/* Video */}
      <div className="border rounded-xl p-6">
        <h2 className="text-2xl font-bold mb-4">🎥 วิดีโอการเรียน</h2>

        {videos.length > 0 ? (
          <ul className="space-y-2">
            {videos.map((name, i) => (
              <li key={i}>🎬 {name}</li>
            ))}
          </ul>
        ) : (
          <p>ยังไม่มีวิดีโอ</p>
        )}

        <input
          type="file"
          accept="video/*"
          onChange={(e) => {
            if (e.target.files?.[0]) {
              setVideos((prev) => [...prev, e.target.files![0].name]);
            }
          }}
        />
      </div>
    </div>
  );
}
