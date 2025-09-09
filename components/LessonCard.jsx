import Link from 'next/link';

export default function LessonCard({ href, title, desc, done }){
  return (
    <Link href={href} className="card p-5 block card-hover">
      <div className="flex items-center justify-between gap-3">
        <div className="text-lg font-semibold">{title}</div>
        {done && (
          <span className="badge border border-green-500/30 bg-green-500/10 text-green-300">✓</span>
        )}
      </div>
      <p className="mt-2 text-zinc-300">{desc}</p>
    </Link>
  );
}
