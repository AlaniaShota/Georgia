import { createServer, Model } from "miragejs";

createServer({
  models: {
    foods: Model,
    restaurants: Model,
    guides: Model,
    maps: Model,
    locations: Model,
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
          id: "1",
          title: "Two-Day Tour Svaneti",
          description:
            "If you are looking for an unforgettable adventure and find traveling through a region full of legend attractive, then you should visit Svaneti and go see Georgia's highest peak, lovely nature, untouched forests, villages with towers harmoniously adapted to the cliffs, and the mountains towering proudly above you.",
          img: "/assets/location/upper-svaneti-gnta.webp",
          margianiImg:
            "/assets/location/margiani-defence-tower-and-museum-gnta.webp",
          marginiTitle: "Margiani House Museum",
          marginiDescription:
            "From the roaring rivers in the valleys to mountains reaching the sky, and proudly standing Svan towers, Svaneti has many incredible sites to explore. The Svans used the towers as part of their residential homes and shelters during the enemy invasion.",
          towerTitle: "Tower of Love in Svaneti",
          towerDescription:
            "As you make your way from Mestia to Ushguli, one of the highest settlements in Europe, look out for the “Tower of Love”, which stands on a huge boulder in the river Enguri.",
          towerImg: "/assets/location/svan-tower-of-love-gnta.webp",
          lamariaImg: "/assets/location/lamaria-gnta.webp",
          lamariaTitle: "Lamaria (Ushguli Mother of God Church)",
          lamariaDescription:
            "Ushguli community in Svaneti Region is a truly captivating place; a place steeped in history, culture, unique architecture, and beautiful landscapes. In this community, north of Zhibiani Village, you’ll see one of Svaneti’s most important and impressive sights - Lamaria - also known as the Ushguli Mother of God Church. Standing atop a high hill, this small but proud church has a big historical significance.",
          lagurkaTitle:
            "Lagurka (The Kala church of Saints Cyricus and Julitta)",
          lagurkaDescription:
            "Svaneti is a region of wonders, not only standing out for its ancient rituals, traditions, and bringing the legends to life, but also famous for its fascinating historical monuments. One such monument is the church of Lagurka, named for St. Cyricus and St. Julitta, in the village of Khe. Many legends and interesting customs are associated with it.",
          lagurkaImg:
            "/assets/location/lagurka-the-kala-church-of-saints-cyricus-and-julitta-gnta.webp",
          museumImg:
            "/assets/location/svaneti-museum-of-history-and-ethnography-gnta.webp",
          museumTitle: "The Svaneti Museum Collection",
          museumDescription:
            "Svaneti is an ancient region of Georgia renowned not only for its breathtaking natural beauty, but for the unique blend of Christian and pagan traditions that defines its culture. While you’re visiting Svaneti, pay a visit to the Svaneti Museum of History & Ethnography to see the grand history of the region brought to life in front of you.",
          ethnographicTitle: "Ushguli Ethnographic Museum",
          ethnographicDescription:
            "In a 13th-century, Svan-style building made of limestone in Ushguli, known as machubi, you’ll learn about the ancient customs and traditions of Svaneti. ",
          ethnographicImg: "/assets/location/ushguli-art-museum-gnta.webp",
          houseImg: "/assets/location/mikheil-khergiani-house-museum-gnta.webp",
          houseTitle: "Mikheil Khergiani House Museum",
          houseDescription:
            "Mikheil Khergiani was a legendary Svan mountaineer whose name is going to remain in the history of alpinism forever. A 4,960-meter-tall peak in the Turkestan range and an asteroid #3234 were named after him, and in people’s memory Khergiani would always be the fearless conqueror of mountains, the Tiger of the Cliffs.",
          ushguliTitle: "Ushguli",
          ushguliDescription:
            "Nestled among the rolling hills and high mountains, Ushguli in winter is draped in white, while in the summer the green fields, colorful roofs, and Svan towers will take your breath away with their beauty. Visitors to Svaneti usually start taking pictures at Enguri HPP, a truly impressive, monumental dam, but we recommend that you leave space on your memory card for Ushguli too!",
          ushguliImg: "/assets/location/ushguli-gnta.webp",
          mestiaImg: "/assets/location/mestia-gnta.webp",
          mestiaTitle: "Mestia",
          mestiaDescription:
            "They say it’s not about the destination, it’s about the journey, but can’t it be both? When you visit faraway Mestia, the journey and the destination will vie for your attention and for space in your camera.",
        },
        {
          id: 2,
          title: "One-Day Tour in Samegrelo & Imereti",
          description:
            "Samegrelo is one of the most interesting regions in Georgia because of its historical past, which, with its enchanting nature and fortresses, will seem to you like a true oasis. The impressions that you get on your one-day tour will be unique, exciting, and unforgettable.",
          img: "/assets/location/martvili-tour.webp",
          residenceImg: "/assets/location/salkhino-dadiani-residence-gnta.webp",
          residenceTitle: "Salkhino Dadiani Residence",
          residenceDescription:
            "The Salkhino palace, built in the village of Salkhino in Samegrelo Region, was once the summer residence of the local nobility, the Dadiani family. Walking on the cobblestone paths between centuries-old trees up to the palace, you feel the full glory of the Dadiani princes, the 19th-century Georgian aristocracy, who were related to the French imperial family.",
          canyonTitle: "Martvili Canyon",
          canyonDescription:
            "Every region in Georgia boasts its own famous natural landmarks, and Samegrelo is no different, as it is home to the stunningly beautiful Martvili Canyon. A popular tourist destination with locals and tourists alike, this breathtaking natural monument is a must-see for outdoor enthusiasts.",
          canyonImg: "/assets/location/martvili-canyon-gnta.webp",
          natureImg: "/assets/location/okatse-canyon-gnta.webp",
          natureTitle: "Okatse Canyon – Imereti’s Green Nature Monument",
          natureDescription:
            "Imereti region is famous for its lush greenery, dramatic limestone cliffs and plentitude of water - rivers, streams and lakes. Okatse Canyon is a perfect example of this.",
          ziplineTitle: "Martvili Canyon Zipline",
          ziplineDescription:
            "Martvili Canyon is located in Samegrelo Region, in Gachedili Village, or to be more precise, in the Abasha River Gorge. The canyon is 2,400 meters long, with small hiking trails through exotic nature, including waterfalls, rivers, lakes, and rocks. A boat ride on the Abasha River is also possible while other more extreme adventures are also awaiting you.",
          ziplineImg:
            "/assets/location/martvili-canyon-zipline-in-georgia.webp",
          martviliImg: "/assets/location/martvili-gnta.webp",
          martviliTitle: "Martvili",
          martviliDescription:
            "The small town of Martvili lies in western Georgia, in the region of Samegrelo. As you walk through this picturesque town, your eye will inevitably be drawn to the monastery built on a spot overlooking the town. This is Chkondidi, a monastery raised by the King David Agmashenebeli (the Builder).",
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
    });
    server.create("location", {
      id: 10,
      title: "Ajara",
      title_Img: "/assets/location/mtirala-national-park.jpg",
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
