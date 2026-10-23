import Link from "next/link";

// Turns "[^1]" markers in data text into superscript reference numbers.
function RichText({ text }) {
  const parts = text.split(/\[\^(\d+)\]/);
  return parts.map((part, i) => (i % 2 === 1 ? <sup key={i}>{part}</sup> : part));
}

function Quote({ text }) {
  return (
    <blockquote className="my-6 pl-5 border-l-4 border-[#0E2253] bg-[#F1EEEA] rounded-r-xl py-5 pr-6">
      <p className="text-base sm:text-lg text-[#0E2253] font-light italic leading-relaxed">
        “<RichText text={text} />”
      </p>
    </blockquote>
  );
}

function Steps({ items }) {
  return (
    <div className="space-y-3">
      {items.map((item, i) => (
        <div
          key={i}
          className="relative flex gap-4 sm:gap-5 rounded-2xl border border-gray-200 p-5 sm:p-6"
          style={{ marginLeft: `${i * 12}px` }}
        >
          <div className="shrink-0 w-10 h-10 rounded-xl bg-[#0E2253] text-white text-sm font-bold flex items-center justify-center">
            {i + 1}
          </div>
          <div>
            <h3 className="text-sm font-bold uppercase tracking-widest text-[#0E2253] mb-1.5">{item.term}</h3>
            <p className="text-sm sm:text-base text-gray-700 leading-relaxed mb-2">
              <RichText text={item.def} />
            </p>
            {item.eg && (
              <p className="text-sm text-gray-500 leading-relaxed">
                <span className="font-semibold text-gray-600">Example: </span>
                <RichText text={item.eg} />
              </p>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}

function Cards({ topLabel, bottomLabel, items }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
      {items.map((item, i) => (
        <div key={i} className="rounded-2xl border border-gray-200 p-5 bg-gray-50/60">
          {topLabel && (
            <p className="text-[10px] font-bold uppercase tracking-widest text-[#0E2253]/50 mb-1">{topLabel}</p>
          )}
          <p className="text-sm font-bold text-gray-900 mb-3">{item.title}</p>
          {bottomLabel && (
            <p className="text-[10px] font-bold uppercase tracking-widest text-[#0E2253]/50 mb-2">{bottomLabel}</p>
          )}
          <p className="text-sm text-gray-600 leading-relaxed">
            <RichText text={item.text} />
          </p>
        </div>
      ))}
    </div>
  );
}

function Table({ columns, rows }) {
  return (
    <div className="my-6 overflow-x-auto rounded-2xl border border-gray-200 shadow-sm">
      <table className="w-full text-left border-collapse">
        <thead>
          <tr className="bg-[#0E2253]">
            {columns.map((col, i) => (
              <th
                key={i}
                className={`px-5 sm:px-6 py-4 text-xs sm:text-sm font-bold uppercase tracking-widest text-white ${
                  i > 0 ? "text-center border-l border-white/15" : ""
                }`}
              >
                {col}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, r) => (
            <tr key={r} className="border-t border-gray-200 bg-white">
              {row.map((cell, c) => (
                <td
                  key={c}
                  className={`px-5 sm:px-6 py-4 text-sm sm:text-base leading-relaxed ${
                    c > 0 ? "text-center font-semibold text-[#0E2253] border-l border-gray-200" : "text-gray-700"
                  }`}
                >
                  <RichText text={cell} />
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function Block({ block, isLast }) {
  switch (block.type) {
    case "paragraph":
      return (
        <p className={`text-sm sm:text-base text-gray-600 leading-relaxed ${isLast ? "" : "mb-3"}`}>
          <RichText text={block.text} />
        </p>
      );
    case "quote":
      return <Quote text={block.text} />;
    case "steps":
      return <Steps items={block.items} />;
    case "cards":
      return <Cards {...block} />;
    case "table":
      return <Table {...block} />;
    case "list":
      return (
        <ul className={`list-disc pl-5 space-y-2 text-sm sm:text-base text-gray-600 leading-relaxed ${isLast ? "" : "mb-3"}`}>
          {block.items.map((item, i) => (
            <li key={i}>
              <RichText text={item} />
            </li>
          ))}
        </ul>
      );
    default:
      return null;
  }
}

export default function ResearchArticle({ article }) {
  const { author } = article;

  return (
    <>
      {/* Hero */}
      <div className="relative bg-[#0E2253] overflow-hidden">
        {/* Background image + navy overlay (keeps the white text readable) */}
        <div className="absolute inset-0">
          <img
            src={article.bannerImage}
            alt=""
            aria-hidden="true"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0E2253] via-[#0E2253]/90 to-[#0E2253]/70" />
        </div>

        <div className="absolute -right-40 -top-40 w-[600px] h-[600px] rounded-full bg-white/[0.03] pointer-events-none" />
        <div className="absolute -right-20 bottom-0 w-[400px] h-[400px] rounded-full bg-white/[0.03] pointer-events-none" />
        <div className="absolute left-0 bottom-0 right-0 h-px bg-white/10 pointer-events-none" />

        <div className="relative mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-24 pt-36 pb-16 sm:pb-20">
          <div className="flex items-center gap-3 mb-8">
            <Link
              href="/latest-research"
              className="px-3 py-1 rounded-full border border-white/20 bg-white/5 text-xs font-bold tracking-widest text-white/70 uppercase hover:bg-white/10 transition-colors"
            >
              Latest Research
            </Link>
            <span className="text-white/30">·</span>
            <span className="px-3 py-1 rounded-full border border-white/20 bg-white/5 text-xs font-bold tracking-widest text-white/70 uppercase">
              {article.category}
            </span>
          </div>

          <div className="max-w-4xl">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-light text-white leading-[1.1] tracking-tight mb-3">
              {article.title}
            </h1>
            {article.subtitle && (
              <p className="text-lg sm:text-xl text-white/45 font-light italic mb-5 leading-relaxed">
                {article.subtitle}
              </p>
            )}
            <div className="w-16 h-0.5 bg-white/25 mb-6" />

            <div className="flex flex-wrap items-center gap-6 sm:gap-8">
              <div>
                <p className="text-white/35 text-xs uppercase tracking-widest mb-1">Author</p>
                <p className="font-semibold text-white text-sm">{author.name}</p>
                <p className="text-white/45 text-xs mt-0.5">{author.role}</p>
              </div>
              <div className="w-px h-10 bg-white/15 hidden sm:block" />
              <div>
                <p className="text-white/35 text-xs uppercase tracking-widest mb-1">Published</p>
                <p className="font-medium text-white/80 text-sm">{article.published}</p>
              </div>
              <div className="w-px h-10 bg-white/15 hidden sm:block" />
              <div>
                <p className="text-white/35 text-xs uppercase tracking-widest mb-1">Read Time</p>
                <p className="font-medium text-white/80 text-sm">{article.readTime}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Highlights strip */}
      {article.highlights?.length > 0 && (
        <div className="bg-[#F1EEEA] border-b border-[#E8E3DE]">
          <div className="mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-24 py-5">
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-8">
              {article.highlights.map((h, i) => (
                <div key={i}>
                  <p className="text-[10px] font-bold tracking-widest text-[#0E2253]/40 uppercase mb-1">{h.label}</p>
                  <p className="text-sm font-bold text-[#0E2253]">{h.value}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Content */}
      <main className="mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-24 py-16 sm:py-20">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 mx-auto">

          {/* Article body */}
          <article className="flex-1 min-w-0">

            {/* Lead */}
            {article.lead && (
              <div className="relative pl-6 mb-10 border-l-4 border-[#0E2253]">
                <p className="text-lg sm:text-xl text-gray-800 leading-relaxed font-light">
                  <RichText text={article.lead} />
                </p>
              </div>
            )}

            {/* Sections */}
            {article.sections.map((section) => (
              <section key={section.id} id={section.id} className="scroll-mt-32 mb-14">
                <div className="mb-5">
                  <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-2">{section.heading}</h2>
                  <div className="w-10 h-0.5 bg-[#0E2253]/20 rounded-full" />
                </div>
                {section.blocks.map((block, i) => (
                  <Block key={i} block={block} isLast={i === section.blocks.length - 1} />
                ))}
              </section>
            ))}

            {/* Conclusion */}
            {article.conclusion && (
              <div className="relative bg-[#0E2253] rounded-2xl p-8 sm:p-10 mb-8 overflow-hidden">
                <div className="absolute -right-16 -bottom-16 w-56 h-56 rounded-full bg-white/[0.04] pointer-events-none" />
                <div className="absolute -right-8 -bottom-8 w-36 h-36 rounded-full bg-white/[0.04] pointer-events-none" />
                <div className="relative">
                  <p className="text-[10px] font-bold tracking-widest text-white/35 uppercase mb-4">
                    {article.conclusion.label}
                  </p>
                  <p className="text-sm sm:text-base text-white font-medium leading-relaxed">
                    <RichText text={article.conclusion.text} />
                  </p>
                </div>
              </div>
            )}

            {/* About the Author */}
            <div className="bg-[#F1EEEA] rounded-2xl p-6 sm:p-8 mb-12">
              <p className="text-[10px] font-bold tracking-widest text-[#0E2253]/50 uppercase mb-6">About the Author</p>
              <div className="flex items-start gap-4">
                <img
                  src={author.image}
                  alt={author.name}
                  className="w-14 h-14 rounded-full object-cover shrink-0"
                />
                <div>
                  <p className="text-sm font-bold text-gray-900 mb-0.5">{author.name}</p>
                  <p className="text-xs font-medium text-[#0E2253] mb-2">{author.role}</p>
                  {author.bio && <p className="text-xs text-gray-500 leading-relaxed">{author.bio}</p>}
                </div>
              </div>
            </div>

            {/* References */}
            {article.references?.length > 0 && (
              <div className="mb-4">
                <p className="text-[10px] font-bold tracking-widest text-gray-400 uppercase mb-5">References</p>
                <ol className="space-y-3">
                  {article.references.map((ref, i) => (
                    <li key={i} className="flex items-start gap-3.5">
                      <span className="shrink-0 w-6 h-6 rounded-full bg-gray-100 text-xs font-bold text-gray-400 flex items-center justify-center mt-0.5">
                        {i + 1}
                      </span>
                      <span className="text-sm text-gray-500 leading-relaxed">{ref}</span>
                    </li>
                  ))}
                </ol>
              </div>
            )}
          </article>

          {/* Sidebar */}
          <aside className="lg:w-60 lg:shrink-0">
            <div className="lg:sticky lg:top-32 space-y-5">

              {/* Author card */}
              <div className="rounded-2xl border border-gray-100 overflow-hidden shadow-sm">
                <div className="bg-[#0E2253] px-5 py-3">
                  <p className="text-[10px] font-bold tracking-widest text-white/50 uppercase">Author</p>
                </div>
                <div className="p-5 flex items-center gap-3">
                  <img
                    src={author.image}
                    alt={author.name}
                    className="w-9 h-9 rounded-full object-cover shrink-0"
                  />
                  <div>
                    <p className="text-xs font-bold text-gray-900 leading-tight">{author.name}</p>
                    <p className="text-[11px] text-gray-400 mt-0.5">{author.role}</p>
                  </div>
                </div>
              </div>

              {/* Contents (built from the article sections) */}
              <div className="p-5 bg-white border border-gray-100 rounded-2xl shadow-sm">
                <p className="text-[10px] font-bold tracking-widest text-gray-400 uppercase mb-4">Contents</p>
                <ol className="space-y-3">
                  {article.sections.map((s, i) => (
                    <li key={s.id} className="flex items-start gap-2.5">
                      <span className="shrink-0 w-5 h-5 rounded-full bg-[#0E2253]/10 text-[#0E2253] text-[10px] font-bold flex items-center justify-center mt-0.5">
                        {i + 1}
                      </span>
                      <a href={`#${s.id}`} className="text-xs text-gray-600 hover:text-[#0E2253] leading-relaxed transition-colors">
                        {s.heading}
                      </a>
                    </li>
                  ))}
                </ol>
              </div>

              {/* Related */}
              {article.related?.length > 0 && (
                <div className="p-5 bg-gray-50 rounded-2xl">
                  <p className="text-[10px] font-bold tracking-widest text-gray-400 uppercase mb-4">Related</p>
                  {article.related.map((link, i) => (
                    <div key={link.href}>
                      {i > 0 && <div className="h-px bg-gray-200 mb-3" />}
                      <Link
                        href={link.href}
                        className={`flex items-center justify-between text-sm font-medium text-[#0E2253] hover:underline ${
                          i < article.related.length - 1 ? "mb-3" : ""
                        }`}
                      >
                        <span>{link.label}</span>
                        <span className="text-gray-400 shrink-0 ml-2">→</span>
                      </Link>
                    </div>
                  ))}
                </div>
              )}

              {/* CTA */}
              {article.cta && (
                <div className="relative bg-[#0E2253] rounded-2xl p-5 overflow-hidden">
                  <div className="absolute -right-8 -bottom-8 w-32 h-32 rounded-full bg-white/[0.05] pointer-events-none" />
                  <div className="relative">
                    <p className="text-[10px] font-bold tracking-widest text-white/45 uppercase mb-3">{article.cta.label}</p>
                    <p className="text-xs text-white/65 leading-relaxed mb-5">{article.cta.text}</p>
                    <Link
                      href={article.cta.href}
                      className="block text-center text-[11px] font-bold text-[#0E2253] bg-white px-4 py-2.5 rounded-lg hover:bg-white/90 transition-colors uppercase tracking-widest"
                    >
                      {article.cta.buttonText}
                    </Link>
                  </div>
                </div>
              )}

            </div>
          </aside>

        </div>
      </main>
    </>
  );
}
