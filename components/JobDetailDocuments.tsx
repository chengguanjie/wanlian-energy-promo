
import React from 'react';
import { JOB_OPENINGS } from '../constants';

const JobDetailDocuments: React.FC = () => {
  return (
    <section className="print:block bg-white text-black hidden py-10">
      {JOB_OPENINGS.map((job, index) => (
        <div key={index} className="max-w-[210mm] mx-auto mb-20 break-before-page p-8" style={{ minHeight: '297mm' }}>
          {/* Header */}
          <div className="text-center mb-8">
            <h1 className="text-2xl font-bold mb-4 tracking-widest">万联能源节能材料有限公司</h1>
            <div className="w-full h-0.5 bg-blue-600 mb-8"></div>
            <h2 className="text-3xl font-bold text-blue-900 mb-8">{job.title}岗位职责说明书</h2>
          </div>

          {/* Basic Info Table */}
          <table className="w-full border-collapse border border-blue-300 mb-8 text-sm">
            <tbody>
              <tr>
                <td className="border border-blue-300 bg-blue-50 p-3 font-bold w-1/6">岗位名称</td>
                <td className="border border-blue-300 p-3 w-1/3">{job.title}</td>
                <td className="border border-blue-300 bg-blue-50 p-3 font-bold w-1/6">所属部门</td>
                <td className="border border-blue-300 p-3 w-1/3">{job.detail.department}</td>
              </tr>
              <tr>
                <td className="border border-blue-300 bg-blue-50 p-3 font-bold">岗位层级</td>
                <td className="border border-blue-300 p-3">{job.detail.level}</td>
                <td className="border border-blue-300 bg-blue-50 p-3 font-bold">直接上级</td>
                <td className="border border-blue-300 p-3">{job.detail.supervisor}</td>
              </tr>
              <tr>
                <td className="border border-blue-300 bg-blue-50 p-3 font-bold">下属岗位</td>
                <td className="border border-blue-300 p-3" colSpan={3}>{job.detail.subordinates}</td>
              </tr>
              <tr>
                <td className="border border-blue-300 bg-blue-50 p-3 font-bold">编制人数</td>
                <td className="border border-blue-300 p-3">{job.detail.headcount}</td>
                <td className="border border-blue-300 bg-blue-50 p-3 font-bold">编制日期</td>
                <td className="border border-blue-300 p-3">{job.detail.date}</td>
              </tr>
              <tr>
                <td className="border border-blue-300 bg-blue-50 p-3 font-bold">审批人</td>
                <td className="border border-blue-300 p-3"></td>
                <td className="border border-blue-300 bg-blue-50 p-3 font-bold">生效日期</td>
                <td className="border border-blue-300 p-3"></td>
              </tr>
            </tbody>
          </table>

          {/* Content Sections */}
          <div className="space-y-8">
            {/* 1. Overview */}
            <div>
              <h3 className="text-xl font-bold mb-3">一、岗位概述</h3>
              <p className="text-gray-800 leading-relaxed text-justify">{job.detail.overview}</p>
            </div>

            {/* 2. Responsibilities */}
            <div>
              <h3 className="text-xl font-bold mb-3">二、主要职责</h3>
              <ol className="list-decimal list-inside space-y-2 text-gray-800">
                {job.detail.responsibilities.map((item, idx) => (
                  <li key={idx} className="pl-1">{item}</li>
                ))}
              </ol>
            </div>

            {/* 3. Authority */}
            {job.detail.authority && job.detail.authority.length > 0 && (
              <div>
                <h3 className="text-xl font-bold mb-3">三、权限范围</h3>
                <ol className="list-decimal list-inside space-y-2 text-gray-800" start={10}>
                  {job.detail.authority.map((item, idx) => (
                    <li key={idx} className="pl-1">{item}</li>
                  ))}
                </ol>
              </div>
            )}

            {/* 4. Requirements - Splitting logic for display */}
            <div>
               <h3 className="text-xl font-bold mb-3">四、任职资格</h3>
               <div className="space-y-4 text-gray-800">
                 {job.detail.requirements.slice(0, 3).map((req, idx) => {
                   // Extract title from "Title: Description" format
                   const parts = req.split('：');
                   const title = parts[0];
                   const content = parts.slice(1).join('：');
                   return (
                     <div key={idx}>
                       <p className="font-bold">({['一','二','三'][idx]}) {title}</p>
                       <p>{content || req}</p>
                     </div>
                   );
                 })}
               </div>
            </div>

             {/* 5. Competencies */}
             <div>
                <h3 className="text-xl font-bold mb-3">五、能力素质要求</h3>
                <ol className="list-decimal list-inside space-y-2 text-gray-800" start={job.detail.authority ? 10 + job.detail.authority.length + 1 : 16}>
                  {job.detail.requirements.slice(3).map((item, idx) => (
                    <li key={idx} className="pl-1">{item}</li>
                  ))}
                </ol>
             </div>
          </div>

          {/* Signature Footer */}
          <div className="mt-20 border border-black flex">
             <div className="flex-1 p-4 border-r border-black h-24">
               <div className="mb-8">制定人签字:</div>
               <div>日期:</div>
             </div>
             <div className="flex-1 p-4 border-r border-black h-24">
               <div className="mb-8">审核人签字:</div>
               <div>日期:</div>
             </div>
             <div className="flex-1 p-4 h-24">
               <div className="mb-8">批准人签字:</div>
               <div>日期:</div>
             </div>
          </div>
        </div>
      ))}
    </section>
  );
};

export default JobDetailDocuments;
