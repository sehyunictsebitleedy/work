'use client';

import Image from 'next/image';
import Link from 'next/link';
import { STATS } from '@/data/company';
import CountUp from '@/components/ui/CountUp';

<<<<<<< HEAD
=======
const TECH_TAGS = [
  { label: 'SI / 시스템 통합 개발', color: '#4DB8FF' },
  { label: 'GIS · 공간정보 솔루션',  color: '#00C9E0' },
  { label: 'SmartGeoKit',            color: '#7C5BE0' },
  { label: 'SEbit AI',               color: '#3BE087' },
];

>>>>>>> f140fc1edb9c051efdec06c8fe079c52f8d9efc6
export default function HeroSection() {
  return (
    <section
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{
        // 배경 이미지: /public/hero-bg.jpg (또는 .png) 에 이미지를 넣으세요
        backgroundImage: "url('/hero-bg.png')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundColor: '#0F1E3D', // 이미지 로드 전 fallback
      }}
    >
<<<<<<< HEAD
      {/* 어두운 오버레이 */}
      <div
        className="absolute inset-0"
        style={{ background: 'rgba(10, 20, 50, 0.6)' }}
      />

      {/* 메인 콘텐츠 */}
      <div
        className="relative z-10 max-w-[1200px] mx-auto w-full px-6 md:px-12 lg:px-[60px]"
        style={{ paddingTop: '160px', paddingBottom: '220px' }}
      >
=======
      {/* 배경 이미지 */}
      <Image
        src="/hero-bg01.png"
        alt=""
        fill
        priority
        className="absolute inset-0 object-cover pointer-events-none"
        style={{ zIndex: 0 }}
      />

      {/* 어두운 오버레이 */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'linear-gradient(135deg, rgba(6,13,31,0.85) 0%, rgba(6,13,31,0.7) 50%, rgba(6,13,31,0.8) 100%)',
          zIndex: 1,
        }}
      />

      {/* 배경 그리드 */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(rgba(58,138,224,0.06) 1px, transparent 1px),
            linear-gradient(90deg, rgba(58,138,224,0.06) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px',
          maskImage: 'radial-gradient(ellipse 80% 60% at 50% 50%, black, transparent)',
          zIndex: 2,
        }}
      />

      {/* 글로우 오브 */}
      <div
        className="absolute pointer-events-none"
        style={{
          top: '-10%', right: '-5%',
          width: '700px', height: '700px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(0,201,224,0.12) 0%, rgba(26,79,160,0.08) 40%, transparent 70%)',
          zIndex: 3,
        }}
      />
      <div
        className="absolute pointer-events-none"
        style={{
          bottom: '-20%', left: '20%',
          width: '500px', height: '500px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(26,79,160,0.1) 0%, transparent 70%)',
          zIndex: 3,
        }}
      />

      {/* 메인 콘텐츠 */}
      <div className="relative max-w-[700px]" style={{ zIndex: 10, animation: 'fade-up 0.6s ease both' }}>
>>>>>>> f140fc1edb9c051efdec06c8fe079c52f8d9efc6
        {/* 배지 */}
        <div
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase mb-8"
          style={{
            background: 'rgba(255,255,255,0.12)',
            border: '1px solid rgba(255,255,255,0.25)',
            color: '#ffffff',
            animation: 'fade-up 0.6s ease both',
          }}
        >
          <span
            className="w-1.5 h-1.5 rounded-full"
            style={{ background: '#00C9E0' }}
          />
          Smarter IT Solution Provider
        </div>

        {/* 타이틀 */}
        <h1
          className="font-black leading-[1.15] tracking-tight mb-6 text-white"
          style={{
            fontFamily: 'FlightSansTitle',
            fontSize: 'clamp(2.6rem, 5vw, 4.2rem)',
            letterSpacing: '-0.02em',
            animation: 'fade-up 0.6s 0.1s ease both',
          }}
        >
          기술로 연결하고 혁신을 설계합니다
        </h1>

        {/* 서브텍스트 */}
        <p
          className="text-base leading-relaxed mb-12 max-w-[500px]"
          style={{
            color: 'rgba(255,255,255,0.78)',
            animation: 'fade-up 0.6s 0.2s ease both',
          }}
        >
          세현아이씨티는 SI 개발·GIS 솔루션·IT 컨설팅 전문 기업입니다.<br />
          고객의 문제를 정확히 이해하고, 최적의 기술로 해결합니다.
        </p>

        {/* CTA 버튼 */}
        <div
          className="flex flex-wrap gap-4"
          style={{ animation: 'fade-up 0.6s 0.3s ease both' }}
        >
          <Link href="/service" className="btn-primary">
            서비스 보기 →
          </Link>
          <Link href="/#contact" className="btn-outline">
            무료 상담하기
          </Link>
        </div>
      </div>

<<<<<<< HEAD
=======
      {/* 테크 태그 (데스크탑만) */}
      <div
        className="absolute hidden lg:flex flex-col gap-3"
        style={{
          right: '60px',
          top: '50%',
          transform: 'translateY(-50%)',
          animation: 'fade-up 0.8s 0.4s ease both',
          zIndex: 10,
        }}
      >
        {TECH_TAGS.map((tag) => (
          <div
            key={tag.label}
            className="flex items-center gap-2.5 px-4 py-2.5 rounded-lg text-sm cursor-default transition-all duration-200 group"
            style={{
              background: 'var(--card-bg)',
              border:     '1px solid var(--card-border)',
              backdropFilter: 'blur(10px)',
              color:      '#C0CEEA',
            }}
            onMouseEnter={e => {
              (e.currentTarget as HTMLDivElement).style.borderColor = 'rgba(0,201,224,0.4)';
              (e.currentTarget as HTMLDivElement).style.color = '#F0F5FF';
            }}
            onMouseLeave={e => {
              (e.currentTarget as HTMLDivElement).style.borderColor = 'var(--card-border)';
              (e.currentTarget as HTMLDivElement).style.color = '#C0CEEA';
            }}
          >
            <span
              className="w-1.5 h-1.5 rounded-full flex-shrink-0"
              style={{ background: tag.color }}
            />
            {tag.label}
          </div>
        ))}
      </div>

>>>>>>> f140fc1edb9c051efdec06c8fe079c52f8d9efc6
      
    </section>
  );
}
