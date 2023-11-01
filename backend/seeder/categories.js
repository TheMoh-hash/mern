const categories = [
  {
    name: "Nike",
    description:
      "Nike est l'une des marques les plus emblématiques et populaires dans l'industrie de la chaussure et du vêtement de sport. Fondée en 1964, Nike est reconnue pour ses innovations technologiques, son design de pointe et son association avec de nombreux athlètes renommés. Les chaussures Nike offrent un mélange parfait de style et de performance, ce qui en fait un choix privilégié des sportifs et des amateurs de mode. Que vous soyez à la recherche de chaussures de course, de baskets décontractées ou de chaussures de basketball, Nike propose une large gamme de modèles pour répondre à tous les besoins.",
    image: "/images/nike.png",
    attrs: [
      {
        key: "Taille",
        value: ["38", "39", "40", "41", "42", "43", "44", "45"],
      },
      {
        key: "Coloris",
        value: ["Blanc", "Noir", "Bleue", "Rouge", "Vert", "Jaune", "Orange","Marron"],
      },
    ],
  },
 
  {
    name: "Nike/Jordan 1",
    description:
      "NikeJordan1 - Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus, magnam qui. Accusamus similique placeat at nisi autem eaque molestiae velit.",
    image: "/images/nike.png",
    attrs: [
      {
        key: "Taille",
        value: ["38", "39", "40", "41", "42", "43", "44", "45"],
      },
      {
        key: "Coloris",
        value: ["Blanc", "Noir", "Bleue", "Rouge","Marron"],
      },
    ],
  },
  {
    name: "Nike/Jordan 4",
    description:
      "NikeJordan4 - Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus, magnam qui. Accusamus similique placeat at nisi autem eaque molestiae velit.",
    image: "/images/nike.png",
    attrs: [
      {
        key: "Taille",
        value: ["38", "39", "40", "41", "42", "43", "44", "45"],
      },
      {
        key: "Coloris",
        value: ["Blanc", "Noir", "Rouge", "Vert", "Jaune"],
      },
    ],
  },
  {
    name: "Nike/Jordan 11",
    description:
      "NikeJordan4 - Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus, magnam qui. Accusamus similique placeat at nisi autem eaque molestiae velit.",
    image: "/images/nike.png",
    attrs: [
      {
        key: "Taille",
        value: ["38", "39", "40", "41", "42", "43", "44", "45"],
      },
      {
        key: "Coloris",
        value: ["Blanc", "Noir","Rouge", "Gris",],
      },
    ],
  },
  {
    name: "Nike/AirForce 1",
    description:
      "Nike/AirForce1 - Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus, magnam qui. Accusamus similique placeat at nisi autem eaque molestiae velit.",
    image: "/images/nike.png",
    attrs: [
      { key: "Taille", value: ["38"] },
      { key: "Coloris", value: ["blanc", "Noir", "Bleue"] },
    ],
  },
  {
    name: "Nike/DUNK",
    description:
      "Nike/SB - Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus, magnam qui. Accusamus similique placeat at nisi autem eaque molestiae velit.",
    image: "/images/nike.png",
    attrs: [
      {
        key: "Taille",
        value: ["38", "39", "40", "41", "42", "43", "44", "45"],
      },
      {
        key: "Coloris",
        value: ["Blanc", "Noir", "Bleue","Orange"],
      },
    ],
  },
  {
    name: "Adidas",
    description:
      "Adidas est une  marque de renommée mondiale dans l'industrie des vêtements et des chaussures de sport. Fondée en 1949, Adidas est réputée pour son esthétique moderne, son engagement envers l'innovation et sa collaboration avec des designers et des célébrités influentes. Les chaussures Adidas sont appréciées pour leur confort, leur durabilité et leur performance exceptionnelle. Que vous pratiquiez un sport ou que vous recherchiez simplement des chaussures tendance pour votre tenue quotidienne, Adidas propose une large sélection de modèles adaptés à tous les goûts et à toutes les activités.",
    image: "/images/adidas.png",
    attrs: [
      {
        key: "Taille",
        value: ["38", "39", "40", "41", "42", "43", "44", "45"],
      },
      {
        key: "Coloris",
        value: ["Noir","Blanc","Gris","Orange","Beige","Vert","Bleue","Rouge" ],
      }, 
     
    ],
  },
  {
    name: "Yeezy",
    description:
      "Yeezy est une marque de chaussures créée en collaboration entre le rappeur Kanye West et Adidas. Les chaussures Yeezy sont célèbres pour leur esthétique unique et avant-gardiste, associant des matériaux haut de gamme et des silhouettes distinctives. La marque est devenue un symbole de la culture streetwear et a attiré l'attention des amateurs de mode du monde entier. Les chaussures Yeezy sont souvent produites en édition limitée, ce qui les rend très recherchées et convoitées par les collectionneurs.",
    image: "/images/yeezy.png",
    attrs: [
      {
        key: "Taille",
        value: ["39", "40", "41", "42", "43", "44"],
      },
      { key: "Coloris", value: ["Noir","Blanc","Bleue","Gris","Orange","Marron"] },
    ],
  },
  {
    name: "Yeezy/Boost 350",
    description:
      "Yeezy/v2 - Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus, magnam qui. Accusamus similique placeat at nisi autem eaque molestiae velit.",
    image: "/images/yeezy.png",
    attrs: [
      {
        key: "Taille",
        value: ["38", "39", "41", "42", "43", "44", "45"],
      },
      { key: "Coloris", value: ["Blanc","Bleue","Noir","Orange","Marron"] },
    ],
  },
  {
    name: "Yeezy/Boost 380",
    description:
      "Yeezy/v2 - Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus, magnam qui. Accusamus similique placeat at nisi autem eaque molestiae velit.",
    image: "/images/yeezy.png",
    attrs: [
      {
        key: "Taille",
        value: ["38", "39", "41", "42", "43", "44", "45"],
      },
      { key: "Coloris", value: ["Blanc", "Bleue","Noir","Marron"] },
    ],
  },
  {
    name: "Yeezy/Boost 500",
    description:
      "Yeezy/v2 - Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus, magnam qui. Accusamus similique placeat at nisi autem eaque molestiae velit.",
    image: "/images/yeezy.png",
    attrs: [
      {
        key: "Taille",
        value: ["38", "39", "41", "42", "43", "44", "45"],
      },
      { key: "Coloris", value: ["Blanc","Gris","Noir","Orange"] },
    ],
  },
  {
    name: "Yeezy/Boost 700",
    description:
      "Yeezy/v2 - Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus, magnam qui. Accusamus similique placeat at nisi autem eaque molestiae velit.",
    image: "/images/yeezy.png",
    attrs: [
      {
        key: "Taille",
        value: ["38", "39", "41", "42", "43", "44", "45"],
      },
      { key: "Coloris", value: ["Blanc", "Gris", "Noir"] },
    ],
  },
  {
    name: "New Balance",
    description:
      "New Balance est une marque américaine de chaussures de sport qui se démarque par son engagement envers la qualité et le confort. Fondée en 1906, New Balance est réputée pour son savoir-faire artisanal et son attention aux détails. La marque est connue pour ses chaussures de course hautement performantes, offrant un excellent amorti et un soutien optimal. En plus de leurs caractéristiques techniques, les chaussures New Balance arborent également un style classique et intemporel, les rendant idéales pour les amateurs de sport et les amateurs de mode.",
    image: "/images/NewBalance.png",
    attrs: [
      {
        key: "Taille",
        value: ["39", "40", "41", "42", "43", "44", "45"],
      },
      { key: "Coloris", value: ["Blanc", "Bleue", "Rouge", "Vert", "Noir","Gris"] },
    ],
  },
  {
    name: "Puma",
    description:
      "Puma est une marque allemande de sport et de lifestyle qui propose une large gamme de chaussures pour différentes activités. Fondée en 1948, Puma est réputée pour son style audacieux, son design innovant et sa performance fiable. Les chaussures Puma sont conçues pour offrir confort, durabilité et flexibilité, tout en conservant une esthétique moderne et tendance. Que vous pratiquiez un sport spécifique ou que vous cherchiez des chaussures décontractées pour votre quotidien, Puma propose un choix varié de modèles adaptés à tous les besoins.",
    image: "/images/puma.png",
    attrs: [
      {
        key: "Taille",
        value: ["38", "39", "40", "41", "42", "43", "44", "45"],
      },
      {
        key: "Coloris",
        value: ["Blanc", "Noir", "Bleue", "Rouge","Orange","Marron"],
      },
    ],
  },
  
  {
    name: "Chaussures de basketball",
    description:
      "Les chaussures de basketball sont spécialement conçues pour répondre aux exigences du jeu de basketball. Elles offrent un soutien et une protection accrus pour les pieds, ainsi qu'une excellente adhérence sur le terrain. Les chaussures de basketball sont dotées d'une semelle intermédiaire amortissante pour absorber les chocs et favoriser les mouvements rapides et explosifs. Elles sont souvent fabriquées avec des matériaux durables et respirants pour garantir le confort et la durabilité nécessaires lors des matchs et des entraînements. Que vous soyez un joueur professionnel ou un passionné de basketball, une paire de chaussures de basketball de qualité est essentielle pour optimiser vos performances sur le terrain.",
    image: "/images/basket-shoes.png",
    attrs: [
      {
        key: "Taille",
        value: ["38", "39", "41", "42", "43", "44", "45"],
      },
      { key: "Coloris", value: ["Blanc", "Bleue", "Rouge", "Vert", "Noir","Rose"] },
    ],
  },
 
];

module.exports = categories;
