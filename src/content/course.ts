// The full course roadmap — the 12-module dependency-ordered arc. Only Module 5
// is authored deep in this build; the rest render as "planned" so the learner
// sees the whole compile pipeline they're working through.

export interface RoadmapModule {
  id: number
  title: string
  artifact: string
  status: 'authored' | 'planned'
}

export const ROADMAP: RoadmapModule[] = [
  { id: 0, title: 'Bootstrapping: the business stack for engineers', artifact: 'initialize startup.json + thesis', status: 'planned' },
  { id: 1, title: 'Microeconomics for people who optimize things', artifact: 'market-forces memo', status: 'planned' },
  { id: 2, title: 'Problem discovery & the customer as a system under test', artifact: 'validated problem + ICP', status: 'planned' },
  { id: 3, title: 'Market & competition: sizing and structure', artifact: 'market sizing + competitive matrix', status: 'planned' },
  { id: 4, title: 'Product-market fit & positioning', artifact: 'positioning + value prop + PMF metric', status: 'planned' },
  { id: 5, title: 'Unit economics: the cost function of a business', artifact: 'unit-economics model', status: 'authored' },
  { id: 6, title: 'Pricing & packaging', artifact: 'pricing page', status: 'planned' },
  { id: 7, title: 'Marketing & go-to-market', artifact: 'GTM plan', status: 'planned' },
  { id: 8, title: 'Sales & distribution', artifact: 'sales playbook', status: 'planned' },
  { id: 9, title: 'Accounting & financial modeling', artifact: '12–24mo financial model', status: 'planned' },
  { id: 10, title: 'Fundraising & capital', artifact: 'cap table + pitch outline', status: 'planned' },
  { id: 11, title: 'Legal, incorporation & operations', artifact: 'incorporation checklist + equity terms', status: 'planned' },
  { id: 12, title: 'Strategy & synthesis: linking the binary', artifact: 'complete startup dossier', status: 'planned' },
]
