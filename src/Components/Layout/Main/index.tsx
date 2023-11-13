"use client";

import React from "react";
import HeaderSection from "@/Components/HeaderSection";
import SkillsSection from "@/Components/SkillsSection";
import EducationSection from "@/Components/EducationSection";
// import CertificationsSection from "@/components/CertificationsSection";
import ExperienceSection from "@/Components/ExperienceSection";
// import ProjectsSection from "@/components/ProjectsSection";

function Main() {
  return (
    <main className="flex-1">
      <HeaderSection />
      <EducationSection />
     <SkillsSection />
     <ExperienceSection />
      {/* <SkillsSection />
      <ExperienceSection />
      <ProjectsSection/>
      
      <CertificationsSection /> */}
    </main>
  );
}

export default Main;
