import {
  PageShell,
  HeroSection,
  HowItWorksSection,
  ValuePropsSection,
  ProjectsSection,
  SocialProofSection,
  FaqSection,
  FinalCtaSection,
} from "../components/landing";

export default function Home() {
  return (
    <PageShell>
      <HeroSection />
      <HowItWorksSection />
      <ValuePropsSection />
      <ProjectsSection />
      <SocialProofSection />
      <FaqSection />
      <FinalCtaSection />
    </PageShell>
  );
}
