'use client';
import { motion, Variants } from "framer-motion";
import SkillBar from "./skilbar";

interface SkillCategory {
  title: string;
  skills: {
    name: string;
    level: number;
    isLearning?: boolean;
  }[];
}

const skillCategories: SkillCategory[] = [
  {
    title: "Frontend",
    skills: [
      { name: "React", level: 90 },
      { name: "TypeScript", level: 90 },
      { name: "Next.js", level: 80 },
      { name: "TailwindCSS", level: 95 },
      { name: "JavaScript", level: 98 },
    ],
  },
  {
    title: "Backend", 
    skills: [
      { name: "Node.js", level: 85 },
      { name: "Python", level: 65, isLearning: true },
      { name: "Express.js", level: 85 },
      { name: "PostgreSQL", level: 75 },
      { name: "MongoDB", level: 50, isLearning: true },
      { name: "Prisma", level: 30, isLearning: true },
    ],
  },
  {
    title: "Languages",
    skills: [
      { name: "JavaScript", level: 90 },
      { name: "TypeScript", level: 85 },
      { name: "Python", level: 70, isLearning: true },
    ],
  },
  {
    title: "DevOps & Cloud",
    skills: [
      { name: "Netlify", level: 69 },
      { name: "Vercel", level: 75 },
    ],
  },
  {
    title: "Tools",
    skills: [
      { name: "VS Code", level: 95 },
      { name: "Insomia", level: 85 },
       { name: "Firebase", level: 70 },
    ],
  },
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
    },
  },
};

const cardVariants: Variants = {
  hidden: { 
    opacity: 0, 
    y: 50,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
    },
  },
};

const SkillsSection: React.FC = () => {
  return (
    <section id="skill" className="min-h-screen bg-gray-950 backdrop-blur-lg py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl text-white font-bold  mb-4">
           My technical proficiency
          </h1>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {skillCategories.map((category) => (
            <motion.div
              key={category.title}
              variants={cardVariants}
              className="bg-black border border-gray-600 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <h2 className="text-xl text-white font-semibold  mb-6 text-center">
                {category.title}
              </h2>
              <div className="space-y-4">
                {category.skills.map((skill) => (
                  <SkillBar
                    key={`${category.title}-${skill.name}`}
                    name={skill.name}
                    level={skill.level}
                    isLearning={skill.isLearning}
                  />
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;