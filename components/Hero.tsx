import React from 'react';
import { ChevronDown } from 'lucide-react';
import { motion } from 'framer-motion';
import { STATS } from '../constants';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex flex-col justify-center items-center overflow-hidden px-6 print:min-h-screen print:justify-start print:pt-20 print:bg-white">
      {/* Background Effects - Hidden in Print */}
      <div className="absolute inset-0 bg-slate-950 print:hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1565008447742-97f6f38c985c?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center opacity-20 mix-blend-overlay"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-950/80 to-slate-950"></div>
      </div>

      {/* Print Only Header Logo (since Navbar is hidden) */}
      <div className="hidden print:block absolute top-8 left-8">
         <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-brand-600 rounded-br-lg rounded-tl-lg print:bg-brand-600"></div>
          <div className="font-bold text-2xl text-slate-900">
            万联<span className="text-brand-600">节能</span>
          </div>
        </div>
      </div>

      <div className="relative z-10 max-w-5xl mx-auto text-center pt-20 print:pt-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight tracking-tight print:text-slate-900">
            筑造工业高温基石 <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-400 to-amber-200 print:text-brand-600 print:bg-none">
              引领耐材技术革新
            </span>
          </h1>
          <p className="text-lg md:text-xl text-slate-300 mb-10 max-w-2xl mx-auto leading-relaxed print:text-slate-600">
            山西河曲万联节能材料有限公司，诚邀您加入我们的团队。
            投身于高端莫来石与节能材料的研发、生产和销售，共创百亿级耐材市场未来。
          </p>
        </motion.div>

        {/* Stats Grid */}
        <motion.div 
           initial={{ opacity: 0, y: 40 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.8, delay: 0.4 }}
           className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-20 border-t border-slate-800 pt-10 print:border-slate-200 print:mt-12"
        >
          {STATS.map((stat, index) => (
            <div key={index} className="text-center print:text-left">
              <div className="text-3xl md:text-4xl font-bold text-white mb-1 print:text-brand-600">{stat.value}</div>
              <div className="text-xs md:text-sm text-brand-400 uppercase tracking-wider font-medium mb-1 print:text-slate-500">{stat.label}</div>
              <div className="text-xs text-slate-500 print:text-slate-400">{stat.subtext}</div>
            </div>
          ))}
        </motion.div>
      </div>

      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-slate-500 print:hidden"
      >
        <ChevronDown className="w-6 h-6" />
      </motion.div>
      
      {/* Print Page Break */}
      <div className="hidden print:block w-full h-0 break-after-page"></div>
    </section>
  );
};

export default Hero;