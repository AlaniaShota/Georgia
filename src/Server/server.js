import { createServer, Model } from "miragejs";

createServer({
  models: {
    foods: Model,
    restaurants: Model,
    guides: Model,
    maps: Model,
    locations: Model,
    seasons: Model,
  },

  seeds(server) {
    server.create("food", {
      id: "el1",
      img: "/assets/georgian-traditional-food/Khachapuri.jpg",
      type: "SAVORY PIE",
      name: "Khachapuri",
      isLarge: true,
      location: "Most iconic: Sakhachapure №1",
      cuisine: "Ajara",
      about:
        "This simple cheese bread known as khachapuri is the most famous dish in Georgia. It is traditionally topped with melted cheese, eggs and butter. There are different types of khachapuri, and even though some new cheese varieties such as mozzarella and feta have been incorporated in the dish, the most common additions still include traditional Georgian Sulguni or Imeretian cheese. It is shaped into different forms, and depending on the baking procedure and its form, it can be consumed individually or shared. Two of the most common varieties include the Imeretian khachapuri, shaped into a circular form, and Adjaran khachapuri, the open-faced version topped with butter and a raw egg on top. Although it is considered a snack, khachapuri can often be consumed as a full meal. It can also be bought at numerous kiosks located alongside Georgian roads. Khachapuri is also often prepared in Russia, in the whole area of the former Soviet Union, and throughout the world.",
      map: "/assets/georgian-traditional-food/traditional-food-map/Khachapuri.png",
    });
    server.create("food", {
      id: "el2",
      img: "/assets/georgian-traditional-food/Khinkali.jpg",
      type: "DUMPLINGS",
      name: "Khinkali",
      isLarge: false,
      location: "Most iconic: Maspindzelo",
      cuisine: "Mtskheta Mtianeti",
      about:
        "These delicious Georgian dumplings known as khinkali are considered to be one of the national dishes of the country. The dumplings are filled with meat and spices, then traditionally twisted into a knot at the top. Regional differences influence the fillings and every part of Georgia has their distinctive variety. For example, in the mountainous regions, the most traditional filling is lamb, however; the most frequent variety throughout entire Georgia is a mixture of pork and beef. The vegetarian versions made with traditional Imeretian cheese or mushrooms are also quite popular. The traditional recipe was developed over time, and now includes fresh herbs such as cilantro or parsley. The meat for khinkali is never precooked – therefore, all of the juices are tucked inside the dumplings. Eating khinkali is also a part of traditional Georgian folklore: the top, where the dough is twisted into a knot, should never be eaten because it serves as a handle to hold the dumpling, and it is usually left on the plate as an indication of how many dumplings have been eaten. These flavorful dumplings are served plain or paired with freshly ground black pepper.",
      map: "/assets/georgian-traditional-food/traditional-food-map/Khinkali.png",
    });
    server.create("food", {
      id: "el3",
      img: "/assets/georgian-traditional-food/Lobio.jpg",
      type: "STEW",
      name: "Lobio",
      isLarge: false,
      location: "Most iconic: Salobie Bia",
      cuisine: "Kvemo Kartli",
      about:
        "Lobio is a Georgian invention that refers to a wide group of dishes that employ beans as a key ingredient. Most commonly, those are red kidney beans, boiled with various spices to create a thick stew, commonly served with mchadi, a traditional Georgian cornbread. Among numerous other varieties, lobio nigozit, which incorporates mashed beans in a thick walnut sauce, is the most common version. The dish can also appear in a form of a salad, with whole or mashed beans, and it is typically served cold.",
      map: "/assets/georgian-traditional-food/traditional-food-map/Lobio.png",
    });
    server.create("food", {
      id: "el4",
      img: "/assets/georgian-traditional-food/Chicken-tabaka.jpg",
      type: "CHICKEN DISH",
      name: "Chicken tabaka",
      isLarge: false,
      location: "",
      about:
        "Chicken tabaka is a popular Georgian dish consisting of a chicken that is fried in a special way in a traditional pan called tapa. One should flatten the chicken on a pan by pressing it down with a weight. When it is properly prepared, the chicken should be crispy on the outside, while retaining its tenderness and moistness on the inside. The dish is often consumed with tkemali plum sauce on the side.",
      map: "/assets/georgian-traditional-food/traditional-food-map/Chicken-tabaka.png",
    });
    server.create("food", {
      id: "el5",
      img: "/assets/georgian-traditional-food/Ajika.jpg",
      type: "DIP",
      name: "Ajika",
      isLarge: false,
      location: "Most iconic: Kiziki",
      cuisine: "Samegrelo - Zemo Svaneti",
      about:
        "Ajika is a hot and spicy Georgian paste made with hot peppers, garlic, walnuts, and fresh herbs and spices such as coriander, basil, dill, and marigold petals. It is most commonly used as a flavoring for various meat and fish dishes, although it can also be used as a fiery hot dip. Ajika is usually red in color, but it can also be green if prepared with unripe peppers.",
      map: "/assets/georgian-traditional-food/traditional-food-map/Ajika.png",
    });
    server.create("food", {
      id: "el6",
      img: "/assets/georgian-traditional-food/Mtsvadi.jpg",
      type: "MEAT DISH",
      name: "Mtsvadi",
      isLarge: false,
      location: "Most iconic: Lali",
      cuisine: "Kakheti",
      about:
        "Mtsvadi is a traditional Georgian dish consisting of a skewered shish kebab. Ground pork, mutton, or veal is typically marinated in a mixture of lemon juice, pomegranate juice, tarragon, salt, pepper, and chopped onions, so that it remains tender and juicy when grilled. Mtsvadi is often prepared outdoors over an open fire. It is recommended to serve the dish with tkemali plum sauce, raw onion rings, sliced tomatoes, and pomegranate seeds.",
      map: "/assets/georgian-traditional-food/traditional-food-map/Mtsvadi.png",
    });
    server.create("food", {
      id: "el7",
      img: "/assets/georgian-traditional-food/Imeruli-khachapuri.jpg",
      type: "SAVORY PIE",
      name: "Imeruli khachapuri",
      isLarge: false,
      location: "Most iconic: Funicular Complex",
      cuisine: "Imereti",
      about:
        "Imeruli khachapuri is a traditional Georgian bread filled with melted cheese. Unlike traditional khachapuris, the imeruli variety is circular in shape. The dough consists of flour, salt, sugar, yeast, water, and sometimes yogurt, while the cheese filling is usually enriched with the addition of eggs. It is recommended to glaze imeruli khachapuri with butter as soon as it is out of the oven and serve it while it is still hot.",
      map: "/assets/georgian-traditional-food/traditional-food-map/Imeruli-khachapuri.png",
    });
    server.create("food", {
      id: "el8",
      img: "/assets/georgian-traditional-food/Kharcho.jpg",
      type: "MEAT SOUP",
      name: "Kharcho",
      isLarge: false,
      location: "Most iconic: Mapshalia",
      cuisine: "Samegrelo - Zemo Svaneti",
      about:
        "Kharcho is a hearty Georgian soup featuring beef or chicken, walnuts, and rice. It is traditionally seasoned with a Georgian spice blend called khmeli suneli (a combination of dried blue fenugreek, marigold petals, basil, parsley, fennel, coriander, bay leaves, and red pepper) and tkemali plum sauce. The soup is so popular that almost every family has their own variation and recipe. It is recommended to serve kharcho hot and garnish it with freshly chopped coriander.",
      map: "/assets/georgian-traditional-food/traditional-food-map/Kharcho.png",
    });
    server.create("food", {
      id: "el9",
      img: "/assets/georgian-traditional-food/Lobiani.jpg",
      type: "BREAD",
      name: "Lobiani",
      isLarge: false,
      location: "",
      cuisine: "Racha Lechkhumi",
      about:
        "Traditionally consumed at Barbaroba, the feast of St. Barbara, lobiani is a popular Georgian bread that is filled with mashed kidney beans and flavored with onions, parsley, coriander, and black pepper. The dough consists of flour, yeast, salt, and water. There is also a variety of the bread called rachuli lobiani, which is prepared with added bacon for extra flavor. The name lobiani is derived from the Georgian word for kidney beans, lobio. ",
      map: "/assets/georgian-traditional-food/traditional-food-map/Lobiani.png",
    });
    server.create("food", {
      id: "el10",
      img: "/assets/georgian-traditional-food/Adjarian-khachapuri.jpg",
      type: "SAVORY PIE",
      name: "Adjarian khachapuri",
      isLarge: false,
      location: "Most iconic: Porto Franco",
      cuisine: "Ajara",
      about:
        "One of the most popular khachapuri varieties, adjarian is an open-faced pie that is filled with a combination of cheese and eggs. The base is made from yeasted dough that is rolled into an oblong shape and traditionally comes filled with Sulguni or Imeretian cheese, or the combination of both. The dish is finished off with an egg that is placed on top, and the pie is then additionally baked until the egg is partially set. This boat-shaped pie hails from the coastal Adjaria region, and it is usually served with a slice of butter on top. ",
      map: "/assets/georgian-traditional-food/traditional-food-map/Adjarian-khachapuri.png",
    });
    server.create("food", {
      id: "el11",
      img: "/assets/georgian-traditional-food/Tolma.jpg",
      type: "GROUND MEAT DISH",
      name: "Tolma",
      isLarge: false,
      location: "",
      about:
        "Tolma is a Georgian dish consisting of stuffed vegetables such as tomatoes, peppers, zucchini, and eggplants, or stuffed vine and cabbage leaves. The filling usually consists of ground meat, rice, and various herbs and spices. It is recommended to serve the stuffed leaves or vegetables warm, and to pair the dish with a dollop of sour cream on the side.",
      map: "/assets/georgian-traditional-food/traditional-food-map/Tolma.png",
    });
    server.create("food", {
      id: "el12",
      img: "/assets/georgian-traditional-food/Churchkhela.jpg",
      type: "DESSERT",
      name: "Churchkhela",
      isLarge: true,
      location: "",
      about:
        "Churchkhela is a traditional Georgian candy that is shaped into a sausage. It originated from the Caucasus region. This candy is made by dipping a long string of nuts (usually walnut halves) in concentrated grape juice, then leaving the concoction to dry. It is so healthy and so nutritious that, in the past, it was even carried by Georgian warriors on their long journeys. Although walnuts are usually used in the preparation of churchkhela, they can be replaced by almonds, hazelnuts, or raisins.",
      map: "/assets/georgian-traditional-food/traditional-food-map/Churchkhela.png",
    });
    server.create("food", {
      id: "el13",
      img: "/assets/georgian-traditional-food/Kupati.jpg",
      type: "SAUSAGE",
      name: "Kupati",
      isLarge: false,
      location: "Most iconic: Restorani Chashnagiri Sanapiro",
      cuisine: "Samegrelo - Zemo Svaneti",
      about:
        "Kupati is a spicy Georgian sausage made with pork or beef, onions, and flavorings such as black pepper, cinnamon, garlic, salt, and coriander. It is especially popular in the Caucasus region. The sausage is most commonly grilled or fried before serving, when it is traditionally accompanied by sauerkraut or sliced onions, and garnished with freshly chopped coriander and pomegranate seeds.",
      map: "/assets/georgian-traditional-food/traditional-food-map/Kupati.png",
    });
    server.create("food", {
      id: "el14",
      img: "/assets/georgian-traditional-food/Badrijani.jpg",
      type: "APPETIZER",
      name: "Badrijani",
      isLarge: false,
      location: "Most iconic: Shavi Lomi",
      cuisine: "Shida Kartli",
      about:
        "Badrijani is a heavily spiced Georgian dish consisting of eggplant slices that are coated with walnut paste, then shaped into small rolls. The eggplant slices are fried before serving, while the spread is prepared by combining ground walnuts, garlic, and fresh coriander. When served, the assembled rolls are arranged on a plate and topped with pomegranate seeds.",
      map: "/assets/georgian-traditional-food/traditional-food-map/Badrijani.png",
    });
    server.create("food", {
      id: "el15",
      img: "/assets/georgian-traditional-food/Tkemali.jpg",
      type: "SAUCE",
      name: "Tkemali",
      isLarge: false,
      location: "",
      about:
        "Tkemali is a flavorful Georgian sauce made from wild sour plums, sugar, garlic, hot red or green peppers, and herbs such as coriander, parsley, basil, and dill. There are two main types of tkemali: green or red, depending on the type of hot pepper used in its preparation. This tasty sauce is often paired with a variety of grilled meat dishes or roasted potatoes.",
      map: "/assets/georgian-traditional-food/traditional-food-map/Tkemali.png",
    });
    server.create("food", {
      id: "el16",
      img: "/assets/georgian-traditional-food/Kubdari.jpg",
      type: "SAVORY PIE",
      name: "Kubdari",
      isLarge: true,
      location: "",
      cuisine: "Samegrelo - Zemo Svaneti",
      about:
        "Kubdari is a popular Georgian bread that is traditionally filled with beef, pork, or a combination of the two, along with spices such as cumin, dill, coriander, blue fenugreek, red pepper, onions, garlic, and salt. The dough consists of flour, water, yeast, sugar, salt, and eggs. Interestingly, the meat used in this savory pie should be cut, not minced, while the salt should be local and aromatized with special herbs. It is recommended to glaze kubdari with butter and serve it hot.",
      map: "/assets/georgian-traditional-food/traditional-food-map/Kubdari.png",
    });
    server.create("food", {
      id: "el17",
      img: "/assets/georgian-traditional-food/Pkhali.jpg",
      type: "SIDE DISH",
      name: "Pkhali",
      isLarge: false,
      location: "Most iconic: Zakhar Zakharich",
      cuisine: "Imereti",
      about:
        "Pkhali is a traditional Georgian dish made with a large number of different leaves such as spinach, beetroot, cabbage, or nettles, although it can also be prepared with nuts and vegetables. The leaves are chopped and minced, then combined with vinegar, garlic, onions, and fresh herbs. This unique mixture is traditionally hand-shaped into balls and garnished with pomegranate seeds. Pkhali is served on the side as a dip or a flavorful condiment.",
      map: "/assets/georgian-traditional-food/traditional-food-map/Pkhali.png",
    });
    server.create("food", {
      id: "el18",
      img: "/assets/georgian-traditional-food/Ghomi.jpg",
      type: "PORRIDGE",
      name: "Ghomi",
      isLarge: false,
      location: "",
      cuisine: "Samegrelo - Zemo Svaneti",
      about:
        "Ghomi is a traditional dish from Georgia consisting of coarse and fine cornflour combined with water. Pieces of cheese such as sulguni are typically placed in the hot porridge to melt before consumption. The dish is often served with different sauces on the side, such as tkemali or bazhe.",
      map: "/assets/georgian-traditional-food/traditional-food-map/Ghomi.png",
    });
    server.create("food", {
      id: "el19",
      img: "/assets/georgian-traditional-food/Chakhokhbili.jpg",
      type: "STEW",
      name: "Chakhokhbili",
      isLarge: false,
      location: "",
      cuisine: "Kvemo Kartli",
      about:
        "Chakhokhbili is a traditional Georgian stew made with a whole chicken that is cut into pieces and combined with onions, tomatoes, vinegar, garlic, and spices such as coriander, parsley, hot green peppers, and bay leaves. The stew has a thick consistency and is usually served hot, preferably garnished with freshly chopped coriander and accompanied by rice or bread on the side. The name chakhokhbili is derived from the Georgian word khokhobi, meaning pheasant, referring to the fact that it used to be prepared with pheasant instead of chicken in the past.",
      map: "/assets/georgian-traditional-food/traditional-food-map/Chakhokhbili.png",
    });
    server.create("food", {
      id: "el20",
      img: "/assets/georgian-traditional-food/Elarji.jpg",
      type: "PORRIDGE",
      name: "Elarji",
      isLarge: false,
      location: "Most iconic: Dadiani",
      cuisine: "Samegrelo - Zemo Svaneti",
      about:
        "Elarji is a specialty of the Georgian Samegrelo region, prepared as a thick porridge consisting of coarse cornmeal, cornflour, and sulguni or tchkhinti cheese, depending on what's available. The dish has an extremely thick texture, and it is very elastic. If properly made, one should be able to stretch it overhead. It is traditionally served hot and consumed with Georgian bazhe sauce, made with garlic, walnuts, and various spices.",
      map: "/assets/georgian-traditional-food/traditional-food-map/Elarji.png",
    });
    server.create("food", {
      id: "el21",
      img: "/assets/georgian-traditional-food/Skhmeruli.jpg",
      type: "CHICKEN DISH",
      name: "Skhmeruli",
      isLarge: false,
      location: "Most iconic: Sofia Melnikova's Fantastic Douqan",
      cuisine: "Samtskhe-Javakheti",
      about:
        "Shkmeruli or chkmeruli is a traditional chicken dish originating from Georgia. A whole chicken is typically butterflied, browned on both sides, and roasted for about half an hour until fully cooked. The garlic is minced, mixed with butter, milk, and pan drippings in order to create the sauce. The chicken and the sauce are combined, traditionally in a clay dish called ketsi, and the dish is then baked for a short while before it's served. It's recommended to serve skhmeruli with cheesy mashed potatoes or crusty bread on the side.",
      map: "/assets/georgian-traditional-food/traditional-food-map/Skhmeruli.png",
    });
    server.create("food", {
      id: "el22",
      img: "/assets/georgian-traditional-food/Chikhirtma.jpg",
      type: "CHICKEN SOUP",
      name: "Chikhirtma",
      isLarge: false,
      location: "Most iconic: Khinklis Gemo +",
      cuisine: "Samtskhe-Javakheti",
      about:
        "Chikhirtma is a flavorful and hearty Georgian soup that is believed to be a great hangover cure. It consists of chicken pieces, onions, eggs, flour, vinegar, water, and seasonings such as salt, bay leaves, and coriander. It has a slightly sour flavor and a thick, creamy consistency. The soup is usually served hot, and it is recommended to garnish it with freshly chopped coriander.",
      map: "/assets/georgian-traditional-food/traditional-food-map/Chikhirtma.png",
    });
    server.create("food", {
      id: "el23",
      img: "/assets/georgian-traditional-food/Mingrelian-khachapuri.jpg",
      type: "SAVORY PIE",
      name: "Mingrelian khachapuri",
      isLarge: false,
      location: "",
      cuisine: "Samegrelo - Zemo Svaneti",
      about:
        "Mingrelian khachapuri is a Georgian khachapuri variety originating from Samegrelo. Although it's quite similar to its Imeretian cousin, this khachapuri is round and it's topped with even more cheese (usually chkinti-kveli Imeretian cheese). The dough is prepared with flour, water, yeast, sugar, and salt. Once it has risen, the dough is topped with a combination of eggs and cheese, then baked until the cheese becomes bubbly and golden brown. Before serving, this khachapuri variety can be rubbed with butter, if desired.",
      map: "/assets/georgian-traditional-food/traditional-food-map/Mingrelian-khachapuri.png",
    });
    server.create("food", {
      id: "el24",
      img: "/assets/georgian-traditional-food/Gozinaki.jpg",
      type: "DESSERT",
      name: "Gozinaki",
      isLarge: false,
      location: "",
      cuisine: "Tbilisi",
      about:
        "Gozinaki is a traditional Georgian dessert with a crunchy texture, made with honey-fried, caramelized nuts such as walnuts, almonds, and hazelnuts. This sweet treat is often cut into diamond shapes, and it is traditionally consumed on Christmas and New Year.",
      map: "/assets/georgian-traditional-food/traditional-food-map/Gozinaki.png",
    });
    server.create("food", {
      id: "el25",
      img: "/assets/georgian-traditional-food/Ajapsandali.jpg",
      type: "STEW",
      name: "Ajapsandali",
      isLarge: false,
      location: "",
      cuisine: "Tbilisi",
      about:
        "Ajapsandali is a popular Georgian stew consisting of eggplants, potatoes, tomatoes, onions, bell peppers, and seasonings such as bay leaves, garlic, coriander, black pepper, and salt. The vegetables are stewed in oil, but only for a short time so that they don't lose their color and vitamins. The dish is often consumed as a family meal in Georgia, and it is especially popular during summer. For an interesting twist, try serving it cold with crumbled feta and chunks of bread.",
      map: "/assets/georgian-traditional-food/traditional-food-map/Ajapsandali.png",
    });
    server.create("food", {
      id: "el26",
      img: "/assets/georgian-traditional-food/Chashushuli.jpg",
      type: "STEW",
      name: "Chashushuli",
      cuisine: "Samtskhe-Javakheti",
      isLarge: false,
      location: "",
      about:
        "Similar to a goulash, chashushuli is a hearty beef and tomato stew hailing from Georgia. The stew is typically made with a combination of beef (sometimes veal or pork), tomatoes, onions, water or meat broth, mushrooms, garlic, and a generous amount of spices and herbs such as basil, chili pepper, parsley, fenugreek, summer savory, and bay leaves, yielding a highly aromatic and flavor-packed dish. Chashushuli is considered a version of another traditional Georgian beef stew called ostri, which uses almost all of the same ingredients as chashushuli, but it also contains coriander seeds and involves a different method of preparation. When preparing chashushuli, the meat needs to be fried before it is mixed with the rest of the ingredients and stewed, whereas the preparation of ostri requires no pre-cooking of the meat and everything is cooked in one pot from the beginning. Spicy and filling, the stew is typically served hot with Georgian bread such as shoti and a glass of fine Saperavi wine.",
      map: "/assets/georgian-traditional-food/traditional-food-map/Chashushuli.png",
    });
    server.create("food", {
      id: "el27",
      img: "/assets/georgian-traditional-food/Chakapuli.jpg",
      type: "STEW",
      name: "Chakapuli",
      isLarge: false,
      location: "Most iconic: Tsiskvili",
      about:
        "Chakapuli is a popular Georgian stew consisting of either beef or lamb meat, unripe sour plums, spring onions, green peppers, white wine, and herbs and seasonings such as tarragon, coriander, garlic, and salt. It is especially popular during spring, when the plums are still unripe. Chakapuli is often served during the feast of Orthodox Easter, and it is recommended to serve it hot with Georgian bread on the side.",
      map: "/assets/georgian-traditional-food/traditional-food-map/Chakapuli.png",
    });
    server.create("food", {
      id: "el28",
      img: "/assets/georgian-traditional-food/Shotis-puri.jpg",
      type: "BREAD",
      name: "Shotis puri",
      isLarge: false,
      location: "",
      about:
        "Shotis puri or shoti is a Georgian baton-like bread made with whole wheat flour, salt, water, and yeast. It is traditionally baked until golden brown in a deep, circular oven called a tone. The freshly baked bread is then placed on wooden racks to cool, and it is usually sold wrapped in a sheet of paper. Shotis puri is consumed as an everyday bread, but it is especially popular during festive events such as Easter, Christmas, and birthdays.",
      map: "/assets/georgian-traditional-food/traditional-food-map/Shotis-puri.png",
    });
    server.create("food", {
      id: "el29",
      img: "/assets/georgian-traditional-food/Khashlama.jpg",
      type: "MEAT DISH",
      name: "Khashlama",
      isLarge: false,
      cuisine: "Racha Lechkhumi",
      location: "",
      about:
        "Georgian khashlama is a straightforward and traditional meat dish originating from the Caucasus region. Although time-consuming, the dish is made by simply boiling large chunks of meat, usually beef, veal, or lamb, in hot water. The traditional version of this famous dish does not include other ingredients, except a few spices, making the boiled pieces of meat the star of the dish. Because of this, khashlama contains only the finest meat cuts available. The origins of the dish believe to be in the Georgian Kakheti region, where it is regarded as a regional signature dish. However, it is also widely popular in the neighboring Armenia, causing disputes over the true origin of the dish. Traditionally, Georgian khashlama is prepared on an open fire, slowly, until the meat is perfectly tender. It is commonly flavored with onions, garlic, bay leaves, and peppercorns. Because it is rather time-consuming, the dish is usually served on special occasions, and it is a common staple of supra, a traditional Georgian feast. Boiled pieces of meat are commonly served hot and garnished with a generous amount of coarse salt and chopped parsley.",
      map: "/assets/georgian-traditional-food/traditional-food-map/Khashlama.png",
    });
    server.create("food", {
      id: "el30",
      img: "/assets/georgian-traditional-food/Bazhe.jpg",
      type: "SAUCE",
      name: "Bazhe",
      isLarge: true,
      location: "",
      cuisine: "Samegrelo - Zemo Svaneti",
      about:
        "Bazhe is a popular Georgian sauce made with water, vinegar, walnuts, garlic, and spices such as coriander, salt, parsley, fennel, and crushed red pepper. It has a smooth consistency, and it is traditionally served at Georgian feasts. The sauce is often used with fish or poultry dishes, adding a depth of flavor, but some Georgians also consume it smeared on a slice of bread as a snack.",
      map: "/assets/georgian-traditional-food/traditional-food-map/Bazhe.png",
    });
    server.create("food", {
      id: "el31",
      img: "/assets/georgian-traditional-food/Mchadi.jpg",
      type: "CORN BREAD",
      name: "Mchadi",
      isLarge: false,
      location: "",
      cuisine: "Samegrelo - Zemo Svaneti",
      about:
        "Mchadi is a popular, traditional Georgian bread consisting of cornmeal, salt, and water. The dough is usually fried in hot oil until golden brown. It is recommended to serve mchadi warm with kidney beans and cheese on the side.",
      map: "/assets/georgian-traditional-food/traditional-food-map/Mchadi.png",
    });
    server.create("food", {
      id: "el32",
      img: "/assets/georgian-traditional-food/Satsebeli.jpg",
      type: "SAUCE",
      name: "Satsebeli",
      isLarge: false,
      location: "",
      cuisine: "Samegrelo - Zemo Svaneti",
      about:
        "Satsebeli is a traditional sauce originating from Georgia. It's usually made with a combination of tomatoes, red bell peppers, garlic, salt, cayenne pepper (or ajika paste), and oil. The tomatoes are chopped, mixed with sea salt, and covered overnight to release the juices. They are then cooked with bell peppers until soft and blended and passed through a sieve. The mixture is cooked with garlic and ajika (or cayenne) and seasoned with salt, and satsebeli is then stored in airtight bottles or jars with a thin film of oil on top. This sauce pairs exceptionally well with eggs, polenta, roast chicken, or khinkali dumplings.",
      map: "/assets/georgian-traditional-food/traditional-food-map/Satsebeli.png",
    });
    server.create("food", {
      id: "el33",
      img: "/assets/georgian-traditional-food/Ojakhuri.jpg",
      type: "MEAT DISH",
      name: "Ojakhuri",
      isLarge: false,
      location: "",
      cuisine: "Shida Kartli",
      about:
        "Ojakhuri is a Georgian dish consisting of roasted meat (pork, chicken, lamb, or beef) and potatoes. The name of the dish means family meal in Georgian, so every family has their own recipe, variations, and they all use different seasonings for the roast. The dish is usually garnished with slices of pickled vegetables and served with accompaniments such as tkemali or ajika sauces.",
      map: "/assets/georgian-traditional-food/traditional-food-map/Ojakhuri.png",
    });
    server.create("food", {
      id: "el34",
      img: "/assets/georgian-traditional-food/Chanakhi.jpg",
      type: "STEW",
      name: "Chanakhi",
      isLarge: false,
      location: "",
      about:
        "Chanakhi is a hearty Georgian stew made with lamb, eggplant, sweet peppers, and tomatoes. The stew is typically flavored and seasoned with coriander, basil, pepper, and salt. This flavorful dish is traditionally served in individual clay pots, called chanakhi, hence the name. It is believed that chanakhi tastes even better if reheated the next day, when all of the flavors have been thoroughly combined.",
      map: "/assets/georgian-traditional-food/traditional-food-map/Chanakhi.png",
    });
    server.create("food", {
      id: "el35",
      img: "/assets/georgian-traditional-food/Satsivi.jpg",
      type: "SAUCE",
      name: "Satsivi",
      isLarge: false,
      location: "",
      cuisine: "Guria",
      about:
        "Satsivi is a thick and aromatic nut-based paste that is traditionally prepared in Georgia. It uses walnuts as the main ingredient and is typically served as an accompaniment to meat dishes. However, it can also be served with vegetable dishes, alongside fish, or even with boiled eggs. There is no universal recipe, and the varieties differ across Georgian regions, but they all usually incorporate garlic, coriander, cinnamon, vinegar and hot peppers. The consistency and thickness of the sauce are also versatile it can either have a coarser texture or it can be served as a smooth and creamy sauce. The name satsivi means cold or cool and refers to the way the sauce is served. The most popular festive dish using this sauce is known as turkey satsivi, traditionally prepared and consumed on New Year.",
      map: "/assets/georgian-traditional-food/traditional-food-map/Satsivi.png",
    });
    server.create("food", {
      id: "el36",
      img: "/assets/georgian-traditional-food/Tklapi.jpg",
      type: "DESSERT",
      name: "Tklapi",
      isLarge: false,
      location: "",
      about:
        "Tklapi is a unique Georgian dessert consisting of cooked fruit puree that is poured on a tray in a very thin layer and left to dry in the sun for a few days. It is typically prepared with fruits such as wild plums, pears, mulberry, figs, or apples. Visually, this healthy treat looks like a piece of leather. Tklapi can be consumed on its own or used in soups and stews.",
      map: "/assets/georgian-traditional-food/traditional-food-map/Tklapi.png",
    });
    server.create("food", {
      id: "el37",
      img: "/assets/georgian-traditional-food/Penovani-khachapuri.jpg",
      type: "SAVORY PIE",
      name: "Penovani khachapuri",
      isLarge: false,
      location: "",
      about:
        "Penovani khachapuri is a Georgian khachapuri variety originating from Samtskhe-Javakheti. In order to prepare it, a combination of Imeruli and Sulguni cheese is grated and combined with egg yolks. The mixture is placed on a piece of puff pastry that's folded into triangles or squares. Before baking, each khachapuri is brushed with a mix of egg yolks and milk. These tasty small pies are ready for consumption after they puff up in the oven and become golden brown. This khachapuri variety is the easiest, speediest, and simplest to make of all the khachapuri versions.",
      map: "/assets/georgian-traditional-food/traditional-food-map/Penovani-khachapuri.png",
    });
    server.create("food", {
      id: "el38",
      img: "/assets/georgian-traditional-food/Kuchmachi.jpg",
      type: "OFFAL DISH",
      name: "Kuchmachi",
      isLarge: true,
      location: "",
      about:
        "Kuchmachi is a Georgian dish made with kidneys, livers, lungs, spleens, and hearts of chickens, pigs, or beef. The offal is cooked with butter, onions, garlic, and seasonings such as bay leaves, black pepper, salt, and coriander, while some people like to add walnuts for extra flavor. The dish is usually served hot and garnished with pomegranate seeds on top.",
      map: "/assets/georgian-traditional-food/traditional-food-map/Kuchmachi.png",
    });
    server.create("food", {
      id: "el39",
      img: "/assets/georgian-traditional-food/Pelamushi.jpg",
      type: "DESSERT",
      name: "Pelamushi",
      isLarge: false,
      location: "",
      about:
        "Pelamushi is a Georgian dessert made with pressed and condensed grape juice, sugar, and flour. The liquid is gradually heated until it thickens, and it is then poured into serving dishes, bowls, or various molds, in order to create attractive shapes. When fully chilled, pelamushi is ready to be served, and it is recommended to garnish it with various nuts and seeds.",
      map: "/assets/georgian-traditional-food/traditional-food-map/Pelamushi.png",
    });
    server.create("food", {
      id: "el40",
      img: "/assets/georgian-traditional-food/Mujuji.jpg",
      type: "OFFAL DISH",
      name: "Mujuji",
      isLarge: false,
      location: "",
      about:
        "Mujuji is a traditional Georgian dish consisting of jellied pork offal such as tails, ears, and feet. The offal is combined with vinegar, vegetables, and spices such as onions, carrots, garlic, allspice, cinnamon, bay leaves, and peppercorns. This dish can be served hot or cold, and the Georgians like to serve it with a layer of chilled fat on top.",
      map: "/assets/georgian-traditional-food/traditional-food-map/Mujuji.png",
    });
    server.create("food", {
      id: "el41",
      img: "/assets/georgian-traditional-food/Abkhazura.jpg",
      type: "MEATBALLS",
      name: "Abkhazura",
      isLarge: false,
      location: "",
      cuisine: "Samegrelo - Zemo Svaneti",
      about:
        "Abkhazura is a traditional Georgian dish originating from Abkhazia. These spicy meatballs are prepared with a combination of beef, pork, parsley, dill, coriander, pepper, onions, and summer savory. The meat needs to be tightly rolled in caul fat before it's seasoned with spices and fried in a pan. These meatballs are traditionally served with tkemali sauce.",
      map: "/assets/georgian-traditional-food/traditional-food-map/Abkhazura.png",
    });
    server.create("food", {
      id: "el42",
      img: "/assets/georgian-traditional-food/Gurian-khachapuri.jpg",
      type: "SAVORY PIE",
      name: "Gurian khachapuri",
      isLarge: false,
      location: "",
      cuisine: "Guria",
      about:
        "This khachapuri variety hails from Guria, a province in the west of Georgia. Unlike other khachapuri pies, this one is crescent-shaped and it's prepared for Orthodox Christmas. The dough is filled with a combination of grated cheese and hard-boiled eggs before it's baked until golden-brown. The shape of this pie was associated with celestial bodies, and for ancient Gurians it was a symbol of strength, so nowadays there is a superstitious belief that each family member should get at least one Gurian khachapuri during the festive Christmas season.",
      map: "/assets/georgian-traditional-food/traditional-food-map/Gurian-khachapuri.png",
    });
    server.create("food", {
      id: "el43",
      img: "/assets/georgian-traditional-food/Svanetian-khachapuri.jpg",
      type: "SAVORY PIE",
      name: "Svanetian khachapuri",
      isLarge: false,
      location: "",
      cuisine: "Samegrelo - Zemo Svaneti",
      about:
        "This khachapuri variety hails from Georgia's Svaneti region, hence the name. The dough is the same as the one used for other types of khachapuri, while the filling is made with a combination of high-fat cheese, eggs, and green onions. The dough is wrapped around the filling, and it is then pressed into a circular shape before being baked until golden brown. It is then brushed with butter and served hot, usually in slices or wedges.",
      map: "/assets/georgian-traditional-food/traditional-food-map/Svanetian-khachapuri.png",
    });
    server.create("food", {
      id: "el44",
      img: "/assets/georgian-traditional-food/Khashi.jpg",
      type: "OFFAL SOUP",
      name: "Khashi",
      isLarge: false,
      location: "Most iconic: Culinarium Khasheria (Tbilisi)",
      cuisine: "Tbilisi",
      about:
        "Widely regarded as an excellent hangover cure and a great remedy, khashi is a soup made by boiling beef intestines, tripe, shank, as well as other organs such as kidneys. Carrots, onions, bell peppers, and various greens may also be used. After the broth has been prepared, milk or pieces of milk-soaked bread can be added to the pot along with salt, pepper, and chopped garlic. It is said that khashi was invented when the poor had to give away all their meat to the rich, being left only with the organs, heads, and hooves of the animals. Ever since the promotion of the soup as a particularly healthy dish, it became popular among all social classes.",
      map: "/assets/georgian-traditional-food/traditional-food-map/Khashi.png",
    });
    server.create("food", {
      id: "el45",
      img: "/assets/georgian-traditional-food/Jonjoli.jpg",
      type: "PICKLING",
      name: "Jonjoli",
      isLarge: false,
      cuisine: "Kakheti",
      location: "",
      about:
        "Jonjoli is an unusual Georgian appetizer made with pickled sprouts from the local jonjoli bushes. The sprouts are combined with olive oil or other pickled vegetables such as peppers, tomatoes, or cucumbers. The dish is usually garnished with onion rings and finely chopped coriander. This appetizer pairs well with kidney beans, boiled potatoes, or any type of Georgian bread.",
      map: "/assets/georgian-traditional-food/traditional-food-map/Jonjoli.png",
    });
    server.create("food", {
      id: "el46",
      img: "/assets/georgian-traditional-food/Achma.jpg",
      type: "SAVORY PASTRY",
      name: "Achma",
      isLarge: false,
      location: "",
      cuisine: "Ajara",
      about:
        "Achma is a Georgian dish consisting of a few layers of tender dough, a crispy top, and lots of cheese in between. It originates from the western Georgian regions of Adjara and Abkhazia. The dough is usually made with eggs, water, butter, and flour, while the cheese filling is either Georgian cheese or a combination of ricotta, mozzarella, and feta. Due to the fact that it is a layered dish with tender sheets of dough, achma is often compared to the famous lasagne.",
      map: "/assets/georgian-traditional-food/traditional-food-map/Achma.png",
    });
    server.create("food", {
      id: "el47",
      img: "/assets/georgian-traditional-food/Buglama.jpg",
      type: "STEW",
      name: "Buglama",
      isLarge: false,
      location: "",
      about:
        "Buglama is a popular Azerbaijani and Georgian dish consisting of lamb pieces that are stewed with onions, tomatoes, peppers, a variety of spices including black pepper and bay leaves, and a small amount of liquid. The name of the dish means steamed, referring to the fact that the lamb is cooked in its own juices. Although lamb is the most common option, it is not unusual to prepare buglama with fish.",
      map: "/assets/georgian-traditional-food/traditional-food-map/Buglama.png",
    });
    server.create("food", {
      id: "el48",
      img: "/assets/georgian-traditional-food/Soko-kecze.jpg",
      type: "SNACK",
      name: "Clay Pot Mushrooms",
      isLarge: false,
      location: "",
      cuisine: "Mtskheta Mtianeti",
      about:
        "Simple, yet delicious, soko kecze is a Georgian specialty that can be translated as mushrooms in a clay pot. The dish consists of mushrooms that are baked and served in a special ketsi dish (clay dish). The mushrooms can be either plain or filled with butter and Georgian sulguni cheese, seasoned with black pepper, and sometimes a bit of garlic. This hearty mushroom dish is best enjoyed hot, while the cheese is still gooey and stretchy.",
      map: "/assets/georgian-traditional-food/traditional-food-map/Soko-kecze.png",
    });
    server.create("food", {
      id: "el49",
      img: "/assets/georgian-traditional-food/Chvishtari.jpg",
      type: "CORN BREAD",
      name: "Chvishtari",
      isLarge: false,
      location: "",
      about:
        "Chvishtari is a traditional Georgian cornbread originating from Svaneti. It's usually made with a combination of cornflour, milk, eggs, oil, salt, and cheese such as feta, sulguni, and halloumi. The dough is kneaded with the cheeses until it becomes firm and smooth. It is then flattened and cooked on both sides in a greased frying pan over medium heat until lightly golden. It's recommended to eat chivshtari on the same day that it was made, preferably while still hot.",
      map: "/assets/georgian-traditional-food/traditional-food-map/Chvishtari.png",
    });
    server.create("food", {
      id: "el50",
      img: "/assets/georgian-traditional-food/Ispanakhis-pkhali.jpg",
      type: "DIP",
      name: "Ispanakhis pkhali",
      isLarge: false,
      location: "",
      about:
        "Ispanakhis pkhali is a traditional Georgian dip. It is prepared with a combination of spinach, walnuts, garlic, scallions, cilantro, fenugreek, and red wine vinegar. The ingredients are combined into a homogeneous mixture that's refrigerated before serving. The mixture can then be served on a platter or shaped into smaller, individual balls. It is recommended to garnish this specialty with pomegranate seeds or whole nuts and serve them with mchadi or khachapuri.",
      map: "/assets/georgian-traditional-food/traditional-food-map/Ispanakhis-pkhali.png",
    });
    server.create("food", {
      id: "el51",
      img: "/assets/georgian-traditional-food/Sulguni.jpg",
      type: "CHEESE",
      name: "Sulguni",
      isLarge: true,
      location: "",
      about:
        "Sulguni is a cylindrical Georgian cheese originating from the region of Samegrelo (Mingrelia). The cheese has a mild, yet complex flavor and a semi-firm texture. It can be produced from the milk of cows, buffalos, and goats (rarely), or a combination of the three. The flavors range from acidic, tangy, and sour to salty and smoky, depending on the varieties – fresh, smoked, or semi-hard. The cheese melts easily so it is often used as a pizza topping, but it can also be added to various salads or pasta dishes.",
      map: "/assets/georgian-traditional-food/traditional-food-map/Sulguni.png",
    });
    server.create("food", {
      id: "el52",
      img: "/assets/georgian-traditional-food/Tenili.jpg",
      type: "CHEESE",
      name: "Tenili",
      isLarge: false,
      location: "",
      about:
        "Tenili is a unique Georgian cheese made in the regions of Samtskhe-Javakheti and Kvemo Kartli. It can be produced from cow's or sheep's milk, but the most important thing is that the milk should have a high percentage of fat. The cheese is pressed and the warm curds are repeatedly hand-pulled into thin strands, giving it a unique shape and visual appearance. Since the process is a laborious one, tenili is typically prepared for big celebrations and feasts.",
      map: "/assets/georgian-traditional-food/traditional-food-map/Tenili.png",
    });
    server.create("food", {
      id: "el53",
      img: "/assets/georgian-traditional-food/Megruli-Sulguni.jpg",
      type: "CHEESE",
      name: "Shebolili Megruli Sulguni",
      isLarge: false,
      location: "",
      about:
        "Originating from Samegrelo, Smoked Sulguni or Shebolili Megruli Sulguni is a Georgian cheese made from the milk of cows, buffalos, and goats (rarely), or a combination of the three. This semi-hard cheese has a dense, springy, and elastic texture underneath its natural rind. Due to the fact that the cheese is smoked, its aroma is smoky, while the flavors are both smoky and salty. The paste is yellow in color, while the crust is hard and golden brown or dark brown due to the smoking process. Smoked Sulguni melts exceptionally well, and it's recommended to serve it with ghomi, a local porridge that's a staple in Samegrelo.",
      map: "/assets/georgian-traditional-food/traditional-food-map/Megruli-Sulguni.png",
    });
    server.create("food", {
      id: "el54",
      img: "/assets/georgian-traditional-food/Imeruli.jpg",
      type: "CHEESE",
      name: "Imeruli",
      isLarge: false,
      location: "",
      about:
        "Imeruli is a traditional Georgian cheese originating from the region of Imereti. This fresh curd cheese is made from cow's milk, and although it originated in Imereti, nowadays it can be found throughout the country. The cheese is brined and it's white in color. If properly prepared, it will develop porous bubbles throughout the body. When fresh and unsalted, the cheese has a chewy and stringy texture, and it's usually served with salads or light summer meals. When aged, the texture becomes slightly grainy and the flavor becomes sour. Imeruli is traditionally used in the preparation of khachapuri, the famous Georgian cheese bread.",
      map: "/assets/georgian-traditional-food/traditional-food-map/Imeruli.png",
    });
    server.create("food", {
      id: "el55",
      img: "/assets/georgian-traditional-food/Khmeli-Suneli.jpg",
      type: "SPICE BLEND AND SEASONING",
      name: "Khmeli Suneli",
      isLarge: false,
      location: "",
      about:
        "Khmeli suneli is a fragrant Georgian spice blend including fenugreek, coriander, peppercorns, dill, mint, marigold petals, and bay leaves. This spice blend is characterized by its combination of warm, bitter, nutty, and grassy flavors. It is traditionally used in various stews and meat dishes, but khmeli suneli also provides a depth of flavor to roasted vegetables and bean soups.",
      map: "/assets/georgian-traditional-food/traditional-food-map/Khmeli-Suneli.png",
    });
    server.create("food", {
      id: "el56",
      img: "/assets/georgian-traditional-food/Trigonella-Caerulea.jpg",
      type: "SPICE",
      name: "Khmeli Suneli",
      isLarge: false,
      location: "",
      about:
        "Trigonella caerulea, also known as blue fenugreek, is a Georgian plant that grows wild in the mountainous parts of the country. It is typically used as a spice, giving a unique flavor to a number of dishes. The spice is prepared by grinding the seeds and pods in order to get an aromatic and slightly spicy powder. Its flavor is similar to dried fenugreek, but slightly milder.",
      map: "/assets/georgian-traditional-food/traditional-food-map/Trigonella-Caerulea.png",
    });
    server.create("restaurant", {
      id: "el1",
      name: "Funicular Complex",
      img: "/assets/traditional-food-restaurant/Amo-Rame.jpg",
      location: "Mtatsminda Plateau",
      visit: "http://www.funicular.ge/",
      mapLocation:
        "https://www.google.com/maps/embed?pb=!1m21!1m12!1m3!1d95333.81483588627!2d44.704445698857505!3d41.69501277043012!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m6!3e6!4m0!4m3!3m2!1d41.694992!2d44.786808!5e0!3m2!1ska!2sge!4v1700296912632!5m2!1ska!2sge",
      number: " 577 74 44 00",
      sun: "Sunday   1:00 PM - 12:00 PM",
      mon: "Monday  1:00 PM - 12:00 AM",
      tue: "Tuesday  1:00 PM - 12:00 AM",
      wed: "Wednesday  1:00 PM - 12:00 PM",
      thu: "Thursday  1:00 PM - 12:00 AM",
      fri: "Friday  1:00 PM - 12:00 AM",
      sat: "Saturday   1:00 PM - 12:00 AM",
    });
    server.create("restaurant", {
      id: "el2",
      name: "Salobie Bia",
      img: "/assets/traditional-food-restaurant/Salobie-Bia.jpg",
      location: "17 Shota Rustaveli Ave",
      visit: "https://www.facebook.com/salobiebia/",
      mapLocation:
        "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d11915.879801482084!2d44.7974509!3d41.6995844!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40440d010fcaf96f%3A0xa54989d014b0576d!2z4YOh4YOQ4YOa4YOd4YOR4YOY4YOUIOGDkeGDmOGDkA!5e0!3m2!1ska!2sge!4v1700567663676!5m2!1ska!2sge",
      number: " 551 92 77 22",
      sun: "Sunday   1:00 PM - 12:00 PM",
      mon: "Monday  1:00 PM - 12:00 AM",
      tue: "Tuesday  1:00 PM - 12:00 AM",
      wed: "Wednesday  1:00 PM - 12:00 PM",
      thu: "Thursday  1:00 PM - 12:00 AM",
      fri: "Friday  1:00 PM - 12:00 AM",
      sat: "Saturday   1:00 PM - 12:00 AM",
    });
    server.create("restaurant", {
      id: "el3",
      name: "Amo Rame",
      img: "/assets/traditional-food-restaurant/Amo-Rame.jpg",
      location: "4 Pavle Ingorokva St",
      visit: "https://www.facebook.com/AmoRameTbilisi/",
      mapLocation:
        "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d11917.153642091907!2d44.7980779!3d41.6927092!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40440cee8866b6a5%3A0xf4afe8a96e07772a!2z4YOQ4YOb4YOdIOGDoOGDkOGDm-GDlA!5e0!3m2!1ska!2sge!4v1700571144193!5m2!1ska!2sge",
      number: "032 298 48 38",
      sun: "Sunday   1:00 PM - 12:00 PM",
      mon: "Monday  1:00 PM - 12:00 AM",
      tue: "Tuesday  1:00 PM - 12:00 AM",
      wed: "Wednesday  1:00 PM - 12:00 PM",
      thu: "Thursday  1:00 PM - 12:00 AM",
      fri: "Friday  1:00 PM - 12:00 AM",
      sat: "Saturday   1:00 PM - 12:00 AM",
    });
    server.create("restaurant", {
      id: "el4",
      name: "Tsiskvili",
      img: "/assets/traditional-food-restaurant/Tsiskvili.jpg",
      location: "40/2 Akaki Beliashvili St",
      visit: "https://www.facebook.com/Tsiskvili/",
      mapLocation:
        "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d11902.584484602728!2d44.779815!3d41.771287!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40446d91e60380ed%3A0x43e7896ceb2cc479!2z4YOU4YOX4YOc4YOdIOGDrOGDmOGDoeGDpeGDleGDmOGDmuGDmA!5e0!3m2!1ska!2sge!4v1700571325522!5m2!1ska!2sge",
      number: " 032 200 55 55",
      sun: "Sunday   1:00 PM - 12:00 PM",
      mon: "Monday  1:00 PM - 12:00 AM",
      tue: "Tuesday  1:00 PM - 12:00 AM",
      wed: "Wednesday  1:00 PM - 12:00 PM",
      thu: "Thursday  1:00 PM - 12:00 AM",
      fri: "Friday  1:00 PM - 12:00 AM",
      sat: "Saturday   1:00 PM - 12:00 AM",
    });
    server.create("restaurant", {
      id: "el5",
      name: "Mapshalia",
      img: "/assets/traditional-food-restaurant/Mapshalia.jpg",
      location: "137 Davit Aghmashenebeli Ave",
      visit: "https://www.facebook.com/maphshalia/",
      mapLocation:
        "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d11912.933758662102!2d44.7931645!3d41.7154813!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40440d2bf47feb13%3A0x9a51031a7271f012!2z4YOb4YOQ4YOk4YOo4YOQ4YOa4YOY4YOQ!5e0!3m2!1ska!2sge!4v1700571410787!5m2!1ska!2sge",
      number: " 555 63 44 11",
      sun: "Sunday   1:00 PM - 12:00 PM",
      mon: "Monday  1:00 PM - 12:00 AM",
      tue: "Tuesday  1:00 PM - 12:00 AM",
      wed: "Wednesday  1:00 PM - 12:00 PM",
      thu: "Thursday  1:00 PM - 12:00 AM",
      fri: "Friday  1:00 PM - 12:00 AM",
      sat: "Saturday   1:00 PM - 12:00 AM",
    });
    server.create("restaurant", {
      id: "el6",
      name: "Leila",
      img: "/assets/traditional-food-restaurant/Leila.jpg",
      location: "18 Ioane Shavteli St",
      visit: "https://www.facebook.com/profile.php?id=100070404811150",
      mapLocation:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d744.7930462973575!2d44.80638254533768!3d41.69521848282067!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40440cf071db4b39%3A0x2432cf9f7e4580e6!2z4YOa4YOU4YOY4YOa4YOQ!5e0!3m2!1ska!2sge!4v1700571613786!5m2!1ska!2sge",
      number: "555 94 94 20",
      sun: "Sunday   1:00 PM - 12:00 PM",
      mon: "Monday  1:00 PM - 12:00 AM",
      tue: "Tuesday  1:00 PM - 12:00 AM",
      wed: "Wednesday  1:00 PM - 12:00 PM",
      thu: "Thursday  1:00 PM - 12:00 AM",
      fri: "Friday  1:00 PM - 12:00 AM",
      sat: "Saturday   1:00 PM - 12:00 AM",
    });
    server.create("restaurant", {
      id: "el7",
      name: "Maspindzelo",
      img: "/assets/traditional-food-restaurant/Maspindzelo.jpg",
      location: "7 Vakhtang Gorgasali Street",
      visit: "http://www.mgroup.ge/mgroup/",
      mapLocation:
        "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d11917.92012047668!2d44.8126276!3d41.6885719!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40440d1f09c47353%3A0x9af070ed0772a0df!2z4YOb4YOQ4YOh4YOe4YOY4YOc4YOr4YOU4YOa4YOd!5e0!3m2!1ska!2sge!4v1700571693203!5m2!1ska!2sge",
      number: "",
      sun: "Sunday   1:00 PM - 12:00 PM",
      mon: "Monday  1:00 PM - 12:00 AM",
      tue: "Tuesday  1:00 PM - 12:00 AM",
      wed: "Wednesday  1:00 PM - 12:00 PM",
      thu: "Thursday  1:00 PM - 12:00 AM",
      fri: "Friday  1:00 PM - 12:00 AM",
      sat: "Saturday   1:00 PM - 12:00 AM",
    });
    server.create("restaurant", {
      id: "el8",
      name: "Porto Franco",
      img: "/assets/traditional-food-restaurant/Porto-Franco.jpg",
      location: "40 Konstantine Gamsakhurdia Street",
      visit: "https://www.facebook.com/RestaurantPortoFranco/",
      mapLocation:
        "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d11925.438141149567!2d41.6400251!3d41.6479733!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4067863e5b012b5d%3A0x263210ad2db1177d!2z4YOe4YOd4YOg4YOi4YOdIOGDpOGDoOGDkOGDnOGDmeGDnQ!5e0!3m2!1ska!2sge!4v1700571790480!5m2!1ska!2sge",
      number: "0422 27 62 22",
      sun: "Sunday   1:00 PM - 12:00 PM",
      mon: "Monday  1:00 PM - 12:00 AM",
      tue: "Tuesday  1:00 PM - 12:00 AM",
      wed: "Wednesday  1:00 PM - 12:00 PM",
      thu: "Thursday  1:00 PM - 12:00 AM",
      fri: "Friday  1:00 PM - 12:00 AM",
      sat: "Saturday   1:00 PM - 12:00 AM",
    });
    server.create("restaurant", {
      id: "el9",
      name: "Kakhelebi",
      img: "/assets/traditional-food-restaurant/Kakhelebi.jpg",
      location: "Kakheti Hwy",
      visit: "https://www.kakhelebi.ge/",
      mapLocation:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d186.00588757439874!2d44.78056140904037!3d41.761626750720175!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40446d872dfe23eb%3A0x29627378c032a30!2z4YOZ4YOQ4YOu4YOU4YOa4YOU4YOR4YOYIOGDkeGDlOGDmuGDmOGDkOGDqOGDleGDmOGDmuGDluGDlA!5e0!3m2!1ska!2sge!4v1700571903595!5m2!1ska!2sge",
      number: " 032 218 42 22",
      sun: "Sunday   1:00 PM - 12:00 PM",
      mon: "Monday  1:00 PM - 12:00 AM",
      tue: "Tuesday  1:00 PM - 12:00 AM",
      wed: "Wednesday  1:00 PM - 12:00 PM",
      thu: "Thursday  1:00 PM - 12:00 AM",
      fri: "Friday  1:00 PM - 12:00 AM",
      sat: "Saturday   1:00 PM - 12:00 AM",
    });
    server.create("restaurant", {
      id: "el10",
      name: "Cafe Stamba",
      img: "/assets/traditional-food-restaurant/Cafe-Stamba.jpg",
      location: "14 Merab Kostava St",
      visit: "https://stambahotel.com/",
      mapLocation:
        "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d11914.774853352987!2d44.7881813!3d41.7055473!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4044733d29d9dda5%3A0xa11c043ada551c4b!2z4YOZ4YOQ4YOk4YOUIOGDoeGDouGDkOGDm-GDkeGDkA!5e0!3m2!1ska!2sge!4v1700571971401!5m2!1ska!2sge",
      number: "032 202 19 99",
      sun: "Sunday   1:00 PM - 12:00 PM",
      mon: "Monday  1:00 PM - 12:00 AM",
      tue: "Tuesday  1:00 PM - 12:00 AM",
      wed: "Wednesday  1:00 PM - 12:00 PM",
      thu: "Thursday  1:00 PM - 12:00 AM",
      fri: "Friday  1:00 PM - 12:00 AM",
      sat: "Saturday   1:00 PM - 12:00 AM",
    });
    server.create("guide", {
      id: 1,
      first_name: "Gianni",
      last_name: "Hyde-Chambers",
      email: "ghydechambers0@berkeley.edu",
      img: "/assets/Guide/alex-suprun-ZHvM3XIOHoE-unsplash.jpg",
      recommended: [
        {
          id: 1,
          img: [
            "/assets/location/mestia.jpg",
            "/assets/location/Zugdidi-town-center.jpg",
            "/assets/location/martvili.jpg",
            "/assets/location/ushguli-gnta.webp",
          ],
          title: "Popular Destinations in Samegrelo-Zemo Svaneti",
          description:
            "Tucked in the lush greenery, with proud Greater Caucasus Mountains in the background, Samegrelo and Zemo Svaneti Regions have amazing experiences to offer. Challenge yourself with a hike to Tobavarchkhili Lake, enjoy the natural diversity in the protected areas of Martvili Canyon and Paliastomi Lake, raise a glass of Ojaleshi wine from Salkhino, looking at the sunset from Anaklia Bridge. Ski from the pristine slopes of Tetnuldi and Hatsvali, and get to know the local traditions in Zugdidi, Mestia and Ushguli.",
        },
        {
          id: 2,
          img: [
            "/assets/location/Tsageri.jpg",
            "/assets/location/Shovi.jpg",
            "/assets/location/oni-gnta.webp",
            "/assets/location/ambrolauri-gnta.webp",
          ],
          title: "Destinations in Racha-Lechkhumi & Kvemo Svaneti",
          description:
            "The historical regions Racha-Lechkhumi & Kvemo Svaneti offer a wonderful mix of history and unspoiled natural beauty. Visit Shaori and Udziro Lakes, marvel at the frescoes of Nikortsminda Cathedral, feel the time slowing down in Oni and Shovi, ascend to the top of Khvamli Mountain, enjoy the views of Lailashi reservoir and Tsageri panorama from Muri Fortress, and unwind in the wineries around Ambrolauri and Tvishi.",
        },
      ],
      gender: "Male",
      status: false,
      description:
        "Discover the historic charm of Tbilisi with a knowledgeable guide. Uncover hidden gems in narrow streets, indulge in local cuisine, and admire the fusion of traditional and modern architecture.",
    });
    server.create("guide", {
      id: 2,
      first_name: "Cassaundra",
      last_name: "Conklin",
      email: "cconklin1@epa.gov",
      gender: "Female",
      img: "/assets/Guide/photo-1605993439219-9d09d2020fa5.avif",
      recommended: [
        {
          id: 1,
          img: [
            "/assets/location/Kaspi.jpg",
            "/assets/location/Gori.jpg",
            "/assets/location/Kareli.jpg",
            "/assets/location/Khashuri.jpg",
          ],
          title: "Popular Destinations in Shida Kartli",
          description:
            "In Shida Kartli, you can immerse yourself in the depth of Georgian history. Walk along the streets of the rock-hewn town Uplistsikhe, visit the picturesque monasteries of Dzama Valley, hike to Biisi Waterfall, and marvel at the terraced vineyards next to the fantastic Ateni’s Sioni Monastery. Taste Atenuri wine and sweet bread Nazuki in Surami. Ascend to the top of Jamjama Mountain.",
        },
        {
          id: 2,
          img: [
            "/assets/location/Stepantsminda.jpg",
            "/assets/location/Shatili.jpg",
            "/assets/location/mtskheta-gnta.webp",
            "/assets/location/gudauri-gnta.webp",
          ],
          title: "Popular Destinations in Mtskheta-Mtianeti",
          description:
            "Mtskheta-Mtianeti Region promises to be an amazing adventure for you! Challenge yourself with mountainous routes in Kazbegi, Truso, Juta and Abudelauri, try the white water rafting at Aragvi River, spend a night in a fortress-village of Shatili, and explore the mysterious abandoned Mutso fortress. Enjoy the fresh powder at the slopes of Gudauri. Feel the closeness to nature!",
        },
      ],
      status: true,
      description:
        "Embark on a journey through the Caucasus, exploring picturesque mountain landscapes, ancient fortresses, and vibrant local traditions. Your guide will illuminate the rich history and cultural tapestry of Georgia's highlands.",
    });
    server.create("guide", {
      id: 3,
      first_name: "Cosmo",
      last_name: "Ironmonger",
      email: "cironmonger2@goo.gl",
      gender: "Male",
      img: "/assets/Guide/photo-1517070208541-6ddc4d3efbcb.avif",
      recommended: [
        {
          id: 1,
          img: [
            "/assets/location/telavi.jpg",
            "/assets/location/Lagodekhi.jpg",
            "/assets/location/Kvareli.jpg",
            "/assets/location/sighnaghi.webp",
          ],
          title: "Popular Destinations in Kakheti",
          description:
            "Here you will see spectacular examples of Georgian church architecture, such as the cathedrals of Alaverdi, Ikalto, Shuamta, Bodbe, and Gremi. Feel the atmosphere of the towns of Telavi, Gurjaani, Kvareli, and Sighnaghi. Explore the cultural sights, dive into cellars and vineyards, have fun and let Kakheti open up its hospitable soul to you!",
        },
        {
          id: 2,
          img: [
            "/assets/location/Tsalka.jpg",
            "/assets/location/tetritskaro-gnta.webp",
            "/assets/location/bolnisi-gnta.webp",
            "/assets/location/urban-archaeology-of-dmanisi-gnta.webp",
          ],
          title: "Popular Destinations in Kvemo Kartli",
          description:
            "Kvemo Kartli is a multicultural region with a rich history, where you will find numerous archaeological sites, churches and mosques, fortresses and old German houses. One discovery of worldwide importance is Dmanisi Settlement, where the hominids used to live 1.8 million years ago. The former German colonies of Asureti and Bolnisi will offer your amazing stories and great wine, Algeti National Park will welcome you to the unspoiled nature and great views, and in the ancient site of Samshvilde, you’d feel like you are in an adventure movie.",
        },
      ],
      status: false,
      description:
        "Delight in Georgia's renowned wine culture with a guide who leads you through vineyards, ancient cellars, and wine-tasting sessions. Learn about traditional winemaking methods and savor the diverse flavors of Georgian wines.",
    });
    server.create("guide", {
      id: 4,
      first_name: "Archibaldo",
      last_name: "O'Neary",
      email: "aoneary3@addthis.com",
      gender: "Male",
      img: "/assets/Guide/photo-1528892952291-009c663ce843.avif",
      recommended: [
        {
          id: 1,
          img: [
            "/assets/location/Parks&Gardens.jpg",
            "/assets/location/FineDiningDrinking&Nightlife.jpg",
            "/assets/location/Museums.jpg",
            "/assets/location/Spas&Baths.jpg",
          ],
          title: "Experience Top Activities in Tbilisi",
          description:
            "Discover why Tbilisi has captivated visitors for centuries. Feel its unique rhythm and lively character, explore the city, and fall under its charm. Whether you're looking for adventure or relaxation, the city has something to offer every traveler. Immerse yourself in the culture of Tbilisi and create memories that will last a lifetime.",
        },
        {
          id: 2,
          img: [
            "/assets/location/Akhaltsikhe.jpg",
            "/assets/location/Borjomi.jpg",
            "/assets/location/Adigeni.jpg",
            "/assets/location/Abastumani.jpg",
          ],
          title: "Popular Destinations in Samtskhe-Javakheti",
          description:
            "Here you will find abandoned cyclopic fortresses built by ancient civilizations, along with Christian monuments with outstanding architecture and frescos. Visit the Paravani, Saghamo, and Khanchali Lakes to see amazing bird species. Feel the flow of centuries in cave city Vardzia, embrace the multiculturality in Akhaltsikhe Castle, and visit the Doukhobor villages. Hike in Borjomi-Kharagauli National Park and quench your thirst for adventure with Georgia’s most famous mineral water, Borjomi. Enjoy the fresh air and beautiful nature in Likani, Bakuriani, or Abastumani.",
        },
      ],
      status: false,
      description:
        "Explore the charming Black Sea coastline with a guide who unveils the beauty of Batumi and its surroundings. Immerse yourself in botanical gardens, waterfront promenades, and the unique blend of Georgian and Ottoman influences.",
    });
    server.create("guide", {
      id: 5,
      first_name: "Cam",
      last_name: "Jermin",
      email: "cjermin4@boston.com",
      gender: "Female",
      img: "/assets/Guide/photo-1546961329-78bef0414d7c.avif",
      recommended: [
        {
          id: 1,
          img: [
            "/assets/location/kutaisi-gnta.webp",
            "/assets/location/Tskaltubo.webp",
            "/assets/location/zestaponi-gnta-m.webp",
            "/assets/location/Sachkhere.jpg",
          ],
          title: "Popular Destinations in Imereti",
          description:
            "The green heart of Georgia, Imereti is a region of rolling mountains, vineyards climbing steep hills, waterfalls and caverns, canyons and rivers. It’s the homeland of many Georgian poets and writers, and of course, it’s a region of limitless hospitality and unbelievable food. Get closer to mother nature by visiting Okatse Canyon and Kinchkha Waterfall, Sataplia and Prometheus Cave, Khani and Mukhara Waterfalls, hike to Tskhrajvari Mountain and explore nature in Sachkhere and Marelisi. Get to know the rich history and urban legends of Kutaisi, feel the industrial vibe of Zestafoni and Chiatura, and soak in the healing waters of Sairme and Tskaltubo.",
        },
        {
          id: 2,
          img: [
            "/assets/location/Kobuleti.jpg",
            "/assets/location/Sarpi.jpg",
            "/assets/location/Gonio.jpg",
            "/assets/location/Kvariati.jpg",
          ],
          title: "Popular Destinations in Adjara",
          description:
            "Ajara is a subtropical region of fantastic beauty. The four protected areas of the region are similar in their pristine wilderness and different in the variety of animal and plant species. The mountains of Ajara are hiding steep vineyards, babbling waterfalls and lakes, old fortresses and cute wooden houses standing on high “legs”. Visit the mountains of Beshumi, Goderdzi and Gomarduli to find calmness and peace, and have fun at the seaside resorts of Batumi, Kvariati, Gonio, Sarpi and Mtsvane Kontskhi.",
        },
      ],
      status: true,
      description:
        "Embark on a time-traveling adventure with a guide who navigates you through the archaeological wonders of Georgia. From ancient ruins to UNESCO World Heritage Sites, discover the layers of history etched in Georgia's landscapes.",
    });
    server.create("guide", {
      id: 6,
      first_name: "Lexie",
      last_name: "McFade",
      email: "lmcfade5@tinypic.com",
      gender: "Female",
      img: "/assets/Guide/photo-1438761681033-6461ffad8d80.avif",
      recommended: [
        {
          id: 1,
          img: [
            "/assets/location/mestia.jpg",
            "/assets/location/Zugdidi-town-center.jpg",
            "/assets/location/martvili.jpg",
            "/assets/location/ushguli-gnta.webp",
          ],
          title: "Popular Destinations in Samegrelo-Zemo Svaneti",
          description:
            "Tucked in the lush greenery, with proud Greater Caucasus Mountains in the background, Samegrelo and Zemo Svaneti Regions have amazing experiences to offer. Challenge yourself with a hike to Tobavarchkhili Lake, enjoy the natural diversity in the protected areas of Martvili Canyon and Paliastomi Lake, raise a glass of Ojaleshi wine from Salkhino, looking at the sunset from Anaklia Bridge. Ski from the pristine slopes of Tetnuldi and Hatsvali, and get to know the local traditions in Zugdidi, Mestia and Ushguli.",
        },
        {
          id: 2,
          img: [
            "/assets/location/Tsageri.jpg",
            "/assets/location/Shovi.jpg",
            "/assets/location/oni-gnta.webp",
            "/assets/location/ambrolauri-gnta.webp",
          ],
          title: "Destinations in Racha-Lechkhumi & Kvemo Svaneti",
          description:
            "The historical regions Racha-Lechkhumi & Kvemo Svaneti offer a wonderful mix of history and unspoiled natural beauty. Visit Shaori and Udziro Lakes, marvel at the frescoes of Nikortsminda Cathedral, feel the time slowing down in Oni and Shovi, ascend to the top of Khvamli Mountain, enjoy the views of Lailashi reservoir and Tsageri panorama from Muri Fortress, and unwind in the wineries around Ambrolauri and Tvishi.",
        },
      ],
      status: true,
      description:
        "Indulge your taste buds with a guide who leads you through bustling markets and local eateries. Experience the richness of Georgian cuisine, from khachapuri to khinkali, as you uncover the culinary secrets of the region.",
    });
    server.create("guide", {
      id: 7,
      first_name: "Patrizius",
      last_name: "Ledrun",
      email: "pledrun6@sitemeter.com",
      gender: "Male",
      img: "/assets/Guide/photo-1530268729831-4b0b9e170218.avif",
      recommended: [
        {
          id: 1,
          img: [
            "/assets/location/Kaspi.jpg",
            "/assets/location/Gori.jpg",
            "/assets/location/Kareli.jpg",
            "/assets/location/Khashuri.jpg",
          ],
          title: "Popular Destinations in Shida Kartli",
          description:
            "In Shida Kartli, you can immerse yourself in the depth of Georgian history. Walk along the streets of the rock-hewn town Uplistsikhe, visit the picturesque monasteries of Dzama Valley, hike to Biisi Waterfall, and marvel at the terraced vineyards next to the fantastic Ateni’s Sioni Monastery. Taste Atenuri wine and sweet bread Nazuki in Surami. Ascend to the top of Jamjama Mountain.",
        },
        {
          id: 2,
          img: [
            "/assets/location/Stepantsminda.jpg",
            "/assets/location/Shatili.jpg",
            "/assets/location/mtskheta-gnta.webp",
            "/assets/location/gudauri-gnta.webp",
          ],
          title: "Popular Destinations in Mtskheta-Mtianeti",
          description:
            "Mtskheta-Mtianeti Region promises to be an amazing adventure for you! Challenge yourself with mountainous routes in Kazbegi, Truso, Juta and Abudelauri, try the white water rafting at Aragvi River, spend a night in a fortress-village of Shatili, and explore the mysterious abandoned Mutso fortress. Enjoy the fresh powder at the slopes of Gudauri. Feel the closeness to nature!",
        },
      ],
      status: true,
      description:
        "Immerse yourself in Georgia's vibrant art scene with a guide who showcases the country's contemporary and traditional artistic expressions. Visit galleries, street art hotspots, and engage with local artists, uncovering the creative pulse of Georgia.",
    });
    server.create("guide", {
      id: 8,
      first_name: "Jacki",
      last_name: "Chastelain",
      email: "jchastelain7@indiegogo.com",
      gender: "Male",
      img: "/assets/Guide/photo-1568602471122-7832951cc4c5.avif",
      recommended: [
        {
          id: 1,
          img: [
            "/assets/location/telavi.jpg",
            "/assets/location/Lagodekhi.jpg",
            "/assets/location/Kvareli.jpg",
            "/assets/location/sighnaghi.webp",
          ],
          title: "Popular Destinations in Kakheti",
          description:
            "Here you will see spectacular examples of Georgian church architecture, such as the cathedrals of Alaverdi, Ikalto, Shuamta, Bodbe, and Gremi. Feel the atmosphere of the towns of Telavi, Gurjaani, Kvareli, and Sighnaghi. Explore the cultural sights, dive into cellars and vineyards, have fun and let Kakheti open up its hospitable soul to you!",
        },
        {
          id: 2,
          img: [
            "/assets/location/Tsalka.jpg",
            "/assets/location/tetritskaro-gnta.webp",
            "/assets/location/bolnisi-gnta.webp",
            "/assets/location/urban-archaeology-of-dmanisi-gnta.webp",
          ],
          title: "Popular Destinations in Kvemo Kartli",
          description:
            "Kvemo Kartli is a multicultural region with a rich history, where you will find numerous archaeological sites, churches and mosques, fortresses and old German houses. One discovery of worldwide importance is Dmanisi Settlement, where the hominids used to live 1.8 million years ago. The former German colonies of Asureti and Bolnisi will offer your amazing stories and great wine, Algeti National Park will welcome you to the unspoiled nature and great views, and in the ancient site of Samshvilde, you’d feel like you are in an adventure movie.",
        },
      ],
      status: true,
      description:
        "Embark on a spiritual journey with a guide who reveals the sacred treasures of Georgian monasteries. From mountain retreats to UNESCO-listed sites, witness the architectural beauty and profound religious significance embedded in Georgia's monastic heritage.",
    });
    server.create("guide", {
      id: 9,
      first_name: "Jarred",
      last_name: "McCree",
      email: "jmccree8@imdb.com",
      gender: "Male",
      img: "/assets/Guide/photo-1573740144655-bbb6e88fb18a.avif",
      recommended: [
        {
          id: 1,
          img: [
            "/assets/location/Parks&Gardens.jpg",
            "/assets/location/FineDiningDrinking&Nightlife.jpg",
            "/assets/location/Museums.jpg",
            "/assets/location/Spas&Baths.jpg",
          ],
          title: "Experience Top Activities in Tbilisi",
          description:
            "Discover why Tbilisi has captivated visitors for centuries. Feel its unique rhythm and lively character, explore the city, and fall under its charm. Whether you're looking for adventure or relaxation, the city has something to offer every traveler. Immerse yourself in the culture of Tbilisi and create memories that will last a lifetime.",
        },
        {
          id: 2,
          img: [
            "/assets/location/Akhaltsikhe.jpg",
            "/assets/location/Borjomi.jpg",
            "/assets/location/Adigeni.jpg",
            "/assets/location/Abastumani.jpg",
          ],
          title: "Popular Destinations in Samtskhe-Javakheti",
          description:
            "Here you will find abandoned cyclopic fortresses built by ancient civilizations, along with Christian monuments with outstanding architecture and frescos. Visit the Paravani, Saghamo, and Khanchali Lakes to see amazing bird species. Feel the flow of centuries in cave city Vardzia, embrace the multiculturality in Akhaltsikhe Castle, and visit the Doukhobor villages. Hike in Borjomi-Kharagauli National Park and quench your thirst for adventure with Georgia’s most famous mineral water, Borjomi. Enjoy the fresh air and beautiful nature in Likani, Bakuriani, or Abastumani.",
        },
      ],
      status: true,
      description:
        "Escape to the countryside with a guide who introduces you to the tranquility of Georgian villages. Experience rural life, partake in local traditions, and enjoy the breathtaking landscapes that define the charm of Georgia's pastoral regions.",
    });
    server.create("guide", {
      id: 10,
      first_name: "Lemmie",
      last_name: "Weale",
      email: "lweale9@usgs.gov",
      gender: "Male",
      img: "/assets/Guide/photo-1601455763557-db1bea8a9a5a.avif",
      recommended: [
        {
          id: 1,
          img: [
            "/assets/location/kutaisi-gnta.webp",
            "/assets/location/Tskaltubo.webp",
            "/assets/location/zestaponi-gnta-m.webp",
            "/assets/location/Sachkhere.jpg",
          ],
          title: "Popular Destinations in Imereti",
          description:
            "The green heart of Georgia, Imereti is a region of rolling mountains, vineyards climbing steep hills, waterfalls and caverns, canyons and rivers. It’s the homeland of many Georgian poets and writers, and of course, it’s a region of limitless hospitality and unbelievable food. Get closer to mother nature by visiting Okatse Canyon and Kinchkha Waterfall, Sataplia and Prometheus Cave, Khani and Mukhara Waterfalls, hike to Tskhrajvari Mountain and explore nature in Sachkhere and Marelisi. Get to know the rich history and urban legends of Kutaisi, feel the industrial vibe of Zestafoni and Chiatura, and soak in the healing waters of Sairme and Tskaltubo.",
        },
        {
          id: 2,
          img: [
            "/assets/location/Kobuleti.jpg",
            "/assets/location/Sarpi.jpg",
            "/assets/location/Gonio.jpg",
            "/assets/location/Kvariati.jpg",
          ],
          title: "Popular Destinations in Adjara",
          description:
            "Ajara is a subtropical region of fantastic beauty. The four protected areas of the region are similar in their pristine wilderness and different in the variety of animal and plant species. The mountains of Ajara are hiding steep vineyards, babbling waterfalls and lakes, old fortresses and cute wooden houses standing on high “legs”. Visit the mountains of Beshumi, Goderdzi and Gomarduli to find calmness and peace, and have fun at the seaside resorts of Batumi, Kvariati, Gonio, Sarpi and Mtsvane Kontskhi.",
        },
      ],
      status: true,
      description:
        "Embark on a culinary odyssey with a guide who navigates you through the diverse flavors of Georgia's regional cuisines. From Svaneti to Kakheti, savor unique dishes and learn about the cultural significance of Georgian gastronomy.",
    });
    server.create("guide", {
      id: 11,
      first_name: "Karoly",
      last_name: "Audritt",
      email: "kaudritta@tumblr.com",
      gender: "Male",
      img: "/assets/Guide/photo-1603415526960-f7e0328c63b1.avif",
      recommended: [
        {
          id: 1,
          img: [
            "/assets/location/mestia.jpg",
            "/assets/location/Zugdidi-town-center.jpg",
            "/assets/location/martvili.jpg",
            "/assets/location/ushguli-gnta.webp",
          ],
          title: "Popular Destinations in Samegrelo-Zemo Svaneti",
          description:
            "Tucked in the lush greenery, with proud Greater Caucasus Mountains in the background, Samegrelo and Zemo Svaneti Regions have amazing experiences to offer. Challenge yourself with a hike to Tobavarchkhili Lake, enjoy the natural diversity in the protected areas of Martvili Canyon and Paliastomi Lake, raise a glass of Ojaleshi wine from Salkhino, looking at the sunset from Anaklia Bridge. Ski from the pristine slopes of Tetnuldi and Hatsvali, and get to know the local traditions in Zugdidi, Mestia and Ushguli.",
        },
        {
          id: 2,
          img: [
            "/assets/location/Tsageri.jpg",
            "/assets/location/Shovi.jpg",
            "/assets/location/oni-gnta.webp",
            "/assets/location/ambrolauri-gnta.webp",
          ],
          title: "Destinations in Racha-Lechkhumi & Kvemo Svaneti",
          description:
            "The historical regions Racha-Lechkhumi & Kvemo Svaneti offer a wonderful mix of history and unspoiled natural beauty. Visit Shaori and Udziro Lakes, marvel at the frescoes of Nikortsminda Cathedral, feel the time slowing down in Oni and Shovi, ascend to the top of Khvamli Mountain, enjoy the views of Lailashi reservoir and Tsageri panorama from Muri Fortress, and unwind in the wineries around Ambrolauri and Tvishi.",
        },
      ],

      status: true,
      description:
        "Discover the 'Balcony of Europe' – Borjomi – with a guide who leads you through lush landscapes, mineral springs, and the historical heart of this spa town. Uncover the rejuvenating secrets and cultural significance of this Georgian gem.",
    });
    server.create("guide", {
      id: 12,
      first_name: "Gwendolin",
      last_name: "Ruffler",
      email: "grufflerb@shop-pro.jp",
      gender: "Female",
      img: "/assets/Guide/photo-1522228115018-d838bcce5c3a.avif",
      recommended: [
        {
          id: 1,
          link: "mtskheta-mtianeti",
          img: [
            "/assets/location/Kaspi.jpg",
            "/assets/location/Gori.jpg",
            "/assets/location/Kareli.jpg",
            "/assets/location/Khashuri.jpg",
          ],
          title: "Popular Destinations in Shida Kartli",
          description:
            "In Shida Kartli, you can immerse yourself in the depth of Georgian history. Walk along the streets of the rock-hewn town Uplistsikhe, visit the picturesque monasteries of Dzama Valley, hike to Biisi Waterfall, and marvel at the terraced vineyards next to the fantastic Ateni’s Sioni Monastery. Taste Atenuri wine and sweet bread Nazuki in Surami. Ascend to the top of Jamjama Mountain.",
        },
        {
          id: 2,
          link: "mtskheta-mtianeti",
          img: [
            "/assets/location/Stepantsminda.jpg",
            "/assets/location/Shatili.jpg",
            "/assets/location/mtskheta-gnta.webp",
            "/assets/location/gudauri-gnta.webp",
          ],
          title: "Popular Destinations in Mtskheta-Mtianeti",
          description:
            "Mtskheta-Mtianeti Region promises to be an amazing adventure for you! Challenge yourself with mountainous routes in Kazbegi, Truso, Juta and Abudelauri, try the white water rafting at Aragvi River, spend a night in a fortress-village of Shatili, and explore the mysterious abandoned Mutso fortress. Enjoy the fresh powder at the slopes of Gudauri. Feel the closeness to nature!",
        },
      ],
      status: false,
      description:
        "Journey through Mtskheta with a guide who unveils the spiritual and historical significance of Svetitskhoveli Cathedral. Explore the UNESCO World Heritage Site, learn about its legends, and witness the architectural grandeur of this iconic Georgian landmark.",
    });
    server.create("guide", {
      id: 13,
      first_name: "Donna",
      last_name: "Borell",
      email: "dborellc@istockphoto.com",
      gender: "Female",
      img: "/assets/Guide/photo-1532074205216-d0e1f4b87368.avif",
      recommended: [
        {
          id: 1,
          link: "kakheti",
          img: [
            "/assets/location/telavi.jpg",
            "/assets/location/Lagodekhi.jpg",
            "/assets/location/Kvareli.jpg",
            "/assets/location/sighnaghi.webp",
          ],
          title: "Popular Destinations in Kakheti",
          description:
            "Here you will see spectacular examples of Georgian church architecture, such as the cathedrals of Alaverdi, Ikalto, Shuamta, Bodbe, and Gremi. Feel the atmosphere of the towns of Telavi, Gurjaani, Kvareli, and Sighnaghi. Explore the cultural sights, dive into cellars and vineyards, have fun and let Kakheti open up its hospitable soul to you!",
        },
        {
          id: 2,
          link: "kvemo-kartli",
          img: [
            "/assets/location/Tsalka.jpg",
            "/assets/location/tetritskaro-gnta.webp",
            "/assets/location/bolnisi-gnta.webp",
            "/assets/location/urban-archaeology-of-dmanisi-gnta.webp",
          ],
          title: "Popular Destinations in Kvemo Kartli",
          description:
            "Kvemo Kartli is a multicultural region with a rich history, where you will find numerous archaeological sites, churches and mosques, fortresses and old German houses. One discovery of worldwide importance is Dmanisi Settlement, where the hominids used to live 1.8 million years ago. The former German colonies of Asureti and Bolnisi will offer your amazing stories and great wine, Algeti National Park will welcome you to the unspoiled nature and great views, and in the ancient site of Samshvilde, you’d feel like you are in an adventure movie.",
        },
      ],
      status: false,
      description:
        "Unearth the mysteries of Vardzia with a guide who navigates you through this ancient cave city. Marvel at the rock-hewn architecture, delve into the history of medieval Georgia, and witness the cultural legacy preserved within Vardzia's labyrinthine chambers.",
    });
    server.create("guide", {
      id: 14,
      first_name: "Evangelina",
      last_name: "Slott",
      email: "eslottd@wikimedia.org",
      gender: "Female",
      img: "/assets/Guide/photo-1586297135537-94bc9ba060aa.avif",
      recommended: [
        {
          id: 1,
          link: "tbilisi",
          img: [
            "/assets/location/Parks&Gardens.jpg",
            "/assets/location/FineDiningDrinking&Nightlife.jpg",
            "/assets/location/Museums.jpg",
            "/assets/location/Spas&Baths.jpg",
          ],
          title: "Experience Top Activities in Tbilisi",
          description:
            "Discover why Tbilisi has captivated visitors for centuries. Feel its unique rhythm and lively character, explore the city, and fall under its charm. Whether you're looking for adventure or relaxation, the city has something to offer every traveler. Immerse yourself in the culture of Tbilisi and create memories that will last a lifetime.",
        },
        {
          id: 2,
          link: "samtskhe-javakheti",
          img: [
            "/assets/location/Akhaltsikhe.jpg",
            "/assets/location/Borjomi.jpg",
            "/assets/location/Adigeni.jpg",
            "/assets/location/Abastumani.jpg",
          ],
          title: "Popular Destinations in Samtskhe-Javakheti",
          description:
            "Here you will find abandoned cyclopic fortresses built by ancient civilizations, along with Christian monuments with outstanding architecture and frescos. Visit the Paravani, Saghamo, and Khanchali Lakes to see amazing bird species. Feel the flow of centuries in cave city Vardzia, embrace the multiculturality in Akhaltsikhe Castle, and visit the Doukhobor villages. Hike in Borjomi-Kharagauli National Park and quench your thirst for adventure with Georgia’s most famous mineral water, Borjomi. Enjoy the fresh air and beautiful nature in Likani, Bakuriani, or Abastumani.",
        },
      ],
      status: false,
      description:
        "Step back in time with a guide who illuminates the wonders of Uplistsikhe, Georgia's rock-hewn town. Explore the ancient streets, chambers, and theaters carved into the rock, uncovering the historical significance of this archaeological marvel.",
    });
    server.create("guide", {
      id: 15,
      first_name: "Erl",
      last_name: "Reuss",
      email: "ereusse@sbwire.com",
      gender: "Male",
      img: "/assets/Guide/photo-1619895862022-09114b41f16f.avif",
      recommended: [
        {
          id: 1,
          link: "imereti",
          img: [
            "/assets/location/kutaisi-gnta.webp",
            "/assets/location/Tskaltubo.webp",
            "/assets/location/zestaponi-gnta-m.webp",
            "/assets/location/Sachkhere.jpg",
          ],
          title: "Popular Destinations in Imereti",
          description:
            "The green heart of Georgia, Imereti is a region of rolling mountains, vineyards climbing steep hills, waterfalls and caverns, canyons and rivers. It’s the homeland of many Georgian poets and writers, and of course, it’s a region of limitless hospitality and unbelievable food. Get closer to mother nature by visiting Okatse Canyon and Kinchkha Waterfall, Sataplia and Prometheus Cave, Khani and Mukhara Waterfalls, hike to Tskhrajvari Mountain and explore nature in Sachkhere and Marelisi. Get to know the rich history and urban legends of Kutaisi, feel the industrial vibe of Zestafoni and Chiatura, and soak in the healing waters of Sairme and Tskaltubo.",
        },
        {
          id: 2,
          link: "adjara",
          img: [
            "/assets/location/Kobuleti.jpg",
            "/assets/location/Sarpi.jpg",
            "/assets/location/Gonio.jpg",
            "/assets/location/Kvariati.jpg",
          ],
          title: "Popular Destinations in Adjara",
          description:
            "Ajara is a subtropical region of fantastic beauty. The four protected areas of the region are similar in their pristine wilderness and different in the variety of animal and plant species. The mountains of Ajara are hiding steep vineyards, babbling waterfalls and lakes, old fortresses and cute wooden houses standing on high “legs”. Visit the mountains of Beshumi, Goderdzi and Gomarduli to find calmness and peace, and have fun at the seaside resorts of Batumi, Kvariati, Gonio, Sarpi and Mtsvane Kontskhi.",
        },
      ],
      status: false,
      description:
        "Traverse the crossroads of cultures with a guide who leads you through Georgia's diverse heritage. From Silk Road influences to modern-day intersections, discover the cultural tapestry that defines Georgia's unique identity at the crossroads of Europe and Asia.",
    });

    server.create("map", {
      id: "GEO3015",
      name: "Abkhazia",
      d: "M323.6 74.5l-2.1 4.8-1.7 5.3 0.6 5.8 0.1 5.7-2.1 5.8-3 4.9-3.4 3.9-2.9 4.7-7.7 3.3-14.5 2.7-3.5 4.6 2.7 3.4 1.2 4.3 0.8 4.7 1.5 4.4 0.7 4.4-2.3 3.1-1.8 1.2-1.6 1.7-0.1 2.2 1.1 1.9 1.5 9.3-0.2 5.3 0.6 4.9 4.2 7.2 1 8.8-1.3 3.6-2.6 1.7-3.1 2.5-2.6 3.7-11.7 11.4-13.3 7.8-7.3 2.5-5.4 6.7-5.6 3.5-6 2.9-7.5-47.3-2.6-8-3.8-6.8-4.9-5.3-6.1-3.5-11.3-2.1-2.5-1.4-2.4-2.2-3.6-2-3.7-1.5-3-0.4-1.7 0.5-3 1.9-1.9 0.3-1.6-0.9-6.8-10.4-3.4-12.5-6.2-10.8-2.5-5.8-3.7 0.1-5.9 2.6-3.7-1.3-4.4-6.8-2.6-1.6-0.1-1-3.5-6.1-1-0.8-10.8-4.3-14.9-2.1-7 0.4-4.8 1.2-1.8 0.2-1.7-0.7-2.9-2.9-2.2-1.2-2.5-2.7-2.8-1.6-4.7-0.8-12-5.8-5.5-0.6-3.9 5-1.5-1.6-2.2-5.5-1.3-2.7-3.4-3.4-1.5-2.2 0.7-6.5-2.4-6-3.2-5.5-2.4-3-4.6-2.2-8.2-2.4-4.7-4.9-2.2-1-6.8-1.1-4.7-2-3.5-0.7 0.8-3.6 10.1-26.4 2-3.3 3.6-2.4 10-2.7 10.3 0 36.7 13.8 5.9 0.7 4.6-1.2 9.7-5.1 5.4-0.6 4.3 2.2 8.8 6.8 15.2 5.3 4.8 2.8 20.4 16.4 4.6 1.2 15.5-2.1 5 1.1 4.8 2.4 4.6 3.8 5.2 2.3 10.7-2.1 4.5 1.8 1.3 2 2.1 4.8 1.4 2.1 2.2 1.6 7.7 2.5 3.9 2.3 6.6 6.9 4.1 2.2 5.4 0.5 10.9-1.5 5.4 0.6 9.7 2.8 4.7 0.5 10.3-1.2 4.4 0.2 4.3 1.2 4.7 2.3 4.7 1.4 4.8 0.3 4.7-1 11.8-6.5z",
    });
    server.create("map", {
      id: "GEO3027",
      name: "Ajara",
      link: "ajara",
      d: "M372.3 361.1l2.1 6.2-0.2 6.9-1.7 2.7-0.3 3.7 1 2.9 1.4 2.5 3.9 3.6 3.5 4.1 4.4 7 1.5 4.2-3.2 2.4-1.5 3.3-1.4 8.1-1.5 3.3-3.3 3.4-4.4 6.8-3.1 2-3.8 0.2-26.1-10.2-7.3 0.4-3.5-0.3-2.5-2.3-2.1-1.3-2.3-0.1-4.7 1.4-2.1-1-2.1-0.4-2.1 0.3-2.1 1.1-5.3 1.6-10.6-4.1-6 2.5-2.1 1.5-4.6 6.7-6 5.2-1.4 0.8-1.8-0.8-5.9-5.5-2-0.7-4.4-0.5-1.7-0.7-0.6-1.3 0.2-3.1-1.4-0.8-3.7 1.7-4.5 0.4-1.8-0.4-15.9-6.7 9.8-17.6 4.3-5.9 9-5.9 2.5-6 7-11.5 0.6-5.8 0.9-1.7 2.4-3.4 1.2-3.5 0-16.2 19.4 1 6.2 3.7 0.8 4.2 7.3 3.1 4.7 2.7 4.6 3.6 1.9-0.3 3.9-1.5 7.2-0.9 7.4 4.1 4.4 1.1 10.8-1.7 7.9-5 4.1-1.3 3.3 0.8 5.7 5.9 1.9 1 3.8 0.3z",
      img: "/assets/Guide/Ajara.jpg",
    });
    server.create("map", {
      id: "GEO3029",
      name: "Samegrelo-Zemo Svaneti",
      link: "samegrelo-zemo-svaneti",
      d: "M475.4 132.2l-4.8 1.9-5.1 7.2-3.3 3.1-0.4 6.4-2.7 4.2-4.1-0.7-9.3-3.6-10.8 1.4-16.1-7.3-2 1-1.8 1.5-4 1.8-8.7-0.3-21.1-5.2-3.7-1.7-3.7-0.1-1.9 3.4-1.5 3.7-1.6 1.3-1.8 0.4-5.6 0.4-4.7 2.7-3.6 7 8.1 7.1 16.7 9.5 6.7 7-3.9 8.4 11.3 22.7-2.9 0.1-2.7 0.8-7.4 0.5-4.6 4.6-2.2 7-2.3 2-1.5 3.1-0.1 5.9-2 4.8-10.4 12.1-6.5 10.7-1.7 5.2-2.8 3.3-1.5 8.4 0.2 10.5-3 6.3-5.9 0.6-7.9-3.9-9.5-1.3-7.5-5-8.3-2.1-18.4 3.1-9.6 0.4-9.3 1.7-2.1 5.6-0.6 3.9-3.3 5.2-4.5-7.9-3.1-3-0.7-3.8-0.3-6.9-1.2-9.1-7.9-27.6-1.6-2.7-4-4-1.1-4.8 6-2.9 5.6-3.5 5.4-6.7 7.3-2.5 13.3-7.8 11.7-11.4 2.6-3.7 3.1-2.5 2.6-1.7 1.3-3.6-1-8.8-4.2-7.2-0.6-4.9 0.2-5.3-1.5-9.3-1.1-1.9 0.1-2.2 1.6-1.7 1.8-1.2 2.3-3.1-0.7-4.4-1.5-4.4-0.8-4.7-1.2-4.3-2.7-3.4 3.5-4.6 14.5-2.7 7.7-3.3 2.9-4.7 3.4-3.9 3-4.9 2.1-5.8-0.1-5.7-0.6-5.8 1.7-5.3 2.1-4.8 4.6-1.7 25.1-2.1 10.2 1.4 8.5 5.7 3.9 4 4.3 3.4 9 5.1 2.9 0.6 2.1-0.9 4-3.8 2.6-1.2 4.7-0.1 6.9-2.2 5.9 0.2 5.7 1.5 4.2 2.7 4.2 4 4.3 2.9 12.7 4.7 0 2.7-1.1 3.4-0.5 3.3 1.4 2.1 7.3 5.2 16 15.2 2.9 1.6z",
      img: "/assets/Guide/svaneti.jpg",
    });
    server.create("map", {
      id: "GEO3028",
      name: "Guria",
      link: "guria",
      d: "M334.7 301.3l-3.4 5.3 3.6 5.3 7.3 1.3 2.8 0.8 2.4-0.8 4.6-2.9 5.3 1.3 2.9 4.7 1.9 5.9 4.3 2.6 5.3 1.6 3.8 2.8 4.1 2.1 2.9 1.7 2.9 1.5 4.8-0.4 4.5 1.3 2.2 8.7 0.3 10.1-3.8 0.1-3.3 2.2-1.3 3.6-2.5 2-3.4-0.6-3.3-1.2-7.3 0.8-3.8-0.3-1.9-1-5.7-5.9-3.3-0.8-4.1 1.3-7.9 5-10.8 1.7-4.4-1.1-7.4-4.1-7.2 0.9-3.9 1.5-1.9 0.3-4.6-3.6-4.7-2.7-7.3-3.1-0.8-4.2-6.2-3.7-19.4-1 0-0.8-1.8-12.6-0.3-4.6-0.6-2.7-6.1-10.7 3.3-5.2 0.6-3.9 2.1-5.6 9.3-1.7 9.6-0.4 18.4-3.1 8.3 2.1 7.5 5 9.5 1.3 7.9 3.9z",
      img: "/assets/Guide/Guria.jpg",
    });
    server.create("map", {
      id: "GEO3030",
      name: "Imereti",
      link: "imereti",
      d: "M536.8 241.5l5.2 3.2 5.8 0.9 4.3-1 4.1-2.3 4.8-0.7 3.3 4.1-1.7 6.5-0.2 6.6-11.4 3.1-10 7.2-1.2 5.9 0.9 6.4-0.9 5.3-4 3.8-2 5.8-2.8 5.2-4.8 3.7-4.1 4.1-0.6 8.5-2.3 7.2-5.4 4.8-1 7.7-44.5 18.3-2.5-0.4-2.5-0.9-15.3 1.3-6.4 2.7-6.7-0.1-12.8-2.7-15.7 4-9.2-5.5-0.3-10.1-2.2-8.7-4.5-1.3-4.8 0.4-2.9-1.5-2.9-1.7-4.1-2.1-3.8-2.8-5.3-1.6-4.3-2.6-1.9-5.9-2.9-4.7-5.3-1.3-4.6 2.9-2.4 0.8-2.8-0.8-7.3-1.3-3.6-5.3 3.4-5.3 5.9-0.6 3-6.3-0.2-10.5 1.5-8.4 2.8-3.3 1.7-5.2 6.5-10.7 10.4-12.1 2-4.8 0.1-5.9 1.5-3.1 2.3-2 2.2-7 4.6-4.6 7.4-0.5 2.7-0.8 2.9-0.1 1.3 4.6 0 5.1 1.2 3.9 0.1 4.3 15.9-5.4 3.8 1.6 3.9 0.3 3.3-3.3 3.7-0.2 8.2 5.3 7.5 7.1 1.9 6.3 3.7 3 3.2 0.6 7.1 4 10.7-1 6.2-2.6 5.3-5.3 14.1-7.4 15.8 1.7 15.1-1.2 12.8 4.7z",
      img: "/assets/Guide/Imereti.jpg",
    });
    server.create("map", {
      id: "GEO3033",
      name: "Kakheti",
      link: "kakheti",
      d: "M796.4 431.7l-0.4-3.4-2.2-4.9-1.1-5-2.7-4-4.7-1.3-4.8-0.3-2.6-1.8-1.1-3.9-0.8-5.4 5.1-11.8-2.9-10.7-1.1-6.4-2.6-5.3-5.7-0.7-4.9-3.6-3.3-5.4-3.9-4.4-2-5.9-4.6-2.8 3.9-4.4 4.5-2.7 8.1 5.3 12-1.7-5.4-6.5-7.3-1.9-3.5-0.3-3.4-1.2-1.4-6.2 2.3-5.5-2.6-6.3-0.5-5.7-1.7-7.7 2-4.7 2.3-11.5 2.8-4.5 3.1-10.2 3.6-4.6 3.9-3.5 3.1-0.5 2.9-1.1 1.3-7.8-1.9-8 1.5-4.8 3.3-2.9 2.3-5.2-0.5-6.1 2.1-9.2 4.8-7.2 1.7 3.7 1.5 2.4 4.9 2 6.4-0.9 12-3.6 8.5 0.2 12.5 2.2 11.6 4.6 6.1 7.3-0.5 4.8-17.1 45 1.5 4.7 4.5 2.9 6 2.8 16.3 11.5 10.4 2.7 2 2 4.3 10.5 1.5 2.2 2 1.1 2.8 0.2 3.1-2 2.2 0.2 3.7 2.9 4.7-0.7 1.5 1 1 4.3 3.6 1.7 4.6 0.1 8.7-1.8 3.9-0.4 1.4 0.4 3.9 3.2 6.5 7.8 4.2 2 8.9 0.7 3.6 2.1 3.6 4.9-5.6 11.7-3.2 5.2-6.4 7.9-2.2 1.9-2.4 1.2-3.1 0.3-6.9-1.6-3.3 0.3-2.8 3.1-1.5 6.9 0.1 10.1 1.9 8.9 4 3.4 1.3-1.1 1.8-3.3 2-0.1 0.3 1.1 3.4 6.4 1.4 9.2 1.3 4.3 2.5 3.3 7.8 5.4 1.8 0.8 3 0.8 7 6.5 14.4 6.1 7.3 4.4 2.4 5.5 2.3-0.9 1.2 0.8 1 1.7 2.9 3.3 4.7 7.2 0.9 2.9-1.7 0-1.3 1.6-0.5 5-1.1 2.5-2.9 3.1-1.4 5.3-0.8 6.8-1.3 6.4-2.8 4-3 0.5-2.8-0.8-2.9-0.3-3.1 2-1.7 3.2-0.9 3.1-1.3 2.1-3.2 0.1-2.7-1.6-4.1-5.7-2.5-2.1-8.8-2.9-3.1-1.9-8.8-8-4.3-5.4-2.4-2.3-2.6-1-11.2 0.1-3.3 0.8-7.7 4.9-3 1.1-3.6 0.3-7.1-0.8-22.1-8.1-10.4-6.3-6.1-5.3-3.6-5.7 3.3-4.1 3.4-1.2 2.2-1.2-0.2-1.2-3.5-1.4-9.7-2-21.4-8.4-4.8-4.6-2.2-2.5-2.2-0.4-4.9 1.5-3 0.3-2.3-0.5-7.2-3.7z",
      img: "/assets/Guide/kakheti.jpg",
    });
    server.create("map", {
      id: "GEO3034",
      name: "Mtskheta-Mtianeti",
      link: "mtskheta-mtianeti",
      d: "M791.7 208.1l-4.8 7.2-2.1 9.2 0.5 6.1-2.3 5.2-3.3 2.9-1.5 4.8 1.9 8-1.3 7.8-2.9 1.1-3.1 0.5-3.9 3.5-3.6 4.6-3.1 10.2-2.8 4.5-2.3 11.5-2 4.7 1.7 7.7 0.5 5.7 2.6 6.3-2.3 5.5 1.4 6.2 3.4 1.2 3.5 0.3 7.3 1.9 5.4 6.5-12 1.7-8.1-5.3-4.5 2.7-3.9 4.4 4.6 2.8 2 5.9-7.4 0.4-7.5-1.8-3.2 1.3-2.5 3.7-1.8 5.6-3.5 4.3-9.1-4.8-3.8-0.3-2.3 4.1-4.2 2.7-4.3-0.1-3 6.8-2.9 1.2-1.8 3.2-7.8 4-7-6.3-7-5-8.2-1.1 0-5.2 2.9-3.4-0.5-7.7 4.1-4 5.5-0.2 2-5.7-4-6.3-4.9-5.8-1.2-7.2-1.8-6.2-5.2-2.9-10.6-2.4-5.1-0.2-4.3 3.3-4.4 4-0.7-5.1-4.1-2.3-0.6-3.3 1.3-4 0.3-10.3 2.3-9.8 3.7-2.9 2.3-5.1 3.1-2.4 2.6-3.5-1.2-6.3-2.5-5.3 0.5-6.4-0.3-6-2.1-2.8-2-2-0.6-3.1-0.4-3.2-1-2.1-1.7-1 2.3-7.2 4.8-6-2.3-3.3-2.6-2.3-5-8.9-7-1.9-3.1-4.2-2.1-6 1.7-0.6 4.9-5 2.7-5.7 3.5-4.1 13.2-0.3 6-2 11.6-6.2 4.3-1.2 7.5-0.6 6.3 0.8 6.2 2 5.5 3.2 2.3 1.9 4.4 4.7 1.8 2.7 3.6 11.8 1.9 2 1.3-1.5 2.4-11.1 4.3-9.4 0.9-3.2 3.9-5.2 6.4 1.3 16.3 11.7 2.6 1.3 2.7 0.6 2.8-0.5 5.5-2.4 2.9-0.4 4.8 1.8 4.3 3.8 14.6 17.9 2.8 5.3z",
      img: "/assets/Guide/Mtskheta Mtianeti.jpg",
    });
    server.create("map", {
      id: "GEO3035",
      name: "Racha-Lechkhumi-Kvemo Svaneti",
      link: "racha-lechkumi-kvemo-svaneti",
      d: "M584.5 206.8l-0.9 10.3-7.9 5.7-3.3 5.9-2.8 1.3-20.7 1.7-12.1 9.8-12.8-4.7-15.1 1.2-15.8-1.7-14.1 7.4-5.3 5.3-6.2 2.6-10.7 1-7.1-4-3.2-0.6-3.7-3-1.9-6.3-7.5-7.1-8.2-5.3-3.7 0.2-3.3 3.3-3.9-0.3-3.8-1.6-15.9 5.4-0.1-4.3-1.2-3.9 0-5.1-1.3-4.6-11.3-22.7 3.9-8.4-6.7-7-16.7-9.5-8.1-7.1 3.6-7 4.7-2.7 5.6-0.4 1.8-0.4 1.6-1.3 1.5-3.7 1.9-3.4 3.7 0.1 3.7 1.7 21.1 5.2 8.7 0.3 4-1.8 1.8-1.5 2-1 16.1 7.3 10.8-1.4 9.3 3.6 4.1 0.7 2.7-4.2 0.4-6.4 3.3-3.1 5.1-7.2 4.8-1.9 2.9 1.5 42.4 12.1 5.6 1.4 10.3 5.1 2.5 2.2 6.1 7.3 2.8 1.8 13.8 3.4 6.7 3.4 1.6 5.9-3.4 4.9-5.2 3.7-4.2 4.1-0.4 6 4.2 5.3 6.7 1.8 7.3 0.5 6 1.6 3.4 2.6z",
      img: "/assets/Guide/RachaLeChxumi Kvemo Svaneti.jpg",
    });
    server.create("map", {
      id: "GEO3036",
      name: "Tbilisi",
      link: "tbilisi",
      d: "M730.8 366.9l-4.3 4.2-0.4 3.4 2.9 2.7 1 3.5 0.7 3.4 2.3 2.1 2.6 1.3 3.5 0.9 3.4-0.9 1.9-2.8 2.4-1.9 1.5 4.9-4.3 6.2-5.6 1.9-5.7-0.4-4.3-2.1-3.6-0.9-3.7-0.3-12.1-6.3-4.4 0.2-2.1-2.7-0.4-2.8-2.7-0.8 1.8-3.2 2.9-1.2 3-6.8 4.3 0.1 4.2-2.7 2.3-4.1 3.8 0.3 9.1 4.8z",
      img: "/assets/Guide/Tbilisi.jpg",
    });
    server.create("map", {
      id: "GEO3037",
      name: "Kvemo Kartli",
      link: "kvemo-kartli",
      d: "M756.7 353.4l3.9 4.4 3.3 5.4 4.9 3.6 5.7 0.7 2.6 5.3 1.1 6.4 2.9 10.7-5.1 11.8 0.8 5.4 1.1 3.9 2.6 1.8 4.8 0.3 4.7 1.3 2.7 4 1.1 5 2.2 4.9 0.4 3.4-2.7-1.4-4.9-0.3-4.8 1.7-36.8 30.6-1.8 1.1-3.4 3.1-1.8 1.3-5.6 0.1-14.4-2.2-2.9 2.9 1.3 2.8 5.5 2.7 1.6 2.2-1.5 2.1-3.9 0.5-21.8-0.4-6.2-2.5-3-0.4-3.2 1.5-1.9 2.5-1.8 3.2-2.2 1.9-3.1-0.9-2.1-5-1.6 0.1-4 4.1-3.6 1-3.3-0.2-3.3-1.2-7.9-4.8-1.9-0.2-1.7 0.5-3.7 3.3-3.5 0.6-2.7-1.1-7.2-5-4.1-1.7-1.6 0.1-1.7 1.2-0.5 3.2-0.8 1.9-2.3 2.3-2.9 1.6-3.2 0.6-6.3-1.8-2.9 0.3-6 2.7-3.4 0.9-1.6-10.3-1.6-3.2-1.9-2.8-1.1-8.8 2.2-8.7-0.6-4.3-1.6-3.8-3.1-2-1.1-4.5-0.1-4.4-0.4-4.3-0.6-2.7-1.4-1.2-2.7-5.7-3.9-4.2-7.1-0.4-7.1 1.8-6.6 0.3-5.2-1 1-3.2 2.1-1.7 1.6-4.9 0.9-19.9 3.4-6.2 6.6 1.1 8.9-0.4 7.3-7.8 34.4 3.4 4.6-1.5 4.7-0.8 7 1.7 7.2-1.3 9-4.3 2.7 1.3 2.4 2.9 3.4 1.4 10.4-0.3 2.4-5.2 8.2 1.1 7 5 7 6.3 7.8-4 2.7 0.8 0.4 2.8 2.1 2.7 4.4-0.2 12.1 6.3 3.7 0.3 3.6 0.9 4.3 2.1 5.7 0.4 5.6-1.9 4.3-6.2-1.5-4.9-2.4 1.9-1.9 2.8-3.4 0.9-3.5-0.9-2.6-1.3-2.3-2.1-0.7-3.4-1-3.5-2.9-2.7 0.4-3.4 4.3-4.2 3.5-4.3 1.8-5.6 2.5-3.7 3.2-1.3 7.5 1.8 7.4-0.4z",
      img: "/assets/Guide/Kvemo Kartli.jpg",
    });
    server.create("map", {
      id: "GEO3038",
      name: "Samtskhe-Javakheti",
      link: "samtskhe-javakheti",
      d: "M581.2 374l-7.3 7.8-8.9 0.4-6.6-1.1-3.4 6.2-0.9 19.9-1.6 4.9-2.1 1.7-1 3.2 5.2 1 6.6-0.3 7.1-1.8 7.1 0.4 3.9 4.2 2.7 5.7 1.4 1.2 0.6 2.7 0.4 4.3 0.1 4.4 1.1 4.5 3.1 2 1.6 3.8 0.6 4.3-2.2 8.7 1.1 8.8 1.9 2.8 1.6 3.2 1.6 10.3-3.3 0.8-13.8 0.3-6.4 2.7-6.9 6.1-2.9 1.2-3.7 0.3-24.2-3.4-6.4 0.2-8 3.3-1.5 0.4-2.9-0.4 1.7-5.2-2.1-4.7-4.1-3.7-4-2.4-4.7-1.3-4.3 0.3-13.7 3.9-2.2-1.6-3.5-8.8-3-3.4-3-0.4-3.3 0.4-4-1.3 8.1-4.1 2.1-1.9 2-2.9-0.2-1-4.3-0.6-4.6-2.2-7.2-6.3-10.9-7.5-2.2-2.4-4.4-8.4-2.5-1.9-2.2-2.5-4.4-1.5-1.2-0.7-1.2-2.2-0.8-2.5-1.1-1.3-2 1.3-3.6 4.2-2.8-0.9-2.9-3.1-3.8-2.3 1.3-2 2.9-2.5 1.2-1.4 1.4-5.8 1.2-1.8-2.8-1.4-20.9-1.8-7.5 0.6-3.5 1.2-1.5-4.2-4.4-7-3.5-4.1-3.9-3.6-1.4-2.5-1-2.9 0.3-3.7 1.7-2.7 0.2-6.9-2.1-6.2 7.3-0.8 3.3 1.2 3.4 0.6 2.5-2 1.3-3.6 3.3-2.2 3.8-0.1 9.2 5.5 15.7-4 12.8 2.7 6.7 0.1 6.4-2.7 15.3-1.3 2.5 0.9 2.5 0.4 44.5-18.3 4.1-0.2 9.7 2.3 5.2 2.5 1.4 2.8 0.8 3.2 2 1.7 1.5 2.3 5.1 4.4 4.6 0.8 2.2 5.3 4.8 1.8 5.1 3 5.6-0.9 10-0.1 6.3 7.6z",
      img: "/assets/Guide/Samcxe Javaxeti.jpg",
    });
    server.create("map", {
      id: "GEO3039",
      name: "Shida Kartli",
      link: "shida-kartli",
      d: "M669.4 371.3l-2.4 5.2-10.4 0.3-3.4-1.4-2.4-2.9-2.7-1.3-9 4.3-7.2 1.3-7-1.7-4.7 0.8-4.6 1.5-34.4-3.4-6.3-7.6-10 0.1-5.6 0.9-5.1-3-4.8-1.8-2.2-5.3-4.6-0.8-5.1-4.4-1.5-2.3-2-1.7-0.8-3.2-1.4-2.8-5.2-2.5-9.7-2.3-4.1 0.2 1-7.7 5.4-4.8 2.3-7.2 0.6-8.5 4.1-4.1 4.8-3.7 2.8-5.2 2-5.8 4-3.8 0.9-5.3-0.9-6.4 1.2-5.9 10-7.2 11.4-3.1 0.2-6.6 1.7-6.5-3.3-4.1-4.8 0.7-4.1 2.3-4.3 1-5.8-0.9-5.2-3.2 12.1-9.8 20.7-1.7 2.8-1.3 3.3-5.9 7.9-5.7 0.9-10.3 1.8 1.5 2.9 1.4 2.7-0.5 2.2-1.9 3.7-5.1 2-2.2 6.5-3.1 14.3-0.7 5.2-1.5 2.1 6 3.1 4.2 7 1.9 5 8.9 2.6 2.3 2.3 3.3-4.8 6-2.3 7.2 1.7 1 1 2.1 0.4 3.2 0.6 3.1 2 2 2.1 2.8 0.3 6-0.5 6.4 2.5 5.3 1.2 6.3-2.6 3.5-3.1 2.4-2.3 5.1-3.7 2.9-2.3 9.8-0.3 10.3-1.3 4 0.6 3.3 4.1 2.3 0.7 5.1 4.4-4 4.3-3.3 5.1 0.2 10.6 2.4 5.2 2.9 1.8 6.2 1.2 7.2 4.9 5.8 4 6.3-2 5.7-5.5 0.2-4.1 4 0.5 7.7-2.9 3.4 0 5.2z",
      img: "/assets/Guide/Shida Kartli.jpg",
    });
    server.create("season", {
      spring: [
        {
          id: 1,
          title: "Blooming Beauty: Springtime Explorations in Georgia",
          description:
            " As nature awakens, Georgia welcomes spring with vibrant colors. Explore Tbilisi`s historic charm, Mtskheta`s ancient churches, Kakheti`s wine country, and Batumi`s coastal allure.",
          firstPlace: [
            {
              id: 1,
              title: "Tbilisi",
              img: "/assets/location/tbilisi-capital-of-georgia-country.webp",
              link: "tbilisi",
            },
          ],
          secondPlace: [
            {
              id: 2,
              title: "Mtskheta",
              img: "/assets/location/mtskheta-svetitskhoveli.webp",
              link: "kvemo-kartli",
            },
          ],
          thirdPlace: [
            {
              id: 3,
              title: "Kakheti",
              img: "/assets/location/kakheti-gnta.webp",
              link: "kakheti",
            },
          ],
          fourthPlace: [
            {
              id: 4,
              title: "Batumi",
              img: "/assets/location/batumi-gnta (1).webp",
              link: "ajara",
            },
          ],
        },
      ],
      summer: [
        {
          id: 2,
          title: "Summer Serenity: Embrace Georgia's Season of Sunshine",
          description:
            " Enjoy Georgia's warm summer exploring Svaneti's majestic mountains, adventure in Gudauri, delve into Uplistsikhe's ancient ruins, and experience Borjomi's natural wonders.",
          firstPlace: [
            {
              id: 1,
              title: "Svaneti Region",
              img: "/assets/location/Svaneti-towers.jpg",
              link: "samegrelo-zemo-svaneti",
            },
          ],
          secondPlace: [
            {
              id: 2,
              title: "Gudauri",
              img: "/assets/location/gudauri-gnta (1).webp",
              link: "mtskheta-mtianeti",
            },
          ],
          thirdPlace: [
            {
              id: 3,
              title: "Uplistsikhe",
              img: "/assets/location/uplistsikhe-cave-town-gnta-m.webp",
              link: "shida-kartli",
            },
          ],
          fourthPlace: [
            {
              id: 4,
              title: "Borjomi",
              img: "/assets/location/mineral-water-park-borjomi-central-park-resort-1.webp",
              link: "samtskhe-javakheti",
            },
          ],
        },
      ],
      autumn: [
        {
          id: 3,
          title: "Autumn Enchantment: Georgia's Picture-Perfect Season",
          description:
            "Georgia's autumn captivates with Vardzia's cave monastery, Kutaisi's historic landmarks, Bakuriani's mountain retreat, and Ananuri's medieval fortress by the river.",
          firstPlace: [
            {
              id: 1,
              title: "Vardzia",
              img: "/assets/location/vardzia-gnta (1).webp",
              link: "samtskhe-javakheti",
            },
          ],
          secondPlace: [
            {
              id: 2,
              title: "Kutaisi",
              img: "/assets/location/kutaisi-gnta (1).webp",
              link: "imereti",
            },
          ],
          thirdPlace: [
            {
              id: 3,
              title: "Bakuriani",
              img: "/assets/location/bakuriani.webp",
              link: "samtskhe-javakheti",
            },
          ],
          fourthPlace: [
            {
              id: 4,
              title: "Ananuri",
              img: "/assets/location/ananuri-fortified-castle-ensamble-gnta (1).webp",
              link: "samtskhe-javakheti",
            },
          ],
        },
      ],
      winter: [
        {
          id: 4,
          title: "Winter Magic: Georgia's Snowy Delights",
          description:
            "Welcome to Georgia – a country of breathtaking landscapes and incredible experiences. Travel from the Caucasus Mountains to the Black Sea, take in the soaring peaks, broad valleys, and majestic forests. Whether you're looking for an extreme adventure or a relaxing getaway, Georgia has something for everyone. Plan your next trip today!",
          firstPlace: [
            {
              id: 1,
              title: "Bakuriani",
              img: "/assets/location/bakuriani.webp",
              link: "samtskhe-javakheti",
            },
          ],
          secondPlace: [
            {
              id: 2,
              title: "Gudauri",
              img: "/assets/location/gudauri-gnta (1).webp",
              link: "mtskheta-mtianeti",
            },
          ],
          thirdPlace: [
            {
              id: 3,
              title: "Tbilisi",
              img: "/assets/location/tbilisi-capital-of-georgia-country.webp",
              link: "tbilisi",
            },
          ],
          fourthPlace: [
            {
              id: 4,
              title: "Borjomi-Bakuriani Railway",
              img: "/assets/location/Borjomi-Bakuriani Railway.jpg",
              link: "samtskhe-javakheti",
            },
          ],
        },
      ],
    });
    server.create("location", {
      id: 1,
      title: "Samegrelo-Zemo Svaneti",
      title_Img: "/assets/location/svaneti.jpg",
      title_Description:
        "Samegrelo-Zemo Svaneti is in the northwestern part of Georgia and is considered one of the most beautiful regions. It comprises two ancient historical/geographical areas – Samegrelo and Zemo Svaneti, whose centers are, Zugdidi and the town of Mestia, respectively. In this region, you will discover unique monuments of Georgian architecture from various periods of history, with centuries-old history coming to life before your eyes. Travel through the beautiful, expansive nature and enjoy the local cuisine.",
      major_First_Description:
        "Samegrelo is situated between the Black Sea and the Rioni, Enguri, and Tskenistskali rivers in the central part of western Georgia. The region has a humid, subtropical climate, with primarily snowless winters, hot summers, mighty rivers, marshes, springs, and lakes.",
      major_Second_Description:
        "The kingdom of Colchis existed in this area from the 6th to the 2nd centuries BCE. Colchis is associated with the myth of Jason and the Argonauts, as Greek mythology enthusiasts are already aware.",
      major_Third_Description:
        "In the 1st century BCE, Colchis fell under Roman sovereignty. Later, it became a part of unified western and eastern Georgia. ",
      major_Fourth_Description:
        "It then became the Odishi Principality, which was proclaimed a protectorate of Russia in the 19th century, following which it became a part of an independent democratic country in 1918. Now, the area of Samegrelo is a part of the Samegrelo-Zemo Svaneti administrative unit and is comprised of Abasha, Martvili, Senaki, Chkhorotsku, Tsalenjikha, Khobi, and the port city of Poti. ",
      major_Img: "/assets/location/samegrelo.webp",
      major_Nature_Title: "Nature in Samegrelo",
      major_Nature_Img: "/assets/location/kolkheti-national-park.webp",
      major_Nature_First_Description:
        "Begin the adventure at the Kolkheti National Park on the shores of the Black Sea, around Paliastomi Lake. You can take a boat, cutter, pontoon, or kayak to see the unique Kolkhetian forest and wetlands, which are now under UNESCO protection. From the observation towers, you can see as many as one hundred species of migratory birds. ",
      major_Nature_Second_Description:
        "The mountainous area of Samegrelo is amazing. Go up to Tsalenjikha, 2,650 meters above sea level on the Egrisi Range, to see the colorful lakes, where you will find the glacial Tobavarchkhili Lake and the waterfalls and small lakes of the Magana river. ",
      major_Nature_Third_Description:
        "Put the following natural monuments on your list of places to see: Kuakantsalia, a magically swaying, 12-ton boulder in Tsalenjikha; Katsoburi Managed Reserve; Intsra Valley; Oniore and Chkhomuri Waterfalls; Martvili and Balda Canyons. ",
      minor_Sights_Title: "The Sights in Samegrelo",
      minor_Sights_Img: "/assets/location/dadiani-palace-in-zugdidi.webp",
      minor_Sights_First_Description:
        "Many tourists start their journey through Samegrelo from the magical palace in Zugdidi, the main city of Samegrelo, which has been the calling card of the region since the 17th century. It was the residence of the famous princes of Samegrelo, the Dadianis. The palace is now a state museum, where exhibits of worldwide significance and religious relics are kept. ",
      minor_Sights_Second_Description:
        "One of the most important sites of not only Samegrelo, but all of Georgia, is Nokalakevi, the capital of western Georgia from the 5th to 6th centuries CE. ",
      minor_Sights_Third_Description:
        "The long history of Samegrelo encompasses many architectural monuments, such as Martvili Mother of God Church (7th century), Tsaishi Cathedral (10th-11th centuries), Kortskheli Virgin Church (17th century), Khobi Monastery (13th-14th centuries), Abedati Fortress (4th-6th centuries) and Church (9th century), Rukhi Fortress (17th century), Shkhepi Fortress (4th-16th centuries), and more.",
      minor_Sights_Fourth_Description:
        "The largest hydroelectric power station in the country, Engurhesi, is in Samegrelo. It is the most complex and magnificent structure of 20th-century Georgia. Here you can take a boat trip on the Enguri River and even have a tour inside this engineering marvel.",
      minor_Title: "Zemo Svaneti",
      minor_Img: "/assets/location/marshruti-svaneti.webp",
      minor_First_Description:
        "When it is snowing and flakes are flying all around, everything around you resembles a fine tapestry, and the towers, built of stones and boulders look like defenders of the mystical silence. ",
      minor_Second_Description:
        "The road follows the Enguri River Valley from Samegrelo to Zemo Svaneti, which starts at the source of the Enguri River and ends at the border of Samegrelo.",
      minor_Nature_Title: "The Nature in Zemo Svaneti",
      minor_Nature_Img:
        "/assets/location/ushguli-shkhara-glacier-nakvami-lake-3.webp",
      minor_Nature_First_Description:
        "Zemo Svaneti is in Mestia Municipality, a high-mountain region and hotspot of tourism and alpinism, with alpine nature, clear lakes, the Enguri River and its rapid tributaries, and divine waterfalls. ",
      minor_Nature_Second_Description:
        "The noble peaks of the Caucasus Mountains stand tall in Zemo Svaneti, such as Shkhara (5,203 m), Jangha (5,078 m), Gistola (4,860 m), Tetnuldi (4,852 m), Tsurungala (4,222 m), Ailama (4,547 m), Mazeri (4,012 m), Chatini (4,412 m), and Ushba (4,700 m). ",
      minor_Nature_Third_Description:
        "An unforgettable winter awaits you at Mestia, Hatsvali, and Tetnuldi ski resorts. In the short summers, this place is magical, and you could not hope for a better place for hiking and other adventures. ",
      minorSights_Title: "The Sights in Zemo Svaneti",
      minorSights_Img:
        "/assets/location/lamaria-the-ushguli-church-of-the-mother-of-god-2.webp",
      minorSights_First_Description:
        "One of the major sights of Svaneti, and what gives it its ethnographic flavour is the Svan towers. ",
      minorSights_Second_Description:
        "These giants, standing 20 to 25 meters high on a background of mountains reaching up for the sky, with their walls as thick as a meter and a half, have stood faithfully to protect the populace for centuries, holding back avalanches and enemies of any strength. The Svans lived with their families in four or five stories of the towers connected internally through wooden ladders, with the platform placed like a crown atop. The latter was used for combat purposes. ",
      minorSights_Third_Description:
        "Svan towers are not the only treasure that makes this region of Georgia stand out. Start your tour in Svaneti at the Mestia Historical-Ethnographical Museum, which has a large collection of Svaneti treasures. The common place of worship of all Zemo Svaneti is in Mestia, at Seti St. George Church, where icons and crosses from the 12th to 13th centuries are kept. Visit the single-nave, two-story basilica Laghami Transfiguration of the Savior Church.",
      minorSights_Fourth_Description:
        "And finally, try outstanding Svan dishes, such as kubdari and kupati seasoned with unique Svan salt, the cheesy mchadi called chishvdari, Svan khachapuri, the local bread, honey, and the once-distilled Svan vodka called rakhi. You will understand that one lifetime is not enough to know Svaneti. ",
      tour: [
        {
          id: 1,
          title: "Two-Day Tour Svaneti",
          description:
            "If you are looking for an unforgettable adventure and find traveling through a region full of legend attractive, then you should visit Svaneti and go see Georgia's highest peak, lovely nature, untouched forests, villages with towers harmoniously adapted to the cliffs, and the mountains towering proudly above you.",
          img: "/assets/location/upper-svaneti-gnta.webp",
          firstImg:
            "/assets/location/margiani-defence-tower-and-museum-gnta.webp",
          firstTitle: "Margiani House Museum",
          firstDescription:
            "From the roaring rivers in the valleys to mountains reaching the sky, and proudly standing Svan towers, Svaneti has many incredible sites to explore. The Svans used the towers as part of their residential homes and shelters during the enemy invasion.",
          secondTitle: "Tower of Love in Svaneti",
          secondDescription:
            "As you make your way from Mestia to Ushguli, one of the highest settlements in Europe, look out for the “Tower of Love”, which stands on a huge boulder in the river Enguri.",
          secondImg: "/assets/location/svan-tower-of-love-gnta.webp",
          thirdImg: "/assets/location/lamaria-gnta.webp",
          thirdTitle: "Lamaria (Ushguli Mother of God Church)",
          thirdDescription:
            "Ushguli community in Svaneti Region is a truly captivating place; a place steeped in history, culture, unique architecture, and beautiful landscapes. In this community, north of Zhibiani Village, you’ll see one of Svaneti’s most important and impressive sights - Lamaria - also known as the Ushguli Mother of God Church. Standing atop a high hill, this small but proud church has a big historical significance.",
          fourthTitle:
            "Lagurka (The Kala church of Saints Cyricus and Julitta)",
          fourthDescription:
            "Svaneti is a region of wonders, not only standing out for its ancient rituals, traditions, and bringing the legends to life, but also famous for its fascinating historical monuments. One such monument is the church of Lagurka, named for St. Cyricus and St. Julitta, in the village of Khe. Many legends and interesting customs are associated with it.",
          fourthImg:
            "/assets/location/lagurka-the-kala-church-of-saints-cyricus-and-julitta-gnta.webp",
          fifthImg:
            "/assets/location/svaneti-museum-of-history-and-ethnography-gnta.webp",
          fifthTitle: "The Svaneti Museum Collection",
          fifthDescription:
            "Svaneti is an ancient region of Georgia renowned not only for its breathtaking natural beauty, but for the unique blend of Christian and pagan traditions that defines its culture. While you’re visiting Svaneti, pay a visit to the Svaneti Museum of History & Ethnography to see the grand history of the region brought to life in front of you.",
          sixthTitle: "Ushguli Ethnographic Museum",
          sixthDescription:
            "In a 13th-century, Svan-style building made of limestone in Ushguli, known as machubi, you’ll learn about the ancient customs and traditions of Svaneti. ",
          sixthImg: "/assets/location/ushguli-art-museum-gnta.webp",
          seventhImg:
            "/assets/location/mikheil-khergiani-house-museum-gnta.webp",
          seventhTitle: "Mikheil Khergiani House Museum",
          seventhDescription:
            "Mikheil Khergiani was a legendary Svan mountaineer whose name is going to remain in the history of alpinism forever. A 4,960-meter-tall peak in the Turkestan range and an asteroid #3234 were named after him, and in people’s memory Khergiani would always be the fearless conqueror of mountains, the Tiger of the Cliffs.",
          eighthTitle: "Ushguli",
          eighthDescription:
            "Nestled among the rolling hills and high mountains, Ushguli in winter is draped in white, while in the summer the green fields, colorful roofs, and Svan towers will take your breath away with their beauty. Visitors to Svaneti usually start taking pictures at Enguri HPP, a truly impressive, monumental dam, but we recommend that you leave space on your memory card for Ushguli too!",
          eighthImg: "/assets/location/ushguli-gnta.webp",
          ninthImg: "/assets/location/mestia-gnta.webp",
          ninthTitle: "Mestia",
          ninthDescription:
            "They say it’s not about the destination, it’s about the journey, but can’t it be both? When you visit faraway Mestia, the journey and the destination will vie for your attention and for space in your camera.",
        },
        {
          id: 2,
          title: "One-Day Tour in Samegrelo & Imereti",
          description:
            "Samegrelo is one of the most interesting regions in Georgia because of its historical past, which, with its enchanting nature and fortresses, will seem to you like a true oasis. The impressions that you get on your one-day tour will be unique, exciting, and unforgettable.",
          img: "/assets/location/martvili-tour.webp",
          firstImg: "/assets/location/salkhino-dadiani-residence-gnta.webp",
          firstTitle: "Salkhino Dadiani Residence",
          firstDescription:
            "The Salkhino palace, built in the village of Salkhino in Samegrelo Region, was once the summer residence of the local nobility, the Dadiani family. Walking on the cobblestone paths between centuries-old trees up to the palace, you feel the full glory of the Dadiani princes, the 19th-century Georgian aristocracy, who were related to the French imperial family.",
          secondTitle: "Martvili Canyon",
          secondDescription:
            "Every region in Georgia boasts its own famous natural landmarks, and Samegrelo is no different, as it is home to the stunningly beautiful Martvili Canyon. A popular tourist destination with locals and tourists alike, this breathtaking natural monument is a must-see for outdoor enthusiasts.",
          secondImg: "/assets/location/martvili-canyon-gnta.webp",
          thirdImg: "/assets/location/okatse-canyon-gnta.webp",
          thirdTitle: "Okatse Canyon – Imereti’s Green Nature Monument",
          thirdDescription:
            "Imereti region is famous for its lush greenery, dramatic limestone cliffs and plentitude of water - rivers, streams and lakes. Okatse Canyon is a perfect example of this.",
          fourthTitle: "Martvili Canyon Zipline",
          fourthDescription:
            "Martvili Canyon is located in Samegrelo Region, in Gachedili Village, or to be more precise, in the Abasha River Gorge. The canyon is 2,400 meters long, with small hiking trails through exotic nature, including waterfalls, rivers, lakes, and rocks. A boat ride on the Abasha River is also possible while other more extreme adventures are also awaiting you.",
          fourthImg: "/assets/location/martvili-canyon-zipline-in-georgia.webp",
          fifthImg: "/assets/location/martvili-gnta.webp",
          fifthTitle: "Martvili",
          fifthDescription:
            "The small town of Martvili lies in western Georgia, in the region of Samegrelo. As you walk through this picturesque town, your eye will inevitably be drawn to the monastery built on a spot overlooking the town. This is Chkondidi, a monastery raised by the King David Agmashenebeli (the Builder).",
        },
      ],
      topExperiences: [
        {
          id: 1,
          title: "Cultural Monuments",
          bgImg: "/assets/location/tower-in-georgia.webp",
          monument: [
            {
              id: 1,
              title: "Tsalenjikha Ethnographic Museum",
              description:
                "It may be true that many ancient stories are now forgotten, but there are still many interesting acts that have persevered through the years, some of which date back as far as the Stone Age. For those interested in such stories, a visit to the Tsalenjikha Ethnographic Museum in the Samegrelo Region will provide you with the opportunity to learn more about the people who once lived in this region.",
              img: "/assets/location/tsalenjikha-museum.webp",
            },
            {
              id: 2,
              title: "Senaki Local Lore Museum - Ancient Georgian Artifacts",
              description:
                "Senaki Museum of Local Lore in Samegrelo Region displays the rich history of this ancient part of Georgia. The area was inhabited long before the birth of Christ. Indeed, one of the most important monuments of the 4th-3rd centuries AD, Nokalakevi settlement, the old capital of Lazika kingdom, was located near Senaki, in the Tekhura River Basin.",
              img: "/assets/location/senaki-museum-of-local-lore(1).webp",
            },
            {
              id: 3,
              title:
                "Konstantine Gamsakhurdia House Museum - A Landmark of Samegrelo",
              description:
                "Konstantine Gamsakhurdia, one of the most important authors of the Classicism period in literature, was born in the village of Old Abasha, in Samegrelo region. The village is surrounded by lush greenery and it was in a small wooden house in here that Gamsakhurdia (1893-1975) began his fascinating life. Later, he went to Europe to pursue his studies at the universities of St. Petersburg, Königsberg, Leipzig, Munich, and Berlin. In 1919, at the University of Berlin, he obtained his PhD.",
              img: "/assets/location/konstantine-gamsakhurdia-house-museum-gnta.webp",
            },
            {
              id: 4,
              title: "Martvili Museum of Local Lore",
              description:
                "The rich archaeological finds that have happened in Georgia over the years allow you to travel through the country’s ancient history and learn about the existence of people from the Early Stone and Bronze Ages. In this regard, the Museum of Local Lore of Martvili in Samegrelo Region makes for a scintillating visit.",
              img: "/assets/location/martvili-museum-of-local-lore.webp",
            },
            {
              id: 5,
              title: "Chkaduashi Dadiani Residence",
              description:
                "The Dadiani hunting residence, built in 1735, is located 17 kilometers from Zugdidi, in the beautiful village of Chkaduashi. Remarkably, the guide at the Chkaduashi Dadiani Residence is a direct descendant of the Ruler of Samegrelo and the Emperor of France, Napoleon III.",
              img: "/assets/location/tchkaduashi-dadiani-residence.webp",
            },
            {
              id: 6,
              title: "Poti Museum of Colchian Culture",
              description:
                "In Poti Museum of Colchian Culture, there are more than 20,000 exhibits, convincing of Georgia´s western-influenced culture.",
              img: "/assets/location/poti-colchian-culture-museum.webp",
            },
          ],
        },
        {
          id: 2,
          bgImg: "/assets/location/arts-and-culture-in-georgia.webp",
          title: "Arts & Culture",
          culture: [
            {
              id: 1,
              title: "Koruldi Lakes",
              description:
                "An alpine zone, 2,850 meters above sea level, including the highest peaks of Georgia - Shkhara, Tetnuldi, Ushba, and Laila - form an arch around the plateau on which Koruldi Lakes are located.",
              img: "/assets/location/mestia-koruldi-lakes-1.webp",
            },
            {
              id: 2,
              title: "Svaneti’s Glaciers - Chalaati",
              description:
                "No visit to Georgia would be complete without a visit to beautiful Svaneti, and no visit to Svaneti would be complete without seeing Chalaati Glacier, the only glacier in the world that passes into a forest zone.",
              img: "/assets/location/chalaadi-glacier-gnta.webp",
            },
            {
              id: 3,
              title: "Ushba",
              description:
                "The two-headed peak, Ushba, is located southeast of Elbrus Peak in the Svaneti Caucasus Mountains of the Mestia Municipality. The height of the southern peak of Ushbi is 4700 meters, and the northern one reaches 4697 meters.",
              img: "/assets/location/Ushba.jpeg",
            },
            {
              id: 4,
              title: "Shdugra Waterfall",
              description:
                "Shudgra Waterfall is the largest and the most abundant waterfall in Georgia. It is another enchanting element of picture-perfect Svaneti and a worthwhile inclusion in any visit to the region. This remarkable natural site is also known as Ushba Waterfall.",
              img: "/assets/location/ShdugraWaterfall.jpg",
            },
            {
              id: 5,
              title: "Balda Canyon Natural Monument",
              description:
                "Georgia is a country rich in varied landscapes, unspoiled wilderness, and centuries-old cultural monuments. The best example of this can be found in Samegrelo, where you’ll see mossy valleys, turquoise waters, and boundless wilderness. Within Balda Canyon, where you’ll also be able to see the historic Balda Monastery, you’ll find all of the above in abundance.",
              img: "/assets/location/balda-canyon-natural-monument-gnta.webp",
            },
            {
              id: 6,
              title: "Shkhara Peak",
              description:
                "Shkhara is the highest peak in the main watershed range of the Caucasus Mountains. At a height of 5,203 metres above sea level, the peak is composed of granite and crystalline shale, and stands on the Khalde (Bezengi) Wall of the central Caucasus Mountains.",
              img: "/assets/location/shkhara-peak-gnta.webp",
            },
          ],
        },
        {
          id: 3,
          bgImg: "/assets/location/nature-of-georgia.webp",
          title: "Natural Wonders",
          nature: [
            {
              id: 1,
              title: "Tower of Love in Svaneti",
              description:
                "As you make your way from Mestia to Ushguli, one of the highest settlements in Europe, look out for the “Tower of Love”, which stands on a huge boulder in the river Enguri.",
              img: "/assets/location/svan-tower-of-love-gnta.webp",
            },
            {
              id: 2,
              title: "Margiani House Museum",
              description:
                "From the roaring rivers in the valleys to mountains reaching the sky, and proudly standing Svan towers, Svaneti has many incredible sites to explore. The Svans used the towers as part of their residential homes and shelters during the enemy invasion.",
              img: "/assets/location/margiani-defence-tower-and-museum-gnta.webp",
            },
            {
              id: 3,
              title: "Rukhi Fortress",
              description:
                "An important fortification built by Levan II Dadiani in 1647, Rukhi Fortress is today a popular tourist destination, where picnics are held and even concerts are hosted. Located in the village of Rukhi in Samegrelo’s Zugdidi Municipality, it is a fascinating cultural and historical monument.",
              img: "/assets/location/rukhi-fortress-gnta-m.webp",
            },
            {
              id: 4,
              title: "Enguri Hydropower Dam",
              description:
                "Enguri Hydropower Dam was built-in 60-70 years of the 20th century and represents one of the most fascinating examples of civil engineering achievements in Georgia.",
              img: "/assets/location/Enguri Hydropower Dam.jpeg",
            },
            {
              id: 5,
              title: "Nogha Fortress",
              description:
                "There are four villages in Georgia with the name Nogha. Three of them are in Imereti, while the last one is in Samegrelo. It is there, at the highest point in the village, that the 16th-17th century Nogha Fortress, was built. The fortress was first owned by the Jaianis, then later by the Dadianis.",
              img: "/assets/location/nogha-fortress-gnta.webp",
            },
            {
              id: 6,
              title: "Omune Jikha",
              description:
                "Samegrelo, a wonderful corner of western Georgia, is an equally attractive place for adventure seekers and lovers of quiet relaxation. Its blue lakes, mystical canyons, and historical monuments from different eras make this a very popular spot for tourists.",
              img: "/assets/location/Omune Jikha.jpg",
            },
          ],
        },
      ],
      popular: [
        {
          firstImg: "/assets/location/mestia.jpg",
          secondImg: "/assets/location/Zugdidi-town-center.jpg",
          thirdImg: "/assets/location/martvili.jpg",
          fourthImg: "/assets/location/ushguli-gnta.webp",
          title: "Popular Destinations in Samegrelo-Zemo Svaneti",
          description:
            "Tucked in the lush greenery, with proud Greater Caucasus Mountains in the background, Samegrelo and Zemo Svaneti Regions have amazing experiences to offer. Challenge yourself with a hike to Tobavarchkhili Lake, enjoy the natural diversity in the protected areas of Martvili Canyon and Paliastomi Lake, raise a glass of Ojaleshi wine from Salkhino, looking at the sunset from Anaklia Bridge. Ski from the pristine slopes of Tetnuldi and Hatsvali, and get to know the local traditions in Zugdidi, Mestia and Ushguli.",
        },
      ],
    });
    server.create("location", {
      id: 2,
      title: "Shida Kartli",
      title_Img: "/assets/location/Shida Kartli.jpg",
      title_Description:
        "Shida Kartil is a historical and geographical region of Georgia, located in eastern Georgia, in the centre of Kartli. It used to be known as Zena Sopeli, and has some of Georgia’s most significant historic sites, some of which date back to the Paleolithic Era!",
      major_Title: "The Major Cities of Shida Kartli",
      major_Img: "/assets/location/gori-panoramic-view.webp",
      major_First_Description:
        "Begin the adventure at the Kolkheti National Park on the shores of the Black Sea, around Paliastomi Lake. You can take a boat, cutter, pontoon, or kayak to see the unique Kolkhetian forest and wetlands, which are now under UNESCO protection. From the observation towers, you can see as many as one hundred species of migratory birds. ",
      major_Second_Description:
        "The mountainous area of Samegrelo is amazing. Go up to Tsalenjikha, 2,650 meters above sea level on the Egrisi Range, to see the colorful lakes, where you will find the glacial Tobavarchkhili Lake and the waterfalls and small lakes of the Magana river. ",
      major_Historical_Title: "Historical and Cultural Importance",
      major_Historical_First_Description:
        "Shida Kartli’s human history begins in the Paleolithic Era, and the region was already intensely populated by the Bronze Age. The Mtkvar-Araxes culture came to be during this time period.",
      major_Historical_Second_Description:
        "The rudiments of administrative units appears during the Iron Age, the Khevis, and the first state formed during Antiquity. The state of Zena Sopeli, whose capital was Uplistsikhe, was the first true state to exist in the region.",
      major_Historical_Img: "/assets/location/surami-fortress-gnta.webp",
      major_Historical_Third_Description:
        "In the 4th to 3rd centuries BCE, after the unification of Iberia (Kartli), Shida Kartli was organized as a fiefdom, and then became a military unit called a Saspaspeto.",
      major_Historical_Fourth_Description:
        "Shida Kartli was the economic and cultural center of life during the unified monarchy of Georgia in the reign of David the Builder. After Samtskhe Principality was conquered by the Ottomans in the 17th century, it was separated from the kingdom of Kartli for a long time.",
      minor_Sights_Title:
        "The Sights, Architecture, and Culture of Shida Kartli",
      minor_Sights_Img: "/assets/location/uplistsikhe.webp",
      minor_Sights_First_Description:
        "Shida Kartli is extremely significant for both Georgian and European history. Its fascinating history, medieval architecture, and highly artistic monuments make it a must-see for historians and history enthusiasts.",
      minor_Sights_Second_Description:
        "One particularly amazing sight to see is Uplistsikhe, the Bronze Age city carved into a cliff, and one of the oldest settlements in the Caucasus. There are also the region’s clifftop fortresses – Gori and Surami Citadels – whose foundations were built before the common era, as well as Grakliani Hill, which tells a history of human habitation since the Paleolithic Era.",
      minor_Sights_Third_Description:
        "Other notable monuments of Georgian architecture and monumental painting include the churches of Ateni Sioni, Samtavro, and Ruisi; the monasteries of Kintsvisi and Kvatakhevi, and more than 100 other important monuments.",
      minor_Nature_Title: "The Resorts and Nature of Shida Kartli",
      minor_Nature_Description:
        "Shida Kartli is a place of extended mountain ranges, diverse forests, massive fields, beautiful waterfalls, and shimmering lakes. Liakhvi Strict Nature Reserve, Dzama and Ateni Valleys, Bateti and Nadarbazevi Lakes, Damchkera and Biisi Waterfalls, and Jamjama Mountain are all places for unforgettable adventures and relaxation, while the resorts – Surami, Kvishkheti, and Garikula – are able to treat a large number of diseases with their unique climates and mineral waters.",
      minor_Cuisine_Title: "The Cuisine of Shida Kartli ",
      minor_Cuisine_First_Description:
        "The cuisine of Kartli is rich in both fish and meat dishes, as well as vegetarian food. On the road to Surami you can try the delicious, fragrant sweet bread Nazuki. ",
      minor_Cuisine_Second_Description:
        "Along with Chakapuli, you can try Pkhaleuli, sorrel, buttermilk, and cornel soups, which pair very well with Kartli wines, such as Goruli Mtsvane, Shavkapito, Chinuri, and Tavkveri. ",
      tour: [
        {
          id: 1,
          title: "One-Day Tour in the Dzama Valley",
          description:
            "On this one-day tour you will see one of the most significant examples of Georgian architecture, Kintsvisi, distinguished for its high artistic value, an amazing sight to see. You will also take in Ortubani, Mzovreti, and Sarkineti Monasteries, and, at the end of the tour, you will get to see the gorgeous Bateti Lake.",
          img: "/assets/location/dzama-valley-gnta.webp",
          firstImg: "/assets/location/mdzovreti-monastery-complex-gnta.webp",
          firstTitle: "Mzovreti Monastic Complex",
          firstDescription:
            "The Mzovreti Monastic Complex proudly stands on the top of the rocky cliff overlooking Dzama River Valley. The ancient fort is protectively embracing a beautiful garden full of flowers with an incredibly picturesque monastery inside. Its red-tiled rooftop, little cobbled paths and abundant greenery give it a truly paradisal look.",
          secondTitle:
            "Ortubani Convent - Nativity of the Virgin Mary Monastery Complex",
          secondDescription:
            "The Ortubani Convent is located at the foot of the hill in Dzama River Valley and belongs to the Mzovreti Fortress Complex, the residence of the local aristocracy, the Tsitsishvili family. It was considered a political center of Shida Kartli Region in the 14th-17th centuries.",
          secondImg: "/assets/location/ortubani-gnta.webp",
          thirdImg: "/assets/location/kintsvisi-monastery-gnta.webp",
          thirdTitle: "Kintsvisi Monastery",
          thirdDescription:
            "Kintsvisi Monastery stands on a rise of the Dzama River valley, near the lovely village of Kintsvisi in Shida Kartli region. Its construction is connected with the reign of Queen Tamar (1184 - 1212), often called a Golden Age in Georgian culture.",
          fourthTitle: "Sarkineti Monastery",
          fourthDescription:
            "While traveling in Georgia, you will inevitably encounter numerous amazing architectural monuments like centuries-old monasteries built into cliff faces, particularly those of Vardzia, Gareja, and Uplistsikhe.",
          fourthImg: "/assets/location/sarkineti-church-gnta.webp",
          fifthImg: "/assets/location/bateti-lake-1.webp",
          fifthTitle: "Bateti Lake",
          fifthDescription:
            "Bateti Lake, tucked away in a spectacular orchard and surrounded by dense forest, is a place of unmatched beauty. Located twenty-three kilometres from Kareli, this beautiful lake is sure to enchant all who lay eyes upon it.",
          sixthTitle: "Kareli",
          sixthDescription:
            "Lakes, waterfalls, forests, fortresses, and churches-monasteries are among the many highlights that draw visitors to Kareli. Historic and religious monuments harmoniously combined with nature in particular reveal the unique history and character of the Shida Kartli region.",
          sixthImg: "/assets/location/kareli-gnta.webp",
        },
        {
          id: 2,
          title: "One-Day Shida Kartli and Mtskheta Tour",
          description:
            "If you want to see Uplistsikhe, one of the oldest settlements in the Caucasus, go visit Jvari Monastery on the top of a rocky mountain, browse around a historical fortress, and see the spectacular Georgian church of Svetitskhoveli, then you must plan a one-day tour through Shida Kartli and Mtskheta.",
          img: "/assets/location/jvari-monastery(1).webp",
          firstImg: "/assets/location/gori-fortress-gnta.webp",
          firstTitle: "Gori Fortress",
          firstDescription:
            "Gori Fortress was one of Georgia’s main citadels, dating back as far as the 13th century, with evidence of human habitation stretching back as far as the first millennium BCE. Sitting atop a rocky hill in the centre of Gori, it is an Immovable Cultural Monument of National Significance and a popular tourist attraction.",
          secondTitle: "Svetitskhoveli – A Treasure of World Art",
          secondDescription:
            "You may not be surprised to learn that a country with such a rich history as Georgia is also home to a remarkable number of legends, some of which might even be true! Svetitskhoveli is a place that has preserved numerous legends and secrets for the modern generation to unravel and enjoy.",
          secondImg: "/assets/location/svetitskhoveli-cathedral-gnta.webp",
          thirdImg: "/assets/location/jvari-monastery-gnta.webp",
          thirdTitle:
            "Jvari Monastery – A Step Forward for Georgian Architecture",
          thirdDescription:
            "To the east of the city of Mtskheta, Jvari Monastery stands atop a rocky cliff, looking down upon Mtskheta like a stoic guardian. An outstanding monument of Georgian architecture, the name and location of the church are no coincidence, since this is where Saint Nino set up her wooden cross in the 4th century.",
          fourthTitle: "Mtskheta",
          fourthDescription:
            "A popular day trip from Tbilisi, historic Mtskheta is sometimes called “Little Jerusalem” on account of the town’s immense cultural and religious significance. The former Georgian capital is also the seat of the Georgian church, and is a veritable living museum with all of the historic sites in and around the town.",
          fourthImg: "/assets/location/mtskheta-gnta.webp",
        },
      ],
      topExperiences: [
        {
          id: 1,
          title: "Cultural Monuments",
          bgImg: "/assets/location/tower-in-georgia.webp",
          monument: [
            {
              id: 1,
              title: "Gori Fortress",
              description:
                "Gori Fortress was one of Georgia’s main citadels, dating back as far as the 13th century, with evidence of human habitation stretching back as far as the first millennium BCE. Sitting atop a rocky hill in the centre of Gori, it is an Immovable Cultural Monument of National Significance and a popular tourist attraction.",
              img: "/assets/location/GoriFortress.jpg",
            },
            {
              id: 2,
              title: "Mzovreti Monastic Complex",
              description:
                "The Mzovreti Monastic Complex proudly stands on the top of the rocky cliff overlooking Dzama River Valley. The ancient fort is protectively embracing a beautiful garden full of flowers with an incredibly picturesque monastery inside. Its red-tiled rooftop, little cobbled paths and abundant greenery give it a truly paradisal look.",
              img: "/assets/location/mzovreti-monastery-dzama-gorge-1.jpg",
            },
            {
              id: 3,
              title: "Sarkineti Monastery",
              description:
                "While traveling in Georgia, you will inevitably encounter numerous amazing architectural monuments like centuries-old monasteries built into cliff faces, particularly those of Vardzia, Gareja, and Uplistsikhe.",
              img: "/assets/location/sarkineti-church-gnta (1).webp",
            },
            {
              id: 4,
              title: "Mdzovreti Fortress",
              description:
                "In Shida Kartli, in the valley of Dzama on a high mountain stands the Mzovreti fortress. The impregnable fortification was built in the early Middle Ages and was first mentioned in historical records in the 10th century as the residence of Prince Adarnase of Dzami. The name 'Zovreti' (Mdzovreti) means customs.",
              img: "/assets/location/mdzovreti-fortress-gnta.webp",
            },
            {
              id: 5,
              title: "Skhvilo Fortress",
              description:
                "Near the village of Kvemo Chala in Shida Kartli you will find a cobblestone fortress high up in the mountains, proudly surveying Lekhuri Valley and Tiriponi Field. This walled battlement is Skhvilo Fortress, which decided the fate of Georgia in the 17th and 18th centuries.",
              img: "/assets/location/skhvilo-fortress-gnta.webp",
            },
            {
              id: 6,
              title: "Abukhalo Archaeological/Architectural Cave Complex",
              description:
                "In the village of Abukhalo, there is a complex of caves set into the upper part of the pine-covered cliffs. These caves are an archaeological and architectural monument, with scholars believing them to have once been a monastery complex.",
              img: "/assets/location/abukhalo-archeological-architechtural-cave-complex-gnta.webp",
            },
          ],
        },
        {
          id: 2,
          bgImg: "/assets/location/arts-and-culture-in-georgia.webp",
          title: "Arts & Culture",
          culture: [
            {
              id: 1,
              title: "The Stalin Museum in Gori",
              description:
                "Joseph Stalin is a man that needs no introduction. The infamous leader of the Soviet Union and a key figure in the Second World War, Stalin had humble roots, being born in the Georgian city of Gori. The first museum dedicated to Stalin was actually opened during his lifetime, and it still operates to this day.",
              img: "/assets/location/stalin-museum-gnta.webp",
            },
            {
              id: 2,
              title: "The Great Patriotic War Museum",
              description:
                "Georgia is a nation that used to stand up for the protection of its independence and selfness for ages. Located at a vital crossroads between Europe and Asia, it has been in the field of interest of multiple empires. When it comes to the wars that Georgia has experienced over the centuries, it is the Second World War that the people of Gori believe to be one of the most important. In part, this is due to the fact that Stalin, one of the leaders of the Allied Powers and the ruler of the Soviet Union, was born in this city.",
              img: "/assets/location/great-partioric-war-museum.webp",
            },
            {
              id: 3,
              title: "Gori Historical and Ethnographic Museum",
              description:
                "Gori is a city rich in history, cultural monuments, and beautiful landscapes. At the Gori Museum of History and Ethnography, you can travel into the past of not only the region, but Georgia as a whole.",
              img: "/assets/location/gori-museum-georgia.webp",
            },
            {
              id: 4,
              title: "Jambakur-Orbeliani Palace",
              description:
                "If you’re interested in learning how families might have lived during Georgia’s feudal period, then a visit to the 18th-19th-century Jambakur-Orbeliani Palace in the village of Lamiskana, is a must.",
              img: "/assets/location/jambakur-orbeliani-palace-gnta.webp",
            },
            {
              id: 5,
              title: "Ksani Gorge Historical-Architectural Museum-Reserve",
              description:
                "Home to a 17th-century palace of the Ksani and Aragvi nobles, Ksani Gorge is now a historical and architectural museum reserve.",
              img: "/assets/location/ksani-gorge-historical-architectural-museum-reserve-gnta-m.webp",
            },
            {
              id: 6,
              title: "Ivane Javakhishvili House-Museum",
              description:
                "In the heart of Tbilisi’s trendy Vake district, you may spot a massive white building. This is the first national university in the Caucasus, which laid the foundation for European-style higher education in Georgia. One of the founders of the university and its rector, Ivane Javakhishvili, was both a great scientist and historian, and a shining symbol of the honour, education, development, and intellectual culture of 20th-century Georgia. In the village of Khovle, twenty-six kilometres from the city of Kaspi, you can find the house museum dedicated to this man’s immense influence on modern Georgia.",
              img: "/assets/location/javakhishvili-house-museum-gnta.webp",
            },
          ],
        },
        {
          id: 3,
          bgImg: "/assets/location/nature-of-georgia.webp",
          title: "Natural Wonders",
          nature: [
            {
              id: 1,
              title: "Dzama Valley",
              description:
                "Dzama Valley is home to up to 60 historic monuments, including old and modern churches and monasteries, fortresses, towers and natural sights. Located in Kareli Municipality, Shida Kartli, the valley is 160-170 kilometers away from Tbilisi.",
              img: "/assets/location/dzama-valley-gnta-m.webp",
            },
            {
              id: 2,
              title: "Bateti Lake",
              description:
                "Bateti Lake, tucked away in a spectacular orchard and surrounded by dense forest, is a place of unmatched beauty. Located twenty-three kilometres from Kareli, this beautiful lake is sure to enchant all who lay eyes upon it.",
              img: "/assets/location/bateti-lake-1 (1).webp",
            },
            {
              id: 3,
              title: "Ateni Valley",
              description:
                "The Ateni Valley is a place of great beauty and diversity. Here you’ll find grassy knolls, mossy boulders, gorgeous alpine hills, and the remains of a multitude of Bronze Age settlements just waiting to be explored. The Ateni Valley starts just ten kilometres from Gori in the Shida Kartli region.",
              img: "/assets/location/ateni-valley-gnta-m.webp",
            },
            {
              id: 4,
              title: "Kodistskaro Lake",
              description:
                "Visitors to Shida Kartli Region will encounter a great many monuments of immense historic and cultural value. Here, you’ll find the remains of both Georgia’s ancient culture and important works of medieval architecture and art. The region is also home to a startling variety of landscapes, including mineral water resorts, alpine meadows, lakes surrounded by greenery, and towering cascades. An excellent example of Shida Kartli’s immense natural beauty is Kodistskaro Lake. A water reservoir nestled between verdant mountains, it is extraordinarily beautiful no matter what time of year you visit.",
              img: "/assets/location/kodistskaro-lake.webp",
            },
            {
              id: 5,
              title: "Arjevani Mountain",
              description:
                "A 2759 meters high Arjevani mountain on the Trialeti ridge is located on the border of Gori and Tsalka municipalities, at the source of the Tedzami river.",
              img: "/assets/location/arjevani-mountain-gnta-m.webp",
            },
            {
              id: 6,
              title: "Shida Kartli",
              description:
                "Shida Kartil is a historical and geographical region of Georgia, located in eastern Georgia, in the centre of Kartli. It used to be known as Zena Sopeli, and has some of Georgia’s most significant historic sites, some of which date back to the Paleolithic Era!",
              img: "/assets/location/gori-gnta-m.jpg",
            },
          ],
        },
      ],
      popular: [
        {
          firstImg: "/assets/location/Kaspi.jpg",
          secondImg: "/assets/location/Gori.jpg",
          thirdImg: "/assets/location/Kareli.jpg",
          fourthImg: "/assets/location/Khashuri.jpg",
          title: "Popular Destinations in Shida Kartli",
          description:
            "In Shida Kartli, you can immerse yourself in the depth of Georgian history. Walk along the streets of the rock-hewn town Uplistsikhe, visit the picturesque monasteries of Dzama Valley, hike to Biisi Waterfall, and marvel at the terraced vineyards next to the fantastic Ateni’s Sioni Monastery. Taste Atenuri wine and sweet bread Nazuki in Surami. Ascend to the top of Jamjama Mountain.",
        },
      ],
    });
    server.create("location", {
      id: 3,
      title: "Samtskhe-Javakheti",
      title_Img: "/assets/location/Samcxe Javaxeti.jpg",
      title_Description:
        "Samtskhe-Javakheti is an administrative region made of two historical provinces of Samtskhe and Javakheti. There are two ways to get there from Tbilisi, depending on which region you are going to. If you intend to go to Borjomi (Samtskhe), traveling through the cities of Gori and Khashuri along the Western Highway is the best option. If your destination is Vardzia, Ninotsminda, Akhalkalaki, or Akhaltsikhe, then the Southern Highway via Paravani Lake is the way to go.",
      major_Title: "Bakuriani",
      major_Img: "/assets/location/winter-panoramic-view-bakuriani.webp",
      major_First_Description:
        "The village of Bakuriani, is the best place in the region for both skiing and mountain sports, but it is also an ideal location for a relaxing vacation. Here, you’ll find ski runs of various difficulties, modern ski lifts, an international-level bike park, and a mixture of mid-range and high-class accommodation options.",
      secondary_Major_Title: "Borjomi Resort Town",
      secondary_Major_First_Description:
        "One of Georgia’s most well-known mineral waters has its roots in Borjomi. If you’ve ever dined in a Georgian restaurant, we’re sure you already know the name!",
      secondary_Major_Img: "/assets/location/borjomi-panoramic-view.webp",
      secondary_Major_Second_Description:
        "The town of Borjomi is enchanting. Set among mountains covered in pine forests, on both sides of the Mtkvari River, it is a quaint mountain town out of romantic fiction. ",
      secondary_Major_Third_Description:
        "In the picturesque Borjomi Central Park you can not only drink mineral water straight from a spring, but also find a variety of dining options, amusements, and quiet corners in which to relax. ",
      secondary_Major_Fourth_Description:
        "The resort Likani is here too, which, due to its therapeutic climate, was the summer residence of the Russian emperors in the 19th century.",
      minor_Title: "Abastumani",
      minor_Img: "/assets/location/abastumanii.webp",
      minor_First_Description:
        "This resort, at 1,340 meters above sea level, is the best place for treating multiple health conditions due to its air, climate, and sulfur-rich waters.",
      minor_Second_Description:
        "There is also an astronomical observatory in Abastumani, and the sky is clear for a majority of the year. The skies have been observed from this location for more than 80 years, and if you too wish to see the sky with your own eyes, there is a telescope for tourists in Abastumani.",
      minor_Third_Description: "The Sights of Samtskhe-Javakheti",
      minor_Fourth_Description:
        "There are many historical monuments in Samtskhe-Javakheti. Once you are in the region, try to visit at the least the main ones!",
      secondary_Minor_Title: "Akhaltsikhe Fortress (a.k.a. Rabati)",
      secondary_Minor_Img: "/assets/location/rabati-wide-view.webp",
      secondary_Minor_Description:
        "South of Borjomi, there is a beautiful road cutting through deep valleys that will take you to Akhaltsikhe. This city is famous for its core Rabati District and the ancient fortress-city, where, centuries ago, there was a church, a mosque, and a synagogue side-by-side in one small area. This unity best conveys the history of Akhaltsikhe, as well as its current character. ",
      secondary_MinorTitle: "Vardzia",
      secondary_MinorImg: "/assets/location/vardzia.webp",
      secondary_MinorFirst_Description:
        "Vardzia is a city and monastery carved into a cliffside, which is associated with the reign of Queen Tamar and Georgia’s Golden Age. In this medieval stronghold, you’ll find hundreds of cave dwellings, fifteen churches, wine cellars, bakeries, apothecaries, and even secret tunnels.",
      secondary_MinorSecond_Description: "Khertvisi Fortress",
      secondary_MinorThird_Description:
        "Khertvisi Fortress is a 10th-century complex located in the village of Khertvisi. This monument, along with Vardzia, has been on the tentative list of World Heritage Sites since 2007, and it’s truly impressive!",
      minor_Nature_Title: "Nature",
      minor_Nature_First_Description:
        "One of the sights of Samtskhe-Javakheti is the Borjomi-Kharagauli National Park, with its untouched forests and rare species of plants and animals. There are several routes that require from one to three days. You can spend the night in the tourist shelters, and there are also picnic and camping areas throughout the park.",
      minor_Nature_Second_Description:
        "This place is also famous for its lakes. Samtskhe-Javakheti is the location of Georgia’s largest lake full of fish, Paravani Lake, as well as the lovely Bughdasheni, Kartsakhi, Saghamo, Khanchali, and Tabatskuri Lakes, in which you can hike or watch migratory birds from specially outfitted towers.",
      minor_Nature_Third_Description:
        "The highest peak in the region is Didi Abuli Mountain, from where you will have a view over all of Javakheti.",
      tour: [
        {
          id: 1,
          title: "One-Day Tour in Samtskhe-Javakheti",
          description:
            "If you are looking for the perfect route for relaxation, with panoramic views, ruins of ancient cultures, fortresses, and amazing churches, then you absolutely must plan a tour through Samtske-Javakheti. During the tour, you will be able to visit Borjomi, Vardzia, Khertvisi, and Akhaltsikhe.",
          img: "/assets/location/javakheti-national-park-gnta.webp",
          firstImg: "/assets/location/vardzia-gnta.webp",
          firstTitle: "Vardzia",
          firstDescription:
            "No matter how many times you visit Georgia, the country will continuously charm you. Incomparable, centuries-old monuments will spread all of history out before your eyes and tell you stories that you can hear nowhere else. One of those creations is Vardzia, a grand ensemble of medieval cliff architecture and one of the most popular monuments in Georgia.",
          secondTitle: "Khertvisi fortress",
          secondDescription:
            "Owing to the nation’s turbulent history on the edge of the empires, many of the defensive buildings within Georgia are centuries old, meaning you’ll be able to find outstanding monuments in every city, town, and village. One particularly well-preserved example of this is the 10th-century Khertvisi Fortress, near the village that shares its name.",
          secondImg: "/assets/location/khertvisi-fortress-gnta.webp",
          thirdImg: "/assets/location/akhaltsikhe-castle-gnta.webp",
          thirdTitle: "Akhaltsikhe Castle",
          thirdDescription:
            "If you would like to see what a Georgian fortress in its prime might have looked like, you should pay a visit to Akhaltsikhe Fortress in the historic Rabati district of Akhaltsikhe Town. Built on a mountain overlooking the city, the reconstructed fortress gives a fantastic impression of what one of these fortifications might have looked like in their heyday.",
          fourthTitle: "Birdwatching in Javakheti Lakes",
          fourthDescription:
            "The Javakheti volcanic plateau, where the Lesser Caucasus Mountains begin, is the only place in Georgia with multiple lakes in such close proximity to each other. The Kartsakhi, Bugdasheni, Madatapi, and Khanchali Lakes, as well as Suldi Swamp, are all located on the territory of Javakheti Protected Areas and are strictly guarded.",
          fourthImg: "/assets/location/javakheti-lakes-gnta.webp",
          fifthImg: "/assets/location/borjomi.webp",
          fifthTitle: "Borjomi",
          fifthDescription:
            "If you’ve spent any time dining in Georgia, the name “Borjomi” might sound familiar to you. Nobody leaves the country without sampling the popular mineral water that seems to be served in every local restaurant, cafe, and hotel. Indeed, Borjomi mineral water is an ambassador of Georgia in 32 countries around the world. But did you know that the town of Borjomi is a gorgeous resort destination with more to offer than just Georgia’s signature sparkling water? It is a town whose healing spring waters, peaceful pine forests, and bracing mountain air has been working miracles on the sick for centuries.",
        },
        {
          id: 2,
          title: "Lake Tour in Javakheti",
          description:
            "Your trip will start in a volcanic/tectonic forest, continuing through Poka Monastery, which carries the name of St. Nino of Cappadocia, who spread Christianity to Georgia. You will come across the gorgeous Saghamo Lake and the village of Gorelovka along the way, ending at the mystical Madatapa Lake, where an unbelievable landscape awaits you.",
          img: "/assets/location/saghamo-lake.webp",
          firstImg: "/assets/location/saghamo-lake-gnta.webp",
          firstTitle: "Saghamo Lake - A Magical Sight in Samtskhe-Javakheti",
          firstDescription:
            "The amazing sight of Saghamo Lake is situated in Samtskhe-Javakheti region, and specifically in Ninotsminda municipality. Wide open spaces, mountains, tranquility, and clear water make this a perfect spot for camping.",
          secondTitle: "Paravani Lake - Perfect for Fishing",
          secondDescription:
            "Paravani Lake is the largest lake in Georgia in terms of water surface area. It is located in Samtskhe-Javakheti region, 2,073 meters above sea level, and is frozen all winter. The thickness of the ice cover reaches 50 to 70 cm and when frozen the lake is a particularly amazing sight, resembling a white desert.",
          secondImg: "/assets/location/paravani-lake-gnta.webp",
          thirdImg: "/assets/location/madatapa-lake-gnta.webp",
          thirdTitle: "Madatapa Lake",
          thirdDescription:
            "The Samtskhe-Javakheti Region's Ninotsminda municipality is home to the blue-glowing Madatapa Lake. This lake's stunning surroundings are recognized as Wetlands of Worldwide Significance. Due to the lake's location along the African-Eurasian flight route, migratory and nesting birds are frequently seen there during the warm months of the year.",
          fourthTitle: "Poka Monastery",
          fourthDescription:
            "On the shores of Paravani Lake in Samtskhe-Javakheti region there is a small place, where Saint Nino who brought Christianity to Georgia, rested for two days and nights on her long way from Cappadocia to Mtskheta. This is now St. Nino Monastery in Poka.",
          fourthImg: "/assets/location/poka-monastery-gnta.webp",
          fifthImg:
            "/assets/location/gorelovka-village-doukhobors-museum-gnta.webp",
          fifthTitle: "Gorelovka Village-Museum",
          fifthDescription:
            "Often called Georgia’s most colourful village, Gorelovka in Samtskhe-Javakheti region remains vibrant and beautiful despite having to endure some of Georgia’s most severe climate conditions and some of its longest winters.",
          sixthTitle: "Birdwatching in Javakheti Lakes",
          sixthDescription:
            "The Javakheti volcanic plateau, where the Lesser Caucasus Mountains begin, is the only place in Georgia with multiple lakes in such close proximity to each other. The Kartsakhi, Bugdasheni, Madatapi, and Khanchali Lakes, as well as Suldi Swamp, are all located on the territory of Javakheti Protected Areas and are strictly guarded.",
          sixthImg: "/assets/location/javakheti-lakes-gnta (1).webp",
          seventhImg: "/assets/location/ninotsminda-monastery-gnta.webp",
          seventhTitle: "Ninotsminda",
          seventhDescription:
            "Ninotsminda is a favorite nesting place for the Siberian Crane, which visit the town and its surrounds every year to breed. Here you will not see a lamppost or telephone pole without a crane's nest on it. Indeed, the nests woven into these poles, with a diameter larger than one meter, are incredibly beautiful.",
        },
      ],
      topExperiences: [
        {
          id: 1,
          title: "Cultural Monuments",
          bgImg: "/assets/location/tower-in-georgia.webp",
          monument: [
            {
              id: 1,
              title: "Akhaltsikhe Castle",
              description:
                "If you would like to see what a Georgian fortress in its prime might have looked like, you should pay a visit to Akhaltsikhe Fortress in the historic Rabati district of Akhaltsikhe Town. Built on a mountain overlooking the city, the reconstructed fortress gives a fantastic impression of what one of these fortifications might have looked like in their heyday.",
              img: "/assets/location/akhaltsikhe-castle-gnta (1).webp",
            },
            {
              id: 2,
              title: "Khertvisi fortress",
              description:
                "Owing to the nation’s turbulent history on the edge of the empires, many of the defensive buildings within Georgia are centuries old, meaning you’ll be able to find outstanding monuments in every city, town, and village. One particularly well-preserved example of this is the 10th-century Khertvisi Fortress, near the village that shares its name.",
              img: "/assets/location/khertvisi-shalosheti-mount-atskita.webp",
            },
            {
              id: 3,
              title: "Saro Fortress",
              description:
                "Built thousands of years ago, Saro Fortress remains an interesting sight even today. Believed to have been built in pre-Christian times, this cyclopean fortress’ imposing scale and construction style continue to enchant history-lovers to this day.",
              img: "/assets/location/saro-fortress-gnta.webp",
            },
            {
              id: 4,
              title: "Atskuri Fortress",
              description:
                "This remarkable structure, built 1,000 years ago on an inaccessible rocky crag, has been a faithful defender of the Borjomi Valley for centuries. The long history of the fortress encompasses the 11th to the 19th century, making it a must-see for military history enthusiasts.",
              img: "/assets/location/atskuri-fortress-gnta-m.webp",
            },
            {
              id: 5,
              title: "Okrostsikhe Fortress",
              description:
                "Amidst Georgia’s centuries-old buildings, you’ll find many legends and stories. While some of these tales have their basis in history, others have a much more fanciful origin. One such place is Okrostsikhe Fortress, which is described in Shota Rustaveli’s epic poem, The Knight in the Panther’s Skin, as being the fortress of a sorcerer. While the efficacy of such legends is debatable, the fortress is very much a real place. Located near Bolajuri Village in Samtskhe-Javakheti Region, Okrostsikhe Fortress has a very interesting history.",
              img: "/assets/location/okros-tsikhe-fortress-gnta.webp",
            },
            {
              id: 6,
              title: "Sakanape Fortress",
              description:
                "Samtskhe-Javakheti is an ancient historical region of Georgia where visitors can expect to encounter cyclopean fortresses built by ancient civilizations and Christian monuments distinguished for their architecture and frescoes. Sakanape Fortress, which is located near Atskuri Village in Samtskhe-Javakheti, is a fortress that was once of immense import, and whose ruins will prove fascinating to any student of history.",
              img: "/assets/location/sakanape-tsriokhi-fortress-gnta.webp",
            },
          ],
        },
        {
          id: 2,
          bgImg: "/assets/location/arts-and-culture-in-georgia.webp",
          title: "Arts & Culture",
          culture: [
            {
              id: 1,
              title: "Samtskhe-Javakheti History Museum",
              description:
                "One of the most popular tourist destinations in Georgia is the Samtskhe-Javakheti region, an area rich in ancient monuments and amazingly beautiful landscapes. If you are planning to visit this and explore its sights, then you should definitely go to the Samtskhe-Javakheti History Museum, located within Akhaltsikhe Fortress, also known as Rabati.",
              img: "/assets/location/samtskhe-javakheti-historical-museum-gnta.webp",
            },
            {
              id: 2,
              title: "Borjomi Local Lore Museum",
              description:
                "The Samtskhe-Javakheti region is a fantastic place for relaxation, mountain sports, hiking, and learning about Georgia’s fascinating, centuries-long history. If the latter interests you, a visit to the Borjomi Local Lore Museum is a must.",
              img: "/assets/location/borjomi-local-lore-museum.webp",
            },
            {
              id: 3,
              title: "Gorelovka Village-Museum",
              description:
                "Often called Georgia’s most colourful village, Gorelovka in Samtskhe-Javakheti region remains vibrant and beautiful despite having to endure some of Georgia’s most severe climate conditions and some of its longest winters.",
              img: "/assets/location/gorelovka-village-doukhobors-museum-gnta (1).webp",
            },
            {
              id: 4,
              title: "Borjomi Sulfur Pools",
              description:
                "While wandering the verdant depths of Borjomi Park, you’ll have the opportunity to extend your exploration by taking an easy walking path found at the rear of the park. Following the meandering path of the Borjomula River for two kilometres, you’ll soon come to a series of outdoor sulfur pools. Locals and tourists alike regularly visit this popular landmark, where you can relax under the open sky.",
              img: "/assets/location/borjomi-sulfur-pools-3.webp",
            },
            {
              id: 5,
              title: "Crowne Plaza Borjomi",
              description:
                "If you’re looking for a place to escape from the hustle and bustle of city life, Borjomi’s combination of immense natural beauty and resort facilities is the perfect fit. The Crowne Plaza Borjomi is the excellent base for your visit to the picturesque mountain town, providing all of the modern conveniences one would expect from a renowned luxury brand.",
              img: "/assets/location/crowne-plaza-borjomi-gnta-m.webp",
            },
            {
              id: 6,
              title: "Akhaltsikhe, Rabat district",
              description:
                "The history of the centuries-old city of Akhaltsikhe is perfectly told by its diverse architecture on its hilly, impressive terrain, against the background of a large fortress. The Georgian Orthodox, Catholic, and Armenian Gregorian churches, as well as a former mosque and synagogues, showcasing its multi-ethnicity and multiculturalism. Buildings that have survived to this day are found in districts formed in different periods, the oldest of which is Rabati district.",
              img: "/assets/location/akhaltsikhe-rabat-district-558-1-m.webp",
            },
          ],
        },
        {
          id: 3,
          bgImg: "/assets/location/nature-of-georgia.webp",
          title: "Natural Wonders",
          nature: [
            {
              id: 1,
              title: "Borjomi-Kharagauli National Park",
              description:
                "Do you want to hike in a truly heavenly place? With its pristine wilderness, pure air and water, and fascinating birdlife, this area feels like a piece of paradise on earth. Just 170 kilometers from Tbilisi, Borjomi-Kharagauli National Park is one of the largest national parks in Europe and the first in the Caucasus to meet international standards set by the International Convention of Biological Diversity.",
              img: "/assets/location/Borjomi-Kharagauli.jpeg",
            },
            {
              id: 2,
              title: "Kakhisi Lake - Hiking Destination in Borjomi Valley",
              description:
                "Surrounded by a beautiful spruce forest, you will find abundant picnic and camping areas by Kakhisi Lake, located in the beautiful Borjomi Valley, near the village of Chobiskhevi, at 1752 m above sea level.",
              img: "/assets/location/kakhisi-lake-gnta.webp",
            },
            {
              id: 3,
              title: "Tabatskuri Lake",
              description:
                "Birds bob happily on a cerulean lake whose waters reflect the towering mountains, horses graze on the shores, and quaint homes jut out onto the lake - if this sounds like your idea of paradise, you should pay a visit to Tabatskuri Lake.",
              img: "/assets/location/tabatskuri-lake-gnta.webp",
            },
            {
              id: 4,
              title: "Nedzvi Managed Reserve",
              description:
                "A part of the Borjomi-Kharagauli Protected Areas, the Nedzvi Managed Reserve is a popular hiking destination. Comprising an area of 8,892 hectares, this breathtaking reserve stands out with its abundance of Caucasian fir trees and as a habitat for lynxes.",
              img: "/assets/location/nedzvi-managed-reserve.webp",
            },
            {
              id: 5,
              title: "Didi Abuli Mountain - Highest Peak of Samtskhe-Javakheti",
              description:
                "The volcanic Didi Abuli Mountain is a real discovery for adventure-seekers, and is visible from various tourist routes in Georgia.",
              img: "/assets/location/didi-abuli-mountain-gnta-m.webp",
            },
            {
              id: 6,
              title: "Khanchali Lake - An outstanding place for bird watching",
              description:
                "Wide-open spaces, alpine meadows, and a clear blue lake – if you find yourself in this place, you may think that you’ve stumbled into a dream, but the beauty in Samtskhe-Javakheti is real, and it is truly one of a kind. Here, in the middle of Javakheti’s volcanic mountains and at a height of 1,928 meters above sea level, Khanchali Lake awaits you. Located in Ninotsminda Municipality, it is a sight to behold.",
              img: "/assets/location/khanchali-lake-hiking-gnta.webp",
            },
          ],
        },
      ],
      popular: [
        {
          firstImg: "/assets/location/Akhaltsikhe.jpg",
          secondImg: "/assets/location/Borjomi.jpg",
          thirdImg: "/assets/location/Adigeni.jpg",
          fourthImg: "/assets/location/Abastumani.jpg",
          title: "Popular Destinations in Samtskhe-Javakheti",
          description:
            "Here you will find abandoned cyclopic fortresses built by ancient civilizations, along with Christian monuments with outstanding architecture and frescos. Visit the Paravani, Saghamo, and Khanchali Lakes to see amazing bird species. Feel the flow of centuries in cave city Vardzia, embrace the multiculturality in Akhaltsikhe Castle, and visit the Doukhobor villages. Hike in Borjomi-Kharagauli National Park and quench your thirst for adventure with Georgia’s most famous mineral water, Borjomi. Enjoy the fresh air and beautiful nature in Likani, Bakuriani, or Abastumani.",
        },
      ],
    });
    server.create("location", {
      id: 4,
      title: "Racha-Lechkhumi & Kvemo Svaneti",
      title_Img: "/assets/location/RachaLeChxumi Kvemo Svaneti.jpg",
      title_Description:
        "This beautiful region of Georgia includes three amazing areas of the country – Racha, Lechkhumi, and Kvemo Svaneti. This region, within the valleys of the Rioni, Tskhenistskali, and Lajanuri rivers, borders Imereti Region, Java Municipality of Samachablo (so-called South Ossetia), and the Samegrelo - Zemo Svaneti Region. It is hugged by the mountains from the north, some of them are more than 4000 meters above sea level.",
      major_Title: "Municipalities ",
      major_Description:
        "There are four municipalities within Racha-Lechkhumi - Kvemo Svaneti: Ambrolauri (lower Racha), Oni (upper Racha), Tsageri (Lechkhumi), and Lentekhi (Kvemo Svaneti). The three cities of the region are the administrative center of the region, Ambrolauri, as well as Oni and Tsageri, and the two towns are Lentekhi and Kharistvala. This region, with 4,954 km2 of land area, is distinguished for its unique history and architectural monuments, with diverse nature, peaks, caves, rivers, waterfalls, and lakes. ",
      major_History_Title: "The History of Racha-Lechkhumi - Kvemo Svaneti",
      major_History_Img: "/assets/location/khvamli-mountain-1.webp",
      major_History_First_Description:
        "Tsageri is a home to legendary Khvamli Mountain, known as the place where Prometheus, who challenged the gods, was chained.",
      major_History_Second_Description:
        "Myths aside, the historical sources claim that the first traces of human life in Racha-Lechkhumi - Kvemo Svaneti date back to the Stone Age. Objects from the Bronze and Iron Ages have been found in the region and the copper mines discovered in Svaneti confirm the significant role that the region played in the mining and working of that ore. ",
      major_History_Third_Description:
        "The upper reaches of the Rioni River were exceptional since there was a large-scale bronze production center allowing the Svans to capitalize on it. Svaneti also played a large role in gold production, since in earlier times, this region was part of the kingdom of Colchis, and the Golden Fleece myth relates to the gold mining tradition in Svaneti.",
      major_History_Fourth_Description:
        "Racha-Lechkhumi - Kvemo Svaneti was well-protected by natural conditions and by fortresses, and kings and noble families fleeing from their enemies often took shelter in them. Tsageri was often also called the kingdom's treasury.",
      minor_Historical_Title: "Historical Monuments",
      minor_Historical_Img: "/assets/location/nikortsminda-1.webp",
      minor_Historical_Description:
        "One of the masterpieces of Georgian architecture is the Nikortsminda Church. Many others are scattered throughout the region including, Barakoni, Labechina, Mravaldzali, Goni Archangel, Shromisubani churches, Skhieri Monastery Complex, Khotevi and Minda Fortresses, Kvaratsikhe Fortress, the cyclopean Natsikhari, the Goni and Tskheti St. George Churches, Muri and Orbeliani Fortresses, Oni Synagogue, and more. ",
      secondary_Minor_Historical_Title:
        "Prometheus Mountain, Shaori Reservoir, and Other Gifts of Nature",
      secondary_Minor_Historical_First_Description:
        "The unique nature of Racha-Lechkhumi - Kvemo Svaneti includes its high, middle, and low mountain ranges, caves, rivers, waterfalls, and lakes. All this makes it a place of unforgettable adventure for active sports enthusiasts. However, Khvamli Mountain, associated with Prometheus, leaves a mystical impression on many travelers.",
      secondary_Minor_Historical_Second_Description:
        "Khvamli Mountain stands in Lechkhumi, within Tsageri and Tskaltubo Municipalities. According to ancient sources, it was on Khvamli, also known as Khomli, that Zeus ordered Prometheus to be chained, and where Heracles came to release him. It was also a place where the Greek Argonauts traveled. According to Georgian legends, Khvamli hides a great secret. It is not known whether it is a treasure or something else. ",
      secondary_Minor_Historical_Third_Description:
        "The calling card of the region is the Shaori and Lajana Reservoirs. The Nikortsminda and Skhvava karst caves, Rachkha, Chkumi and Love (Sikvaruli) Waterfalls, Kulbaki, Udziro, and Sasvano Lakes are also very impressive sites.",
      secondary_Minor_Historical_Fourth_Description:
        "Hiking on the Buba and Kirtishi Glaciers or the Chiora and Khikhata Mountains is a great chance to explore the region's great outdoors. Visit the Sairme Pillars and Askhivi Massif for spectacular views of the area.",
      minor_Title: "Resorts",
      minor_Img: "/assets/location/res-shovi-udziro-tba-vil-glola.webp",
      minor_Description:
        "Racha-Lechkhumi - Kvemo Svaneti is one of the best places for people who love mountain vacations. There are numerous therapeutic mineral waters and balneological and climatic resorts including Shovi, Utsera, Lashichala, Bugeuli and more. ",
      minor_Cuisine_Title: "Unique Wines and Cuisine",
      minor_Cuisine_First_Description:
        "There are 525 species of grapevines spread throughout Georgia, many of which are grown on the slopes of Racha-Lechkhumi - Kvemo Svaneti. Aleksandrouli, Rachuli Mtsvane, Rachuli Tetra, Mujuretuli, Usakhelouri, Orbeluri Ojaleshi, Tsolikouri and other local wines are distinguished by their rich flavors. ",
      minor_Cuisine_Second_Description:
        "Khvanchkara, a red cuvée of Aleksandrouli and Mujuretuli from lower Racha enjoys great popularity within Georgia and around the world. ",
      minor_Cuisine_Third_Description:
        "White semi-sweet Tvishi, made from Tsolikouri grapes grown in a small area of Lechkhumi, also deserves attention. Make sure to try one of the most rare and expensive Georgian wines coming from Lechkhumi, Usakhelouri. ",
      minor_Cuisine_Fourth_Description:
        "In addition to the wines of Racha-Lechkhumi, try these examples of the rich local cuisine: cheese fondue khavitsi, local ham - Rachuli lori, bean pie lobiani, cornbread with dips - tskaldaskhmula, and exceptional Svan dishes including kubdari, which is a delectable filled pastry with prepared spiced meat placed within dough; chvishtari, a mixture of baked corn flour and stretchy cheese; and tashmijabi, made with potatoes and cheese.",
      tour: [
        {
          id: 1,
          title: "One-Day Tour in Racha",
          description:
            "The places that you will see while on this tour will truly surprise you with their grandeur, like the significant cultural monuments of various time periods, the ancient frescos, the captivating nature, and the lakes, hidden away among the cliffs. If you love wandering, then you will fall in love with this place in just a single day.",
          img: "/assets/location/racha-lechkhumi.webp",
          firstImg: "/assets/location/nikortsminda-cathedral.webp",
          firstTitle: "Nikortsminda Cathedral",
          firstDescription:
            "Arches with luxurious carvings, frescoes with diverse stories, and a high dome reaching for the sky are among the reasons that Nikortsminda Church is recognized as a masterpiece of Georgian national architecture. Moreover, it is on the Tentative list for status of UNESCO's World Heritage. You should definitely visit this marvelous place, once you pass by in the village of Nikortsminda in the north-western Georgian region, Racha.",
          secondTitle: "Barakoni Church",
          secondDescription:
            "The village of Tsesi in Racha Region is surrounded by mountains and covered in lush greenery. There, at the confluence of the Lukhuni and Rioni Rivers, stands Barakoni Church serving as a timeless monument of Georgian architecture.",
          secondImg:
            "/assets/location/barakoni-church-of-virgin-mary-gnta.webp",
          thirdImg: "/assets/location/shaori-lake-gnta.webp",
          thirdTitle: "Shaori Lake",
          thirdDescription:
            "In Racha Region, in the heart of snow-covered peaks, dense forests, and meadows full of flowers, the man-made Shaori Lake creates a wonderful environment for fun and relaxation.",
          fourthTitle: "Ambrolauri",
          fourthDescription:
            "At the confluence of the Rioni and Krikhula Rivers, a small city was built to act as a residence for the kings of Imereti in the 17th century. This city, Ambrolauri, is today the administrative centre of Racha-Lechkhumi and Kvemo Svaneti Region, and is a place of cold winters, hot, dry summers, and beautiful wilderness.",
          fourthImg: "/assets/location/ambrolauri-gnta.webp",
        },
        {
          id: 2,
          title: "Two-Day Tour in Racha",
          description:
            "During this two-day tour in Racha, you will discover Georgian architectural monuments from different time periods, visit exceptional locations, and spend time at climatic/balneological resorts like Shovi and Utsera. During your adventure in Racha, you will see Shaori Reservoir, Barakoni, Nikortsminda, and more.",
          img: "/assets/location/lashkroba-shovi-udziro-tba-glola.webp",
          firstImg: "/assets/location/nikortsminda-cathedral (1).webp",
          firstTitle: "Nikortsminda Cathedral",
          firstDescription:
            "Arches with luxurious carvings, frescoes with diverse stories, and a high dome reaching for the sky are among the reasons that Nikortsminda Church is recognized as a masterpiece of Georgian national architecture. Moreover, it is on the Tentative list for status of UNESCO's World Heritage. You should definitely visit this marvelous place, once you pass by in the village of Nikortsminda in the north-western Georgian region, Racha.",
          secondTitle: "Barakoni Church",
          secondDescription:
            "The village of Tsesi in Racha Region is surrounded by mountains and covered in lush greenery. There, at the confluence of the Lukhuni and Rioni Rivers, stands Barakoni Church serving as a timeless monument of Georgian architecture.",
          secondImg:
            "/assets/location/barakoni-church-of-virgin-mary-gnta (1).webp",
          thirdImg: "/assets/location/shaori-lake-gnta (1).webp",
          thirdTitle: "Shaori Lake",
          thirdDescription:
            "In Racha Region, in the heart of snow-covered peaks, dense forests, and meadows full of flowers, the man-made Shaori Lake creates a wonderful environment for fun and relaxation.",
          fourthTitle: "Rafting on the Rioni: Utsera-Oni",
          fourthDescription:
            "This rafting route on the Rioni River flows through the beautiful Racha region in northern Georgia.",
          fourthImg: "/assets/location/rafting-on-rioni-oni-ambrolauri.webp",
          fifthImg: "/assets/location/shovi-udziro-tba-glola-gnta.webp",
          fifthTitle: "Shovi - Lake Udziro - village Glola",
          fifthDescription:
            "30 kilometers away from Oni Town in Racha Region, at 1,600 meters above sea level, you can take one of the best trekking routes in this area. It starting from the Shovi resort.",
          sixthTitle: "Ambrolauri",
          sixthDescription:
            "At the confluence of the Rioni and Krikhula Rivers, a small city was built to act as a residence for the kings of Imereti in the 17th century. This city, Ambrolauri, is today the administrative centre of Racha-Lechkhumi and Kvemo Svaneti Region, and is a place of cold winters, hot, dry summers, and beautiful wilderness.",
          sixthImg: "/assets/location/ambrolauri-gnta (1).webp",
          seventhImg: "/assets/location/oni-gnta.webp",
          seventhTitle: "Oni",
          seventhDescription:
            "The cozy town of Oni is 210 kilometers from Tbilisi, on the left bank of the Rioni River, in a deep valley. Oni is first mentioned in historical sources in the 15th-16th centuries, but people have lived where the town stands now since the Bronze Age. The town itself was founded in the 2nd century BCE by Parnajom, the king of Iberia, confirmed by the discovery of items during the Bronze Age from the 6th to 3rd centuries.",
          eighthTitle: "Shovi",
          eighthDescription:
            "It is not uncommon for Georgians to escape to the mountains during the summer months, with the Racha region an especially popular escape from the often oppressive summer heat. If you find yourself in Georgia between June and October, why not beat the heat by taking a visit to the Pearl of the Mountains - Shovi?",
          eighthImg: "/assets/location/shovi-gnta.webp",
        },
      ],
      topExperiences: [
        {
          id: 1,
          title: "Cultural Monuments",
          bgImg: "/assets/location/tower-in-georgia.webp",
          monument: [
            {
              id: 1,
              title: "Nikortsminda Cathedral",
              description:
                "Arches with luxurious carvings, frescoes with diverse stories, and a high dome reaching for the sky are among the reasons that Nikortsminda Church is recognized as a masterpiece of Georgian national architecture. Moreover, it is on the Tentative list for status of UNESCO's World Heritage. You should definitely visit this marvelous place, once you pass by in the village of Nikortsminda in the north-western Georgian region, Racha.",
              img: "/assets/location/nikortsminda-cathedral (1).webp",
            },
            {
              id: 2,
              title: "Minda Fortress",
              description:
                "If you are equally attracted to adventure and historic monuments, visit Racha, one of the most beautiful areas of western Georgia and climb up to Minda fortress, which is perched on a high, rocky cape near the village of Tsesi. One of the most difficult to reach in Georgia, it sits on the top of the mountain and a narrow path leads to it.",
              img: "/assets/location/minda-fortress-gnta.webp",
            },
            {
              id: 3,
              title: "Orbeli Fortress",
              description:
                "During the 16th and 17th centuries, Orbeli Fortress in the Lechkhumi Region was regarded as one of the most spectacular buildings in the region due to its architectural, stylistic, and strategic importance. Today, the ruins of this once impressive structure remain for us to explore, providing invaluable insights into the history of the region and of Georgia as a whole.",
              img: "/assets/location/orbeli-fortress-gnta.webp",
            },
            {
              id: 4,
              title: "Oni Synagogue",
              description:
                "In Oni city, in the Racha region, there is a synagogue, similar to the synagogue in Warsaw, which was destroyed during World War II. This square, domed synagogue was built in 1895 and has an interesting story to tell.",
              img: "/assets/location/oni-synagogue-gnta.webp",
            },
            {
              id: 5,
              title: "Chelishi Monastery in Racha",
              description:
                "In the beautiful Racha Region, 4 kilometers away from Nikortsminda village, in the deep gorge of Shareula river, stands a church of the Mother of God. Around the church are ruins of the monastic ensemble buildings – remnant of the distant past.",
              img: "/assets/location/chelishi-monastery-gnta.webp",
            },
            {
              id: 6,
              title: "Barakoni Church",
              description:
                "The village of Tsesi in Racha Region is surrounded by mountains and covered in lush greenery. There, at the confluence of the Lukhuni and Rioni Rivers, stands Barakoni Church serving as a timeless monument of Georgian architecture.",
              img: "/assets/location/barakoni-church-of-virgin-mary-gnta-m.webp",
            },
          ],
        },
        {
          id: 2,
          bgImg: "/assets/location/arts-and-culture-in-georgia.webp",
          title: "Arts & Culture",
          culture: [
            {
              id: 1,
              title: "Khvanchkara Wine Monument",
              description:
                "Wine is a way of life across all of Georgia, but the municipality of Ambrolauri has taken that love affair to a new level with the impressive Khvanchkara Wine Monument. This massive bottle of wine is a monument to the red wine Kvanchkara, which is made using two varieties of grapes grown in the region.",
              img: "/assets/location/ambrolauri-gnta (1).webp",
            },
            {
              id: 2,
              title: "Museum of Local Lore in Oni",
              description:
                "Old manuscripts, historical documents, books, coins, modern Georgian works of art – all of this and more can be found in the Oni Local Lore Museum. Oni Town, and the wider region of Racha in general, is an astounding part of the country.",
              img: "/assets/location/oni-museum-of-local-lore-gnta-m.webp",
            },
            {
              id: 3,
              title: "Lentekhi Lado Museliani Museum of Local Lore",
              description:
                "The Lentekhi Lado Museliani Museum of Local Lore is an important cultural site in Kvemo Svaneti. Archaeological materials from the Bronze Age, religious items from the 11th - 12th centuries, handwritten prayers from the 17th-18th centuries, and ethnographic material representing everyday life in Svaneti are just some of what you’ll see at this fascinating museum.",
              img: "/assets/location/lentekhi-museum-of-local-lore-gnta.webp",
            },
            {
              id: 4,
              title: "House Museum of Lado Asatiani",
              description:
                "Located in one of the most beautiful parts of western Georgia, in the must-see Lechkhumi, is the house museum of Georgian poet Lado Asatiani.",
              img: "/assets/location/lado-asatiani-house-museum-gnta.webp",
            },
            {
              id: 5,
              title: "Tsageri Green Theater",
              description:
                "In Tsageri, you’ll find a theatre unlike any other in the world. The Green Theatre is an open air theatre that lives up to its name. Situated amidst green-clad mountains, and boasting a green stage and seats, it is aptly named!",
              img: "/assets/location/mtsvane-theatre-gnta-m.webp",
            },
            {
              id: 6,
              title: "Ambrolauri Museum of Fine Arts",
              description:
                "In the city of Ambrolauri in Lower Racha, surrounded by avenues of willow and fir trees, stands a house of culture inside a vaulted building in the central square. Here is where you will find the Ambrolauri Museum of Fine Arts. After you walk through the gorgeous streets of Ambrolauri, you can visit the museum and familiarise yourself with the creativity of Georgian artists. ",
              img: "/assets/location/ambrolauri-museum-of-fine-arts-m.webp",
            },
          ],
        },
        {
          id: 3,
          bgImg: "/assets/location/nature-of-georgia.webp",
          title: "Natural Wonders",
          nature: [
            {
              id: 1,
              title: "Udziro Lake",
              description:
                "Relaxation at the lakeshore is a special kind of pleasure. Choose from the charming 860 lakes in Georgia to connect with nature!",
              img: "/assets/location/shovi-udziro-tba-glola-gnta (1).webp",
            },
            {
              id: 2,
              title: "Khvamli Mountain",
              description:
                "The regions of western Georgia boast the millenia of history. Here, you’ll find pre-Christian settlements, fortresses and churches, breathtaking natural beauty, glimmering lakes, and bountiful gardens. Between the Tsageri and Tskaltubo Municipalities lies Khvamli Mountain. This craggy, heavily forested mountain is home to nineteen caves, including Tekenteri and the frozen cave Boga.",
              img: "/assets/location/khvamli-mountain-gnta.webp",
            },
            {
              id: 3,
              title: "Shaori Lake",
              description:
                "In Racha Region, in the heart of snow-covered peaks, dense forests, and meadows full of flowers, the man-made Shaori Lake creates a wonderful environment for fun and relaxation.",
              img: "/assets/location/shaori-lake-gnta (1).webp",
            },
            {
              id: 4,
              title: "The Sairme Pillars – A Unique Natural Monument",
              description:
                "At night time with the right lighting, the Sairme Pillars resemble magical towers floating in the clouds. This sight formed as a result of natural processes over the millennia and can also be seen from the main road going from Racha to Lechkhhumi regions.",
              img: "/assets/location/sairme-pillars-gnta.webp",
            },
            {
              id: 5,
              title: "Waterfall of Love",
              description:
                "The north-western part of Georgia is famous for its abundance of cultural monuments and the diversity of its landscapes. Racha region has always stood out for its serene, calm beauty. Out of many waterfalls there, one of the most popular is the grandly named Waterfall of Love, located very next to the city of Ambrolauri.",
              img: "/assets/location/waterfall-of-love-qvabtkari-gnta.webp",
            },
            {
              id: 6,
              title: "Kvirila Waterfall",
              description:
                "When traveling in the Ambrolauri Municipality, do not forget to visit Zeda Shavra’s magnificent waterfall.",
              img: "/assets/location/kvirila-waterfall.webp",
            },
          ],
        },
      ],
      popular: [
        {
          firstImg: "/assets/location/Tsageri.jpg",
          secondImg: "/assets/location/Shovi.jpg",
          thirdImg: "/assets/location/oni-gnta.webp",
          fourthImg: "/assets/location/ambrolauri-gnta.webp",
          title: "Destinations in Racha-Lechkhumi & Kvemo Svaneti",
          description:
            "The historical regions Racha-Lechkhumi & Kvemo Svaneti offer a wonderful mix of history and unspoiled natural beauty. Visit Shaori and Udziro Lakes, marvel at the frescoes of Nikortsminda Cathedral, feel the time slowing down in Oni and Shovi, ascend to the top of Khvamli Mountain, enjoy the views of Lailashi reservoir and Tsageri panorama from Muri Fortress, and unwind in the wineries around Ambrolauri and Tvishi.",
        },
      ],
    });
    server.create("location", {
      id: 5,
      title: "Mtskheta-Mtianeti",
      title_Img: "/assets/location/Mtskheta Mtianeti.jpg",
      title_Description:
        "The Mtskheta-Mtianeti region is one of the most beautiful parts of Georgia. At the very heart of Georgia, this region is an all-season tourist attraction, with popular summer and winter destinations including the historic town of Mtskheta, the alpine resort Gudauri, the proud peak of Kazbegi (Mkinvartsveri) Mountain, Truso and Dariali Gorges, as well as the Pshav-Khevsureti and Kazbegi National Parks. Some of Georgia’s most important historic, cultural, and natural monuments can be found within this region. Split in two by the Caucasus Mountains, the region is connected by the breathtaking Jvari Pass, and includes the municipalities of Mtskheta, Dusheti, Tianeti, and Kazbegi.",
      major_Title: "Mtskheta ",
      major_Img: "/assets/location/mtskheta-in-georgia.webp",
      major_Description:
        "The administrative center of the region and Georgia’s oldest capital, Mtskheta is now considered a city museum. Settlements both in and around Mtskheta date back to the ancient past, and it was in Mtskheta that Georgia became a Christian nation at the beginning of the 4th century CE. The first Orthodox church was built here, and a number of local landmarks - Jvari Monastery, Samtavro Monastery, and Svetitskhoveli Church - are on the UNESCO World Heritage List.",
      secondary_Major_Title: "Dusheti",
      secondary_Major_Img:
        "/assets/location/ananuri-fortified-castle-ensemble-2.webp",
      secondary_Major_First_Description:
        "The largest municipality in the region, Dusheti is home to many unique historical monuments such as the 16th - 18th-century Ananuri Fortress Complex, Bodorna Church, and Mchadijvari Church.  The Dusheti Historical Museum also preserves the rich cultural artifacts of this region.",
      secondary_Major_Second_Description:
        "In addition to its historic significance, Dusheti is also home to the beautiful Abudelauri and Bazaleti Lakes; the four Aragvi Rivers – the Mtiuleti (White) Aragvi, the Gudamakari (Black) Aragvi, the Khevsureti Aragvi, and the Pshavi Aragvi; the Pshav-Khevsureti National Park, with fabulous landscapes and natural formations such as the Roshka Rocks and Tanie Lake; and villages with a cultural heritage dating back to the Middle Ages – Shatili, Mutso, Ardoti, Khakhabo, and more. ",
      minor_Title: "Tianeti",
      minor_First_Description:
        "The Iori River flows through Tianeti, feeding Sioni Reservoir - a popular summer getaway for Georgians from all walks of life.",
      minor_Second_Description:
        "Visitors can learn more about the history of Tianeti with a visit to the Tianeti Local Museum, where artifacts from the Bronze Age through until the late Middle Ages are on display. A particularly significant monument in the region is the ancient Bochorma Fortress Complex, whose construction date is unknown, but is estimated to have been built no later than the 10th century.",
      minor_Third_Description:
        "The journey from Tbilisi to Tianeti is a remarkable one, as your drive will take you through the picturesque Sabaduri Forest. The forest is especially beautiful in snowy winter months when you’ll pass through tunnels of snow frozen to the branches of trees. It’s absolutely magical.",
      secondary_Minor_Title: "Kazbegi",
      secondary_Minor_Img: "/assets/location/gergeti-church-in-kazbegi.webp",
      secondary_Minor_First_Description:
        "After Tbilisi and Batumi, Kazbegi is one of Georgia’s most popular tourist destinations. Set high in the mountainous region in the nation’s north, Kazbegi’s breathtaking landscape, abundant rivers and lakes, and quaint villages make it a charming destination.",
      secondary_Minor_Second_Description:
        "Kazbegi is most famous for its picturesque surroundings. The snow-capped Caucasus Mountains, the severe beauty of the “Northern Gateway” of Dariali Gorge, the lovely valleys of Truso, Arkhmo, and Khada, and an abundance of rivers, lakes, streams, and waterfalls all make this one of the most photo-friendly places you’ll ever see.",
      secondary_Minor_Third_Description:
        "Notable tourist attractions in Kazbegi include the mountain village of Stepantsminda, the quaint village of Sno, and Juta, one of the highest-altitude settlements in Georgia. In winter, the country’s premier ski resort Gudauri, is also a popular destination.",
      secondary_Minor_Fourth_Description:
        "Kazbegi is also home to upwards of fifty historical monuments, including churches and caves. The region’s main place of worship is the picture-perfect 14th-century Gergeti Trinity Church, the beauty of which is only enhanced by the glorious Kazbegi Mountain (5054m) that watches over it.",
      tour: [
        {
          id: 1,
          title: "One-Day Tour in Mtskheta",
          description:
            "Mtskheta, an exceptional choice for a day’s walk, where you can see Jvari Monastery, the symbol of Christianity coming to and spreading through Georgia, go visit Svetitskhoveli Cathedral, shining with especial beauty, and take time for the Samtavro Monastery Complex, and head to Shiomghvime Monastery, built in the 6th century.",
          img: "/assets/location/mtskheta.webp",
          firstImg: "/assets/location/shiomghvime-monastery-gnta.webp",
          firstTitle: "Shio Mghvime Monastery",
          firstDescription:
            "The Shio Mghvime Monastery near Mtskheta began its history in the 6th century, when Saint Shio - one of the founding fathers of Christianity in Georgia - arrived to the region from Syria and started building a church.",
          secondTitle: "Svetitskhoveli – A Treasure of World Art",
          secondDescription:
            "You may not be surprised to learn that a country with such a rich history as Georgia is also home to a remarkable number of legends, some of which might even be true! Svetitskhoveli is a place that has preserved numerous legends and secrets for the modern generation to unravel and enjoy.",
          secondImg: "/assets/location/svetitskhoveli-cathedral-gnta (1).webp",
          thirdImg: "/assets/location/jvari-monastery-gnta (1).webp",
          thirdTitle:
            "Jvari Monastery – A Step Forward for Georgian Architecture",
          thirdDescription:
            "To the east of the city of Mtskheta, Jvari Monastery stands atop a rocky cliff, looking down upon Mtskheta like a stoic guardian. An outstanding monument of Georgian architecture, the name and location of the church are no coincidence, since this is where Saint Nino set up her wooden cross in the 4th century.",
          fourthTitle: "Samtavro Monastery – UNESCO World Heritage",
          fourthDescription:
            "In the center of the city of Mtskheta is an outstanding monument of Georgian architecture – Samtavro Monastery, a UNESCO World Heritage site.",
          fourthImg: "/assets/location/samtavro-church-gnta.webp",
          fifthImg: "/assets/location/mtskheta-gnta (1).webp",
          fifthTitle: "Mtskheta",
          fifthDescription:
            "A popular day trip from Tbilisi, historic Mtskheta is sometimes called “Little Jerusalem” on account of the town’s immense cultural and religious significance. The former Georgian capital is also the seat of the Georgian church, and is a veritable living museum with all of the historic sites in and around the town.",
        },
        {
          id: 2,
          title: "Two-Day Tour in Kazbegi",
          description:
            "In this region, you will encounter ancient fortresses, medieval churches built atop mountain peaks, exceptional views, and places with unbelievable beauty, where the harmonious juxtaposition of the beauty of nature and of culture will make your two-day trip even more interesting and attractive.",
          img: "/assets/location/stepantsminda-gergeti-stepantsminda-gnta.webp",
          firstImg: "/assets/location/chaukhi-peaks-gnta.webp",
          firstTitle: "Peaks of Chaukhi",
          firstDescription:
            "Chiukhi (Chaukhi) Massif is one of the most spectacular and popular mountain sights in Georgia, which attracts visitors from all around the world. The massif is famous for its multiple peaks, which are attractive for both beginners and professional climbers.",
          secondTitle: "Ananuri Fortified Castle Ensemble",
          secondDescription:
            "An imposing fortress that has heroically stood the test of time, Ananuri Fortress was once the fortress of the feudal family residing on Aragvi River, from where they used to control strategic roads. Today, the remnants of this impressive fortification are a popular tourist attraction on the way to Kazbegi.",
          secondImg:
            "/assets/location/ananuri-fortified-castle-ensamble-gnta.webp",
          thirdImg:
            "/assets/location/jvari-overpass-travertine-natural-monument-gnta.webp",
          thirdTitle: "Jvari Pass Travertine National Monument",
          thirdDescription:
            "Georgia’s unique geographical location is the reason for the diversity of its nature. Moving boulders, cliff pillars, deep canyons, volcanic formations, boiling lakes, and petrified forests – are all examples of impressive natural monuments and the creativity of nature. Travertine is a hard, porous, low-density, semi-crystalline rock, made as a result of the precipitation of calcium carbonate. It is often secreted from underground waters, creating stalactites and stalagmites in caves.",
          fourthTitle: "Sno Fortress",
          fourthDescription:
            "Everyone should see the beautiful peaks of Kazbegi and Chiukhi Massif at least once in their life. It is impossible to get here and not admire the nature of this amazing land, wrapped in a thick layer of beautiful legends.",
          fourthImg: "/assets/location/sno-fortress-gnta.webp",
          fifthImg: "/assets/location/abudelauri-lakes-gnta.webp",
          fifthTitle: "Abudelauri Lakes",
          fifthDescription:
            "The colourful lakes of Abudelauri are one of the most visually appealing natural sights of Georgia. This is also a wonderful hiking destination, so if you're traveling to Georgia in summer, consider adding this wild piece of paradise to your must-visit list.",
          sixthTitle: "Gveleti Waterfall",
          sixthDescription:
            "The hike into the mountainous Dariali Valley is going to leave you breathless, but you’ll somehow still find a way to have your breath taken away by the splendour of Gveleti Waterfall. A short drive from popular Stepantsminda in Kazbegi, this waterfall is a must-see while in the country’s mountainous north.",
          sixthImg: "/assets/location/gveleti-waterfall-gnta.webp",
          seventhImg: "/assets/location/gergeti-trinity-church-gnta.webp",
          seventhTitle: "Gergeti Trinity Church",
          seventhDescription:
            "Unquestionably one of Georgia’s most recognizable monuments, the Gergeti Trinity Church is sure to have crossed your Instagram page in the past. Soaring high above the clouds against a backdrop of towering mountains, this picturesque 14th century church is a must see on any Georgian adventure.",
          eighthTitle: "Stepantsminda",
          eighthDescription:
            "Stepantsminda stands out on the map of Georgia, not just for being just eleven kilometres from the northern border of the country, but also due to the fact that one of the oldest crossroads between Europe and Asia passes through the town. It is not known when Stepantsminda was founded, but a treasure hoard from the 6th-5th centuries BCE was discovered here.",
          eighthImg: "/assets/location/stepantsminda-gnta.webp",
          ninthImg: "/assets/location/gudauri.webp",
          ninthTitle: "Gudauri",
          ninthDescription:
            "Georgia is home to many exceptionally beautiful winter resorts, but Gudauri might be the most well-known of them. Situated 120 kilometers away from Tbilisi, this amazing mountain and ski resort is especially popular due to its accessibility. You can depart from sunny Tbilisi and be on the slopes before lunch. Gudauri is covered with snow for about five months out of the year, making it perfect for skiers, extreme sports enthusiasts, active travelers, and people who are drawn to the alpine charm of Georgia’s mountains.",
        },
      ],
      topExperiences: [
        {
          id: 1,
          title: "Cultural Monuments",
          bgImg: "/assets/location/tower-in-georgia.webp",
          monument: [
            {
              id: 1,
              title: "Gergeti Trinity Church",
              description:
                "Unquestionably one of Georgia’s most recognizable monuments, the Gergeti Trinity Church is sure to have crossed your Instagram page in the past. Soaring high above the clouds against a backdrop of towering mountains, this picturesque 14th century church is a must see on any Georgian adventure.",
              img: "/assets/location/gergeti-trinity-church-gnta (1).webp",
            },
            {
              id: 2,
              title: "Svetitskhoveli – A Treasure of World Art",
              description:
                "You may not be surprised to learn that a country with such a rich history as Georgia is also home to a remarkable number of legends, some of which might even be true! Svetitskhoveli is a place that has preserved numerous legends and secrets for the modern generation to unravel and enjoy.",
              img: "/assets/location/svetitskhoveli-cathedral-gnta (2).webp",
            },
            {
              id: 3,
              title: "Dariali Monastery",
              description:
                "There are many unforgettable architectural monuments for you to discover in Georgia, but if you’re entering the country at the Kazbegi-Larsi border crossing, the first object you’ll encounter is the stunning Dariali Monastery in the Dariali Gorge. Nestled amidst the towering Caucasus Mountains at a height of 1,300 meters above sea level, this gorgeous monastery may be new, but it emulates the feel of the ancient monasteries that inspired it.",
              img: "/assets/location/dariali-monastery.webp",
            },
            {
              id: 4,
              title: "Sno Fortress",
              description:
                "Everyone should see the beautiful peaks of Kazbegi and Chiukhi Massif at least once in their life. It is impossible to get here and not admire the nature of this amazing land, wrapped in a thick layer of beautiful legends.",
              img: "/assets/location/sno-fortress-gnta (1).webp",
            },
            {
              id: 5,
              title: "The Fortress of Bebris Tsikhe",
              description:
                "Georgia has a history that spans millennia, and it has been a history rife with conflict. On many occasions in its tumultuous past, Georgia has been forced to fight to save itself, repel its enemies, and preserve its identity. The witnesses of such cases are multiple Georgian fortresses that stand proudly atop hills and mountains across the country, overlooking the amazing landscapes like knights who have fulfilled their duties and can rest at last.",
              img: "/assets/location/bebris-tsikhe-foretress.webp",
            },
            {
              id: 6,
              title: "Armazis Khevi",
              description:
                "Near Georgia’s ancient capital city, Mtskheta, a beautiful valley surrounds the village of Armazi, through which the quaint Armazistskali River flows. The valley is 5-6 kilometers long, with important monuments at every turn.",
              img: "/assets/location/armazis-khevi-gnta.webp",
            },
          ],
        },
        {
          id: 2,
          bgImg: "/assets/location/arts-and-culture-in-georgia.webp",
          title: "Arts & Culture",
          culture: [
            {
              id: 1,
              title: "Great Mtskheta State Archaeological Museum-Reserve",
              description:
                "Just outside Tbilisi, you will find a vast collection of historical monuments and archaeological finds of both international and national importance, all brought together by the Great Mtskheta State Archaeological Museum-Reserve.",
              img: "/assets/location/great-mtskheta-archaeology-state-museum-reserve-gnta.webp",
            },
            {
              id: 2,
              title: "Ilia Chavchavadze Saguramo State Museum",
              description:
                "If you’ve spent any time in a Georgian city, you’ll likely already be familiar with the Chavchavadze name as many streets are named after him. But who was Ilia Chavchavadze? And why is he held in such high esteem by Georgians?",
              img: "/assets/location/ilia-chavchavadze-museum-gnta-m.webp",
            },
            {
              id: 3,
              title: "Vazha-Pshavela and Chargali",
              description:
                "Like something out of a fairytale, the village of Chargali exists in a land of beautiful forests, golden fields, gigantic mountains, and breathtaking views. Located in Dusheti municipality, the village was also the home of the great Georgian poet, writer, and journalist Vazha-Pshavela.",
              img: "/assets/location/vazha-pshavela-house-museum-gnta.webp",
            },
            {
              id: 4,
              title: "Dusheti Local Museum",
              description:
                "Home to more than 9,000 objects ranging from the early Bronze Age up to the late Middle Ages, the Dusheti Local Museum aims to bring ancient history to life before your very eyes.",
              img: "/assets/location/dusheti-museum-of-local-lore-gnta.webp",
            },
            {
              id: 5,
              title: "Giorgi and Davit Eristavi House-Museum",
              description:
                "Giorgi Eristavi was a man of many talents. The famous 19th-century playwright, poet, public figure, actor, and translator achieved many great things in his lifetime, including building the Georgian theatre and founding the first Georgian magazine, “Tsiskari”. His son, Davit Eristavi, was also a well-known journalist and translator. Both men lived and worked in the small village of Odzisi in the Mtskehta-Mtianeti region, where you’ll find a fascinating house museum dedicated to their extraordinary lives.",
              img: "/assets/location/giorgi-maisuradze-museum.webp",
            },
            {
              id: 6,
              title: "Mukhrani Fortress",
              description:
                "In the Mtskheta-Mtianeti Region, you can find multiple monuments of historical and cultural importance. One outstanding example of Georgian historic fortifications is Mukhrani Fortress, near the village which shares its name.",
              img: "/assets/location/mukhrani-fortress-gnta-m.webp",
            },
          ],
        },
        {
          id: 3,
          bgImg: "/assets/location/nature-of-georgia.webp",
          title: "Natural Wonders",
          nature: [
            {
              id: 1,
              title: "Abudelauri Lakes",
              description:
                "The colourful lakes of Abudelauri are one of the most visually appealing natural sights of Georgia. This is also a wonderful hiking destination, so if you're traveling to Georgia in summer, consider adding this wild piece of paradise to your must-visit list.",
              img: "/assets/location/abudelauri-lakes-gnta (1).webp",
            },
            {
              id: 2,
              title: "Truso Valley",
              description:
                "Despite its relatively small size, Georgia is a country of immense diversity, with uniquely beautiful places scattered across the countryside just waiting to be discovered. One such place is the breathtaking Truso Valley.",
              img: "/assets/location/trusso-valley-gnta-m.webp",
            },
            {
              id: 3,
              title: "Gveleti Waterfall",
              description:
                "The hike into the mountainous Dariali Valley is going to leave you breathless, but you’ll somehow still find a way to have your breath taken away by the splendour of Gveleti Waterfall. A short drive from popular Stepantsminda in Kazbegi, this waterfall is a must-see while in the country’s mountainous north.",
              img: "/assets/location/gveleti-waterfall-37.jpg",
            },
            {
              id: 4,
              title: "Mount Kazbegi (Mkinvartsveri)",
              description:
                "This notorious peak, covered in snow year-round, stands 5,054 metres above sea level, and is also known as Mkinvartsveri, Kazbegi Peak, or the Bride of Khevi.",
              img: "/assets/location/mount-kazbegi-mkinvartsveri-gnta.webp",
            },
            {
              id: 5,
              title: "Bazaleti Lake",
              description:
                "Sometimes, the hustle and bustle of city life get to be too much for us, even when we’re on vacation! When staying in the city doesn't sound like a good idea, and you don't have time to travel too far away, a trip to the countryside of Georgia within a 1-2 hour drive is just what the doctor ordered. So why not drive to Bazaleti Lake for a day? Famed for its healing waters and many legends that surround them, Bazaleti Lake is also a good place to bike, get tanned and enjoy q farm-to-table lunch.",
              img: "/assets/location/bazaleti-lake-gnta.webp",
            },
            {
              id: 6,
              title: "Lake Sioni",
              description:
                "Traveling from Tbilisi to Sioni village in Tianeti area takes a little more than an hour. This resort, distinguished by its natural conditions, climate, and proximity to the capital, attracts many vacationers, especially in summer.",
              img: "/assets/location/sioni-lake.webp",
            },
          ],
        },
      ],
      popular: [
        {
          firstImg: "/assets/location/Stepantsminda.jpg",
          secondImg: "/assets/location/Shatili.jpg",
          thirdImg: "/assets/location/mtskheta-gnta.webp",
          fourthImg: "/assets/location/gudauri-gnta.webp",
          title: "Popular Destinations in Mtskheta-Mtianeti",
          description:
            "Mtskheta-Mtianeti Region promises to be an amazing adventure for you! Challenge yourself with mountainous routes in Kazbegi, Truso, Juta and Abudelauri, try the white water rafting at Aragvi River, spend a night in a fortress-village of Shatili, and explore the mysterious abandoned Mutso fortress. Enjoy the fresh powder at the slopes of Gudauri. Feel the closeness to nature!",
        },
      ],
    });
    server.create("location", {
      id: 6,
      title: "Kvemo Kartli",
      title_Img: "/assets/location/dashbashi-canyon(1).jpg",
      title_Description:
        "This historical region of Kvemo Kartli, located just south of Tbilisi, is renowned as a must-visit in Georgia. Many centuries ago, even before the Christianization of the country, Kartvelian tribes inhabited the region. They experienced many ups and downs: peaceful and prosperous times, as well as periods of constant invasions during the 13th century that completely depopulated the region. Later, this area also witnessed the attacks of Timur and an epidemic of the Black Death. Today the Kvemo Kartli region comprises several municipalities including Bolnisi, Gardabani, Dmanisi, Tetritskaro, Marneuli, Tsalka while bordering the republics of Azerbaijan and Armenia to the south. The population, besides ethnic Georgians, consists of Armenians, Azeris, Abkhazians, Ossetians, Russians, Greeks, Ukrainians, and Kurds.",
      major_Title: "The Sites in Kvemo Kartli",
      major_First_Description:
        "Kvemo Kartli is full of historic and cultural sites. The Dmanisi Settlement is especially interesting for history buffs. Bone fragments of 1.8-million-years-old hominids were found here, which added another link in the chain of human migration from Africa. On the way from Africa to Europe, the primeval humans (Homo erectus) settled on the territory of modern Georgia, and that is the reason to say that the first Europeans actually came from here.",
      major_Img: "/assets/location/the-urban-archaeology-of-dmanisi.webp",
      major_Second_Description:
        "Dmanisi and nearby Orozmani sites are still objects of research by the world’s scientists to this day.",
      major_Third_Description:
        "Another interesting settlement from thousands of years ago is Samshvilde Fortress City, where the remains of military and religious buildings have been found.",
      major_Fourth_Description:
        "In the Algeti River Valley, you find the ancient Birtvisi Fortress, a fortified structure atop a rocky, spired mountain, which was, at one time, considered impregnable. Besides it, the Kldekari Fortress and Khuluti Fortress are unique examples of medieval Georgian architecture.",

      minor_First_Description:
        "The history of the German settlements in Kvemo Kartli has started from 1817, once the first colonists arrived in Georgia from Swabia. The majority of them settled in Kvemo Kartli and lived there for decades. The largest German settlement was Katarinenfeld, which is now Bolnisi. Still standing now are houses that were built using the German Fachwerk style.",
      minor_Img: "/assets/location/dashbashi-canyon(1).jpg",
      minor_Second_Description:
        "Kvemo Kartli also has many churches and monasteries. The Bolnisi Sioni is quite a site as it’s one of the first basilicas in Georgia, dating back to the 5th century, where ancient Georgian inscriptions and a depiction of a Bolnisi Cross are preserved. Other outstanding sites include the Pitareti, Gudarekhi, Martkopi, Tserakvi and Manglisi Sioni monasteries. ",
      minor_Third_Description:
        "For art and history lovers, visit the museums of local lore in Rustavi, Tetritskaro, Gardabani, as well as truly brilliant Bolnisi Museum and Dmanisi Archaeological Museum. Don’t skip the house museum of Sulkhan-Saba Orbeliani in Tandzia Village, honoring the 17th-century writer, educator, and one of the first Georgian diplomats.",
      secondary_Minor_Title: "Nature in Kvemo Kartli",
      secondary_Minor_First_Description:
        "Kvemo Kartli is also rich in natural monuments, with most located in Algeti National Park. You can also plan walking tours, hiking tours, or horseback rides on the eco-tourism routes that lead to several beautiful natural sites such as the Gardabani Managed Reserve, the colorful Mravaltskaro Desert, the Samshvilde Canyon, and more.",
      secondary_Minor_Img: "/assets/location/dashbashi-canyon(1).webp",

      secondary_Minor_Second_Description:
        "One amazing natural masterpiece is the Dashbashi Canyon, which is nestled in greenery and attracts numerous visitors with its beauty and charm. In addition, the Arjevani and Gomeri mountains are must-sees during any season.",
      secondary_Minor_Third_Description:
        "And that is not all! From colorful waterfalls, captivating canyons, alpine meadows, polychromatic deserts, and beautiful lakes, Kvemo Kartli has numerous breathtaking natural wonders. Don’t miss the Algeti, Jandari, Pantiani, Kumisi, Tamarisi, and Bareti lakes as well. If you like fishing and watching migratory birds, then Kvemo Kartli should be a part of your journey to discover the best this region has to offer.",
      tour: [
        {
          id: 1,
          title: "One-Day Kvemo Kartli Tour",
          description:
            "You definitely should take a trip through this region, with its rich culture, because you will come across a rich cultural heritage, archeological sites, nature famed for its beauty, and relics of a centuries-old history. The tour of Tsalka Canyon, Samshvilde Settlement, and Asureti will certainly make you feel something unique.",
          img: "/assets/location/dashbashi-in-tsalka.webp",
          firstImg: "/assets/location/dashbashi-canyon-gnta.webp",
          firstTitle: "Tsalka (Dashbashi) Canyon Natural Monument",
          firstDescription:
            "There is a place in southern Georgia that attracts adventure-seekers and adrenaline junkies wishing to experience the thrill of looking at a unique ecosystem from the ultramodern suspension bridge. Tsalka Canyon, also known as Dashbashi Canyon, is an eight-kilometre long canyon whose waterfalls, walking trails, and natural beauty make it a must-see for any nature enthusiast.",
          secondTitle:
            "Samshvilde - One of the oldest ruins of the Caucasus region",
          secondDescription:
            "The Samshvilde ruins, often called the “Orbisa Fortress,” are an archaeological treasure. They are one of the oldest ruins in the Caucasus region, distinguished by their architecture, terrain, appearance, and particular structure.",
          secondImg:
            "/assets/location/urban-archaeology-of-samshvilde-gnta.webp",
          thirdImg: "/assets/location/samshvilde-medieval-ruins-gnta.webp",
          thirdTitle: "Historic remains of Samshvilde city",
          thirdDescription:
            "A retrospective of Georgian culture awaits in Kvemo Kartli, 15 kilometers away from Tetritskaro. High on the hill, explore the ancient city ruins of Samshvilde.",
          fourthTitle: "Tsalka",
          fourthDescription:
            "Tsalka is a region of mountains, lakes, historical monuments, and archaeological treasures. The municipality in eastern Georgia, spread across the Trialeti mountain range, is especially interesting for those seeking an active vacation.",
          fourthImg: "/assets/location/tsalka-resorvoir-gnta.webp",
          fifthImg: "/assets/location/asureti-gnta.webp",
          fifthTitle: "Asureti",
          fifthDescription:
            "Believe it or not, you can experience a little bit of Germany while travelling through Georgia. For this, you should visit the village of Asureti, located in Tetritskaro municipality, on the banks of the Asuretiskhevi River.",
        },
        {
          id: 2,
          title: "One-Day Tour in Bolnisi and Dmanisi",
          description:
            "On this easy, one-day tour, you will go to Bolnisi and Dmanisi, full of historical adventures, where you will see exceptionally amazing and diverse cultural monuments, have the opportunity to relax in nature, and see the lifestyles of the first Europeans unfold in panoramas and museum exhibits before your very eyes.",
          img: "/assets/location/bolnisi.webp",
          firstImg: "/assets/location/bolnisi-sioni-gnta.webp",
          firstTitle: "Bolnisi Sioni",
          firstDescription:
            "The town of Bolnisi in Kvemo Kartli Region is famous for it’s gold and tuff stone mining, great wine, story of Georgian Germans and some important Christian worship sites. One of those is the church named after the Dormition of the Mother of God, also known as Bolnisi Sioni, one of the oldest and most important monuments of ancient Georgian architecture.",
          secondTitle: "Dmanisi - Home to the First Europeans",
          secondDescription:
            "Dmanisi, located 85 kilometers from Tbilisi, is of phenomenal interest to the world’s archaeologists. Crucially, this is where Zezva and Mzia - the first European hominids - were discovered. This discovery was made in 1991, and science journals later named the discovery Homo Georgicus and featured it among the 10 greatest discoveries.",
          secondImg: "/assets/location/urban-archaeology-of-dmanisi-gnta.webp",
          thirdImg: "/assets/location/tsurughasheni-church-gnta.webp",
          thirdTitle: "Tsughrughasheni Church",
          thirdDescription:
            "This light, airy, colourful church stretches up towards the sky and projects a sense of peacefulness and tranquillity. Tsughrughasheni Church always leaves an indelible impression on you, no matter whether you're seeing it for the first time or you've been here for many times before. Tsughrughasheni Church stands on the right bank of the Bolnisistskali River, near the village of Bolnisi in the Kvemo Kartli Region.",
          fourthTitle: "Bolnisi",
          fourthDescription:
            "Bolnisi is one of the most important agricultural municipalities of Georgia. The environment here is very beneficial for growing crops. The residents harvest thier veggies three times a year! Aside from its agricultural potency, locals are also keen to show the houses of German settlers to any visitors.",
          fourthImg: "/assets/location/bolnisi-gnta.webp",
          fifthImg: "/assets/location/urban-archaeology-of-dmanisi-gnta.webp",
          fifthTitle: "Dmanisi",
          fifthDescription:
            "A visit to Dmanisi is like a trip back in time. You’ll find yourself in the land of people who lived here 1.8 million years ago - a land of sabre tooth tigers, the Ice Age, and of cave houses from a forgotten age. Gold hoards have been found beneath the earth, while grand architectural monuments stand atop it. This ancient settlement in southern Georgia holds many of humanity’s secrets buried in its depths. Archaeologists have come across traces of ancient civilizations in the various soil layers of Dmanisi since excavations began in 1936, attracting the attention of academics from across the world.",
        },
      ],
      topExperiences: [
        {
          id: 1,
          title: "Cultural Monuments",
          bgImg: "/assets/location/tower-in-georgia.webp",

          monument: [
            {
              id: 1,
              title: "Birtvisi Fortress",
              description:
                "As soon as the weather starts to cool down and you have the urge to go hiking, the Birtvisi Fortress, just 70 kilometers from Tbilisi, is always a worthwhile trip.",
              img: "/assets/location/birtvisi-fortress-gnta.webp",
            },
            {
              id: 2,
              title: "Trialeti Kurgans",
              description:
                "In addition to experiencing Georgia’s soaring mountains, unforgettable views, and ancient monuments, visitors also have the chance to examine Georgia’s treasure trove of archeological artifacts.",
              img: "/assets/location/trialeti-petroglyps.webp",
            },
            {
              id: 3,
              title: "Bolnisi Sioni",
              description:
                "The town of Bolnisi in Kvemo Kartli Region is famous for it’s gold and tuff stone mining, great wine, story of Georgian Germans and some important Christian worship sites. One of those is the church named after the Dormition of the Mother of God, also known as Bolnisi Sioni, one of the oldest and most important monuments of ancient Georgian architecture.",
              img: "/assets/location/sioni-bolnisi-sioni-c-27.jpg",
            },
            {
              id: 4,
              title: "The Monastery at Elia Mountain",
              description:
                "Four kilometers away from Bolnisi (Kvemo Kartli Region), on the road leading up to Bolnisis Sioni church, on a rocky mountain, stands a monastery complex that was named after the apostles, Peter and Paul.",
              img: "/assets/location/monastery-at-elia-mountain-gnta.webp",
            },
            {
              id: 5,
              title: "Shavnabada Monastery",
              description:
                "If you would love to see the ancient monastery and even try the delicious wine made by the monkeys, then pay a visit to Savnabada Monastery, located in the village of Teleti, not far from Tbilisi.",
              img: "/assets/location/ug9pffp0e2d81.jpg",
            },
            {
              id: 6,
              title: "Gomareti Stelae",
              description:
                "On a small hill on the outskirts of the village of Gomareti in Dmanisi Municipality (Kvemo Kartli Region), there are a few stelae decorated with simple ornamentation which date back to the 6th and 7th centuries.",
              img: "/assets/location/gomareti-stela.webp",
            },
          ],
        },
        {
          id: 2,
          bgImg: "/assets/location/arts-and-culture-in-georgia.webp",
          title: "Arts & Culture",
          culture: [
            {
              id: 1,
              title: "Dmanisi - Home to the First Europeans",
              description:
                "Dmanisi, located 85 kilometers from Tbilisi, is of phenomenal interest to the world’s archaeologists. Crucially, this is where Zezva and Mzia - the first European hominids - were discovered. This discovery was made in 1991, and science journals later named the discovery Homo Georgicus and featured it among the 10 greatest discoveries.",
              img: "/assets/location/urban-archaeology-of-dmanisi-gnta-m.webp",
            },
            {
              id: 2,
              title: "Mrgvali Church",
              description:
                "Georgian civilisation dates back thousands of years, therefore Georgia is rich in historical monuments, and archaeologists constantly come across new “treasures”. One such is the Mrgvali Church, which was discovered in 1989.",
              img: "/assets/location/mrgvali-church.webp",
            },
            {
              id: 3,
              title: "German Bolnisi",
              description:
                "The city of Bolnisi is located in the Kartli region, just a few hours drive from Tbilisi, making it a fantastic day trip. Bolnisi’s has a unique German history beginning in the 19th century. At that time it was even called Katharinenfeld!",
              img: "/assets/location/german-bolnisi-gnta.webp",
            },
            {
              id: 4,
              title: "Martkopi Monastery",
              description:
                "In just one hour driving distance from Tbilisi, close to the village of Martkopi, a forest road will take you to a monastery complex built on the slopes of a mountain. This is Martkopi Monastery, a 6th-century monastery with a fascinating history of strife and rebirth.",
              img: "/assets/location/dji-0375-12.jpg",
            },
            {
              id: 5,
              title: "Rustavi History Museum",
              description:
                "Rustavi History Museum was founded in 1950, following the initiative of Giorgi Lomtatidze, one of the first Georgian archeologists.",
              img: "/assets/location/rustavi-museum-georgia.webp",
            },
            {
              id: 6,
              title: "Tetritskaro Local History Museum",
              description:
                "With its ancient architecture, archaeological finds and natural sights, Tetritskaro is an interesting place to travel. This area of the country has a long past, and if you are interested in history, start your trip with the local lore museum.",
              img: "/assets/location/tetritskaro-museum.webp",
            },
          ],
        },
        {
          id: 3,
          bgImg: "/assets/location/nature-of-georgia.webp",
          title: "Natural Wonders",
          nature: [
            {
              id: 1,
              title: "Tsalka (Dashbashi) Canyon",
              description:
                "This easily-accessible canyon is renowned for its many small waterfalls spread like a silver curtain on its steep rocks.",
              img: "/assets/location/dashbashi-canyon-gnta (1).webp",
            },
            {
              id: 2,
              title: "Algeti National Park",
              description:
                "Visitors in search of ecological, botanical and adventure tours near Tbilisi, should visit Algeti National Park, which is located in Tetritskaro municipality, 60 km from Tbilisi.",
              img: "/assets/location/AlgetiNationalPark.jpg",
            },
            {
              id: 3,
              title: "Tejisi Megalithic Constructions",
              description:
                "Scholars and scientists are unsure of the purpose of megaliths, the structures erected from huge stone boulders. Georgians believed that megalithic structures, built-in III-II millennia BC, were the ruins of settlements where devis , the mythologic giants, used to live.",
              img: "/assets/location/megaliths-of-tejisi-gnta.webp",
            },
            {
              id: 4,
              title: "Algeti Reservoir",
              description:
                "Around 55 kilometers from Tbilisi in Kvemo Kartli region, in Tetritskaro municipality, near the village of Tbisi, there is a reservoir on the Algeti River, spanning 2.3 sq km.",
              img: "/assets/location/algeti-reservoir.webp",
            },
            {
              id: 5,
              title: "Beshtasheni Waterfall",
              description:
                "While Beshtasheni Waterfall might not be the tallest waterfall in Georgia, it is remarkable for the clarity of its waters and the beautiful surroundings. Located in the village of Beshtasheni in Kvemo Kartli, it is a popular tourist destination in the spring.",
              img: "/assets/location/beshtasheni-canyon.webp",
            },
            {
              id: 6,
              title:
                "Jandara, Kumisi, and Bareti Lakes - Outstanding Places for Fishing",
              description:
                "Beautiful nature, an abundance of fish, and swathes of bird migration make the lakes of Kvemo Kartli a real paradise for fishing enthusiasts and bird-watchers alike.",
              img: "/assets/location/jandara-kumisi-bareti-lakes-gnta.webp",
            },
          ],
        },
      ],
      popular: [
        {
          firstImg: "/assets/location/Tsalka.jpg",
          secondImg: "/assets/location/tetritskaro-gnta.webp",
          thirdImg: "/assets/location/bolnisi-gnta.webp",
          fourthImg: "/assets/location/urban-archaeology-of-dmanisi-gnta.webp",
          title: "Popular Destinations in Kvemo Kartli",
          description:
            "Kvemo Kartli is a multicultural region with a rich history, where you will find numerous archaeological sites, churches and mosques, fortresses and old German houses. One discovery of worldwide importance is Dmanisi Settlement, where the hominids used to live 1.8 million years ago. The former German colonies of Asureti and Bolnisi will offer your amazing stories and great wine, Algeti National Park will welcome you to the unspoiled nature and great views, and in the ancient site of Samshvilde, you’d feel like you are in an adventure movie.",
        },
      ],
    });
    server.create("location", {
      id: 7,
      title: "Kakheti",
      title_Img: "/assets/location/kaxeti.jpg",
      title_Description:
        "Kakheti is the Chakrulo song that was sent into space as a message from Earth; Kakheti is the ancient monasteries that protected the important treasures; Kakheti is the Qvevri, an ancient winemaking vessel where aromatic, flavourful Georgian wine is born. Kakheti is the Alazani Valley and steep mountain passes, evergreen forests and arid steppes, densely populated villages and small, historical cities. How could you ever run out of reasons to visit Kakheti!",
      major_Title: "A Region that You Must Visit",

      major_First_Description:
        "Kakheti is a region of Georgia that shares borders with both the Russian Federation to the north and Azerbaijan to the east and the south.",

      major_Second_Description:
        "People have lived in this area since the Stone Age, and this is evident in the abundance of historical monuments that dot the landscape, many of which were educational centres in the past. One notable example of this is the Davitgareji Monastery Complex, which stretches across twenty-five kilometers and is famed for both its architecture and its art.",
      major_Img: "/assets/location/alaverdi.webp",
      major_Third_Description:
        "There is a collection of ecclesiastical architecture in Kakheti, with such amazing representatives as Alaverdi, Ikalto, Shuamta, Bodbe, Nekresi and other churches.",
      major_Fourth_Description:
        "For travelers who are interested in history, there are numerous museums in the region where ancient objects and ethnographic materials discovered during archaeological excavations are kept.",
      major_Fifth_Description:
        "Kakheti is the birthplace of many outstanding Georgians, including kings, artists, writers, and public figures, so there are many house-museums here to honour those people and help visitors who are interested in Georgia get to know them better. ",
      major_Sixth_Description:
        "These include the palace of King Erekle (Heraclius) II in Telavi; the museums of Ilia Chavchavadze and Kote Marjanishvili in Kvareli, and in Mirzaani,  the house-museum of Niko Pirosmanashvili.",
      minor_First_Description:
        "In addition to its fascinating history, Kakheti is also Georgia’s premiere winegrowing region. Due to the fertile soil and the abundance of sun, winemaking is a Kakhetian farmer’s primary business. The most popular varieties are Kakhuri Mtsvane, Saperavi, Rkatsiteli, and Khikhvi.",
      minor_Second_Description:
        "In addition to producing the best wines, Kakhetians are also famous for the quality of their food. Notable local dishes include mtsvadi, chakapuli, and khashlama, and for dessert they will have you try churchkhela and tatara made from grape juice.",
      minor_Img:
        "/assets/location/artsivis-kheoba-eagle-gorge-natural-monument.webp",
      minor_Third_Description:
        "Kakhetian folk songs are so powerful and epic that they make enemies retreat. Of course they are – nobody in Kakheti can even remember a full twenty-year period of peace in the past.  ",
      minor_Fourth_Description:
        "The Kakheti region is full of deep rivers and lakes. Some interesting places to hike are Black Rocks Lake, Rocho Waterfall, Artsivi Gorge, and the Alazani River Valley.",
      minor_Fifth_Description:
        "The Lagodekhi Protected Areas, which are the oldest protected areas in Georgia, will share a glorious wilderness with you. Many species of plants and animals here are rare and considered endangered in Georgia and internationally. Within the park, you’ll also find Machi Fortress, on the border of Georgia and Azerbaijan, with a unique history and location.",
      minor_Sixth_Description:
        "Furthermore, when you are in Kakheti you absolutely must visit Vashlovani National Park and Kilakupra Mud Volcanoes, where you’ll feel as if you’ve somehow journeyed to another planet!",
      minor_Seventh_Description:
        "Kakheti really does have it all: history, breathtaking natural beauty, amazing food and wine, and the trademark Georgian hospitality.",
      tour: [
        {
          id: 1,
          title: "Two-Day Kakheti Tour",
          description:
            "Come visit Kakheti, famous for its monuments from various different time periods and diverse nature, where you can go see ancient architectural monuments and impressive fortresses. This two-day tour will end up being a Kakhetian adventure for you, introducing you to new places and filling you with emotions.",
          img: "/assets/location/kakheti-tour.webp",
          firstImg: "/assets/location/gremi-gnta.webp",
          firstTitle: "Gremi Monastic Complex",
          firstDescription:
            "Once you are in Kakheti Region, if you take the road from Telavi to Kvareli, after about a 15 to 20-minute drive, you reach Gremi Complex, a 15th-century fortress city built on high ground.",
          secondTitle: "Gremi Archaeological Complex",
          secondDescription:
            "What was once a well-developed city in the 15th century, Kakheti is a location that many tourists flock to. The first population around Gremi most likely appeared in the late Bronze Age, but its history as a strategically and politically important city starts in the 15th century.",
          secondImg: "/assets/location/gremi-archeological-complex-gnta.webp",
          thirdImg: "/assets/location/nekresi-fire-temple-gnta.webp",
          thirdTitle: "Nekresi Fire Temple",
          thirdDescription:
            "Astrology was practiced in Georgia in even the most ancient periods of Georgian history. The Fire Temple, also known as The Temple of the Sun, is proof of this.",
          fourthTitle: "Gremi Fortress",
          fourthDescription:
            "This remarkable fortress, standing atop a rocky ridge for nearly 700 years, proudly overlooks the surroundings of Gremi Village, located in Kvareli Municipality in Kakheti.",
          fourthImg: "/assets/location/gremi-fortress-gnta.webp",
          fifthImg: "/assets/location/erekle-ii-museum-gnta.webp",
          fifthTitle: "The Palace Museum of King Erekle II",
          fifthDescription:
            "The only royal palace in Georgia that has been preserved to the modern day, the Museum of King Heraclius (Erekle) II is located in the city of Telavi, Kakheti Region. This impressive palace served as the royal residence in the 17th and 18th centuries, and today it houses a museum.",
          sixthTitle: "Old and New Shuamta",
          sixthDescription:
            "Built in a valley among high mountains, the monastery complexes known as Old Shuamta and New Shuamta are outstanding examples of Georgian architecture. Located seven kilometres from Telavi at the foot of Tsiv-Gombori Mountain, these structures take their name from their location, as Shua Mta translates into “among mountains”.",
          sixthImg:
            "/assets/location/dzveli-shuamta-and-akhali-shuamta-churches-gnta.webp",
          seventhImg: "/assets/location/house-museum-of-chavchavadze-gnta.webp",
          seventhTitle:
            "The Aleksandre Chavchavadze House Museum in Tsinandali",
          seventhDescription:
            "Tsinandali Estate is one of the most exciting destinations in Kakheti that includes a winery and an modest, but beautiful palace, whose history is closely intertwined with that of Prince Aleksandre Chavchavadze’s family. Two branches of Chavchavadze family were immensely influential in 19th-century Georgia, a fact reflected by the number of streets named after them!",
          eighthTitle: "Telavi",
          eighthDescription:
            "Telavi is the cultural center of Kakheti, a medieval city with a long and complex history, neat architecture, a royal palace, verdant surroundings, modern amenities, and hospitable people.",
          eighthImg: "/assets/location/telavi-gnta.webp",
        },
        {
          id: 2,
          title: "One-Day Tour in Kakheti",
          description:
            "The most beautiful region of the most beautiful country – Kakheti, where numerous strange and wonderful sights await you, including the spectacular Georgian attraction of Davit Gareji, the village with a grand history known as Bodbe, and the tourists’ choice, a lovely example of the synthesis of past and present, the city of love – Sighnaghi.",
          img: "/assets/location/sighnaghi.webp",
          firstImg: "/assets/location/davit-gareja-gnta.webp",
          firstTitle: "Davit Gareja",
          firstDescription:
            "The severe beauty of the semi-desert, caves carved out of the bare rock – Davit Gareja Monastery Complex, recognized by National Geographic as one of the 17 most beautiful and wild places of the world, never seizes to amaze its visitors. This unique monument of Georgian Christianity is located in Sagarejo Municipality, about 70 km east of Tbilisi.",
          secondTitle: "Sighnaghi Museum",
          secondDescription:
            "If you are enthusiastic about ethnography and are interested in the life, traditions, and culture of historic Georgian tribes, you should visit the state museum in Sighnaghi in eastern Georgia.",
          secondImg: "/assets/location/sighnaghi-museum-gnta.webp",
          thirdImg: "/assets/location/sighnaghi-fortress-gnta.webp",
          thirdTitle: "Sighnaghi Fortress",
          thirdDescription:
            "A monolithic fortress that encircles the entire city of Sighnaghi, Sighnaghi Fortress is one of the largest fortresses of its kind in all of Europe and the South Caucasus. Built by Erekle II, king of Kartli and Kakheti, in 1762, the fortress was of immense strategic importance not only for Sighnaghi, but for all of Kakheti.",
          fourthTitle: "Zipline in Sighnaghi",
          fourthDescription:
            "If you want to enjoy the views of historic Sighnaghi, by overlooking the entire Alazani Valley and the Caucasus, there is not better option than the Sighnaghi Zipline.",
          fourthImg: "/assets/location/zipline-sighnaghi-1.webp",
          fifthImg: "/assets/location/paragliding-in-sighnaghi-2.webp",
          fifthTitle: "Paragliding in Sighnaghi",
          fifthDescription:
            "Sighnaghi is a historical city, located 120 kilometers from Tbilisi in the Kakheti Region, on a southeastern slope of the Gombori Range, 840 meters above sea level.",
          sixthTitle: "Sighnaghi",
          sixthDescription:
            "For a couple in love, Sighnaghi is a wonderful place to visit because of its romantic setting. Cute cobblestone streets, breathtaking views of Alazani valley and the Greater Caucasus Mountains, art, wine, fascinating history, as well as hospitable locals guarantee a lovely getaway.",
          sixthImg: "/assets/location/sighnaghi-gnta.webp",
          seventhImg: "/assets/location/bodbe-gnta.webp",
          seventhTitle: "Bodbe",
          seventhDescription:
            "Linked to Saint Nino, the villages of Upper and Lower Bodbe are perhaps best known for the beautiful Bodbe Monastery. A short drive from Sighnaghi, these quaint villages and their iconic monastery are a fantastic day trip from Tbilisi or Sighnaghi.",
        },
      ],
      topExperiences: [
        {
          id: 1,
          title: "Cultural Monuments",
          bgImg: "/assets/location/tower-in-georgia.webp",

          monument: [
            {
              id: 1,
              title: "Alaverdi Monastery",
              description:
                "Alaverdi is one of the most impressive cultural monuments in all of Georgia. Built as a royal monastery in the 11th century alongside such famous works as Bagrati Cathedral in Kutaisi, Svetitskhoveli in Mtskheta, and Oshki in Tao-Klarjeti, it is a fantastic example of Georgian religious architecture.",
              img: "/assets/location/alaverdi-gnta.webp",
            },
            {
              id: 2,
              title: "Davit Gareja",
              description:
                "The severe beauty of the semi-desert, caves carved out of the bare rock – Davit Gareja Monastery Complex, recognized by National Geographic as one of the 17 most beautiful and wild places of the world, never seizes to amaze its visitors. This unique monument of Georgian Christianity is located in Sagarejo Municipality, about 70 km east of Tbilisi.",
              img: "/assets/location/davit-gareja-gnta (1).webp",
            },
            {
              id: 3,
              title: "Gremi Monastic Complex",
              description:
                "Once you are in Kakheti Region, if you take the road from Telavi to Kvareli, after about a 15 to 20-minute drive, you reach Gremi Complex, a 15th-century fortress city built on high ground.",
              img: "/assets/location/gremi-gnta (1).webp",
            },
            {
              id: 4,
              title: "Batonistsikhe - Fortress of Kakhetian Kings",
              description:
                "There are countless ancient churches and fortresses throughout Georgia, but one thing you won’t find are palaces. The royal palaces in Tbilisi were razed to the ground by the King of Iran, Agha Mohammed Khan, in 1795. Batonistsikhe, erected in the center of Telavi, is the only royal palace currently remaining in Georgia.",
              img: "/assets/location/batoni-fortress-gnta.webp",
            },
            {
              id: 5,
              title: "Dodo's Rka Monastery",
              description:
                "One of the most significant components of the David Gareja complex is the Dodo Monastery, often referred to as the Dodo Rka (Dodo's Horn).",
              img: "/assets/location/dodos-horn-monastery-m.webp",
            },
            {
              id: 6,
              title: "The Temple of St. Elijah of Tishbe",
              description:
                "Legend has it that St. Elijah of Tishbe (9th century BCE) ascended to heaven from this very place, and left his disciple Elisha his cloak. Nowadays, the cloak of St. Elijah is buried in Svetitskhoveli, near the robe that Jesus wore before crucifixion.",
              img: "/assets/location/elia-monastery-gnta-m.webp",
            },
          ],
        },
        {
          id: 2,
          bgImg: "/assets/location/arts-and-culture-in-georgia.webp",
          title: "Arts & Culture",
          culture: [
            {
              id: 1,
              title: "The Palace Museum of King Erekle II",
              description:
                "The only royal palace in Georgia that has been preserved to the modern day, the Museum of King Heraclius (Erekle) II is located in the city of Telavi, Kakheti Region. This impressive palace served as the royal residence in the 17th and 18th centuries, and today it houses a museum.",
              img: "/assets/location/erekle-ii-museum-gnta (1).webp",
            },
            {
              id: 2,
              title: "The Aleksandre Chavchavadze House Museum in Tsinandali",
              description:
                "Tsinandali Estate is one of the most exciting destinations in Kakheti that includes a winery and an modest, but beautiful palace, whose history is closely intertwined with that of Prince Aleksandre Chavchavadze’s family. Two branches of Chavchavadze family were immensely influential in 19th-century Georgia, a fact reflected by the number of streets named after them!",
              img: "/assets/location/house-museum-of-chavchavadze-gnta (1).webp",
            },
            {
              id: 3,
              title: "Sighnaghi Museum",
              description:
                "If you are enthusiastic about ethnography and are interested in the life, traditions, and culture of historic Georgian tribes, you should visit the state museum in Sighnaghi in eastern Georgia.",
              img: "/assets/location/sighnaghi-museum-gnta (1).webp",
            },
            {
              id: 4,
              title: "Niko Pirosmani House Museum",
              description:
                "In 2018, the painting 'Georgian Woman Wearing Lechaki' was sold at Sotheby's auction for 2.8 million dollars. This canvas of the Georgian primitivist Niko Pirosmanashvili hung in the Salzburg home of the Austrian writer Stefan Zweig.",
              img: "/assets/location/house-museum-of-niko-pirosmanashvili-the-union-of-museums-gnta.webp",
            },
            {
              id: 5,
              title: "Telavi Museum of History and Ethnography",
              description:
                "The official title of this museum has featured “Telavi” since 1927, but everyone in Georgia knows it as Erekle’s Museum. Georgians have loved king Erekle II (1720-1798) through centuries. When you go to Telavi, ask for Erekle’s Museum on Erekle’s Square – the very place where the beloved king was born.",
              img: "/assets/location/telavi-historical-ethnographic-museum-gnta-m.webp",
            },
            {
              id: 6,
              title: "Vazha-Pshavela Theater",
              description:
                "The Vazha-Pshavela State Drama Theatre is a work of art unto itself. Located in the centre of Telavi, Kakheti, this building is immediately noticeable due to its impressive stained-glass windows. Within this contemporary building hall, visitors will find a bust of Vazha-Pshavela and a two-story pageantry church-tower from the time of King Erakle II. This monument suggests that the development of visual culture began in the second half of the 18th century in the Kingdom of Kartli-Kakheti, and is connected with Kine Erekle II.",
              img: "/assets/location/vazha-phshavela-theatre-gnta.webp",
            },
          ],
        },
        {
          id: 3,
          bgImg: "/assets/location/nature-of-georgia.webp",
          title: "Natural Wonders",
          nature: [
            {
              id: 1,
              title: "Tusheti",
              description:
                "Pristine nature, architecture that truly stands out, historical and cultural monuments, peculiar customs, delicious cuisine and an array of colors that words cannot describe. This is all about Tusheti, one of the exciting tourist destinations of Georgia.",
              img: "/assets/location/tusheti-georgia.webp",
            },
            {
              id: 2,
              title: "Vashlovani National Park – A Protected Area of Kakheti",
              description:
                "Once the bottom of a great sea, Vashlovani National Park is today one of the country’s most beautiful and unique protected areas. Covering an area of 25,000 hectares, Vashlovani is a remarkably diverse land, boasting a desert, forests, valleys, and cliffs dotted with swallows’ nests. What was under the Sarmatian Sea five million years ago is now one of Georgia’s most popular natural sights.",
              img: "/assets/location/vashlovani-nature-reserve-gnta.webp",
            },
            {
              id: 3,
              title: "Lagodekhi Managed Reserve – Lagodekhi Protected Areas",
              description:
                "Lagodekhi Managed Reserve is located to the East of Georgia in Kakheti and is part of the protected territories that the World Wildlife Fund (WWF) has identified as an important global ecoregion.",
              img: "/assets/location/lagodekhi-managed-reserve-gnta-m.webp",
            },
            {
              id: 4,
              title: "Black Rock Lake",
              description:
                "Black Rock Lake is on the border between Georgia and Russia, on the main watershed range of the Caucasus Mountains, in Kakheti. It is also known by the names “Grdzeli” and “Khelakheli”. The Black Rock Lake path is considered to be one of the most beautiful hiking routes in Georgia.",
              img: "/assets/location/black-rock-lake-gnta.webp",
            },
            {
              id: 5,
              title: "Chachuna Managed Reserve",
              description:
                "Nearly 20% of Georgia is set aside as protected land. One of these protected areas is the Chachuna Managed Reserve, spread out over 5,200 hectares in the extreme southeast of the country on the border between Georgia and Azerbaijan.",
              img: "/assets/location/chachuna-managed-reserve-gnta-m.webp",
            },
            {
              id: 6,
              title: "Iori Managed Reserve – Protected Area of Eastern Georgia",
              description:
                "Iori Managed Reserve is a natural sort of corridor surrounded by beautiful wildlife with the River Iori flowing through it. Unique plants flourish on the banks of the river, with migratory birds nesting during spring and fall, while it is also a permanent home to various animal species.",
              img: "/assets/location/iori-managed-reserve.webp",
            },
          ],
        },
      ],
      popular: [
        {
          firstImg: "/assets/location/telavi.jpg",
          secondImg: "/assets/location/Lagodekhi.jpg",
          thirdImg: "/assets/location/Kvareli.jpg",
          fourthImg: "/assets/location/sighnaghi.webp",
          title: "Popular Destinations in Kakheti",
          description:
            "Here you will see spectacular examples of Georgian church architecture, such as the cathedrals of Alaverdi, Ikalto, Shuamta, Bodbe, and Gremi. Feel the atmosphere of the towns of Telavi, Gurjaani, Kvareli, and Sighnaghi. Explore the cultural sights, dive into cellars and vineyards, have fun and let Kakheti open up its hospitable soul to you!",
        },
      ],
    });
    server.create("location", {
      id: 8,
      title: "Imereti",
      title_Img: "/assets/location/Imereti.jpg",
      title_Description:
        "Explore Kutaisi, the historical capital of Georgia, wander the ancient ruined city of Vani, see the dinosaur footprints, and experience the effect of the Tskaltubo’s healing waters! These touristic gems and much more are waiting for you in Imereti.",
      major_Title: "The Historical and Cultural Importance of Imereti",

      major_Description:
        "Imereti Region is an important cultural hub, with plenty of important treasures from thousands of years ago being discovered by archaeologists. The city of Kutaisi was the capital of the ancient kingdom of Colchis and remains an important city in Georgia to this day. Besides that, many brilliant Georgian artists come from Imereti - Akaki Tsereteli, Paolo Iashvili, Galaktion Tabidze, Otia Ioseliani, and Rezo Gabriadze, to name a few.",

      secondary_Major_Title: "Things to See in Imereti",
      secondaryMajor_Title: "Explore Kutaisi",
      secondary_Major_Description:
        "Kutaisi was the capital until the Middle Ages, which is why many important places and artifacts were discovered within its vicinity. Mythology speaks of the tales of Jason and the Argonauts exploring this region, and you’ll feel like you’re part of those legends as you wander the ruins of Vani, touch dinosaurs’ footprints at Tskaltubo, and visit many other thousands-years-old monuments that dot the region.",
      minor_Title: "Nature in Imereti",
      minor_First_Description:
        "If you love hiking, Imereti is a true paradise. Popular walking routes include Kinchkha Waterfall, and Okatse Canyon.",
      minor_Second_Description:
        "Okatse Canyon will amaze you with its natural stone bridge and caves, and adventure lovers will particularly enjoy the suspended wooden walkway high above the canyon floor. At the end of the hike, you can even take a memorable souvenir photo at the smart selfie station.",
      minor_Third_Description:
        "After visiting the canyon you can stop at Kinchkha Village, where there is a towering waterfall.",
      minor_Fourth_Description:
        "Some of the other natural wonders worth seeing in Imereti are Prometheus, Sataplia, Tetra and Navenakhevi Cave, the Lomina and Khani Waterfalls, the Kvasakdara Pillars, and Mukhura Waterfall.",
      secondary_Minor_Title: "History and Culture ",
      secondary_Minor_First_Description:
        "Ubisi Monastery, built in the 9th century by the spiritual leader Grigol Khandzteli, boasts truly outstanding frescoes. The opes depicting the Last Supper and Saint George are especially remarkable. The temple was built in the 14th century, and the site also contains a four-story tower built in 1141.",
      secondary_Minor_Second_Description:
        "In the ruined ancient city of Vani and its museum, you’ll see the archaeological evidence of the legendary Colchis’ existence, as well as the proof of the active contacts between Colchis and the Hellenic world.",
      minor_Img: "/assets/location/vanis-kvabebi.webp",
      secondary_Minor_Third_Description:
        "Another popular destination in the region is the monumental Katskhi Pillar. Where else in the world will you find a church built atop a 40-meter pillar of natural stone?",
      secondary_Minor_Fourth_Description:
        "Once you’re in Imereti, you might want to visit Motsameta Monastery. This 8th-century complex lies 6 kilometers away from Kutaisi. A short walking path will lead you to the beautiful monastery, hidden in the greenery. As you approach the end of the path you will notice the mountains bathed in different colors depending on the season, and the red-running river with a colorful name, Tskaltsitela, meaning Redwater. ",
      secondary_Minor_Fifth_Description:
        "Finally, in Kutaisi, you can see the Bagrati Cathedral, a symbol of the country’s unity built in 1003. You’ll also want to see Gelati Monastery, a UNESCO World Heritage Monument, whose academy, founded in the Middle Ages, was called “The Second Jerusalem of the East”.",
      secondary_Minor_Sixth_Description:
        "There are so many things to do and see in Imereti, you could spend weeks exploring and still not see it all.",
      secondaryMinor_Title: "The Climate in Imereti",
      secondaryMinor_Description:
        "Imereti is a forested region with two major rivers, the Rioni and the Kvirila, running through it. The climate in Imereti is humid with cold winters and dry, hot summers. ",
      tour: [
        {
          id: 1,
          title: "One-Day Tour in Kutaisi",
          description:
            "During this one-day tour, you will see Gelati Monastery, an architectural monument of great historical and cultural significance, see the nature nestled within the greenery of Imereti, and visit the monastery complex of Motsameta for a unique experience.",
          img: "/assets/location/kutaisi-view-with-birds.webp",
          firstImg: "/assets/location/motsameta-monastery-gnta.webp",
          firstTitle: "Motsameta Monastery",
          firstDescription:
            "It is said that if you crawl underneath the crypts at Motsameta Monastery, your wishes will come true. It is this legend that draws visitors to this 8th-century Orthodox church.",
          secondTitle: "Bagrati Cathedral",
          secondDescription:
            "Every ancient structure in Georgia has its own history, a story that often helps to define modern history, but the national importance of Bagrati Cathedral cannot be overstated. Built of white stones and topped with turquoise domes, it is associated with the unification of Georgia as a nation.",
          secondImg: "/assets/location/bagrati-cathedral-gnta.webp",
          thirdImg: "/assets/location/prometheus-cave-gnta.webp",
          thirdTitle: "Prometheus Cave",
          thirdDescription:
            "Georgia is a country of beautiful landscapes and amazing nature, but there is a sight which truly stands apart from other natural monuments – an underground cave lit with colourful lights, whose waterfalls, lakes, stone curtains, helictites, needle-like anthodites, and other unique formations you will never forget. This is Prometheus Cave, visited by more than 200,000 people every year.",
          fourthTitle: "Gelati Monastery",
          fourthDescription:
            "Almost every tour to Western Georgia includes a visit to the UNESCO World Heritage Listed Gelati Monastery in the same-name village.",
          fourthImg: "/assets/location/gelati-monastery-gnta.webp",
          fifthImg: "/assets/location/kutaisi-gnta.webp",
          fifthTitle: "Kutaisi",
          fifthDescription:
            "Founded 1,400 years before the birth of Christ, Kutaisi is one of the oldest cities in the world. It is a place of exceptional warmth, humor, and love.",
        },
        {
          id: 2,
          title: "One-Day Canyon Tour",
          description:
            "Discover the geographical and biological diversity of Georgia while making your way through the beautiful Okatse and Martvili Canyons, seeing the striking remnants of ancient culture at Martvili Monastery. During the tour, you will also come across the Salkhino Residence, which will fill you with all sorts of good feelings.",
          img: "/assets/location/martvili-canyon.webp",
          firstImg: "/assets/location/martvili-monastery-gnta.webp",
          firstTitle: "Martvili Monastery",
          firstDescription:
            "From the town of Martvili in Samegrelo Region, a large monastic complex built on the top of a mountain can be admired, as a shining example of the beauty of Georgian ecclesiastical architecture. From the town center, a road and cable car make the complex easily and quickly accessible. The monastery was built in the 7th century and its present appearance of course differs somewhat from those times, having undergone changes over the centuries.",
          secondTitle: "Salkhino Dadiani Residence",
          secondDescription:
            "The Salkhino palace, built in the village of Salkhino in Samegrelo Region, was once the summer residence of the local nobility, the Dadiani family. Walking on the cobblestone paths between centuries-old trees up to the palace, you feel the full glory of the Dadiani princes, the 19th-century Georgian aristocracy, who were related to the French imperial family.",
          secondImg: "/assets/location/salkhino-dadiani-residence-gnta.webp",
          thirdImg: "/assets/location/kinchkha-waterfall-gnta.webp",
          thirdTitle: "Kinchkha Waterfall",
          thirdDescription:
            "The Kinchkha waterfall, also called the Okatse Waterfall, is one of the biggest waterfalls in Georgia.",
          fourthTitle: "Martvili Canyon",
          fourthDescription:
            "Every region in Georgia boasts its own famous natural landmarks, and Samegrelo is no different, as it is home to the stunningly beautiful Martvili Canyon. A popular tourist destination with locals and tourists alike, this breathtaking natural monument is a must-see for outdoor enthusiasts.",
          fourthImg: "/assets/location/martvili-canyon-gnta.webp",
          fifthImg: "/assets/location/datvi-lake-gnta.webp",
          fifthTitle: "Datvi Lake – A Natural Monument in Okatse Canyon",
          fifthDescription:
            "Reaching Datvi Lake requires a challenging hike, but rewards those who make the journey with a breathtaking view of the picturesque canyon lake and the towering cliffs that surround it.",
          sixthTitle: "Okatse Canyon – Imereti’s Green Nature Monument",
          sixthDescription:
            "Imereti region is famous for its lush greenery, dramatic limestone cliffs and plentitude of water - rivers, streams and lakes. Okatse Canyon is a perfect example of this.",
          sixthImg: "/assets/location/okatse-canyon-gnta.webp",
          seventhImg:
            "/assets/location/martvili-canyon-zipline-in-georgia.webp",
          seventhTitle: "Martvili Canyon Zipline",
          seventhDescription:
            "Martvili Canyon is located in Samegrelo Region, in Gachedili Village, or to be more precise, in the Abasha River Gorge. The canyon is 2,400 meters long, with small hiking trails through exotic nature, including waterfalls, rivers, lakes, and rocks. A boat ride on the Abasha River is also possible while other more extreme adventures are also awaiting you.",
          eighthTitle: "Kutaisi",
          eighthDescription:
            "Founded 1,400 years before the birth of Christ, Kutaisi is one of the oldest cities in the world. It is a place of exceptional warmth, humor, and love.",
          eighthImg: "/assets/location/kutaisi-gnta.webp",
          ninthImg: "/assets/location/martvili-gnta.webp",
          ninthTitle: "Martvili",
          ninthDescription:
            "The small town of Martvili lies in western Georgia, in the region of Samegrelo. As you walk through this picturesque town, your eye will inevitably be drawn to the monastery built on a spot overlooking the town. This is Chkondidi, a monastery raised by the King David Agmashenebeli (the Builder).",
        },
      ],
      topExperiences: [
        {
          id: 1,
          title: "Cultural Monuments",
          bgImg: "/assets/location/tower-in-georgia.webp",
          monument: [
            {
              id: 1,
              title: "Motsameta Monastery",
              description:
                "It is said that if you crawl underneath the crypts at Motsameta Monastery, your wishes will come true. It is this legend that draws visitors to this 8th-century Orthodox church.",
              img: "/assets/location/motsameta-monastery-gnta (1).webp",
            },
            {
              id: 2,
              title: "Katskhi Pillar",
              description:
                "In the village of Katskhi in Chiatura Municipality there is a 40-meter-high monolith that towers above the wordly life. This is the Katskhi Pillar, a famous religious site with a tiny church at its peak. This unique monument is sure to capture your imagination.",
              img: "/assets/location/katskhi-column-gnta.webp",
            },
            {
              id: 3,
              title: "Bagrati Cathedral",
              description:
                "Every ancient structure in Georgia has its own history, a story that often helps to define modern history, but the national importance of Bagrati Cathedral cannot be overstated. Built of white stones and topped with turquoise domes, it is associated with the unification of Georgia as a nation.",
              img: "/assets/location/bagrati-cathedral-gnta (1).webp",
            },
            {
              id: 4,
              title: "Queen Tamar Bridge",
              description:
                "Could you believe that a bridge built with help of a mixture of eggs and clay in the Middle Ages could not only survive until today, but still be usable? There is just such a bridge in the village of Chalatke, and fittingly, it is named after Georgia’s legendary Queen Tamar.",
              img: "/assets/location/queen-tamar-bridge-gnta.webp",
            },
            {
              id: 5,
              title: "Kutaisi Synagogue",
              description:
                "The history of the Jewish community of the multicultural Kutaisi City is a shining example of the city’s diversity. Jewish people first settled in Georgia millennia ago, but official sources first mention their habitation in Kutaisi starts in 1644.",
              img: "/assets/location/kutaisi-synagogue-gnta.webp",
            },
            {
              id: 6,
              title: "Ubisi Monastery",
              description:
                "The beautiful 9th-century Ubisi Monastery is located in the village of Ubisi, Imereti. It was built due to the diligence of the Georgian spiritual leader and founder of the Tao-Klarjeti Monastery, Grigol Khandzteli, his students, and of Demetre, the King of the Apkhazians.",
              img: "/assets/location/ubisi-monastery-gnta.webp",
            },
          ],
        },
        {
          id: 2,
          bgImg: "/assets/location/arts-and-culture-in-georgia.webp",
          title: "Arts & Culture",
          culture: [
            {
              id: 1,
              title:
                "Kutaisi Meliton Balanchivadze Opera and Ballet Professional State Theater",
              description:
                "The Kutaisi Meliton Balanchivadze Opera and Ballet Professional State Theatre, or just the Kutaisi Opera Theatre, is a place with a fascinating history. Constructed at the end of the 19th century, it has played host to countless performances across its troubled lifetime, and is worth a visit for both patrons of the arts and lovers of architecture.",
              img: "/assets/location/kutaisi-opera.webp",
            },
            {
              id: 2,
              title:
                "Kutaisi Lado Meskhishvili Professional State Drama Theater",
              description:
                "The Lado Meskhishvili Professional State Drama Theatre gives Kutaisi’s central square, already so rich in cultural traditions, its historical character. Built in the 1950s, this unique monument was built in a location that has played host to performances since at least the 1860s.",
              img: "/assets/location/lado-meskhishvili-state-drama-theater.webp",
            },
            {
              id: 3,
              title: "The White Bridge",
              description:
                "Kutaisi is not only one of the oldest cities in Georgia, but also the fifth-oldest city in all of Europe. With so much history, the city has an abundance of historic monuments awaiting your discovery, with the White Bridge being one of the most popular destinations in the city.",
              img: "/assets/location/white-bridge-gnta.webp",
            },
            {
              id: 4,
              title: "Vani Archaeological Museum",
              description:
                "Have you heard the myth of the Golden Fleece? The legendary Golden Fleece of a winged ram that made the Argonauts depart from Greece towards Colchis in order to steal it? At the Vani Archaeological Museum, you’ll have the chance to learn more about the legendary kingdom of Colchis, which once stood in what is today modern Georgia.",
              img: "/assets/location/vani-archeological-museum-gnta.webp",
            },
            {
              id: 5,
              title: "Kutaisi Historical-Archeological Museum-Reserve",
              description:
                "Even the building in which the Kutaisi Historical Architectural Museum-Reserve premises are located is a monument of cultural heritage, being the memorial house-museum of doctor and public figure, Dimitri Nazarishvili.",
              img: "/assets/location/kutaisi-historical-archeological-museum-reserve-gnta-m.webp",
            },
            {
              id: 6,
              title: "27 Titsian Tabidze St., Kutaisi",
              description:
                "As was the case in Europe at the time, in the 19th century, eclectic architecture widely spread across Georgia. Excellent examples of the style emerged not only within Tbilisi, but in smaller cities as well. Indeed, one of the best examples is in the city of Kutaisi.",
              img: "/assets/location/kutaisi-titsian-tabidze-n27-gnta.webp",
            },
          ],
        },
        {
          id: 3,
          bgImg: "/assets/location/nature-of-georgia.webp",
          title: "Natural Wonders",
          nature: [
            {
              id: 1,
              title: "Gomismta",
              description:
                "Gomismta (Gomi Mountain) is a climatic resort that occupies one of the most prominent places on the list of resorts in the Guria Region. It is 33 km from Ozurgeti city, at 2,100-2,755 meters above sea level. Gomismta is also called the 'Resort in Clouds'.",
              img: "/assets/location/gomi-mountain (1).webp",
            },
            {
              id: 2,
              title: "Orkari Canyon",
              description:
                "If you're into hiking and wildlife, Orkari Canyon in the Guria Region is a must-see for you.",
              img: "/assets/location/orkari-canyon.webp",
            },
            {
              id: 3,
              title: "Japana Lake",
              description:
                "Japana lake is the largest oxbow lake in Georgia. It was formed as a result of the shifting riverbed of Rioni River. As a result, the lake is often called “Narionali” lake.",
              img: "/assets/location/japanas-lake.webp",
            },
            {
              id: 4,
              title: "Jaji Lake",
              description:
                "If you go on a trip to Samtskhe-Javakheti Region, you should definitely visit the beautiful Jaji Lake located on Meskheti Ridge, at an altitude of 2,655 meters above sea level.",
              img: "/assets/location/jaji-lake.webp",
            },
            {
              id: 5,
              title: "Lake Chinchao",
              description:
                "If you have heard of the Gomismta resort in Guria Region, where you walk amongst the clouds, visit Lake Chinchao on the same mountain to add more spectacular views to top off your trip.",
              img: "/assets/location/chinchao-lake-gnta.webp",
            },
            {
              id: 6,
              title: "Akibula Waterfall",
              description:
                "Akibula is one of the most beautiful waterfalls in Guria Region. It is located in Lanchkhuti municipality, in Atsana village, on the right tributary of Atsaura river.",
              img: "/assets/location/waterfall-of-akibula.webp",
            },
          ],
        },
      ],
      popular: [
        {
          firstImg: "/assets/location/kutaisi-gnta.webp",
          secondImg: "/assets/location/Tskaltubo.webp",
          thirdImg: "/assets/location/zestaponi-gnta-m.webp",
          fourthImg: "/assets/location/Sachkhere.jpg",
          title: "Popular Destinations in Imereti",
          description:
            "The green heart of Georgia, Imereti is a region of rolling mountains, vineyards climbing steep hills, waterfalls and caverns, canyons and rivers. It’s the homeland of many Georgian poets and writers, and of course, it’s a region of limitless hospitality and unbelievable food. Get closer to mother nature by visiting Okatse Canyon and Kinchkha Waterfall, Sataplia and Prometheus Cave, Khani and Mukhara Waterfalls, hike to Tskhrajvari Mountain and explore nature in Sachkhere and Marelisi. Get to know the rich history and urban legends of Kutaisi, feel the industrial vibe of Zestafoni and Chiatura, and soak in the healing waters of Sairme and Tskaltubo.",
        },
      ],
    });
    server.create("location", {
      id: 9,
      title: "Guria",
      title_Img: "/assets/location/Guria.jpg",
      title_Description:
        "If you would like to experience hospitality in its highest form, then you should plan a visit to Guria. The smallest region of Georgia has a lot to offer, including the wonderfully welcoming Gurian people, majestic nature, historical monuments, delicious food, and the brilliant Krimanchuli yodle that needs to be heard to be believed.",
      major_Title: "Where is Guria Located?",
      major_First_Description:
        "Guria is located in the Colchian Lowlands of western Georgia, where it has a 22-kilometre shoreline on the Black Sea.",
      major_Second_Description:
        "The interesting blend of coastal lowlands and the surrounding mountainous areas makes for a unique climate, perfect for resorts, relaxing vacations, and hiking.",
      secondary_Major_Title: "The Resorts of Guria",
      major_Img: "/assets/location/bakhmaro.webp",
      secondary_Major_First_Description:
        "Guria is most famed for its climatic resorts.",
      secondary_Major_Second_Description:
        "In the mountains, Bakhmaro and Gomismta are popular, with Bakhmaro being the more well-developed, but Gomismta having a more rugged charm. Both resorts are open from winter through until spring, with pure mountain air, healing mineral springs, hiking trails, and fresh, untouched snow",
      secondary_Major_Third_Description:
        "The seaside resorts of Guria - Ureki, Shekvetili, and Grigoleti – are especially popular because of their magnetic sand. This is a widespread layer of volcanic sand, carried down from Bakhmaro Mountain to the shores of the Black Sea by the Supsa River. These resorts boast a variety of modern conveniences and attractions to entertain young and old alike.",
      secondary_Major_Fourth_Description:
        "Guria also has its own little Amazon, the Pichori River, which flows through the untouched nature of the Colchian Lowlands and then joins Lake Paliastomi. ",
      secondary_Major_Fifth_Description:
        "Guria is rich in mineral waters, the most well-known of which is Nabeghlavi. This mineral water is sold in many countries around the world, but at Nabeghlavi Resort you can drink it straight from the source, and as much as you want.",
      minor_Title: "Gurian Oda Houses",
      minor_First_Description:
        "In Guria, as in all of west Georgia, you’ll see a lot of Oda houses - they are made of planks, with long wooden balconies.",
      minor_Second_Description:
        "Because of the humid climate, the house’s foundation is elevated above the ground on poles made of hewn stone. This allows the lower part of the house to breathe.",
      minor_Third_Description:
        "The locals will tell you that living in an Oda house is a different experience. You will be able to experience this for yourself if you spend even a couple of nights in a family hotel set up in an Oda house. ",
      minor_Fourth_Description:
        "Old Gurian Oda houses preserve long histories. Nothing beats spending an evening on the wooden balcony of an Oda house and drinking aromatic Gurian cha (“tea”), which is a perfect match for stories told with Gurian humor.",
      secondary_Minor_Title: "Kalandoba",
      secondary_Minor_First_Description:
        "Kalanda is the Gurians’ favourite holiday. This is the local New Year’s, which takes place on the 14th of January. The main symbol of Kalanda is a chichilaki (a small Christmas tree) made of twigs from a nut tree.The preparations for the holiday start in the morning, and special Gurian cheese and egg pies in the shape of the crescent moon are baked. On the 15th of January each family is visited by mekvle – a person who is supposed to bring happiness to the house.",
      secondary_Minor_Second_Description:
        "It is interesting to note that Kalandoba has its roots in the pre-Christian period.",
      tour: [
        {
          id: 1,
          title: "One-Day Tour in Guria",
          description:
            "This experience will convince you of how special and beautiful Guria is all over again. As part of the one-day tour, you will be able to see Shemokmedi Monastery, which was built in the Middle Ages, and visit places like Shekvetili Dendrological Park, the Black Sea, Gomi Mountain, and the Miniature Park.",
          img: "/assets/location/gomi-mountain.webp",
          firstImg: "/assets/location/gomi-mountain-gnta.webp",
          firstTitle: "Gomismta",
          firstDescription:
            "Gomismta (Gomi Mountain) is a climatic resort that occupies one of the most prominent places on the list of resorts in the Guria Region. It is 33 km from Ozurgeti city, at 2,100-2,755 meters above sea level. Gomismta is also called the 'Resort in Clouds'.",
          secondTitle: "Shekvetili Dendrological Park",
          secondDescription:
            "For years, it was a swamp and impenetrable forest, but today Shekvetili Dendrological Park attracts plenty of visitors. This unique recreational zone in Ozurgeti Municipality in the village of Shekvetili, stretches over 60 hectares between the mountains and the sea. This area, according to experts, is ideal for many types of flora and fauna.",
          secondImg: "/assets/location/shekvetili-dendrological-park-gnta.webp",
          thirdImg: "/assets/location/shemokmedi-monastery-complex-gnta.webp",
          thirdTitle: "Shemokmedi Monastery Complex",
          thirdDescription:
            "Shemokmedi Monastery Complex is one of few religious monuments in Guria Region that was not destroyed under the Soviet government. Therefore, its original architectural appearance has been preserved.",
          fourthTitle: "Miniature Park",
          fourthDescription:
            "At the Gurian seaside resort of Shekvetili, you can see all of Georgia without having to leave the resort, as the unique “Georgia in Miniatures” park can be found there!",
          fourthImg: "/assets/location/miniature-park-gnta.webp",
          fifthImg: "/assets/location/ozurgeti-gnta.webp",
          fifthTitle: "Ozurgeti",
          fifthDescription:
            "In the Middle Ages, Ozurgeti was an extraordinarily and culturally developed region complete with churches and fortresses. By the late feudal period, Ozurgeti had already become an attractive commercial and administrative center of Guria. However, Ozurgeti’s history stretches back much farther than that, with evidence of settlements stretching as far back as the Bronze Age. Contemporary accounts of the city begin to turn up in historical documents from the 16th century onwards.",
        },
        {
          id: 2,
          title: "One-Day Tour in Shekvetili",
          description:
            "Your trip will start at the Dendrological Park, seeing places famed for their beauty along the way, with the chance to enjoy the captivating nature. The tour continues through the gorgeous nature of Adjara, passing through Musicians Park and ending in the Miniature Park in Shekvetili.",
          img: "/assets/location/shekvetili-dendrological-park.webp",
          firstImg: "/assets/location/shekvetili-dendrological-park-gnta.webp",
          firstTitle: "Shekvetili Dendrological Park",
          firstDescription:
            "For years, it was a swamp and impenetrable forest, but today Shekvetili Dendrological Park attracts plenty of visitors. This unique recreational zone in Ozurgeti Municipality in the village of Shekvetili, stretches over 60 hectares between the mountains and the sea. This area, according to experts, is ideal for many types of flora and fauna.",
          secondTitle: "Miniature Park",
          secondDescription:
            "At the Gurian seaside resort of Shekvetili, you can see all of Georgia without having to leave the resort, as the unique “Georgia in Miniatures” park can be found there!",
          secondImg: "/assets/location/miniature-park-gnta.webp",
          thirdImg: "/assets/location/musicians-park-gnta.webp",
          thirdTitle: "Musicians Park",
          thirdDescription:
            "Music has a power all its own – it inspires emotions within us that can turn small moments into unforgettable memories. Melodies enjoyed with a backdrop of gorgeous views and shared with good people bring about a lasting joy that stays with you for the rest of your days. If you crave this experience, you should pay a visit to the village of Shekvetili, where in the Musicians Park, you’ll encounter a celebration of world’s music.",
          fourthTitle: "Shekvetili",
          fourthDescription:
            "On the Georgian coast of the Black Sea, 45 km north of Batumi, there is a small seaside resort called Shekvetili, known for its relatively peaceful atmosphere which makes it a popular spot for family vacation.",
          fourthImg: "/assets/location/shekvetili-gnta.webp",
        },
      ],
      topExperiences: [
        {
          id: 1,
          title: "Cultural Monuments",
          bgImg: "/assets/location/tower-in-georgia.webp",
          monument: [
            {
              id: 1,
              title: "Udabno Monastery",
              description:
                "The Udabno Мonastery (meaning “desert” in Georgian) is located on the slopes of the Amaghleba Mountain in Chokhatauri Municipality, close to the St. John the Baptist Monastery Complex. Despite being named a desert, you will find springs and dense forests all around the place, which makes you wonder about the origin of the name. In case of this half-cave monastery, “udabno” refers to the solitary life of the monks.",
              img: "/assets/location/udabno-monastery-gnta.webp",
            },
            {
              id: 2,
              title: "Erketi Monastery",
              description:
                "In the beautiful village of Erketi stands a 9th-century monastery which contains a startling array of religious objects, including frescoes, an ancient gospel, and an icon of an archangel. The relics of five great martyrs are also kept here, those of St George, St. Menas, St. Barbara, St. Marina, and St. Pantaleon. In addition, the relics of more than twenty holy Fathers have also been brought here from Kyiv Pechersk Lavra.",
              img: "/assets/location/erketi-monastery-gnta.webp",
            },
            {
              id: 3,
              title: "Shemokmedi Monastery Complex",
              description:
                "Shemokmedi Monastery Complex is one of few religious monuments in Guria Region that was not destroyed under the Soviet government. Therefore, its original architectural appearance has been preserved.",
              img: "/assets/location/shemokmedi-monastery-complex-gnta (1).webp",
            },
            {
              id: 4,
              title: "Sameba-Jikheti Nunnery",
              description:
                "One of the many reasons you should visit Sameba-Jikheti Monastery, once you are in Guria Region, is the feeling of serenity it gives off. Located 6 km away from Lanchkhuti Town, on Nigoiti Mountain, it includes two churches, a bell tower, a spring, a chapel, and a wall. Nuns still live in the monastery, and a miraculous icon of the Mother of God is kept in the church.",
              img: "/assets/location/jikheti-monastery-gnta.webp",
            },
            {
              id: 5,
              title: "Bukistsikhe – Tamari Fortress, Guria",
              description:
                "Many staggering fortresses in Georgia bear the name of Queen Tamar who ascended to the royal throne of Georgia at the end of the 12th century. During her rule, the borders of Georgia were firmly protected and the Golden Age in the country’s history was enjoyed.",
              img: "/assets/location/bukistsikhe-tamari-fortress.webp",
            },
            {
              id: 6,
              title: "Achi St. George Church",
              description:
                "For those interested in iconography, this tiny church in Achi Village, nine kilometers from the city of Ozurgeti in Guria Region, will be especially attractive due to its fascinating wall paintings.",
              img: "/assets/location/achi-church-gnta.webp",
            },
          ],
        },
        {
          id: 2,
          bgImg: "/assets/location/arts-and-culture-in-georgia.webp",
          title: "Arts & Culture",
          culture: [
            {
              id: 1,
              title: "Shalva Radiani Ethnographic Museum",
              description:
                "For lovers of Georgian history, the Shalva Radiani Ethnographic Museum offers an invaluable glimpse into ancient Gurian life. Located in Dvabzu Village, it is a fascinating museum that brings to life the lives of our ancestors.",
              img: "/assets/location/shalva-radian-ethnographic-museum-gnta-m.webp",
            },
            {
              id: 2,
              title: "Ozurgeti State Drama Theater",
              description:
                "One of Georgia’s highly-rated theatres is the Ozurgeti State Drama Theater, which celebrates Guria’s theatrical life over 150 years. This was marked by the Cultural Monument status awarded to it.",
              img: "/assets/location/state-theatre-ozurgeti-gnta (1).webp",
            },
            {
              id: 3,
              title: "Ozurgeti History Museum",
              description:
                "The past and the present come together at the Ozurgeti History Museum, where approximately 7,000 unique objects from the 9th century BCE to the present day are on display.",
              img: "/assets/location/ozurgeti-historical-museum-gnta.webp",
            },
            {
              id: 4,
              title: "Black Sea Arena",
              description:
                "The Black Sea Arena is the largest concert arena and multi-functional space in Georgia. With room for 10,000 people, amazing acoustics, and impressive technical capabilities, it is the perfect venue for world-class stars to perform and for any kind of large-scale event to take place.",
              img: "/assets/location/black-sea-arena-gnta.webp",
            },
            {
              id: 5,
              title: "Ozurgeti Fine Art Centre",
              description:
                "Lado Gudiashvili, Elene Akhvlediani, Avto Varazi, Gia Gugushvili, Gia Bughadze – these are some of the world-famous artists whose canvases make up a small part of the large collection kept in the gallery of the Ozurgeti Fine Art Centre.",
              img: "/assets/location/kutaisi-historical-archeological-museum-reserve-gnta-m.webp",
            },
            {
              id: 6,
              title: "Ozurgeti History Museum",
              description:
                "The past and the present come together at the Ozurgeti History Museum, where approximately 7,000 unique objects from the 9th century BCE to the present day are on display.",
              img: "/assets/location/ozurgeti-historical-museum-gnta (1).webp",
            },
          ],
        },
        {
          id: 3,
          bgImg: "/assets/location/nature-of-georgia.webp",
          title: "Natural Wonders",
          nature: [
            {
              id: 1,
              title: "Gomismta",
              description:
                "Gomismta (Gomi Mountain) is a climatic resort that occupies one of the most prominent places on the list of resorts in the Guria Region. It is 33 km from Ozurgeti city, at 2,100-2,755 meters above sea level. Gomismta is also called the 'Resort in Clouds'.",
              img: "/assets/location/gomi-mountain (1).webp",
            },
            {
              id: 2,
              title: "Orkari Canyon",
              description:
                "If you're into hiking and wildlife, Orkari Canyon in the Guria Region is a must-see for you.",
              img: "/assets/location/orkari-canyon.webp",
            },
            {
              id: 3,
              title: "Japana Lake",
              description:
                "Japana lake is the largest oxbow lake in Georgia. It was formed as a result of the shifting riverbed of Rioni River. As a result, the lake is often called “Narionali” lake.",
              img: "/assets/location/japanas-lake.webp",
            },
            {
              id: 4,
              title: "Jaji Lake",
              description:
                "If you go on a trip to Samtskhe-Javakheti Region, you should definitely visit the beautiful Jaji Lake located on Meskheti Ridge, at an altitude of 2,655 meters above sea level.",
              img: "/assets/location/jaji-lake.webp",
            },
            {
              id: 5,
              title: "Lake Chinchao",
              description:
                "If you have heard of the Gomismta resort in Guria Region, where you walk amongst the clouds, visit Lake Chinchao on the same mountain to add more spectacular views to top off your trip.",
              img: "/assets/location/chinchao-lake-gnta.webp",
            },
            {
              id: 6,
              title: "Akibula Waterfall",
              description:
                "Akibula is one of the most beautiful waterfalls in Guria Region. It is located in Lanchkhuti municipality, in Atsana village, on the right tributary of Atsaura river.",
              img: "/assets/location/waterfall-of-akibula.webp",
            },
          ],
        },
      ],
      popular: [
        {
          firstImg: "/assets/location/bakhmaro-gnta.webp",
          secondImg: "/assets/location/lanchkhuti-gnta.webp",
          thirdImg: "/assets/location/ozurgeti-gnta.webp",
          fourthImg: "/assets/location/Chokhatauri.jpg",
          title: "Popular Destinations in Guria",
          description:
            "Guria Region boasts the most beautiful sunsets! Watch them from the mountain resorts Bakhmaro and Gomismta or the seaside resorts - Ureki, Grigoleti, or Shekvetili. Taste a variety of Gurian tea, wine, and famous Nabeghlavi mineral water and get to know the humorous Gurian people in Lanchkhuti, Ozurgeti, and Chokhatauri.",
        },
      ],
    });
    server.create("location", {
      id: 10,
      title: "Ajara",
      title_Img: "/assets/location/lakes-georgia.jpg",
      title_Description:
        "Often called the Pearl of the Black Sea, the Ajara region is one steeped in history and beloved for its startling natural beauty. It is not only one of the first places in the world to have experienced the spread of Christianity, but also a popular beach playground with all of the modern conveniences. A visit to Ajara can include time spent sunning yourself on the beaches of the Black Sea, hiking or rafting in the mountains, hiking through the forest, visiting ancient fortresses and monasteries, and - of course - eating some of the best food you’vel ever eaten!",
      major_Title: "Batumi",
      major_Img: "/assets/location/batumi(1).webp",
      major_First_Description:
        "Sunny beaches, a botanical garden, the dolphinarium, dancing fountains, the Alphabetic Tower, the Panoramic Ferris Wheel, the moving sculpture of Ali and Nino, fascinating museums, Christian churches next to a mosque and a synagogue – all of this and more can be found in Batumi, the magnificent coastal city of Georgia.",
      major_Second_Description:
        "One of Georgia’s most popular tourist destinations, Batumi is also your gateway to exploring the rest of the beautiful, historic Ajara.",
      secondary_Major_Title: "Kobuleti, Gonio, Kvariati, Sarpi",
      secondary_Major_Img: "/assets/location/gonio-sarpi-3.webp",
      secondary_Major_First_Description:
        "For those looking to escape the hustle and bustle of city life and enjoy some time relaxing amidst nature’s splendour, Ajara has plenty of options. In the villages of Gonio, Kvariati, and Sarpi, you can enjoy stunning views of both the mountains and the sea, swim in crystal clear waters, work on your tan, and get your head straight from the comfort of a beachfront bungalow.",
      secondary_Major_Second_Description:
        "In Kobuleti Municipality, you’ll also find cascading waterfalls, shimmering lakes, and unspoiled nature preserves just waiting to be explored. ",
      secondary_Major_Third_Description:
        "The seaside resorts of Kobuleti, Bobokvati, Chakvi, and Tsikhisdziri are especially popular.",
      minor_Title: "Khulo, Keda",
      minor_Description:
        "Ajara is also home to some of the highest mountains in Europe. Khulo and Keda are some of the oldest of Ajara’s mountain settlements, with the nearby Goderdzi and Beshumi resorts being popular destinations for mountain retreats.",
      secondary_Minor_Title: "Historical Monuments",
      secondary_Minor_Img: "/assets/location/gonio-fortress-gnta.webp",
      secondary_Minor_Description:
        "Ajara has been inhabited since at least the Neolithic Period and became a centre for metallurgy during the Bronze Age. As a result, Ajara is known for its ancient and medieval monuments, including stone bridges built over the many rivers that crisscross the region. Among the most notable of these are Gonio Fortress, Petra Fortress, the 10th-12th-century fortress of Khikhani, and Skhalta Monastery.",
      secondaryMinor_Title: "Diverse Vacations in Ajara",
      secondaryMinor_Img: "/assets/location/mtirala-national-park.webp",
      secondaryMinor_First_Description:
        "Vacationing in Ajara doesn’t just mean relaxation at the sea or in the mountains. Lovers of eco-tourism will find plenty to love about the region through its many national parks and nature preserves, including the Kintrishi and Kobuleti Protected Areas, Machakhela and Mtirala National Park, and the Batumi Botanical Gardens. ",
      secondaryMinor_Second_Description:
        "Visitors to Ajara can participate in rafting, hiking, birdwatching, ziplining, scuba diving, horseback riding, canyoning, and camping.",
      secondaryMinor_Third_Description: "Ajara really does have it all.",
      tour: [
        {
          id: 1,
          title: "Two-Day Tour in Batumi",
          description:
            "Discover the wonder of the Black Sea shore, visit Batumi Botanical Garden, and, during this two-day tour, go see captivating sights such as the Delphinarium, Batumi Boulevard, Ali and Nino, the Wedding Palace, and the Dancing Fountain. Have a unique experience while capturing the modern landscape of Adjara on film.",
          img: "/assets/location/batumi-lighthouse-gnta.webp",
          firstImg: "/assets/location/batumi-botanical-garden.webp",
          firstTitle: "Batumi Botanical Garden",
          firstDescription:
            "Imagine a botanical garden that spreads along an entire kilometer of the Black Sea coast, with more than 5,000 species of plants from different climates and landscapes, providing an array of vibrant colours. Welcome to Batumi Botanical Garden, one of the most beautiful places in Ajara Region.",
          secondTitle:
            "The Panoramic Wheel - One of the most popular sites in Batumi",
          secondDescription:
            "The Panoramic wheel can be seen from afar and has incredible panoramic views of the sea and mountains.",
          secondImg: "/assets/location/why-you-should-visit-batumi.webp",
          thirdImg: "/assets/location/miracle-park-gnta.webp",
          thirdTitle: "Batumi’s Miracle Park",
          thirdDescription:
            "Miracle Park is an open space built on Batumi’s seaside boulevard, leading to rare examples of modern architecture and sculptures.",
          fourthTitle: "Sherif Khimshiashvili St. 9 in Batumi",
          fourthDescription:
            "During the 2010s, projects by the world-famous modern architects, Shin Takamatsu (the former commercial center on Sololaki Ridge), Michele De Lucchi (the Ministry of Internal Affairs and the Bridge of Peace), and Massimiliano Fuksas (the Justice Hall, the Music Center, and the Art Gallery in Rike) were completed in Tbilisi. However, it is not famous foreign masters of the art who have brought Georgia to the world’s architectural stage, but rather a young Georgian architect whose building was constructed in 2013, and quickly won worldwide acclaim.",
          fourthImg:
            "/assets/location/batumi-sheriff-khimshiashvili-9-gnta.webp",
          fifthImg: "/assets/location/batumi-dolphinarium-gnta.webp",
          fifthTitle: "Batumi Dolphinarium",
          fifthDescription:
            "The residents of the Batumi Dolphinarium entertain visitors six days a week (except Mondays), rain or shine.",
          sixthTitle: "Batumi Lighthouse",
          sixthDescription:
            "If you love tales of the sea, then you should pay a visit to the Batumi Lighthouse, which is located directly where the lines of latitude and longitude cross at 41 degrees.",
          sixthImg: "/assets/location/batumi-lighthouse-gnta.webp",
          seventhImg: "/assets/location/dancing-fountains-gnta.webp",
          seventhTitle: "Dancing fountains - a landmark of Batumi",
          seventhDescription:
            "Batumi is a beautiful seaside city that invariably attracts travelers with its wide, sun-drenched beaches. And in the evening, when the Black Sea resort is lit up with lights, an enchanting water show awaits tourists - one of the largest dancing fountains in Europe, which is the hallmark of the Black Sea coast of Georgia.",
          eighthImg: "/assets/location/monument-ali-and-nino-gnta.webp",
          eighthTitle: "The Legend of Ali and Nino",
          eighthDescription:
            "Every evening, starting at 7 pm, 8-meter-high figures of a man and a woman on Batumi Boulevard start moving in circles. Every ten minutes they approach each other, merge, and separate, then again they approach, merge, and separate…",
          ninthImg: "/assets/location/batumi-gnta.webp",
          ninthTitle: "Batumi",
          ninthDescription:
            "Batumi is the best place for a seaside vacation in Georgia, especially during its “velvet season” in early autumn when the weather is warm but not too hot. Forbes Magazine even ranked Batumi in the top five best places to stay at a resort for “velvet season”. However, Batumi is worth visiting any time of year, regardless of whether you’re here for business or pleasure. The American Hospitality Academy even deemed Batumi as “the place best suited for tourists” in Georgia as far back as 2012.",
        },
        {
          id: 2,
          title: "Three-Day Tour in Upper Adjara",
          description:
            "Set up an unforgettable three-day adventure in the wilderness where you will see historical structures like Khikhani Fortress, Skhalta Monastery, and Tamar’s Bridge. During the tour you will also be able to see Goderdzi, the Green Lake, Khulo, Makhuntseti Waterfall, and enjoy a fantastic view.",
          img: "/assets/location/goderdzi-petrified-forest-natural-monument.webp",
          firstImg:
            "/assets/location/goderdzi-alpine-botanical-garden-gnta.webp",
          firstTitle: "Goderdzi Alpine Botanical Garden",
          firstDescription:
            "After exploring the sea and tropical nature, move to the alpine zone of Ajara, toward the Alpine Botanical Garden of Goderdzi.",
          secondTitle: "Green Lake",
          secondDescription:
            "At an altitude of 2058 meters above sea level, 116 km away from Batumi and 6 km from Goderdzi Pass, a beautiful green lake is shimmering in a mixed forest. It is this dense forest and environment that gives the lake its bright green color.",
          secondImg: "/assets/location/mtsvanetba.webp",
          thirdImg: "/assets/location/khikhani-fortress-gnta.webp",
          thirdTitle: "Khikhani Fortress",
          thirdDescription:
            "Atop a steep cliff in the Khulo Municipality of Ajara stands the medieval fortress of Khikhani. While much of this historical building has fallen into ruins over the centuries, four towers, a church, the walls, a wine cellar, a well, and a tone oven still remain as a testament to the fortress’ existence.",
          fourthTitle: "Skhalta Monastery",
          fourthDescription:
            "One hundred kilometres from Batumi, in the Khulo Valley, you will find a unique example of medieval architecture and monumental art - Skhalta Monastery. Preserved in its original form and considered to be the oldest standing monument in Ajara, it is a must-see while you’re enjoying the Black Sea coast.",
          fourthImg: "/assets/location/skhalta-monastery-gnta.webp",
          fifthImg: "/assets/location/makhuntseti-waterfall-gnta.webp",
          fifthTitle: "Makhuntseti Waterfall",
          fifthDescription:
            "Ajara is most famous for its seaside resorts, but the sea is not the only attraction in this beautiful region. The lush verdant mountains of the region are every bit as enchanting as the Black Sea.",
          sixthTitle: "Khulo",
          sixthDescription:
            "The area of today's Khulo Municipality has been inhabited since the Bronze Age and acquired the name due to its vital role as a trading post. In ancient times, this settlement was called Khula, which meant 'trading house'. Located 85 kilometres from Batumi, its long history is represented by a number of fascinating historic monuments.",
          sixthImg: "/assets/location/khulo-gnta.webp",
          seventhImg: "/assets/location/goderdzi-gnta.webp",
          seventhTitle: "Goderdzi Resort",
          seventhDescription:
            "Georgia is a popular destination for snow-lovers from across the world, with the always-improving Goderdzi Resort one of Georgia’s most interesting ski destinations. With its high-quality powder and variety of ski trails, Goderdzi offers everything you need for a ski vacation. However, Goderdzi Resort is not just for skiers! Lovers of alpine hiking, extreme sports, and exploring a winter wonderland will find plenty to do here too.",
          eighthTitle: "Beshumi",
          eighthDescription:
            "Have you ever dreamed of waking up one beautiful morning in a cottage deep within the woods, the smells and sounds of the forest serving as your alarm clock? Have you ever wanted to see the clouds so close at hand that you could reach out and touch them? Have you ever wondered what it might be like to lay on your back and look up at the unspoiled beauty of the stars? All this and more is waiting for you in Beshumi.",
          eighthImg: "/assets/location/beshumi-gnta.webp",
        },
      ],
      topExperiences: [
        {
          id: 1,
          title: "Cultural Monuments",
          bgImg: "/assets/location/tower-in-georgia.webp",
          monument: [
            {
              id: 1,
              title: "Gonio-Apsaros Fortress",
              description:
                "Gonio Fortress is a witness to three of the world’s most powerful and influential empires, having survived the Roman, Byzantine, and Ottoman dominance in the region. This imposing Black Sea fortress is located twelve kilometers from Batumi, and was once one of the main citadels in the region.",
              img: "/assets/location/gonio-fortress-gnta-m.webp",
            },
            {
              id: 2,
              title: "Petra Fortress",
              description:
                "Long before Georgia existed as the nation it is today, the Byzantine Empire had a presence here. The fortress city, named Justinian’s City and known today as Petra, connected western Georgia to the Byzantine provinces, and controlled all of the ships sailing along the eastern coast of the Black Sea. While it lays in ruins today, it is a fascinating glimpse into not only Georgian, but European and Central Asian history as well.",
              img: "/assets/location/petra-fortress-gnta-m.webp",
            },
            {
              id: 3,
              title: "Khikhani Fortress",
              description:
                "Atop a steep cliff in the Khulo Municipality of Ajara stands the medieval fortress of Khikhani. While much of this historical building has fallen into ruins over the centuries, four towers, a church, the walls, a wine cellar, a well, and a tone oven still remain as a testament to the fortress’ existence.",
              img: "/assets/location/khikhani-fortress-gnta (1).webp",
            },
            {
              id: 4,
              title: "Skhalta Monastery",
              description:
                "One hundred kilometres from Batumi, in the Khulo Valley, you will find a unique example of medieval architecture and monumental art - Skhalta Monastery. Preserved in its original form and considered to be the oldest standing monument in Ajara, it is a must-see while you’re enjoying the Black Sea coast.",
              img: "/assets/location/skhalta-monastery-gnta (1).webp",
            },
            {
              id: 5,
              title: "Gvara fortress",
              description:
                "The Gvara fortress, built on a hill 50 meters above the river level at the confluence of the Chorokhi and Machakhela rivers, is especially interesting for lovers of extreme hiking. This pre-feudal fortress is located in the Machakhela National Park, 30 km from Batumi, in the municipality of Khelvachauri.",
              img: "/assets/location/gvara-fortress-gnta.webp",
            },
            {
              id: 6,
              title: "Batumi Cathedral of The Mother of God",
              description:
                "Batumi is one of Georgia’s most popular tourist destinations, renowned for its Black Sea beaches, resorts and outstanding natural beauty. If you find yourself in the bustling city and in need of a little spiritual peace, then you should head to 51 Demetre Tavdadebuli Street, where the Batumi Cathedral of the Mother of God offers succor.",
              img: "/assets/location/holy-mother-virgins-nativity-cathedral-gnta.webp",
            },
          ],
        },
        {
          id: 2,
          bgImg: "/assets/location/arts-and-culture-in-georgia.webp",
          title: "Arts & Culture",
          culture: [
            {
              id: 1,
              title: "Ajara Art Museum",
              description:
                "In a city full of impressive architecture, it is impossible to miss the distinctively decorated facade of Ajara Art Museum, located in the center of Batumi. Decorated with unique frieze reliefs, the building itself was built in 1949, and from 1998 on, houses Ajara Art Museum.",
              img: "/assets/location/batumi-art-museum-gnta-m.webp",
            },
            {
              id: 2,
              title: "Borjghalo Ethnographic Museum",
              description:
                "Have you ever visited a museum that was built by a single person? A museum in which everything was made by just one set of hands? Well, the Borjghalo Ethnographic Museum can make that claim, having been constructed by one man: Kemal Turmanidze.",
              img: "/assets/location/ethnographic-museum-borjgalo-gnta-m.webp",
            },
            {
              id: 3,
              title: "The Legend of Ali and Nino",
              description:
                "Every evening, starting at 7 pm, 8-meter-high figures of a man and a woman on Batumi Boulevard start moving in circles. Every ten minutes they approach each other, merge, and separate, then again they approach, merge, and separate…",
              img: "/assets/location/batumi-ali-and-nino.jpg",
            },
            {
              id: 4,
              title: "Alphabetic Tower",
              description:
                "One of the tallest and most recognisable buildings in the Batumi skyline, the 130-meters-tall Alphabetic Tower is renowned for being a prominent representation of beautiful Georgian alphabet.",
              img: "/assets/location/alphabetic-tower-gnta.webp",
            },
            {
              id: 5,
              title: "Batumi Lighthouse",
              description:
                "If you love tales of the sea, then you should pay a visit to the Batumi Lighthouse, which is located directly where the lines of latitude and longitude cross at 41 degrees.",
              img: "/assets/location/batumi-lighthouse-gnta (1).webp",
            },
            {
              id: 6,
              title: "Sherif Khimshiashvili St. 9 in Batumi",
              description:
                "During the 2010s, projects by the world-famous modern architects, Shin Takamatsu (the former commercial center on Sololaki Ridge), Michele De Lucchi (the Ministry of Internal Affairs and the Bridge of Peace), and Massimiliano Fuksas (the Justice Hall, the Music Center, and the Art Gallery in Rike) were completed in Tbilisi. However, it is not famous foreign masters of the art who have brought Georgia to the world’s architectural stage, but rather a young Georgian architect whose building was constructed in 2013, and quickly won worldwide acclaim.",
              img: "/assets/location/batumi-sheriff-khimshiashvili-9-gnta (1).webp",
            },
          ],
        },
        {
          id: 3,
          bgImg: "/assets/location/nature-of-georgia.webp",
          title: "Natural Wonders",
          nature: [
            {
              id: 1,
              title: "Makhuntseti Waterfall",
              description:
                "Ajara is most famous for its seaside resorts, but the sea is not the only attraction in this beautiful region. The lush verdant mountains of the region are every bit as enchanting as the Black Sea.",
              img: "/assets/location/makhuntseti-waterfall-gnta (1).webp",
            },
            {
              id: 2,
              title: "Mtirala National Park",
              description:
                "While the name “Mtirala” translates into the weeping mountain, there is no cause for sadness in Mtirala National Park, where a unique microclimate creates the illusion of a mountain whose face runs with tears throughout the year. In truth, the 4,250 mm of precipitation that falls on the mountain each year and the ever-present blanket of clouds lends the mountain its mournful name.",
              img: "/assets/location/155246264094mtirala3.jpg",
            },
            {
              id: 3,
              title: "St. Andrew’s Waterfall and Statue",
              description:
                "Are you interested in visiting the place where Christianity made its first tentative steps onto the European continent? Where Jesus’ first disciple, Andrew, baptized the first Christians? Then you’ll want to make the pilgrimage to Sarpi, Ajara, close to the border with Turkey.",
              img: "/assets/location/statue-and-waterfall-of-andrew-gnta.webp",
            },
            {
              id: 4,
              title: "Chirukhi mountain",
              description:
                "Travelers describe Chirukhi mountain as a masterpiece of nature wrapped in fog. It is located in the mountainous Ajara Region, Shuakhevi municipality, at 2050 meters above sea level, offering amazing views of the fields and lakes. Many attractions of Ajara can be seen from here including Shratiani lake, Sarichairi fields, Karagol lake, Tetrobe fields, Khikhani fortress, and Alpine botanical garden. ",
              img: "/assets/location/chirukhi-mountain-gnta.webp",
            },
            {
              id: 5,
              title: "Mirveti Waterfall",
              description:
                "What makes you happy? Friends, family, a satisfying work life, a good book, an interesting film, spending time with your favourite people, good food? Whatever the answer to this question may be, we’re sure that you’ll be twice as happy if you’re able to experience them against the backdrop of breathtakingly beautiful nature. At Mirveti Waterfall, you’ll find the perfect atmosphere to amplify your happiness.",
              img: "/assets/location/mirveti-waterfall-gnta.webp",
            },
            {
              id: 6,
              title: "Kintrishi",
              description:
                "The Kintrishi Protected Areas were founded to protect the unique flora and fauna of the region between Tskemvana Village and Khino Mountain. Why? Because several species of animals and plants from the Tertiary Period (more than 2.5 million years ago) still call the park home, along with a variety of subtropical plants, deer, chamois, bears, foxes, martens, and more.",
              img: "/assets/location/kintrishi-nature-reserve-gnta-m.webp",
            },
          ],
        },
      ],
      popular: [
        {
          firstImg: "/assets/location/Kobuleti.jpg",
          secondImg: "/assets/location/Sarpi.jpg",
          thirdImg: "/assets/location/Gonio.jpg",
          fourthImg: "/assets/location/Kvariati.jpg",
          title: "Popular Destinations in Adjara",
          description:
            "Ajara is a subtropical region of fantastic beauty. The four protected areas of the region are similar in their pristine wilderness and different in the variety of animal and plant species. The mountains of Ajara are hiding steep vineyards, babbling waterfalls and lakes, old fortresses and cute wooden houses standing on high “legs”. Visit the mountains of Beshumi, Goderdzi and Gomarduli to find calmness and peace, and have fun at the seaside resorts of Batumi, Kvariati, Gonio, Sarpi and Mtsvane Kontskhi.",
        },
      ],
    });
    server.create("location", {
      id: 11,
      title: "Tbilisi",
      title_Img: "/assets/location/tbilisi.jpg",
      title_Description:
        "Tbilisi is like polyphonic music. Words cannot adequately describe it. You have to experience it for yourself: evaluating its harmonies, savouring its complexity, and soaking in its history as you uncover your own personal relationship with the city.",
      major_Title: "Tbilisi - The City That Loves You",
      major_First_Description:
        "One of Europe’s oldest capitals, Tbilisi has been the cultural, political, and economic center of Georgia for fifteen centuries. At the heart of the city lies historic Old Tbilisi, which was built during the early Middle Ages. This two square kilometre section of the city is a must-see for any visitor to Tbilisi, as it houses some of the city’s most iconic sites.",
      major_Second_Description:
        "The main attraction of Old Tbilisi is the colourful domed 17th-century baths. Fed by naturally hot sulfur water, legends say that it was these very waters that convinced King Vakhtang Gorgasali to found the city. As you soak in the very same waters and stare up at the decorative tiles of the domed baths, you’ll begin to understand why they might move a man to found an entire city in their name!",
      major_Third_Description:
        "Tbilisi’s cosmopolitan nature is epitomized by the religious diversity that can be found within the city. As you wander the cobblestone streets and laneways of Old Tbilisi, you’ll see Georgian Orthodox churches, Armenian churches, Catholic churches, a mosque, and two synagogues. ",
      major_Fourth_Description:
        "Any Tbilisi bucket list is likely to feature a visit to the noble Metekhi Temple that sits high above the city on a cliff. A statue of the temple’s builder and the founder of Tbilisi, Vakhtang Gorgasali, stands in the temple courtyard. If you, like the king himself, look out from this courtyard, you’ll see the whole of Old Tbilisi sitting before you. It is one of the city’s most breathtaking views.",
      minor_Img: "/assets/location/metekhi-church-3.webp",
      minor_First_Description:
        "There are plenty of places in Tbilisi where you can take in a view of the entire city. The highest point, however, is Mtatsminda. Amidst the verdancy of Mtatsminda Park, you will find restaurants and cafes, amusement park rides, and plenty of secluded corners in which to rest and relax. Accessible on foot, by car, or by the popular funicular that connects the mountain to the city, it is a popular playground for locals and visitors alike.",
      minor_Second_Description:
        "As you wander the old streets, you’ll see a style known as Tbilisi Modern, recognisable by buildings decked with facades and painted entrance halls, each of which is ready to tell its own emotional story.",
      minor_Third_Description:
        "Tbilisi, and Georgia in general, is a paradise for foodies. Here, cooking is an art form. Thanks to the country’s geographical position between Europe and Asia, Georgian cuisine has evolved into a unique and tantalizing mixture of exquisite flavors the likes of which you cannot find anywhere else on earth.",
      minor_Fourth_Description:
        "Throughout Tbilisi you’ll find restaurants, cafes, and bars with a dizzying selection of both local and foreign foods, Georgia’s famous wine, and a dynamic nightlife.",
      minor_Second_Img: "/assets/location/5.webp",
      minor_Fifth_Description:
        "The main thoroughfare of the city is the 1.5-kilometer-long Rustaveli Avenue. Along this street, you’ll find many historic buildings such as the Parliament of Georgia, the Opera House, the National Gallery, Rustaveli Theater, the Modern Art Museum, the National Library, and Kashveti Church. You’ll also find a variety of stores, cafes, and tree-lined squares along its length. There is something for everyone on Rustaveli Avenue.",
      minor_Sixth_Description:
        "Multiple buildings and monuments vie for the honor of being the symbol of Tbilisi. There is Sameba Cathedral, the monumental statues of Kartlis Deda (Mother of Georgia), King Vakhtang Gorgasali, and Saint George, imposing Narikala Fortress, the modern Bridge of Peace over the Mtkvari River, the Hall of Justice, and the President’s Palace.",
      minor_Third_Img: "/assets/location/sameba-view.webp",
      minor_Seventh_Description:
        "However, Tbilisi is not all about monuments. There are smaller, no less enchanting discoveries to make. For example, in the square outside of Gabriadze’s Marionette Theatre, where the aroma of coffee constantly lingers, you’ll see an amazing puppet presentation called The Circle of Life each day at 12:00 and 19:00. It is sure to delight every traveler.",
      minor_Eighth_Description:
        "Of course, Tbilisi is also a modern, dynamic city. In the newer areas of the city, you will find universities, business centers, malls, entertainment complexes, restaurants, and nightclubs. While very much a city steeped in its rich history, Tbilisi is also a lively, dynamic place in which people gather to eat, drink, dance, and embrace the unique blend of history and 21st-century amenities that exists here.",
      tour: [
        {
          id: 1,
          title: "Architectural Tour of Rustaveli Avenue",
          description:
            "If you are fascinated by art, then you should definitely plan an architectural tour of Rustaveli Avenue, because there you will be able to see Tbilisi Conservatory, Kashveti Church, and the Opera and Ballet Theatre, and you will also visit some exceptional museums and appreciate the narrow streets of Mtatsminda.",
          img: "/assets/location/rustaveli-drama-theater.webp",
          firstImg:
            "/assets/location/georgian-national-museum-national-gallery-of-paintings-gnta.webp",
          firstTitle: "Georgian National Gallery",
          firstDescription:
            "The Georgian National Gallery (also known as Blue Gallery) holds artworks of Niko Pirosmani, Davit Kakabadze, Iakob Nikoladze, Lado Gudiashvili, and 30,000 exhibits of XX century modern classical Georgian paintings and sculptures.",
          secondTitle: "Rustaveli Drama Theater in Tbilisi",
          secondDescription:
            "Have you seen Shakespeare's 'Richard the Third' or Brecht's 'Caucasian Chalk Circle'? These masterpieces by the Georgian director Robert Sturua were staged at the Shota Rustaveli Drama Theater in Tbilisi.",
          secondImg: "/assets/location/rustaveli-drama-theater-gnta.webp",
          thirdImg:
            "/assets/location/moma-zurab-tsereteli-museum-of-modern-arts-gnta.webp",
          thirdTitle: "Zurab Tsereteli Museum of Modern Art",
          thirdDescription:
            "His thirty-metre-tall sculpture, The Tears of Grief, stands on the banks of the Hudson River in the United States, across from the Statue of Liberty. The sculpture, weighing 175 tonnes, was dedicated by the artist to the victims of the terrorist attacks that took place on September 11th, 2001. You can also see the works of this talented sculptor in England, Spain, France, Japan, and Russia. At the Zurab Tsereteli Museum of Modern Art in Tbilisi, you can not only learn more about this artist, but about modern art in Georgia.",
          fourthTitle: "Tbilisi Conservatory",
          fourthDescription:
            "As you’re wandering around Tbilisi, if you turn from Rustaveli Avenue onto the small Mitropan Laghidze Street, you’ll find a building constructed in a neoclassical style. This is the Tbilisi State Conservatory, where countless influential musicians have studied and honed their crafts over the years.",
          fourthImg: "/assets/location/tbilisi-state-conservatoire-gnta.webp",
          fifthImg: "/assets/location/kashueti-church-gnta.webp",
          fifthTitle: "Kashveti Church",
          fifthDescription:
            "Kashveti church is humbly standing at Rustaveli Avenue between the National Gallery and the Georgian Museum of Fine Arts. It also has a great artistic value! Behind its white walls, the colourful masterpieces by the famous artist Lado Gudiashvili are awaiting. Come in to discover the mysteries of this church!",
          sixthTitle: "Georgian Museum of Fine Arts",
          sixthDescription:
            "You can tell a great deal about a nation’s character through the art it produces, be it dances, songs, literature, or fine art. To get a better understanding of Georgia’s character, you should pay a visit to the Georgian Museum of Fine Arts.",
          sixthImg: "/assets/location/museum-of-fine-arts-gnta.webp",
          seventhImg:
            "/assets/location/georgian-national-museum-simon-janashia-museum-of-georgia-gnta.webp",
          seventhTitle: "The National Museum of Georgia",
          seventhDescription:
            "If you’re intrigued by Georgia’s long and fascinating history, the Simon Janashia State Museum is a must-see. Possessing one of the largest collections of artifacts in the country, the museum has representations of virtually every era of Georgian and Caucasian history. Its collections contain monuments of both natural and cultural heritage, bringing ancient and modern history to life before your eyes.",
          eighthImg:
            "/assets/location/tbilisi-zakaria-paliashvili-state-opera-and-ballet-theatre-gnta.webp",
          eighthTitle: "Tbilisi Opera House",
          eighthDescription:
            "The Tbilisi Opera House is one of the best examples of Moorish architecture in Georgia. Designed by German architect Viktor Gottlieb Schroter, this outstanding cultural space is on Rustaveli Avenue in the country’s capital city.",
          ninthImg: "/assets/location/tbs.webp",
          ninthTitle: "Tbilisi",
          ninthDescription:
            "Tbilisi is like polyphonic music. Words cannot adequately describe it. You have to experience it for yourself: evaluating its harmonies, savouring its complexity, and soaking in its history as you uncover your own personal relationship with the city.",
        },
        {
          id: 2,
          title: "A Short Tour through Old Tbilisi",
          description:
            "The majority of the sights of Tbilisi are located in Old Tbilisi, so, on this short tour, you will find yourself in the very popular district of Abanotubani, where you will see churches and museums, as well as going to the restaurants, night clubs, and café-bars of Shardeni Street.",
          img: "/assets/location/old-tbilisi-dzveli-tbilisi-2.webp",
          firstImg: "/assets/location/abanotubani-gnta.webp",
          firstTitle: "Abanotubani in Tbilisi",
          firstDescription:
            "Tbilisi's historic districts on both banks of the Mtkvari river have survived many wars and raids. One of the oldest among those districts is Abanotubani, mentioned in the legend of the founding of Tbilisi by King Vakhtang Gorgasali (Vakhtang I of Iberia) in the 5th century. The existence of the previous city is confirmed by the 4th-century map created by the Roman geographer Castorius, where Tbilisi is called 'Philado'. Tbilisi, a fortress city, is also mentioned in the 360s chronicle 'Moktsevai Kartlisai' which tells the story of how Georgians converted to Christianity.",
          secondTitle: "Great Synagogue",
          secondDescription:
            "The Jewish diaspora in multicultural Georgia is one of the oldest in the world. According to historical sources, Jews settled in Tbilisi immediately after the city was founded where they built a synagogue. Today, there are two active synagogues in Tbilisi. The larger of the two, Sephardic synagogue is located on Kote Abkhazi Street and was built in 1910.",
          secondImg: "/assets/location/great-synagogue-gnta.webp",
          thirdImg: "/assets/location/leghvtakhevi-waterfall-gnta.webp",
          thirdTitle: "Leghvtakhevi Waterfall",
          thirdDescription:
            "Leghvtakhevi Gorge is the birthplace of Tbilisi’s famous sulfur waters, the very same waters that gave Tbilisi its name. Nowadays, it is one of the many popular tourist districts in old Tbilisi. If you walk its narrow lands, you’ll come upon a truly beautiful corner of the city - the Botanical Garden.",
          fourthTitle: "Meidan Bazaar",
          fourthDescription:
            "Meidani Square in Old Tbilisi is a kind of place where the distant past, with all its charm and exoticism, comes to life. This ancient district of Tbilisi has been known as the main bazaar since time immemorial, not only in Georgia, but in all of the Caucasus. Merchants were coming there to trade from all over the East, and there were craftspeople workshops around there as all. “The market area is both a meeting place and a bazaar at the same time. You will not find so many different foreigners in the world as you will there. There are Armenians, Greeks, Jews, Persians, Indians, Turks, Moscovites, and Europeans,” wrote the French jeweler, gem seller, and traveler, Jean Chardin, when he visited Georgia in 1672 - 1673.",
          fourthImg: "/assets/location/meidan-bazaar-gnta.webp",
          fifthImg: "/assets/location/tbilisi-botanical-garden-gnta.webp",
          fifthTitle: "The Botanical Garden",
          fifthDescription:
            "If you follow a steep ascent from the sulfur baths in Old Tbilisi and enter the main gates at  Botanikuri Street 1, you’ll begin your journey into a garden that is four centuries old, and has been a botanical garden for the past 180 years.",
          sixthTitle: "Metekhi Church",
          sixthDescription:
            "Proudly standing on the rocky bank of the river Mtkvari, Metekhi church and the adjacent monument of equestrian King Gorgasali look at Old Tbilisi, making up one of the most iconic landmarks in Tbilisi.",
          sixthImg: "/assets/location/metekhi-church-gnta.webp",
          seventhImg:
            "/assets/location/catholic-church-of-the-ascension-of-the-virgin-mary-gnta.webp",
          seventhTitle:
            "Tbilisi Catholic Church of the Ascension of the Virgin Mary",
          seventhDescription:
            "While the Orthodox religion is predominant in Georgia, the Catholic community in Tbilisi has been active for centuries. It was only at the beginning of the 19th century, however, that the community constructed their own place of worship. This church, the Tbilisi Catholic Church of the Ascension of the Virgin Mary, is now the main place of worship for Tbilisi’s Catholic community.",
          eighthTitle: "Jumah Mosque",
          eighthDescription:
            "In Old Tbilisi, at the foot of Narikala Fortress, near the Botanical Garden, stands the Jumah Mosque.",
          eighthImg: "/assets/location/jumah-mosque-gnta.webp",
          ninthImg: "/assets/location/tbs.webp",
          ninthTitle: "Tbilisi",
          ninthDescription:
            "Tbilisi is like polyphonic music. Words cannot adequately describe it. You have to experience it for yourself: evaluating its harmonies, savouring its complexity, and soaking in its history as you uncover your own personal relationship with the city.",
        },
      ],
      topExperiences: [
        {
          id: 1,
          title: "Cultural Monuments",
          bgImg: "/assets/location/tower-in-georgia.webp",
          monument: [
            {
              id: 1,
              title: "Lower Betlemi Church",
              description:
                "While walking through old Tbilisi, you’ll often come across churches. One of the very unusual locations would appear in front of you if you follow the northern ridge of the Sololaki Range, on the steep slope of Kidisubani, where the Betlemi Stair-Street is. There, basically growing on a giant cliff between the houses, you’ll see an elegant brick church.",
              img: "/assets/location/lower-bethlehem-church-church-of-saint-stepanos-of-the-holy-virgins-gnta.webp",
            },
            {
              id: 2,
              title: "Jumah Mosque",
              description:
                "In Old Tbilisi, at the foot of Narikala Fortress, near the Botanical Garden, stands the Jumah Mosque.",
              img: "/assets/location/jumah-mosque-gnta (1).webp",
            },
            {
              id: 3,
              title: "Kojori Fortress",
              description:
                "According to legend, it was in Kojori Fortress that the great Georgian Queen, Tamar, passed away. This fortress, also called Koroghli Fortress, is located just eighteen kilometres from Tbilisi, near the beautiful climatic resort of Kojori.",
              img: "/assets/location/kojori-fortress-gnta-m.webp",
            },
            {
              id: 4,
              title: "Tbilisi Evangelical-Lutheran Church",
              description:
                "The creation of the Evangelical Lutheran Church in Georgia came about as the result of the settlement of Germans in the Caucasus at the beginning of the 19th century. Forced to leave their homeland due to a combination of political and religious pressure and economic difficulties, some Swabian farmers sought a new home, and were offered to settle in the Caucasus.",
              img: "/assets/location/tbilisi-evangelical-lutheran-church-gnta.webp",
            },
            {
              id: 5,
              title: "Holy Trinity Cathedral",
              description:
                "Tbilisi's iconic church, the Holy Trinity Cathedral sits atop Elia Mountain in the heart of the city. Its impressive dome and golden cross are visible from almost every point in the city center.",
              img: "/assets/location/holy-trinity-church-gnta.webp",
            },
            {
              id: 6,
              title: "Metekhi Church",
              description:
                "Proudly standing on the rocky bank of the river Mtkvari, Metekhi church and the adjacent monument of equestrian King Gorgasali look at Old Tbilisi, making up one of the most iconic landmarks in Tbilisi.",
              img: "/assets/location/metekhi-church-gnta (1).webp",
            },
          ],
        },
        {
          id: 2,
          bgImg: "/assets/location/arts-and-culture-in-georgia.webp",
          title: "Arts & Culture",
          culture: [
            {
              id: 1,
              title: "Tbilisi Digital Space",
              description:
                "The Tbilisi Digital Space is the first digital art museum in the Caucasus, where moving sights have been created using audio-visual installations and special effects.",
              img: "/assets/location/slider-scaled.jpg",
            },
            {
              id: 2,
              title: "Tbilisi History Museum",
              description:
                "The quickest way to learn about Tbilisi is to visit the History Museum of the city in the old caravanserai building",
              img: "/assets/location/georgian-national-museum-ioseb-grishashvili-tbilisi-historical-museum-karvasla-gnta.webp",
            },
            {
              id: 3,
              title: "The Museum of the National Youth Palace",
              description:
                "While originally the residence of the king’s vice-regent, the white palace at Shota Rustaveli Avenue 6 now has a rather unique owner: the children and adolescents of Tbilisi! Donated to the children of Tbilisi in 1941, the building acted as a place for extracurricular activities, and has since been converted into a fascinating museum.",
              img: "/assets/location/museum-of-national-youth-and-children-s-palace-gnta.webp",
            },
            {
              id: 4,
              title: "Tbilisi Opera House",
              description:
                "The Tbilisi Opera House is one of the best examples of Moorish architecture in Georgia. Designed by German architect Viktor Gottlieb Schroter, this outstanding cultural space is on Rustaveli Avenue in the country’s capital city.",
              img: "/assets/location/tbilisi-zakaria-paliashvili-state-opera-and-ballet-theatre-gnta (1).webp",
            },
            {
              id: 5,
              title: "Rezo Gabriadze Marionette Theatre",
              description:
                "Tbilisi is a diverse city whose every turn shows you something new. As you wander its charming laneways and broad avenues, you’re treated to an endearing mixture of ancient monuments and modern amenities. And, as you wander through Old Tbilisi, you may just be lucky enough to stumble upon the Marionette Theatre, a fairytale land for adults and children alike.",
              img: "/assets/location/rezo-gabriadze-marionette-theatre-gnta.webp",
            },
            {
              id: 6,
              title: "Tbilisi Concert Hall",
              description:
                "The big round building at the start of Melikishvili Avenue in Tbilisi, has been a symbol of the city for more than 50 years. The Tbilisi Concert Hall, sometimes called Philharmonic Hall, was built by the architect Ivane Chkhenkeli.",
              img: "/assets/location/tbilisi-state-concert-hall-1.webp",
            },
          ],
        },
        {
          id: 3,
          bgImg: "/assets/location/nature-of-georgia.webp",
          title: "Natural Wonders",
          nature: [
            {
              id: 1,
              title: "Tbilisi Sea",
              description:
                "Tbilisi is not a port city, but it has a sea where you can cool off, get a tan, ride on a boat, and even water ski. That’s what Tbilisi residents call the reservoir which has been supplying the capital with drinking and irrigation water since 1953. The reservoir is in the suburbs in the northeastern part of the city.",
              img: "/assets/location/tbilisi-seaclub-gnta.webp",
            },
            {
              id: 2,
              title: "The Botanical Garden",
              description:
                "If you follow a steep ascent from the sulfur baths in Old Tbilisi and enter the main gates at  Botanikuri Street 1, you’ll begin your journey into a garden that is four centuries old, and has been a botanical garden for the past 180 years.",
              img: "/assets/location/Botanical.jpg",
            },
            {
              id: 3,
              title: "Leghvtakhevi Waterfall",
              description:
                "Leghvtakhevi Gorge is the birthplace of Tbilisi’s famous sulfur waters, the very same waters that gave Tbilisi its name. Nowadays, it is one of the many popular tourist districts in old Tbilisi. If you walk its narrow lands, you’ll come upon a truly beautiful corner of the city - the Botanical Garden.",
              img: "/assets/location/leghvtakhevi-waterfall.jpg",
            },
            {
              id: 4,
              title: "Mtatsminda",
              description:
                "Mtatsminda is the highest and most famous mountain around Tbilisi, standing at 770 meters tall. If you climb up, you get a bird’s-eye view of the city. Surrounding sites include an amusement park, restaurants, attractions for the whole family, a church, and a Pantheon for those who are interested in history. You can go by car or by taking the beautiful funicular, the mountain-cable car railway built in 1905.",
              img: "/assets/location/mount-mtatsminda-gnta.webp",
            },
            {
              id: 5,
              title: "Lisi Lake",
              description:
                "Lisi Lake is one of the favorite recreation areas of Tbilisi residents and guests of the city. You can visit it any time of the year. Located at 624 meters above sea level, a hundred meters higher than other areas of Tbilisi, Lisi lake has much better air.",
              img: "/assets/location/Lisi Lake.jpg",
            },
            {
              id: 6,
              title: "Turtle Lake",
              description:
                "Turtle Lake (Kus Tba in Georgian) is a fairly popular place in Tbilisi to relax, have fun, exercise, hike, or even have a picnic. The lake is small, 180 meters long, and 50 meters wide, but it has quite a few functions.",
              img: "/assets/location/kustba4.jpg",
            },
          ],
        },
      ],
      popular: [
        {
          firstImg: "/assets/location/Parks&Gardens.jpg",
          secondImg: "/assets/location/FineDiningDrinking&Nightlife.jpg",
          thirdImg: "/assets/location/Museums.jpg",
          fourthImg: "/assets/location/Spas&Baths.jpg",
          title: "Experience Top Activities in Tbilisi",
          description:
            "Discover why Tbilisi has captivated visitors for centuries. Feel its unique rhythm and lively character, explore the city, and fall under its charm. Whether you're looking for adventure or relaxation, the city has something to offer every traveler. Immerse yourself in the culture of Tbilisi and create memories that will last a lifetime.",
        },
      ],
    });
  },

  routes() {
    this.namespace = "api";
    this.logging = false;
    // this.timing = 2000
    this.passthrough("/assets/**");
    this.passthrough("/src/assets/**");

    this.get("/foods", (schema, request) => {
      return schema.foods.all();
    });

    this.get(
      "/restaurants",
      (schema, request) => {
        return schema.restaurants.all();
      },
      // { timing: 2000, headers: { "Cache-Control": "no-store" } }
    );

    this.get(
      "/guides",
      (schema, request) => {
        return schema.guides.all();
      },
      // { timing: 2000, headers: { "Cache-Control": "no-store" } }
    );

    this.get(
      "/maps",
      (schema, request) => {
        return schema.maps.all();
      },
      // { timing: 2000, headers: { "Cache-Control": "no-store" } }
    );

    this.get(
      "/locations",
      (schema, request) => {
        return schema.locations.all();
      },
      // { timing: 2000, headers: { "Cache-Control": "no-store" } }
    );

    this.get(
      "/seasons",
      (schema, request) => {
        return schema.seasons.all();
      },
      // { timing: 2000, headers: { "Cache-Control": "no-store" } }
    );

    this.get("/foods/:id", (schema, request) => {
      const id = request.params.id;
      return schema.foods.find(id);
    });

    this.get("/locations/:id", (schema, request) => {
      const id = request.params.id;
      return schema.locations.find(id);
    });

    // this.get("/restaurants/:contact", (schema, request) => {
    //   const contact = request.params.contact;
    //   return schema.restaurants.find(contact);
    // });
  },
});
