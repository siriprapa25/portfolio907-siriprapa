'use client';

import Link from 'next/link';
import { useState, useRef } from 'react';

interface ChapterContent {
  [key: number]: {
    title: string;
    number: string;
    description: string;
    content: string;
    objectives: string[];
    color: string;
    icon: string;
  };
}

const chapterContents: ChapterContent = {
  1: {
    title: 'ความรู้พื้นฐาน',
    number: 'บทที่ 1',
    description: 'ความหมายของ Cloud Computing, ประวิติ, ความสำคัญ, ข้อดี-ข้อเสีย, และตัวอย่างการใช้งานจริง',
    content: `Cloud Computing คือการใช้บริการคอมพิวเตอร์ผ่านเครือข่ายอินเทอร์เน็ต โดยผู้ใช้สามารถเข้าถึงทรัพยากร เช่น เซิร์ฟเวอร์, ที่เก็บข้อมูล, และแอปพลิเคชันได้จากที่ใดก็ได้ ตราบใดที่มีการเชื่อมต่ออินเทอร์เน็ต

ประวิติของ Cloud Computing เริ่มต้นจากแนวคิดของ Utility Computing ในช่วงปี 1960s โดยจอห์น แมคคาร์ธี ต่อมาในปี 1990s บริษัทต่างๆ เริ่มพัฒนาแนวคิดนี้ และในปี 2006 Amazon ได้เปิดตัว Amazon Web Services (AWS) ซึ่งถือว่าเป็นจุดเริ่มต้นของยุค Cloud Computing ที่แท้จริง

ความสำคัญของ Cloud Computing:
- ลดต้นทุนการลงทุนด้านโครงสร้างพื้นฐาน
- เพิ่มความยืดหยุ่นในการใช้งาน
- ปรับปรุงการทำงานร่วมกันของทีม
- เพิ่มความปลอดภัยของข้อมูล
- ลดความซับซ้อนในการจัดการระบบ`,
    objectives: [
      'เข้าใจความหมายและประวิติของ Cloud Computing',
      'รู้จักข้อดีและข้อเสียของการใช้ Cloud Computing',
      'สามารถยกตัวอย่างการใช้งาน Cloud Computing ในชีวิตจริง',
      'เข้าใจความสำคัญของ Cloud Computing ต่อธุรกิจ'
    ],
    color: 'from-blue-500 to-blue-600',
    icon: '📚'
  },
  2: {
    title: 'สถาปัตยกรรมและองค์ประกอบของระบบ Cloud',
    number: 'บทที่ 2',
    description: 'โครงสร้างพื้นฐาน Cloud, องค์ประกอบ Compute / Storage / Network, Virtualization, Hypervisor, Elasticity, Scalability',
    content: `สถาปัตยกรรมของ Cloud Computing ประกอบด้วยหลายชั้น (Layers) ที่ทำงานร่วมกัน:

1. Compute Layer - ประมวลผลข้อมูล
2. Storage Layer - เก็บข้อมูล
3. Network Layer - เชื่อมต่อระหว่างส่วนต่างๆ
4. Application Layer - แอปพลิเคชันที่ใช้งาน

Virtualization เป็นเทคโนโลยีหลักที่ช่วยให้สามารถแบ่งทรัพยากรกายภาพออกเป็นหลายส่วน โดยใช้ Hypervisor ซึ่งเป็นซอฟต์แวร์ที่ควบคุมการจัดสรรทรัพยากร

Elasticity และ Scalability เป็นคุณสมบัติสำคัญที่ช่วยให้ระบบสามารถปรับตัวตามความต้องการได้`,
    objectives: [
      'เข้าใจสถาปัตยกรรมของ Cloud Computing',
      'รู้จักองค์ประกอบต่างๆ ของระบบ Cloud',
      'เข้าใจ Virtualization และ Hypervisor',
      'เข้าใจ Elasticity และ Scalability'
    ],
    color: 'from-cyan-500 to-cyan-600',
    icon: '🏗️'
  },
  3: {
    title: 'รูปแบบบริการของ Cloud (Service Models)',
    number: 'บทที่ 3',
    description: 'IaaS, PaaS, SaaS พร้อมตัวอย่าง, การเปรียบเทียบและ Shared Responsibility Model',
    content: `Cloud Computing มีรูปแบบบริการหลัก 3 แบบ:

1. Infrastructure as a Service (IaaS)
   - ผู้ให้บริการจัดเตรียม: เซิร์ฟเวอร์, ที่เก็บข้อมูล, เครือข่าย
   - ผู้ใช้จัดการ: OS, Middleware, Runtime, Application, Data
   - ตัวอย่าง: AWS EC2, Microsoft Azure, Google Cloud Platform

2. Platform as a Service (PaaS)
   - ผู้ให้บริการจัดเตรียม: Infrastructure + OS + Middleware + Runtime
   - ผู้ใช้จัดการ: Application, Data
   - ตัวอย่าง: Heroku, Google App Engine, AWS Elastic Beanstalk

3. Software as a Service (SaaS)
   - ผู้ให้บริการจัดเตรียม: ทั้งหมด
   - ผู้ใช้: เพียงใช้งานแอปพลิเคชัน
   - ตัวอย่าง: Google Workspace, Microsoft 365, Salesforce`,
    objectives: [
      'เข้าใจความแตกต่างระหว่าง IaaS, PaaS, SaaS',
      'รู้จักตัวอย่างของแต่ละรูปแบบบริการ',
      'เข้าใจ Shared Responsibility Model',
      'สามารถเลือกรูปแบบบริการที่เหมาะสม'
    ],
    color: 'from-purple-500 to-purple-600',
    icon: '☁️'
  },
  4: {
    title: 'รูปแบบการปรับใช้ Cloud (Deployment Models)',
    number: 'บทที่ 4',
    description: 'Public Cloud, Private Cloud, Hybrid Cloud, Community Cloud พร้อมข้อดีข้อเสีย',
    content: `Cloud Computing มีรูปแบบการปรับใช้ 4 แบบ:

1. Public Cloud
   - ให้บริการแก่สาธารณชน
   - ข้อดี: ราคาถูก, ยืดหยุ่น, ไม่ต้องลงทุนเยอะ
   - ข้อเสีย: ความปลอดภัยน้อยกว่า, ไม่มีการควบคุมเต็มที่
   - ตัวอย่าง: AWS, Azure, Google Cloud

2. Private Cloud
   - ให้บริการเฉพาะองค์กร
   - ข้อดี: ความปลอดภัยสูง, การควบคุมเต็มที่
   - ข้อเสีย: ต้นทุนสูง, ต้องลงทุนเยอะ
   - ตัวอย่าง: OpenStack, VMware

3. Hybrid Cloud
   - ผสมผสาน Public Cloud และ Private Cloud
   - ข้อดี: ความยืดหยุ่น, ความปลอดภัยสูง
   - ข้อเสีย: ซับซ้อน, ต้นทุนสูง

4. Community Cloud
   - ให้บริการแก่กลุ่มองค์กรที่มีความสนใจร่วมกัน`,
    objectives: [
      'เข้าใจความแตกต่างระหว่างรูปแบบการปรับใช้',
      'รู้จักข้อดีและข้อเสียของแต่ละรูปแบบ',
      'สามารถเลือกรูปแบบที่เหมาะสมกับองค์กร',
      'เข้าใจ Hybrid Cloud'
    ],
    color: 'from-pink-500 to-pink-600',
    icon: '🌐'
  },
  5: {
    title: 'ความปลอดภัยและการป้องกันในระบบ Cloud',
    number: 'บทที่ 5',
    description: 'ความเสี่ยง, การป้องกัน, Encryption, Authentication, Authorization, Compliance',
    content: `ความปลอดภัยในระบบ Cloud เป็นเรื่องสำคัญที่ต้องให้ความสนใจ:

ความเสี่ยงหลัก:
- Data Breach: การรั่วไหลของข้อมูล
- Account Hijacking: การครอบครองบัญชีผู้ใช้
- Insecure APIs: API ที่ไม่ปลอดภัย
- Denial of Service (DoS): การโจมตีปฏิเสธการให้บริการ

การป้องกัน:
1. Encryption - เข้ารหัสข้อมูล
2. Authentication - ยืนยันตัวตน
3. Authorization - ให้สิทธิการเข้าถึง
4. Firewall - ป้องกันการเข้าถึงที่ไม่ได้รับอนุญาต
5. Compliance - ปฏิบัติตามมาตรฐาน`,
    objectives: [
      'เข้าใจความเสี่ยงของ Cloud Computing',
      'รู้จักวิธีการป้องกันต่างๆ',
      'เข้าใจ Encryption, Authentication, Authorization',
      'รู้จักมาตรฐาน Compliance'
    ],
    color: 'from-red-500 to-red-600',
    icon: '🔒'
  },
  6: {
    title: 'การบริหารจัดการและการตรวจสอบ Cloud',
    number: 'บทที่ 6',
    description: 'Cloud Management Tools, Monitoring, Logging, Cost Management, Performance Optimization',
    content: `การบริหารจัดการระบบ Cloud ต้องใช้เครื่องมือและวิธีการที่เหมาะสม:

Cloud Management Tools:
- AWS CloudWatch, Azure Monitor, Google Cloud Monitoring
- Terraform, CloudFormation สำหรับ Infrastructure as Code
- Kubernetes สำหรับการจัดการ Container

Monitoring และ Logging:
- ตรวจสอบประสิทธิภาพของระบบ
- บันทึกกิจกรรมต่างๆ เพื่อการตรวจสอบ
- ตั้งค่า Alert เมื่อมีปัญหา

Cost Management:
- ติดตามการใช้งานและค่าใช้งาน
- ปรับปรุงการใช้ทรัพยากร
- ใช้ Reserved Instances เพื่อลดต้นทุน`,
    objectives: [
      'รู้จักเครื่องมือจัดการ Cloud',
      'เข้าใจการ Monitoring และ Logging',
      'สามารถจัดการต้นทุน Cloud',
      'เข้าใจ Performance Optimization'
    ],
    color: 'from-green-500 to-green-600',
    icon: '⚙️'
  },
  7: {
    title: 'การโยกย้ายและการบูรณาการระบบ Cloud',
    number: 'บทที่ 7',
    description: 'Migration Strategies, Integration, Best Practices, Case Studies, Future Trends',
    content: `การโยกย้ายระบบไปยัง Cloud ต้องมีการวางแผนที่ดี:

Migration Strategies:
1. Lift and Shift - ย้ายระบบเดิมไปยัง Cloud โดยไม่เปลี่ยนแปลง
2. Replatform - ปรับปรุงระบบเล็กน้อยก่อนย้าย
3. Refactor - ปรับปรุงระบบให้เหมาะสมกับ Cloud
4. Repurchase - ใช้ SaaS แทนระบบเดิม

Best Practices:
- วางแผนการโยกย้ายอย่างละเอียด
- ทำการ Pilot Project ก่อน
- ตรวจสอบความเข้ากันได้
- ฝึกอบรมพนักงาน
- มีแผน Rollback เพื่อความปลอดภัย

Future Trends:
- Edge Computing
- Serverless Computing
- AI/ML Integration
- Multi-Cloud Strategy`,
    objectives: [
      'เข้าใจ Migration Strategies',
      'รู้จักวิธีการบูรณาการระบบ',
      'เข้าใจ Best Practices',
      'รู้จักแนวโน้มอนาคตของ Cloud'
    ],
    color: 'from-amber-500 to-amber-600',
    icon: '🚀'
  }
};

