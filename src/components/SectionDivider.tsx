interface SectionDividerProps {
  variant?: 'ornament' | 'subtle'
}

export default function SectionDivider({ variant = 'ornament' }: SectionDividerProps) {
  if (variant === 'subtle') {
    return (
      <div className="py-8 flex justify-center">
        <div className="h-px w-32 bg-gold/20" />
      </div>
    )
  }

  return (
    <div className="flex items-center justify-center py-4">
      <div className="h-px w-16 bg-gold/30" />
      <div className="mx-3">
        {/* Stylized fork/knife SVG ornament */}
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-gold/40">
          <path d="M7 2v8l-2 2v10h4V12l-2-2V2" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M17 2v4a3 3 0 01-3 3v13h2V9a3 3 0 01-3-3V2" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>
      <div className="h-px w-16 bg-gold/30" />
    </div>
  )
}
