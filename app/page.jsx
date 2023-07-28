'use client';
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles.css"
import Slider from "@/app/components/Slider";
import Feature from "@/app/components/Feature";
import About from "@/app/components/About";
import Service from "@/app/components/Service";
import SecondFeature from "@/app/components/SecondFeature";
import Project from "@/app/components/Project";
import Quote from "@/app/components/Quote";
import TeamMember from "@/app/components/TeamMember";
import Testimonial from "@/app/components/Testimonial";




export default function Home() {
  return (
    <>

      {/* Carousel Start */}
      <Slider />
      {/* Carousel End */}
      {/* Featture Start */}
      <Feature />
      {/* Feature End */}

      {/* About Start */}
      <About />
      {/* About End */}

      {/* Service Start  */}
      <Service />
      {/* Service End */}

      {/* Feature Start  */}
      <SecondFeature />
      {/* Feature End */}

      {/* Project Start  */}
      <Project />
      {/* Project End */}

      {/* Quote Start */}
      <Quote/>
      {/* Quote End */}

      {/* Team Member start */}
      <TeamMember />
      {/* Team Member End */}

      {/* Testimonial start */}
      <Testimonial />
      {/* Testimonial End */}

    </>
  );
}
