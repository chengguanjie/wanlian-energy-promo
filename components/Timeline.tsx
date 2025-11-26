import React from 'react';
import { TIMELINE } from '../constants';
import { Milestone } from '../types';
import { motion } from 'framer-motion';
import { History } from 'lucide-react';

const TimelineItem: React.FC<{ item: Milestone; index: number }> = ({ item, index }) => {
  const isEven = index % 2 === 0;
  
  return (
    <motion.div 
      initial={{ opacity: 0, x: isEven ? -50 : 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className={`flex items-center justify-between w-full mb-12 relative ${isEven ? 'flex-row-reverse' : ''} print:flex-row print:mb-8 print:block`}
    >
      {/* Spacer for web layout - hidden/adjusted in print */}
      <div className="hidden md:block w-5/12 print:hidden"></div>
      
      {/* Center Dot */}
      <div className="absolute left-0 md:left-1/2 w-8 h-8 rounded-full bg-slate-900 border-2 border-brand-500 flex items-center justify-center transform md:-translate-x-1/2 z-10 shadow-[0_0_15px_rgba(249,115,22,0.5)] print:static print:translate-x-0 print:bg-white print:shadow-none print:w-6 print:h-6 print:mr-4">
        <div className="w-2 h-2 bg-brand-400 rounded-full print:bg-brand-600"></div>
      </div>
      
      {/* Content Card */}
      <div className={`w-full md:w-5/12 pl-12 md:pl-0 ${isEven ? 'md:pr-12 text-left md:text-right' : 'md:pl-12 text-left'} print:w-full print:pl-4 print:text-left`}>
        <div className="bg-slate-900/50 border border-slate-800 p-6 rounded-xl hover:border-brand-500/50 transition-colors shadow-lg backdrop-blur-sm print-reset-bg print:shadow-none print:p-4">
          <span className="inline-block px-3 py-1 mb-2 text-sm font-bold text-brand-300 bg-brand-900/30 rounded-full print:bg-slate-100 print:text-brand-700 print:border print:border-slate-200">
            {item.year}
          </span>
          <h3 className="text-xl font-bold text-white mb-3 print:text-slate-900">{item.title}</h3>
          <p className="text-slate-400 text-sm leading-relaxed print:text-slate-600">{item.description}</p>
        </div>
      </div>
    </motion.div>
  );
};

const Timeline: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-slate-950 relative overflow-hidden print:bg-white print:py-10 print:overflow-visible">
      {/* Top Gradient Line - Hidden in Print */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-slate-700 to-transparent print:hidden"></div>
      
      <div className="container mx-auto px-6">
        <div className="text-center mb-20 print:mb-10 print:text-left">
          <div className="inline-flex items-center gap-2 text-brand-500 font-semibold tracking-wider uppercase mb-4 print:text-brand-700">
            <History className="w-5 h-5" />
            <span>发展历程</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 print:text-slate-900">从创业到引领 <span className="text-slate-500 print:text-brand-600">行业标杆</span></h2>
          <p className="text-slate-400 max-w-2xl mx-auto print:text-slate-600 print:mx-0">
            二十余年深耕，从山西河曲走向世界。万联始终坚持技术驱动，化腐朽为神奇，
            将煤矸石转变为高附加值的耐火材料。
          </p>
        </div>

        <div className="relative max-w-5xl mx-auto">
          {/* Central Line */}
          <div className="absolute left-4 md:left-1/2 w-0.5 h-full bg-slate-800 transform md:-translate-x-1/2 print:bg-slate-200 print:left-3 print:translate-x-0"></div>
          
          {TIMELINE.map((item, index) => (
            <TimelineItem key={index} item={item} index={index} />
          ))}
        </div>
      </div>
      <div className="hidden print:block w-full h-0 break-after-page"></div>
    </section>
  );
};

export default Timeline;