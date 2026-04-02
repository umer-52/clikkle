import Link from 'next/link';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

interface CallToActionProps {
  title: string;
  description: string;
  point1?: string;
  point2?: string;
  point3?: string;
  point4?: string;
  cta: string;
  url: string;
}

export function CallToAction({
  title,
  description,
  point1,
  point2,
  point3,
  point4,
  cta,
  url,
}: CallToActionProps) {
  const points = [point1, point2, point3, point4].filter(Boolean) as string[];

  return (
    <div className="not-prose my-10 rounded-2xl bg-gradient-to-br from-[#1a1a1e] to-[#2a2a30] p-8 md:p-10 border border-white/10 shadow-xl overflow-hidden relative">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_50%_50%_at_100%_0%,rgba(45,99,255,0.12)_0%,transparent_100%)] pointer-events-none" />
      
      <div className="relative z-10 flex flex-col md:flex-row gap-8 justify-between">
        <div className="flex-1 space-y-4">
          <h3 className="text-2xl font-semibold tracking-tight text-white mb-2">{title}</h3>
          <p className="text-[#9b9ba7] text-lg max-w-xl">{description}</p>
          
          {points.length > 0 && (
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-6">
              {points.map((point, index) => (
                <li key={index} className="flex items-center gap-2 text-[#c3c3c6]">
                  <CheckCircle2 className="w-5 h-5 text-[#2D63FF]" />
                  <span className="text-sm font-medium">{point}</span>
                </li>
              ))}
            </ul>
          )}
        </div>
        
        <div className="flex items-center md:items-start self-start md:self-auto mt-4 md:mt-0">
          <Link 
            href={url} 
            className="inline-flex items-center justify-center gap-2 rounded-lg bg-white px-6 py-3 font-semibold text-[#19191c] shadow-[inset_0_1px_0_rgba(255,255,255,0.9),0_2px_8px_rgba(0,0,0,0.08)] transition-colors hover:bg-gray-100 focus:ring-4 focus:ring-white/20 whitespace-nowrap"
          >
            {cta}
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}