interface FileUpload {
  id: string;
  name: string;
  size: string;
  type: string;
  uploadedAt: string;
}

export default function ChapterPage({ params }: { params: { id: string } }) {
  const chapterId = parseInt(params.id);
  const chapter = chapterContents[chapterId as keyof typeof chapterContents];
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [uploadedFiles, setUploadedFiles] = useState<FileUpload[]>([]);
  const [isDragging, setIsDragging] = useState(false);

  if (!chapter) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-foreground mb-4">404</h1>
          <p className="text-lg text-foreground/70 mb-6">ไม่พบบทเรียน</p>
          <Link href="/courses" className="text-primary hover:underline">
            ← กลับไปหน้า Courses
          </Link>
        </div>
      </div>
    );
  }

  const handleFileUpload = (files: FileList | null) => {
    if (!files) return;

    Array.from(files).forEach((file) => {
      const newFile: FileUpload = {
        id: Math.random().toString(36).substr(2, 9),
        name: file.name,
        size: (file.size / 1024 / 1024).toFixed(2) + ' MB',
        type: file.type,
        uploadedAt: new Date().toLocaleString('th-TH')
      };
      setUploadedFiles([...uploadedFiles, newFile]);
    });
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    handleFileUpload(e.dataTransfer.files);
  };

  const deleteFile = (id: string) => {
    setUploadedFiles(uploadedFiles.filter(file => file.id !== id));
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className={`bg-gradient-to-r ${chapter.color} text-white py-8 mb-8`}>
        <div className="container mx-auto px-4">
          <Link href="/courses" className="text-white/80 hover:text-white inline-flex items-center gap-2 mb-4">
            ← กลับไปหน้า Courses
          </Link>
          <div className="flex items-start justify-between">
            <div>
              <p className="text-sm font-semibold opacity-90">{chapter.number}</p>
              <h1 className="text-4xl md:text-5xl font-bold mb-2">{chapter.title}</h1>
              <p className="text-lg opacity-90">{chapter.description}</p>
            </div>
            <span className="text-6xl">{chapter.icon}</span>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 pb-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Content */}
          <div className="lg:col-span-2">
            {/* Learning Objectives */}
            <div className="card mb-8">
              <h2 className="text-2xl font-bold text-foreground mb-4">📌 วัตถุประสงค์การเรียนรู้</h2>
              <ul className="space-y-3">
                {chapter.objectives.map((objective, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="text-primary font-bold text-lg mt-1">✓</span>
                    <span className="text-foreground">{objective}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Chapter Content */}
            <div className="card mb-8">
              <h2 className="text-2xl font-bold text-foreground mb-4">📖 เนื้อหาบทเรียน</h2>
              <div className="prose prose-sm max-w-none">
                {chapter.content.split('\n\n').map((paragraph, index) => (
                  <p key={index} className="text-foreground/80 leading-relaxed mb-4">
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - File Upload */}
          <div className="lg:col-span-1">
            {/* Upload Section */}
            <div className="card sticky top-4">
              <h2 className="text-2xl font-bold text-foreground mb-4">📤 อัพโหลดไฟล์</h2>

              {/* Drag and Drop Area */}
              <div
                onDragOver={handleDragOver}
                onDragLeave={handleDragLeave}
                onDrop={handleDrop}
                onClick={() => fileInputRef.current?.click()}
                className={`border-2 border-dashed rounded-lg p-8 text-center cursor-pointer transition-colors ${
                  isDragging
                    ? 'border-primary bg-primary/10'
                    : 'border-border hover:border-primary'
                }`}
              >
                <div className="text-4xl mb-2">📁</div>
                <p className="font-semibold text-foreground mb-1">
                  ลากไฟล์มาวางที่นี่
                </p>
                <p className="text-sm text-foreground/60">
                  หรือคลิกเพื่อเลือกไฟล์
                </p>
                <p className="text-xs text-foreground/50 mt-2">
                  รองรับ: PDF, Image, Video
                </p>
              </div>

              <input
                ref={fileInputRef}
                type="file"
                multiple
                accept=".pdf,.jpg,.jpeg,.png,.gif,.mp4,.avi,.mov"
                onChange={(e) => handleFileUpload(e.target.files)}
                className="hidden"
              />

              {/* Uploaded Files List */}
              {uploadedFiles.length > 0 && (
                <div className="mt-6">
                  <h3 className="font-bold text-foreground mb-3">
                    ไฟล์ที่อัพโหลด ({uploadedFiles.length})
                  </h3>
                  <div className="space-y-2 max-h-96 overflow-y-auto">
                    {uploadedFiles.map((file) => (
                      <div
                        key={file.id}
                        className="flex items-start justify-between gap-2 p-3 bg-secondary rounded-lg"
                      >
                        <div className="flex-1 min-w-0">
                          <p className="font-semibold text-foreground truncate text-sm">
                            {file.name}
                          </p>
                          <p className="text-xs text-foreground/60">
                            {file.size} • {file.uploadedAt}
                          </p>
                        </div>
                        <button
                          onClick={() => deleteFile(file.id)}
                          className="text-red-500 hover:text-red-700 font-bold text-lg flex-shrink-0"
                        >
                          ✕
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Info Box */}
              <div className="mt-6 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg border border-blue-200 dark:border-blue-800">
                <p className="text-sm text-blue-900 dark:text-blue-100">
                  <strong>💡 เคล็ดลับ:</strong> คุณสามารถอัพโหลดไฟล์งาน, โปรเจกต์, หรือเอกสารประกอบการศึกษาได้
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}