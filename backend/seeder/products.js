const products = [
  {
    name: "Air Force 1 'BLACK'",
    description:
      "L'Air Force 1 de Nike est une chaussure emblématique et intemporelle. Lancée en 1982, elle est connue pour son design minimaliste et élégant, avec une silhouette basse ou montante. Dotée d'un logo Nike Air sur le talon et d'une semelle épaisse pour un excellent amorti, elle offre style et confort. Disponible dans différents coloris et matériaux, l'Air Force 1 est polyvalente et durable, adaptée à tous les looks décontractés ou habillés. C'est une chaussure prisée par les amateurs de sneakers et les collectionneurs.",
    count: 5,
    price: 15000,
    category: "Nike/AirForce 1",
   
    images: [
      { path: "/images/nike/AIRFORCEBLACK.jpg" },
      { path: "/images/nike/AIRFORCEBLACK2.jpg" },
      { path: "/images/nike/AIRFORCEBLACK3.jpg" },
      { path: "/images/nike/AIRFORCEBLACK4.jpg" },
    ],
    rating: 5,
    reviewsNumber: 4,
    reviews: [], 
    attrs: [
      { key: "Taille", value: ["42","43","44","44"] },
      { key: "Coloris", value: ["Noir"] }
  ],
    
  },
  {
    name: "Air Force 1 'WHITE'",
    description:
      "L'Air Force 1 de Nike est une chaussure emblématique et intemporelle. Lancée en 1982, elle est connue pour son design minimaliste et élégant, avec une silhouette basse ou montante. Dotée d'un logo Nike Air sur le talon et d'une semelle épaisse pour un excellent amorti, elle offre style et confort. Disponible dans différents coloris et matériaux, l'Air Force 1 est polyvalente et durable, adaptée à tous les looks décontractés ou habillés. C'est une chaussure prisée par les amateurs de sneakers et les collectionneurs.",
    count: 5,
    price: 15000,
    category: "Nike/AirForce 1",
    images: [
      { path: "/images/nike/AIRFORCE.jpg" },
      { path: "/images/nike/AIRFORCE2.jpg" },
      { path: "/images/nike/AIRFORCE3.jpg" },
      { path: "/images/nike/AIRFORCE4.jpg" },
    ],
    rating: 5,
    reviewsNumber: 5,
    reviews: [],
    attrs: [
      { key: "Taille", value: ["42","43","44","44"] },
      { key: "Coloris", value: ["Blanc"] }
  ],
    
  },
  {
    name: "DUNK LOW 'NOIR BLANC'",
    description:
      "Le Dunk Low 'Black White' également connu sous le nom de 'Panda' apporte un look bicolore classique à sa construction classique de basket-ball. La construction basse de la chaussure émerge en cuir, avec une base blanche contrastée par des superpositions noires, avec plus de noir sur la marque Swoosh. Les perforations sur la zone des orteils offrent une respirabilité, tandis que sous le pied, le look bicolore est assorti à l'outillage, qui intègre une semelle extérieure en caoutchouc concentrique pour la traction.",
    count: 5,
    price: 15000,
    category: "Nike/DUNK",
    images: [
      { path: "/images/nike/panda.jpg" },
      { path: "/images/nike/panda2.jpg" },
      { path: "/images/nike/panda3.jpg" },
      { path: "/images/nike/panda4.jpg" },
    ],
    rating: 5,
    reviewsNumber: 5,
    reviews: [],
    attrs: [
      { key: "Taille", value: ["38", "39", "40", "43", "44", "45"] },
      { key: "Coloris", value: ["Blanc","Noir"] },
    ],
  },
  {
    name: "AIR JORDAN 4 RETRO 'THUNDER'",
    description:
      "La Air Jordan 4 Retro 'Thunder' 2023 réintroduit la palette de couleurs populaire qui a été publiée pour la première fois en 2006 et rééditée plus tard en 2012. La tige de la chaussure apparaît en nubuck entièrement noir avec des accents jaunes sur les œillets moulés, la languette inférieure et le panneau de quart, le deux derniers drapés d'un filet noir. Le confort amorti sous le pied est assuré par une semelle intercalaire en PU jaune et est renforcé par l'unité Air-sole exposée du talon. L'étiquette de languette Flight et la languette de talon moulée portent la marque emblématique Jumpman.",
    count: 5,
    price: 15000,
    category: "Nike/Jordan 4",
    images: [
      { path: "/images/nike/jordan.jpg" },
      { path: "/images/nike/jordan2.jpg" },
      { path: "/images/nike/jordan3.jpg" },
      { path: "/images/nike/jordan4.jpg" },
    ],
    rating: 5,
    reviewsNumber: 5,
    reviews: [],
    attrs: [
      { key: "Taille", value: ["38", "39", "40", "43", "44", "45"] },
      { key: "Coloris", value: ["Jaune","Noir"] },
    ],
  },
  {
    name: "AIR JORDAN 1 RETRO HIGH OG 'CHICAGO LOST & FOUND'",
    description:
      "La Air Jordan 1 Retro High OG 'Chicago Lost & Found' ramène le célèbre coloris 'Chicago' avec de nouveaux éléments narratifs. Dotée de la forme échancrée OG, la tige en cuir présente une base blanche avec des superpositions Varsity Red et un logo Swoosh et Wings noir. Le cuir noir craquelé sur le col rembourré lui donne un look vintage, ainsi qu'une semelle intercalaire pré-jaunie. L'emballage raconte également l'histoire 'Lost & Found', avec une boîte d'apparence endommagée recouverte d'autocollants de vente présentant un couvercle de couleur différente. Un reçu est également inclus, faisant allusion à la découverte de ce joyau vintage niché dans un grenier ou un espace de stockage.",
    count: 5,
    price: 25000,
    category: "Nike/Jordan 1",
    images: [
      { path: "/images/nike/CHIL&F.jpg" },
      { path: "/images/nike/CHIL&F2.jpg" },
      { path: "/images/nike/CHIL&F3.jpg" },
      { path: "/images/nike/CHIL&F4.jpg" },
    ],
    rating: 5,
    reviewsNumber: 5,
    reviews: [],
    attrs: [
      { key: "Taille", value: ["38", "39", "40", "43", "44", "45"] },
      { key: "Coloris", value: ["Rouge","Noir"] },
    ],
  },
  {
    name: "AIR JORDAN 1 RETRO HIGH OG 'UNIVERSITY BLUE'",
    description:
      "Rendant hommage à l'alma mater universitaire de Michael Jordan, la Air Jordan 1 Retro High OG « University Blue » présente un look de l'Université de Caroline du Nord. Construite entièrement en cuir, la tige de la chaussure apparaît dans un mélange de blanc et de bleu universitaire, contrasté par du noir sur le Swoosh, le col, les lacets et le logo « Wings ». Les perforations sur la zone des orteils assurent la respirabilité, tandis que sous le pied, la semelle intermédiaire Air cède la place à une semelle extérieure concentrique avec une nuance de bleu plus vive.",
    count: 10,
    price: 22000,
    category: "Nike/Jordan 1",
    images: [
      { path: "/images/nike/UNIVERSITYBLUE.jpg" },
      { path: "/images/nike/UNIVERSITYBLUE2.jpg" },
      { path: "/images/nike/UNIVERSITYBLUE3.jpg" },
      { path: "/images/nike/UNIVERSITYBLUE4.jpg" },
    ],
    rating: 5,
    reviewsNumber: 4,
    reviews: [],
    attrs: [
      { key: "Taille", value: ["38", "39", "40", "43", "44", "45"] },
      { key: "Coloris", value: ["Bleue","Noir"] },
    ],
  },
  {
    name: "TRAVIS SCOTT X AIR JORDAN 1 LOW OG SP « BLACK PHANTOM »",
    description:
      "La Travis Scott x Air Jordan 1 Low OG SP « Black Phantom » voit le rappeur basé à Houston colorer une autre AJ1 Low. Cette itération présente un look noirci, avec du nubuck et du daim sur la tige soulignés par des coutures contrastées blanches partout. Le Swoosh inversé signature de Scott reste, aux côtés d'un Swoosh régulier sur le côté médian avec la marque Cactus Jack. Le talon arrière présente une marque dépareillée, avec un logo Wings sur la chaussure droite et un graphique d'abeille sur la gauche.",
    count: 15,
    price: 30000,
    category: "Nike/Jordan 1",
    images: [
      { path: "/images/nike/BLACKPHANTOM.jpg" },
      { path: "/images/nike/BLACKPHANTOM2.jpg" },
      { path: "/images/nike/BLACKPHANTOM3.jpg" },
      { path: "/images/nike/BLACKPHANTOM4.jpg" },
    ],
    rating: 4,
    reviewsNumber: 1,
    reviews: [],
    attrs: [
      { key: "Taille", value: ["38", "39", "40", "43", "44", "45"] },
      { key: "Coloris", value: ["Noir"] },
    ],
  },
  {
    name: "AIR JORDAN 4 RETRO 'MILITARY BLACK'",
    description:
      "Présentant le même blocage de couleur et les mêmes matériaux utilisés sur le coloris OG « Military Blue » de 1989, la Air Jordan 4 Retro « Military Black ». La tige est en cuir lisse blanc avec un empiècement à l'avant-pied en daim gris. Des accents noirs se trouvent sur les œillets en TPU, la languette de talon moulée et le logo Jumpman sur la languette tissée. Elle est construite sur une semelle intercalaire en polyuréthane bicolore avec une unité Air-sole visible sous le talon.",
    count: 20,
    price: 22000,
    category: "Nike/Jordan 4",
    images: [
      { path: "/images/nike/MILITARYBLACK.jpg" },
      { path: "/images/nike/MILITARYBLACK2.jpg" },
      { path: "/images/nike/MILITARYBLACK3.jpg" },
      { path: "/images/nike/MILITARYBLACK4.jpg" },
    ],
    rating: 4,
    reviewsNumber: 2,
    reviews: [],
    attrs: [
      { key: "Taille", value: ["38", "39", "40", "43", "44", "45"] },
      { key: "Coloris", value: ["Blanc","Noir"] },
    ],
  },
  {
    name: "NIKE SB X AIR JORDAN 4 RETRO SP 'PINE GREEN'",
    description:
      "La Nike SB x Air Jordan 4 Retro SP 'Pine Green' offre une version inspirée du skateboard de la silhouette emblématique. La tige en cuir blanc cassé de la chaussure est complétée par une superposition en daim gris clair à l'avant-pied pour une durabilité accrue. Des touches de vert peuvent être trouvées sur les œillets moulés et la languette du talon, qui affiche la marque Nike SB. L'étiquette de langue Flight offre une touche de couleur saisissante avec un Jumpman cramoisi. La semelle intercalaire en mousse de la sneaker intègre une unité Air-sole exposée au talon et repose sur une semelle extérieure en gomme.",
    count: 25,
    price: 27000,
    category: "Nike/Jordan 4",
    images: [
      { path: "/images/nike/PINEGREEN.jpg" },
      { path: "/images/nike/PINEGREEN2.jpg" },
      { path: "/images/nike/PINEGREEN3.jpg" },
      { path: "/images/nike/PINEGREEN4.jpg" },
    ],
    rating: 3,
    reviewsNumber: 2,
    reviews: [],
    attrs: [
      { key: "Taille", value: ["38", "39", "40", "43", "44", "45"] },
      { key: "Coloris", value: ["Blanc","Vert"] },
    ],
  },
  {
    name: "FRAGMENT DESIGN X TRAVIS SCOTT X AIR JORDAN 1 RETRO LOW",
    description:
      "La Fragment Design x Travis Scott x Air Jordan 1 Retro Low est sortie dans le cadre d'une collaboration avec le rappeur de Houston et l'empreinte japonaise. Dotée d'un coloris qui rappelle les précédentes collaborations de conception de fragments, la tige de la chaussure est construite avec une base en cuir blanc, recouverte de noir et de bleu royal et complétée par la marque Swoosh inversée sur le côté latéral. Le patch au talon de la chaussure gauche comprend la marque Cactus Jack et un logo de visage souriant, tandis que l'éclair du fragment marque la chaussure droite. Sous le pied, une semelle cupsole en caoutchouc bicolore ancre le design.",
    count: 5,
    price: 18000,
    category: "Nike/Jordan 1",
    images: [
      { path: "/images/nike/RETROLOW.jpg" },
      { path: "/images/nike/RETROLOW2.jpg" },
      { path: "/images/nike/RETROLOW3.jpg" },
      { path: "/images/nike/RETROLOW4.jpg" },
    ],
    rating: 5,
    reviewsNumber: 5,
    reviews: [],
    attrs: [
      { key: "Taille", value: ["38", "39", "40", "43", "44", "45"] },
      { key: "Coloris", value: ["Blanc","Noir","Bleue"] },
    ],
  },

  {
    name: "YEEZY SLIDES 'AZURE'",
    description:
      "Une nuance de bleu accrocheuse imprègne l'adidas Yeezy Slide 'Azure'. La construction moderne en une seule pièce de mousse EVA injectée est construite sur une semelle extérieure dentelée qui offre soutien et adhérence. La subtile marque adidas est révélée sur la couche supérieure de la semelle intérieure et sur le talon.",
    count: 5,
    price: 18000,
    category: "Yeezy",
    images: [
      { path: "/images/yeezy/slide.jpg" },
      { path: "/images/yeezy/slide2.jpg" },
      { path: "/images/yeezy/slide3.jpg" },
      { path: "/images/yeezy/slide4.jpg" },
    ],
    rating: 5,
    reviewsNumber: 5,
    reviews: [],
    attrs: [
      {
        key: "Taille",
        value: ["38", "39", "40", "41", "42", "43", "44", "45"],
      },
      { key: "Coloris", value: ["Bleue"] },
    ],
  },
  {
    name: "YEEZY 700 V3 'AZAËL'",
    description:
      "Dans un changement audacieux par rapport à son design old-school précédent, Kanye West se développe dans un style futuriste avec l'adidas Yeezy Boost 700 V3. Lancée en décembre 2019, cette version d'Azael comprend un chausson en néoprène noir avec un col cranté et des couches de textile rayé dans une cage moulée et ajourée. Le laçage dynamique offre un verrouillage sécurisé. Tout cela est soutenu par un amorti Boost et une semelle extérieure en caoutchouc robuste.",
    count: 5,
    price: 18000,
    category: "Yeezy/Boost 700",
    images: [{ path: "/images/yeezy/AZAEL.jpg" }],
    rating: 5,
    reviewsNumber: 5,
    reviews: [],
    attrs: [
      {
        key: "Taille",
        value: ["38", "39", "40", "41", "42", "43", "44", "45"],
      },
      { key: "Coloris", value: ["Blanc"] },
    ],
  },
  {
    name: "YEEZY 500 'BLUSH'",
    description:
      "La Yeezy 500 est apparue pour la première fois en précommande en février 2018, avant une sortie plus large en avril 2018. Le coloris « Blush » présente une teinte taupe claire sur toute la chaussure, y compris la tige composée de daim, de mesh et de cuir. La semelle intermédiaire sculptée est inspirée de l'adidas KB8 III, qui vantait la technologie « Feet You Wear » des années 1990.",
    count: 5,
    price: 18000,
    category: "Yeezy/Boost 500",
    images: [
      { path: "/images/yeezy/BLUSH.jpg" },
      { path: "/images/yeezy/BLUSH2.jpg" },
      { path: "/images/yeezy/BLUSH3.jpg" },
      { path: "/images/yeezy/BLUSH4.jpg" },
    ],
    rating: 5,
    reviewsNumber: 5,
    reviews: [],
    attrs: [
      { key: "Taille", value: ["38", "39", "40", "43", "44", "45"] },
      { key: "Coloris", value: ["Blanc"] },
    ],
    
  },
  {
    name: "YEEZY 500 'ASH GREY'",
    description:
      "La Yeezy 500 'Ash Grey' associe une palette de couleurs austère à une construction ventilée. Une finition en niveaux de gris neutres est appliquée au coureur de style de vie, mis en valeur par une tige en maille ouverte avec des superpositions en daim de vache de qualité supérieure. Un garde-boue en caoutchouc confère à la chaussure une durabilité résistante à l'abrasion, tandis que le passepoil réfléchissant 3M offre une visibilité accrue dans des conditions de faible luminosité. Il est construit sur une semelle intercalaire adiPRENE +, rendue dans une finition taupe foncé et avec une construction podulaire inspirée de la technologie rétro Feet You Wear d'adidas.",
    count: 5,
    price: 18000,
    category: "Yeezy/Boost 500",
    images: [
      { path: "/images/yeezy/Ash.jpg" },
      { path: "/images/yeezy/Ash2.jpg" },
      { path: "/images/yeezy/Ash3.jpg" },
      { path: "/images/yeezy/Ash4.jpg" },
    ],
    rating: 5,
    reviewsNumber: 5,
    reviews: [],
    attrs: [
      {
        key: "Taille",
        value: ["38", "39", "40", "41"],
      },
      { key: "Coloris", value: ["Gris"] },
    ],
  },
  {
    name: "YEEZY 500 'ENFLAMMER'",
    description:
      "La Yeezy 500 'Enflamer' présente des outils dynamiques sur sa construction signature. L'empeigne de la chaussure est construite avec un mélange de mesh ouvert et de suède, fini en marron, beige, gris et indigo. Une boucle de languette est incluse pour un enfilage et un retrait faciles, tandis qu'une enveloppe en caoutchouc au milieu du pied renforce le design. Sous le pied, une semelle intercalaire Adiprene + offre un amorti et met en valeur le design en orange, assorti sous le pied par la semelle extérieure en caoutchouc, qui offre une traction.",
    count: 5,
    price: 18000,
    category: "Yeezy/Boost 500",
    images: [
      { path: "/images/yeezy/enflammer.jpg" },
      { path: "/images/yeezy/enflammer2.jpg" },
      { path: "/images/yeezy/enflammer3.jpg" },
      { path: "/images/yeezy/enflammer4.jpg" },
    ],
    rating: 5,
    reviewsNumber: 5,
    reviews: [],
    attrs: [
      {
        key: "Taille",
        value: [38, 39, 40, 41, 42, 43, 44, 45],
      },
      { key: "Coloris", value: ["Noir", "Orange"] },
    ],
  },
  {
    name: "YEEZY 700 V3 'DARK GLOW'",
    description:
      "La Yeezy 700 V3 'Dark Glow' émerge avec un look presque exactement comme le coloris 2020 'Alvah'. Cependant, le design se différencie par la cage RPU, qui arbore une finition phosphorescente en bleu, plutôt que le vert de son prédécesseur. Le reste de la tige est construit avec un maillage technique, tandis que sous le pied, une semelle intercalaire en EVA ton sur ton à l'intérieur d'un noyau en polyuréthane offre un amorti, laissant place à une semelle extérieure en caoutchouc avec un motif à chevrons pour la traction. Leur design audacieux et rétro combine des éléments de course et de randonnée. Dotées d'une semelle Boost pour un confort optimal, elles se distinguent par leurs teintes grises, bleues et orangées. Les Yeezy 700 Waverunner sont très recherchées et prisées par les amateurs de sneakers pour leur exclusivité et leur style streetwear distinctif.",
    count: 5,
    price: 18000,
    category: "Yeezy/Boost 700",
    images: [
      { path: "/images/yeezy/DARKGLOW.jpg" },
      { path: "/images/yeezy/DARKGLOW2.jpg" },
      { path: "/images/yeezy/DARKGLOW3.jpg" },
      
    ],
    rating: 5,
    reviewsNumber: 5,
    reviews: [],
    attrs: [
      {
        key: "Taille",
        value: [38, 39, 40, 41, 42, 43, 44, 45],
      },
      { key: "Coloris", value: ["Noir"] },
    ],
  },
  {
    name: "YEEZY BOOST 700 V2 'TÉPHRA'",
    description:
      "La Yeezy Boost 700 V2 'Tephra' apporte un coloris discret à la deuxième itération de la ligne Yeezy 700. L'empeigne de la chaussure est construite avec un mélange de couches de maille et de daim, fini dans des teintes neutres. Un look plus sombre apparaît sur la semelle volumineuse emblématique, qui abrite une semelle intercalaire Boost pleine longueur pour l'amorti. Sous le pied, une semelle extérieure en caoutchouc gomme offre une traction tout en offrant une finition élevée.",
    count: 5,
    price: 18000,
    category: "Yeezy/Boost 700",
    images: [{ path: "/images/yeezy/v2.jpg" }],
    rating: 5,
    reviewsNumber: 5,
    reviews: [],
    attrs: [
      {
        key: "Taille",
        value: [ "41", "42","43", "44", "45"],
      },
      { key: "Coloris", value: ["Gris"] },
    ],
  },
  {
    name: "Yeezy 700 Waverunner",
    description:
      "Les Yeezy 700 Waverunner sont des chaussures emblématiques de la collaboration entre Kanye West et Adidas. Leur design audacieux et rétro combine des éléments de course et de randonnée. Dotées d'une semelle Boost pour un confort optimal, elles se distinguent par leurs teintes grises, bleues et orangées. Les Yeezy 700 Waverunner sont très recherchées et prisées par les amateurs de sneakers pour leur exclusivité et leur style streetwear distinctif.",
    count: 5,
    price: 18000,
    category: "Yeezy/Boost 700",
    images: [
      { path: "/images/yeezy/WAVERUNNER.jpg" },
      { path: "/images/yeezy/WAVERUNNER2.jpg" },
      { path: "/images/yeezy/WAVERUNNER3.jpg" },
      
    ],
    rating: 5,
    reviewsNumber: 5,
    reviews: [],
    attrs: [
      {
        key: "Taille",
        value: ["38", "39","40", "41", "42", "43", "44", "45"],
      },
      { key: "Coloris", value: ["Gris"] },
    ],
  },

  {
    name: "2002R 'PROTECTION PACK - RAIN CLOUD'",
    description:
      "La 'Protection Pack - Rain Cloud' 2002R est sorti dans le cadre du Protection Pack, une collection de trois chaussures. La construction de style de vie de la chaussure émerge avec un design en niveaux de gris, construit avec une base en mesh et recouvert de daim à bords bruts, conçu pour donner l'impression qu'il a été usé. La languette arbore de la mousse exposée pour jouer davantage sur le look, tandis que sous le pied, une semelle intercalaire Abzorb en détresse offre un amorti, laissant place à une semelle extérieure N-ergy pour la traction.",
    count: 10,
    price: 20000,
    category: "New Balance",
    images: [
      { path: "/images/newBalance/2002R.jpg" },
      { path: "/images/newBalance/2002R2.jpg" },
      { path: "/images/newBalance/2002R3.jpg" },
      { path: "/images/newBalance/2002R4.jpg" },
    ],
    rating: 5,
    reviewsNumber: 6,
    reviews: [],
    attrs: [
      { key: "Taille", value: ["38", "39", "40", "43", "44", "45"] },
      { key: "Coloris", value: ["Gris"] },
    ],
  },
  {
    name: "2002R 'PROTECTION PACK - MIRAGE GRAY'",
    description:
      "La 'Protection Pack' 2022 comprend la New Balance 2002R 'Mirage Grey', une sneaker qui combine une silhouette héritage avec des détails modernisés dans un coloris neutre. L'empeigne en mesh gris brunâtre présente des superpositions en daim gris avec des bords déchiquetés d'aspect vieilli sur le panneau de quart, l'avant-pied et le talon. Le logo 'N' signature arrive en gris clair entouré de bleu. L'esthétique vieillie se reflète sur la semelle intermédiaire ABZORB et la semelle extérieure en caoutchouc.",
    count: 15,
    price: 20000,
    category: "New Balance",
    images: [{ path: "/images/newBalance/2002RG.jpg" }],
    rating: 4,
    reviewsNumber: 7,
    reviews: [],
    attrs: [
      { key: "Taille", value: ["38", "39", "40", "43", "44", "45"] },
      { key: "Coloris", value: ["Gris","Vert"] },
    ],
  },
  {
    name: "1906D 'PROTECTION PACK - CASTLEROCK'",
    description:
      "L'empeigne de la New Balance 1906D Protection Pack Harbor Grey est composée d'une base en mesh dans les coloris Castle Rock et Harbor Grey. La sneaker présente des couches de TPU et des matériaux en daim au niveau du talon. La languette présente des accents de cuir surpiqué avec un logo New Balance en relief. La semelle extérieure en caoutchouc soutient la semelle intermédiaire ABZORB et l'insert de talon SBS. De plus, les empiècements sont en ripstop poilu, tandis que la semelle intermédiaire est construite avec la technologie N-Ergy. Le logo 'N 'est brodé sur les deux côtés latéraux de la sneaker, complétant ainsi son apparence. La New Balance 1906D Protection Pack Harbor Grey a été lancée le 6 janvier 2023.",
    count: 20,
    price: 22000,
    category: "New Balance",
    images: [
      { path: "/images/newBalance/1906D.jpg" },
      { path: "/images/newBalance/1906D2.jpg" },
      { path: "/images/newBalance/1906D3.jpg" },
      { path: "/images/newBalance/1906D4.jpg" },
    ],
    rating: 4,
    reviewsNumber: 8,
    reviews: [],
    attrs: [
      { key: "Taille", value: ["38", "39", "40", "43", "44", "45"] },
      { key: "Coloris", value: ["Gris","Noir"] },
    ],
  },
  {
    name: "550 'WHITE UNIVERSITY BLUE'",
    description:
      "La 550 'White University Blue' est une chaussure au style classique avec une combinaison de couleurs blanche et bleu universitaire. Conçue pour offrir confort et durabilité, elle est polyvalente et s'adapte à différentes occasions. Avec son design intemporel et sa palette de couleurs élégante, la 550 'White University Blue' est un choix discret et stylé pour compléter votre look quotidien.",
    count: 15,
    price: 16000,
    category: "New Balance",
    images: [{ path: "/images/newBalance/550UB.jpg" }],
    rating: 4,
    reviewsNumber: 7,
    reviews: [],
    attrs: [
      { key: "Taille", value: ["38", "39", "40", "43", "44", "45"] },
      { key: "Coloris", value: ["Blanc","Bleue"] },
    ],
  },
  {
    name: "550 'WHITE TEAM RED'",
    description:
      "Le 550 'White Red' apporte un mélange classique de teintes à sa construction de basket-ball vintage. Construite en cuir, la tige de la chaussure apparaît en blanc, noir et rouge, avec des microperforations pour la respirabilité. La languette tissée comprend un graphique de basket-ball, avec un logo « N » se détachant sur la paroi latérale. Sous le pied, la semelle extérieure en caoutchouc, qui poursuit le look triton, intègre des rainures flexibles pour la traction.",
    count: 15,
    price: 18000,
    category: "New Balance",
    images: [
      { path: "/images/newBalance/550BR.jpg" },
      { path: "/images/newBalance/550BR2.jpg" },
      { path: "/images/newBalance/550BR3.jpg" },
      { path: "/images/newBalance/550BR4.jpg" },
    ],
    rating: 4,
    reviewsNumber: 2,
    reviews: [],
    attrs: [
      { key: "Taille", value: ["38", "39", "40", "43", "44", "45"] },
      { key: "Coloris", value: ["Blanc","Rouge"] },
    ],
  },
  {
    name: "550 'WHITE BLUE'",
    description:
      "Ramenant la chaussure de basket vintage des années 80, la 550 'White Blue' sortie en décembre 2020. Dotée d'un coloris classique, la tige de la chaussure est construite avec une base en cuir blanc, soulignée de bleu et contrastée de noir. La maille sur le col et les perforations assurent la respirabilité, tandis qu'un graphique de basket-ball apparaît sur l'étiquette de la langue. Sous le pied, les trois couleurs se rejoignent sur l'outillage.",
    count: 15,
    price: 16000,
    category: "New Balance",
    images: [
      { path: "/images/newBalance/550WB.jpg" },
      { path: "/images/newBalance/550WB2.jpg" },
      { path: "/images/newBalance/550WB3.jpg" },
      { path: "/images/newBalance/550WB4.jpg" },
    ],
    rating: 4,
    reviewsNumber: 7,
    reviews: [],
    attrs: [
      { key: "Taille", value: ["38", "39", "40", "43", "44", "45"] },
      { key: "Coloris", value: ["Blanc","Bleue"] },
    ],
  },
  {
    name: "550 'BLANC VERT'",
    description:
      "Le 550 'White Green' apporte un look bicolore classique à sa construction rétro. La tige de la chaussure est construite avec une base en cuir blanc, recouverte de daim ton sur ton à la pointe et soutenue par des microperforations pour la respirabilité. La marque, y compris le logo 'N', ajoute du vert au design, les deux couleurs se rejoignant sur la semelle en caoutchouc sous le pied, qui comprend de l'EVA pour l'amorti.",
    count: 25,
    price: 17000,
    category: "New Balance",
    images: [{ path: "/images/newBalance/550.jpg" }],
    rating: 3,
    reviewsNumber: 9,
    reviews: [],
    attrs: [
      { key: "Taille", value: ["38", "39", "40", "43", "44", "45"] },
      { key: "Coloris", value: ["Blanc","Vert"] },
    ],
  },

  {
    name: "JARRITOS X DUNK LOW SB",
    description:
      "Une collaboration entre Jarritos x Nike Dunk Low SB s'inspire de la célèbre marque de soda mexicaine. L'empeigne de la sneaker associe un Swoosh textile vert Malachite contre l'empeigne en cuir blanc Phantom avec des empiècements en toile de chanvre. Le talon latéral est orné du logo Jarritos cousu en vert et orange, et l'étiquette de languette tissée a une double marque. Les onglets de talon alternés indiquent « Nike » et « Jarritos ». La sneaker repose sur une semelle cupsole en caoutchouc robuste avec des flancs blancs sur une semelle extérieure verte et orange.",
    count: 10,
    price: 20000,
    category: "Nike/DUNK",
    images: [
      { path: "/images/nike/JARRITO.jpg" },
      { path: "/images/nike/JARRITO2.jpg" },
      { path: "/images/nike/JARRITO3.jpg" },
      { path: "/images/nike/JARRITO4.jpg" },
    ],
    rating: 5,
    reviewsNumber: 6,
    reviews: [], attrs: [
      { key: "Taille", value: ["38", "39", "40", "43", "44", "45"] },
      { key: "Coloris", value: ["Blanc","Vert"] },
    ],
  },
  {
    name: "ZION WILLIAMSON X AIR JORDAN 1 RETRO LOW OG 'VOODOO'",
    description:
      "Poursuivant le partenariat de la star des cerceaux avec Jordan Brand, la Zion Williamson x Air Jordan 1 Retro Low OG 'Voodoo' présente un mélange chimérique de patchwork, de coutures apparentes, de Swooshes inversés et de la marque Wings à l'envers. Les empiècements latéraux en daim beige et la zone des orteils en daim marron contrastent avec les superpositions rugueuses en fossile, vert pétrole et marron pâle. Des coutures de poupée vaudou apparaissent sur le talon latéral et, dissimulées sous les deux languettes de talon non cousues, se trouvent des images « Voodoo » et « Zion ». La tige repose sur une semelle intercalaire blanc cassé avec des coutures différentes à droite et à gauche et est associée à des semelles extérieures en caoutchouc gomme.",
    count: 10,
    price: 32000,
    category: "Nike/Jordan 1",
    images: [
      { path: "/images/nike/VODOO.jpg" },
      { path: "/images/nike/VODOO2.jpg" },
      { path: "/images/nike/VODOO3.jpg" },
      { path: "/images/nike/VODOO4.jpg" },
      { path: "/images/nike/VODOO5.jpg" },
      { path: "/images/nike/VODOO6.jpg" },
    ],
    rating: 5,
    reviewsNumber: 6,
    reviews: [],
    attrs: [
      { key: "Taille", value: ["38", "39", "40", "43", "44", "45"] },
      { key: "Coloris", value: ["Marron"] },
    ],
  },
  {
    name: "FLY STREETWEAR X DUNK LOW PRO SB 'GARDENIA'",
    description:
      "La Fly Streetwear x Nike Dunk Low Pro SB est une version moderne de la chaussure classique, créée en collaboration avec le skate shop basé à Shanghai. Inspirée des fleurs d'orchidées en jade blanc vendues dans les rues de Shanghai, la chaussure présente une tige en cuir blanc fixée par des lacets en corde, contrastée avec une languette de talon de marque Nike en daim vert citron et des superpositions en daim bleu inspirées des tiges de la fleur et du tissu bleu qui tapisse les paniers dans lesquels ils sont vendus. Le talon latéral est orné d'un graphique de boucle d'oreille en forme de fleur, complété par un Swoosh fleuri cousu. Les marques Fly Streetwear et Nike SB apparaissent sur les étiquettes tissées alternées des languettes rembourrées. Sous le pied, une semelle cupsole en caoutchouc avec des flancs blanc cassé vintage et une semelle extérieure en caoutchouc blanc offrent confort et soutien",
    count: 10,
    price: 22000,
    category: "Nike/DUNK",
    images: [
      { path: "/images/nike/GARDENIA.jpg" },
      { path: "/images/nike/GARDENIA2.jpg" },
      { path: "/images/nike/GARDENIA3.jpg" },
      { path: "/images/nike/GARDENIA4.jpg" },
      { path: "/images/nike/GARDENIA5.jpg" },
      { path: "/images/nike/GARDENIA6.jpg" },
      { path: "/images/nike/GARDENIA7.jpg" },
      { path: "/images/nike/GARDENIA8.jpg" },
    ],
    rating: 5,
    reviewsNumber: 6,
    reviews: [],
    attrs: [
      { key: "Taille", value: ["38", "39", "40", "43", "44", "45"] },
      { key: "Coloris", value: ["Blanc","Bleue"] },
    ],
  },
  {
    name: "TIFFANY & CO. X AIR FORCE 1 LOW '1837'",
    description:
      "Une union historique réunit la célèbre maison de joaillerie new-yorkaise et le géant du sportswear dans la Tiffany & Co. x Nike Air Force 1 Low '1837'. Cette version va au-delà de l'hommage 'Diamond' Dunk SB de 2005 et consolide le partenariat avec une tige en daim noir et un Swoosh en cuir dégringolé dans la teinte bleu œuf de merle emblématique. L'inscription « Tiffany » apparaît sur l'étiquette de la langue tandis que chaque languette de talon affiche la marque classique « Nike Air » en noir. La chaussure est complétée par un badge argenté Tiffany gravé. Le look est complété par une gamme d'accessoires en argent sterling disponibles séparément, notamment un chausse-pied, une brosse, une chaîne de sifflet et un dubrae en dentelle.",
    count: 10,
    price: 20000,
    category: "Nike/AirForce 1",
    images: [
      { path: "/images/nike/TIFFANY.jpg" },
      { path: "/images/nike/TIFFANY2.jpg" },
      { path: "/images/nike/TIFFANY3.jpg" },
      { path: "/images/nike/TIFFANY4.jpg" },
    ],
    rating: 5,
    reviewsNumber: 6,
    reviews: [],
    attrs: [
      { key: "Taille", value: ["38", "39", "40", "43", "44", "45"] },
      { key: "Coloris", value: ["Bleue","Noir"] },
    ],
  },
  {
    name: "CONCEPTS X DUNK LOW SB 'ORANGE LOBSTER'",
    description:
      "La Concepts x Nike Dunk Low SB 'Orange Lobster' met à jour ce classique bas dans le cadre d'une collaboration de longue date avec la plus ancienne vitrine de baskets de Harvard Square. Inspirée des homards, la sneaker est construite sur une tige en nubuck orange ; les superpositions ont un motif moucheté rappelant une carapace de homard. La languette blanche en maille respirante et le Swoosh orange aux contours blancs s'associent au motif de la doublure intérieure ressemblant au bavoir nécessaire d'une cabane à homards. Les parois latérales noires et les bandes de caoutchouc au sommet de la zone des orteils sont des clins d'œil aux bandes de pinces de homard. La traction est assurée par une semelle extérieure en caoutchouc orange.",
    count: 10,
    price: 40000,
    category: "Nike",
    images: [
      { path: "/images/nike/OrangeLobster.jpg" },
      { path: "/images/nike/OrangeLobster2.jpg" },
      { path: "/images/nike/OrangeLobster3.jpg" },
      { path: "/images/nike/OrangeLobster4.jpg" },
    ],
    rating: 5,
    reviewsNumber: 6,
    reviews: [],
    attrs: [
      { key: "Taille", value: ["38", "39", "40", "43", "44", "45"] },
      { key: "Coloris", value: ["Orange"] },
    ],
  },
  {
    name: "AIR JORDAN 11 RETRO 'CHERRY'",
    description:
      "Une nouvelle entrée dans la lignée de la Air Jordan 11, la « Cherry », également connue sous le nom de « Varsity Red », présente un coloris épuré qui utilise une palette inspirée des Chicago Bulls. La tige présente une maille blanche avec des œillets de sangle ton sur ton, tandis qu'un garde-boue en cuir verni brillant enveloppe toute la chaussure dans une teinte rouge foncé. Un logo Jumpman rouge apparaît à l'arrière du talon, tandis qu'une semelle extérieure en caoutchouc translucide complète le look. Une semelle intercalaire légère en Phylon offre un amorti tandis qu'une plaque à ressort en fibre de carbone offre un soutien structurel sous le pied.",
    count: 10,
    price: 21000,
    category: "Nike/Jordan 11",
    images: [
      { path: "/images/nike/CHERRY.jpg" },
      { path: "/images/nike/CHERRY2.jpg" },
      { path: "/images/nike/CHERRY3.jpg" },
      { path: "/images/nike/CHERRY4.jpg" },
    ],
    rating: 5,
    reviewsNumber: 6,
    reviews: [],
    attrs: [
      { key: "Taille", value: ["38", "39", "40", "43", "44", "45"] },
      { key: "Coloris", value: ["Blanc","Rouge"] },
    ],
  },
  {
    name: "AIR JORDAN 11 RETRO 'COOL GREY' 2021",
    description:
      "Sortie en décembre 2021, la Air Jordan 11 Retro 'Cool Grey' 2021 ramène un coloris de 2001 et 2010. Fidèle à l'OG, la tige de la chaussure est construite en cuir, finie en gris et soutenue par un garde-boue en cuir verni gris plus foncé. Des œillets de sangle ton sur ton sont intégrés au système de laçage pour sécuriser l'ajustement, tandis que sous le pied, une semelle intercalaire en phylon blanc contrastant abrite de l'Air sur toute la longueur pour un amorti, avec une plaque en fibre de carbone incluse pour un soutien accru. Une semelle extérieure en caoutchouc translucide glacé offre une traction.",
    count: 10,
    price: 18000,
    category: "Nike/Jordan 11",
    images: [
      { path: "/images/nike/COOLGREY.jpg" },
      { path: "/images/nike/COOLGREY2.jpg" },
      { path: "/images/nike/COOLGREY3.jpg" },
      { path: "/images/nike/COOLGREY4.jpg" },
    ],
    rating: 5,
    reviewsNumber: 6,
    reviews: [],
    attrs: [
      { key: "Taille", value: ["38", "39", "40", "43", "44", "45"] },
      { key: "Coloris", value: ["Blanc","Gris"] },
    ],
  },
  {
    name: "AIR JORDAN 11 RETRO 'JUBILEE / 25TH ANNIVERSARY'",
    description:
      "Sortie pour célébrer les 25 ans de la silhouette emblématique, la Air Jordan 11 Retro 'Jubilee / 25th Anniversary' émerge avec un look classique. La tige de la chaussure est construite avec une base en maille balistique, recouverte de cuir verni, avec les deux éléments finis en noir. Le Jumpman métallique 3D et la marque de talon « 23 » accentuent le look en argent, avec une finition similaire sur le « Jordan » qui marque les œillets. Sous le pied, une semelle intercalaire Air blanche offre amorti et contraste, laissant place à une semelle extérieure en caoutchouc translucide pour la traction.",
    count: 10,
    price: 25000,
    category: "Nike/Jordan 11",
    images: [
      { path: "/images/nike/JUBILEE.jpg" },
      { path: "/images/nike/JUBILEE2.jpg" },
      { path: "/images/nike/JUBILEE3.jpg" },
      { path: "/images/nike/JUBILEE4.jpg" },
    ],
    rating: 5,
    reviewsNumber: 6,
    reviews: [],
    attrs: [
      { key: "Taille", value: ["38", "39", "40", "43", "44", "45"] },
      { key: "Coloris", value: ["Blanc","Noir"] },
    ],
  },
  {
    name: "AIR JORDAN 11 RETRO 'CONCORD' 2018",
    description:
      "La version 2018 de la Air Jordan 11 Retro 'Concord' affiche '45' imprimé sur la languette noire du talon en l'honneur du numéro de maillot que Michael Jordan portait lors de son retour en NBA après sa première retraite. Les autres détails emblématiques de la chaussure restent intacts, notamment une tige en maille balistique blanche, des superpositions en cuir verni noir et une semelle extérieure translucide glacée.",
    count: 10,
    price: 16000,
    category: "Nike/Jordan 11",
    images: [
      { path: "/images/nike/CONCORDE.jpg" },
      { path: "/images/nike/CONCORDE2.jpg" },
      { path: "/images/nike/CONCORDE3.jpg" },
      { path: "/images/nike/CONCORDE4.jpg" },
    ],
    rating: 5,
    reviewsNumber: 6,
    reviews: [],
    attrs: [
      { key: "Taille", value: ["38", "39", "40", "43", "44", "45"] },
      { key: "Coloris", value: ["Blanc","Noir"] },
    ],
  },
  {
    name: "AIR JORDAN 4 RETRO OG 'FIRE RED' 2020",
    description:
      "La Air Jordan 4 Retro OG 'Fire Red' 2020 sortie en 2020, ramenant le colorway OG de la silhouette. La tige de la chaussure est fabriquée en cuir blanc, accentué par des touches de rouge feu partout, y compris les œillets emblématiques. Sous le pied, la semelle intermédiaire abrite Air visible dans le talon pour un amorti, tandis qu'un logo Nike Air sur le talon complète le look rétro.",
    count: 10,
    price: 26000,
    category: "Nike/Jordan 4",
    attrs: [
      { key: "Taille", value: "43" },
      { key: "Coloris", value: "Red" }
  ], 
    images: [
      { path: "/images/nike/FIRERED.jpg" },
      { path: "/images/nike/FIRERED2.jpg" },
      { path: "/images/nike/FIRERED3.jpg" },
      { path: "/images/nike/FIRERED4.jpg" },
    ],
    rating: 5,
    reviewsNumber: 6,
    reviews: [],
    attrs: [
      { key: "Taille", value: ["38", "39", "40", "43", "44", "45"] },
      { key: "Coloris", value: ["Blanc","Noir","Rouge"] },
    ],
  },
  {
    name: "HARIBO X DAIM 'ROUGE COQUELICOT'",
    description:
      "PUMA a fait appel à la marque allemande de bonbons pour créer le Haribo x Suede 'Poppy Red', qui fait partie d'une plus grande collection. Construite en daim, la tige de la chaussure apparaît en rouge coquelicot, avec le talon arborant la marque «Haribo». L'étiquette de la languette et la semelle intérieure ajoutent à la place un co-marquage au design, tandis qu'un insert en gel sur le patch au talon et une étiquette moulée incluent une gomme Goldbear signature, assortie à l'imprimé graphique sur la semelle extérieure en caoutchouc translucide.",
    count: 10,
    price: 20000,
    category: "Puma",
    images: [{ path: "/images/puma/haribo.jpg" }],
    rating: 5,
    reviewsNumber: 6,
    reviews: [],
    attrs: [
      { key: "Taille", value: ["40", "43", "44", "45"] },
      { key: "Coloris", value: ["Rouge"] },
    ],
  },
  {
    name: "RS-SIMUL8 CORE 'NOIR'",
    description:
      "La Puma RS-SIMUL8 CORE 'Noir' est une chaussure de sport polyvalente et moderne de la collection RS-SIMUL8 de Puma. Avec son coloris noir élégant, elle s'adapte à tous les styles. Fabriquée avec des matériaux de qualité, elle offre durabilité et confort. Son design futuriste et sa semelle robuste assurent une adhérence optimale. La Puma RS-SIMUL8 CORE 'Noir' est parfaite pour le sport et un usage quotidien, ajoutant une touche de style à votre tenue.",
    count: 10,
    price: 18000,
    category: "Puma",
    images: [{ path: "/images/puma/core.jpg" }],
    rating: 5,
    reviewsNumber: 6,
    reviews: [],
    attrs: [
      { key: "Taille", value: ["38", "39", "40", "43", "44", "45"] },
      { key: "Coloris", value: ["Noir"] },
    ],
  },
  {
    name: "TRC BLAZE 'SAFARI - PRISTINE'",
    description:
      "La Puma TRC BLAZE 'Safari - Pristine' est une chaussure moderne de la collection TRC BLAZE de Puma. Son design s'inspire du motif safari avec des touches de couleur subtiles. Fabriquée avec des matériaux de qualité, elle offre confort et durabilité. La TRC BLAZE 'Safari - Pristine' est polyvalente et ajoute une touche sophistiquée à vos tenues, que ce soit pour une tenue décontractée ou une occasion spéciale.",
    count: 10,
    price: 17000,
    category: "Puma",
    images: [{ path: "/images/puma/pristine.jpg" }],
    rating: 5,
    reviewsNumber: 6,
    reviews: [],
    attrs: [
      { key: "Taille", value: ["38", "39", "40", "43", "44", "45"] },
      { key: "Coloris", value: ["Blanc","Marron"] },
    ],
  },
  {
    name: "BMW MOTORSPORT X RS-TRCK 'DAY DREAM'",
    description:
      "La BMW MOTORSPORT X RS-TRCK 'Day Dream' est une chaussure élégante et sportive issue de la collaboration entre BMW Motorsport et Puma. Elle associe style automobile et performance. Fabriquée avec des matériaux de qualité, elle offre confort et durabilité. La BMW MOTORSPORT X RS-TRCK 'Day Dream' est parfaite pour les amateurs de sport automobile à la recherche d'une chaussure tendance et fonctionnelle.",
    count: 10,
    price: 22000,
    category: "Puma",
    images: [{ path: "/images/puma/day.jpg" }],
    rating: 5,
    reviewsNumber: 6,
    reviews: [],
    attrs: [
      { key: "Taille", value: ["38", "39", "40", "43", "44", "45"] },
      { key: "Coloris", value: ["Blanc","Bleue"] },
    ],
  },
  {
    name: "RS-X 'MONO - SAPHIR ROYAL'",
    description:
      "La Puma RS-X 'Mono - Saphir Royal' est une chaussure de sport élégante de la collection RS-X de Puma. Elle présente une teinte audacieuse de saphir royal et est fabriquée avec des matériaux de haute qualité tels que le cuir, le daim et le mesh. Dotée d'un amorti confortable et d'une semelle extérieure robuste, elle offre style et performance. La Puma RS-X 'Mono - Saphir Royal' est un choix tendance pour les amateurs de sneakers à la recherche d'une chaussure distinctive et polyvalente.",
    count: 10,
    price: 20000,
    category: "Puma",
    images: [{ path: "/images/puma/saphir.jpg" }],
    rating: 5,
    reviewsNumber: 6,
    reviews: [],
    attrs: [
      { key: "Taille", value: ["38", "39", "40", "43", "44", "45"] },
      { key: "Coloris", value: ["Bleue"] },
    ],
  },
  {
    name: "BUTTER GOODS X SLIPSTREAM LOW 'MOKA BISQUE'",
    description:
      "Pourvue d'un look nineties, cette nouvelle Slipstream Lo bénéficie d'une empeigne élaborée en daim marron. On retrouve ensuite de nombreux détails verts à l'image de la doublure et des oeillets, ainsi que des accents rouges et jaunes sur les brandings. Une semelle noire, de même qu'une gumsole, peaufinent le look.",
    count: 10,
    price: 14000,
    category: "Puma",
    images: [{ path: "/images/puma/moka.jpg" }],
    rating: 5,
    reviewsNumber: 6,
    reviews: [],
    attrs: [
      { key: "Taille", value: ["38", "39", "40", "43", "44", "45"] },
      { key: "Coloris", value: ["Orange","Noir"] },
    ],
    
  },
  {
    name: "DAIM CLASSIQUE 21 'NOIR BLANC'",
    description:
      "Actualisant légèrement le classique du basketball de 1968, le Suede Classic 21 'Black White' émerge avec un mélange classique de teintes. Construite entièrement en daim, la tige de la chaussure présente une base noire, contrastée par une bande Formstrip blanc cassé sur la paroi latérale. Le panneau latéral latéral et la marque au talon accentuent le look en or métallique, tandis que sous le pied, une semelle cupsole en caoutchouc blanc ancre la construction.",
    count: 10,
    price: 18000,
    category: "Puma",
    images: [{ path: "/images/puma/daim.jpg" }],
    rating: 5,
    reviewsNumber: 6,
    reviews: [],
    attrs: [
      { key: "Taille", value: ["38", "39", "40", "43", "44", "45"] },
      { key: "Coloris", value: ["Blanc","Noir"] },
    ],
  },
  {
    name: "ADIFOM Q 'WONDER BLANC NOIR'",
    description:
      "L'ADIFOM Q 'Wonder Blanc Noir' est une chaussure au design moderne de la collection ADIFOM. Avec son coloris 'Wonder Blanc Noir' (blanc merveilleux et noir), elle offre un contraste élégant. Fabriquée avec des matériaux de qualité, cette chaussure allie confort et durabilité. Son design tendance et épuré en fait un choix polyvalent pour différentes occasions. L'ADIFOM Q 'Wonder Blanc Noir' est parfaite pour ceux qui recherchent une chaussure à la fois stylée et fonctionnelle pour leur quotidien.",
    count: 8,
    price: 15000,
    category: "Adidas",
    images: [{ path: "/images/adidas/adifoam.jpg" }],
    rating: 4,
    reviewsNumber: 7,
    reviews: [],
    attrs: [
      { key: "Taille", value: ["38", "39", "40", "43", "44", "45"] },
      { key: "Coloris", value: ["Blanc","Noir"] },
    ],
  },
  {
    name: "OZELIA 'FIERY'",
    description:
      "La Ozelia 'Fiery' présente un look inspiré des coureurs des années 90. Une chaussure de style de vie, la tige est construite avec du textile, fini dans un mélange dégradé d'orange et de jaune et contrasté par du noir partout. Le daim synthétique blanc cassé recouvre la pointe, avec de l'argent réfléchissant accentuant les trois bandes flottantes sur la paroi latérale. Sous le pied, une semelle intercalaire Adiprene sculptée offre un amorti.",
    count: 8,
    price: 15000,
    category: "Adidas",
    images: [{ path: "/images/adidas/fiery.jpg" }],
    rating: 4,
    reviewsNumber: 7,
    reviews: [],
    attrs: [
      { key: "Taille", value: ["38", "39", "40", "43", "44", "45"] },
      { key: "Coloris", value: ["Blanc","Orange"] },
    ],
  },
  {
    name: "OZELIA 'TRIPLE GREY'",
    description:
      "La OZELIA 'Triple Grey' est une chaussure au style moderne de la collection Ozelia. Son coloris 'Triple Grey' (gris triple) lui confère une allure sobre et polyvalente. Fabriquée avec des matériaux de qualité, elle garantit confort et durabilité. Son design élégant et épuré en fait une chaussure polyvalente, idéale pour une tenue décontractée ou sportive. La OZELIA 'Triple Grey' est parfaite pour ceux qui recherchent une chaussure discrète, mais stylée pour leur quotidien.",
    count: 8,
    price: 15000,
    category: "Adidas",
    images: [{ path: "/images/adidas/ozelia.jpg" }],
    rating: 4,
    reviewsNumber: 7,
    reviews: [],
    attrs: [
      { key: "Taille", value: ["38", "39", "40", "43", "44", "45"] },
      { key: "Coloris", value: ["Gris"] },
    ],
  },
  {
    name: "OZWEEGO CELOX 'BLISS'",
    description:
      "La OZWEEGO CELOX 'Bliss' est une chaussure moderne de la gamme Ozweego de Adidas. Avec son coloris 'Bliss' (béatitude), elle offre une esthétique apaisante et élégante. Fabriquée avec des matériaux de qualité, cette chaussure assure confort et durabilité. Son design audacieux et épuré en fait un choix tendance. L'OZWEEGO CELOX 'Bliss' est parfaite pour ceux qui recherchent une chaussure à la fois stylée et confortable pour compléter leur look quotidien.",
    count: 8,
    price: 15000,
    category: "Adidas",
    images: [{ path: "/images/adidas/bliss.jpg" }],
    rating: 4,
    reviewsNumber: 7,
    reviews: [],
    attrs: [
      { key: "Taille", value: ["38", "39", "40", "43", "44", "45"] },
      { key: "Coloris", value: ["Beige"] },
    ],
  },
  {
    name: "DROP STEP LOW 'WHITE TECH EMERALD'",
    description:
      "La DROP STEP LOW 'White Tech Emerald' est une chaussure au style moderne de la collection Drop Step de Adidas. Avec sa couleur blanche et des touches de vert émeraude, elle offre un look frais et dynamique. Fabriquée avec des matériaux de qualité, cette chaussure assure confort et durabilité. Son design bas garantit une mobilité optimale, en particulier pour les mouvements rapides sur le terrain. La DROP STEP LOW 'White Tech Emerald' est idéale pour les amateurs de basketball à la recherche d'une chaussure élégante et performante.",
    count: 8,
    price: 15000,
    category: "Adidas",
    images: [{ path: "/images/adidas/ds.jpg" }],
    rating: 4,
    reviewsNumber: 7,
    reviews: [],
    attrs: [
      { key: "Taille", value: ["38", "39", "40", "43", "44", "45"] },
      { key: "Coloris", value: ["Blanc","Vert"] },
    ],
  },
  {
    name: "FORUM 84 LOW 'OFF WHITE COLLEGIATE NAVY'",
    description:
      "La FORUM 84 LOW 'Off White Collegiate Navy' est une chaussure au style rétro de la collection Forum de Adidas. Elle présente une combinaison de couleurs 'Off White' (blanc cassé) et 'Collegiate Navy' (marine universitaire). Son design classique et minimaliste en fait une chaussure polyvalente adaptée à différentes occasions. Fabriquée avec des matériaux de qualité, la FORUM 84 LOW offre confort et durabilité. Elle est parfaite pour ceux qui recherchent une chaussure au look vintage avec une touche de modernité.",
    count: 8,
    price: 15000,
    category: "Adidas",
    images: [
      { path: "/images/adidas/BBCN.jpg" },
      { path: "/images/adidas/BBCN2.jpg" },
      { path: "/images/adidas/BBCN3.jpg" },
      { path: "/images/adidas/BBCN4.jpg" },
    ],
    rating: 4,
    reviewsNumber: 7,
    reviews: [],
    attrs: [
      { key: "Taille", value: ["38", "39", "40", "43", "44", "45"] },
      { key: "Coloris", value: ["Blanc","Bleue"] },
    ],
  },
  {
    name: "BAD BUNNY X FORUM BUCKLE LOW 'LAST FORUM'",
    description:
      "Bad Bunny et adidas s'associent à nouveau pour réinventer une silhouette de basket emblématique. La Bad Bunny x adidas Forum Buckle Low 'White' présente une tige en cuir blanc cassé avec des superpositions en daim assorties et les trois bandes emblématiques sont en daim gris. Aux côtés des lacets traditionnels se trouve une sangle de cheville réglable pour un ajustement sûr, complétée par un laçage à bascule qui s'enroule autour du col. Deux ensembles de languettes qui se chevauchent arborent la marque Bad Bunny 'troisième œil'. La sneaker repose sur une semelle en caoutchouc traditionnelle avec des parois latérales en caoutchouc transparent.",
    count: 8,
    price: 15000,
    category: "Adidas",
    images: [
      { path: "/images/adidas/BBLF.jpg" },
      { path: "/images/adidas/BBLF2.jpg" },
      { path: "/images/adidas/BBLF3.jpg" },
      { path: "/images/adidas/BBLF4.jpg" },
    ],
    rating: 4,
    reviewsNumber: 7,
    reviews: [],
    attrs: [
      { key: "Taille", value: ["38", "39", "40", "43", "44", "45"] },
      { key: "Coloris", value: ["Blanc"] },
    ],
  },
  {
    name: "BAD BUNNY X FORUM BUCKLE LOW 'BLUE TINT'",
    description:
      "La BAD BUNNY X FORUM BUCKLE LOW 'Blue Tint' est une chaussure de collaboration entre Bad Bunny et Adidas. Elle présente un design unique avec des boucles distinctives. Avec son coloris 'Blue Tint', elle ajoute une touche de style audacieux à votre tenue. Fabriquée avec des matériaux de qualité, cette chaussure offre confort et durabilité. La BAD BUNNY X FORUM BUCKLE LOW 'Blue Tint' est parfaite pour les fans de Bad Bunny à la recherche d'une chaussure tendance et originale.",
    count: 8,
    price: 15000,
    category: "Adidas",
    images: [{ path: "/images/adidas/BBT.jpg" }],
    rating: 4,
    reviewsNumber: 7,
    reviews: [],
    attrs: [
      { key: "Taille", value: ["38", "39", "40", "43", "44", "45"] },
      { key: "Coloris", value: ["Blanc","Bleue"] },
    ],
  },
  {
    name: "BAD BUNNY X FORUM BUCKLE LOW 'BACK TO SCHOOL'",
    description:
      "Fabriqué avec l'aide de l'artiste qui enregistre, le Bad Bunny x Forum Buckle Low 'Back To School' apporte un look noirci à sa construction de basket-ball vintage. L'empeigne en matériaux mixtes de la chaussure émerge dans un mélange de cuir, de daim et de textile, avec des lacets traditionnels et une sangle à boucle amovible fonctionnant avec un cordon enveloppant et un fermoir à lacet au talon pour sécuriser l'ajustement. Les doubles langues ajoutent à l'esthétique, avec un graphique du troisième œil du premier album de Bad Bunny marquant l'étiquette de la langue supérieure. Sous le pied, une cale en EVA sur le côté médial de la semelle cupsole en caoutchouc offre un amorti.",
    count: 8,
    price: 15000,
    category: "Adidas",
    images: [{ path: "/images/adidas/BB.jpg" }],
    rating: 4,
    reviewsNumber: 7,
    reviews: [],
    attrs: [
      { key: "Taille", value: ["38", "39", "40", "43", "44", "45"] },
      { key: "Coloris", value: ["Noir"] },
    ],
  },
  {
    name: "BALENCIAGA X ADIDAS WMNS TRIPLE S SNEAKER 'WHITE RED'",
    description:
      "La BALENCIAGA X ADIDAS WMNS TRIPLE S SNEAKER 'White Red' est une collaboration unique entre Balenciaga et Adidas. Cette sneaker présente un design audacieux avec une combinaison de couleurs 'White Red' (blanc et rouge). Fabriquée avec des matériaux de haute qualité, elle offre confort et durabilité. Son design volumineux et avant-gardiste en fait une chaussure tendance. La BALENCIAGA X ADIDAS WMNS TRIPLE S SNEAKER 'White Red' est idéale pour les amateurs de sneakers à la recherche d'un modèle audacieux et original pour compléter leur style.",
    count: 8,
    price: 35000,
    category: "Adidas",
    images: [{ path: "/images/adidas/ba.jpg" }],
    rating: 4,
    reviewsNumber: 7,
    reviews: [],
    attrs: [
      { key: "Taille", value: ["38", "39", "40", "43", "44", "45"] },
      { key: "Coloris", value: ["Blanc","Rouge"] },
    ],
  },
  {
    name: "LEBRON 20 'ALL-STAR'",
    description:
      "La Nike LeBron 20 'All-Star' présente la chaussure signature de LeBron James dans un design spécialement conçu pour le NBA All-Star Game 2023. La tige est fabriquée à partir d'un matériau en maille respirante qui comprend des fils bleu poudre et blanc cassé, ainsi qu'un Swoosh vert citron d'un côté et des Swooshes inversés blancs et gris qui se chevauchent de l'autre. La chaussure a un design bas et repose sur une semelle intercalaire Cushlon dont l'enveloppe de l'avant-pied est agrémentée de certaines des précédentes expériences de jeu All-Star de LeBron. La chaussure est équipée d'une unité Zoom Air chargée par le bas au talon pour plus de confort tandis qu'une grande unité Zoom Air à l'avant-pied contribue à améliorer la réactivité sur le terrain.",
    count: 20,
    price: 40000,
    category: "Chaussures de basketball",
    images: [
      { path: "/images/basketShoes/L20.jpg" },
      { path: "/images/basketShoes/L202.jpg" },
      { path: "/images/basketShoes/L203.jpg" },
      { path: "/images/basketShoes/L204.jpg" },
    ],
    rating: 4,
    reviewsNumber: 8,
    reviews: [],
    attrs: [
      { key: "Taille", value: ["38", "39", "40", "43", "44", "45"] },
      { key: "Coloris", value: ["Blanc","Bleue"] },
    ],
  },
  {
    name: "LEBRON 20 'THE DEBUT'",
    description:
      "La LEBRON 20 'The Debut' est une chaussure de basketball inspirée de la carrière légendaire de LeBron James. Elle présente un design moderne et performant, offrant un mélange parfait de style et de fonctionnalité. Fabriquée avec des matériaux de haute qualité, cette chaussure assure confort, durabilité et soutien optimal lors des mouvements sur le terrain. Le coloris 'The Debut' ajoute une touche de sophistication avec des détails élégants. La LEBRON 20 'The Debut' est un choix incontournable pour les fans de LeBron James et les joueurs de basketball passionnés qui recherchent une chaussure de haut niveau.",
    count: 20,
    price: 40000,
    category: "Chaussures de basketball",
    images: [
      { path: "/images/basketShoes/debut.jpg" },
      { path: "/images/basketShoes/debut2.jpg" },
      { path: "/images/basketShoes/debut3.jpg" },
      { path: "/images/basketShoes/debut4.jpg" },
    ],
    rating: 4,
    reviewsNumber: 8,
    reviews: [],
    attrs: [
      { key: "Taille", value: ["38", "39", "40", "43", "44", "45"] },
      { key: "Coloris", value: ["Blanc"] },
    ],
  },
  {
    name: "LEBRON 20 'TRINITY'",
    description:
      "La LEBRON 20 'Trinity' est une chaussure de basketball de la collection LeBron James. Elle présente un design moderne et dynamique, conçu pour offrir une performance optimale sur le terrain. Fabriquée avec des matériaux de qualité supérieure, elle offre un confort exceptionnel et une durabilité accrue. Le coloris 'Trinity' ajoute une touche d'élégance avec des nuances de couleurs vibrantes. La LEBRON 20 'Trinity' est un choix parfait pour les amateurs de basketball qui recherchent une chaussure alliant style, confort et performance. Elle est conçue pour vous aider à repousser vos limites et à vous démarquer sur le terrain.",
    count: 20,
    price: 42000,
    category: "Chaussures de basketball",
    images: [
      { path: "/images/basketShoes/TRINITY.jpg" },
      { path: "/images/basketShoes/TRINITY2.jpg" },
      { path: "/images/basketShoes/TRINITY3.jpg" },
      { path: "/images/basketShoes/TRINITY4.jpg" },
    ],
    rating: 4,
    reviewsNumber: 8,
    reviews: [],
    attrs: [
      { key: "Taille", value: ["38", "39", "40", "43", "44", "45"] },
      { key: "Coloris", value: ["Noir","Rouge"] },
    ],
  },
  {
    name: "KD 15 NRG 'AUNT PEARL'",
    description:
      "La KD 15 NRG 'Aunt Pearl' est une chaussure de basketball inspirée par la tante de Kevin Durant et dédiée à la lutte contre le cancer du sein. Elle présente un design élégant et une combinaison de couleurs spéciale. Fabriquée avec des matériaux de qualité supérieure, cette chaussure offre confort et durabilité. Elle est dotée de technologies avancées pour une performance optimale sur le terrain, offrant un excellent amorti et une adhérence supérieure. La KD 15 NRG 'Aunt Pearl' est non seulement une chaussure de basketball de haute qualité, mais aussi un symbole de soutien à une cause importante.",
    count: 20,
    price: 45000,
    category: "Chaussures de basketball",
    images: [
      { path: "/images/basketShoes/AUNTPEARL.jpg" },
      { path: "/images/basketShoes/AUNTPEARL2.jpg" },
      { path: "/images/basketShoes/AUNTPEARL3.jpg" },
      { path: "/images/basketShoes/AUNTPEARL4.jpg" },
    ],
    rating: 4,
    reviewsNumber: 8,
    reviews: [],
    attrs: [
      { key: "Taille", value: ["38", "39", "40", "43", "44", "45"] },
      { key: "Coloris", value: ["Rose"] },
    ],
  },
  {
    name: "KD 15 TB 'WHITE BLACK SPECKLED'",
    description:
      "La KD 15 TB 'White Black Speckled' est une chaussure de basketball polyvalente de la collection KD 15. Elle présente un design moderne avec une combinaison de couleurs 'White Black Speckled' (blanc avec des éclaboussures noires). Fabriquée avec des matériaux de qualité, cette chaussure offre confort et durabilité lors de vos mouvements sur le terrain. Elle est dotée de technologies avancées pour une performance optimale, offrant un excellent maintien et un amorti réactif. La KD 15 TB 'White Black Speckled' est idéale pour les joueurs de basketball à la recherche d'une chaussure fiable et stylée pour les compétitions et les entraînements.",
    count: 20,
    price: 45000,
    category: "Chaussures de basketball",
    images: [{ path: "/images/basketShoes/TB.jpg" }],
    rating: 4,
    reviewsNumber: 8,
    reviews: [],
    attrs: [
      { key: "Taille", value: ["38", "39", "40", "43", "44", "45"] },
      { key: "Coloris", value: ["Blanc","Noir"] },
    ],
  },
  {
    name: "KD 14 'BLACK LASER CRIMSON'",
    description:
      "La KD 14 'Black Laser Crimson' est une chaussure de basketball de la collection KD 14. Elle présente un design audacieux avec une combinaison de couleurs 'Black Laser Crimson' (noir et rouge laser écarlate). Fabriquée avec des matériaux de haute qualité, cette chaussure offre confort et durabilité lors des mouvements sur le terrain. Elle est dotée de technologies avancées qui offrent un amorti réactif, une adhérence améliorée et un soutien optimal. La KD 14 'Black Laser Crimson' est idéale pour les joueurs de basketball à la recherche d'une chaussure à la fois performante et stylée pour se démarquer lors des compétitions et des entraînements. Elle ajoute une touche de sophistication et d'énergie à votre jeu sur le terrain.",
    count: 20,
    price: 40000,
    category: "Chaussures de basketball",
    images: [
      { path: "/images/basketShoes/laser.jpg" },
      { path: "/images/basketShoes/laser2.jpg" },
      { path: "/images/basketShoes/laser3.jpg" },
      { path: "/images/basketShoes/laser4.jpg" },
    ],
    rating: 4,
    reviewsNumber: 8,
    reviews: [],
    attrs: [
      { key: "Taille", value: ["38", "39", "40", "43", "44", "45"] },
      { key: "Coloris", value: ["Rouge","Noir"] },
    ],
  },
  {
    name: "KYRIE 7 'DAUGHTERS'",
    description:
      "Inspirée de sa fille, la Nike Kyrie 7 'Daughters' habille la chaussure performance hoops d'une subtile palette composée de teintes pastel. La tige en mesh respirant présente une finition lavande avec un imprimé floral ton sur ton sur toute la sous-couche textile. Un graphique floral en relief décore un quatuor d'ailettes en TPU de couleur corail qui sont intégrées dans les lacets pour un ajustement plus sûr. 'AZ' est brodé sur la superposition du talon représentant la fille de Kyrie, Azurie Elizabeth. Il présente un amorti léger grâce à une semelle intercalaire en Phylon légèrement mouchetée qui est améliorée avec une unité Air Zoom Turbo à l'avant-pied.",
    count: 20,
    price: 35000,
    category: "Chaussures de basketball",
    images: [
      { path: "/images/basketShoes/dau.jpg" },
      { path: "/images/basketShoes/dau2.jpg" },
      { path: "/images/basketShoes/dau3.jpg" },
      { path: "/images/basketShoes/dau4.jpg" },
    ],
    rating: 4,
    reviewsNumber: 8,
    reviews: [],
    attrs: [
      { key: "Taille", value: ["38", "39", "40", "43", "44", "45"] },
      { key: "Coloris", value: ["Rose"] },
    ],
  },
  {
    name: "SNEAKERROOM X KYRIE 5 'I LOVE YOU MOM'",
    description:
      "La Sneaker Room x Kyrie 5 'I Love You Mom' rend hommage aux défuntes mères de Kyrie Irving et Suraj Kaufman, propriétaire de la boutique de sneakers du New Jersey. En plus des cœurs dorés et rouges brodés ornant la tige en textile blanc, le haut intermédiaire présente une doublure à pois et le lettrage « MOM » sur la languette. Les touches finales incluent un grand cœur brodé sur le talon de la chaussure gauche et une rose rouge sur la droite.",
    count: 20,
    price: 25000,
    category: "Chaussures de basketball",
    images: [{ path: "/images/basketShoes/mom.jpg" }],
    rating: 4,
    reviewsNumber: 8,
    reviews: [],
    attrs: [
      { key: "Taille", value: ["38", "39", "40", "43", "44", "45"] },
      { key: "Coloris", value: ["Blanc","Rouge"] },
    ],
  },
  {
    name: "KYRIE 7 TB 'BLACK WHITE'",
    description:
      "La KYRIE 7 TB 'Black White' est une chaussure de basketball de la collection Kyrie 7. Elle présente un design moderne et dynamique avec un coloris noir et blanc contrastant. Fabriquée avec des matériaux de qualité supérieure, cette chaussure offre un confort exceptionnel, une adhérence optimale et une réactivité accrue sur le terrain. Elle est dotée de la technologie de pointe pour soutenir les mouvements rapides et les changements de direction brusques. La KYRIE 7 TB 'Black White' est un choix idéal pour les joueurs de basketball à la recherche d'une chaussure performante et stylée pour exprimer leur jeu explosif et leur créativité sur le terrain.",
    count: 20,
    price: 40000,
    category: "Chaussures de basketball",
    images: [
      { path: "/images/basketShoes/bw.jpg" },
      { path: "/images/basketShoes/bw2.jpg" },
      { path: "/images/basketShoes/bw3.jpg" },
      { path: "/images/basketShoes/bw4.jpg" },
    ],
    rating: 4,
    reviewsNumber: 8,
    reviews: [],
    attrs: [
      { key: "Taille", value: ["38", "39", "40", "43", "44", "45"] },
      { key: "Coloris", value: ["Blanc","Noir"] },
    ],
  },
  {
    name: "KYRIE 8 'CIRCLE OF LIFE'",
    description:
      "La KYRIE 8 'Circle of Life' est une chaussure de basketball de la collection Kyrie 8. Elle présente un design unique et vibrant, inspiré du concept du 'Cercle de la vie'. Avec son coloris captivant, cette chaussure se démarque sur le terrain. Fabriquée avec des matériaux de haute qualité, elle offre un confort exceptionnel et une durabilité supérieure. La KYRIE 8 'Circle of Life' est dotée de technologies avancées pour une performance optimale, offrant une adhérence améliorée, un amorti réactif et un maintien optimal. Elle est idéale pour les joueurs de basketball à la recherche d'une chaussure à la fois performante et esthétiquement impressionnante pour exprimer leur style unique sur le terrain.",
    count: 20,
    price: 45000,
    category: "Chaussures de basketball",
    images: [{ path: "/images/basketShoes/cl.jpg" }],
    rating: 4,
    reviewsNumber: 8,
    reviews: [],
    attrs: [
      { key: "Taille", value: ["38", "39", "40", "43", "44", "45"] },
      { key: "Coloris", value: ["Blanc","Vert"] },
    ],
  },
  {
    name: "KYRIE 8 'WHITE UNIVERSITY RED'",
    description:
      "La KYRIE 8 'White University Red' est une chaussure de basketball de la collection Kyrie 8. Elle présente un design moderne et audacieux avec une combinaison de couleurs 'White University Red' (blanc et rouge universitaire). Fabriquée avec des matériaux de haute qualité, cette chaussure offre un confort exceptionnel et une durabilité optimale. Elle est dotée de technologies avancées qui offrent un amorti réactif, une adhérence améliorée et un maintien optimal. La KYRIE 8 'White University Red' est idéale pour les joueurs de basketball à la recherche d'une chaussure performante et stylée pour dominer le terrain avec style et confiance.",
    count: 20,
    price: 45000,
    category: "Chaussures de basketball",
    images: [{ path: "/images/basketShoes/ur.jpg" }],
    rating: 4,
    reviewsNumber: 8,
    reviews: [],
    attrs: [
      { key: "Taille", value: ["38", "39", "40", "43", "44", "45"] },
      { key: "Coloris", value: ["Blanc","Rouge"] },
    ],
  },
  {
    name: "KYRIE 8 'CHINESE NEW YEAR'",
    description:
      "La KYRIE 8 'Chinese New Year' est une chaussure de basketball spéciale de la collection Kyrie 8, créée pour célébrer le Nouvel An chinois. Elle présente un design inspiré de cette fête traditionnelle, avec des motifs et des détails symboliques. Fabriquée avec des matériaux de haute qualité, cette chaussure offre un confort exceptionnel et une durabilité optimale. Elle est dotée des dernières technologies pour une performance supérieure sur le terrain, offrant une adhérence optimale, un amorti réactif et un soutien accru. La KYRIE 8 'Chinese New Year' est le choix idéal pour les joueurs de basketball souhaitant marquer cette célébration spéciale avec style et performance.",
    count: 20,
    price: 45000,
    category: "Chaussures de basketball",
    images: [{ path: "/images/basketShoes/ny.jpg" }],
    rating: 4,
    reviewsNumber: 8,
    reviews: [],
    attrs: [
      { key: "Taille", value: ["38", "39", "40", "43", "44", "45"] },
      { key: "Coloris", value: ["Blanc","Vert"] },
    ],
  },
  {
    name: "LEBRON 19 'FAST FOOD - DUTCH BLUE'",
    description:
      "La LEBRON 19 'Fast Food - Dutch Blue' est une chaussure de basketball de la collection LeBron 19. Elle présente un design original et audacieux, avec un coloris 'Fast Food - Dutch Blue' (bleu néerlandais) inspiré par la culture de la restauration rapide. Fabriquée avec des matériaux de haute qualité, cette chaussure offre un confort optimal et une durabilité exceptionnelle. Elle est dotée de technologies avancées pour une performance supérieure sur le terrain, offrant un amorti réactif, une adhérence optimale et un soutien accru. La LEBRON 19 'Fast Food - Dutch Blue' est parfaite pour les joueurs de basketball qui veulent faire une déclaration audacieuse tout en bénéficiant d'une performance de haut niveau.",
    count: 20,
    price: 50000,
    category: "Chaussures de basketball",
    images: [
      { path: "/images/basketShoes/db.jpg" },
      { path: "/images/basketShoes/db2.jpg" },
      { path: "/images/basketShoes/db3.jpg" },
      { path: "/images/basketShoes/db4.jpg" },
    ],
    rating: 4,
    reviewsNumber: 8,
    reviews: [],
    attrs: [
      { key: "Taille", value: ["38", "39", "40", "43", "44", "45"] },
      { key: "Coloris", value: ["Bleue"] },
    ],
  },

  {
    name: "LEBRON 19 'MINNEAPOLIS LAKERS'",
    description:
      "La LEBRON 19 'Minneapolis Lakers' est une chaussure de basketball de la collection LeBron 19, rendant hommage à l'histoire et à l'héritage des Minneapolis Lakers. Elle présente un design emblématique avec des détails inspirés de l'équipe légendaire. Fabriquée avec des matériaux de haute qualité, cette chaussure offre un confort exceptionnel et une durabilité optimale. Elle est équipée de technologies avancées pour une performance de haut niveau, offrant un amorti réactif, une adhérence supérieure et un soutien optimal. La LEBRON 19 'Minneapolis Lakers' est un choix idéal pour les fans de LeBron James et les passionnés de basketball qui souhaitent rendre hommage à l'héritage de l'équipe des Minneapolis Lakers tout en bénéficiant d'une performance de premier ordre sur le terrain.",
    count: 20,
    price: 55000,
    category: "Chaussures de basketball",
    images: [
      { path: "/images/basketShoes/ml.jpg" },
      { path: "/images/basketShoes/ml2.jpg" },
      { path: "/images/basketShoes/ml3.jpg" },
      { path: "/images/basketShoes/ml4.jpg" },
    ],
    rating: 4,
    reviewsNumber: 8,
    reviews: [],
    attrs: [
      { key: "Taille", value: ["38", "39", "40", "43", "44", "45"] },
      { key: "Coloris", value: ["Rose"] },
    ],
  },

  {
    name: "PG 6 'BLACK METALLIC GOLD'",
    description:
      "La PG 6 'Black Metallic Gold' est une chaussure de basketball de la collection PG 6. Elle présente un design élégant avec une combinaison de couleurs 'Black Metallic Gold' (noir et or métallique). Fabriquée avec des matériaux de haute qualité, cette chaussure offre confort et durabilité lors des mouvements sur le terrain. Elle est dotée de technologies avancées qui offrent un amorti réactif, une adhérence améliorée et un soutien optimal. La PG 6 'Black Metallic Gold' est idéale pour les joueurs de basketball à la recherche d'une chaussure à la fois performante et stylée pour se démarquer lors des compétitions et des entraînements.",
    count: 20,
    price: 35000,
    category: "Chaussures de basketball",
    images: [
      { path: "/images/basketShoes/pg.jpg" },
      { path: "/images/basketShoes/pg2.jpg" },
      { path: "/images/basketShoes/pg3.jpg" },
      { path: "/images/basketShoes/pg4.jpg" },
    ],
    rating: 4,
    reviewsNumber: 8,
    reviews: [],
    attrs: [
      { key: "Taille", value: ["38", "39", "40", "43", "44", "45"] },
      { key: "Coloris", value: ["Noir"] },
    ],
  },
  {
    name: "PG 6 'BLACK MINT GREEN'",
    description:
      "La PG 6 'Black Mint Green' est une chaussure de basketball de la collection PG 6. Elle présente un design moderne avec une combinaison de couleurs 'Black Mint Green' (noir et vert menthe). Fabriquée avec des matériaux de haute qualité, cette chaussure offre confort et durabilité lors des mouvements sur le terrain. Elle est dotée de technologies avancées qui offrent un amorti réactif, une adhérence améliorée et un soutien optimal. La PG 6 'Black Mint Green' est idéale pour les joueurs de basketball à la recherche d'une chaussure à la fois performante et stylée pour se démarquer lors des compétitions et des entraînements. Elle ajoute une touche de fraîcheur et de dynamisme à votre jeu sur le terrain.",
    count: 25,
    price: 35500,
    category: "Chaussures de basketball",
    images: [
      { path: "/images/basketShoes/mg.jpg" },
      { path: "/images/basketShoes/mg2.jpg" },
      { path: "/images/basketShoes/mg3.jpg" },
      { path: "/images/basketShoes/mg4.jpg" },
    ],
    rating: 3,
    reviewsNumber: 2,
    reviews: [],
    attrs: [
      { key: "Taille", value: ["38", "39", "40", "43", "44", "45"] },
      { key: "Coloris", value: ["Noir","Vert"] },
    ],
  },
  {
    name: "YEEZY BOOST 350 V2 'CARBON BELUGA'",
    description:
      "La Yeezy Boost 350 V2 'Carbon Beluga' combine des teintes audacieuses avec un motif saisissant. La tige gris foncé en Primeknit, avec des vagues noires et des mouchetures orange, est sécurisée par des lacets en corde. Le côté latéral présente une bande orange vif avec la marque « SPLY-350 ». La sneaker offre une expérience confortable avec sa semelle intercalaire Boost pleine longueur et une cage en TPU de soutien. Le design est fini avec une semelle extérieure en caoutchouc robuste.",
    count: 25,
    price: 25000,
    category: "Yeezy/Boost 350",
    images: [{ path: "/images/yeezy/beluga.jpg" }],
    rating: 3,
    reviewsNumber: 4,
    reviews: [],
    attrs: [
      { key: "Taille", value: ["38", "39", "40", "43", "44", "45"] },
      { key: "Coloris", value: ["Noir","Orange"] },
    ],
  },
  {
    name: "YEEZY BOOST 350 V2 'CINDER NON-REFLECTIVE'",
    description:
      "La Yeezy Boost 350 V2 'Cinder' présente un look neutre sur sa construction signature. Construite avec Primeknit, la tige Cinder comprend une bande monofilament ton sur ton sur le côté latéral. Une boucle de traction au talon facilite l'enfilage et le retrait, tandis qu'une finition similaire marque la cage autour de la semelle intermédiaire Boost. Une semelle extérieure en caoutchouc gomme offre une traction.",
    count: 25,
    price: 25000,
    category: "Yeezy/Boost 350",
    images: [{ path: "/images/yeezy/cinder.jpg" }], 
    rating: 3,
    reviewsNumber: 3,
    reviews: [],
    attrs: [
      { key: "Taille", value: ["38", "39", "40", "43", "44", "45"] },
      { key: "Coloris", value: ["Noir"] },
    ],
    
  },
  {
    name: "YEEZY BOOST 380 'CALCITE GLOW'",
    description:
      "La Yeezy Boost 380 'Calcite Glow' présente un look neutre avec un accent inattendu. Construit avec Primeknit, le dessus apparaît en blanc et gris, mis en valeur par un détail de camouflage phosphorescent partout. Une fenêtre monofilament traverse la paroi latérale, tandis qu'un col en forme de chaussette soutient l'ajustement. Sous le pied, le Boost dans la semelle intermédiaire offre un amorti, avec une construction surélevée au talon.",
    count: 25,
    price: 2500,
    category: "Yeezy/Boost 380",
    images: [
      { path: "/images/yeezy/glow.jpg" },
      { path: "/images/yeezy/glow2.jpg" },
      { path: "/images/yeezy/glow3.jpg" },
      { path: "/images/yeezy/glow4.jpg" },
    ],
    rating: 3,
    reviewsNumber: 2,
    reviews: [],
    attrs: [
      { key: "Taille", value: ["38", "39", "40", "43", "44", "45"] },
      { key: "Coloris", value: ["Blanc"] },
    ],
  },
  {
    name: "YEEZY BOOST 380 'ALIEN BLUE'",
    description:
      "La Yeezy Boost 380 'Alien Blue' présente un coloris discret sur sa construction lifestyle. Construit avec Primeknit, le dessus de la chaussure apparaît en gris et blanc, mis en valeur par des détails réfléchissants partout. La fenêtre monofilament sur la paroi latérale ajoute de la couleur verte, tandis que sous le pied, une cage en caoutchouc bleu semi-translucide recouvre la semelle intercalaire Boost pleine longueur, qui offre un amorti. La semelle extérieure intègre un motif à chevrons pour la traction.",
    count: 25,
    price: 27000,
    category: "Yeezy/Boost 380",
    images: [{ path: "/images/yeezy/alien.jpg" }],
    rating: 3,
    reviewsNumber: 4,
    reviews: [],
    attrs: [
      { key: "Taille", value: ["38", "39", "40", "43", "44", "45"] },
      { key: "Coloris", value: ["Blanc","Bleue"] },
    ],
  },
  {
    name: "YEEZY BOOST 380 'COVELLITE'",
    description:
      "La Yeezy Boost 380 'Covellite' présente une série de tons discrets tout au long de sa construction signature. Construite avec Primeknit repensé, la tige de la chaussure apparaît en bleu marine, indigo et gris, créant un motif de style camouflage coupé en deux par une fenêtre monofilament ton sur ton. Les perforations assurent la respirabilité, tandis que sous le pied, une cage en caoutchouc recouvre la semelle intercalaire Boost, qui offre un amorti. Une semelle extérieure en caoutchouc à chevrons offre une traction.",
    count: 25,
    price: 2500,
    category: "Yeezy/Boost 380",
    images: [
      { path: "/images/yeezy/covel.jpg" },
      { path: "/images/yeezy/covel2.jpg" },
      { path: "/images/yeezy/covel3.jpg" },
      { path: "/images/yeezy/covel4.jpg" },
    ],
    rating: 3,
    reviewsNumber: 2,
    reviews: [],
    attrs: [
      { key: "Taille", value: ["38", "39", "40", "43", "44", "45"] },
      { key: "Coloris", value: ["Noir","Marron"] },
    ],
  },
  {
    name: "YEEZY BOOST 350 V2 'MONO MIST'",
    description:
      "Faisant partie du Mono Pack à quatre chaussures, la Yeezy Boost 350 V2 'Mono Mist' apporte une construction mise à jour à la silhouette signature de Yeezy. Plutôt que Primeknit, la tige de la chaussure est construite avec un maillage monofilament, avec une finition neutre complétée par une bande latérale discrète à travers la paroi latérale. Une cage interne visible soutient l'ajustement, tandis qu'une boucle de talon en sangle est incluse pour un enfilage et un retrait faciles. Sous le pied, une cage en caoutchouc translucide recouvre la semelle intercalaire Boost pleine longueur, qui offre un amorti. La sortie de la chaussure était exclusive à l'Europe, l'Afrique, l'Inde, le Moyen-Orient, la Russie, l'Ukraine et la Chine.",
    count: 25,
    price: 28000,
    category: "Yeezy/Boost 350",
    images: [
      { path: "/images/yeezy/mono.jpg" },
      { path: "/images/yeezy/mono2.jpg" },
      { path: "/images/yeezy/mono3.jpg" },
      { path: "/images/yeezy/mono4.jpg" },
    ],
    rating: 3,
    reviewsNumber: 2,
    reviews: [],
    attrs: [
      { key: "Taille", value: ["38", "39", "40", "43", "44", "45"] },
      { key: "Coloris", value: ["marron"] },
    ],
  },
  {
    name: "YEEZY BOOST 350 V2 'MX OAT'",
    description:
      "La Yeezy Boost 350 V2 'MX Oat' est dotée d'une tige Primeknit d'une seule pièce exécutée dans un motif tourbillonnant d'orange, de bleu et de jaune. Une bande translucide apparaît sur le côté latéral avec une tirette ton sur ton sur le talon. Sous le pied, la cage en caoutchouc translucide abrite une unité Boost pleine longueur, tandis qu'une semelle extérieure en caoutchouc avec des découpes offre une traction.",
    count: 25,
    price: 29000,
    category: "Yeezy/Boost 350",
    images: [
      { path: "/images/yeezy/oat.jpg" },
      { path: "/images/yeezy/oat2.jpg" },
      { path: "/images/yeezy/oat3.jpg" },
      { path: "/images/yeezy/oat4.jpg" },
    ],
    rating: 3,
    reviewsNumber: 3,
    reviews: [],
    attrs: [
      { key: "Taille", value: ["38", "39", "40", "43", "44", "45"] },
      { key: "Coloris", value: ["Blanc","Bleue","Orange"] },
    ],
  },
  {
    name: "YEEZY BOOST 350 V2 'CARBONE'",
    description:
      "La Yeezy Boost 350 V2 'Carbon' apporte un look neutre à sa construction classique. La tige de la chaussure est construite avec Primeknit, fini dans un mélange de noir et de gris tissé dans le design. Une bande de monofilament post-teint coupe à travers la paroi latérale, tandis que les lacets élastiques sans nœud soutiennent l'ajustement. Sous le pied, une cage en caoutchouc recouvre la semelle intercalaire Boost pleine longueur, qui offre un amorti.",
    count: 25,
    price: 28000,
    category: "Yeezy/Boost 350",
    images: [
      { path: "/images/yeezy/crbn.jpg" },
      { path: "/images/yeezy/crbn2.jpg" },
      { path: "/images/yeezy/crbn3.jpg" },
      { path: "/images/yeezy/crbn4.jpg" },
    ],
    rating: 3,
    reviewsNumber: 4,
    reviews: [],
    attrs: [
      { key: "Taille", value: ["38", "39", "40", "43", "44", "45"] },
      { key: "Coloris", value: ["Noir","Blanc"] },
    ],
  },
  {
    name: "YEEZY BOOST 350 V2 'HYPERSPACE'",
    description:
      "Faisant partie de la première version 350 en 2019, le Yeezy Boost 350 V2 'Hyperspace' présente un coloris neutre. L'empeigne Primeknit flexible de la chaussure apparaît dans Hyperspace, avec un évent en microfilament traversant la conception. Une boucle de talon et des lacets en corde soutiennent l'ajustement, tandis que sous le pied, la semelle intercalaire translucide révèle une semelle intercalaire Boost pleine longueur. La chaussure est sortie exclusivement dans certaines villes d'Afrique, du Moyen-Orient, d'Inde et d'Asie-Pacifique.",
    count: 25,
    price: 26000,
    category: "Yeezy/Boost 350",
    images: [{ path: "/images/yeezy/hyper.jpg" }],
    rating: 3,
    reviewsNumber: 4,
    reviews: [],
    attrs: [
      { key: "Taille", value: ["38", "39", "40", "43", "44", "45"] },
      { key: "Coloris", value: ["Blanc"] },
    ],
  },
  {
    name: "YEEZY BOOST 350 V2 'LIGHT'",
    description:
      "Le Yeezy Boost 350 V2 'Light' présente un coloris épuré avec des détails uniques. Alors que la tige de la chaussure, construite avec Primeknit, apparaît en blanc, mais lorsqu'elle est exposée au soleil, la construction en tricot apparaît en rose. La bande monofilament change également de couleur, virant à l'ambre, tandis que sous le pied, l'outillage habituel offre un amorti, composé d'une semelle intercalaire Boost pleine longueur enveloppée dans une cage en caoutchouc.",
    count: 25,
    price: 30000,
    category: "Yeezy/Boost 350",
    images: [
      { path: "/images/yeezy/light.jpg" },
      { path: "/images/yeezy/light2.jpg" },
      { path: "/images/yeezy/light3.jpg" },
      { path: "/images/yeezy/light4.jpg" },
      { path: "/images/yeezy/light5.jpg" },
    ],
    rating: 3,
    reviewsNumber: 3,
    reviews: [],
    attrs: [
      { key: "Taille", value: ["38", "39", "40", "43", "44", "45"] },
      { key: "Coloris", value: ["Blanc","Orange"] },
    ],
  },
];

module.exports = products;
