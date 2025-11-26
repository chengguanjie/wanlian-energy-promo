
import React, { useState, useEffect } from 'react';
import { JOB_OPENINGS } from '../constants';
import { JobPosition } from '../types';
import { Briefcase, X, CheckCircle2, Shield, Trophy, FileText, Phone, Mail, Copy, Check } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

// Apply Modal Component
const ApplyModal: React.FC<{ onClose: () => void }> = ({ onClose }) => {
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  const contactInfo = {
    phoneDisplay: "139 0350 3564",
    phoneValue: "13903503564",
    email: "xxxxx@126.com"
  };

  // Close on escape key
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, [onClose]);

  const handleCopy = (text: string, type: 'phone' | 'email') => {
    navigator.clipboard.writeText(text);
    if (type === 'phone') {
      setCopiedPhone(true);
      setTimeout(() => setCopiedPhone(false), 2000);
    } else {
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2000);
    }
  };

  return (
    <div className="fixed inset-0 z-[110] flex items-center justify-center p-4 print:hidden">
      <div className="absolute inset-0 bg-slate-950/80 backdrop-blur-sm" onClick={onClose}></div>
      <motion.div
        initial={{ opacity: 0, scale: 0.9, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.9, y: 20 }}
        className="relative bg-slate-900 w-full max-w-md rounded-2xl shadow-2xl border border-slate-700 p-6"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-xl font-bold text-white">申请方式</h3>
          <button onClick={onClose} className="text-slate-400 hover:text-white p-1 rounded-full hover:bg-slate-800 transition-colors">
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="space-y-4">
          {/* Phone */}
          <div className="bg-slate-800/50 p-4 rounded-xl border border-slate-700 flex items-center justify-between group hover:border-brand-500/30 transition-colors">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-brand-900/20 text-brand-500 flex items-center justify-center border border-brand-500/20 shrink-0">
                <Phone className="w-5 h-5" />
              </div>
              <div>
                <div className="text-slate-400 text-xs mb-1">联系电话</div>
                <div className="text-white font-mono font-semibold text-lg tracking-wide">{contactInfo.phoneDisplay}</div>
              </div>
            </div>
            <button
              onClick={() => handleCopy(contactInfo.phoneValue, 'phone')}
              className="p-2.5 text-slate-400 hover:text-white hover:bg-slate-700 rounded-lg transition-all active:scale-95"
              title="复制号码"
            >
              {copiedPhone ? <Check className="w-5 h-5 text-green-500" /> : <Copy className="w-5 h-5" />}
            </button>
          </div>

          {/* Email */}
          <div className="bg-slate-800/50 p-4 rounded-xl border border-slate-700 flex items-center justify-between group hover:border-brand-500/30 transition-colors">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-blue-900/20 text-blue-500 flex items-center justify-center border border-blue-500/20 shrink-0">
                <Mail className="w-5 h-5" />
              </div>
              <div>
                <div className="text-slate-400 text-xs mb-1">发送简历至</div>
                <div className="text-white font-mono font-semibold text-lg tracking-wide break-all">{contactInfo.email}</div>
              </div>
            </div>
            <button
              onClick={() => handleCopy(contactInfo.email, 'email')}
              className="p-2.5 text-slate-400 hover:text-white hover:bg-slate-700 rounded-lg transition-all active:scale-95"
              title="复制邮箱"
            >
              {copiedEmail ? <Check className="w-5 h-5 text-green-500" /> : <Copy className="w-5 h-5" />}
            </button>
          </div>
        </div>

        <div className="mt-6 text-center border-t border-slate-800 pt-4">
          <p className="text-slate-500 text-sm">
            投递简历时，请注明 <span className="text-brand-400">应聘岗位</span> 及 <span className="text-brand-400">姓名</span>
          </p>
        </div>
      </motion.div>
    </div>
  );
};

