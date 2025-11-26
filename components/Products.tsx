import React from 'react';
import { PRODUCTS } from '../constants';
import { Layers, CheckCircle2, Box } from 'lucide-react';
import { motion } from 'framer-motion';

const Products: React.FC = () => {
  return (
    <section id="products" className="py-24 bg-slate-900 print:bg-white print:py-10">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 print:mb-10 print:text-left">
          <div className="inline-flex items-center gap-2 text-brand-500 font-semibold tracking-wider uppercase mb-4 print:text-brand-700">
            <Box className="w-5 h-5" />
            <span>核心产品</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-white print:text-slate-900">卓越品质 <span className="text-brand-500 print:text-brand-600">M70系列</span></h2>
          <p className="text-slate-400 mt-4 max-w-2xl mx-auto print:text-slate-600 print:mx-0">
            我们的产品广泛应用于钢铁冶金、陶瓷窑具、玻璃及石化行业。
            其中M70高纯致密莫来石代表了行业顶尖水准。
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 print:grid-cols-2 print:gap-6">
          {PRODUCTS.map((product, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`group relative p-8 rounded-2xl transition-all duration-300 border break-inside-avoid
                ${product.highlight 
                  ? 'bg-gradient-to-b from-slate-800 to-slate-900 border-brand-500/50 shadow-xl shadow-brand-900/20 print:bg-white print:border-brand-300 print:shadow-none' 
                  : 'bg-slate-800/50 border-slate-700 hover:border-slate-600 hover:bg-slate-800 print:bg-white print:border-slate-200'}
              `}
            >
              {product.highlight && (
                <div className="absolute -top-3 right-8 px-3 py-1 bg-brand-600 text-white text-xs font-bold uppercase tracking-wide rounded-full shadow-lg print:bg-brand-100 print:text-brand-700 print:border print:border-brand-200 print:shadow-none">
                  旗舰产品
                </div>
              )}

              <div className={`w-12 h-12 rounded-lg mb-6 flex items-center justify-center 
                ${product.highlight ? 'bg-brand-500 text-white print:bg-brand-600' : 'bg-slate-700 text-slate-300 group-hover:bg-brand-500/20 group-hover:text-brand-400 print:bg-slate-100 print:text-slate-600'}`}>
                <Layers className="w-6 h-6" />
              </div>

              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-brand-400 transition-colors print:text-slate-900">
                {product.name}
              </h3>
              <p className="text-slate-400 text-sm mb-6 leading-relaxed h-16 overflow-hidden print:text-slate-600 print:h-auto">
                {product.description}
              </p>

              <div className="space-y-3">
                <div className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2 print:text-slate-500">产品特性</div>
                {product.features.slice(0, 3).map((feature, fIndex) => (
                  <div key={fIndex} className="flex items-start gap-2 text-sm text-slate-300 print:text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-brand-500 shrink-0 mt-0.5 print:text-brand-600" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>

              <div className="mt-6 pt-6 border-t border-slate-700/50 print:border-slate-100">
                <div className="flex flex-wrap gap-2">
                  {product.applications.map((app, aIndex) => (
                    <span key={aIndex} className="text-xs px-2 py-1 rounded bg-slate-950 text-slate-400 border border-slate-800 print:bg-slate-50 print:text-slate-600 print:border-slate-200">
                      {app}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      <div className="hidden print:block w-full h-0 break-after-page"></div>
    </section>
  );
};

export default Products;