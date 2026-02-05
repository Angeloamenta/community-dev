import Navbar from "./Navbar";

export default function PageShell({ children }) {
  return (
    <div className="min-h-screen bg-[color:var(--background)] text-[color:var(--foreground)]">
      <Navbar />
      <main>
        <div
          className="mx-auto w-full"
          style={{
            maxWidth: "var(--page-max-width)",
            paddingInline: "var(--page-padding-x)",
          }}
        >
          {children}
        </div>
      </main>
    </div>
  );
}

