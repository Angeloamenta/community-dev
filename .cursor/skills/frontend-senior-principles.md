---
name: frontend-senior-principles
description: Principi orizzontali di UI/UX e frontend per interfacce di livello awwwards
---

# Principi base da frontend senior

Linee guida trasversali (stack-agnostic) per progettare interfacce moderne, pulite e di alto livello.

## 1. Gerarchia visiva e layout

- **Una idea per sezione**  
  Ogni sezione deve avere un obiettivo chiaro (es. spiegare il valore, mostrare prove sociali, far cliccare una CTA).

- **Griglia coerente**  
  Usa una griglia consistente (es. 12 colonne o simile), e mantieni:
  - allineamenti chiari di headline, testo, card e CTA
  - padding orizzontale coerente tra sezioni

- **Respiro visivo**  
  Spaziatura verticale generosa tra blocchi principali; evita layout compressi. Meglio qualche pixel in più che in meno.

## 2. Tipografia

- **Massimo 2 famiglie**  
  Una per testi e UI, una opzionale per display/hero. Evita mixare troppi stili.

- **Scala tipografica chiara**  
  Definisci una scala (es. hero, h1, h2, h3, body, small) e riusala ovunque. Non inventare misure nuove ad ogni componente.

- **Contrasto e leggibilità**  
  - Line-height generoso (1.4–1.6 per body).
  - Lunghezza riga 60–80 caratteri per testi principali.

## 3. Colore e brand

- **Palette contenuta**  
  1 colore primario, 1 secondario, 1–2 accent, scala di grigi. Evita arcobaleni.

- **Uso del colore per funzione**  
  - primario: CTA e elementi cliccabili principali  
  - secondario: sfondi di blocchi/section  
  - accent: highlight puntuali (badge, pill, micro-elementi)

- **Dark vs light**  
  Mantieni contrasto alto, soprattutto in dark mode. Niente testo grigio chiaro su sfondo quasi nero.

## 4. Interazioni e motion

- **Micro-interazioni intenzionali**  
  Animazioni brevi (150–250ms), easing morbido, legate a un’azione (hover, focus, click, transizione di sezione).

- **Evita “circo di animazioni”**  
  Non animare tutto. Scegli:
  - CTA principali
  - elementi interattivi (card hover, toggle, tab)
  - transizioni pagina/section quando portano chiarezza.

- **Feedback immediato**  
  Ogni azione dell’utente deve avere risposta visiva rapida (hover, stato attivo, loading chiaro nei bottoni, ecc.).

## 5. Accessibilità e semantica

- **HTML semantico prima di tutto**  
  Usa heading coerenti (`h1`–`h6`), `nav`, `main`, `section`, `button`, `a` con `href` quando è un link reale.

- **Contrasto e focus**  
  - Rispetta livelli di contrasto adeguati, specialmente per testo e CTA.
  - Mantieni e personalizza lo stato `:focus` visibile, non rimuoverlo.

- **Testo alternativo e aria**  
  - Immagini significative con `alt` descrittivo.
  - Dove necessario, usa `aria-label` / `aria-describedby` su controlli custom.

## 6. Performance percepita

- **Caricamento progressivo**  
  - evita blocchi di JS non necessari nella fold iniziale
  - carica immagini ottimizzate e con dimensioni dichiarate

- **Priorità ai contenuti above the fold**  
  Assicurati che l’hero e la prima CTA siano visibili e leggibili rapidamente anche su connessioni non ottimali.

- **Animazioni leggere**  
  Evita animazioni che forzano layout continui o usano troppe ombre/flou costosi.

## 7. Coerenza dei componenti

- **Design system prima, componenti dopo**  
  Definisci token (colori, radius, spacing, tipografia) e poi componi UI con blocchi coerenti.

- **Pattern riutilizzabili**  
  - card
  - section titolo + descrizione + CTA
  - grid di feature
  - testimonial / social proof

- **No componenti “usa e getta”**  
  Ogni nuovo componente dovrebbe essere riutilizzabile in almeno 2 punti o essere un pattern chiaro (es. `HeroSection`, `FeatureGrid`, `StatsStrip`).

## 8. Copy & contenuto

- **Copy concreto, non fuffa**  
  Evita frasi vuote. Spiega sempre:
  - cosa succede
  - per chi
  - con quale beneficio concreto

- **Etichette chiare**  
  Bottoni e link con verbi di azione: “Crea account”, “Partecipa alla prossima hackathon”, “Guarda i progetti”.

- **Riduci il rumore**  
  Ogni parola, icona, riga di testo deve avere uno scopo. Se non serve a capire o decidere, rimuovila.

## 9. Responsive design reale

- **Mobile-first, ma desktop curated**  
  - Progetta partendo dal mobile, ma cura davvero le composizioni desktop (non solo “versione allargata”).

- **Breakpoint con decisioni chiare**  
  A ogni breakpoint, chiediti:
  - cosa si allinea meglio?
  - quali elementi possono diventare affiancati?
  - cosa va nascosto o semplificato?

- **Touch-friendly**  
  Target cliccabili adeguati (min 40x40px), spaziatura sufficiente tra CTA e link vicini.

## 10. Polish finale (look & feel da award)

- **Allineamenti perfetti**  
  Testa linee verticali e orizzontali: testi e card devono “cadere” su griglie invisibili ordinate.

- **Consistenza di radius, bordi, ombre**  
  Usa 1–2 valori di radius in tutto il sito. Idem per shadow: soft vs strong, non dieci varianti diverse.

- **Stati vuoti e edge cases**  
  Cura:
  - stati empty (nessun dato, nessun progetto)
  - messaggi di errore
  - micro-feedback (ad es. form inviato con successo).

