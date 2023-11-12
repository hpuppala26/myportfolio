"use client"
import React from "react";
import TypingText from "@/Components/TypingText";
import AppSection from "@/Components/AppSection";
import AppText from "../AppText";
import AppButton from "../AppButton";
import { HOME } from "@/Constants/const";
import Image from "next/image";


function HeaderSection() {
    return (
      <AppSection headerTxt={HOME} hideHeaderTxt>
        <div className="flex justify-between items-center gap-x-2 gap-y-8 lg:flex-row flex-col">
          <div className={`lg:basis-3/5 flex flex-col gap-3 md:basis-auto`}>
            <div
              className={`flex flex-col gap-3 relative pl-2 ml-4 md:ml-0
                          before:content-[''] before:absolute before:h-5 before:w-5 before:rounded-full before:bg-primaryColor before:-left-[26px] 
                          after:content-[''] after:absolute after:h-full after:w-1 after:-left-[18px] after:top-1 after:bg-gradient-to-b from-primaryColor via-primaryColor`}
            >
              <AppText
                textTag="p"
                extraMedium
                semiBold
                defaultColor
              >{`Hello, It's me`}</AppText>
              <AppText
                textTag="h1"
                extraLarge
                bold
                primary
              >{`Hrithik Puppala`}</AppText>
              <div className="flex flex-row flex-wrap gap-2">
                <AppText textTag="p" extraMedium semiBold defaultColor>
                  {`I'm a`}
                </AppText>
                <TypingText textArr={["Backend Developer", "Data Scientist", "DevOps Engineer" ]} />
              </div>
              <AppText textTag="p" medium defaultColor customClass="mt-4 mb-4">
                {`A Passionate Engineer`}
              </AppText>
            </div>
            <div className="flex items-center justify-start gap-4 mt-6 flex-wrap">
              <AppButton
                ariaLabel=""
                buttonType="primary"
                onClick={() => console.log("hello")}
                buttonText="Contact Me"
              />
              <AppButton
              ariaLabel=""
              buttonType="secondary"
              onClick={() => {
                window.open('https://bit.ly/hrithik-resume', '_blank');
              }}
              buttonText="See My Resume"
            />
            </div>
          </div>
          <div className="lg:basis-2/5 md:basis-auto">
            <div className="md:w-[600px] md:h-[600px] sm:h-[75vw] sm:w-[40vw] h-[120vw] w-[50vw] relative m-auto">
              <Image
                alt="Hrithik's Avatar Image"
                src={"/images/Hrithik_Avatar.png"}
                fill
                loading={"lazy"}
                className="bg-backgroundColor-day dark:bg-backgroundColor-night"
              />
            </div>
          </div>
        </div>
      </AppSection>
    );
  }
  
  export default HeaderSection;
  