import { Container } from "../components/Container";
import { Hero } from "../components/Hero";
import { SectionTitle } from "../components/SectionTitle";
import { Benefits } from "../components/Benefits";
import { Testimonials } from "../components/Testimonials";
import { Cta } from "../components/Cta";

import { benefitOne, benefitTwo } from "./data";

const HomePage = () => {
  return (
    <Container>
      <Hero />
      <SectionTitle
        preTitle="Blog Bloom Benefits"
        title="Why should you use this landing page"
      >
        Blog Bloom is a free landing page & marketing website template for
        startups and indie projects. Its built with Next.js & TailwindCSS. And
        its completely open-source.
      </SectionTitle>

      <Benefits data={benefitOne} />
      <Benefits imgPos="right" data={benefitTwo} />

      <SectionTitle
        preTitle="Testimonials"
        title="Here's what our customers said"
      >
        Testimonials is a great way to increase the brand trust and awareness.
        Use this section to highlight your popular customers.
      </SectionTitle>

      <Testimonials />

      <Cta />
    </Container>
  );
};

export default HomePage;
