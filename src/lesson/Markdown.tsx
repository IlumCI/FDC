import ReactMarkdown from 'react-markdown'
import remarkMath from 'remark-math'
import rehypeKatex from 'rehype-katex'

// Currency `$` in prose collides with KaTeX's `$…$` inline-math delimiters
// (e.g. "$40 ... $9" gets parsed as a math span). We escape any `$` that is
// immediately followed by a digit or minus sign — currency always is, and our
// authored math never *opens* with `$<digit>` (see module-05 content). Math's
// own escaped `\$31` is skipped by the negative lookbehind, so real formulas
// are untouched.
function escapeCurrency(md: string): string {
  return md.replace(/(?<!\\)\$(?=[\d\-−])/g, '\\$&')
}

// Single markdown renderer for all authored prose. Supports inline/block LaTeX
// ($x$ / $$…$$) via KaTeX so formulas render properly — this audience expects
// real math, not ascii approximations.
export function Markdown({ children }: { children: string }) {
  return (
    <div className="prose-fdc">
      <ReactMarkdown remarkPlugins={[remarkMath]} rehypePlugins={[rehypeKatex]}>
        {escapeCurrency(children)}
      </ReactMarkdown>
    </div>
  )
}
