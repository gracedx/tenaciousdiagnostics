import Link from "next/link";
import { FOOTER } from "@/content/home";

export default function Footer() {
  return (
    <footer className="bg-brand-text text-white">
      <div className="section-container py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-teal-600 flex items-center justify-center">
                <span className="text-white font-bold text-sm">TD</span>
              </div>
              <span className="font-semibold text-white text-base">
                Tenacious <span className="text-teal-400">Diagnostics</span>
              </span>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed">
              Pioneering the first implantable therapy for dysphagia.
            </p>
            <a
              href={`mailto:${FOOTER.contactEmail}`}
              className="mt-4 inline-block text-teal-400 hover:text-teal-300 text-sm transition-colors"
            >
              {FOOTER.contactEmail}
            </a>
          </div>

          {FOOTER.links.map((section) => (
            <div key={section.section}>
              <h4 className="font-semibold text-white text-sm uppercase tracking-wider mb-4">
                {section.section}
              </h4>
              <ul className="space-y-2">
                {section.items.map((item) => (
                  <li key={item.label}>
                    <Link
                      href={item.href}
                      className="text-slate-400 hover:text-teal-400 text-sm transition-colors"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 pt-8 border-t border-slate-700">
          <p className="text-slate-500 text-xs leading-relaxed max-w-2xl">
            {FOOTER.disclaimer}
          </p>
          <p className="mt-4 text-slate-600 text-xs">
            © {new Date().getFullYear()} Tenacious Diagnostics, Inc. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
