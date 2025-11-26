import React from 'react';
import { Rocket, Target, Building2 } from 'lucide-react';

const Roadmap: React.FC = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-slate-900 to-slate-950 print:bg-white print:from-white print:to-white print:py-10">
      <div className="container mx-auto px-6 text-center">
        <div className="inline-flex items-center gap-2 text-brand-500 font-semibold tracking-wider uppercase mb-4 print:text-brand-700">
          <Rocket className="w-5 h-5" />
          <span>未来愿景</span>
        </div>
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-16 print:text-slate-900">万联下一个 <span className="text-brand-500 print:text-brand-600">五年计划</span></h2>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          
          {/* Card 1 */}
          <div className="bg-slate-800/30 p-8 rounded-2xl border border-slate-700 backdrop-blur-sm relative overflow-hidden group hover:bg-slate-800/50 transition-all print-reset-bg break-inside-avoid">
            <div className="absolute -right-6 -top-6 w-24 h-24 bg-brand-500/10 rounded-full group-hover:bg-brand-500/20 transition-colors print:hidden"></div>
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-slate-900 rounded-full flex items-center justify-center border border-slate-700 mb-6 text-brand-400 shadow-lg print:bg-slate-100 print:border-slate-200 print:text-brand-600 print:shadow-none">
                <Target className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-2 print:text-slate-900">2027年目标</h3>
              <div className="h-1 w-12 bg-brand-500 mb-6 rounded-full"></div>
              <p className="text-slate-300 leading-relaxed mb-4 print:text-slate-600">
                建设年产 <span className="text-white font-bold print:text-slate-900">1.5万吨</span> 莫来卡特独立生产线
              </p>
              <p className="text-slate-400 text-sm print:text-slate-500">
                产品50%出口海外，预计新增产值 <span className="text-brand-400 font-bold print:text-brand-600">4500万元</span>
              </p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-slate-800/30 p-8 rounded-2xl border border-slate-700 backdrop-blur-sm relative overflow-hidden group hover:bg-slate-800/50 transition-all print-reset-bg break-inside-avoid">
            <div className="absolute -right-6 -top-6 w-24 h-24 bg-blue-500/10 rounded-full group-hover:bg-blue-500/20 transition-colors print:hidden"></div>
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-slate-900 rounded-full flex items-center justify-center border border-slate-700 mb-6 text-blue-400 shadow-lg print:bg-slate-100 print:border-slate-200 print:text-blue-600 print:shadow-none">
                <Building2 className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-2 print:text-slate-900">2028-2030 资本运作</h3>
              <div className="h-1 w-12 bg-blue-500 mb-6 rounded-full"></div>
              <p className="text-slate-300 leading-relaxed mb-4 print:text-slate-600">
                实施上市公司并购或 <span className="text-white font-bold print:text-slate-900">独立上市</span>
              </p>
              <p className="text-slate-400 text-sm print:text-slate-500">
                借力资本市场，打造国家级优质耐火原料基地
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Roadmap;