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
                    <p className="mb-4"></p>
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
                    </ChapterCard>
                  </div>
                </div>
              </section>

    {/* Education Section */}
<section className="py-16">
  <div className="container mx-auto px-4">
    <div className="max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold text-foreground mb-8">
        Education
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

        {/* บทเรียนที่ 1 */}
        <Link
          href="/chapter/1"
          className="block hover:scale-105 transition-transform"
        >
          <ChapterCard title="บทเรียนที่ 1 ">
            <p className="text-foreground/80">
              ความรู้พื้นฐานเกี่ยวกับการฝึกประสบการณ์วิชาชีพ
            </p>
          </ChapterCard>
        </Link>

        {/* บทเรียนที่ 2 */}
        <Link
          href="/chapter/2"
          className="block hover:scale-105 transition-transform"
        >
          <ChapterCard title="บทเรียนที่ 2">
            <p className="text-foreground/80">
              การเตรียมความพร้อมด้านเอกสารและการสมัครงาน
            </p>
          </ChapterCard>
        </Link>

        {/* บทเรียนที่ 3 */}
        <Link
          href="/chapter/3"
          className="block hover:scale-105 transition-transform"
        >
          <ChapterCard title="บทเรียนที่ 3">
            <p className="text-foreground/80">
              การเลือกสถานประกอบการและเทคนิคการสัมภาษณ์งาน
            </p>
          </ChapterCard>
        </Link>

        {/* บทเรียนที่ 4 */}
        <Link
          href="/chapter/2"
          className="block hover:scale-105 transition-transform"
        >
          <ChapterCard title="บทเรียนที่ 4">
            <p className="text-foreground/80">
              คุณธรรม จริยธรรม และกฎหมายแรงงานที่เกี่ยวข้อง
            </p>
          </ChapterCard>
        </Link>

        {/* บทเรียนที่ 5 */}
        <Link
          href="/chapter/2"
          className="block hover:scale-105 transition-transform"
        >
          <ChapterCard title="บทเรียนที่ 5">
            <p className="text-foreground/80">
              การจัดกิจกรรม 5ส และมาตรฐานความปลอดภัย
            </p>
          </ChapterCard>
        </Link>

       {/* บทเรียนที่ 6 */}
        <Link
          href="/chapter/2"
          className="block hover:scale-105 transition-transform"
        >
          <ChapterCard title="บทเรียนที่ 6">
            <p className="text-foreground/80">
              การเขียนรายงานและการนำเสนอผลงาน
            </p>
          </ChapterCard>
        </Link>

        {/* บทเรียนที่ 7 */}
        <Link
          href="/chapter/2"
          className="block hover:scale-105 transition-transform"
        >
          <ChapterCard title="บทเรียนที่ 7">
            <p className="text-foreground/80">
              วัฒนธรรมองค์กรและพัฒนาบุคลิกภาพ
            </p>
          </ChapterCard>
        </Link>
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