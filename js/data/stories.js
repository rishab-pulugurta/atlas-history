// Curated journeys. Each chapter: map position, year, short text, optional deep text, optional "why" causes.
window.ATLAS_STORIES = [
{
  id: "silk", name: "How the Silk Roads Connected Eurasia", cat: "Trade",
  sum: "Trade, religion, disease, technology and diplomacy across 1,500 years.",
  ch: [
    { t: "A mission for horses", y: -138, lat: 40.4, lng: 71.8, z: 4,
      s: "Han Emperor Wu sends Zhang Qian west to find allies against the Xiongnu nomads. He's captured, escapes, and returns 13 years later with reports of 'heavenly horses' in Ferghana and kingdoms that wanted Chinese goods.",
      d: "The term 'Silk Road' (Seidenstraße) was coined only in 1877 by German geographer Ferdinand von Richthofen. Historians now say 'Silk Roads' — a network, not one road — and few merchants traveled the whole way; goods passed hand to hand through relay markets." },
    { t: "Silk reaches Rome", y: 14, lat: 41.89, lng: 12.49, z: 4,
      s: "Romans became obsessed with Chinese silk, which they thought grew on trees. Seneca complained that silk dresses left women 'no more clothed than if naked'. Pliny moaned about gold flowing east.",
      d: "Rome and China never established sustained direct contact. Parthian Persia, which controlled the middle routes, had strong incentives to keep them apart." },
    { t: "Sogdian middlemen", y: 600, lat: 39.65, lng: 66.96, z: 5,
      s: "The Sogdians of Samarkand and Bukhara were the great merchants of the Silk Roads. Their language was the lingua franca of Central Asian trade for centuries.",
      d: "The 'Ancient Letters' found near Dunhuang (c. 313 CE) are Sogdian merchants' mail — one is from a woman abandoned by her husband, saying she'd rather have married a pig or a dog.",
      why: { structural: "Oasis cities sat at chokepoints between deserts and mountains, so local merchant communities controlled the relays.", trigger: "Political stability under Tang China and the Turkic khaganates made long caravans profitable.", decisions: "Sogdian families placed relatives in every trading city — an early diaspora network.", debated: "How much of the trade was long-distance luxury vs. regional everyday goods." } },
    { t: "Ideas travel too", y: 650, lat: 40.14, lng: 94.66, z: 5,
      s: "Buddhism, Nestorian Christianity, Manichaeism, Zoroastrianism and Islam all moved along these routes. Dunhuang's Mogao Caves hold 492 painted cave temples spanning 1,000 years.",
      d: "In 1900 a monk discovered a sealed 'Library Cave' at Dunhuang with ~50,000 documents in a dozen languages, including the oldest dated printed book (the Diamond Sutra, 868). Most were bought for small sums by European explorers like Aurel Stein — a sore point today." },
    { t: "Pax Mongolica", y: 1270, lat: 47.2, lng: 102.82, z: 4,
      s: "Under the Mongols, a single empire controlled most of the route. Marco Polo, Ibn Battuta and diplomats traveled across Eurasia. Merchants carried a paiza — a metal tablet passport.",
      why: { structural: "One political authority stretching across Eurasia reduced tolls and banditry.", trigger: "Mongol conquests (1206–1260s).", decisions: "Khans actively encouraged merchants and protected trade routes; the Yam relay system.", debated: "Whether the Mongol era was a net positive for Eurasian exchange given its staggering death toll." } },
    { t: "The plague rides west", y: 1347, lat: 45.03, lng: 35.38, z: 5,
      s: "Connectivity carried disease. The Black Death, which ancient DNA traces to Central Asia (Kyrgyzstan, c. 1338), reached the Crimean port of Caffa and then Italy via Genoese ships.",
      d: "The story that the Mongols catapulted plague corpses into Caffa comes from a single chronicler, Gabriele de' Mussi, who wasn't there. Rats, fleas, and trade ships did the real work." },
    { t: "The sea takes over", y: 1500, lat: 11.25, lng: 75.78, z: 3,
      s: "After the Mongol khanates fragmented and the Ottomans rose, Europeans sought sea routes to Asian goods. Ships could carry far more than camels, and the overland routes declined in relative importance.",
      d: "China's 'Belt and Road Initiative' (2013) deliberately invokes the Silk Roads — a good example of history being used for modern political branding." }
  ]
},
{
  id: "columbian", name: "How the Columbian Exchange Changed the World's Food", cat: "Food",
  sum: "Why Italian cooking has tomatoes, Indian cooking has chili, and potatoes fed Europe's population boom.",
  ch: [
    { t: "Two separate worlds", y: 1491, lat: 15.0, lng: -40.0, z: 2,
      s: "For ~10,000 years the Americas and Afro-Eurasia developed crops in isolation. No Italian had a tomato, no Irish person a potato, no Thai cook a chili, no Mexican a cow, wheat, or sugar.",
      d: "Historian Alfred Crosby coined 'Columbian Exchange' in 1972." },
    { t: "Diseases go first", y: 1520, lat: 19.43, lng: -99.13, z: 4,
      s: "Smallpox, measles and influenza spread ahead of colonizers, killing perhaps 50–90% of Indigenous Americans. This catastrophe, not just weapons, enabled conquest.",
      why: { structural: "Afro-Eurasians had lived for millennia with domesticated animals that passed on diseases; the Americas had few such animals and no prior exposure.", trigger: "Spanish arrival in the Caribbean and Mexico.", decisions: "Forced labor (encomienda), warfare and displacement made epidemics deadlier.", debated: "Pre-contact population estimates range from ~8 to over 100 million, so the death toll is uncertain." } },
    { t: "Potatoes feed Europe", y: 1700, lat: 52.52, lng: 13.4, z: 4,
      s: "Potatoes produce more calories per acre than grain and grow in poor soil. Economists Nunn and Qian estimate potatoes explain about a quarter of the growth in Old World population and urbanization from 1700 to 1900.",
      d: "Frederick the Great's 1756 'Potato Order' pushed Prussian peasants to plant them. The famous tale that he had potato fields guarded so peasants would steal them is probably a legend." },
    { t: "Chilies conquer Asia", y: 1550, lat: 15.5, lng: 73.83, z: 4,
      s: "Portuguese ships carried chilies to Goa; within decades they spread across India, Southeast Asia, China and Korea. Maize, peanuts and sweet potatoes also became key crops in China and Africa.",
      d: "Sweet potatoes and maize helped China's population roughly double in the 18th century. Cassava (manioc) became a staple across Africa — today Nigeria is the world's largest producer." },
    { t: "Sugar, coffee, and slavery", y: 1700, lat: 18.0, lng: -76.8, z: 4,
      s: "Old World crops — sugar and coffee — were planted in the Americas on plantations worked by enslaved Africans. Sugar was the main driver of the Atlantic slave trade.",
      d: "In 1700 the average English person ate ~4 lb of sugar a year; by 1800, ~18 lb. Today Americans average over 100 lb of sugars/sweeteners per year." },
    { t: "The tomato's slow conquest", y: 1692, lat: 40.85, lng: 14.27, z: 5,
      s: "Tomatoes reached Italy by 1548 but were long viewed as ornamental or suspect. The first tomato sauce recipe appeared in Naples in 1692, and tomato on pasta became common only in the 1800s." },
    { t: "Today", y: 2025, lat: 20.0, lng: 0.0, z: 2,
      s: "Many of the world's most important staples — maize, potatoes, cassava, sweet potatoes, tomatoes — originated in the Americas. 'Traditional' cuisines everywhere are, in large part, products of the last 500 years." }
  ]
},
{
  id: "istanbul", name: "How Constantinople Became Istanbul", cat: "Cities",
  sum: "One city, three names, 2,700 years, two continents.",
  ch: [
    { t: "Byzantion", y: -660, lat: 41.01, lng: 28.98, z: 11,
      s: "Greek colonists from Megara found Byzantion at the mouth of the Bosphorus, legendarily led by Byzas after consulting the Delphic oracle. It controlled the strait between the Black Sea and the Mediterranean.",
      d: "The legend says the oracle told settlers to build 'opposite the blind' — the people who'd settled across the water at Chalcedon must have been blind to miss such a site." },
    { t: "New Rome", y: 330, lat: 41.01, lng: 28.98, z: 11,
      s: "Constantine refounds the city as his capital: 'Nova Roma', soon called Constantinople. It sat on trade routes and was easier to defend than Rome.",
      why: { structural: "The empire's wealth and threats had shifted east (Persia, the Danube frontier).", trigger: "Constantine's victory over Licinius in 324.", decisions: "Constantine chose a site with water on three sides.", debated: "How much Constantine intended a 'Christian' capital vs. a personal monument." } },
    { t: "The walls that held for 1,000 years", y: 413, lat: 41.02, lng: 28.92, z: 12,
      s: "The Theodosian Walls — a triple line of defenses — repelled Huns, Avars, Persians, Arabs, Bulgars, and Rus' for centuries.",
      d: "Constantinople's chain across the Golden Horn blocked enemy fleets. In 1453, Mehmed II simply hauled ships overland on greased logs to get around it." },
    { t: "Sacked by fellow Christians", y: 1204, lat: 41.01, lng: 28.98, z: 11,
      s: "The Fourth Crusade, diverted by Venetian debts and Byzantine politics, sacked Constantinople. The bronze horses of St Mark's in Venice were looted from the city's Hippodrome." },
    { t: "The conquest", y: 1453, lat: 41.01, lng: 28.98, z: 11,
      s: "Mehmed II, aged 21, takes the city on 29 May 1453 using massive cannons. The last emperor, Constantine XI, died fighting. Hagia Sophia became a mosque.",
      why: { structural: "Byzantium had shrunk to little more than the city; the Ottomans surrounded it.", trigger: "Mehmed's determination to make it his capital.", decisions: "Hiring cannon-maker Orban (whom the Byzantines couldn't afford), and moving ships overland.", debated: "Whether a gate (Kerkoporta) left open was decisive — likely a later legend." } },
    { t: "Istanbul", y: 1930, lat: 41.01, lng: 28.98, z: 11,
      s: "'Istanbul' comes from Greek 'eis tin polin' — 'to the city'. Ottomans used both Kostantiniyye and Istanbul; the Turkish Republic made Istanbul official, and in 1930 the post office stopped delivering mail addressed to 'Constantinople'.",
      d: "Ankara became Turkey's capital in 1923, but Istanbul remains its largest city (~16 million) — the only major city on two continents." }
  ]
},
{
  id: "map", name: "How the Modern World Map Was Drawn", cat: "Politics",
  sum: "Colonial borders, world wars, decolonization, and the Cold War made most of today's ~195 countries.",
  ch: [
    { t: "1800: a world of empires", y: 1800, lat: 30.0, lng: 20.0, z: 2,
      s: "In 1800 most of the world was ruled by empires: Qing, Ottoman, Mughal (fading), Russian, British, Spanish, Portuguese. 'Nation-states' were rare." },
    { t: "Latin America breaks free", y: 1825, lat: -15.0, lng: -60.0, z: 3,
      s: "Napoleon's invasion of Spain (1808) triggered independence wars; by 1825 nearly all of Spanish and Portuguese America was independent. Many borders followed old Spanish administrative units." },
    { t: "The scramble for Africa", y: 1884, lat: 5.0, lng: 20.0, z: 3,
      s: "At the Berlin Conference, European powers set rules for carving up Africa. Roughly 40% of Africa's borders follow straight lines — drawn on maps, often ignoring ethnic and geographic realities.",
      why: { structural: "Industrialization gave Europe steamships, quinine, and machine guns; demand for raw materials grew.", trigger: "Rival claims (Belgium's Leopold II in the Congo, France, Britain, Germany) threatened conflict.", decisions: "Diplomats in Berlin agreed on 'effective occupation' rules with no African representation.", debated: "How much colonial borders cause today's conflicts — studies find effects, but post-independence politics matter too." } },
    { t: "Empires collapse: WWI", y: 1919, lat: 48.85, lng: 2.35, z: 4,
      s: "Four empires fell — Russian, German, Austro-Hungarian, Ottoman. New states: Poland, Czechoslovakia, Yugoslavia, Baltic states. The Middle East was divided into British and French mandates (Iraq, Syria, Lebanon, Palestine, Transjordan)." },
    { t: "Decolonization", y: 1960, lat: 0.0, lng: 20.0, z: 3,
      s: "After WWII, the UN went from 51 members (1945) to 99 (1960) to 127 (1970). India/Pakistan (1947), Indonesia (1949), Ghana (1957), 17 African nations in 1960 alone." },
    { t: "The Cold War's lines", y: 1953, lat: 38.0, lng: 127.0, z: 5,
      s: "Divided Germany, Korea (the 38th parallel was chosen by two US officers using a National Geographic map in about 30 minutes), and Vietnam." },
    { t: "1991: new map again", y: 1991, lat: 50.0, lng: 50.0, z: 3,
      s: "The USSR became 15 states; Yugoslavia broke apart in war; Czechoslovakia split peacefully (1993). South Sudan (2011) is the newest UN member state." }
  ]
},
{
  id: "coffee", name: "The Journey of Coffee", cat: "Food",
  sum: "Ethiopian shrub → Sufi ritual → Ottoman coffeehouse → European business hub → colonial plantation → global habit.",
  ch: [
    { t: "Wild coffee in Ethiopia", y: 850, lat: 7.3, lng: 36.0, z: 5, s: "Arabica coffee grows wild in Ethiopia's forests. Some Ethiopian communities chewed the beans or used leaves for tea long before brewed coffee." },
    { t: "Sufis stay awake", y: 1450, lat: 13.32, lng: 43.25, z: 5, s: "Yemeni Sufis brew qahwa to stay awake during night devotions. Yemen controls the trade from the port of Mocha for two centuries." },
    { t: "The coffeehouse revolution", y: 1554, lat: 41.01, lng: 28.98, z: 6, s: "Istanbul's coffeehouses became places for chess, poetry, news and politics. Sultan Murad IV reportedly banned coffee (1633) and prowled the streets in disguise to enforce it." },
    { t: "Europe's penny universities", y: 1688, lat: 51.513, lng: -0.087, z: 6, s: "Lloyd's coffeehouse became the insurance market Lloyd's of London; Jonathan's coffeehouse became the London Stock Exchange. Women petitioned to ban coffee in 1674, claiming it made men impotent." },
    { t: "Plantations and slavery", y: 1780, lat: 19.0, lng: -72.3, z: 5, s: "Coffee grown by enslaved people in Saint-Domingue (Haiti) supplied about half the world's coffee — until the Haitian Revolution." },
    { t: "Brazil and the world", y: 1900, lat: -22.9, lng: -47.06, z: 4, s: "Brazil becomes the dominant producer, at times growing ~80% of the world's coffee. Today Vietnam is #2 — mostly robusta for instant coffee." }
  ]
}
];
