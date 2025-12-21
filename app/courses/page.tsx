'use client';

import Link from 'next/link';
import { useState } from 'react';
import ChapterCard from '@/components/ChapterCard';

export default function CoursesPage() {
  const [expandedChapter, setExpandedChapter] = useState<number | null>(null);
  const chapters = [
    { id: 1, title: 'บทที่ 1 ความรู้พื้นฐานเกี่ยวกับการฝึกประสบการณ์วิชาชีพ' },
    { id: 2, title: 'บทที่ 2 การเลือกสถานประกอบการ' },
    { id: 3, title: 'บทที่ 3 การเขียนจดหมายสมัครงาน' },
    { id: 4, title: 'บทที่ 4 การสัมภาษณ์งาน' },
    { id: 5, title: 'บทที่ 5 จรรยาบรรณและกฎหมายแรงงาน' },
    { id: 6, title: 'บทที่ 6 การเขียนรายงานและการนำเสนอ' },
    { id: 7, title: 'บทที่ 7 การพัฒนาบุคลิกภาพและการประเมินผล' },
  ];

  return (
    <div className="min-h-screen bg-background">
        {/* course Section */}
              <section className="py-16 bg-secondary/30">
                <div className="container mx-auto px-4">
                  <div className="max-w-4xl mx-auto">
                    <h2 className="text-3xl font-bold text-foreground mb-8">BSCCT907_การเตรียมความพร้อมฝึกประสบการณ์วิชาชีพทางเทคโนโลยีสารสนเทศ</h2>
                    <ChapterCard title="คำอธิบายรายวิชา">
                    <p className="mb-4">
                    <p>ฝึกทักษะความรู้เบื้องต้นเกี่ยวกับรูปแบบและกระบวนการฝึกประสบการณ์วิชาชีพ
		            ความสําคัญของการฝึกประสบการณ์วิชาชีพ หลักการเขียนจดหมายสมัครงาน การ
		            เลือกสถานประกอบการ หลักการสัมภาษณ์งานอาชีพ จรรยาบรรณวิชาชีพ คุณธรรมจริยธรรม 
                    กฎหมายแรงงาน การประกันสังคม กิจกรรม 5 ส ระบบ มาตรฐานการประกันคุณภาพและความ			
                    ปลอดภัยในการทํางาน การเขียนรายงาน การนําเสนอผลงาน วัฒนธรรมองค์กร การพัฒนา			
                    บุคลิกภาพและคุณลักษณะที่ เหมาะสมกับวิชาชีพด้านเทคโนโลยีสารสนเทศ การประเมินผลใน			
                    รายวิชาเป็นระดับ คะแนน พอใจ (S) และไม่พอใจ (U)</p>
		            <p>Practice about Basic knowledge in method and process of professional 				
                    experience, principles of professional experience application letter writing, how 			
                    to select working places, how to achieve a job interview, professional ethics, 			
                    virtue and morality, labour law, social security, 5S activities, quality assurance 			
                    and safety standards, report writing, organizational culture, personality 				
                    development and characteristics suitable for the information technology 				
                    profession. Achievement of the course will be either S (Satisfactory) or U 	(Unsatisfactory),</p>
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
        
              <ChapterCard title="บทที่ 1 ความรู้พื้นฐานเกี่ยวกับการฝึกประสบการณ์วิชาชีพ">
                {/* บทเรียนที่ 1 */}
                <div className="mb-6">
                  <p className="text-foreground/80">บทเรียน</p>
                </div>
              </ChapterCard>
            </div>
          </div>
        </section>
        
        <div className="grid  py-10 grid-cols-5 md:grid-cols-2 gap-6">
            {chapters.map((chapter) => (
              // Link ครอบ ChapterCard ทั้งหมด
              <Link
                key={chapter.id}
                href={`/chapter/${chapter.id}`}
                className="block hover:scale-105 transition-transform"
              >
                <ChapterCard title={chapter.title}>
                  <p className="text-foreground/80">
                    เนื้อหาบทที่ {chapter.id}
                  </p>
                </ChapterCard>
              </Link>
            ))}
          </div>
    </div>
  );
}