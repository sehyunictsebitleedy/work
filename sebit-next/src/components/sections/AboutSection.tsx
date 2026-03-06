import Image from 'next/image';
import SectionLabel from '@/components/ui/SectionLabel';
import RevealWrapper from '@/components/ui/RevealWrapper';

const POINTS = [
  {
<<<<<<< HEAD
    title: 'AI 운영 플랫폼',
    desc:  '다양한 LLM/RAG 기술을 결합하여 특화된 기업 데이터를 업무에 최적화, 고객 맞춤형 서비스 제공',
=======
    title: '도메인 특화 전문성',
    desc:  '공공행정·지리정보·금융·물류 등 분야별 도메인 지식을 바탕으로 실효성 있는 솔루션을 설계합니다.',
>>>>>>> f140fc1edb9c051efdec06c8fe079c52f8d9efc6
  },
  {
    title: '검증된 기술 역량',
    desc:  'Java·GIS 엔진부터 클라우드·API 연동까지 폭넓은 기술 스택으로 복잡한 요구사항을 해결합니다.',
  },
  {
    title: '납기 준수와 품질 보증',
    desc:  '체계적인 프로젝트 관리로 일정과 품질을 동시에 지키며, 오픈 후에도 유지보수를 지원합니다.',
  },
];

export default function AboutSection() {
  return (
<<<<<<< HEAD
    <section id="about" className="section-padding" style={{ background: '#F4F7FC' }}>
      <div className="max-w-[1200px] mx-auto">

        {/* 섹션 헤더 */}
        <div className="mb-14 max-w-[600px]">
          <SectionLabel>About Us</SectionLabel>
          <RevealWrapper>
            <h2
              className="font-black leading-tight mt-3"
              style={{
                fontFamily: 'var(--font-heading)',
                fontSize:   'clamp(1.8rem, 3vw, 2.6rem)',
                letterSpacing: '-0.02em',
                color: '#0F1E3D',
              }}
            >
              신뢰를 쌓고<br />함께 성장합니다
            </h2>
          </RevealWrapper>
          <RevealWrapper delay={100}>
            <p className="text-base leading-relaxed mt-4" style={{ color: '#5A6A85' }}>
              단순한 개발 파트너를 넘어, 고객의 비즈니스를 깊이 이해하고
              장기적인 성장을 함께 설계하는 IT 전략 파트너입니다.
            </p>
          </RevealWrapper>
        </div>

        {/* 3개 포인트 */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {POINTS.map((point, i) => (
            <RevealWrapper key={point.title} delay={((i * 100)) as 0 | 100 | 200 | 300}>
              <div
                className="p-8 rounded-xl"
                style={{
                  background: '#ffffff',
                  border: '1px solid #E2E8F0',
                }}
              >
                <div
                  className="text-sm font-bold mb-4"
                  style={{ color: '#1A4FA0', fontFamily: 'var(--font-heading)' }}
                >
                  0{i + 1}
                </div>
                <h3
                  className="font-bold text-lg mb-3"
                  style={{ fontFamily: 'var(--font-heading)', color: '#0F1E3D' }}
                >
                  {point.title}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: '#5A6A85' }}>
                  {point.desc}
                </p>
              </div>
            </RevealWrapper>
          ))}
        </div>

=======
    <section id="about" className="section-padding relative overflow-hidden">
      {/* 배경 이미지 */}
      <Image
        src="/about_bg01.png"
        alt=""
        fill
        className="absolute inset-0 object-cover pointer-events-none"
        style={{ zIndex: 0 }}
      />
      {/* 어두운 오버레이 */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: 'rgba(0,0,0,0.72)', zIndex: 1 }}
      />

      <div className="relative max-w-[900px] mx-auto text-center" style={{ zIndex: 2 }}>

        <SectionLabel>About Us</SectionLabel>

        <RevealWrapper>
          <h2
            className="font-black leading-tight mt-2 mb-6"
            style={{
              fontFamily:    'var(--font-heading)',
              fontSize:      'clamp(1.8rem, 3vw, 2.6rem)',
              letterSpacing: '-0.02em',
            }}
          >
            신뢰를 쌓고, 함께 성장합니다
          </h2>
        </RevealWrapper>

        <RevealWrapper delay={100}>
          <p
            className="text-base leading-relaxed mx-auto mb-20"
            style={{ color: '#C0CEEA', maxWidth: '560px' }}
          >
            단순한 개발 파트너를 넘어, 고객의 비즈니스를 깊이 이해하고
            장기적인 성장을 함께 설계하는 IT 전략 파트너입니다.
          </p>
        </RevealWrapper>

        {/* gap-px + overflow-hidden 제거 → 각 카드가 독립적으로 애니메이션 */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {POINTS.map((point, i) => (
            <RevealWrapper key={point.title} delay={(i * 150) as 0 | 100 | 200 | 300}>
              <div
                className="p-10 text-left rounded-2xl h-full"
                style={{
                  background:   'var(--card-bg)',
                  border:       '1px solid var(--card-border)',
                }}
              >
                <div
                  className="text-xs font-bold tracking-widest uppercase mb-6"
                  style={{ color: '#00C9E0' }}
                >
                  0{i + 1}
                </div>
                <h3
                  className="font-bold text-base mb-4"
                  style={{ fontFamily: 'var(--font-heading)' }}
                >
                  {point.title}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: '#8899BB' }}>
                  {point.desc}
                </p>
              </div>
            </RevealWrapper>
          ))}
        </div>

>>>>>>> f140fc1edb9c051efdec06c8fe079c52f8d9efc6
      </div>
    </section>
  );
}
