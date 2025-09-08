import Getintouch from "@/components/getintouch/page";
import AboutMe from "@/components/layouts/about/page";
import HeroSection from "@/components/layouts/hero/page";
import FeaturedProjects from "@/components/layouts/projects/page";
import Services from "@/components/layouts/servicec/page";
import SkillsSection from "@/components/layouts/skills/page";


export default function Home() {
  return (
   <div>
    <HeroSection/>
    <AboutMe/>
    <SkillsSection/>
    <Services/>
    <FeaturedProjects/>
    <Getintouch/>
   </div>
  );
}
