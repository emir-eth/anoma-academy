'use client';

export default function Footer(){
  return (
    <footer className="footer-grad">
      <div className="container py-10 text-sm text-zinc-400">
        <div className="border-t border-zinc-800/60 pt-4 flex items-center gap-2 justify-start">
          <span className="flex items-center gap-2">
            powered by
            <img src="/icons/x-logo.png" alt="X" className="h-4 w-4" />
            <a
              href="https://x.com/emir_ethh"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white"
            >
              emir_ethh
            </a>
          </span>
        </div>
      </div>
    </footer>
  );
}
