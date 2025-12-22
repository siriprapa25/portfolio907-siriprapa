'use client';

import Link from 'next/link';

export default function ChapterPage({ params }: { params: { id: string } }) {
  const chapterId = params.id;

  // 🔴 ระบุชื่อไฟล์ที่มีอยู่จริง
  const files = [
    'lesson1.pdf',
    'lesson2.pdf',
  ];

  return (
    <div className="max-w-3xl mx-auto py-10">
      <h1 className="text-2xl font-bold mb-6">
        บทที่ {chapterId}
      </h1>

      <ul className="space-y-3">
        {files.map((file) => (
          <li key={file}>
            <a
              href={`/uploads/chapter-${chapterId}/${file}`}
              target="_blank"
              className="text-blue-600 underline"
            >
              📄 {file}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
