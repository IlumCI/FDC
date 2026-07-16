import { useParams, Link, useNavigate } from 'react-router-dom'
import { getLesson, allLessons } from '../content'
import { LessonView } from '../lesson/LessonView'
import { useEffect } from 'react'

export function LessonPage() {
  const { id } = useParams()
  const navigate = useNavigate()
  const found = id ? getLesson(id) : undefined

  // Scroll to top on lesson change — long pages, predictable behavior.
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [id])

  if (!found) {
    return (
      <div className="text-center py-12">
        <p className="text-muted">Lesson not found.</p>
        <Link to="/" className="text-accent underline">
          Back to the course
        </Link>
      </div>
    )
  }

  const lessons = allLessons()
  const idx = lessons.findIndex((l) => l.id === found.lesson.id)
  const prev = idx > 0 ? lessons[idx - 1] : null
  const next = idx < lessons.length - 1 ? lessons[idx + 1] : null

  return (
    <div>
      <Link to="/" className="text-sm text-muted hover:text-fg">
        ← Course
      </Link>
      <div className="mt-4">
        <LessonView key={found.lesson.id} lesson={found.lesson} />
      </div>

      <nav className="max-w-3xl mx-auto mt-8 flex items-center justify-between gap-3 border-t border-line pt-4">
        {prev ? (
          <button onClick={() => navigate(`/lesson/${prev.id}`)} className="text-sm text-muted hover:text-fg text-left">
            ← {prev.id} {prev.title}
          </button>
        ) : (
          <span />
        )}
        {next ? (
          <button
            onClick={() => navigate(`/lesson/${next.id}`)}
            className="text-sm bg-panel2 border border-line rounded-lg px-3 py-2 hover:border-accent/50 text-right"
          >
            {next.id} {next.title} →
          </button>
        ) : (
          <Link to="/startup" className="text-sm bg-accent text-ink font-semibold rounded-lg px-3 py-2">
            View my company →
          </Link>
        )}
      </nav>
    </div>
  )
}
