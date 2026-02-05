import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";
import homeContent from "@/content/home.json";

const footer = homeContent.footer;

export default function FooterSection({ className }) {
  const { navigation, social, legal, siteTitle } = footer;

  return (
    <section
      className={cn(
        "flex flex-col items-center gap-14 border-t border-border bg-background py-16 sm:py-20",
        className,
      )}
    >
      <nav className="w-full max-w-(--page-max-width) px-(--page-padding-x) flex flex-col items-center gap-4">
        <ul className="flex flex-wrap items-center justify-center gap-6 text-sm">
          {navigation.map((item) => (
            <li key={item.name}>
              <a
                href={item.href}
                className="font-medium text-foreground transition-opacity hover:opacity-75"
              >
                {item.name}
              </a>
            </li>
          ))}
          {social.map((item) => (
            <li key={item.name}>
              <a
                href={item.href}
                className="flex items-center gap-0.5 font-medium text-foreground transition-opacity hover:opacity-75"
              >
                {item.name} <ArrowUpRight className="size-4" />
              </a>
            </li>
          ))}
        </ul>
        <ul className="flex flex-wrap items-center justify-center gap-6">
          {legal.map((item) => (
            <li key={item.name}>
              <a
                href={item.href}
                className="text-xs text-muted-foreground transition-opacity hover:opacity-75"
              >
                {item.name}
              </a>
            </li>
          ))}
        </ul>
      </nav>
      <p
        className="mt-10 text-2xl font-medium tracking-tight text-muted-foreground md:mt-14 md:text-3xl lg:mt-20 lg:text-4xl"
        aria-label={siteTitle}
      >
        {siteTitle}
      </p>
    </section>
  );
}

