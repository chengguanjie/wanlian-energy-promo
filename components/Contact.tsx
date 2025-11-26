import React from 'react';

const Contact: React.FC = () => {
  return (
    <footer id="contact" className="bg-slate-950 border-t border-slate-900 pt-20 pb-10 print:bg-white print:text-black print:pt-10 print:border-t-2 print:border-slate-200">
      <div className="container mx-auto px-6">
        
        {/* CTA Box - Hidden in print to save space/ink */}
        <div className="bg-brand-600 rounded-3xl p-8 md:p-16 text-center mb-20 relative overflow-hidden print:hidden">
          <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
          <div className="relative z-10">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">准备好加入我们了吗？</h2>
            <p className="text-brand-100 max-w-2xl mx-auto mb-8 text-lg">
              我们正在寻找充满激情的人才，共同推动耐火材料行业的革新。
              如果您渴望在一个快速发展、技术领先的企业中实现自我价值，万联是您的最佳选择。
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="tel:13903503564" className="px-8 py-3 border-2 border-white/30 text-white font-bold rounded-full hover:bg-white/10 transition-colors inline-block">
                联系人力资源部：139 0350 3564
              </a>
            </div>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Contact;