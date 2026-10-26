// Civilization, polity and society profiles.
// ev = how much we know: documented | mixed | archaeological | oral
// r = display radius in km (a rough footprint, NOT a border)
window.ATLAS_ENTITIES = [
{
  id: "sumer", name: "Sumer & Early Mesopotamia", start: -3500, end: -2000, lat: 31.3, lng: 45.6, r: 350, reg: "me", ev: "mixed",
  modern: "Southern Iraq",
  sum: "A patchwork of city-states between the Tigris and Euphrates — Uruk, Ur, Lagash, Eridu — where cities, writing, and bureaucracy first appeared together.",
  places: [["Uruk", "Warka, Iraq", 31.32, 45.64], ["Ur", "Tell el-Muqayyar, near Nasiriyah, Iraq", 30.96, 46.1], ["Eridu", "Abu Shahrain, Iraq", 30.82, 45.99]],
  rel: ["babylon", "egypt", "indus", "persia"],
  s: {
    origins: "Grew out of the Ubaid farming culture (c. 6500–3800 BCE). Irrigation agriculture in the river floodplain produced surpluses that supported temples, specialists and eventually kings.",
    geography: "Flat alluvial plain with almost no stone, timber, or metal — so Sumerians had to trade for nearly everything except grain, clay, reeds and dates. That need for trade is one reason record-keeping mattered so much.",
    politics: "Rival city-states ruled by an ensi or lugal (\"big man\"), constantly fighting over water and fields. Sargon of Akkad united the region c. 2334 BCE in what is often called the first empire.",
    economy: "Temples and palaces ran huge redistributive economies: grain rations, wool workshops, herds. Barley functioned as money; silver by weight was used for larger transactions.",
    science: "Base-60 mathematics — the reason we have 60 minutes in an hour and 360 degrees in a circle. Early wheeled vehicles, the potter's wheel, and sophisticated irrigation.",
    literature: "The Epic of Gilgamesh grew from Sumerian poems about a king of Uruk. It includes a flood story with striking parallels to the later Genesis account.",
    language: "Cuneiform began c. 3200 BCE as accounting tokens and pictographs pressed into clay. Sumerian is a language isolate — related to no known language — yet it stayed a scholarly language for 2,000 years after it stopped being spoken.",
    food: "Beer was a staple and a ration; the Hymn to Ninkasi (c. 1800 BCE) is partly a beer recipe. Barley, dates, onions, lentils and fish were everyday foods.",
    legacy: "Cities, writing, written law, schools, the 60-minute hour, the 7-day week's astronomical roots — many \"firsts\" of civilization trace here, though often in parallel with Egypt.",
    fun: "The oldest known name of a person in writing may be \"Kushim\", an accountant who signed barley receipts c. 3100 BCE. History's first named individual was, apparently, a bookkeeper.",
    debates: "Who \"invented\" writing first, Mesopotamia or Egypt, is still debated; they may have developed it nearly simultaneously and independently."
  }
},
{
  id: "egypt", name: "Ancient Egypt", start: -3100, end: -30, lat: 26.0, lng: 32.2, r: 450, reg: "af", ev: "documented",
  modern: "Egypt, northern Sudan",
  sum: "A Nile-valley civilization that lasted roughly 3,000 years under pharaohs, from the unification of Upper and Lower Egypt to Cleopatra VII's death and Roman annexation.",
  places: [["Memphis", "Mit Rahina, south of Cairo", 29.85, 31.25], ["Thebes", "Luxor, Egypt", 25.7, 32.64], ["Giza", "Giza, Greater Cairo", 29.98, 31.13], ["Alexandria", "Alexandria, Egypt", 31.2, 29.92]],
  rel: ["sumer", "persia", "rome-emp", "aksum"],
  s: {
    origins: "Predynastic Naqada cultures along the Nile coalesced into two kingdoms; tradition credits Narmer/Menes with uniting them c. 3100 BCE.",
    geography: "The Nile flood (until the Aswan High Dam, 1970) deposited fertile silt each year. Deserts on both sides protected Egypt from invasion — a key reason for its unusual longevity.",
    politics: "Old, Middle, and New Kingdoms separated by 'Intermediate Periods' of fragmentation. Later ruled by Nubians, Persians, then the Greek Ptolemaic dynasty after Alexander.",
    religion: "A huge pantheon (Ra, Osiris, Isis, Horus, Amun) and an elaborate afterlife: mummification, the weighing of the heart against the feather of Ma'at. Akhenaten briefly promoted worship of a single sun disk, the Aten.",
    science: "Pyramid engineering, a 365-day civil calendar, surgery described in the Edwin Smith Papyrus, and practical geometry for re-surveying fields after floods.",
    society: "The workers who built the pyramids were paid laborers, not slaves — their villages, bakeries and medical care have been excavated at Giza. Women could own property and initiate divorce.",
    food: "Bread and beer were the core diet and wages. Workers' rations were literally paid in loaves and jugs.",
    language: "Hieroglyphs were deciphered by Champollion in 1822 using the Rosetta Stone, which carried the same decree in hieroglyphic, Demotic, and Greek. Coptic, Egyptian's last stage, survives as a liturgical language.",
    people: "Khufu, Hatshepsut, Akhenaten, Tutankhamun, Ramesses II, Cleopatra VII.",
    legacy: "Our 365-day calendar descends via the Julian calendar from Egypt's. The word 'paper' comes from papyrus.",
    fun: "Cleopatra lived closer in time to the Moon landing than to the building of the Great Pyramid. And she was ethnically Macedonian Greek — the first Ptolemy to actually learn Egyptian.",
    debates: "Exact chronology of early dynasties is uncertain by decades or more. Popular 'aliens built the pyramids' claims ignore abundant evidence of quarries, ramps, tools and workers' records (e.g., the Diary of Merer)."
  }
},
{
  id: "indus", name: "Indus Valley (Harappan) Civilization", start: -3300, end: -1300, lat: 27.3, lng: 70.0, r: 550, reg: "sa", ev: "archaeological",
  modern: "Pakistan, northwest India, eastern Afghanistan",
  sum: "One of the three earliest great civilizations, with remarkably planned cities, standardized bricks and weights, and sewage systems — but a script nobody can yet read.",
  places: [["Mohenjo-daro", "Larkana District, Sindh, Pakistan", 27.33, 68.14], ["Harappa", "Sahiwal District, Punjab, Pakistan", 30.63, 72.86], ["Dholavira", "Kutch, Gujarat, India", 23.89, 70.21], ["Lothal", "Gujarat, India", 22.52, 72.25]],
  rel: ["sumer", "maurya", "india"],
  s: {
    origins: "Grew from Neolithic farming villages like Mehrgarh (c. 7000 BCE), one of the earliest farming sites in South Asia.",
    geography: "Covered more area than Egypt and Mesopotamia combined, along the Indus and the now-dry Ghaggar-Hakra river system.",
    politics: "Strikingly, no clear palaces, royal tombs, or monuments to kings have been found. How it was governed is one of archaeology's great puzzles.",
    economy: "Traded with Mesopotamia — Mesopotamian texts mention 'Meluhha', probably the Indus region. Indus seals have been found in Iraq.",
    science: "Grid-planned streets, covered drains, flush-style toilets connected to sewers, a standardized weight system, and the Great Bath of Mohenjo-daro.",
    language: "The Indus script (around 400 signs) is undeciphered. We don't know what language they spoke.",
    legacy: "Possible continuities into later South Asian culture (e.g., some argue for proto-yoga postures on seals, or early forms of later deities), but these are speculative.",
    fun: "Their bricks follow a 1:2:4 ratio — the same proportion still considered efficient for bricklaying today.",
    debates: "Why it declined is debated: shifting rivers and monsoon weakening are the leading explanations. The once-popular 'Aryan invasion destroyed it' theory is largely abandoned by archaeologists."
  }
},
{
  id: "babylon", name: "Old Babylonian Empire", start: -1894, end: -1595, lat: 32.54, lng: 44.42, r: 300, reg: "me", ev: "documented",
  modern: "Iraq",
  sum: "The first Babylonian empire, built by Hammurabi (r. c. 1792–1750 BCE), famous for his law code — ended when the Hittites sacked Babylon in 1595 BCE. (See also Kassite Babylonia and the Neo-Babylonian Empire.)",
  places: [["Babylon", "Hillah, Babil Governorate, Iraq", 32.54, 44.42]],
  rel: ["sumer", "kassite", "neo-babylon", "hittites"],
  s: {
    politics: "Hammurabi (r. c. 1792–1750 BCE) built the first Babylonian empire. The Neo-Babylonian Empire under Nebuchadnezzar II destroyed Jerusalem's temple (587/586 BCE) and deported Judeans — the Babylonian Exile.",
    science: "Babylonian astronomers kept systematic records for centuries and could predict lunar eclipses. A 2016 study showed they used geometry-like methods to track Jupiter — techniques once thought invented in 14th-century Europe.",
    ideas: "The Code of Hammurabi: 282 laws carved on a stele. 'An eye for an eye' — but punishments depended on social class.",
    legacy: "The Babylonian Exile shaped the compilation of the Hebrew Bible. Zodiac astrology descends from Babylonian omen astronomy.",
    debates: "The Hanging Gardens of Babylon have never been found; one scholar (Stephanie Dalley) argues they were actually at Nineveh."
  }
},
{
  id: "shang", name: "Shang Dynasty", start: -1600, end: -1046, lat: 35.5, lng: 114.0, r: 350, reg: "ea", ev: "mixed",
  modern: "Henan, Hebei, Shandong (China)",
  sum: "The first Chinese dynasty confirmed by archaeology and writing — bronze ritual vessels, chariots, and oracle bones.",
  places: [["Yin (Anyang)", "Anyang, Henan, China", 36.12, 114.32]],
  rel: ["han"],
  s: {
    religion: "Kings asked ancestors questions by heating cattle shoulder blades and turtle shells, reading the cracks, and carving the answers: the oracle bones.",
    language: "Oracle bone script is the direct ancestor of modern Chinese characters — making Chinese one of the oldest continuously used writing systems.",
    art: "Spectacular bronze casting using piece-mold technique. The tomb of Lady Fu Hao, a queen and general, held 468 bronze objects.",
    debates: "The earlier Xia dynasty in traditional histories has no confirmed written evidence; whether the Erlitou culture was 'Xia' is contested."
  }
},
{
  id: "olmec", name: "Olmec Civilization", start: -1600, end: -350, lat: 18.1, lng: -94.4, r: 220, reg: "la", ev: "archaeological",
  modern: "Veracruz and Tabasco, Mexico",
  sum: "Often called Mesoamerica's 'mother culture' — famous for colossal stone heads and possibly the region's earliest writing and calendar.",
  places: [["San Lorenzo", "Veracruz, Mexico", 17.75, -94.76], ["La Venta", "Tabasco, Mexico", 18.1, -94.04]],
  rel: ["maya", "aztec"],
  s: {
    art: "17 colossal basalt heads have been found, some weighing over 20 tons, hauled from mountains up to 150 km away.",
    science: "Likely early users of the Mesoamerican Long Count calendar and of natural rubber — the Olmec name (Nahuatl for 'rubber people') was given by the Aztecs much later.",
    food: "Maize, beans, squash; possibly early processing of cacao.",
    legacy: "The Mesoamerican ballgame, calendar systems and religious motifs spread to later Maya and Aztec societies.",
    debates: "'Mother culture' vs. 'sister cultures': did the Olmec originate these traits, or did they develop in parallel across Mesoamerica?"
  }
},
{
  id: "phoenicia", name: "Phoenicia", start: -1500, end: -300, lat: 33.6, lng: 35.4, r: 120, reg: "me", ev: "mixed",
  modern: "Lebanon, coastal Syria, northern Israel",
  sum: "Seafaring city-states — Tyre, Sidon, Byblos — who spread the alphabet and founded trading colonies across the Mediterranean.",
  places: [["Tyre", "Sour, Lebanon", 33.27, 35.2], ["Byblos", "Jbeil, Lebanon", 34.12, 35.65], ["Sidon", "Saida, Lebanon", 33.56, 35.37]],
  rel: ["carthage", "greece"],
  s: {
    economy: "Famous for Tyrian purple dye made from murex sea snails — it took thousands of snails for a single gram, which is why purple became the color of royalty.",
    language: "Their 22-letter consonantal alphabet was adopted by the Greeks (who added vowels), and from there came Latin, Cyrillic and our alphabet. Aramaic, Hebrew and Arabic scripts also descend from it.",
    legacy: "The word 'Bible' comes from Byblos, the port through which Egyptian papyrus reached Greece.",
    fun: "Herodotus reports Phoenicians sailed around Africa for Pharaoh Necho II (c. 600 BCE). He doubted it because they claimed the sun was on their right — which is exactly what would happen south of the equator."
  }
},
{
  id: "persia", name: "Achaemenid Persian Empire", start: -550, end: -330, lat: 32.0, lng: 52.0, r: 1300, reg: "me", ev: "documented",
  modern: "Iran, Iraq, Turkey, Egypt, Afghanistan, Pakistan, and more",
  sum: "The first empire to span three continents — from the Indus to Egypt and Thrace — famous for tolerating local customs, its Royal Road, and the satrapy system.",
  places: [["Persepolis", "near Shiraz, Fars Province, Iran", 29.93, 52.89], ["Susa", "Shush, Khuzestan, Iran", 32.19, 48.25], ["Pasargadae", "Fars Province, Iran (tomb of Cyrus)", 30.19, 53.17], ["Sardis", "Sart, Manisa Province, Turkey", 38.48, 28.04], ["Ecbatana", "Hamadan, Iran", 34.8, 48.52]],
  rel: ["babylon", "greece", "egypt", "maurya", "alexander"],
  s: {
    origins: "Cyrus the Great, a Persian vassal king, overthrew his Median overlords c. 550 BCE, then conquered Lydia (546) and Babylon (539).",
    geography: "Heartland in Fars (Persis), southwestern Iran. At its peak (c. 500 BCE) it may have ruled over 40% of the world's population — though such estimates are very rough.",
    politics: "Divided into satrapies (provinces) under satraps, watched by royal inspectors called 'the King's Eyes and Ears'. Darius I standardized taxes and coinage. Defeated by Greeks at Marathon (490) and Salamis (480); conquered by Alexander (334–330).",
    economy: "The gold daric coin, standardized tribute, irrigation via qanats (underground channels still used in Iran today), and the 2,700 km Royal Road from Sardis to Susa.",
    religion: "The kings honored Ahura Mazda, the god of Zoroastrianism, while generally tolerating local religions. Cyrus let Judean exiles return to rebuild the Jerusalem temple — and is called a 'messiah' (anointed one) in Isaiah.",
    society: "Persepolis tablets show workers — including women — receiving rations, with extra for new mothers.",
    art: "Persepolis's reliefs show delegations from across the empire bringing gifts, a visual statement of multi-ethnic rule.",
    people: "Cyrus II, Cambyses II, Darius I, Xerxes I, Darius III.",
    legacy: "Its model of a multi-ethnic empire with provinces, roads and postal relays influenced Alexander, the Seleucids, Mauryas, Romans and later Islamic empires. Herodotus's description of the Persian couriers inspired the unofficial US Postal Service motto: 'Neither snow nor rain nor heat nor gloom of night…'",
    fun: "The Cyrus Cylinder is sometimes called 'the first human rights charter' — a UN replica sits in New York. Most historians say that's a modern overreading of standard Mesopotamian royal propaganda.",
    debates: "Much of our narrative comes from Greek enemies (Herodotus), so Persian 'decadence' stereotypes need caution. Persian royal inscriptions (e.g., Behistun) give the empire's own voice."
  }
},
{
  id: "greece", name: "Greek City-States", start: -800, end: -146, lat: 38.0, lng: 23.5, r: 330, reg: "eu", ev: "documented",
  modern: "Greece, western Turkey, plus colonies in Italy, Sicily, the Black Sea, southern France",
  sum: "Hundreds of independent poleis — Athens, Sparta, Corinth, Thebes, Miletus — that shared a language, gods and the Olympics, and produced philosophy, democracy, and theater.",
  places: [["Athens", "Athens, Greece", 37.97, 23.72], ["Sparta", "Sparti, Laconia, Greece", 37.08, 22.43], ["Miletus", "near Balat, Aydın, Turkey", 37.53, 27.28], ["Syracuse", "Syracuse, Sicily, Italy", 37.08, 15.29], ["Massalia", "Marseille, France", 43.3, 5.37], ["Byzantion", "Istanbul, Turkey", 41.01, 28.98]],
  rel: ["persia", "rome-rep", "alexander", "phoenicia", "byzantine"],
  s: {
    origins: "After the Bronze Age collapse ended the Mycenaean palaces (c. 1200 BCE), Greece re-emerged in the 8th century with the alphabet, Homer, and the polis.",
    politics: "Athens developed democracy (Cleisthenes, 508 BCE) — direct, but only for adult male citizens. Sparta was a militarized oligarchy with two kings, resting on a huge enslaved helot population.",
    ideas: "Pre-Socratics asked what the world is made of; Socrates, Plato and Aristotle founded much of Western philosophy. Later schools: Stoicism, Epicureanism, Cynicism.",
    science: "Euclid's geometry, Archimedes' mechanics, Eratosthenes measuring Earth's circumference remarkably accurately, Hippocratic medicine.",
    literature: "Homer's Iliad and Odyssey, tragedies of Aeschylus, Sophocles and Euripides, comedies of Aristophanes, histories of Herodotus and Thucydides.",
    food: "The 'Mediterranean triad': wheat/barley, olives, and wine. Symposia were drinking parties where wine was always mixed with water — drinking it neat was considered barbaric.",
    people: "Pericles, Socrates, Plato, Aristotle, Sappho, Herodotus, Leonidas, Themistocles.",
    legacy: "Political vocabulary (democracy, politics, tyranny), the Olympics, theater, the scientific method's roots, and a huge share of scientific and medical terminology.",
    fun: "'Idiot' comes from Greek idiōtēs — a private person who didn't take part in public life.",
    debates: "Calling Athens the 'birthplace of democracy' is contested: assemblies existed elsewhere, and Athens excluded women, slaves and foreigners — perhaps 10–20% of residents could vote."
  }
},
{
  id: "alexander", name: "Alexander's Empire & Hellenistic Kingdoms", start: -336, end: -30, lat: 33.5, lng: 44.0, r: 1200, reg: "me", ev: "documented",
  modern: "Greece to Pakistan, plus Egypt",
  sum: "Alexander the Great conquered Persia in about a decade; his generals split the empire into the Ptolemaic, Seleucid and Antigonid kingdoms, spreading Greek culture from Egypt to Afghanistan.",
  places: [["Alexandria", "Alexandria, Egypt", 31.2, 29.92], ["Babylon", "Hillah, Iraq (where Alexander died)", 32.54, 44.42], ["Ai-Khanoum", "Takhar Province, Afghanistan", 37.17, 69.41], ["Pella", "Central Macedonia, Greece", 40.76, 22.52]],
  rel: ["persia", "greece", "maurya", "rome-rep", "egypt"],
  s: {
    politics: "After Alexander died in 323 BCE (aged 32), his successor generals (Diadochi) fought for decades. Seleucus traded eastern lands to Chandragupta Maurya for 500 war elephants.",
    science: "Alexandria's Museum and Library became the ancient world's research center. Eratosthenes, Euclid, Herophilus (who dissected human bodies) worked there.",
    art: "Greco-Buddhist art in Gandhara blended Greek sculpture with Buddhist subjects — some of the earliest human images of the Buddha.",
    legacy: "Koine Greek became the common language of the eastern Mediterranean, which is why the New Testament was written in Greek.",
    fun: "Over 20 cities were named Alexandria. Kandahar in Afghanistan may derive its name from 'Alexandria'.",
    debates: "Was Alexander a visionary uniter of East and West or a brutal conqueror? Ancient sources were written centuries later and both views have defenders."
  }
},
{
  id: "rome-rep", name: "Roman Republic", start: -509, end: -27, lat: 41.9, lng: 12.5, r: 500, reg: "eu", ev: "documented",
  modern: "Italy, then the whole Mediterranean",
  sum: "Rome's period of elected magistrates, the Senate, and assemblies — during which a city-state became master of the Mediterranean.",
  places: [["Rome", "Rome, Italy", 41.89, 12.49], ["Capua", "Santa Maria Capua Vetere, Italy", 41.08, 14.25], ["Cannae", "Apulia, Italy", 41.3, 16.13]],
  rel: ["rome-emp", "carthage", "greece", "alexander"],
  s: {
    origins: "Romans dated the founding of their city to 753 BCE (legendary) and expelled their last king in 509 BCE. Etruscan and Greek influences were strong.",
    politics: "Two consuls elected annually, a Senate of ex-magistrates, popular assemblies, tribunes to protect plebeians. Checks and balances that inspired the US Constitution's framers. Collapsed through civil wars into one-man rule.",
    economy: "Conquest brought vast numbers of enslaved people and plunder; large slave-worked estates (latifundia) displaced small farmers — a core cause of the Republic's crises.",
    people: "Scipio Africanus, Cato, the Gracchi brothers, Marius, Sulla, Cicero, Pompey, Julius Caesar, Spartacus.",
    legacy: "The words senate, republic, veto, census, dictator, candidate (from candidus, the bright white toga candidates wore).",
    fun: "Under the Republic, a 'dictator' was a legitimate emergency office, limited to six months. Caesar's 'dictator for life' title in 44 BCE broke that tradition — and he was murdered a month later.",
    debates: "Was the Republic's fall inevitable given empire and inequality, or the result of specific choices by ambitious men? Historians still argue."
  }
},
{
  id: "carthage", name: "Carthage", start: -814, end: -146, lat: 36.85, lng: 10.32, r: 300, reg: "af", ev: "mixed",
  modern: "Tunisia, plus parts of Spain, Sicily, Sardinia",
  sum: "A Phoenician colony that became a western Mediterranean naval power and Rome's great rival in the three Punic Wars.",
  places: [["Carthage", "suburb of Tunis, Tunisia", 36.85, 10.32], ["Carthago Nova", "Cartagena, Spain", 37.6, -0.98]],
  rel: ["phoenicia", "rome-rep"],
  s: {
    politics: "An oligarchic republic with two annual 'suffetes' — Aristotle praised its constitution. Lost the First Punic War (264–241 BCE), nearly won the Second under Hannibal, and was razed in 146 BCE.",
    economy: "A commercial empire of trade and agriculture; Mago's agricultural treatise was so respected the Roman Senate had it translated into Latin.",
    people: "Hannibal Barca, Hamilcar Barca, Dido/Elissa (legendary founder).",
    fun: "The story that Romans 'salted the earth' of Carthage is a modern invention — no ancient source says it. Rome later rebuilt Carthage as a major Roman city.",
    debates: "Accounts of Carthaginian child sacrifice (the tophet) were long dismissed as Roman propaganda; archaeological evidence now leads many scholars to think it did occur, though it remains debated."
  }
},
{
  id: "rome-emp", name: "Roman Empire", start: -27, end: 476, lat: 41.9, lng: 14.0, r: 1500, reg: "eu", ev: "documented",
  modern: "~40 modern countries around the Mediterranean, Western Europe, and the Near East",
  sum: "From Augustus to the fall of the West in 476 CE, Rome ruled perhaps 50–70 million people from Britain to Mesopotamia. Its eastern half continued for another thousand years.",
  places: [["Rome", "Rome, Italy", 41.89, 12.49], ["Londinium", "London, UK", 51.51, -0.09], ["Lutetia", "Paris, France", 48.85, 2.35], ["Colonia Agrippina", "Cologne, Germany", 50.94, 6.96], ["Antioch", "Antakya, Turkey", 36.2, 36.16], ["Ravenna", "Ravenna, Italy (last western capital)", 44.42, 12.2]],
  rel: ["rome-rep", "han", "byzantine", "carthage", "aksum"],
  s: {
    origins: "Octavian defeated Antony and Cleopatra (31 BCE) and became Augustus in 27 BCE, keeping republican forms while holding real power.",
    politics: "Emperors backed by the army; provinces under governors. The 'Pax Romana' (c. 27 BCE–180 CE) was relatively peaceful internally. The 3rd-century crisis saw ~26 emperors in 50 years.",
    economy: "Mediterranean-wide trade in grain, olive oil, wine. Egypt's grain fed Rome's population of ~1 million. Ice cores from Greenland show lead pollution from Roman silver mining.",
    science: "Engineering above all: roads (~80,000 km paved), aqueducts, concrete, domes (the Pantheon is still the largest unreinforced concrete dome).",
    religion: "A pagan polytheism with imperial cult, then Christianity — persecuted, tolerated (313), and made the state religion (380).",
    language: "Latin evolved into Spanish, Portuguese, French, Italian, Romanian and more. Greek remained dominant in the East.",
    people: "Augustus, Tiberius, Nero, Trajan, Hadrian, Marcus Aurelius, Constantine, Theodosius.",
    legacy: "Roman law underlies civil-law systems across Europe and Latin America. The calendar (July = Julius, August = Augustus). Titles 'Kaiser' and 'Tsar' derive from 'Caesar'.",
    fun: "The emperor Caligula reportedly planned to make his horse a consul. That's probably exaggerated hostile gossip — but the horse did have a marble stall.",
    debates: "Why did the West fall? Edward Gibbon blamed Christianity and moral decay; modern explanations include pressure from migrating peoples, civil wars, fiscal strain, pandemics (Antonine, Cyprian), and climate change. Some historians prefer 'transformation' to 'fall'."
  }
},
{
  id: "maurya", name: "Mauryan Empire", start: -322, end: -185, lat: 24.0, lng: 81.0, r: 1100, reg: "sa", ev: "mixed",
  modern: "India, Pakistan, Bangladesh, Nepal, eastern Afghanistan",
  sum: "The first empire to unite most of the Indian subcontinent; under Ashoka it promoted Buddhism and carved moral edicts on rocks and pillars.",
  places: [["Pataliputra", "Patna, Bihar, India", 25.6, 85.14], ["Taxila", "near Islamabad, Pakistan", 33.74, 72.79], ["Sarnath", "near Varanasi, India (Ashoka lion capital)", 25.38, 83.02], ["Kalinga", "Odisha, India", 20.3, 85.8]],
  rel: ["alexander", "persia", "gupta", "india", "han"],
  s: {
    origins: "Chandragupta Maurya overthrew the Nanda dynasty c. 322 BCE, reportedly guided by the strategist Chanakya (Kautilya).",
    politics: "A large bureaucracy, spies, and a standing army. The Greek ambassador Megasthenes described Pataliputra as one of the world's great cities.",
    ideas: "The Arthashastra, attributed to Kautilya, is a ruthless treatise on statecraft, economics and espionage — often compared to Machiavelli.",
    religion: "After the bloody conquest of Kalinga (c. 261 BCE), Ashoka expressed remorse and embraced Buddhist principles (dhamma), sending missionaries to Sri Lanka, Central Asia and the Hellenistic kingdoms.",
    language: "Ashoka's edicts in Brahmi script are the oldest substantial deciphered writing in India. Brahmi is the ancestor of most South and Southeast Asian scripts, including Devanagari, Tamil, Thai, and Tibetan.",
    legacy: "India's national emblem is Ashoka's Lion Capital from Sarnath; the 24-spoke wheel on India's flag is the Ashoka Chakra.",
    fun: "Ashoka was largely forgotten for centuries; his inscriptions were only deciphered in 1837 by James Prinsep, who didn't at first realize 'Devanampiya Piyadasi' (Beloved of the Gods) was the same Ashoka of Buddhist legend.",
    debates: "How 'Buddhist' Ashoka's state really was, and how centralized the empire was, are debated. The Arthashastra's dating (possibly compiled centuries later) is uncertain."
  }
},
{
  id: "han", name: "Han Dynasty", start: -206, end: 220, lat: 34.3, lng: 110.0, r: 1300, reg: "ea", ev: "documented",
  modern: "China, northern Vietnam, northern Korea",
  sum: "Four centuries of Chinese imperial rule so formative that the majority ethnic group still calls itself 'Han'. Confucian bureaucracy, paper, and the Silk Roads.",
  places: [["Chang'an", "Xi'an, Shaanxi, China", 34.3, 108.9], ["Luoyang", "Luoyang, Henan, China", 34.62, 112.45], ["Dunhuang", "Dunhuang, Gansu, China", 40.14, 94.66]],
  rel: ["shang", "rome-emp", "tang", "maurya"],
  s: {
    origins: "Founded by Liu Bang, a peasant-born rebel, after the harsh short-lived Qin dynasty that first unified China (221 BCE).",
    politics: "Emperor Wu (r. 141–87 BCE) made Confucianism state orthodoxy and expanded into Central Asia, Korea and Vietnam. A brief usurpation by Wang Mang (9–23 CE) splits it into Western and Eastern Han.",
    economy: "State monopolies on salt and iron — famously debated in the 'Discourses on Salt and Iron' (81 BCE), essentially an ancient debate about state intervention vs. free markets.",
    ideas: "Confucian ethics, Daoism, and Legalist administration coexisted. Officials increasingly recruited by recommendation and examination of Confucian learning.",
    science: "Paper (improved by Cai Lun, 105 CE), the seismoscope of Zhang Heng, the wheelbarrow, cast iron, early compasses (lodestone 'south-pointers' for divination).",
    literature: "Sima Qian's Records of the Grand Historian — written after he chose castration over execution to finish his father's history.",
    people: "Liu Bang, Emperor Wu, Zhang Qian, Sima Qian, Ban Zhao (female historian), Cai Lun.",
    legacy: "Chinese characters are called Hanzi ('Han characters'); Japanese 'kanji' and Korean 'hanja' are the same word.",
    fun: "Rome and Han China knew of each other only vaguely. Romans called China 'Seres' (land of silk); the Chinese called Rome 'Da Qin'. A Chinese envoy, Gan Ying, reached the Persian Gulf in 97 CE but was persuaded to turn back.",
    debates: "Whether a 166 CE 'Roman embassy' to Han China was official or merchants claiming to be envoys is unclear."
  }
},
{
  id: "aksum", name: "Kingdom of Aksum", start: 100, end: 940, lat: 14.13, lng: 38.72, r: 350, reg: "af", ev: "mixed",
  modern: "Ethiopia, Eritrea, (briefly) Yemen",
  sum: "A trading empire linking the Roman world, Arabia and India — one of the first states to adopt Christianity, and minter of its own gold coins.",
  places: [["Aksum", "Aksum, Tigray, Ethiopia", 14.13, 38.72], ["Adulis", "near Zula, Eritrea", 15.26, 39.66]],
  rel: ["rome-emp", "egypt", "abbasid"],
  s: {
    economy: "Exported ivory, gold, incense and exotic animals through the Red Sea port of Adulis. Aksum minted coins in gold, silver and bronze for international trade.",
    religion: "King Ezana converted to Christianity c. 330s CE — among the first rulers anywhere to do so. Ethiopian Orthodox Christianity continues this tradition.",
    art: "Giant carved granite stelae (obelisks), one 33 m tall. The 'Obelisk of Aksum' was looted by Mussolini's Italy in 1937 and returned in 2005.",
    language: "Ge'ez script, still used for Amharic and Tigrinya, and the liturgical Ge'ez language.",
    fun: "The 3rd-century Persian prophet Mani listed Aksum among the four great powers of the world, alongside Rome, Persia and China.",
    debates: "Ethiopian tradition says the Ark of the Covenant rests in Aksum's Church of Our Lady Mary of Zion. No outsider may see it, so it cannot be verified."
  }
},
{
  id: "maya", name: "Maya Civilization", start: -1000, end: 1697, lat: 17.5, lng: -89.5, r: 400, reg: "la", ev: "mixed",
  modern: "Southern Mexico, Guatemala, Belize, western Honduras, El Salvador",
  sum: "Rival city-states with fully developed writing, astronomy and mathematics — at their Classic peak (250–900 CE), among the most densely populated places on Earth.",
  places: [["Tikal", "Petén, Guatemala", 17.22, -89.62], ["Calakmul", "Campeche, Mexico", 18.1, -89.81], ["Chichén Itzá", "Yucatán, Mexico", 20.68, -88.57], ["Palenque", "Chiapas, Mexico", 17.48, -92.05], ["Copán", "Honduras", 14.84, -89.14]],
  rel: ["olmec", "aztec"],
  s: {
    politics: "Never a single empire — 'superpowers' Tikal and Calakmul fought proxy wars through vassal cities for centuries.",
    science: "One of the earliest uses of zero as a number. The Dresden Codex predicts Venus cycles and eclipses with impressive accuracy.",
    language: "Maya hieroglyphs were largely deciphered in the late 20th century (with key insights from Tatiana Proskouriakoff and Yuri Knorozov). Around 30 Mayan languages are spoken today by ~6 million people.",
    food: "Maize was sacred — in the Popol Vuh, the gods make humans from maize dough. Cacao was a drink of elites and used in exchange.",
    literature: "The Popol Vuh, the K'iche' Maya creation epic, survived through a 16th-century transcription.",
    legacy: "The Maya never disappeared — millions of Maya people live in the region today. The last independent Maya kingdom, Nojpetén, fell to Spain in 1697.",
    fun: "The '2012 Maya apocalypse' was a modern misunderstanding: the Long Count simply ticked over to a new b'ak'tun, like an odometer.",
    debates: "The Classic Maya collapse (c. 800–950) had many proposed causes: severe droughts (supported by lake-sediment data), endemic warfare, overpopulation and deforestation. LiDAR surveys since 2018 have revealed far more structures and people than previously thought."
  }
},
{
  id: "gupta", name: "Gupta Empire", start: 320, end: 550, lat: 25.6, lng: 82.0, r: 800, reg: "sa", ev: "mixed",
  modern: "Northern India, Bangladesh",
  sum: "Often called India's 'classical age' — Sanskrit literature, Hindu temple architecture, and breakthroughs in mathematics and astronomy.",
  places: [["Pataliputra", "Patna, Bihar, India", 25.6, 85.14], ["Nalanda", "Bihar, India (later great university)", 25.14, 85.44], ["Ujjain", "Madhya Pradesh, India", 23.18, 75.78]],
  rel: ["maurya", "india", "abbasid"],
  s: {
    science: "Aryabhata (b. 476) calculated pi to 3.1416, proposed that Earth rotates on its axis, and explained eclipses. The decimal place-value system with zero developed in this era and was later transmitted to the Islamic world.",
    literature: "Kalidasa's play Shakuntala and poem Meghaduta. The Panchatantra fables later traveled via Persian and Arabic into Europe.",
    religion: "Hindu traditions centered on Vishnu and Shiva flourished; Buddhism remained strong (Nalanda founded in the 5th century).",
    fun: "Chess likely descends from chaturanga, an Indian game recorded around the 6th century — which traveled to Persia as shatranj. 'Checkmate' comes from Persian shāh māt ('the king is helpless').",
    debates: "The 'golden age' label was partly constructed by 19th–20th century nationalist historians; regional kingdoms were also flourishing."
  }
},
{
  id: "byzantine", name: "Byzantine (Eastern Roman) Empire", start: 330, end: 1453, lat: 39.5, lng: 29.5, r: 700, reg: "me", ev: "documented",
  modern: "Turkey, Greece, the Balkans; at times Italy, Egypt, Levant",
  sum: "The Roman Empire's eastern half, ruled from Constantinople for over a thousand years after the West fell. Its people called themselves Romans.",
  places: [["Constantinople", "Istanbul, Turkey", 41.01, 28.98], ["Ravenna", "Ravenna, Italy", 44.42, 12.2], ["Thessalonica", "Thessaloniki, Greece", 40.64, 22.94], ["Trebizond", "Trabzon, Turkey", 41.0, 39.72]],
  rel: ["rome-emp", "ottoman", "abbasid", "vikings"],
  s: {
    politics: "Justinian I (r. 527–565) reconquered Italy and North Africa and codified Roman law. Lost much territory to Arab conquests in the 7th century; sacked by Crusaders in 1204; fell to the Ottomans in 1453.",
    religion: "Center of Orthodox Christianity. The 1054 schism split the Eastern and Western churches. The Iconoclasm controversy (8th–9th c.) fought over religious images.",
    science: "'Greek fire', a mysterious incendiary weapon sprayed from ships — its formula is still unknown.",
    art: "Hagia Sophia (537): for nearly a thousand years the largest cathedral in the world.",
    legacy: "Justinian's Code is the basis of civil law in much of Europe. Byzantine missionaries Cyril and Methodius created the alphabet that led to Cyrillic. Preserved many Greek classics later transmitted to Renaissance Italy.",
    fun: "Nobody at the time called it 'Byzantine' — the term was popularized by German historian Hieronymus Wolf in 1557. The Ottomans called its lands 'Rum' (Rome), and its rulers 'Kayser-i Rum' — Caesar of Rome.",
    debates: "The 'decadent Byzantium' image owes much to Enlightenment writers like Gibbon; modern historians stress its resilience."
  }
},
{
  id: "abbasid", name: "Abbasid Caliphate", start: 750, end: 1258, lat: 33.3, lng: 44.4, r: 1300, reg: "me", ev: "documented",
  modern: "Iraq, Iran, Syria, Egypt, Arabia, North Africa, Central Asia",
  sum: "The caliphate ruled from Baghdad during the 'Islamic Golden Age': the House of Wisdom, algebra, translation of Greek science, and the Thousand and One Nights setting.",
  places: [["Baghdad", "Baghdad, Iraq", 33.31, 44.36], ["Samarra", "Samarra, Iraq", 34.2, 43.87], ["Bukhara", "Bukhara, Uzbekistan", 39.77, 64.42], ["Córdoba", "Córdoba, Spain (rival Umayyad caliphate)", 37.88, -4.78]],
  rel: ["byzantine", "mongol", "tang", "gupta"],
  s: {
    origins: "Overthrew the Umayyad dynasty in 750; a surviving Umayyad prince fled to Spain and founded the Emirate of Córdoba.",
    politics: "Founded Baghdad (762) as a round city. Real power fragmented from the 10th century to regional dynasties (Buyids, Seljuks), while caliphs kept religious prestige.",
    economy: "A vast trade zone from Spain to China using dinars and dirhams, early cheques (ṣakk — the origin of the word 'check'), and paper.",
    science: "Al-Khwarizmi wrote the book on 'al-jabr' (algebra) — and 'algorithm' comes from his name. Hindu-Arabic numerals spread west from here. Ibn al-Haytham did pioneering experimental work in optics.",
    ideas: "Greek philosophy translated into Arabic and debated by al-Kindi, al-Farabi, Ibn Sina (Avicenna), and later Ibn Rushd (Averroes) in Spain, whose commentaries on Aristotle reshaped European scholasticism.",
    literature: "The Thousand and One Nights stories, set partly in the court of Harun al-Rashid.",
    food: "Many words in European languages came through Arabic: sugar (sukkar), coffee (qahwa), syrup (sharāb), orange (nāranj, from Persian), spinach.",
    legacy: "Algebra, algorithm, alcohol, alchemy, zenith, admiral — and much of Greek knowledge Europe later 'rediscovered' passed through Arabic translation.",
    fun: "When the Mongols sacked Baghdad in 1258, chroniclers said the Tigris ran black with the ink of books thrown into it.",
    debates: "The idea that the 'Golden Age' ended in 1258 and Islamic science then declined is now heavily challenged; important work continued in Persia, the Ottoman Empire and elsewhere."
  }
},
{
  id: "tang", name: "Tang Dynasty", start: 618, end: 907, lat: 34.3, lng: 108.9, r: 1300, reg: "ea", ev: "documented",
  modern: "China, plus influence over Central Asia, Korea, Vietnam",
  sum: "A cosmopolitan golden age with Chang'an as perhaps the world's largest city — poetry, Buddhism, woodblock printing, and the Silk Road at its height.",
  places: [["Chang'an", "Xi'an, China", 34.3, 108.9], ["Dunhuang", "Gansu, China", 40.14, 94.66], ["Talas", "near Taraz, Kazakhstan", 42.5, 72.2]],
  rel: ["han", "abbasid", "heian", "mongol"],
  s: {
    politics: "Wu Zetian (r. 690–705) was China's only woman to rule as emperor in her own name. The An Lushan Rebellion (755–763) killed millions and permanently weakened the dynasty.",
    science: "Woodblock printing — the Diamond Sutra (868) is the oldest dated printed book. Early gunpowder formulas came from Daoist alchemists searching for elixirs of immortality.",
    literature: "The 'golden age' of Chinese poetry: Li Bai, Du Fu, Wang Wei. Tang poems are still memorized by Chinese schoolchildren.",
    religion: "Buddhism flourished — monk Xuanzang traveled to India (629–645) and brought back scriptures; this journey inspired the novel Journey to the West (and Monkey King/Dragon Ball).",
    legacy: "Japan's Nara and Kyoto were modeled on Chang'an's grid layout. Chinatowns are called 'Tang people's streets' (Tángrénjiē) in Chinese.",
    fun: "The Battle of Talas (751) between Tang and Abbasid forces is the only major clash between Chinese and Arab armies — and legend says captured Chinese papermakers taught the craft in Samarkand. Paper actually reached Central Asia earlier, but the story stuck."
  }
},
{
  id: "heian", name: "Heian Japan", start: 794, end: 1185, lat: 35.01, lng: 135.77, r: 300, reg: "ea", ev: "documented",
  modern: "Japan",
  sum: "A refined court culture in Heian-kyō (Kyoto) that produced the world's first great novel and a distinctly Japanese writing system.",
  places: [["Heian-kyō", "Kyoto, Japan", 35.01, 135.77], ["Nara", "Nara, Japan (earlier capital)", 34.68, 135.8]],
  rel: ["tang"],
  s: {
    literature: "Murasaki Shikibu's Tale of Genji (c. 1008) is often called the world's first novel; Sei Shōnagon's Pillow Book is a witty list-filled diary.",
    language: "The kana syllabaries (hiragana, katakana) evolved from simplified Chinese characters; hiragana was especially associated with women writers.",
    politics: "The Fujiwara clan ruled through marriage alliances with emperors. Ended with the rise of samurai warrior clans and the Kamakura shogunate.",
    legacy: "Kyoto remained the imperial capital until 1868."
  }
},
{
  id: "vikings", name: "Norse / Viking Age Scandinavia", start: 793, end: 1066, lat: 60.5, lng: 12.0, r: 600, reg: "eu", ev: "mixed",
  modern: "Norway, Sweden, Denmark, Iceland, plus settlements from Russia to Canada",
  sum: "Seafaring raiders, traders and settlers whose ships reached Baghdad, Constantinople, Greenland and North America.",
  places: [["Kaupang", "Larvik, Norway", 59.0, 10.03], ["Birka", "Björkö, Sweden", 59.33, 17.54], ["Jórvík", "York, England", 53.96, -1.08], ["L'Anse aux Meadows", "Newfoundland, Canada", 51.6, -55.53], ["Kyiv", "Kyiv, Ukraine (Kievan Rus')", 50.45, 30.52]],
  rel: ["byzantine", "abbasid"],
  s: {
    politics: "Founded or shaped states: Kievan Rus' (the name 'Russia' likely derives from the Rus', Scandinavian traders), Normandy ('land of the Northmen'), and Danelaw England. Byzantine emperors had an elite Varangian Guard of Norsemen.",
    economy: "Huge trade networks — tens of thousands of Abbasid silver dirhams have been found in Scandinavian hoards.",
    literature: "Old Norse sagas and the Eddas, preserved in Iceland — the sources for Odin, Thor, Loki, and Ragnarök in modern pop culture.",
    language: "English got 'sky', 'egg', 'knife', 'window' (wind-eye), 'they', and even the days Tuesday–Friday (Tyr, Odin/Woden, Thor, Frigg) from Norse/Germanic gods.",
    legacy: "Iceland's Althing (930) is among the oldest surviving parliaments. Bluetooth technology is named after Danish king Harald Bluetooth.",
    fun: "Vikings didn't wear horned helmets — that image comes from costumes designed for Wagner's operas in 1876.",
    debates: "'Viking' originally meant a raiding activity, not an ethnicity; most Scandinavians were farmers. DNA studies show Viking-age populations were genetically diverse."
  }
},
{
  id: "khmer", name: "Khmer Empire", start: 802, end: 1431, lat: 13.41, lng: 103.87, r: 500, reg: "sp", ev: "mixed",
  modern: "Cambodia, Thailand, Laos, southern Vietnam",
  sum: "A Southeast Asian empire centered at Angkor — possibly the largest preindustrial urban complex in the world — builder of Angkor Wat.",
  places: [["Angkor", "near Siem Reap, Cambodia", 13.41, 103.87], ["Angkor Wat", "Siem Reap, Cambodia", 13.41, 103.87]],
  rel: ["gupta"],
  s: {
    religion: "Hindu (especially Vishnu and Shiva) and later Mahayana then Theravada Buddhist. Angkor Wat (early 12th c.) was built as a Hindu temple to Vishnu and became Buddhist.",
    science: "A vast hydraulic system of reservoirs (barays) and canals. LiDAR in 2012–2016 revealed a sprawling urban landscape under the jungle.",
    legacy: "Angkor Wat is on Cambodia's national flag — one of the few flags to feature a building.",
    debates: "Angkor's decline after the 14th century is linked to Ayutthaya's attacks, shifting trade toward the coast, and alternating droughts and monsoon floods overwhelming the water system."
  }
},
{
  id: "mongol", name: "Mongol Empire", start: 1206, end: 1368, lat: 47.2, lng: 95.0, r: 2200, reg: "ea", ev: "documented",
  modern: "Mongolia, China, Russia, Central Asia, Iran, Iraq, Korea and more",
  sum: "The largest contiguous land empire in history, built in a few decades by Genghis Khan and his successors — devastating in conquest, connective in peace.",
  places: [["Karakorum", "Kharkhorin, Mongolia", 47.2, 102.82], ["Khanbaliq", "Beijing, China", 39.9, 116.4], ["Sarai", "near Astrakhan, Russia", 47.0, 47.5], ["Tabriz", "Tabriz, Iran (Ilkhanate)", 38.08, 46.29]],
  rel: ["abbasid", "tang", "ming", "ottoman"],
  s: {
    politics: "Temüjin united the steppe tribes and was proclaimed Genghis Khan in 1206. The empire split into four khanates: Yuan China, the Golden Horde, the Ilkhanate, and the Chagatai Khanate.",
    economy: "The Pax Mongolica made overland trade safer; the Yam relay-station system delivered messages across Eurasia. Merchants carried a metal passport called a paiza.",
    society: "Promoted officials on merit regardless of origin; practiced religious tolerance among Buddhists, Muslims, Christians and shamanists.",
    legacy: "Contacts helped move gunpowder, printing knowledge, paper money ideas, and also the Black Death westward. Russia's development under the 'Tatar yoke' shaped its later autocracy (a debated claim).",
    fun: "A 2003 genetic study suggested about 8% of men in a large region of Asia carry a Y-chromosome lineage possibly descended from Genghis Khan's family — roughly 16 million men. (The link to Genghis specifically is inferred, not proven.)",
    debates: "Death tolls (often cited as tens of millions) are highly uncertain. Some environmental historians even link depopulation to reforestation and slight global cooling — very speculative."
  }
},
{
  id: "mali", name: "Mali Empire", start: 1235, end: 1600, lat: 14.0, lng: -5.0, r: 900, reg: "af", ev: "mixed",
  modern: "Mali, Senegal, Guinea, Gambia, Mauritania, Niger, Burkina Faso",
  sum: "A West African empire grown rich on gold and trans-Saharan trade, home of Timbuktu's scholars and the legendary wealth of Mansa Musa.",
  places: [["Niani", "near the Guinea–Mali border", 11.4, -8.4], ["Timbuktu", "Timbuktu, Mali", 16.77, -3.0], ["Djenné", "Djenné, Mali", 13.9, -4.55], ["Gao", "Gao, Mali", 16.27, -0.04]],
  rel: ["abbasid", "ottoman"],
  s: {
    origins: "Sundiata Keita defeated the Sosso king Sumanguru at the Battle of Kirina (c. 1235), founding the empire.",
    economy: "Controlled gold fields (Bambuk, Bure) that supplied much of the Mediterranean's gold; traded for salt from the Sahara, which could be worth its weight in gold far south.",
    ideas: "Timbuktu's Sankore mosque was a center of Islamic scholarship; hundreds of thousands of manuscripts survive, many saved from jihadists in 2012–13 by librarians who smuggled them out.",
    literature: "The Epic of Sundiata is preserved by griots (jeliw), hereditary oral historians — a living tradition today.",
    people: "Sundiata Keita, Mansa Musa, Abu Bakr II (said to have sailed into the Atlantic).",
    legacy: "The Manden Charter (Kouroukan Fouga), attributed to Sundiata's era, is on UNESCO's Intangible Heritage list. The modern state of Mali took its name from the empire.",
    fun: "Mansa Musa's 1324 pilgrimage to Mecca: he reportedly gave away so much gold in Cairo that its value there fell for years (per the chronicler al-Umari).",
    debates: "Claims that Mansa Musa was 'the richest person ever' can't be measured meaningfully. The story of Abu Bakr II sailing to the Americas is unsupported by evidence."
  }
},
{
  id: "zimbabwe", name: "Great Zimbabwe", start: 1100, end: 1450, lat: -20.27, lng: 30.93, r: 250, reg: "af", ev: "archaeological",
  modern: "Zimbabwe, Mozambique",
  sum: "A Shona stone city — the largest ancient structure south of the Sahara — at the center of a gold and ivory trade reaching the Indian Ocean.",
  places: [["Great Zimbabwe", "near Masvingo, Zimbabwe", -20.27, 30.93], ["Mapungubwe", "Limpopo, South Africa (predecessor)", -22.19, 29.39]],
  rel: ["swahili"],
  s: {
    art: "The Great Enclosure's walls are up to 11 m high, built from granite blocks without mortar.",
    economy: "Chinese porcelain, Persian pottery and glass beads found at the site show links to the Indian Ocean via Swahili ports like Kilwa.",
    legacy: "The modern country Zimbabwe ('stone houses' in Shona) is named after it; its soapstone bird appears on the flag.",
    debates: "Colonial authorities in Rhodesia suppressed evidence and promoted myths that Phoenicians or Arabs built it, refusing to credit Africans. Archaeology conclusively shows it was built by ancestors of the Shona."
  }
},
{
  id: "swahili", name: "Swahili Coast City-States", start: 900, end: 1500, lat: -6.0, lng: 39.5, r: 450, reg: "af", ev: "mixed",
  modern: "Kenya, Tanzania, Mozambique, Somalia",
  sum: "Mercantile Muslim city-states — Kilwa, Mombasa, Zanzibar, Lamu — linking African interiors with Arabia, Persia, India and China.",
  places: [["Kilwa Kisiwani", "Tanzania", -8.96, 39.5], ["Mombasa", "Kenya", -4.04, 39.67], ["Lamu", "Kenya", -2.27, 40.9], ["Zanzibar", "Tanzania", -6.16, 39.19]],
  rel: ["zimbabwe", "ming"],
  s: {
    language: "Swahili is a Bantu language with many Arabic loanwords — now spoken by 100+ million people. 'Safari' means 'journey'.",
    economy: "Ran on the monsoon winds that reverse direction seasonally, making Indian Ocean sailing predictable.",
    fun: "In 1414 a giraffe from Malindi (Kenya) arrived at the Ming court via Zheng He's fleet, where it was hailed as a qilin, a mythical auspicious beast.",
    debates: "Colonial-era scholars portrayed these as 'Arab' colonies; archaeology shows they were African towns with diverse influences."
  }
},
{
  id: "puebloan", name: "Ancestral Puebloans", start: 200, end: 1600, lat: 36.8, lng: -108.5, r: 300, reg: "na", ev: "archaeological",
  modern: "Four Corners: New Mexico, Arizona, Colorado, Utah (USA)",
  sum: "Builders of Chaco Canyon's great houses and Mesa Verde's cliff dwellings, ancestors of today's Pueblo peoples (Hopi, Zuni, and others).",
  places: [["Chaco Canyon", "New Mexico, USA", 36.06, -107.96], ["Mesa Verde", "Colorado, USA", 37.18, -108.49]],
  rel: ["aztec"],
  s: {
    art: "Pueblo Bonito at Chaco had ~650 rooms — the largest building in North America until the 1880s.",
    science: "Chaco buildings and roads align with solar and lunar cycles; long straight 'roads' connect distant sites.",
    economy: "Turquoise, macaw feathers and cacao residue found at Chaco show trade with Mesoamerica over 2,000 km away.",
    legacy: "The 'Anasazi' term is a Navajo word that many Pueblo people reject; 'Ancestral Puebloans' is preferred. They didn't 'vanish' — they migrated, and their descendants live in the Southwest today.",
    debates: "Why Chaco and Mesa Verde were abandoned (c. 1150–1300): prolonged drought, social conflict, or religious change?"
  }
},
{
  id: "cahokia", name: "Cahokia & Mississippian Culture", start: 800, end: 1400, lat: 38.66, lng: -90.06, r: 400, reg: "na", ev: "archaeological",
  modern: "Illinois and the Mississippi valley (USA)",
  sum: "A city near modern St. Louis that around 1100 CE may have rivaled contemporary London in population, with earthen pyramids.",
  places: [["Cahokia", "Collinsville, Illinois, USA", 38.66, -90.06]],
  rel: ["puebloan"],
  s: {
    art: "Monks Mound is the largest earthen structure in the Americas, with a base comparable to Egypt's Great Pyramid.",
    food: "Maize agriculture fueled the city's rise; 'Woodhenge' timber circles tracked solstices.",
    debates: "Population estimates range widely (10,000–40,000). Causes of decline are debated: floods, drought, political disputes."
  }
},
{
  id: "polynesia", name: "Polynesian Voyagers", start: -1500, end: 1800, lat: -15.0, lng: -160.0, r: 2600, reg: "sp", ev: "oral",
  modern: "Hawaii, French Polynesia, Samoa, Tonga, New Zealand, Rapa Nui, Cook Islands",
  sum: "Navigators who settled the largest area of any culture before modern times — the Polynesian Triangle — by reading stars, swells, birds and clouds, without instruments.",
  places: [["Tahiti", "French Polynesia", -17.65, -149.43], ["Rapa Nui (Easter Island)", "Chile", -27.11, -109.35], ["Hawaiʻi", "USA", 19.9, -155.6], ["Aotearoa", "New Zealand", -41.0, 174.0], ["Samoa", "Samoa / American Samoa", -13.8, -172.0]],
  rel: [],
  s: {
    origins: "The Lapita people, ultimately of Austronesian (Taiwan-linked) ancestry, reached Fiji, Tonga and Samoa around 900–800 BCE. A pause followed, then rapid settlement of eastern Polynesia c. 900–1200 CE.",
    science: "Wayfinding: star compasses, reading ocean swell patterns (Marshall Islanders made stick charts of swells), bird flight paths, cloud colors over lagoons.",
    food: "Voyaging canoes carried 'canoe plants': taro, breadfruit, coconut, banana, plus pigs, dogs and chickens. The sweet potato — a South American crop — reached Polynesia before Europeans, strong evidence of contact with the Americas.",
    legacy: "In 1976 the double-hulled canoe Hōkūleʻa sailed Hawaii to Tahiti with no instruments, guided by Micronesian navigator Mau Piailug — proving deliberate voyaging was possible.",
    fun: "Moana (2016) drew heavily on this history, including the 'Long Pause' in voyaging.",
    debates: "Was settlement deliberate exploration or accidental drift? Simulations and Hōkūleʻa strongly favor deliberate voyaging. DNA evidence suggests Polynesian–Native American contact around 1200 CE.",
    language: "Polynesian languages are so closely related that a Hawaiian and a Māori speaker can recognize many words across 7,000 km of ocean."
  }
},
{
  id: "aboriginal", name: "Aboriginal Australians & Torres Strait Islanders", start: -10000, end: 2025, lat: -25.0, lng: 134.0, r: 1600, reg: "sp", ev: "oral",
  modern: "Australia",
  sum: "Hundreds of nations with distinct languages, among the world's oldest continuous cultures — with ancestors in Australia for at least 50,000–65,000 years.",
  places: [["Murujuga", "Burrup Peninsula, Western Australia (rock art)", -20.6, 116.8], ["Budj Bim", "Victoria (eel aquaculture)", -38.08, 141.93], ["Uluru", "Northern Territory", -25.34, 131.04]],
  rel: [],
  s: {
    society: "Around 250 language groups at European contact in 1788. Complex kinship systems govern marriage, obligations, and relationships to land.",
    science: "Budj Bim's eel traps and channels, built by the Gunditjmara people, are over 6,600 years old — among the world's oldest aquaculture. Fire-stick farming managed landscapes for millennia.",
    literature: "Songlines encode navigation, law, and history in song; some oral traditions may preserve memories of sea-level rise from over 7,000 years ago.",
    legacy: "The 1992 Mabo decision overturned the doctrine of terra nullius ('nobody's land').",
    debates: "The date of first arrival (50,000 vs. 65,000+ years) is actively debated based on Madjedbebe excavations."
  }
},
{
  id: "aztec", name: "Aztec (Mexica) Empire", start: 1428, end: 1521, lat: 19.43, lng: -99.13, r: 350, reg: "la", ev: "documented",
  modern: "Central and southern Mexico",
  sum: "The Triple Alliance of Tenochtitlan, Texcoco and Tlacopan, ruling a tribute empire from an island city in Lake Texcoco until the Spanish-led conquest.",
  places: [["Tenochtitlan", "Mexico City, Mexico", 19.43, -99.13], ["Templo Mayor", "Mexico City (Zócalo)", 19.435, -99.131], ["Teotihuacan", "State of Mexico (much older city they revered)", 19.69, -98.84]],
  rel: ["maya", "olmec", "inca"],
  s: {
    politics: "A hegemonic empire: conquered city-states kept their rulers but paid tribute in cotton, cacao, feathers, and warriors.",
    society: "Tenochtitlan had perhaps 200,000+ people, canals, causeways, and floating gardens (chinampas). Every boy attended school.",
    food: "Chocolate (xocolatl), tomatoes (tomatl), avocado (ahuacatl), chili (chīlli) — all English words from Nahuatl. Cacao beans were used as currency: one turkey cost about 100 beans.",
    religion: "Huitzilopochtli (sun and war) and Tlaloc (rain). Human sacrifice was central to state religion.",
    legacy: "Mexico's flag shows the eagle on a cactus — the founding legend of Tenochtitlan. Nahuatl is still spoken by about 1.7 million people.",
    fun: "Cortés had only a few hundred Spaniards; the conquest succeeded mainly because tens of thousands of Indigenous allies — especially Tlaxcalans — fought alongside him, and smallpox devastated the city.",
    debates: "Scale of human sacrifice is debated; Spanish accounts exaggerated, but the 2017 discovery of the huey tzompantli skull rack confirms large numbers."
  }
},
{
  id: "inca", name: "Inca Empire (Tawantinsuyu)", start: 1438, end: 1533, lat: -13.53, lng: -71.97, r: 1100, reg: "la", ev: "mixed",
  modern: "Peru, Ecuador, Bolivia, Chile, Argentina, Colombia",
  sum: "The largest empire in the pre-Columbian Americas, run without a market economy, money, or (as far as we know) writing — instead using knotted cords called khipu.",
  places: [["Cusco", "Cusco, Peru", -13.53, -71.97], ["Machu Picchu", "Cusco Region, Peru", -13.16, -72.55], ["Quito", "Quito, Ecuador", -0.18, -78.47], ["Cajamarca", "Cajamarca, Peru", -7.16, -78.5]],
  rel: ["aztec"],
  s: {
    politics: "Pachacuti began expansion in 1438. Labor tax (mit'a) instead of money: communities owed work on roads, fields and armies. A civil war between Atahualpa and Huáscar was ending when Pizarro arrived.",
    science: "The Qhapaq Ñan road network ran ~40,000 km, with rope suspension bridges (one, Q'eswachaka, is still rebuilt annually by hand). Relay runners (chasquis) could carry a message ~240 km per day.",
    food: "Thousands of potato varieties; chuño, freeze-dried potato, kept for years. Quinoa, and storehouses (qullqa) across the empire.",
    language: "Quechua is still spoken by ~8–10 million people. Khipu recorded numbers (decimal), and possibly narratives — still not fully decoded.",
    legacy: "Words: jerky (from ch'arki), llama, condor, puma, quinine.",
    fun: "Atahualpa offered to fill a room once with gold and twice with silver as ransom. Pizarro accepted — then executed him anyway.",
    debates: "Whether khipu encoded language (not just numbers) is an active research question."
  }
},
{
  id: "ottoman", name: "Ottoman Empire", start: 1299, end: 1922, lat: 39.5, lng: 32.0, r: 1300, reg: "me", ev: "documented",
  modern: "Turkey, the Balkans, the Middle East, North Africa",
  sum: "A Turkish dynasty that took Constantinople in 1453 and ruled a multi-religious empire across three continents for over six centuries.",
  places: [["Söğüt", "Bilecik, Turkey (origin)", 40.02, 30.18], ["Bursa", "Bursa, Turkey (first capital)", 40.18, 29.06], ["Constantinople / Istanbul", "Istanbul, Turkey", 41.01, 28.98], ["Vienna", "Vienna, Austria (besieged 1529, 1683)", 48.21, 16.37]],
  rel: ["byzantine", "mongol", "abbasid", "mughal"],
  s: {
    politics: "Sultans ruled with a bureaucracy partly staffed via the devshirme — Christian boys taken, converted and trained as Janissaries or officials. Suleiman the Magnificent (r. 1520–66) was its high point. Collapsed after defeat in WWI.",
    society: "The millet system let religious communities (Orthodox, Armenian, Jewish) govern their own legal affairs.",
    food: "Coffeehouses spread from Istanbul in the 1550s; yogurt, baklava, dolma, kebab, Turkish delight. The croissant's 'Ottoman siege' origin story is a legend.",
    legacy: "Modern borders of the Middle East and Balkans were largely carved from Ottoman territory after WWI (e.g., the Sykes–Picot agreement).",
    fun: "Tulips came to the Netherlands from the Ottoman Empire — the word 'tulip' likely comes from Turkish/Persian for 'turban'. In the 'Tulip Era' (1718–30), Ottoman elites had their own tulip craze.",
    debates: "The mass killings of Armenians in 1915–16 are recognized as genocide by most historians and many states; the Turkish government disputes the term."
  }
},
{
  id: "ming", name: "Ming Dynasty", start: 1368, end: 1644, lat: 35.0, lng: 114.0, r: 1300, reg: "ea", ev: "documented",
  modern: "China",
  sum: "A Han Chinese dynasty after Mongol rule — the Forbidden City, most of today's Great Wall, Zheng He's treasure fleets, and blue-and-white porcelain.",
  places: [["Nanjing", "Nanjing, China (first capital)", 32.06, 118.8], ["Beijing", "Beijing, China (Forbidden City)", 39.92, 116.39], ["Mutianyu Great Wall", "Huairou, Beijing", 40.43, 116.56]],
  rel: ["mongol", "tang", "swahili"],
  s: {
    politics: "Founded by Zhu Yuanzhang, a former Buddhist monk and peasant rebel. The Yongle Emperor moved the capital to Beijing.",
    economy: "Absorbed vast amounts of silver from Japan and the Americas (via the Manila galleons) — Ming tax reforms required payment in silver, linking China to the first truly global economy.",
    science: "Zheng He's seven voyages (1405–1433) reached East Africa with ships far larger than Columbus's.",
    legacy: "Most of the Great Wall visible today is Ming-era brick, not ancient. 'China' (porcelain) in English comes from Ming exports.",
    debates: "Why China halted the treasure voyages is debated: cost, court politics, northern Mongol threat, Confucian disdain for trade."
  }
},
{
  id: "mughal", name: "Mughal Empire", start: 1526, end: 1857, lat: 27.0, lng: 77.5, r: 1000, reg: "sa", ev: "documented",
  modern: "India, Pakistan, Bangladesh, Afghanistan",
  sum: "A Persianate Muslim dynasty descended from Timur and Genghis Khan that ruled most of South Asia — the Taj Mahal, miniature painting, and a quarter of the world's GDP by some estimates.",
  places: [["Agra", "Agra, India", 27.17, 78.04], ["Delhi (Shahjahanabad)", "Old Delhi, India", 28.65, 77.23], ["Fatehpur Sikri", "Uttar Pradesh, India", 27.09, 77.66], ["Lahore", "Lahore, Pakistan", 31.55, 74.34]],
  rel: ["ottoman", "british", "india"],
  s: {
    politics: "Babur won at Panipat (1526). Akbar (r. 1556–1605) promoted religious tolerance and debated scholars of many faiths. Aurangzeb expanded the empire to its largest but strained it. Ended by the British after the 1857 rebellion.",
    economy: "Textile powerhouse — Indian cottons (calico, chintz, muslin) dominated world markets before British industrialization.",
    food: "Mughlai cuisine: biryani, kebabs, kormas, kulfi — blending Persian and Indian traditions.",
    language: "Persian was the court language; Urdu/Hindustani grew from the mix of Persian, Arabic, Turkic and local languages.",
    art: "Taj Mahal (1632–53), built by Shah Jahan for his wife Mumtaz Mahal.",
    fun: "The Koh-i-Noor diamond and the Peacock Throne were taken by Persian ruler Nader Shah in 1739; the Koh-i-Noor is now in the British Crown Jewels and its ownership is still disputed by India, Pakistan, Iran and Afghanistan.",
    debates: "Figures like 'a quarter of world GDP' come from Angus Maddison's estimates and are very rough."
  }
},
{
  id: "british", name: "British Empire", start: 1600, end: 1997, lat: 51.5, lng: -0.12, r: 500, reg: "eu", ev: "documented",
  modern: "UK, plus at its peak about a quarter of the world's land",
  sum: "By 1920 the largest empire in history, built on trade companies, naval power and settler colonies — and the source of many modern borders, languages and institutions.",
  places: [["London", "London, UK", 51.51, -0.12], ["Calcutta", "Kolkata, India (capital of British India until 1911)", 22.57, 88.36], ["Hong Kong", "China (handed back 1997)", 22.3, 114.17]],
  rel: ["mughal", "india", "usa"],
  s: {
    economy: "The East India Company (1600) was a private corporation with its own army of 200,000+ that conquered much of India. The Atlantic slave trade and plantations were central to early wealth.",
    politics: "Settler dominions (Canada, Australia, NZ, South Africa) gained self-government; most colonies won independence after WWII.",
    legacy: "English as a global language, common law, parliamentary systems, cricket, and borders drawn by colonial officials (e.g., the Radcliffe Line partitioning India in 1947).",
    fun: "'The empire on which the sun never sets' — a phrase earlier used for the Spanish Empire.",
    debates: "Its moral legacy (famines in India, violence in Kenya, vs. infrastructure and institutions) is one of the most heated debates in modern historiography."
  }
},
{
  id: "usa", name: "United States", start: 1776, end: 2025, lat: 39.0, lng: -98.0, r: 1500, reg: "na", ev: "documented",
  modern: "United States of America",
  sum: "A republic founded on Enlightenment ideals and built on Indigenous land, slavery and immigration, which became the dominant global power after 1945.",
  places: [["Philadelphia", "Pennsylvania (Declaration, Constitution)", 39.95, -75.15], ["Washington, D.C.", "capital since 1800", 38.9, -77.04]],
  rel: ["british", "rome-rep"],
  s: {
    origins: "Thirteen British colonies declared independence in 1776; the Constitution (1787) borrowed ideas from Rome, Montesquieu, Locke — and some argue from the Haudenosaunee (Iroquois) Confederacy (debated).",
    politics: "Civil War (1861–65) ended slavery; the Civil Rights Movement (1950s–60s) ended legal segregation. Superpower after WWII; sole superpower after 1991.",
    legacy: "Global influence through the dollar as reserve currency, Hollywood, the internet (ARPANET), and Silicon Valley.",
    fun: "The US has no official national language at the federal level — English was only designated official by executive order in 2025.",
    debates: "The 'Haudenosaunee influence' thesis was endorsed by a 1988 congressional resolution but remains contested among historians."
  }
},
{
  id: "india", name: "Republic of India (and the history of its land)", start: 1947, end: 2025, lat: 22.0, lng: 79.0, r: 1300, reg: "sa", ev: "documented",
  modern: "India",
  sum: "A modern state founded in 1947 — but the territory it covers has hosted the Indus Valley, Vedic cultures, Mauryas, Guptas, Cholas, Delhi Sultanate, Mughals and British Raj. Atlas separates the land's history from the modern state's.",
  places: [["New Delhi", "capital", 28.61, 77.21], ["Mohenjo-daro", "now in Pakistan — Indus heritage crosses modern borders", 27.33, 68.14]],
  rel: ["indus", "maurya", "gupta", "mughal", "british"],
  s: {
    origins: "Region history: Indus Valley (c. 3300–1300 BCE) → Vedic period → Mauryas → Guptas → regional empires (Chola, Pala, Rashtrakuta, Vijayanagara) → Delhi Sultanate → Mughals → British Raj → Partition and independence (15 Aug 1947).",
    politics: "The world's largest democracy. Its constitution (1950), drafted under B.R. Ambedkar, is the longest written national constitution in the world.",
    language: "22 officially scheduled languages; Hindi and English used by the central government. Hundreds of languages from four families (Indo-European, Dravidian, Austroasiatic, Tibeto-Burman).",
    legacy: "Partition displaced ~15 million people and killed perhaps 200,000 to 2 million — the wide range itself shows how contested the numbers are.",
    fun: "Chess, shampoo (from Hindi chāmpo, 'to press/massage'), pajamas, bungalow, jungle, and thug all come from Indian languages.",
    debates: "'India' as a civilizational unity vs. a modern political construction is a live political and scholarly debate."
  }
},
{
  id: "ussr", name: "Soviet Union", start: 1922, end: 1991, lat: 55.75, lng: 60.0, r: 2200, reg: "eu", ev: "documented",
  modern: "Russia and 14 other post-Soviet states",
  sum: "The first communist state, born from the 1917 Russian Revolution; a Cold War superpower that dissolved into 15 countries in 1991.",
  places: [["Moscow", "Russia", 55.75, 37.62], ["Petrograd / Leningrad", "St. Petersburg, Russia", 59.94, 30.31], ["Baikonur", "Kazakhstan (launch site)", 45.92, 63.34], ["Chernobyl", "Ukraine", 51.39, 30.1]],
  rel: ["usa"],
  s: {
    politics: "Lenin, then Stalin's dictatorship: forced collectivization, the Gulag, the Great Terror. Bore the heaviest losses in WWII (~27 million dead). Gorbachev's glasnost and perestroika preceded collapse.",
    science: "Sputnik (1957), first human in space Yuri Gagarin (1961), first woman in space Valentina Tereshkova (1963).",
    legacy: "Post-Soviet borders, frozen conflicts, and the war in Ukraine are rooted in how the USSR was built and dissolved.",
    fun: "Tetris was created in 1984 by Alexey Pajitnov at the Soviet Academy of Sciences — and the Soviet state initially owned the rights.",
    debates: "The 1932–33 Holodomor famine in Ukraine: many countries and historians recognize it as genocide; others classify it as a crime of mass starvation affecting multiple regions."
  }
}
];
