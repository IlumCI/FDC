import { useParams, Link } from 'react-router-dom'
import { getLesson } from '../content'
import { LessonPlayer } from '../player/LessonPlayer'

export function LessonPage() {
  const { id } = useParams()
  const found = id ? getLesson(id) : undefined

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

  // The player is full-screen (fixed inset-0), so it renders over the app shell.
  return <LessonPlayer key={found.lesson.id} lesson={found.lesson} />
}
