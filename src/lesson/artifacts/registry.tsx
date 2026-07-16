import type { ArtifactKey } from '../types'
import { UnitEconomicsArtifact } from './UnitEconomicsArtifact'

// Maps an authored lesson's artifact key to its interactive component. New
// modules register their artifacts here; the lesson engine stays generic.
export const ARTIFACTS: Record<ArtifactKey, (props: { lessonId: string }) => JSX.Element> = {
  'unit-economics': UnitEconomicsArtifact,
}
