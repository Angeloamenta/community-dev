---
name: nextjs-app-best-practices
description: Best practice orizzontali per progetti Next.js con App Router
---

# Next.js (App Router) – Best practice da tenere sempre a mente

Linee guida pensate per progetti moderni Next.js (13+ con App Router), indipendenti da linguaggio (JS/TS) e da UI library.

## 1. Struttura del progetto

- **Usa l’App Router (`app/`) come default**
  - Coloca pagine, layout e segmenti dentro `app/` invece che `pages/` per nuovi progetti.
  - Sfrutta `layout.js` per definire shell condivise (header/footer, font, tema).

- **Componenti riusabili fuori da `app/`**
  - Metti componenti condivisi in `src/components/...`.
  - Evita di annidare troppi componenti direttamente nelle pagine, mantieni le page come orchestratori.

## 2. Server Components vs Client Components

- **Preferisci Server Components di default**
  - Ogni file in `app/` è server component se non contiene `"use client"`.
  - Recupera dati lato server quando non ti serve interattività client-side immediata.

- **Usa `"use client"` solo quando serve**
  - Necessario per: stato locale interattivo, event handler del browser, hook tipo `useState`, `useEffect`, `useRef`.
  - Mantieni componenti client più piccoli possibile e vicini ai punti veramente interattivi.

## 3. Routing e layout

- **Segmenti annidati chiari**
  - Organizza le cartelle come rappresentazione mentale dell’IA e dell’utente (es. `app/(marketing)/landing`, `app/(dashboard)/projects`).
  - Usa layout annidati per condividere UI e logica (navbar diversi, shell diverse).

- **`metadata` per SEO**
  - Esporta `metadata` da `layout.js`/`page.js` per title, description e Open Graph.

## 4. Data fetching

- **Data fetching lato server in page/layout**
  - Usa async `page.js` e `layout.js` per recuperare dati (quando necessario).
  - Evita richieste duplicate lato client quando i dati possono arrivare già dal server.

- **Caching consapevole**
  - Sfrutta la cache di Next (es. `fetch` con opzioni) per migliorare performance.
  - Usa route dinamiche solo quando davvero servono.

## 5. Assets: `next/image` e `next/link`

- **`next/image`**
  - Usalo per immagini ottimizzate (responsive, lazy-loading, formati moderni).
  - Imposta sempre `alt` descrittivo per accessibilità.

- **`next/link`**
  - Usa `<Link>` per navigazione interna, `<a>` con `href` completo per link esterni.
  - Evita di annidare `<a>` dentro `<Link>` con le versioni più recenti.

## 6. Styling e design system

- **Un’unica fonte di verità per i token**
  - Definisci colori, tipografia, spacing e radius in un unico punto (es. CSS custom properties, Tailwind theme).
  - Evita di “hardcodare” colori/misure nei componenti, tranne eccezioni specifiche.

- **Modularità**
  - Mantieni componenti di layout (section wrapper, container, grid) separati dalla logica di business.

## 7. Performance e bundle

- **Code splitting automatico**
  - Lascia che l’App Router faccia il suo lavoro, ma evita grandi componenti client pieni di logica.

- **Evita dipendenze inutili lato client**
  - Ogni libreria importata in un client component finisce nel bundle del browser.
  - Considera alternative server-side quando possibile.

## 8. Accessibilità

- **Semantica corretta**
  - Usa tag semantici (`main`, `nav`, `section`, `header`, `footer`, `button`, `form`, ecc.).
  - Struttura gli heading in modo gerarchico (un solo `h1` per pagina).

- **Stati di focus**
  - Non rimuovere gli outline di focus senza rimpiazzarli con alternative visibili.

## 9. Convenzioni di codice

- **Componenti come funzioni pure**
  - Niente effetti collaterali “magici” nel body della funzione componente.
  - Estrai utility e helper in file dedicati.

- **Nomi espliciti**
  - Pagine: `page.js` rappresenta route chiare (`/`, `/projects`, `/about`).
  - Componenti: `HeroSection`, `FeatureGrid`, `FooterCta` sono meglio di `Section1`, `BlockA`.

## 10. Debugging e DX

- **Errore e loading UI**
  - Usa file `error.js`, `loading.js` nei segmenti per gestire errori e stati di caricamento eleganti.

- **Incremental adoption**
  - Quando introduci nuove feature (es. nuove route, layout), mantieni la struttura coerente e aggiorna la documentazione interna del progetto.

