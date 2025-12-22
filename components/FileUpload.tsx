'use client';

interface FileUploadProps {
  onUpload: (file: File) => void;
}

export default function FileUpload({ onUpload }: FileUploadProps) {
  return (
    <input
      type="file"
      accept=".pdf,video/*"
      onChange={(e) => {
        if (!e.target.files) return;
        onUpload(e.target.files[0]);
      }}
    />
  );
}
