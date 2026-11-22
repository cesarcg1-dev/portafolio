export function Footer() {
  return (
    <footer className="border-t border-slate-200 py-8 mt-16">
      <div className="max-w-6xl mx-auto px-4 flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-slate-600">
        <p>
          © {new Date().getFullYear()} ChacDev. Todos los derechos reservados.
        </p>
        <div className="flex gap-4">
          <a
            href="https://github.com/cesarcg1-dev"
            target="_blank"
            rel="noreferrer"
            className="hover:text-slate-900"
          >
            GitHub
          </a>
          <a href="mailto:cesarcg1@gmail.com" className="hover:text-slate-900">
            cesarcg1@gmail.com
          </a>
        </div>
      </div>
    </footer>
  );
}
