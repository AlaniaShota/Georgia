import { createServer, Model } from "miragejs";

createServer({
  models: {
    foods: Model,
    restaurants: Model,
  },

  seeds(server) {
    server.create("food", {
      id: "el1",
      img: "/assets/georgian-traditional-food/Khachapuri.jpg",
      type: "SAVORY PIE",
      name: "Khachapuri",
      location: "Most iconic: Sakhachapure №1",
      about:
        "This simple cheese bread known as khachapuri is the most famous dish in Georgia. It is traditionally topped with melted cheese, eggs and butter. There are different types of khachapuri, and even though some new cheese varieties such as mozzarella and feta have been incorporated in the dish, the most common additions still include traditional Georgian Sulguni or Imeretian cheese. It is shaped into different forms, and depending on the baking procedure and its form, it can be consumed individually or shared. Two of the most common varieties include the Imeretian khachapuri, shaped into a circular form, and Adjaran khachapuri, the open-faced version topped with butter and a raw egg on top. Although it is considered a snack, khachapuri can often be consumed as a full meal. It can also be bought at numerous kiosks located alongside Georgian roads. Khachapuri is also often prepared in Russia, in the whole area of the former Soviet Union, and throughout the world.",
      map: "/assets/georgian-traditional-food/traditional-food-map/Khachapuri.png",
    });
    server.create("food", {
      id: "el2",
      img: "/assets/georgian-traditional-food/Khinkali.jpg",
      type: "DUMPLINGS",
      name: "Khinkali",
      location: "Most iconic: Maspindzelo",
      about:
        "These delicious Georgian dumplings known as khinkali are considered to be one of the national dishes of the country. The dumplings are filled with meat and spices, then traditionally twisted into a knot at the top. Regional differences influence the fillings and every part of Georgia has their distinctive variety. For example, in the mountainous regions, the most traditional filling is lamb, however; the most frequent variety throughout entire Georgia is a mixture of pork and beef. The vegetarian versions made with traditional Imeretian cheese or mushrooms are also quite popular. The traditional recipe was developed over time, and now includes fresh herbs such as cilantro or parsley. The meat for khinkali is never precooked – therefore, all of the juices are tucked inside the dumplings. Eating khinkali is also a part of traditional Georgian folklore: the top, where the dough is twisted into a knot, should never be eaten because it serves as a handle to hold the dumpling, and it is usually left on the plate as an indication of how many dumplings have been eaten. These flavorful dumplings are served plain or paired with freshly ground black pepper.",
      map: "/assets/georgian-traditional-food/traditional-food-map/Khinkali.png",
    });
    server.create("food", {
      id: "el3",
      img: "/assets/georgian-traditional-food/Lobio.jpg",
      type: "STEW",
      name: "Lobio",
      location: "Most iconic: Salobie Bia",
      about:
        "Lobio is a Georgian invention that refers to a wide group of dishes that employ beans as a key ingredient. Most commonly, those are red kidney beans, boiled with various spices to create a thick stew, commonly served with mchadi, a traditional Georgian cornbread. Among numerous other varieties, lobio nigozit, which incorporates mashed beans in a thick walnut sauce, is the most common version. The dish can also appear in a form of a salad, with whole or mashed beans, and it is typically served cold.",
      map: "/assets/georgian-traditional-food/traditional-food-map/Lobio.png",
    });
    server.create("food", {
      id: "el4",
      img: "/assets/georgian-traditional-food/Chicken-tabaka.jpg",
      type: "CHICKEN DISH",
      name: "Chicken tabaka",
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
      location: "Most iconic: Kiziki",
      about:
        "Ajika is a hot and spicy Georgian paste made with hot peppers, garlic, walnuts, and fresh herbs and spices such as coriander, basil, dill, and marigold petals. It is most commonly used as a flavoring for various meat and fish dishes, although it can also be used as a fiery hot dip. Ajika is usually red in color, but it can also be green if prepared with unripe peppers.",
      map: "/assets/georgian-traditional-food/traditional-food-map/Ajika.png",
    });
    server.create("food", {
      id: "el6",
      img: "/assets/georgian-traditional-food/Mtsvadi.jpg",
      type: "MEAT DISH",
      name: "Mtsvadi",
      location: "Most iconic: Lali",
      about:
        "Mtsvadi is a traditional Georgian dish consisting of a skewered shish kebab. Ground pork, mutton, or veal is typically marinated in a mixture of lemon juice, pomegranate juice, tarragon, salt, pepper, and chopped onions, so that it remains tender and juicy when grilled. Mtsvadi is often prepared outdoors over an open fire. It is recommended to serve the dish with tkemali plum sauce, raw onion rings, sliced tomatoes, and pomegranate seeds.",
      map: "/assets/georgian-traditional-food/traditional-food-map/Mtsvadi.png",
    });
    server.create("food", {
      id: "el7",
      img: "/assets/georgian-traditional-food/Imeruli-khachapuri.jpg",
      type: "SAVORY PIE",
      name: "Imeruli khachapuri",
      location: "Most iconic: Funicular Complex",
      about:
        "Imeruli khachapuri is a traditional Georgian bread filled with melted cheese. Unlike traditional khachapuris, the imeruli variety is circular in shape. The dough consists of flour, salt, sugar, yeast, water, and sometimes yogurt, while the cheese filling is usually enriched with the addition of eggs. It is recommended to glaze imeruli khachapuri with butter as soon as it is out of the oven and serve it while it is still hot.",
      map: "/assets/georgian-traditional-food/traditional-food-map/Imeruli-khachapuri.png",
    });
    server.create("food", {
      id: "el8",
      img: "/assets/georgian-traditional-food/Kharcho.jpg",
      type: "MEAT SOUP",
      name: "Kharcho",
      location: "Most iconic: Mapshalia",
      about:
        "Kharcho is a hearty Georgian soup featuring beef or chicken, walnuts, and rice. It is traditionally seasoned with a Georgian spice blend called khmeli suneli (a combination of dried blue fenugreek, marigold petals, basil, parsley, fennel, coriander, bay leaves, and red pepper) and tkemali plum sauce. The soup is so popular that almost every family has their own variation and recipe. It is recommended to serve kharcho hot and garnish it with freshly chopped coriander.",
      map: "/assets/georgian-traditional-food/traditional-food-map/Kharcho.png",
    });
    server.create("food", {
      id: "el9",
      img: "/assets/georgian-traditional-food/Lobiani.jpg",
      type: "BREAD",
      name: "Lobiani",
      location: "",
      about:
        "Traditionally consumed at Barbaroba, the feast of St. Barbara, lobiani is a popular Georgian bread that is filled with mashed kidney beans and flavored with onions, parsley, coriander, and black pepper. The dough consists of flour, yeast, salt, and water. There is also a variety of the bread called rachuli lobiani, which is prepared with added bacon for extra flavor. The name lobiani is derived from the Georgian word for kidney beans, lobio. ",
      map: "/assets/georgian-traditional-food/traditional-food-map/Lobiani.png",
    });
    server.create("food", {
      id: "el10",
      img: "/assets/georgian-traditional-food/Adjarian-khachapuri.jpg",
      type: "SAVORY PIE",
      name: "Adjarian khachapuri",
      location: "Most iconic: Porto Franco",
      about:
        "One of the most popular khachapuri varieties, adjarian is an open-faced pie that is filled with a combination of cheese and eggs. The base is made from yeasted dough that is rolled into an oblong shape and traditionally comes filled with Sulguni or Imeretian cheese, or the combination of both. The dish is finished off with an egg that is placed on top, and the pie is then additionally baked until the egg is partially set. This boat-shaped pie hails from the coastal Adjaria region, and it is usually served with a slice of butter on top. ",
      map: "/assets/georgian-traditional-food/traditional-food-map/Adjarian-khachapuri.png",
    });
    server.create("food", {
      id: "el11",
      img: "/assets/georgian-traditional-food/Tolma.jpg",
      type: "GROUND MEAT DISH",
      name: "Tolma",
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
      location: "Most iconic: Restorani Chashnagiri Sanapiro",
      about:
        "Kupati is a spicy Georgian sausage made with pork or beef, onions, and flavorings such as black pepper, cinnamon, garlic, salt, and coriander. It is especially popular in the Caucasus region. The sausage is most commonly grilled or fried before serving, when it is traditionally accompanied by sauerkraut or sliced onions, and garnished with freshly chopped coriander and pomegranate seeds.",
      map: "/assets/georgian-traditional-food/traditional-food-map/Kupati.png",
    });
    server.create("food", {
      id: "el14",
      img: "/assets/georgian-traditional-food/Badrijani.jpg",
      type: "APPETIZER",
      name: "Badrijani",
      location: "Most iconic: Shavi Lomi",
      about:
        "Badrijani is a heavily spiced Georgian dish consisting of eggplant slices that are coated with walnut paste, then shaped into small rolls. The eggplant slices are fried before serving, while the spread is prepared by combining ground walnuts, garlic, and fresh coriander. When served, the assembled rolls are arranged on a plate and topped with pomegranate seeds.",
      map: "/assets/georgian-traditional-food/traditional-food-map/Badrijani.png",
    });
    server.create("food", {
      id: "el15",
      img: "/assets/georgian-traditional-food/Tkemali.jpg",
      type: "SAUCE",
      name: "Tkemali",
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
      location: "",
      about:
        "Kubdari is a popular Georgian bread that is traditionally filled with beef, pork, or a combination of the two, along with spices such as cumin, dill, coriander, blue fenugreek, red pepper, onions, garlic, and salt. The dough consists of flour, water, yeast, sugar, salt, and eggs. Interestingly, the meat used in this savory pie should be cut, not minced, while the salt should be local and aromatized with special herbs. It is recommended to glaze kubdari with butter and serve it hot.",
      map: "/assets/georgian-traditional-food/traditional-food-map/Kubdari.png",
    });
    server.create("food", {
      id: "el17",
      img: "/assets/georgian-traditional-food/Pkhali.jpg",
      type: "SIDE DISH",
      name: "Pkhali",
      location: "Most iconic: Zakhar Zakharich",
      about:
        "Pkhali is a traditional Georgian dish made with a large number of different leaves such as spinach, beetroot, cabbage, or nettles, although it can also be prepared with nuts and vegetables. The leaves are chopped and minced, then combined with vinegar, garlic, onions, and fresh herbs. This unique mixture is traditionally hand-shaped into balls and garnished with pomegranate seeds. Pkhali is served on the side as a dip or a flavorful condiment.",
      map: "/assets/georgian-traditional-food/traditional-food-map/Pkhali.png",
    });
    server.create("food", {
      id: "el18",
      img: "/assets/georgian-traditional-food/Ghomi.jpg",
      type: "PORRIDGE",
      name: "Ghomi",
      location: "",
      about:
        "Ghomi is a traditional dish from Georgia consisting of coarse and fine cornflour combined with water. Pieces of cheese such as sulguni are typically placed in the hot porridge to melt before consumption. The dish is often served with different sauces on the side, such as tkemali or bazhe.",
      map: "/assets/georgian-traditional-food/traditional-food-map/Ghomi.png",
    });
    server.create("food", {
      id: "el19",
      img: "/assets/georgian-traditional-food/Chakhokhbili.jpg",
      type: "STEW",
      name: "Chakhokhbili",
      location: "",
      about:
        "Chakhokhbili is a traditional Georgian stew made with a whole chicken that is cut into pieces and combined with onions, tomatoes, vinegar, garlic, and spices such as coriander, parsley, hot green peppers, and bay leaves. The stew has a thick consistency and is usually served hot, preferably garnished with freshly chopped coriander and accompanied by rice or bread on the side. The name chakhokhbili is derived from the Georgian word khokhobi, meaning pheasant, referring to the fact that it used to be prepared with pheasant instead of chicken in the past.",
      map: "/assets/georgian-traditional-food/traditional-food-map/Chakhokhbili.png",
    });
    server.create("food", {
      id: "el20",
      img: "/assets/georgian-traditional-food/Elarji.jpg",
      type: "PORRIDGE",
      name: "Elarji",
      location: "Most iconic: Dadiani",
      about:
        "Elarji is a specialty of the Georgian Samegrelo region, prepared as a thick porridge consisting of coarse cornmeal, cornflour, and sulguni or tchkhinti cheese, depending on what's available. The dish has an extremely thick texture, and it is very elastic. If properly made, one should be able to stretch it overhead. It is traditionally served hot and consumed with Georgian bazhe sauce, made with garlic, walnuts, and various spices.",
      map: "/assets/georgian-traditional-food/traditional-food-map/Elarji.png",
    });
    server.create("food", {
      id: "el21",
      img: "/assets/georgian-traditional-food/Skhmeruli.jpg",
      type: "CHICKEN DISH",
      name: "Skhmeruli",
      location: "Most iconic: Sofia Melnikova's Fantastic Douqan",
      about:
        "Shkmeruli or chkmeruli is a traditional chicken dish originating from Georgia. A whole chicken is typically butterflied, browned on both sides, and roasted for about half an hour until fully cooked. The garlic is minced, mixed with butter, milk, and pan drippings in order to create the sauce. The chicken and the sauce are combined, traditionally in a clay dish called ketsi, and the dish is then baked for a short while before it's served. It's recommended to serve skhmeruli with cheesy mashed potatoes or crusty bread on the side.",
      map: "/assets/georgian-traditional-food/traditional-food-map/Skhmeruli.png",
    });
    server.create("food", {
      id: "el22",
      img: "/assets/georgian-traditional-food/Chikhirtma.jpg",
      type: "CHICKEN SOUP",
      name: "Chikhirtma",
      location: "Most iconic: Khinklis Gemo +",
      about:
        "Chikhirtma is a flavorful and hearty Georgian soup that is believed to be a great hangover cure. It consists of chicken pieces, onions, eggs, flour, vinegar, water, and seasonings such as salt, bay leaves, and coriander. It has a slightly sour flavor and a thick, creamy consistency. The soup is usually served hot, and it is recommended to garnish it with freshly chopped coriander.",
      map: "/assets/georgian-traditional-food/traditional-food-map/Chikhirtma.png",
    });
    server.create("food", {
      id: "el23",
      img: "/assets/georgian-traditional-food/Mingrelian-khachapuri.jpg",
      type: "SAVORY PIE",
      name: "Mingrelian khachapuri",
      location: "",
      about:
        "Mingrelian khachapuri is a Georgian khachapuri variety originating from Samegrelo. Although it's quite similar to its Imeretian cousin, this khachapuri is round and it's topped with even more cheese (usually chkinti-kveli Imeretian cheese). The dough is prepared with flour, water, yeast, sugar, and salt. Once it has risen, the dough is topped with a combination of eggs and cheese, then baked until the cheese becomes bubbly and golden brown. Before serving, this khachapuri variety can be rubbed with butter, if desired.",
      map: "/assets/georgian-traditional-food/traditional-food-map/Mingrelian-khachapuri.png",
    });
    server.create("food", {
      id: "el24",
      img: "/assets/georgian-traditional-food/Gozinaki.jpg",
      type: "DESSERT",
      name: "Gozinaki",
      location: "",
      about:
        "Gozinaki is a traditional Georgian dessert with a crunchy texture, made with honey-fried, caramelized nuts such as walnuts, almonds, and hazelnuts. This sweet treat is often cut into diamond shapes, and it is traditionally consumed on Christmas and New Year.",
      map: "/assets/georgian-traditional-food/traditional-food-map/Gozinaki.png",
    });
    server.create("food", {
      id: "el25",
      img: "/assets/georgian-traditional-food/Ajapsandali.jpg",
      type: "STEW",
      name: "Ajapsandali",
      location: "",
      about:
        "Ajapsandali is a popular Georgian stew consisting of eggplants, potatoes, tomatoes, onions, bell peppers, and seasonings such as bay leaves, garlic, coriander, black pepper, and salt. The vegetables are stewed in oil, but only for a short time so that they don't lose their color and vitamins. The dish is often consumed as a family meal in Georgia, and it is especially popular during summer. For an interesting twist, try serving it cold with crumbled feta and chunks of bread.",
      map: "/assets/georgian-traditional-food/traditional-food-map/Ajapsandali.png",
    });
    server.create("food", {
      id: "el26",
      img: "/assets/georgian-traditional-food/Chashushuli.jpg",
      type: "STEW",
      name: "Chashushuli",
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
      location: "",
      about:
        "Bazhe is a popular Georgian sauce made with water, vinegar, walnuts, garlic, and spices such as coriander, salt, parsley, fennel, and crushed red pepper. It has a smooth consistency, and it is traditionally served at Georgian feasts. The sauce is often used with fish or poultry dishes, adding a depth of flavor, but some Georgians also consume it smeared on a slice of bread as a snack.",
      map: "/assets/georgian-traditional-food/traditional-food-map/Bazhe.png",
    });
    server.create("food", {
      id: "el31",
      img: "/assets/georgian-traditional-food/Mchadi.jpg",
      type: "CORN BREAD",
      name: "Mchadi",
      location: "",
      about:
        "Mchadi is a popular, traditional Georgian bread consisting of cornmeal, salt, and water. The dough is usually fried in hot oil until golden brown. It is recommended to serve mchadi warm with kidney beans and cheese on the side.",
      map: "/assets/georgian-traditional-food/traditional-food-map/Mchadi.png",
    });
    server.create("food", {
      id: "el32",
      img: "/assets/georgian-traditional-food/Satsebeli.jpg",
      type: "SAUCE",
      name: "Satsebeli",
      location: "",
      about:
        "Satsebeli is a traditional sauce originating from Georgia. It's usually made with a combination of tomatoes, red bell peppers, garlic, salt, cayenne pepper (or ajika paste), and oil. The tomatoes are chopped, mixed with sea salt, and covered overnight to release the juices. They are then cooked with bell peppers until soft and blended and passed through a sieve. The mixture is cooked with garlic and ajika (or cayenne) and seasoned with salt, and satsebeli is then stored in airtight bottles or jars with a thin film of oil on top. This sauce pairs exceptionally well with eggs, polenta, roast chicken, or khinkali dumplings.",
      map: "/assets/georgian-traditional-food/traditional-food-map/Satsebeli.png",
    });
    server.create("food", {
      id: "el33",
      img: "/assets/georgian-traditional-food/Ojakhuri.jpg",
      type: "MEAT DISH",
      name: "Ojakhuri",
      location: "",
      about:
        "Ojakhuri is a Georgian dish consisting of roasted meat (pork, chicken, lamb, or beef) and potatoes. The name of the dish means family meal in Georgian, so every family has their own recipe, variations, and they all use different seasonings for the roast. The dish is usually garnished with slices of pickled vegetables and served with accompaniments such as tkemali or ajika sauces.",
      map: "/assets/georgian-traditional-food/traditional-food-map/Ojakhuri.png",
    });
    server.create("food", {
      id: "el34",
      img: "/assets/georgian-traditional-food/Chanakhi.jpg",
      type: "STEW",
      name: "Chanakhi",
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
      location: "",
      about:
        "Satsivi is a thick and aromatic nut-based paste that is traditionally prepared in Georgia. It uses walnuts as the main ingredient and is typically served as an accompaniment to meat dishes. However, it can also be served with vegetable dishes, alongside fish, or even with boiled eggs. There is no universal recipe, and the varieties differ across Georgian regions, but they all usually incorporate garlic, coriander, cinnamon, vinegar and hot peppers. The consistency and thickness of the sauce are also versatile it can either have a coarser texture or it can be served as a smooth and creamy sauce. The name satsivi means cold or cool and refers to the way the sauce is served. The most popular festive dish using this sauce is known as turkey satsivi, traditionally prepared and consumed on New Year.",
      map: "/assets/georgian-traditional-food/traditional-food-map/Satsivi.png",
    });
    server.create("food", {
      id: "el36",
      img: "/assets/georgian-traditional-food/Tklapi.jpg",
      type: "DESSERT",
      name: "Tklapi",
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
      location: "",
      about:
        "Abkhazura is a traditional Georgian dish originating from Abkhazia. These spicy meatballs are prepared with a combination of beef, pork, parsley, dill, coriander, pepper, onions, and summer savory. The meat needs to be tightly rolled in caul fat before it's seasoned with spices and fried in a pan. These meatballs are traditionally served with tkemali sauce.",
      map: "/assets/georgian-traditional-food/traditional-food-map/Abkhazura.png",
    });
    server.create("food", {
      id: "el42",
      img: "/assets/georgian-traditional-food/Gurian-khachapuri.jpg",
      type: "SAVORY PIE",
      name: "Gurian khachapuri",
      location: "",
      about:
        "This khachapuri variety hails from Guria, a province in the west of Georgia. Unlike other khachapuri pies, this one is crescent-shaped and it's prepared for Orthodox Christmas. The dough is filled with a combination of grated cheese and hard-boiled eggs before it's baked until golden-brown. The shape of this pie was associated with celestial bodies, and for ancient Gurians it was a symbol of strength, so nowadays there is a superstitious belief that each family member should get at least one Gurian khachapuri during the festive Christmas season.",
      map: "/assets/georgian-traditional-food/traditional-food-map/Gurian-khachapuri.png",
    });
    server.create("food", {
      id: "el43",
      img: "/assets/georgian-traditional-food/Svanetian-khachapuri.jpg",
      type: "SAVORY PIE",
      name: "Svanetian khachapuri",
      location: "",
      about:
        "This khachapuri variety hails from Georgia's Svaneti region, hence the name. The dough is the same as the one used for other types of khachapuri, while the filling is made with a combination of high-fat cheese, eggs, and green onions. The dough is wrapped around the filling, and it is then pressed into a circular shape before being baked until golden brown. It is then brushed with butter and served hot, usually in slices or wedges.",
      map: "/assets/georgian-traditional-food/traditional-food-map/Svanetian-khachapuri.png",
    });
    server.create("food", {
      id: "el44",
      img: "/assets/georgian-traditional-food/Khashi.jpg",
      type: "OFFAL SOUP",
      name: "Khashi",
      location: "Most iconic: Culinarium Khasheria (Tbilisi)",
      about:
        "Widely regarded as an excellent hangover cure and a great remedy, khashi is a soup made by boiling beef intestines, tripe, shank, as well as other organs such as kidneys. Carrots, onions, bell peppers, and various greens may also be used. After the broth has been prepared, milk or pieces of milk-soaked bread can be added to the pot along with salt, pepper, and chopped garlic. It is said that khashi was invented when the poor had to give away all their meat to the rich, being left only with the organs, heads, and hooves of the animals. Ever since the promotion of the soup as a particularly healthy dish, it became popular among all social classes.",
      map: "/assets/georgian-traditional-food/traditional-food-map/Khashi.png",
    });
    server.create("food", {
      id: "el45",
      img: "/assets/georgian-traditional-food/Jonjoli.jpg",
      type: "PICKLING",
      name: "Jonjoli",
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
      location: "",
      about:
        "Achma is a Georgian dish consisting of a few layers of tender dough, a crispy top, and lots of cheese in between. It originates from the western Georgian regions of Adjara and Abkhazia. The dough is usually made with eggs, water, butter, and flour, while the cheese filling is either Georgian cheese or a combination of ricotta, mozzarella, and feta. Due to the fact that it is a layered dish with tender sheets of dough, achma is often compared to the famous lasagne.",
      map: "/assets/georgian-traditional-food/traditional-food-map/Achma.png",
    });
    server.create("food", {
      id: "el47",
      img: "/assets/georgian-traditional-food/Buglama.jpg",
      type: "STEW",
      name: "Buglama",
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
      location: "",
      about:
        "Simple, yet delicious, soko kecze is a Georgian specialty that can be translated as mushrooms in a clay pot. The dish consists of mushrooms that are baked and served in a special ketsi dish (clay dish). The mushrooms can be either plain or filled with butter and Georgian sulguni cheese, seasoned with black pepper, and sometimes a bit of garlic. This hearty mushroom dish is best enjoyed hot, while the cheese is still gooey and stretchy.",
      map: "/assets/georgian-traditional-food/traditional-food-map/Soko-kecze.png",
    });
    server.create("food", {
      id: "el49",
      img: "/assets/georgian-traditional-food/Chvishtari.jpg",
      type: "CORN BREAD",
      name: "Chvishtari",
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
      location: "",
      about:
        "Trigonella caerulea, also known as blue fenugreek, is a Georgian plant that grows wild in the mountainous parts of the country. It is typically used as a spice, giving a unique flavor to a number of dishes. The spice is prepared by grinding the seeds and pods in order to get an aromatic and slightly spicy powder. Its flavor is similar to dried fenugreek, but slightly milder.",
      map: "/assets/georgian-traditional-food/traditional-food-map/Trigonella-Caerulea.png",
    });
    server.create("restaurant", {
      id: "el1",
      name: "Funicular Complex",
      img: "/assets/traditional-food-restaurant/Amo-Rame.jpg",
      location: "Mtatsminda Plateau, Tbilisi",
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
      location: "17 Shota Rustaveli Ave, Tbilisi",
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
      location: "4 Pavle Ingorokva St, Tbilisi",
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
      location: "40/2 Akaki Beliashvili St, Tbilisi",
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
      location: "137 Davit Aghmashenebeli Ave, Tbilisi",
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
      location: "18 Ioane Shavteli St, Tbilisi",
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
      location: "7 Vakhtang Gorgasali Street, Tbilisi",
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
      location: "40 Konstantine Gamsakhurdia Street, Batumi",
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
      location: "Kakheti Hwy, Tbilisi",
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
      location: "14 Merab Kostava St, Tbilisi",
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

    this.get("/foods/:id", (schema, request) => {
      const id = request.params.id;
      return schema.foods.find(id);
    });

    // this.get("/restaurants/:contact", (schema, request) => {
    //   const contact = request.params.contact;
    //   return schema.restaurants.find(contact);
    // });
  },
});
