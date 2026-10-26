# Atlas — explore the world through time

An interactive world-history atlas plus a general-knowledge discovery feed. No build step, no dependencies to install.

## Run

```sh
cd atlas_history
python3 -m http.server 8000
# open http://localhost:8000
```

(Opening `index.html` directly also mostly works, but a local server is more reliable.)

## What's inside

| View | What it does |
|---|---|
| **World Explorer** | Map + timeline (10,000 BCE → today). Scrub, play, or type a year ("500 BCE"). Toggle 10 layers. Click a civilization for a full profile (17-section template, places then & now, notes). The right panel shows "What else was happening?" around the world, grouped by region, plus coverage gaps. |
| **Discover** | ~200 general-knowledge cards: how money works, tech, history, scandals, crime & heists, science, food, geography, word origins, brands. Fact of the day, flashcard mode, search, "Surprise me". |
| **Connections** | Chains of transmission (Buddhism → Japan, tomatoes → Italy, coffee, the alphabet, zero, paper, Greek philosophy, Caesar → Tsar, chili, Latin) on a map, with relationship types and debates. |
| **Stories** | Guided journeys with three reading depths and "Why did this happen?" breakdowns. |
| **Compare** | Curated Rome vs. Han, plus compare any two civilizations section by section. |
| **Ask Atlas** | Searches all local content. Add a Claude API key (⚙︎) for full answers with a map, a chain of connections, and historians' debates. |
| **Library** | Saved items, notes, and a knowledge map showing which topics, regions and eras you haven't explored yet. |

All personal data (saves, notes, reading progress, API key) stays in your browser's localStorage.

## Adding content

Everything is plain data in `js/data/`:

- `facts.js` — add `{ id, c, t, h, b, go? }` to `ATLAS_FACTS` (`c` = category id, `go` = optional link like `ent:rome-emp`, `chain:coffee`, `story:silk`, `year:1453`)
- `entities.js` — civilization profiles (`s` holds the profile sections)
- `events.js` — map events (`y` negative = BCE), eras, layers, trade routes
- `connections.js` — connection chains and the curated comparison
- `stories.js` — guided stories
