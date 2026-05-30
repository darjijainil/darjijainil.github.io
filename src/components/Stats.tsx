import React, { useState, useEffect } from "react";
import { FolderCheck, Smile, FileCode2, Image, Sparkles } from "lucide-react";
import { motion } from "motion/react";

interface StatsProps {
  completedProjectsCount: number;
  happyClientsCount: number;
}

export default function ReusableStats({ completedProjectsCount, happyClientsCount }: StatsProps) {
  // Simple local state counters that increment up on mounting
  const [projectsVal, setProjectsVal] = useState(0);
  const [clientsVal, setClientsVal] = useState(0);
  const [creativesVal, setCreativesVal] = useState(0);
  const [packageVal, setPackageVal] = useState(0);

  useEffect(() => {
    const duration = 2000; // ms
    const intervalTime = 30; // ms
    const totalSteps = duration / intervalTime;

    const projStep = Math.max(1, Math.floor(completedProjectsCount / totalSteps));
    const clientStep = Math.max(1, Math.floor(happyClientsCount / totalSteps));
    const creativesTarget = 380;
    const creativeStep = Math.max(1, Math.floor(creativesTarget / totalSteps));
    const packagingTarget = 45;
    const packageStep = Math.max(1, Math.floor(packagingTarget / totalSteps));

    let currentStep = 0;

    const timer = setInterval(() => {
      currentStep++;
      if (currentStep >= totalSteps) {
        setProjectsVal(completedProjectsCount);
        setClientsVal(happyClientsCount);
        setCreativesVal(creativesTarget);
        setPackageVal(packagingTarget);
        clearInterval(timer);
      } else {
        setProjectsVal((prev) => Math.min(completedProjectsCount, prev + projStep));
        setClientsVal((prev) => Math.min(happyClientsCount, prev + clientStep));
        setCreativesVal((prev) => Math.min(creativesTarget, prev + creativeStep));
        setPackageVal((prev) => Math.min(packagingTarget, prev + packageStep));
      }
    }, intervalTime);

    return () => clearInterval(timer);
  }, [completedProjectsCount, happyClientsCount]);

  const statsItems = [
    {
      id: "stat1",
      label: "Projects Completed",
      value: projectsVal,
      suffix: "+",
      icon: FolderCheck,
      color: "text-amber-500 bg-amber-500/10"
    },
    {
      id: "stat2",
      label: "Happy Agency Clients",
      value: clientsVal,
      suffix: "+",
      icon: Smile,
      color: "text-indigo-600 bg-indigo-600/10"
    },
    {
      id: "stat3",
      label: "Social Media Creatives",
      value: creativesVal,
      suffix: "+",
      icon: Image,
      color: "text-indigo-500 bg-indigo-500/10"
    },
    {
      id: "stat4",
      label: "Packaging Dielines Drafted",
      value: packageVal,
      suffix: "+",
      icon: FileCode2,
      color: "text-emerald-500 bg-emerald-500/10"
    }
  ];

  return (
    <section className="py-12 bg-slate-50 dark:bg-slate-900 border-y border-slate-200/50 dark:border-slate-800/50 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {statsItems.map((stat, idx) => {
            const IconComp = stat.icon;
            return (
              <motion.div
                key={stat.id}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: idx * 0.05 }}
                className="p-6 rounded-2xl bg-white border border-slate-200/50 dark:bg-slate-950 dark:border-slate-850 flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left gap-4 shadow-sm"
              >
                <div className={`p-4 rounded-xl flex-shrink-0 ${stat.color}`}>
                  <IconComp className="h-6 w-6" />
                </div>
                <div className="space-y-1">
                  <p className="font-sans font-extrabold text-2xl sm:text-3xl text-slate-900 dark:text-white tracking-tight">
                    {stat.value}{stat.suffix}
                  </p>
                  <p className="font-mono text-[9px] uppercase tracking-wider text-slate-400 font-bold leading-none">
                    {stat.label}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
export { ReusableStats };