const JobModal: React.FC<{ job: JobPosition; onClose: () => void; onApply: () => void }> = ({ job, onClose, onApply }) => {
  // Close on escape key
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, [onClose]);

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 print:hidden">
      <div className="absolute inset-0 bg-slate-950/80 backdrop-blur-sm" onClick={onClose}></div>
      
      <motion.div 
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 20 }}
        className="relative bg-slate-900 w-full max-w-3xl max-h-[85vh] rounded-2xl shadow-2xl border border-slate-700 flex flex-col overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex justify-between items-start p-6 border-b border-slate-800 bg-slate-900 sticky top-0 z-10">
          <div>
            <h3 className="text-2xl font-bold text-white mb-2">{job.title}</h3>
             <div className="flex items-center gap-3 flex-wrap">
               <div className="flex items-center gap-1 text-brand-400 bg-brand-900/20 px-3 py-1 rounded-full border border-brand-500/20">
                  <span className="text-sm font-bold">{job.salaryRange}</span>
                  <span className="text-xs">万元/年</span>
                </div>
                <span className="text-slate-400 text-sm bg-slate-800 px-2 py-1 rounded">全职</span>
                <span className="text-slate-400 text-sm bg-slate-800 px-2 py-1 rounded">山西·河曲</span>
             </div>
          </div>
          <button 
            onClick={onClose}
            className="text-slate-400 hover:text-white hover:bg-slate-800 p-2 rounded-full transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Scrollable Content */}
        <div className="p-6 overflow-y-auto custom-scrollbar space-y-8">
          
          {/* Overview */}
          <section>
            <h4 className="text-lg font-bold text-white mb-3 flex items-center gap-2">
              <Briefcase className="w-5 h-5 text-brand-500" /> 岗位概述
            </h4>
            <p className="text-slate-300 leading-relaxed bg-slate-800/30 p-4 rounded-lg border border-slate-800">
              {job.detail.overview}
            </p>
          </section>

          {/* Responsibilities */}
          <section>
            <h4 className="text-lg font-bold text-white mb-3 flex items-center gap-2">
              <FileText className="w-5 h-5 text-brand-500" /> 主要职责
            </h4>
            <ul className="space-y-2">
              {job.detail.responsibilities.map((item, idx) => (
                <li key={idx} className="flex items-start gap-3 text-slate-300">
                  <div className="w-1.5 h-1.5 bg-brand-500 rounded-full mt-2.5 shrink-0"></div>
                  <span className="leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* Requirements */}
          <section>
            <h4 className="text-lg font-bold text-white mb-3 flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-brand-500" /> 任职资格与能力要求
            </h4>
            <div className="grid md:grid-cols-1 gap-3">
               {job.detail.requirements.map((item, idx) => (
                <div key={idx} className="flex items-start gap-3 text-slate-300 bg-slate-800/20 p-3 rounded border border-slate-800/50">
                  <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 shrink-0"></div>
                  <span className="leading-relaxed">{item}</span>
                </div>
              ))}
            </div>
          </section>

          {/* Authority (Optional) */}
          {job.detail.authority && job.detail.authority.length > 0 && (
            <section>
               <h4 className="text-lg font-bold text-white mb-3 flex items-center gap-2">
                <Shield className="w-5 h-5 text-brand-500" /> 关键权限
              </h4>
              <div className="flex flex-wrap gap-2">
                 {job.detail.authority.map((item, idx) => (
                  <span key={idx} className="text-xs bg-slate-800 text-slate-400 border border-slate-700 px-2 py-1 rounded">
                    {item}
                  </span>
                ))}
              </div>
            </section>
          )}

           {/* Benefits (Generic) */}
          <section className="border-t border-slate-800 pt-6">
             <h4 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                <Trophy className="w-5 h-5 text-brand-500" /> 加入我们，您将获得
              </h4>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {['具有竞争力的薪酬', '五险一金', '绩效奖金', '带薪年假', '专业培训', '晋升空间', '节日福利', '团队建设'].map((benefit, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-slate-400 text-sm">
                    <div className="w-1 h-1 bg-brand-400 rounded-full"></div>
                    {benefit}
                  </div>
                ))}
              </div>
          </section>

        </div>

        {/* Footer Actions */}
        <div className="p-6 border-t border-slate-800 bg-slate-900/95 sticky bottom-0 flex justify-end gap-4">
          <button 
            onClick={onClose}
            className="px-6 py-2.5 rounded-lg border border-slate-600 text-slate-300 hover:bg-slate-800 hover:text-white transition-colors"
          >
            关闭
          </button>
          <button 
            onClick={onApply}
            className="px-6 py-2.5 rounded-lg bg-brand-600 text-white font-semibold hover:bg-brand-500 transition-colors shadow-lg shadow-brand-900/20"
          >
            立即申请
          </button>
        </div>
      </motion.div>
    </div>
  );
};

const Jobs: React.FC = () => {
  const [selectedJob, setSelectedJob] = useState<JobPosition | null>(null);
  const [showApplyModal, setShowApplyModal] = useState(false);

  // Disable background scroll when modal is open
  useEffect(() => {
    if (selectedJob || showApplyModal) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [selectedJob, showApplyModal]);

  return (
    <section id="jobs" className="py-24 bg-slate-900 relative print:bg-white print:py-10">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 print:mb-8 print:text-left">
          <div className="inline-flex items-center gap-2 text-brand-500 font-semibold tracking-wider uppercase mb-4 print:text-brand-700">
            <Briefcase className="w-5 h-5" />
            <span>虚位以待</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-white print:text-slate-900">加入我们 <span className="text-brand-500 print:text-brand-600">共创辉煌</span></h2>
          <p className="text-slate-400 mt-4 max-w-2xl mx-auto print:text-slate-600 print:mx-0">
            万联为您提供极具竞争力的薪酬体系和广阔的职业发展空间。
            我们期待优秀的您加入，共同开启耐火材料行业的新篇章。
          </p>
        </div>

        {/* Desktop/Mobile Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 print:hidden">
          {JOB_OPENINGS.map((job, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="group bg-slate-800/50 border border-slate-700 rounded-xl p-6 hover:bg-slate-800 hover:border-brand-500/30 transition-all flex flex-col h-full"
            >
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-xl font-bold text-white group-hover:text-brand-400 transition-colors">{job.title}</h3>
                <div className="flex items-center gap-1 text-brand-400 bg-brand-900/20 px-3 py-1 rounded-full border border-brand-500/20">
                  <span className="text-sm font-bold">{job.salaryRange}</span>
                  <span className="text-xs">万元/年</span>
                </div>
              </div>
              
              <p className="text-slate-400 text-sm leading-relaxed mb-6 flex-grow line-clamp-3">
                {job.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Modals */}
        <AnimatePresence>
          {selectedJob && (
            <JobModal 
              job={selectedJob} 
              onClose={() => setSelectedJob(null)} 
              onApply={() => setShowApplyModal(true)}
            />
          )}
        </AnimatePresence>

        <AnimatePresence>
          {showApplyModal && (
            <ApplyModal onClose={() => setShowApplyModal(false)} />
          )}
        </AnimatePresence>

        {/* Print-Optimized Table Layout */}
        <div className="hidden print:block">
          <table className="w-full border-collapse border border-slate-300 text-sm">
            <thead>
              <tr className="bg-slate-100 text-slate-900">
                <th className="border border-slate-300 px-4 py-2 text-left w-1/4">岗位名称</th>
                <th className="border border-slate-300 px-4 py-2 text-left w-1/6">年薪 (万元)</th>
                <th className="border border-slate-300 px-4 py-2 text-left">主要职责</th>
              </tr>
            </thead>
            <tbody>
              {JOB_OPENINGS.map((job, index) => (
                <tr key={index} className="text-slate-800 break-inside-avoid">
                  <td className="border border-slate-300 px-4 py-3 font-bold align-top">{job.title}</td>
                  <td className="border border-slate-300 px-4 py-3 font-mono font-semibold text-brand-700 align-top">{job.salaryRange}</td>
                  <td className="border border-slate-300 px-4 py-3 align-top">
                    <p className="mb-2 font-semibold">{job.detail.overview}</p>
                    <ul className="list-disc pl-4 space-y-1 text-xs">
                      {job.detail.responsibilities.slice(0, 4).map((r, i) => (
                        <li key={i}>{r}</li>
                      ))}
                    </ul>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="mt-4 text-slate-600 text-sm">
            * 具体薪资根据个人能力与经验面议。
          </div>
        </div>

      </div>
      <div className="hidden print:block w-full h-0 break-after-page"></div>
    </section>
  );
};

export default Jobs;
