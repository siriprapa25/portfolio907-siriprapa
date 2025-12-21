'use client';

interface FileUploadProps {
  onUpload: (file: File) => void;
}

export default function FileUpload({ onUpload }: FileUploadProps) {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) return;
    Array.from(e.target.files).forEach(onUpload);
  };

  return (
    <div className="border border-border rounded-xl p-6 bg-card">
      <h2 className="text-2xl font-bold mb-4">อัพโหลดไฟล์</h2>
      <input type="file" onChange={handleChange} className="block w-full" />
    </div>
  );
}
