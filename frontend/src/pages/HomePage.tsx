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
        title="Your Stories Deserve to Bloom"
      >
        Blog Bloom is where ideas flourish and stories come to life. Share your
        passion, connect with readers, and join a community of creative minds
        ready to inspire and be inspired.
      </SectionTitle>

      <Benefits data={benefitOne} />
      <Benefits imgPos="right" data={benefitTwo} />

      <SectionTitle
        preTitle="Testimonials"
        title="Here's what our writers say"
      >
        Discover what fellow bloggers and content creators have experienced on their
        journey with Blog Bloom. Join our thriving community of storytellers.
      </SectionTitle>

      <Testimonials />

      <Cta />
    </Container>
  );
};

export default HomePage;
