import {
  PageShell,
  HeroSection,
  AboutSection,
  CommunitySection,
  ManifestoSection,
  FooterSection,
} from "../components/landing";

export default function Home() {
  return (
    <PageShell>
      <HeroSection />
      <AboutSection />
      <CommunitySection />
      <ManifestoSection />
      <FooterSection />
    </PageShell>
  );
}
