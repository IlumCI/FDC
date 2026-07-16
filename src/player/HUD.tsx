const MAX_HEARTS = 5

function Heart({ filled }: { filled: boolean }) {
  return (
    <svg viewBox="0 0 24 24" className={`w-5 h-5 transition-transform ${filled ? 'scale-100' : 'scale-90'}`}>
      <path
        d="M12 21s-7.5-4.6-10-9.2C.3 8.4 1.6 5 5 5c2 0 3.2 1.2 4 2.3C9.8 6.2 11 5 13 5c3.4 0 4.7 3.4 3 6.8C19.5 16.4 12 21 12 21z"
        className={filled ? 'fill-danger' : 'fill-line'}
      />
    </svg>
  )
}

export function HUD({
  progress,
  hearts,
  onClose,
  onTutor,
  tutorEnabled,
}: {
  progress: number // 0..1
  hearts: number
  onClose: () => void
  onTutor: () => void
  tutorEnabled: boolean
}) {
  return (
    <div className="sticky top-0 z-20 bg-ink/95 backdrop-blur border-b border-line">
      <div className="max-w-2xl mx-auto px-4 py-3 flex items-center gap-3">
        <button onClick={onClose} aria-label="Exit lesson" className="text-muted hover:text-fg text-xl leading-none">
          ✕
        </button>
        <div className="flex-1 h-3 bg-panel2 rounded-full overflow-hidden">
          <div
            className="h-full bg-accent rounded-full transition-all duration-300"
            style={{ width: `${Math.round(progress * 100)}%` }}
          />
        </div>
        {tutorEnabled && (
          <button onClick={onTutor} aria-label="Ask the tutor" className="text-muted hover:text-fg" title="Ask the tutor">
            💬
          </button>
        )}
        <div className="flex items-center gap-0.5" aria-label={`${hearts} hearts`}>
          {Array.from({ length: MAX_HEARTS }).map((_, i) => (
            <Heart key={i} filled={i < hearts} />
          ))}
        </div>
      </div>
    </div>
  )
}
