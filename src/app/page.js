import {
  PageShell,
  HeroSection,
  AboutSection,
  CommunitySection,
  ManifestoSection,
  Logos,
  FooterSection,
} from "../components/landing";

export default function Home() {
  return (
    <PageShell>
      <HeroSection />
      <AboutSection />
      <CommunitySection />
      <ManifestoSection />
      <Logos />
      <FooterSection />
    </PageShell>
  );
}
