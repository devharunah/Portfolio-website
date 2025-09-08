'use client'

import Image from "next/image";
const AboutMe = () => {


  return (
    <section id="about" className="min-h-screen bg-about-bg flex flex-col justify-center px-6 lg:px-20 py-20">
      <div className="flex flex-col md:flex-row items-center h-full gap-10 md:gap-20">
          {" "}
          <div className="aspect-square w-full p-2 border border-white/20 rounded-[20px]">
            {/* <World data={kampalaPoint} globeConfig={globeConfig} /> */}
            <Image
              src={"/images/me.webp"}
              alt={""}
              width={500}
              height={500}
              className="w-full h-full aspect-square rounded-xl object-cover object-top grayscale hover:grayscale-0 transition-all duration-300 bg-muted"
            />
          </div>
          <div className=" flex flex-col gap-6 w-full px-2 md:px-0">
            <div className=" w-fit mx-auto">
              <h1 className="mb-4 text-5xl">About Me</h1>
              <div className="flex flex-col gap-6  text-white/70 max-w-md">
                <p>
                 Im a full-stack developer specializing in creating modern web applications. 
                    My expertise lies in the Next.js and Node.js stack `&Isquo` backed by a robust PostgreSQL database.
                </p>
               <p className="mt-4" >By day, I work as a Web Developer at Aaron Douglas,
                 where I build innovative solutions and bring ideas to life. I am passionate about both the technical side of coding and the creative process of design. Hailing from Uganda `&Isquo`
                I am driven by a love for technology and a commitment to building seamless digital experiences.</p>
                <div className="flex space-x-4  w-full">
                <div className="flex space-x-2 items-center justify-center">
                  <div className="bg-white w-5 h-5 rounded-full">
                  </div>
                  <p>Uganda,Kampala</p>
                </div>
                <div className="flex items-center space-x-2 justify-center">
                  <div className="bg-green-500 w-5 h-5 rounded-full">
                  </div>
                  <p>Available for Work</p>
                </div>
                </div>
              </div>
            </div>
          </div>
        </div>
    </section>
  );
};

export default AboutMe;