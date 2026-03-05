'use client';

import SectionLabel from '@/components/ui/SectionLabel';
import RevealWrapper from '@/components/ui/RevealWrapper';
import { useReveal } from '@/hooks/useReveal';
import { useCountUp } from '@/hooks/useCountUp';
import { STATS } from '@/data/company';

function StatCell({ value, suffix, label }: { value: number; suffix: string; label: string }) {
  const { ref, visible } = useReveal<HTMLDivElement>();
  const count = useCountUp(visible ? value : 0, 1800);

  return (
    <div
      ref={ref}
      className="p-10"
      style={{
        background: 'var(--card-bg)',
        border:     '1px solid var(--card-border)',
      }}
    >
      <div
        className="font-black text-[3rem] leading-none mb-2"
        style={{ fontFamily: 'var(--font-heading)' }}
      >
        {count}
        <span style={{ color: '#00C9E0' }}>{suffix}</span>
      </div>
      <div className="text-sm font-medium" style={{ color: '#8899BB' }}>
        {label}
      </div>
    </div>
  );
}

export default function StatsSection() {
  return (
    <section
      id="stats"
      className="section-padding"
      style={{
        background:   'linear-gradient(135deg, #0F1E40 0%, #081428 100%)',
        borderTop:    '1px solid rgba(255,255,255,0.08)',
        borderBottom: '1px solid rgba(255,255,255,0.08)',
      }}
    >
      <div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-16 items-center">
        {/* 왼쪽 텍스트 */}
        <div>
          <SectionLabel>Track Record</SectionLabel>
          <RevealWrapper>
            <h2
              className="font-black leading-tight mt-2 mb-4"
              style={{
                fontFamily: 'A2z',
                fontSize:   'clamp(3rem, 3vw, 2.6rem)',
                letterSpacing: '-0.02em',
              }}
            >
              세현아이씨티<br />BRAND SEbit AI
            </h2>
          </RevealWrapper>
          <RevealWrapper delay={100}>
            <p className="text-base leading-relaxed" style={{ color: '#C0CEEA' }}>
              20년 이상의 현장 경험과 200건이 넘는 수행 실적이 우리의 경쟁력입니다.
            </p>
          </RevealWrapper>
        </div>

       
      </div>
    </section>
  );
}
