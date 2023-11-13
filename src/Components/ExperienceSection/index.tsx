import React, { useRef, useEffect } from "react";
import AppSection from "@/Components/AppSection";
// import { EDUCATION } from "@/constants/menu";
import Image from "next/image";
import AppText from "@/Components/AppText";

function ExperienceSection() {
  const cardRefs = useRef<{ [key: string]: HTMLDivElement | null }>({});
  const observerRefs = useRef<{ [key: string]: IntersectionObserver }>({});


  return (
    <AppSection headerTxt={"experience"}>
     <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-300 before:to-transparent">
<div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
    <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-slate-300 group-[.is-active]:bg-emerald-500 text-slate-500 group-[.is-active]:text-emerald-50 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
        <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="12" height="10">
            <path fill-rule="nonzero" d="M10.422 1.257 4.655 7.025 2.553 4.923A.916.916 0 0 0 1.257 6.22l2.75 2.75a.916.916 0 0 0 1.296 0l6.415-6.416a.916.916 0 0 0-1.296-1.296Z" />
        </svg>
    </div>
    <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white p-4 rounded border border-slate-200 shadow">
    <div className="mb-4">
    <div className="font-bold text-slate-900">Machine Learning Engineer Intern</div>
  <div className="flex justify-between items-center">
    <div className="font-bold text-slate-900">SQUPUS</div>
    <time className="font-caveat font-medium text-amber-500">June 2020 - August 2020</time>
  </div>
  </div>
  <ul className="list-disc text-slate-500 space-y-1 pl-5">
  <li> Worked on improving the accuracy of Traffic Sign Board Detection algorithm using Computer Vision techniques</li>
    <li>Used Computer Vision Algorithms and Classified the GTSRB dataset to maintain higher accuracies.</li>
    <li>Observed an effective increase of 33% in the F1-score of cross-validation</li>
  </ul> 
    </div>
    
</div>

<div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
    <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-slate-300 group-[.is-active]:bg-emerald-500 text-slate-500 group-[.is-active]:text-emerald-50 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
        <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="12" height="10">
            <path fill-rule="nonzero" d="M10.422 1.257 4.655 7.025 2.553 4.923A.916.916 0 0 0 1.257 6.22l2.75 2.75a.916.916 0 0 0 1.296 0l6.415-6.416a.916.916 0 0 0-1.296-1.296Z" />
        </svg>
    </div>
    <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white p-4 rounded border border-slate-200 shadow">
    <div className="mb-4">
    <div className="font-bold text-slate-900">Member of Technical Staff Intern</div>
  <div className="flex justify-between items-center">
    <div className="font-bold text-slate-900">ShopConnect</div>
    <time className="font-caveat font-medium text-amber-500">January 2021 - June 2021</time>
  </div>
  </div>
  <ul className="list-disc text-slate-500 space-y-1 pl-5">
    <li>Developed a seamless video calling feature for an e-commerce platform using WebRTC, enhancing real-time customer engagement.</li>
    <li>Resolved critical client bugs and automated booking receipts with QR codes, optimizing functionality and user experience.</li>
    <li>Mastered full-stack development with Angular 8, Node.js, Express.js, and MongoDB, delivering a cohesive front-end and back-end solution.</li>
  </ul>    
  </div>
</div>

<div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
    <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-slate-300 group-[.is-active]:bg-emerald-500 text-slate-500 group-[.is-active]:text-emerald-50 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
        <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="12" height="10">
            <path fill-rule="nonzero" d="M10.422 1.257 4.655 7.025 2.553 4.923A.916.916 0 0 0 1.257 6.22l2.75 2.75a.916.916 0 0 0 1.296 0l6.415-6.416a.916.916 0 0 0-1.296-1.296Z" />
        </svg>
    </div>
    <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white p-4 rounded border border-slate-200 shadow">
    <div className="mb-4">
    <div className="font-bold text-slate-900">Software Engineer</div>
  <div className="flex justify-between items-center">
    <div className="font-bold text-slate-900">Cyware Labs</div>
    <time className="font-caveat font-medium text-amber-500">June 2021 - May 2022</time>
  </div>
  </div>
  <ul className="list-disc text-slate-500 space-y-1 pl-5">
    <li>Drove a 40% scalability boost by transitioning from a Monolithic to Microservices architecture and optimizing Docker images in AWS.</li>
    <li>Led the development of an Integration Testing Framework, enabling accurate end-to-end application flow predictions.</li>
    <li>Demonstrated expertise across a diverse tech stack including Elastic Search, Django, Flask, Krakend, and Kafka.</li>
  </ul>
      </div>
</div>

<div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
    <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-slate-300 group-[.is-active]:bg-emerald-500 text-slate-500 group-[.is-active]:text-emerald-50 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
        <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="12" height="10">
            <path fill-rule="nonzero" d="M10.422 1.257 4.655 7.025 2.553 4.923A.916.916 0 0 0 1.257 6.22l2.75 2.75a.916.916 0 0 0 1.296 0l6.415-6.416a.916.916 0 0 0-1.296-1.296Z" />
        </svg>
    </div>
    <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white p-4 rounded border border-slate-200 shadow">
    <div className="mb-4">
    <div className="font-bold text-slate-900">Software Development Engineer</div>
  <div className="flex justify-between items-center">
    <div className="font-bold text-slate-900">INDmoney</div>
    <time className="font-caveat font-medium text-amber-500">May 2022 - August 2023</time>
  </div>
  </div>
  <ul className="list-disc text-slate-500 space-y-1 pl-5">
    <li>Perfected MF-Central integration, delivering 100% accurate real-time market updates and enhanced investor insights.</li>
    <li>Boosted backend GoLang test automation by 80% and established a dynamic error notification system with NewRelic.</li>
    <li>Scaled user base support to 1 Million daily customers, ensuring stable cross-functional system performance.</li>
    <li>Specialized in Kafka, PostgreSQL, Docker, and AWS services (SQS, S3, ECS) to elevate operational efficiency.</li>
  </ul>
</div>

</div>

<div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
    <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-slate-300 group-[.is-active]:bg-emerald-500 text-slate-500 group-[.is-active]:text-emerald-50 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
        <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="12" height="12">
            <path d="M12 10v2H7V8.496a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5V12H0V4.496a.5.5 0 0 1 .206-.4l5.5-4a.5.5 0 0 1 .588 0l5.5 4a.5.5 0 0 1 .206.4V10Z" />
        </svg>
    </div>
    <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white p-4 rounded border border-slate-200 shadow">
    <div className="mb-4">
    <div className="font-bold text-slate-900">MS in Software Engineering</div>
  <div className="flex justify-between items-center">
    <div className="font-bold text-slate-900">San Jose State University</div>
    <time className="font-caveat font-medium text-amber-500">August 2023 - Present</time>
  </div>
  </div>
  <ul className="list-disc text-slate-500 space-y-1 pl-5">
    <li>Specialization : Data Science</li>
    <li>Coursework : Machine Learning, Enterprise Application Development, Software Engineering Platforms</li>
    <li>Research Interests : Deep Learning and Natural Language Processing</li>
  </ul>
    </div>
</div>

</div>
    </AppSection>
  );
}

export default ExperienceSection;
