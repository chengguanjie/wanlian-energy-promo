import React from 'react';
import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  Cell
} from 'recharts';
import { ADVANTAGES_TEXT, COMPARISON_DATA_COST, COMPARISON_DATA_LIFESPAN } from '../constants';
import { TrendingUp, Sparkles, Coins, Factory, Microscope, Droplets } from 'lucide-react';
import { motion } from 'framer-motion';

// Mapping icons to the 6 advantages in order
const ICONS = [Sparkles, Microscope, Droplets, Coins, TrendingUp, Factory];

const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-slate-800 border border-slate-700 p-3 rounded shadow-xl print:bg-white print:border-slate-200">
        <p className="text-slate-200 font-semibold mb-1 print:text-slate-900">{label}</p>
        <p className="text-brand-400 print:text-brand-600">数值: {payload[0].value}%</p>
      </div>
    );
  }
  return null;
};

const Advantages: React.FC = () => {
  return (
    <section className="py-24 bg-slate-950 relative print:bg-white print:py-10">
      <div className="container mx-auto px-6">
        
        {/* Header Section */}
        <div className="text-center mb-16 print:text-left print:mb-10">
           <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
           >
            <div className="inline-flex items-center gap-2 text-brand-500 font-semibold tracking-wider uppercase mb-4 print:text-brand-700 justify-center print:justify-start">
              <TrendingUp className="w-5 h-5" />
              <span>核心竞争力</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 print:text-slate-900">
              打破传统 <span className="text-brand-500 print:text-brand-600">定义新标准</span>
            </h2>
            <p className="text-slate-400 max-w-3xl mx-auto text-lg print:text-slate-600 print:mx-0">
              万联 M70 高纯致密莫来石攻克了传统电熔工艺的痛点，通过六大核心优势，
              不仅提供更优质的材料，更为客户创造真实的经济价值。
            </p>
          </motion.div>
        </div>

        {/* Grid of Cards - Primary Focus */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20 print:mb-12">
          {ADVANTAGES_TEXT.map((item, index) => {
            const Icon = ICONS[index];
            return (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-slate-900 border-l-4 border-brand-500 p-6 rounded-r-xl border-y border-r border-y-slate-800 border-r-slate-800 hover:bg-slate-800 transition-colors shadow-lg print:bg-orange-50 print:border-brand-500 print:border-y-orange-100 print:border-r-orange-100 print:shadow-none break-inside-avoid"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg flex items-center justify-center bg-brand-900/20 text-brand-400 print:bg-white print:text-brand-600 print:border print:border-brand-200">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h4 className="text-xl font-bold text-white print:text-slate-900">{item.title}</h4>
                </div>
                <p className="text-slate-400 text-base leading-relaxed print:text-slate-700">{item.content}</p>
              </motion.div>
            );
          })}
        </div>

        {/* Supporting Data Charts - Secondary Focus */}
        <div className="grid lg:grid-cols-2 gap-8 print:gap-8">
          {/* Chart Container 1 */}
           <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-slate-900/50 rounded-2xl p-8 border border-slate-800 print:bg-white print:border-slate-200 break-inside-avoid"
          >
            <div className="mb-6 flex items-center justify-between">
              <h3 className="text-lg font-bold text-white print:text-slate-900 flex items-center gap-2">
                <Coins className="w-5 h-5 text-brand-500" /> 成本效益对比
              </h3>
              <span className="text-xs text-slate-500 bg-slate-950 px-2 py-1 rounded border border-slate-800 print:bg-slate-100 print:border-slate-200">采购成本指数 (低优)</span>
            </div>
            <div className="h-48">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={COMPARISON_DATA_COST} layout="vertical" margin={{ top: 5, right: 30, left: 40, bottom: 5 }}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#475569" horizontal={false} strokeOpacity={0.3} />
                  <XAxis type="number" hide />
                  <YAxis dataKey="name" type="category" stroke="#94a3b8" tick={{fill: '#94a3b8', fontSize: 12}} width={80} />
                  <Tooltip content={<CustomTooltip />} cursor={{fill: 'rgba(148, 163, 184, 0.1)'}} />
                  <Bar dataKey="value" radius={[0, 4, 4, 0]} barSize={20}>
                    {COMPARISON_DATA_COST.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={index === 1 ? '#f97316' : '#64748b'} />
                    ))}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </div>
            <p className="mt-4 text-sm text-slate-400 print:text-slate-600">
              M70方案可将初始采购成本降低 <span className="text-brand-400 font-bold">20%</span>，显著优化项目预算。
            </p>
          </motion.div>

          {/* Chart Container 2 */}
           <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-slate-900/50 rounded-2xl p-8 border border-slate-800 print:bg-white print:border-slate-200 break-inside-avoid"
          >
             <div className="mb-6 flex items-center justify-between">
              <h3 className="text-lg font-bold text-white print:text-slate-900 flex items-center gap-2">
                <TrendingUp className="w-5 h-5 text-brand-500" /> 使用寿命对比
              </h3>
              <span className="text-xs text-slate-500 bg-slate-950 px-2 py-1 rounded border border-slate-800 print:bg-slate-100 print:border-slate-200">耐用性指数 (高优)</span>
            </div>
            <div className="h-48">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={COMPARISON_DATA_LIFESPAN} layout="vertical" margin={{ top: 5, right: 30, left: 40, bottom: 5 }}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#475569" horizontal={false} strokeOpacity={0.3} />
                  <XAxis type="number" hide />
                  <YAxis dataKey="name" type="category" stroke="#94a3b8" tick={{fill: '#94a3b8', fontSize: 12}} width={80} />
                  <Tooltip content={<CustomTooltip />} cursor={{fill: 'rgba(148, 163, 184, 0.1)'}} />
                  <Bar dataKey="value" radius={[0, 4, 4, 0]} barSize={20}>
                    {COMPARISON_DATA_LIFESPAN.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={index === 1 ? '#f97316' : '#64748b'} />
                    ))}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </div>
            <p className="mt-4 text-sm text-slate-400 print:text-slate-600">
              凭借优异的抗热震性，M70使用寿命提升 <span className="text-brand-400 font-bold">30%</span>，减少停机维护损失。
            </p>
          </motion.div>
        </div>

      </div>
      <div className="hidden print:block w-full h-0 break-after-page"></div>
    </section>
  );
};

export default Advantages;