'use client';
import { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

interface SkillProps {
  name: string;
  level: number;
  isLearning?: boolean;
}

const SkillBar: React.FC<SkillProps> = ({ name, level, isLearning = false }) => {
  const controls = useAnimation();
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

  useEffect(() => {
    if (inView) {
      controls.start({ 
        width: `${level}%`,
        transition: { duration: 1.8, ease: "easeOut", delay: 0.2 }
      });
    }
  }, [inView, controls, level]);

  return (
    <div ref={ref} className="mb-6  last:mb-0">
      <div className="flex justify-between items-center mb-3">
        <div className="flex items-center gap-2">
          <span className="text-skill-primary font-medium text-sm">{name}</span>
          {isLearning && (
            <span className="text-xs px-2 py-1 bg-skill-learning/20 text-skill-learning rounded-full font-medium">
              Learning
            </span>
          )}
        </div>
        <span className="text-skill-secondary text-sm font-medium">{level}%</span>
      </div>
      <div className="w-full bg-skill-track rounded-full h-3 overflow-hidden shadow-inner">
        <motion.div
          className={`h-full rounded-full ${
            isLearning ? 'bg-gray-500' : 'bg-white'
          } shadow-skill-glow`}
          initial={{ width: 0 }}
          animate={controls}
        />
      </div>
    </div>
  );
};

export default SkillBar;