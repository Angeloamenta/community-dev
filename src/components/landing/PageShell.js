export default function PageShell({ children }) {
  return (
    <main className="min-h-screen bg-[color:var(--background)] text-[color:var(--foreground)]">
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
  );
}

