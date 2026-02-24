interface SectionDividerProps {
  variant?: 'ornament' | 'subtle' | 'wide'
}

export default function SectionDivider({ variant = 'ornament' }: SectionDividerProps) {
  if (variant === 'subtle') {
    return (
      <div className="py-6 flex justify-center">
        <div className="h-px w-24 bg-gradient-to-r from-transparent via-gold/20 to-transparent" />
      </div>
    )
  }

  if (variant === 'wide') {
    return (
      <div className="py-2">
        <div className="h-px w-full bg-gradient-to-r from-transparent via-gold/15 to-transparent" />
      </div>
    )
  }

  return (
    <div className="ornament-line py-4">
      <div className="w-1.5 h-1.5 rotate-45 bg-gold/30" />
    </div>
  )
}
