// Connection chains: ordered nodes. rel = relationship from the previous node.
// Relationship types: influenced, spread to, introduced through trade, preceded/succeeded,
// translated into, conquered, inspired, evolved into, coexisted with, contested origin.
window.ATLAS_CHAINS = [
{
  id: "buddhism", name: "How Buddhism reached Japan", cat: "Religion",
  sum: "From the Ganges plain across the Hindu Kush, along the Silk Roads, into China, Korea and Japan — changing shape at every step.",
  nodes: [
    { l: "Northern India", y: -480, lat: 25.38, lng: 83.02, t: "Siddhartha Gautama teaches at Sarnath and Bodh Gaya (5th century BCE; dates debated). Early communities pass teachings orally for centuries." },
    { rel: "spread to", l: "Gandhara", y: -250, lat: 33.74, lng: 72.79, t: "Under Ashoka and later the Kushan Empire, Buddhism flourishes in what's now Pakistan and Afghanistan. Greco-Buddhist art creates some of the earliest human images of the Buddha." },
    { rel: "spread to", l: "Central Asia", y: 50, lat: 39.47, lng: 75.99, t: "Kushan, Sogdian and Parthian merchants and monks carry texts along Silk Road oases like Kashgar and Khotan. Many early translators into Chinese were Central Asian." },
    { rel: "spread to", l: "Han China", y: 68, lat: 34.72, lng: 112.6, t: "Traditionally the White Horse Temple in Luoyang. Buddhism interacts with Daoist vocabulary — early translators borrowed Daoist terms, which shaped how Chinese understood it." },
    { rel: "spread to", l: "Korea (Goguryeo, Baekje)", y: 372, lat: 36.5, lng: 127.0, t: "Official arrival in Goguryeo in 372 CE via a Chinese monk; Baekje followed in 384." },
    { rel: "spread to", l: "Japan", y: 552, lat: 34.47, lng: 135.82, t: "Baekje's king sends a Buddha statue and sutras (538 or 552). Prince Shōtoku promotes it; Hōryū-ji, among the world's oldest wooden buildings, follows. Zen (from Chinese Chan) arrives centuries later." },
    { rel: "evolved into", l: "Today", y: 2025, lat: 35.68, lng: 139.69, t: "~500 million Buddhists worldwide. Zen influenced Steve Jobs's design philosophy and modern mindfulness movements — a loose resemblance more than direct inheritance." }
  ],
  debate: "Buddhism also traveled by sea routes to Southeast Asia and southern China — the overland narrative is only one of several transmission paths."
},
{
  id: "tomato", name: "How tomatoes got into Italian food", cat: "Food",
  sum: "A Mesoamerican fruit becomes the symbol of Italian cooking — but only after 200 years of suspicion.",
  nodes: [
    { l: "Western South America", y: -5000, lat: -4.0, lng: -79.5, t: "Wild tomato ancestors are native to the Andes of Peru and Ecuador — small, berry-sized fruits." },
    { rel: "spread to", l: "Mesoamerica", y: -500, lat: 19.43, lng: -99.13, t: "Domesticated in Mexico, where Nahuatl speakers called it tomatl. Aztec cooks combined tomatoes with chili — essentially salsa." },
    { rel: "introduced through trade", l: "Spain", y: 1530, lat: 37.39, lng: -5.98, t: "Brought to Seville after the conquest of Tenochtitlan (1521)." },
    { rel: "spread to", l: "Florence & Naples", y: 1548, lat: 43.77, lng: 11.25, t: "In 1548 a basket arrives at Cosimo de' Medici's household. Botanist Mattioli calls them 'pomi d'oro' (golden apples) — hence 'pomodoro'. Many considered them poisonous (related to nightshade)." },
    { rel: "evolved into", l: "Naples tomato sauce", y: 1692, lat: 40.85, lng: 14.27, t: "Antonio Latini publishes the first known Italian tomato sauce recipe 'alla spagnuola' (in the Spanish style) in Naples." },
    { rel: "evolved into", l: "Pizza & pasta al pomodoro", y: 1889, lat: 40.85, lng: 14.25, t: "Tomato on pizza and pasta becomes common in Naples in the 18th–19th centuries. The Pizza Margherita origin story (1889) is likely a legend." },
    { rel: "spread to", l: "Global", y: 1950, lat: 40.71, lng: -74.0, t: "Italian immigrants bring tomato-heavy cooking to the Americas; Italian-American food (spaghetti and meatballs) is a later development." }
  ],
  debate: "Ingredient origin ≠ dish origin. Tomatoes are American; tomato sauce is a European innovation built on Mesoamerican foundations."
},
{
  id: "coffee", name: "Coffee: Ethiopia to your café", cat: "Food",
  sum: "A highland shrub becomes a Sufi prayer aid, an Ottoman social revolution, a European business incubator, and a colonial plantation crop.",
  nodes: [
    { l: "Ethiopian highlands", y: 850, lat: 7.3, lng: 36.0, t: "Coffea arabica grows wild in southwestern Ethiopia (Kaffa region). The Kaldi goatherd legend is first written down only in 1671 — likely folklore." },
    { rel: "spread to", l: "Yemen", y: 1450, lat: 13.32, lng: 43.25, t: "First credible evidence of coffee drinking: Sufi monasteries in the 1400s. Mocha becomes the export port; Yemen keeps a near-monopoly for two centuries." },
    { rel: "spread to", l: "Mecca & Cairo", y: 1511, lat: 21.42, lng: 39.83, t: "Mecca's governor bans coffee in 1511 as intoxicating; the ban is overturned. Debates about whether coffee was halal echo for decades." },
    { rel: "spread to", l: "Ottoman Istanbul", y: 1554, lat: 41.01, lng: 28.98, t: "Coffeehouses open; Ottoman authorities periodically ban them as centers of gossip and sedition." },
    { rel: "introduced through trade", l: "London & Europe", y: 1652, lat: 51.513, lng: -0.087, t: "London's coffeehouses become 'penny universities' and business hubs. Lloyd's of London (insurance) started in Edward Lloyd's coffeehouse (c. 1688)." },
    { rel: "spread to", l: "Java & the Caribbean", y: 1700, lat: -7.0, lng: 110.0, t: "The Dutch smuggle plants to Java ('a cup of java'); the French take a plant to Martinique (1720s). Coffee becomes a slave-plantation crop; Saint-Domingue (Haiti) supplied about half the world's coffee by the 1780s." },
    { rel: "spread to", l: "Brazil", y: 1727, lat: -22.9, lng: -47.06, t: "Legend: Francisco de Melo Palheta charmed the French Guiana governor's wife, who smuggled seeds to him in a bouquet. Brazil has been the top producer since the 1840s." },
    { rel: "evolved into", l: "Modern café culture", y: 1971, lat: 47.61, lng: -122.34, t: "Espresso machines (Italy, early 1900s) → Starbucks (Seattle, 1971) → global café chains. Coffee is one of the world's most traded agricultural commodities." }
  ],
  debate: "The exact date and place of first coffee drinking is uncertain; claims before the 15th century lack firm evidence."
},
{
  id: "alphabet", name: "The alphabet's family tree", cat: "Language",
  sum: "Most of the world's alphabets descend from one invention by Semitic-speaking workers in Egypt.",
  nodes: [
    { l: "Egyptian hieroglyphs", y: -3100, lat: 25.7, lng: 32.64, t: "Hieroglyphs include signs for single consonants — a seed of the alphabetic idea." },
    { rel: "inspired", l: "Proto-Sinaitic script", y: -1850, lat: 28.97, lng: 33.25, t: "Semitic-speaking miners at Serabit el-Khadim in Sinai adapt hieroglyphs: an ox head ('alp') stands for its first sound. 'A' is literally an upside-down ox." },
    { rel: "evolved into", l: "Phoenician alphabet", y: -1050, lat: 34.12, lng: 35.65, t: "22 consonants, spread by Phoenician traders throughout the Mediterranean." },
    { rel: "evolved into", l: "Aramaic → Hebrew, Arabic, (Brahmi?)", y: -800, lat: 33.5, lng: 36.3, t: "Aramaic script, the empire language of Persia, gives rise to Hebrew square script, Syriac, Arabic, and Mongolian scripts. Some scholars think Brahmi in India was also inspired by Aramaic (debated)." },
    { rel: "evolved into", l: "Greek alphabet", y: -800, lat: 37.97, lng: 23.72, t: "Greeks repurpose unneeded consonant signs as vowels — the first full alphabet. 'Alphabet' = alpha + beta." },
    { rel: "evolved into", l: "Etruscan & Latin", y: -700, lat: 41.89, lng: 12.49, t: "Via Greek colonies in Italy, Etruscans then Romans adapt it. Latin script now writes hundreds of languages." },
    { rel: "evolved into", l: "Cyrillic", y: 893, lat: 43.0, lng: 25.0, t: "Developed in the First Bulgarian Empire, building on Greek letters and the Glagolitic alphabet created by Saints Cyril and Methodius." }
  ],
  debate: "Writing itself was invented independently at least 3–4 times (Mesopotamia, Egypt possibly, China, Mesoamerica), but the alphabet appears to have been invented essentially once."
},
{
  id: "numerals", name: "Zero & the numbers we use", cat: "Science",
  sum: "So-called 'Arabic numerals' are Indian, transmitted through Baghdad to Europe — where merchants fought to use them.",
  nodes: [
    { l: "Babylon", y: -1800, lat: 32.54, lng: 44.42, t: "Babylonians had a place-value system (base 60) and later a placeholder sign — but not zero as a number." },
    { rel: "coexisted with", l: "Maya", y: 350, lat: 17.22, lng: -89.62, t: "The Maya independently invented zero as a placeholder in their calendar — no connection to the Old World." },
    { rel: "coexisted with", l: "India (Gupta era)", y: 628, lat: 25.6, lng: 85.14, t: "Indian mathematicians develop decimal place-value with zero. Brahmagupta (628) gives rules for arithmetic with zero and negative numbers. The Bakhshali manuscript shows a dot for zero." },
    { rel: "translated into", l: "Baghdad", y: 825, lat: 33.31, lng: 44.36, t: "Al-Khwarizmi's book on Indian numerals spreads the system across the Islamic world." },
    { rel: "spread to", l: "Pisa (Fibonacci)", y: 1202, lat: 43.72, lng: 10.4, t: "Leonardo of Pisa, raised in Algeria where his father worked, publishes Liber Abaci. The 'Fibonacci sequence' appears in it as a rabbit-breeding puzzle (it was known in India much earlier)." },
    { rel: "spread to", l: "Florence (resistance!)", y: 1299, lat: 43.77, lng: 11.25, t: "Florence banned bankers from using the new numerals in 1299 — they were easier to forge (a 0 can become a 6 or 9). Roman numerals remained in accounts for centuries." },
    { rel: "evolved into", l: "Everywhere", y: 1500, lat: 50.0, lng: 8.27, t: "Printing standardizes the digit shapes. Today 'Arabic numerals' are used worldwide, while much of the Arab world uses a different set of 'Eastern Arabic' digit shapes." }
  ],
  debate: "The word 'zero' comes from Arabic ṣifr (empty), which also gives us 'cipher'."
},
{
  id: "paper", name: "How paper conquered the world", cat: "Technology",
  sum: "Paper went from Han China to Samarkand, Baghdad, Spain and Italy — and made printing possible.",
  nodes: [
    { l: "Han China", y: -150, lat: 34.3, lng: 108.9, t: "Earliest paper fragments date to the 2nd century BCE. Cai Lun (105 CE) refined production." },
    { rel: "spread to", l: "Samarkand", y: 751, lat: 39.65, lng: 66.96, t: "Legend links paper's arrival to Chinese prisoners from the Battle of Talas (751); paper was probably already known there, but Samarkand became a famed producer." },
    { rel: "spread to", l: "Baghdad", y: 794, lat: 33.31, lng: 44.36, t: "Paper mills in Baghdad make the Abbasid bureaucracy and book culture boom. Booksellers' markets line the streets." },
    { rel: "spread to", l: "Cairo & Fez", y: 950, lat: 30.04, lng: 31.24, t: "Paper replaces papyrus in Egypt within a century." },
    { rel: "spread to", l: "Xàtiva, Spain", y: 1150, lat: 38.99, lng: -0.52, t: "Al-Andalus has Europe's first paper mill." },
    { rel: "spread to", l: "Fabriano, Italy", y: 1264, lat: 43.34, lng: 12.9, t: "Italians add watermarks and water-powered hammers. Fabriano still makes paper today." },
    { rel: "inspired", l: "Gutenberg's Mainz", y: 1450, lat: 50.0, lng: 8.27, t: "Cheap paper makes the printing press economical: a Bible on parchment needed hides from roughly 170 calves." }
  ],
  debate: "Printing was invented first in China (woodblock, 7th century) and movable type by Bi Sheng (c. 1040); whether Gutenberg knew of East Asian printing is unproven."
},
{
  id: "philosophy", name: "Greek philosophy's long journey", cat: "Philosophy",
  sum: "Aristotle reached medieval Europe largely through Arabic — via Syriac Christians, Baghdad and Muslim Spain.",
  nodes: [
    { l: "Athens", y: -350, lat: 37.97, lng: 23.72, t: "Plato's Academy and Aristotle's Lyceum." },
    { rel: "spread to", l: "Alexandria", y: -200, lat: 31.2, lng: 29.92, t: "The Library collects and copies Greek works; commentary traditions develop." },
    { rel: "translated into", l: "Syriac (Edessa, Nisibis)", y: 500, lat: 37.16, lng: 38.79, t: "Syriac-speaking Christian scholars translate Greek philosophy and medicine." },
    { rel: "translated into", l: "Arabic (Baghdad)", y: 830, lat: 33.31, lng: 44.36, t: "The translation movement — Hunayn ibn Ishaq and others render Aristotle, Galen, Euclid and Ptolemy into Arabic. Al-Farabi was called 'the Second Teacher' (after Aristotle)." },
    { rel: "influenced", l: "Córdoba (Averroes)", y: 1180, lat: 37.88, lng: -4.78, t: "Ibn Rushd's commentaries on Aristotle were so influential that Europeans simply called him 'The Commentator'." },
    { rel: "translated into", l: "Toledo (Latin)", y: 1150, lat: 39.86, lng: -4.02, t: "Translators like Gerard of Cremona render Arabic texts into Latin." },
    { rel: "influenced", l: "Paris (Aquinas)", y: 1265, lat: 48.85, lng: 2.35, t: "Thomas Aquinas synthesizes Aristotle with Christian theology — the core of scholasticism." },
    { rel: "influenced", l: "Renaissance Florence", y: 1460, lat: 43.77, lng: 11.25, t: "Byzantine scholars bring Greek manuscripts after 1453; Plato is translated directly from Greek by Ficino." }
  ],
  debate: "'Islamic scholars merely preserved Greek knowledge' is a myth — they critiqued and extended it substantially (e.g., Ibn al-Haytham's optics, Ibn Sina's medicine)."
},
{
  id: "caesar", name: "Rome's name lives on: Caesar → Kaiser → Tsar", cat: "Politics",
  sum: "A family name becomes a title claimed by emperors for 1,900 years.",
  nodes: [
    { l: "Julius Caesar", y: -44, lat: 41.89, lng: 12.48, t: "Gaius Julius Caesar's family name (cognomen)." },
    { rel: "evolved into", l: "Augustus & the emperors", y: 14, lat: 41.89, lng: 12.49, t: "His adopted heir Octavian takes the name; 'Caesar' becomes an imperial title." },
    { rel: "preceded / succeeded", l: "Byzantium", y: 600, lat: 41.01, lng: 28.98, t: "Eastern emperors continue as 'Kaisar' in Greek." },
    { rel: "inspired", l: "Kaiser (Holy Roman Empire / Germany)", y: 962, lat: 50.11, lng: 8.68, t: "German rulers claim Roman imperial succession; 'Kaiser' derives from Caesar. The last Kaiser abdicates in 1918." },
    { rel: "inspired", l: "Tsar (Russia)", y: 1547, lat: 55.75, lng: 37.62, t: "Ivan IV crowned Tsar, from Slavonic 'tsĭsarĭ' (Caesar). Moscow called itself the 'Third Rome'." },
    { rel: "conquered", l: "Kayser-i Rum (Ottomans)", y: 1453, lat: 41.008, lng: 28.98, t: "Mehmed II, conqueror of Constantinople, styles himself Caesar of Rome." },
    { rel: "evolved into", l: "Today", y: 2025, lat: 48.85, lng: 2.35, t: "'Caesarean section', 'Caesar salad' (named for Caesar Cardini, not Julius), and July (Julius's month)." }
  ],
  debate: "The Caesarean section is often said to be named for Caesar's birth — almost certainly false, since his mother Aurelia lived for decades after, and the procedure was then nearly always fatal."
},
{
  id: "chili", name: "How chili peppers took over Asia", cat: "Food",
  sum: "Thai, Sichuan, Korean and Indian cooking all depend on a plant that arrived from the Americas only ~500 years ago.",
  nodes: [
    { l: "Mexico", y: -4000, lat: 19.0, lng: -97.0, t: "Chili peppers domesticated in Mexico ~6,000 years ago." },
    { rel: "introduced through trade", l: "Spain & Portugal", y: 1493, lat: 38.72, lng: -9.14, t: "Columbus called them 'pimientos' thinking they were related to black pepper — a naming confusion that persists." },
    { rel: "introduced through trade", l: "Goa, India", y: 1520, lat: 15.5, lng: 73.83, t: "Portuguese traders bring chilies to India; they spread rapidly because they grow easily and are cheaper than black pepper." },
    { rel: "spread to", l: "Thailand & Southeast Asia", y: 1550, lat: 13.75, lng: 100.5, t: "Absorbed so thoroughly that Thai cuisine is now defined by them." },
    { rel: "spread to", l: "Korea (gochugaru)", y: 1600, lat: 37.57, lng: 126.98, t: "Possibly arrived via Japan during the 1590s Imjin War. Before chili, kimchi was not red." },
    { rel: "spread to", l: "Sichuan", y: 1700, lat: 30.66, lng: 104.06, t: "Chilies became central to Sichuan cooking only in the 18th–19th centuries; the native numbing spice is Sichuan peppercorn." },
    { rel: "spread to", l: "Hungary (paprika)", y: 1600, lat: 47.5, lng: 19.04, t: "Possibly via Ottoman routes — the national spice of Hungary is American." }
  ],
  debate: "Exact routes to Korea and China (via Portuguese, Japanese, or overland) are debated."
},
{
  id: "latin", name: "Latin → the Romance languages", cat: "Language",
  sum: "The spoken Latin of soldiers and merchants splintered into Spanish, French, Italian, Portuguese, Romanian and more.",
  nodes: [
    { l: "Latium", y: -500, lat: 41.89, lng: 12.49, t: "Latin is a local language of the Rome area, one of several Italic languages." },
    { rel: "spread to", l: "Roman provinces", y: 100, lat: 45.0, lng: 5.0, t: "Vulgar (spoken) Latin spreads with the empire, mixing with local languages like Gaulish and Iberian." },
    { rel: "evolved into", l: "Old French", y: 842, lat: 48.58, lng: 7.75, t: "The Oaths of Strasbourg (842) are the earliest text in a Romance language distinct from Latin." },
    { rel: "evolved into", l: "Spanish & Portuguese", y: 1000, lat: 40.4, lng: -3.7, t: "Shaped also by ~700 years of Arabic contact: ~4,000 Spanish words come from Arabic (aceite, almohada, ojalá)." },
    { rel: "evolved into", l: "Italian (Dante)", y: 1320, lat: 43.77, lng: 11.25, t: "Dante's Divine Comedy in Tuscan dialect becomes the basis of standard Italian." },
    { rel: "evolved into", l: "Romanian", y: 1521, lat: 44.43, lng: 26.1, t: "An island of Romance in the Slavic world, descended from Latin in the Roman province of Dacia. Earliest surviving text: Neacșu's letter, 1521." },
    { rel: "spread to", l: "The Americas & beyond", y: 1600, lat: -15.8, lng: -47.9, t: "Colonialism made Spanish and Portuguese among the world's most spoken languages — Brazil alone has more Portuguese speakers than Portugal by ~20×." }
  ],
  debate: "English isn't a Romance language, but ~60% of its vocabulary comes from Latin and French."
}
];

