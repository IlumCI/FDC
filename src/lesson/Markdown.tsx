import ReactMarkdown from 'react-markdown'
import remarkMath from 'remark-math'
import rehypeKatex from 'rehype-katex'

// Single markdown renderer for all authored prose. Supports inline/block LaTeX
// ($x$ / $$…$$) via KaTeX so formulas render properly — this audience expects
// real math, not ascii approximations.
export function Markdown({ children }: { children: string }) {
  return (
    <div className="prose-fdc">
      <ReactMarkdown remarkPlugins={[remarkMath]} rehypePlugins={[rehypeKatex]}>
        {children}
      </ReactMarkdown>
    </div>
  )
}