// Curated comparison
window.ATLAS_COMPARE = {
  title: "Roman Empire vs. Han China, c. 100 CE",
  a: "Roman Empire", b: "Han China",
  rows: [
    ["Population", "~50–70 million", "~55–60 million (census of 2 CE: 57.7 million)"],
    ["Political structure", "Emperor, Senate (largely ceremonial), provincial governors", "Emperor, imperial court, commanderies and vassal kingdoms"],
    ["Administration", "Small bureaucracy; relied on city elites to govern and collect taxes", "Extensive salaried bureaucracy; officials selected partly by Confucian learning"],
    ["Legitimacy", "Military backing, imperial cult, republican traditions", "Mandate of Heaven — rulers lose legitimacy if they rule badly"],
    ["Economy", "Agriculture, taxation, Mediterranean sea trade, coinage", "Agriculture, taxation, salt and iron monopolies, Silk Road trade"],
    ["Ideas", "Stoicism, Roman law, rhetoric, Greek philosophy", "Confucianism (state orthodoxy), Daoism, Legalist administration"],
    ["Infrastructure", "Roads, aqueducts, ports, concrete", "Roads, canals, irrigation, frontier walls"],
    ["Frontier threat", "Germanic peoples, Parthian Persia", "Xiongnu nomadic confederation"],
    ["Technology", "Concrete, arches, water mills, glassblowing", "Paper, cast iron, the seismoscope, wheelbarrow, crossbow triggers"],
    ["Fate", "Western half fell 476; Eastern half lasted to 1453", "Collapsed 220 into Three Kingdoms; reunified under Sui (589)"],
    ["Legacy", "Romance languages, civil law, the Church, Western political vocabulary", "Han ethnic identity, Chinese characters (Hanzi), Confucian bureaucratic tradition"]
  ]
};
