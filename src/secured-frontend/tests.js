// Go through the testsTemplate.js file to get acquainted with the procedures in adding quizzes. Goodluck boss man
const reproduction = [
  {
    name: "A male with genotype AaBb is crossed to a female of genotype AAbb. How many different phenotypes are possible for the offspring if there is complete dominance for each gene?",
    options: ["2", "1", "3", "8"],
    correctAnswer: "2",
    correctOption: "A",
    answerPicked: "",
  },
  {
    name: "Each gamete carries:",
    options: [
      "Only recessive allele",
      "Only dominant allele",
      "Only one of the alleles",
      "All of these",
    ],
    correctAnswer: "Only one of the alleles",
    correctOption: "C",
    answerPicked: "",
  },
  {
    name: "The crossing of F1 to homozygous recessive parent is called",
    options: ["Back cross", "Test cross", "F1 cross", "All of these"],
    correctAnswer: "Test cross",
    correctOption: "B",
    answerPicked: "",
  },
  {
    name: "Which of the following is not a property of the genetic code?",
    options: [
      "Non overlapping",
      "Redundant",
      "Four stop codons",
      "Almost Universal",
    ],
    correctAnswer: "Four stop codons",
    correctOption: "C",
    answerPicked: "",
  },
  // ... (continue with more reproduction questions)
];

// Rest of your code...
const ecology = [
  {
    name: "What is the term for a group of organisms of the same species living in the same area and interacting with each other?",
    options: [
      "Population",
      "Ecosystem",
      "Community",
      "Habitat",
    ],
    correctAnswer: "Population",
    correctOption: "A",
    answerPicked: "",
  },
  {
    name: "Which of the following is not a type of ecological interaction?",
    options: [
      "Mutualism",
      "Commensalism",
      "Parasitism",
      "None of the above",
    ],
    correctAnswer: "None of the above",
    correctOption: "D",
    answerPicked: "",
  },
  {
    name: "What term is used to describe the gradual change in species composition in an area over time?",
    options: [
      "Biodiversity",
      "Symbiosis",
      "Ecological succession",
      "Adaptation",
    ],
    correctAnswer: "Ecological succession",
    correctOption: "C",
    answerPicked: "",
  },
  {
    name: "Which of the following is a major biogeochemical cycle that involves the movement of carbon through different reservoirs?",
    options: [
      "Nitrogen cycle",
      "Water cycle",
      "Carbon cycle",
      "Phosphorus cycle",
    ],
    correctAnswer: "Carbon cycle",
    correctOption: "C",
    answerPicked: "",
  },
  {
    name: "Which of the following terms describes the variety of life forms within a particular habitat or ecosystem?",
    options: [
      "Habitat diversity",
      "Ecosystem diversity",
      "Genetic diversity",
      "Biodiversity",
    ],
    correctAnswer: "Biodiversity",
    correctOption: "D",
    answerPicked: "",
  },
  // ... (continue with more ecology questions)
];

// Rest of your code... 
const metamorphosis = [
  {
    name: "What is metamorphosis?",
    options: [
      "A process of cell division",
      "A form of genetic recombination",
      "A biological process of transformation",
      "A type of ecological interaction",
    ],
    correctAnswer: "A biological process of transformation",
    correctOption: "C",
    answerPicked: "",
  },
  {
    name: "Which organisms typically undergo metamorphosis?",
    options: [
      "Plants",
      "Bacteria",
      "Insects",
      "Fish",
    ],
    correctAnswer: "Insects",
    correctOption: "C",
    answerPicked: "",
  },
  // ... (continue with more Metamorphosis questions)
];

// Rest of your code...
const cell = [
  {
    name: "What is the basic structural and functional unit of all living organisms?",
    options: [
      "Cell",
      "Molecule",
      "Atom",
      "Organ",
    ],
    correctAnswer: "Cell",
    correctOption: "A",
    answerPicked: "",
  },
  {
    name: "Which organelle is responsible for converting glucose into energy through cellular respiration?",
    options: [
      "Nucleus",
      "Chloroplast",
      "Mitochondrion",
      "Endoplasmic reticulum",
    ],
    correctAnswer: "Mitochondrion",
    correctOption: "C",
    answerPicked: "",
  },
  {
    name: "Which type of cells lack a defined nucleus and other membrane-bound organelles?",
    options: [
      "Eukaryotic cells",
      "Prokaryotic cells",
      "Plant cells",
      "Animal cells",
    ],
    correctAnswer: "Prokaryotic cells",
    correctOption: "B",
    answerPicked: "",
  },
  {
    name: "What is the main function of the cell membrane?",
    options: [
      "Energy production",
      "Cellular communication",
      "DNA storage",
      "Photosynthesis",
    ],
    correctAnswer: "Cellular communication",
    correctOption: "B",
    answerPicked: "",
  },
  {
    name: "Which organelle contains enzymes that break down cellular waste and foreign materials?",
    options: [
      "Lysosome",
      "Vacuole",
      "Peroxisome",
      "Nucleus",
    ],
    correctAnswer: "Lysosome",
    correctOption: "A",
    answerPicked: "",
  },
  {
    name: "Which type of cells contain a cell wall, chloroplasts, and a large central vacuole?",
    options: [
      "Bacterial cells",
      "Eukaryotic plant cells",
      "Animal cells",
      "Bacterial cells",
    ],
    correctAnswer: "Eukaryotic plant cells",
    correctOption: "B",
    answerPicked: "",
  },
  {
    name: "What is the term for a group of organisms of the same species living in the same area and interacting with each other?",
    options: [
      "Population",
      "Ecosystem",
      "Community",
      "Habitat",
    ],
    correctAnswer: "Population",
    correctOption: "A",
    answerPicked: "",
  },
  {
    name: "Which of the following is not a type of ecological interaction?",
    options: [
      "Mutualism",
      "Commensalism",
      "Parasitism",
      "None of the above",
    ],
    correctAnswer: "None of the above",
    correctOption: "D",
    answerPicked: "",
  },
  {
    name: "What term is used to describe the gradual change in species composition in an area over time?",
    options: [
      "Biodiversity",
      "Symbiosis",
      "Ecological succession",
      "Adaptation",
    ],
    correctAnswer: "Ecological succession",
    correctOption: "C",
    answerPicked: "",
  },
  {
    name: "Which of the following is a major biogeochemical cycle that involves the movement of carbon through different reservoirs?",
    options: [
      "Nitrogen cycle",
      "Water cycle",
      "Carbon cycle",
      "Phosphorus cycle",
    ],
    correctAnswer: "Carbon cycle",
    correctOption: "C",
    answerPicked: "",
  },
];

// Rest of your code...


const fruits = [
  {
    name: "Which of the following is not a type of fruit?",
    options: [
      "Apple",
      "Carrot",
      "Banana",
      "Orange",
    ],
    correctAnswer: "Carrot",
    correctOption: "B",
    answerPicked: "",
  },
  {
    name: "Which fruit is known for its yellow color and crescent shape?",
    options: [
      "Apple",
      "Grapes",
      "Banana",
      "Pear",
    ],
    correctAnswer: "Banana",
    correctOption: "C",
    answerPicked: "",
  },
  {
    name: "What type of fruit is typically red, round, and often associated with love?",
    options: [
      "Watermelon",
      "Cherry",
      "Kiwi",
      "Mango",
    ],
    correctAnswer: "Cherry",
    correctOption: "B",
    answerPicked: "",
  },
  {
    name: "Which fruit has a tough outer rind and is often used to make jack-o'-lanterns?",
    options: [
      "Pineapple",
      "Watermelon",
      "Pumpkin",
      "Cantaloupe",
    ],
    correctAnswer: "Pumpkin",
    correctOption: "C",
    answerPicked: "",
  },
  {
    name: "Which fruit is known for its spiky outer skin and sweet inner flesh?",
    options: [
      "Durian",
      "Kiwi",
      "Pomegranate",
      "Pineapple",
    ],
    correctAnswer: "Pineapple",
    correctOption: "D",
    answerPicked: "",
  },
  {
    name: "What tropical fruit has a green or yellow skin with a juicy, sweet, and tangy interior?",
    options: [
      "Mango",
      "Apple",
      "Grapefruit",
      "Pear",
    ],
    correctAnswer: "Mango",
    correctOption: "A",
    answerPicked: "",
  },
  {
    name: "Which fruit is often called the 'king of fruits' and is known for its strong odor?",
    options: [
      "Apple",
      "Grape",
      "Banana",
      "Durian",
    ],
    correctAnswer: "Durian",
    correctOption: "D",
    answerPicked: "",
  },
  {
    name: "What type of fruit has a hard, spiky outer shell and soft, sweet flesh inside?",
    options: [
      "Lychee",
      "Fig",
      "Coconut",
      "Apricot",
    ],
    correctAnswer: "Coconut",
    correctOption: "C",
    answerPicked: "",
  },
  {
    name: "Which fruit is known for its fuzzy skin and juicy, sweet-tart flesh?",
    options: [
      "Grape",
      "Plum",
      "Peach",
      "Pear",
    ],
    correctAnswer: "Peach",
    correctOption: "C",
    answerPicked: "",
  },
  {
    name: "What small, round fruit is typically red or green and grows in clusters on vines?",
    options: [
      "Grapes",
      "Blueberries",
      "Cherries",
      "Strawberries",
    ],
    correctAnswer: "Grapes",
    correctOption: "A",
    answerPicked: "",
  },
];

// Rest of your code...
const generalname = [
  {
    name: "When first proposed, Darwin's theory of natural selection did not fully explain how evolution could occur. This was due to:",
    options: [
      "Darwin's failure to recognize the tendency fo organisms to over-reproduce",
      "Darwin's initial overemphasis of the significance of genetic drift",
      "The fact that accurate mechanisms explaining genetic inheritance were not widely known",
      "The absence of accurate descriptions of the embryological development of most plants and animals",
    ],
    correctAnswer: "Darwin's failure to recognize the tendency fo organisms to over-reproduce",
    correctOption: "A",
    answerPicked: "",
  },
  {
    name: "Which of the following is not a part of Darwin's theory of natural selection?",
    options: [
      "Individuals of a population vary",
      "Organisms tend to over-reproduce themselves",
      "There are limited resources for which individuals compete",
      "Modifications an organism acquires during its lifetime can be passed to its offspring",
      "Variations possessed by individuals of a population are heritable",
    ],
    correctAnswer: "Modifications an organism acquires during its lifetime can be passed to its offspring",
    correctOption: "D",
    answerPicked: "",
  },
  {
    name: "The evolutionary theory proposed by Charles Darwin was:",
    options: [
      "Change in populations through time as a result of mutations",
      "The spontaneous generation of new organisms",
      "The passing on of genes from one generation to the next",
      "Change in populations through time as a response to environmental change",
      "The development of characteristics by organisms in response to need",
    ],
    correctAnswer: "Change in populations through time as a response to environmental change",
    correctOption: "D",
    answerPicked: "",
  },
  {
    name: "What is the only factor that can change allele frequencies in populations to produce adaptive evolutionary change?",
    options: [
      "mutation",
      "gene flow",
      "non-random mating",
      "genetic drift",
      "selection",
    ],
    correctAnswer: "selection",
    correctOption: "E",
    answerPicked: "",
  },
  {
    name: "A species is defined as",
    options: [
      "a population of organisms similar in size, shape, and color",
      "a group of organisms that live in the same habitat",
      "a population of organisms that are able to interbreed",
      "a population of organisms that have the same number of chromosomes",
      "a population of organisms with a common ancestor",
    ],
    correctAnswer: "a population of organisms that are able to interbreed",
    correctOption: "C",
    answerPicked: "",
  },
  {
    name: "The correct sequence from the most to the least comprehensive, of the taxonomic levels listed here is",
    options: [
      "Family, phylum, class, kingdom, order, species, and genus",
      "Kingdom, phylum, class, order, family, genus, and species",
      "Kingdom, phylum, order, class, family, genus, and species",
      "Phylum, kingdom, order, class, species, family, and genus",
      "Phylum, family, class, order, kingdom, genus, and species",
    ],
    correctAnswer: "Kingdom, phylum, class, order, family, genus, and species",
    correctOption: "B",
    answerPicked: "",
  },
];

// You can continue adding more questions here...

const biorandname = [
  {
    name: "Organisms having many organelles are called",
    options: [
      "prokaryotes",
      "eukaryotes",
      "protists",
      "unicellular",
    ],
    correctAnswer: "eukaryotes",
    correctOption: "B",
    answerPicked: "",
  },
  {
    name: "Branch of biology 'paleontology' which deals with study of",
    options: [
      "Insects",
      "fossils",
      "parasites",
      "welfare of mankind",
    ],
    correctAnswer: "fossils",
    correctOption: "B",
    answerPicked: "",
  },
  {
    name: "Study of life in scientific manner is called",
    options: [
      "biology",
      "geology",
      "anatomy",
      "entomology",
    ],
    correctAnswer: "biology",
    correctOption: "A",
    answerPicked: "",
  },
  {
    name: "Example of organism which shows colonial organization is",
    options: [
      "amoeba",
      "euglena",
      "paramecium",
      "volvox",
    ],
    correctAnswer: "volvox",
    correctOption: "D",
    answerPicked: "",
  },
  {
    name: "Branch of biology 'embryology' deals with study of",
    options: [
      "study of tissues",
      "study of organelles",
      "study of genetics",
      "study of embryo development",
    ],
    correctAnswer: "study of embryo development",
    correctOption: "D",
    answerPicked: "",
  },
  // You can continue adding more questions here...
];

const cellname = [
  {
    name: "Mitochondria have first seen by",
    options: [
      "Robert Hooke",
      "Robert Brown",
      "Lipmann",
      "Altmann",
    ],
    correctAnswer: "Altmann",
    correctOption: "D",
    answerPicked: "",
  },
  {
    name: "Prokaryotic cell does not possess",
    options: [
      "Cell wall",
      "Nuclear membrane",
      "Cytoplasm",
      "Plasma membrane",
    ],
    correctAnswer: "Nuclear membrane",
    correctOption: "B",
    answerPicked: "",
  },
  {
    name: "Plasma membrane is composed of",
    options: [
      "Protein",
      "Lipids",
      "Cellulose",
      "Protein and Lipids",
    ],
    correctAnswer: "Protein and Lipids",
    correctOption: "D",
    answerPicked: "",
  },
  {
    name: "Cellular organelles containing hydrolytic enzymes are called",
    options: [
      "Peroxisomes",
      "Lysosomes",
      "Ribosomes",
      "Mesosomes",
    ],
    correctAnswer: "Lysosomes",
    correctOption: "B",
    answerPicked: "",
  },
  {
    name: "The sedimentation constant of ribosome is generally 70S. It breaks up into two subunits whose sedimentation constants are",
    options: [
      "50 S and 20 S",
      "40 S and 30 S",
      "60 S and 10 S",
      "50 S and 30 S",
    ],
    correctAnswer: "40 S and 30 S",
    correctOption: "B",
    answerPicked: "",
  },
  // You can continue adding more questions here...
];
const bryophytename = [
  {
    name: "The unique feature of bryophytes compared to other green plant group is that",
    options: [
      "They produce spores",
      "They lack vascular tissue",
      "They lack roots",
      "Their sporophyte is attached to the gametophyte",
    ],
    correctAnswer: "Their sporophyte is attached to the gametophyte",
    correctOption: "D",
    answerPicked: "",
  },
  {
    name: "Which group of plant constitute the lower bryophytes",
    options: [
      "Liverworts",
      "Mosses",
      "Anthoceratles",
      "Jungermaniales",
    ],
    correctAnswer: "Liverworts",
    correctOption: "A",
    answerPicked: "",
  },
  {
    name: "Liverworts are closely related to",
    options: [
      "Algae",
      "Fungi",
      "Lichen",
      "Mosses",
    ],
    correctAnswer: "Algae",
    correctOption: "A",
    answerPicked: "",
  },
  {
    name: "The first land inhabitant plants are",
    options: [
      "Pteridophytes",
      "Bryophytes",
      "Gymnosperms",
      "Angiosperms",
    ],
    correctAnswer: "Bryophytes",
    correctOption: "B",
    answerPicked: "",
  },
  {
    name: "The only positive evidence of aquatic ancestry of bryophyte is",
    options: [
      "Thread like protonema",
      "Green colour",
      "Some forms are still aquatic",
      "Ciliated sperms",
    ],
    correctAnswer: "Ciliated sperms",
    correctOption: "D",
    answerPicked: "",
  },
  {
    name: "The branch of botany that deals with the form of the plant is known as",
    options: [
      "Physiology",
      "Anatomy",
      "Morphology",
      "Cytology",
    ],
    correctAnswer: "Morphology",
    correctOption: "C",
    answerPicked: "",
  },
  {
    name: "The roots which develop from any portion of the plant except the radical are known as",
    options: [
      "Tap roots",
      "Stilt roots",
      "Fibrous roots",
      "Adventitious roots",
    ],
    correctAnswer: "Adventitious roots",
    correctOption: "D",
    answerPicked: "",
  },
  // You can continue adding more questions here...
];


const libraryname = [
  // ... Other library science questions ...

  {
    name: "A newspaper is a publication that is issued",
    options: [
      "Daily or Weekly",
      "Monthly",
      "Annually",
      "Biannually",
    ],
    correctAnswer: "Daily or Weekly",
    correctOption: "A",
    answerPicked: "",
  },
  {
    name: "Most serials especially journals are acquired through",
    options: [
      "Donation",
      "Subscription",
      "Exchange",
      "Interlibrary loan",
    ],
    correctAnswer: "Subscription",
    correctOption: "B",
    answerPicked: "",
  },
  {
    name: "One of the factors that affect the production and acquisition of serials is:",
    options: [
      "Constant change of serials title",
      "Serials colour",
      "Low cost",
      "Lack of readership",
    ],
    correctAnswer: "Constant change of serials title",
    correctOption: "A",
    answerPicked: "",
  },
  {
    name: "A major advantage of Electronic Serials is that:",
    options: [
      "They can also be accessed from outside the library",
      "They are cheaper",
      "On-line articles are difficult to access",
      "None of the above",
    ],
    correctAnswer: "They can also be accessed from outside the library",
    correctOption: "A",
    answerPicked: "",
  },
  {
    name: "The Reference unit houses reference materials that are:",
    options: [
      "Meant only for consultation",
      "Meant for borrowing",
      "For binding",
      "For reserve",
    ],
    correctAnswer: "Meant only for consultation",
    correctOption: "A",
    answerPicked: "",
  },
  {
    name: "___ are reference materials that give general background information on a topic",
    options: [
      "Dictionaries",
      "Directories",
      "Encyclopedia",
      "Index",
    ],
    correctAnswer: "Encyclopedia",
    correctOption: "C",
    answerPicked: "",
  },
  {
    name: "Is an example of a general encyclopedia",
    options: [
      "Encyclopedia of Biology",
      "Encyclopedia Britannica",
      "Encyclopedia of Agriculture",
      "Encyclopedia of Forestry",
    ],
    correctAnswer: "Encyclopedia Britannica",
    correctOption: "B",
    answerPicked: "",
  },
];

const libraryname2 = [
  // ... Other library science questions ...

  {
    name: "Provide basics data and statistics on topics such as education, health etc and published annually",
    options: [
      "Abstracts",
      "Indexes",
      "Yearbooks",
      "Handbooks",
    ],
    correctAnswer: "Yearbooks",
    correctOption: "C",
    answerPicked: "",
  },
  {
    name: "Bibliography refers to:",
    options: [
      "A list of works complied on some common organizing principle, such as authorship, subject etc.",
      "A book containing lists of names of residents, businesses organizations etc.",
      "A book of language which provides information regarding the meaning, origin, spellings etc",
      "Material that gives general background information on a topic.",
    ],
    correctAnswer: "A list of works complied on some common organizing principle, such as authorship, subject etc.",
    correctOption: "A",
    answerPicked: "",
  },
  {
    name: "The following are advantages of using Non-print resources except:",
    options: [
      "Aid retention",
      "Preservation",
      "Group instruction",
      "Erratic power supply.",
    ],
    correctAnswer: "Erratic power supply.",
    correctOption: "D",
    answerPicked: "",
  },
  {
    name: "One of the following is not part of audio-visual resources",
    options: [
      "Television",
      "Video recordings",
      "Digital media",
      "World Atlas.",
    ],
    correctAnswer: "World Atlas.",
    correctOption: "D",
    answerPicked: "",
  },
  {
    name: "Physical parts of a book consist of the following except:",
    options: [
      "Dust jacket",
      "Binding",
      "Publisher",
      "Spine.",
    ],
    correctAnswer: "Publisher",
    correctOption: "C",
    answerPicked: "",
  },
  {
    name: "Binding is:",
    options: [
      "That part of a book which holds the printed sheets together",
      "The edge of the book that holds the printed sheets together",
      "What contains the intellectual information",
      "A blank leaf found at the beginning and end of a book.",
    ],
    correctAnswer: "That part of a book which holds the printed sheets together",
    correctOption: "A",
    answerPicked: "",
  },
  {
    name: "Books as the oldest forms of printed media include the following sub types except:",
    options: [
      "Monographs",
      "Textbooks",
      "Reference books",
      "Realia.",
    ],
    correctAnswer: "Realia.",
    correctOption: "D",
    answerPicked: "",
  },
  // ... More questions ...
];

const libraryname3 = [
  // ... Other library science questions ...

  {
    name: "Copyright page is also known as:",
    options: [
      "Fly leaf",
      "Preface",
      "Title page",
      "Verso page",
    ],
    correctAnswer: "Verso page",
    correctOption: "D",
    answerPicked: "",
  },
  
  {
    name: "Date of copyright, name of copyright holder, book’s number, library of congress catalogue number, previous editions, printers name can all be found on the",
    options: [
      "Copyright page",
      "Title page",
      "Preface",
      "Foreword",
    ],
    correctAnswer: "Copyright page",
    correctOption: "A",
    answerPicked: "",
  },
  {
    name: "Sources of information when listed and arranged in an alphabetical order can be referred to as",
    options: [
      "Biography",
      "Bibliography",
      "Bibliology",
      "References",
    ],
    correctAnswer: "Bibliography",
    correctOption: "B",
    answerPicked: "",
  },
  {
    name: "When a source of information is all about a person’s life history authored by self it is called",
    options: [
      "Biography",
      "Bibliography",
      "Autobiography",
      "Encyclopedia",
    ],
    correctAnswer: "Autobiography",
    correctOption: "C",
    answerPicked: "",
  },
  {
    name: "An additional explanation and elaboration not essential to a text is known as",
    options: [
      "Appendix",
      "Glossary",
      "Index",
      "List of illustrations",
    ],
    correctAnswer: "Appendix",
    correctOption: "A",
    answerPicked: "",
  },
  {
    name: "To have reduced photographic images of printed pages and make it possible to house much more materials, the library needs",
    options: [
      "Computers",
      "Softwares",
      "Books",
      "Microforms",
    ],
    correctAnswer: "Microforms",
    correctOption: "D",
    answerPicked: "",
  },
  {
    name: "In the Dewey Decimal System, 300 represents",
    options: [
      "Language",
      "Social sciences",
      "The Arts",
      "Pure Sciences",
    ],
    correctAnswer: "Social sciences",
    correctOption: "B",
    answerPicked: "",
  },
  {
    name: "Cartographic materials are also known as:",
    options: [
      "Maps",
      "Audio-visual materials",
      "Objects",
      "None of the above.",
    ],
    correctAnswer: "Maps",
    correctOption: "A",
    answerPicked: "",
  },
  {
    name: "FUTA library was opened to users on:",
    options: [
      "1983",
      "1993",
      "1981",
      "2003.",
    ],
    correctAnswer: "1983",
    correctOption: "A",
    answerPicked: "",
  },
  {
    name: "National Libraries are also known as:",
    options: [
      "Virtual libraries",
      "Special libraries",
      "Depository",
      "Archival libraries.",
    ],
    correctAnswer: "Depository",
    correctOption: "C",
    answerPicked: "",
  },
  {
    name: "The word library is from a:",
    options: [
      "German word",
      "French word",
      "Latin word",
      "Indonesia word",
    ],
    correctAnswer: "Latin word",
    correctOption: "C",
    answerPicked: "",
  },
  // ... Continue adding more questions ...

];
const libraryname4 = [
  // ... Other library science questions ...

  {
    name: "A place where we have a large number of historical records is called:",
    options: [
      "Public library",
      "Archive",
      "National library",
      "School library",
    ],
    correctAnswer: "Archive",
    correctOption: "B",
    answerPicked: "",
  },
  {
    name: "Which unit in the library is responsible for the processing of books?",
    options: [
      "Serial unit are issued",
      "Circulation unit",
      "Reference unit",
      "Cataloguing and Classification unit",
    ],
    correctAnswer: "Cataloguing and Classification unit",
    correctOption: "D",
    answerPicked: "",
  },
  {
    name: "Users normally keep their personal belongings when entering the Library in the:",
    options: [
      "Porters unit",
      "Cloak room",
      "Security room",
      "Circulation desk",
    ],
    correctAnswer: "Cloak room",
    correctOption: "B",
    answerPicked: "",
  },
  {
    name: "Works on a single subject or aspect of a subject are called:",
    options: [
      "Monographs",
      "Textbooks",
      "Reference books",
      "Pamphlets",
    ],
    correctAnswer: "Monographs",
    correctOption: "A",
    answerPicked: "",
  },
  {
    name: "Constant changing of titles is one of the problems of ...",
    options: [
      "Clippings",
      "Abstracts",
      "Serials",
      "Audio –visual",
    ],
    correctAnswer: "Serials",
    correctOption: "C",
    answerPicked: "",
  },
  {
    name: "Encyclopedia resources can be located in ... units of the library",
    options: [
      "Reference Unit",
      "Circulation Unit",
      "Bindery Unit",
      "Cataloguing Unit",
    ],
    correctAnswer: "Reference Unit",
    correctOption: "A",
    answerPicked: "",
  },
  {
    name: "---------------- directs users to the exact location of a book on the shelf",
    options: [
      "Accession number",
      "Entry Heading",
      "Catalogue",
      "Call marks",
    ],
    correctAnswer: "Catalogue",
    correctOption: "C",
    answerPicked: "",
  },
  {
    name: "A basic reference collection is made up of all EXCEPT ...",
    options: [
      "Dictionaries",
      "Encyclopedias",
      "Textbooks",
      "Gazetteers",
    ],
    correctAnswer: "Textbooks",
    correctOption: "C",
    answerPicked: "",
  },
  {
    name: "------------------- is a serious offence in the Library",
    options: [
      "Writing",
      "Reading",
      "Noise making",
      "Research",
    ],
    correctAnswer: "Noise making",
    correctOption: "C",
    answerPicked: "",
  },
  {
    name: "The following are the methods used to acquire serials materials in the library EXCEPT ...",
    options: [
      "Purchase",
      "Gift",
      "Donation",
      "Supply",
    ],
    correctAnswer: "Supply",
    correctOption: "D",
    answerPicked: "",
  },
  {
    name: "All of these EXCEPT one is not an information source",
    options: [
      "Primary information sources",
      "Secondary information sources",
      "Tertiary information sources",
      "Universal information sources",
    ],
    correctAnswer: "Universal information sources",
    correctOption: "D",
    answerPicked: "",
  },
  {
    name: "A library owned by an individual is an example of a ...",
    options: [
      "Personal library",
      "School library",
      "Private library",
      "Individual library",
    ],
    correctAnswer: "Private library",
    correctOption: "C",
    answerPicked: "",
  },
  {
    name: "--------------- are examples of academic libraries",
    options: [
      "University libraries, college of education libraries and polytechnics libraries",
      "College libraries, schools libraries",
      "Polytechnics libraries, college of education libraries and private libraries",
      "None of the above",
    ],
    correctAnswer: "University libraries, college of education libraries and polytechnics libraries",
    correctOption: "A",
    answerPicked: "",
  },
  // ... Continue adding more questions ...

  // ... Continue adding more questions ...

];


const libraryname5 = [
  // ... Other library questions ...

  {
    name: "The maximum number of books that an undergraduate can borrow in the library is ...",
    options: [
      "Five",
      "Three",
      "Four",
      "Two",
    ],
    correctAnswer: "Two",
    correctOption: "D",
    answerPicked: "",
  },
  {
    name: "Charging and discharging are performed in ... unit of the library.",
    options: [
      "Reference",
      "Acquisition",
      "Serial",
      "Circulation",
    ],
    correctAnswer: "Circulation",
    correctOption: "D",
    answerPicked: "",
  },
  {
    name: "The skills combined in locating and retrieving information is called ...",
    options: [
      "Information literacy",
      "Information process",
      "Information awareness",
      "Information protocol",
    ],
    correctAnswer: "Information literacy",
    correctOption: "A",
    answerPicked: "",
  },
  {
    name: "A library without walls is called...",
    options: [
      "Digital library",
      "Electronic library",
      "Virtual library",
      "Public library",
    ],
    correctAnswer: "Virtual library",
    correctOption: "C",
    answerPicked: "",
  },
  {
    name: "A book borrowed by an undergraduate will be for a period of ...",
    options: [
      "Three weeks",
      "Four weeks",
      "Two weeks",
      "One week",
    ],
    correctAnswer: "Two weeks",
    correctOption: "C",
    answerPicked: "",
  },
  {
    name: "The following are ways of acquiring materials in the library except...",
    options: [
      "Purchase",
      "Gift",
      "Exchange",
      "Binding",
    ],
    correctAnswer: "Binding",
    correctOption: "D",
    answerPicked: "",
  },
  {
    name: "The retrieval tool used to locate books on shelves in the library is ...",
    options: [
      "Library card",
      "Catalogue",
      "Kardex",
      "School identity card",
    ],
    correctAnswer: "Catalogue",
    correctOption: "B",
    answerPicked: "",
  },
  // ... Continue adding more questions ...

];

const libraryname6 = [
  // ... Previous library questions ...

  {
    name: "Call number is made of",
    options: [
      "Location number",
      "Address number",
      "Subject number and author number",
      "Subject number and book number",
    ],
    correctAnswer: "Subject number and author number",
    correctOption: "C",
    answerPicked: "",
  },
  {
    name: "Call number is",
    options: [
      "Numeric",
      "Alphanumeric",
      "Words only",
      "Pictorial only",
    ],
    correctAnswer: "Alphanumeric",
    correctOption: "B",
    answerPicked: "",
  },
  {
    name: "The unique number assigned to any book showing when it was acquired is called",
    options: [
      "Accession number",
      "Subject number",
      "Location number",
      "International Standard Book Number",
    ],
    correctAnswer: "Accession number",
    correctOption: "A",
    answerPicked: "",
  },
  {
    name: "Information on the publisher of a book, place and date of publication is known as",
    options: [
      "Collation",
      "Author entry",
      "Series entry",
      "Imprint",
    ],
    correctAnswer: "Imprint",
    correctOption: "D",
    answerPicked: "",
  },
  {
    name: "Information on a book’s length and size as well as notations about maps or illustrations is called",
    options: [
      "Author’s entry",
      "Series entry",
      "Collation",
      "Imprint",
    ],
    correctAnswer: "Collation",
    correctOption: "C",
    answerPicked: "",
  },
  {
    name: "The largest and most detailed of all encyclopedias is called",
    options: [
      "World Bank Encyclopedia",
      "Encyclopedia Britannica",
      "New Age Encyclopedia",
      "Encyclopedia of physics",
    ],
    correctAnswer: "Encyclopedia Britannica",
    correctOption: "B",
    answerPicked: "",
  },
  
    {
      name: "Some disadvantages of the use of social media are",
      options: [
        "Facilitating deception",
        "Defamatory content",
        "Subjective norms",
        "All of the above",
      ],
      correctAnswer: "All of the above",
      correctOption: "D",
      answerPicked: "",
    },
    {
      name: "File transfer protocol an internet standard permits on the internet the sharing of ____ with other computers",
      options: [
        "Videos",
        "Files",
        "Sound",
        "Textual messages",
      ],
      correctAnswer: "Files",
      correctOption: "B",
      answerPicked: "",
    },
    {
      name: "One aspect of information literacy is ________",
      options: [
        "Cultural literacy",
        "Building literacy",
        "Music literacy",
        "Trading literacy",
      ],
      correctAnswer: "Cultural literacy",
      correctOption: "A",
      answerPicked: "",
    },
    {
      name: "One of the following is a primary source of information",
      options: [
        "Book",
        "Reviews",
        "Patents",
        "Databases",
      ],
      correctAnswer: "Patents",
      correctOption: "C",
      answerPicked: "",
    },
    {
      name: "A library with manual and sclerotic catalogues is an example of one that uses",
      options: [
        "Hybrid catalogue",
        "Electronic catalogues",
        "Manual catalogue",
        "MARC and OPAC",
      ],
      correctAnswer: "Hybrid catalogue",
      correctOption: "A",
      answerPicked: "",
    },
    {
      name: "Added entries can be used in locating publication by the provision of",
      options: [
        "Title, subject, author, translator, compiler and publisher",
        "Title, subject, author, and printer",
        "Title, subject, author, compiler and press",
        "Title, subject, author, publisher, printer and press",
      ],
      correctAnswer: "Title, subject, author, translator, compiler and publisher",
      correctOption: "A",
      answerPicked: "",
    },
    // ... Continue adding more questions ..
  
  // ... Continue adding more questions ...
];

const spirogyraname = [
  {
      name: "What is the filamentous structure of Spirogyra called?",
      options: [
          "Branched and multicellular",
          "Unicellular and spherical",
          "Filamentous and multicellular",
          "Branched and unicellular"
      ],
      correctAnswer: "Filamentous and multicellular",
      correctOption: "C",
      answerPicked: ""
  },
  {
      name: "What type of cells make up each Spirogyra filament?",
      options: [
          "Circular cells",
          "Rectangular cells",
          "Irregular cells",
          "Cylindrical cells"
      ],
      correctAnswer: "Rectangular cells",
      correctOption: "B",
      answerPicked: ""
  },
  {
      name: "What are the two components of a Spirogyra cell?",
      options: [
          "Cell wall and nucleus",
          "Cytoplasm and chloroplasts",
          "Nucleus and chloroplasts",
          "Cell wall and cytoplasm"
      ],
      correctAnswer: "Cell wall and cytoplasm",
      correctOption: "D",
      answerPicked: ""
  },
  {
      name: "What makes Spirogyra filaments slimy to touch?",
      options: [
          "Dissolution of chloroplasts",
          "Dissolution of cytoplasm",
          "Dissolution of nucleus",
          "Dissolution of outer pectin layer"
      ],
      correctAnswer: "Dissolution of outer pectin layer",
      correctOption: "D",
      answerPicked: ""
  },
  {
      name: "Where is the nucleus located in a Spirogyra cell?",
      options: [
          "Attached to the cell wall",
          "Floating in the cytoplasm",
          "At the center of the cell",
          "Within the chloroplasts"
      ],
      correctAnswer: "At the center of the cell",
      correctOption: "C",
      answerPicked: ""
  },
  {
      name: "What is the main pigment responsible for photosynthesis in Spirogyra?",
      options: [
          "Chlorophyll a",
          "Chlorophyll b",
          "Carotenes",
          "Xanthophylls"
      ],
      correctAnswer: "Chlorophyll a",
      correctOption: "A",
      answerPicked: ""
  },
  {
      name: "What structures are found within Spirogyra's chloroplasts?",
      options: [
          "Stomata",
          "Thylakoids",
          "Pyrenoids",
          "Roots"
      ],
      correctAnswer: "Pyrenoids",
      correctOption: "C",
      answerPicked: ""
  },
  {
      name: "Which group does Spirogyra belong to?",
      options: [
          "Pteridophyta",
          "Bryophyta",
          "Gymnosperm",
          "Thallophyta"
      ],
      correctAnswer: "Thallophyta",
      correctOption: "D",
      answerPicked: ""
  },
  {
      name: "What is the primary mode of nutrition in green algae like Spirogyra?",
      options: [
          "Heterotrophic",
          "Parasitic",
          "Saprophytic",
          "Autotrophic"
      ],
      correctAnswer: "Autotrophic",
      correctOption: "D",
      answerPicked: ""
  },
  {
      name: "What is the role of rhizoids in green algae like Spirogyra?",
      options: [
          "Absorption of water and nutrients",
          "Anchoring the plant to the substrate",
          "Reproduction",
          "Photosynthesis"
      ],
      correctAnswer: "Anchoring the plant to the substrate",
      correctOption: "B",
      answerPicked: ""
  },
  {
      name: "How are the chloroplasts arranged within Spirogyra cells?",
      options: [
          "Randomly scattered",
          "In a single layer",
          "In pairs",
          "Spirally coiled"
      ],
      correctAnswer: "Spirally coiled",
      correctOption: "D",
      answerPicked: ""
  },
  {
      name: "What is the function of pyrenoids in Spirogyra cells?",
      options: [
          "Reproduction",
          "Storage of energy",
          "Protection of nucleus",
          "Carbon dioxide fixation"
      ],
      correctAnswer: "Carbon dioxide fixation",
      correctOption: "D",
      answerPicked: ""
  },
  {
      name: "How is the nucleus positioned within a Spirogyra cell?",
      options: [
          "Attached to the cell membrane",
          "At the base of the cell",
          "Suspended in the center by cytoplasmic strands",
          "Floating freely in the cytoplasm"
      ],
      correctAnswer: "Suspended in the center by cytoplasmic strands",
      correctOption: "C",
      answerPicked: ""
  },
  {
      name: "What is the primary characteristic feature of Thallophyta?",
      options: [
          "Presence of vascular tissues",
          "Undifferentiated body called thallus",
          "Formation of cones",
          "Development of true leaves"
      ],
      correctAnswer: "Undifferentiated body called thallus",
      correctOption: "B",
      answerPicked: ""
  },
  {
      name: "What is the main mode of nutrition in green algae like Spirogyra?",
      options: [
          "Heterotrophic",
          "Parasitic",
          "Saprophytic",
          "Autotrophic"
      ],
      correctAnswer: "Autotrophic",
      correctOption: "D",
      answerPicked: ""
  },
  {
      name: "What gives Spirogyra filaments a slimy feel?",
      options: [
          "Presence of tiny hairs",
          "Secretion of oil",
          "Dissolution of chloroplasts",
          "Dissolution of outer pectin layer"
      ],
      correctAnswer: "Dissolution of outer pectin layer",
      correctOption: "D",
      answerPicked: ""
  },

  {
      name: "Which of the following best describes the filamentous structure of Spirogyra?",
      options: [
          "Multibranched and multicellular",
          "Unbranched and unicellular",
          "Multibranched and unicellular",
          "Unbranched and multicellular"
      ],
      correctAnswer: "Unbranched and multicellular",
      correctOption: "D",
      answerPicked: ""
  },
  {
      name: "What is the composition of Spirogyra's cell wall?",
      options: [
          "Cellulose",
          "Chitin",
          "Lignin",
          "Pectin"
      ],
      correctAnswer: "Pectin",
      correctOption: "D",
      answerPicked: ""
  },
  {
      name: "Which of the following is NOT a component of Spirogyra's cell?",
      options: [
          "Cytoplasm",
          "Chloroplast",
          "Nucleus",
          "Mitochondria"
      ],
      correctAnswer: "Mitochondria",
      correctOption: "D",
      answerPicked: ""
  },
  {
      name: "What makes Spirogyra filaments slimy to touch?",
      options: [
          "Presence of mucilage",
          "Excess water absorption",
          "Secretion of oils",
          "Dissolution of cellulose"
      ],
      correctAnswer: "Presence of mucilage",
      correctOption: "A",
      answerPicked: ""
  },
  {
      name: "What is the primary function of the pyrenoids within Spirogyra's chloroplasts?",
      options: [
          "Protein synthesis",
          "Starch storage",
          "Cellulose production",
          "DNA replication"
      ],
      correctAnswer: "Starch storage",
      correctOption: "B",
      answerPicked: ""
  },
  {
      name: "How is the nucleus positioned within Spirogyra cells?",
      options: [
          "Floating freely in the cytoplasm",
          "Attached to the cell wall",
          "Suspended in the center by cytoplasmic strands",
          "Embedded within the chloroplasts"
      ],
      correctAnswer: "Suspended in the center by cytoplasmic strands",
      correctOption: "C",
      answerPicked: ""
  },
  {
      name: "Which of the following accurately describes the group to which Spirogyra belongs?",
      options: [
          "Angiosperms",
          "Gymnosperms",
          "Bryophytes",
          "Algae"
      ],
      correctAnswer: "Algae",
      correctOption: "D",
      answerPicked: ""
  },
  {
      name: "What is the primary mode of nutrition in Spirogyra?",
      options: [
          "Saprophytic",
          "Parasitic",
          "Heterotrophic",
          "Autotrophic"
      ],
      correctAnswer: "Autotrophic",
      correctOption: "D",
      answerPicked: ""
  }
  // Continue with more questions...

  // Continue with more questions...
];

const agaricusname = [
  {
      name: "What type of organism is Agaricus?",
      options: [
          "Plant",
          "Fungus",
          "Alga",
          "Bacteria"
      ],
      correctAnswer: "Fungus",
      correctOption: "B",
      answerPicked: ""
  },
  {
      name: "Where do Agaricus mushrooms commonly grow?",
      options: [
          "Sunny meadows",
          "Mountain peaks",
          "Rainy forests",
          "Damp organic matter"
      ],
      correctAnswer: "Damp organic matter",
      correctOption: "D",
      answerPicked: ""
  },
  {
      name: "How does Agaricus obtain its nutrients?",
      options: [
          "Photosynthesis",
          "Feeding on other organisms",
          "Absorbing minerals from the soil",
          "Synthesizing its own food"
      ],
      correctAnswer: "Feeding on other organisms",
      correctOption: "B",
      answerPicked: ""
  },
  {
      name: "What is the umbrella-shaped part of Agaricus called?",
      options: [
          "Stipe",
          "Cap",
          "Gill",
          "Rhizome"
      ],
      correctAnswer: "Cap",
      correctOption: "B",
      answerPicked: ""
  },
  {
      name: "What is the role of the annulus in Agaricus?",
      options: [
          "Protection from predators",
          "Aiding in reproduction",
          "Supporting the cap",
          "Covering the young basidiocarp"
      ],
      correctAnswer: "Covering the young basidiocarp",
      correctOption: "D",
      answerPicked: ""
  },
  {
      name: "How do Agaricus mushrooms reproduce?",
      options: [
          "By releasing spores",
          "By forming seeds",
          "By producing pollen",
          "By budding"
      ],
      correctAnswer: "By releasing spores",
      correctOption: "A",
      answerPicked: ""
  },
  {
      name: "What is the function of the basidiocarp in Agaricus?",
      options: [
          "Nutrient absorption",
          "Reproduction",
          "Photosynthesis",
          "Supporting the stem"
      ],
      correctAnswer: "Reproduction",
      correctOption: "B",
      answerPicked: ""
  },
  {
      name: "Which group does Agaricus belong to?",
      options: [
          "Angiosperms",
          "Gymnosperms",
          "Bryophytes",
          "Fungi"
      ],
      correctAnswer: "Fungi",
      correctOption: "D",
      answerPicked: ""
  },
  {
      name: "What is the primary mode of nutrition in Agaricus?",
      options: [
          "Photosynthesis",
          "Parasitism",
          "Saprophytism",
          "Heterotrophy"
      ],
      correctAnswer: "Saprophytism",
      correctOption: "C",
      answerPicked: ""
  },
  {
      name: "What type of organism is Agaricus?",
      options: [
          "Plant",
          "Fungus",
          "Alga",
          "Bacteria"
      ],
      correctAnswer: "Fungus",
      correctOption: "B",
      answerPicked: ""
  },
  {
      name: "Where do Agaricus mushrooms commonly grow?",
      options: [
          "Sunny meadows",
          "Mountain peaks",
          "Rainy forests",
          "Damp organic matter"
      ],
      correctAnswer: "Damp organic matter",
      correctOption: "D",
      answerPicked: ""
  },
  {
      name: "How does Agaricus obtain its nutrients?",
      options: [
          "Photosynthesis",
          "Feeding on other organisms",
          "Absorbing minerals from the soil",
          "Synthesizing its own food"
      ],
      correctAnswer: "Feeding on other organisms",
      correctOption: "B",
      answerPicked: ""
  },
  {
      name: "What is the umbrella-shaped part of Agaricus called?",
      options: [
          "Stipe",
          "Cap",
          "Gill",
          "Rhizome"
      ],
      correctAnswer: "Cap",
      correctOption: "B",
      answerPicked: ""
  },
  {
      name: "What is the role of the annulus in Agaricus?",
      options: [
          "Protection from predators",
          "Aiding in reproduction",
          "Supporting the cap",
          "Covering the young basidiocarp"
      ],
      correctAnswer: "Covering the young basidiocarp",
      correctOption: "D",
      answerPicked: ""
  },
  {
      name: "How do Agaricus mushrooms reproduce?",
      options: [
          "By releasing spores",
          "By forming seeds",
          "By producing pollen",
          "By budding"
      ],
      correctAnswer: "By releasing spores",
      correctOption: "A",
      answerPicked: ""
  },
  {
      name: "What is the function of the basidiocarp in Agaricus?",
      options: [
          "Nutrient absorption",
          "Reproduction",
          "Photosynthesis",
          "Supporting the stem"
      ],
      correctAnswer: "Reproduction",
      correctOption: "B",
      answerPicked: ""
  },
  {
      name: "Which group does Agaricus belong to?",
      options: [
          "Angiosperms",
          "Gymnosperms",
          "Bryophytes",
          "Fungi"
      ],
      correctAnswer: "Fungi",
      correctOption: "D",
      answerPicked: ""
  },
  {
      name: "What is the primary mode of nutrition in Agaricus?",
      options: [
          "Photosynthesis",
          "Parasitism",
          "Saprophytism",
          "Heterotrophy"
      ],
      correctAnswer: "Saprophytism",
      correctOption: "C",
      answerPicked: ""
  },
  {
      name: "What is the scientific name for the common edible mushroom?",
      options: [
          "Agaricus bisporus",
          "Mushroomicus delicious",
          "Fungus eatum",
          "Champignon prime"
      ],
      correctAnswer: "Agaricus bisporus",
      correctOption: "A",
      answerPicked: ""
  },
  {
      name: "What is the purpose of gills on the underside of the mushroom cap?",
      options: [
          "To store water",
          "To protect the spores",
          "To aid in spore production",
          "To provide structural support"
      ],
      correctAnswer: "To aid in spore production",
      correctOption: "C",
      answerPicked: ""
  },
  {
      name: "Which of the following best describes the role of mycelium in Agaricus?",
      options: [
          "Reproductive structure",
          "Food storage structure",
          "Absorption of nutrients",
          "Photosynthetic structure"
      ],
      correctAnswer: "Absorption of nutrients",
      correctOption: "C",
      answerPicked: ""
  },
  {
      name: "What type of cells are present in the gills of Agaricus?",
      options: [
          "Root cells",
          "Stem cells",
          "Gill cells",
          "Basidium cells"
      ],
      correctAnswer: "Basidium cells",
      correctOption: "D",
      answerPicked: ""
  },
  {
      name: "What type of organism is Agaricus?",
      options: [
          "Plant",
          "Fungus",
          "Alga",
          "Bacteria"
      ],
      correctAnswer: "Fungus",
      correctOption: "B",
      answerPicked: ""
  },
  {
      name: "Where do Agaricus mushrooms commonly grow?",
      options: [
          "Sunny meadows",
          "Mountain peaks",
          "Rainy forests",
          "Damp organic matter"
      ],
      correctAnswer: "Damp organic matter",
      correctOption: "D",
      answerPicked: ""
  },
  {
      name: "How does Agaricus obtain its nutrients?",
      options: [
          "Photosynthesis",
          "Feeding on other organisms",
          "Absorbing minerals from the soil",
          "Synthesizing its own food"
      ],
      correctAnswer: "Feeding on other organisms",
      correctOption: "B",
      answerPicked: ""
  },
  {
      name: "What is the umbrella-shaped part of Agaricus called?",
      options: [
          "Stipe",
          "Cap",
          "Gill",
          "Rhizome"
      ],
      correctAnswer: "Cap",
      correctOption: "B",
      answerPicked: ""
  },
  {
      name: "What is the role of the annulus in Agaricus?",
      options: [
          "Protection from predators",
          "Aiding in reproduction",
          "Supporting the cap",
          "Covering the young basidiocarp"
      ],
      correctAnswer: "Covering the young basidiocarp",
      correctOption: "D",
      answerPicked: ""
  },
  {
      name: "How do Agaricus mushrooms reproduce?",
      options: [
          "By releasing spores",
          "By forming seeds",
          "By producing pollen",
          "By budding"
      ],
      correctAnswer: "By releasing spores",
      correctOption: "A",
      answerPicked: ""
  },
  {
      name: "What is the function of the basidiocarp in Agaricus?",
      options: [
          "Nutrient absorption",
          "Reproduction",
          "Photosynthesis",
          "Supporting the stem"
      ],
      correctAnswer: "Reproduction",
      correctOption: "B",
      answerPicked: ""
  },
  {
      name: "Which group does Agaricus belong to?",
      options: [
          "Angiosperms",
          "Gymnosperms",
          "Bryophytes",
          "Fungi"
      ],
      correctAnswer: "Fungi",
      correctOption: "D",
      answerPicked: ""
  },
  {
      name: "What is the primary mode of nutrition in Agaricus?",
      options: [
          "Photosynthesis",
          "Parasitism",
          "Saprophytism",
          "Heterotrophy"
      ],
      correctAnswer: "Saprophytism",
      correctOption: "C",
      answerPicked: ""
  },
  {
      name: "What is the scientific name for the common edible mushroom?",
      options: [
          "Agaricus bisporus",
          "Mushroomicus delicious",
          "Fungus eatum",
          "Champignon prime"
      ],
      correctAnswer: "Agaricus bisporus",
      correctOption: "A",
      answerPicked: ""
  },
  {
      name: "What is the purpose of gills on the underside of the mushroom cap?",
      options: [
          "To store water",
          "To protect the spores",
          "To aid in spore production",
          "To provide structural support"
      ],
      correctAnswer: "To aid in spore production",
      correctOption: "C",
      answerPicked: ""
  },
  {
      name: "Which of the following best describes the role of mycelium in Agaricus?",
      options: [
          "Reproductive structure",
          "Food storage structure",
          "Absorption of nutrients",
          "Photosynthetic structure"
      ],
      correctAnswer: "Absorption of nutrients",
      correctOption: "C",
      answerPicked: ""
  },
  {
      name: "What type of cells are present in the gills of Agaricus?",
      options: [
          "Root cells",
          "Stem cells",
          "Gill cells",
          "Basidium cells"
      ],
      correctAnswer: "Basidium cells",
      correctOption: "D",
      answerPicked: ""
  },
  {
      name: "What does the term 'gymnosperm' mean?",
      options: [
          "Naked seed",
          "Seed in a fruit",
          "Cone-bearing",
          "Flower-producing"
      ],
      correctAnswer: "Naked seed",
      correctOption: "A",
      answerPicked: ""
  },
  {
      name: "What is the primary function of the cap in Agaricus?",
      options: [
          "Photosynthesis",
          "Absorbing water",
          "Protecting the gills",
          "Spore production"
      ],
      correctAnswer: "Spore production",
      correctOption: "D",
      answerPicked: ""
  },
  {
      name: "Which of the following is NOT a characteristic of Agaricus?",
      options: [
          "Multicellular",
          "Photosynthetic",
          "Umbrella-shaped cap",
          "Basidiospore-producing"
      ],
      correctAnswer: "Photosynthetic",
      correctOption: "B",
      answerPicked: ""
  },
  {
      name: "What role do the gills play in Agaricus reproduction?",
      options: [
          "Protection of spores",
          "Food storage",
          "Nutrient absorption",
          "Spore production"
      ],
      correctAnswer: "Spore production",
      correctOption: "D",
      answerPicked: ""
  },
  {
      name: "What is the main function of the annulus in Agaricus?",
      options: [
          "Supporting the cap",
          "Producing seeds",
          "Covering the gills",
          "Assisting in spore dispersal"
      ],
      correctAnswer: "Assisting in spore dispersal",
      correctOption: "D",
      answerPicked: ""
  },
  {
      name: "What structure is formed from the hyphae of Agaricus?",
      options: [
          "Stipe",
          "Cap",
          "Gill",
          "Mycelium"
      ],
      correctAnswer: "Mycelium",
      correctOption: "D",
      answerPicked: ""
  },
  // Continue with more questions...
];

const mathnames = [
{
  name: "If f(k + 1) = 9(2SM + 8k + 3) where M is a positive integer",
  options: [
    "f (k + 1) = 9(2SM - 8k + 3) where M is a positive integer",
    "f (k + 1) = 5z(k+1) + 3k+2 where M is a positive integer",
    "f (k) = (k+l) + 3k + 2 where M is a positive integer",
    "f (k + 1) = xk-1",
  ],
  correctAnswer: "f (k + 1) = 9(2SM - 8k + 3) where M is a positive integer",
     correctOption: "A",
      answerPicked: ""
},
{
  name: "Which of the following formulas implies the truth of Tk+1 if the truth of Tk is given?",
  options: [
    "(i) = 1 - 1",
    "(ii) xk+l(x-1)",
    "(iii) (i) = 1 - 1",
    "(iv) xk(x-1)",
  ],
  correctAnswer: "xk+l(x-1)",
     correctOption: "B",
      answerPicked: ""
},
   {
  name: "Given the set A = {a, b, c, d}; which of the following is not an element of the power set of A.",
  options: [
    "{a, b}",
    "{0}",
    "{a, b, c}",
    "{a, b, c, d}",
  ],
  correctAnswer: "{0}",
        correctOption: "B",
      answerPicked: ""
},
{
  name: "How many subsets will a set containing 5 elements have?",
  options: [
    "32",
    "25",
    "36",
    "64",
  ],
  correctAnswer: "32",
     correctOption: "A",
      answerPicked: ""
},
];
// ... (add more names here)
const setOperationsnames = [
{
  name: "P and Q are subsets of the universal set U defined as U = {x: x3 - x2 - x + 1 = 0}. P = {x: x is an integer} and Q = {x: x odd}, find PnQ.",
  options: [
    "{-1,1,1}",
    "{-1,1}",
    "{l,1,-1}",
    "{-1,-1}",
  ],
  correctAnswer: "{-1,1}",
     correctOption: "B",
      answerPicked: ""
},
{
  name: "If E = {1,2,3,4} and A = {1,3,5}, the symmetric difference of E and A written A ∆ E is",
  options: [
    "{1,2}",
    "{2,4,5}",
    "{1,2,3,4,5}",
    "{1,3}",
  ],
  correctAnswer: "{2,4,5}",
     correctOption: "B",
      answerPicked: ""
},
{
  name: "If the universal set U = {x: x is a natural number and 1 < x < 9}, P = {x: l < x < 4} and Q = {2,4,6,8}. Find (PU ∩ Q)c",
  options: [
    "{1,2,3,4,5,6,7,8,9}",
    "{1,2,3,4,6,8}",
    "{1,5,6,7}",
    "{5,7,9}",
  ],
  correctAnswer: "{5,7,9}",
     correctOption: "D",
      answerPicked: ""
},
    {
  name: "Out of 25 teachers, 16 are married and 15 are women. If 6 of the men are married, how many of the women are not married?",
  options: [
    "6",
    "10",
    "5",
    "9",
  ],
  correctAnswer: "5",
         correctOption: "C",
      answerPicked: ""
},
{
  name: "Which of the following is not a true property of a Cartesian product?",
  options: [
    "(A ∩ B) × (C ∩ D) = (A × C) ∩ (B × D)",
    "(A ∪ B) × (C ∪ D) = (A × C) ∪ (B × D)",
    "(A ∪ B) × C = (A × C) ∪ (B × C)",
    "A × ∅ = ∅ × A = ∅",
  ],
  correctAnswer: "(A ∪ B) × C = (A × C) ∪ (B × C)",
     correctOption: "C",
      answerPicked: ""
},
{
  name: "If (A ∩ Bc) ∪ (Ac ∩ B) = A ∩ B, what does the symbol '∪' signifies?",
  options: [
    "difference",
    "asymmetric difference",
    "symmetric difference",
    "union",
  ],
  correctAnswer: "symmetric difference",
     correctOption: "C",
      answerPicked: ""
},
{
  name: "Let U = {1,2,3,4,5,6} be the universal set, A = {1,2,3}, and B = {4,5,6}. Find Ac ∪ (B ∩ Bc).",
  options: [
    "0",
    "{1,2,3}",
    "{4,5,6}",
    "U",
  ],
  correctAnswer: "U",
     correctOption: "D",
      answerPicked: ""
},
    {
  name: "C = {1, 2, 3, 4, ...}. What is the name of the set C?",
  options: [
    "Finite set",
    "Closed set",
    "Universal set",
    "Infinite set",
  ],
  correctAnswer: "Infinite set",
         correctOption: "D",
      answerPicked: ""
},
{
  name: "What does the set {x: x ∈ A and x ∉ B} define?",
  options: [
    "set containing elements in A and not in B",
    "set containing elements not in A but in B",
    "set containing elements both in A and B",
    "set containing elements both in A and B",
  ],
  correctAnswer: "set containing elements not in A but in B",
     correctOption: "B",
      answerPicked: ""
},
{
  name: "When a set C = {} it means that C is:",
  options: [
    "a universal set",
    "C is a finite set",
    "C is an empty set",
    "is a universal set",
  ],
  correctAnswer: "C is an empty set",
     correctOption: "C",
      answerPicked: ""
},
{
  name: "ACB and Bc ⊆ C implies Ac ⊆ C is the",
  options: [
    "Complementary law",
    "Transitivity Law",
    "Inverse law",
    "Commutativity law",
  ],
  correctAnswer: "Transitivity Law",
     correctOption: "B",
      answerPicked: ""
},
// ... more names
];

const goalSettingQuestions = [
{
  name: "What is the main purpose of goal setting?",
  options: [
    "To have a long-term vision",
    "To achieve short-term motivation",
    "To choose where you want to go and what you want to achieve",
    "To use present achievement data",
  ],
  correctAnswer: "To choose where you want to go and what you want to achieve",
  correctOption: "C",
  answerPicked: "",
},
{
  name: "Which of the following is a component of SMART goals?",
  options: [
    "Static",
    "Simple",
    "Significant",
    "Specific",
  ],
  correctAnswer: "Specific",
  correctOption: "D",
  answerPicked: "",
},
{
  name: "What does the 'T' stand for in SMART goals?",
  options: [
    "Timely",
    "Thoughtful",
    "Tangible",
    "Tough",
  ],
  correctAnswer: "Timely",
  correctOption: "A",
  answerPicked: "",
},
{
  name: "Why is it important to write down your goals?",
  options: [
    "To impress others",
    "To keep them secret",
    "To have a physical reminder",
    "To avoid setting goals",
  ],
  correctAnswer: "To have a physical reminder",
  correctOption: "C",
  answerPicked: "",
},
{
  name: "What kind of targets should you set to achieve your goals?",
  options: [
    "Vague and general",
    "Similar to what others set",
    "Irrelevant to your interests",
    "Clear and specific",
  ],
  correctAnswer: "Clear and specific",
  correctOption: "D",
  answerPicked: "",
},
// ... Continue adding more questions ...
];

const timeManagementQuestions = [
{
  name: "What is the main purpose of time management?",
  options: [
    "To have more free time",
    "To accomplish tasks with no planning",
    "To cram as many activities as possible into a day",
    "To use time efficiently and achieve goals",
  ],
  correctAnswer: "To use time efficiently and achieve goals",
  correctOption: "D",
  answerPicked: "",
},
{
  name: "Which of the following is a time management device?",
  options: [
    "Mobile phone",
    "Television",
    "Library",
    "Timepiece",
  ],
  correctAnswer: "Timepiece",
  correctOption: "D",
  answerPicked: "",
},
{
  name: "What does the prioritization principle of time management involve?",
  options: [
    "Completing tasks in a random order",
    "Ranking tasks according to their importance or urgency",
    "Ignoring tasks that are difficult",
    "Completing tasks that are easy first",
  ],
  correctAnswer: "Ranking tasks according to their importance or urgency",
  correctOption: "B",
  answerPicked: "",
},
{
  name: "What should be included in a daily time schedule?",
  options: [
    "All possible activities in the day",
    "Activities that others want you to do",
    "Only routine activities",
    "Time, Activity, Priority (by importance or urgency)",
  ],
  correctAnswer: "Time, Activity, Priority (by importance or urgency)",
  correctOption: "D",
  answerPicked: "",
},
{
  name: "What is the purpose of creating a time table?",
  options: [
    "To allocate time for only study",
    "To allocate time for rest and recreation",
    "To show off to others",
    "To impress professors",
  ],
  correctAnswer: "To allocate time for rest and recreation",
  correctOption: "B",
  answerPicked: "",
},
// ... Continue adding more questions ...
];
const languageSkillsQuestions = [
{
  name: "Which of the following is NOT one of the four language skills?",
  options: [
    "Listening",
    "Speaking",
    "Analyzing",
    "Writing",
  ],
  correctAnswer: "Analyzing",
  correctOption: "C",
  answerPicked: "",
},
{
  name: "Which of the following skills involve receiving and understanding language?",
  options: [
    "Speaking",
    "Writing",
    "Listening",
    "Reading",
  ],
  correctAnswer: "Listening",
  correctOption: "C",
  answerPicked: "",
},
{
  name: "Which of the following skills involves producing language?",
  options: [
    "Listening",
    "Reading",
    "Speaking",
    "Analyzing",
  ],
  correctAnswer: "Speaking",
  correctOption: "C",
  answerPicked: "",
},
{
  name: "What is the purpose of the productive skills of speaking and writing?",
  options: [
    "To receive and understand language",
    "To analyze text",
    "To produce language",
    "To criticize others' work",
  ],
  correctAnswer: "To produce language",
  correctOption: "C",
  answerPicked: "",
},
// ... Continue adding more questions ...
];

const listeningSkillsQuestions = [
{
  name: "What is the key to all effective communication?",
  options: [
    "Hearing",
    "Listening",
    "Speaking",
    "Writing",
  ],
  correctAnswer: "Listening",
  correctOption: "B",
  answerPicked: "",
},
{
  name: "How is listening different from hearing?",
  options: [
    "Listening is automatic, while hearing is a conscious activity.",
    "Listening involves receiving and interpreting messages, while hearing is an experience.",
    "Hearing is a purposeful activity, while listening is automatic.",
    "Listening is a passive process, while hearing requires focus.",
  ],
  correctAnswer: "Listening involves receiving and interpreting messages, while hearing is an experience.",
  correctOption: "B",
  answerPicked: "",
},
{
  name: "What type of activity is listening?",
  options: [
    "An automatic process",
    "A passive experience",
    "A conscious use of one's ears",
    "A physical process",
  ],
  correctAnswer: "A conscious use of one's ears",
  correctOption: "C",
  answerPicked: "",
},
{
  name: "What is meant by 'active listening'?",
  options: [
    "Listening with full attention and engagement",
    "Listening while doing other tasks",
    "Listening without focusing on the speaker",
    "Listening passively",
  ],
  correctAnswer: "Listening with full attention and engagement",
  correctOption: "A",
  answerPicked: "",
},
{
  name: "What is critical listening?",
  options: [
    "Listening with the intent to memorize information",
    "Listening for enjoyment",
    "Listening to learn new facts",
    "Listening to evaluate and analyze what is being said",
  ],
  correctAnswer: "Listening to evaluate and analyze what is being said",
  correctOption: "D",
  answerPicked: "",
},
// ... Continue adding more questions ...
];

const wordFormationQuestions = [
{
  name: "What is the process of creating new words called?",
  options: [
    "Morphology",
    "Syntax",
    "Semantics",
    "Pragmatics",
  ],
  correctAnswer: "Morphology",
  correctOption: "A",
  answerPicked: "", 
},
{
  name: "What is the term for a word that is formed by combining parts of two different words?",
  options: [
    "Compound word",
    "Derivative",
    "Inflection",
    "Acronym",
  ],
  correctAnswer: "Compound word",
  correctOption: "A",
  answerPicked: "",
},
{
  name: "What is the process of adding prefixes or suffixes to a word to create new forms of the word called?",
  options: [
    "Derivation",
    "Compounding",
    "Inflection",
    "Blending",
  ],
  correctAnswer: "Derivation",
  correctOption: "A",
  answerPicked: "",
},
{
  name: "Which of the following is an example of a blend word?",
  options: [
    "Smog (smoke + fog)",
    "Unhappiness",
    "Quickly",
    "Runner",
  ],
  correctAnswer: "Smog (smoke + fog)",
  correctOption: "A",
  answerPicked: "",
},
{
  name: "What is the term for words that are formed by combining the initial letters of a multi-word name or phrase?",
  options: [
    "Blend words",
    "Contractions",
    "Acronyms",
    "Derivatives",
  ],
  correctAnswer: "Acronyms",
  correctOption: "C",
  answerPicked: "",
},
// ... Continue adding more questions ...
];


const capitalizationQuestions = [
{
  name: "Which of the following should be capitalized?",
  options: [
    "river",
    "monday",
    "city",
    "Mississippi",
  ],
  correctAnswer: "Mississippi",
  correctOption: "D",
  answerPicked: "",
},
{
  name: "In a title, which words should be capitalized?",
  options: [
    "prepositions, conjunctions, and articles",
    "verbs, adjectives, and adverbs",
    "nouns and pronouns",
    "all major words",
  ],
  correctAnswer: "all major words",
  correctOption: "D",
  answerPicked: "",
},
{
  name: "Which sentence is correctly capitalized?",
  options: [
    "the golden gate bridge spans the san francisco bay.",
    "The Golden Gate Bridge Spans The San Francisco Bay.",
    "The golden gate bridge Spans the san Francisco bay.",
    "The Golden Gate bridge Spans the San Francisco Bay.",
  ],
  correctAnswer: "The Golden Gate Bridge Spans The San Francisco Bay.",
  correctOption: "B",
  answerPicked: "",
},
{
  name: "When should you use capital letters for the names of seasons?",
  options: [
    "Always",
    "Only at the beginning of a sentence",
    "Only when they are part of a title",
    "Never",
  ],
  correctAnswer: "Only when they are part of a title",
  correctOption: "C",
  answerPicked: "",
},
{
  name: "Which word should not be capitalized?",
  options: [
    "President",
    "December",
    "river",
    "National",
  ],
  correctAnswer: "river",
  correctOption: "C",
  answerPicked: "",
},
// ... Continue adding more questions ...
];

const alphabetismQuestions = [
{
  name: "What does the term 'acronym' refer to?",
  options: [
    "A word that is spelled the same way forwards and backwards.",
    "A word formed from the initial letters of a multi-word name or phrase.",
    "A word that combines the meanings of two separate words.",
    "A word that has the same sound as another but a different meaning.",
  ],
  correctAnswer: "A word formed from the initial letters of a multi-word name or phrase.",
  correctOption: "B",
  answerPicked: "",
},
{
  name: "What is the term for a word formed from the first letters of each word in a phrase?",
  options: [
    "Acronym",
    "Initialism",
    "Abbreviation",
    "Anagram",
  ],
  correctAnswer: "Initialism",
  correctOption: "B",
  answerPicked: "",
},
{
  name: "Which of the following is an example of an acronym?",
  options: [
    "NASA",
    "TV",
    "CD",
    "SOS",
  ],
  correctAnswer: "NASA",
  correctOption: "A",
  answerPicked: "",
},
// ... Continue adding more questions ...
];

const morphemeQuestions = [
{
  name: "What is a morpheme?",
  options: [
    "A type of punctuation mark",
    "The smallest unit of meaning in a language",
    "A type of compound word",
    "A word formed from the initial letters of a multi-word name or phrase",
  ],
  correctAnswer: "The smallest unit of meaning in a language",
  correctOption: "B",
  answerPicked: "",
},
{
  name: "How many morphemes are in the word 'unhappiness'?",
  options: [
    "1",
    "2",
    "3",
    "4",
  ],
  correctAnswer: "3",
  correctOption: "C",
  answerPicked: "",
},
{
  name: "What is a free morpheme?",
  options: [
    "A morpheme that cannot stand alone as a word",
    "A morpheme that carries the main meaning of a word",
    "A morpheme that can stand alone as a word",
    "A morpheme that is added to the beginning of a word",
  ],
  correctAnswer: "A morpheme that can stand alone as a word",
  correctOption: "C",
  answerPicked: "",
},
{
  name: "What is an affix?",
  options: [
    "A type of vowel sound",
    "A type of consonant sound",
    "A morpheme that changes the meaning of a word",
    "A morpheme that cannot stand alone as a word",
  ],
  correctAnswer: "A morpheme that changes the meaning of a word",
  correctOption: "C",
  answerPicked: "",
},
{
  name: "Which of the following is a bound morpheme?",
  options: [
    "Book",
    "Un-",
    "Read",
    "Jumping",
  ],
  correctAnswer: "Un-",
  correctOption: "B",
  answerPicked: "",
},
   {
  name: "Which role involves understanding the text at the surface level?",
  options: [
    "Code breaker",
    "Meaning maker",
    "Text user",
    "Text critic",
  ],
  correctAnswer: "Code breaker",
  correctOption: "A",
  answerPicked: "",
},
{
  name: "Which role involves comprehending the text at the level intended by the author?",
  options: [
    "Code breaker",
    "Meaning maker",
    "Text user",
    "Text critic",
  ],
  correctAnswer: "Meaning maker",
  correctOption: "B",
  answerPicked: "",
},
{
  name: "Which role involves analyzing the factors that influenced the author and the text?",
  options: [
    "Code breaker",
    "Meaning maker",
    "Text user",
    "Text critic",
  ],
  correctAnswer: "Text user",
  correctOption: "C",
  answerPicked: "",
},
{
  name: "Which role involves understanding that the text is not neutral and that existing biases inform calls to action?",
  options: [
    "Code breaker",
    "Meaning maker",
    "Text user",
    "Text critic",
  ],
  correctAnswer: "Text critic",
  correctOption: "D",
  answerPicked: "",
},
// ... Continue adding more questions ...
];

const readingAndNetiquetteQuestions = [
{
  name: "What does critical reading involve?",
  options: [
    "Reading quickly without analyzing the text",
    "Reading passively and accepting the author's message as is",
    "Reading with a focus on understanding power dynamics and inequalities",
    "Reading only for entertainment purposes",
  ],
  correctAnswer: "Reading with a focus on understanding power dynamics and inequalities",
  correctOption: "C",
  answerPicked: "",
},
{
  name: "What are the four roles that a reader assumes while reading a text critically?",
  options: [
    "Observer, describer, decoder, recaller",
    "Code breaker, meaning maker, text user, text critic",
    "Reader, writer, speaker, listener",
    "Editor, researcher, analyst, critic",
  ],
  correctAnswer: "Code breaker, meaning maker, text user, text critic",
  correctOption: "B",
  answerPicked: "",
},
{
  name: "Why is it important for readers to be aware of the informing ideologies in constructed texts?",
  options: [
    "To make the text more entertaining",
    "To criticize the author's writing style",
    "To understand how the text is influenced by social and cultural factors",
    "To challenge the text's grammar and vocabulary",
  ],
  correctAnswer: "To understand how the text is influenced by social and cultural factors",
  correctOption: "C",
  answerPicked: "",
},
{
  name: "What is netiquette?",
  options: [
    "A code of conduct for using the internet",
    "A type of computer software",
    "A new form of internet language",
    "A type of encryption technique",
  ],
  correctAnswer: "A code of conduct for using the internet",
  correctOption: "A",
  answerPicked: "",
},
{
  name: "Which of the following is a netiquette guideline for sending emails?",
  options: [
    "Include as many attachments as possible",
    "Use vague subject lines",
    "Stay off-topic in the email content",
    "Use white space and descriptive subject lines",
  ],
  correctAnswer: "Use white space and descriptive subject lines",
  correctOption: "D",
  answerPicked: "",
},
// ... Continue adding more questions ...
];
const chemistryLabQuestions = [
  {
    name: "What are melting point tubes primarily used for in chemistry laboratories?",
    options: [
      "Weighing substances",
      "Measuring acidity and basicity",
      "Determining the melting points of substances",
      "Measuring pressure"
    ],
    correctAnswer: "Determining the melting points of substances",
    correctOption: "C",
    answerPicked: ""
  },
  {
    name: "What is the significance of a balance in a chemistry laboratory?",
    options: [
      "Measuring temperature",
      "Conducting titrations",
      "Weighing substances",
      "Measuring acidity and basicity"
    ],
    correctAnswer: "Weighing substances",
    correctOption: "C",
    answerPicked: ""
  },
  {
    name: "Which apparatus is typically used for titration in chemistry experiments?",
    options: [
      "Thermometer",
      "Balance",
      "Melting point tube",
      "Burette"
    ],
    correctAnswer: "Burette",
    correctOption: "D",
    answerPicked: ""
  },
  {
    name: "What is the primary purpose of a pH meter in a chemistry laboratory?",
    options: [
      "Measuring temperature",
      "Determining the freezing point of a substance",
      "Measuring the strength of an acid or base",
      "Conducting titrations"
    ],
    correctAnswer: "Measuring the strength of an acid or base",
    correctOption: "C",
    answerPicked: ""
  },
  {
    name: "What is the main function of a barometer in a chemistry laboratory?",
    options: [
      "Determining the molecular weight of substances",
      "Measuring pressure",
      "Determining the melting point of a substance",
      "Measuring the strength of an acid or base"
    ],
    correctAnswer: "Measuring pressure",
    correctOption: "B",
    answerPicked: ""
  },
  {
    name: "What are some common types of electrochemical cells used in chemistry?",
    options: [
      "Conductance cells only",
      "Various types, including conductance cells",
      "Simple steam distillation cells",
      "pH cells only"
    ],
    correctAnswer: "Various types, including conductance cells",
    correctOption: "B",
    answerPicked: ""
  },
  {
    name: "What is the purpose of a Beckman thermometer in chemistry experiments?",
    options: [
      "Measuring acidity and basicity",
      "Determining the freezing point of a substance",
      "Weighing substances",
      "Measuring temperature"
    ],
    correctAnswer: "Determining the freezing point of a substance",
    correctOption: "B",
    answerPicked: ""
  },
  {
    name: "Which instrument is used to measure the strength of an acid or base?",
    options: [
      "Balance",
      "pH meter",
      "Melting point tube",
      "Barometer"
    ],
    correctAnswer: "pH meter",
    correctOption: "B",
    answerPicked: ""
  },
  {
    name: "What is the purpose of an electrochemical cell in chemistry experiments?",
    options: [
      "Measuring temperature",
      "Determining the molecular weight of substances",
      "Measuring the strength of an acid or base",
      "Generating electricity"
    ],
    correctAnswer: "Generating electricity",
    correctOption: "D",
    answerPicked: ""
  },
  {
    name: "Which apparatus is essential for measuring the freezing point of a substance?",
    options: [
      "Melting point tube",
      "Balance",
      "Burette",
      "Beckman thermometer"
    ],
    correctAnswer: "Beckman thermometer",
    correctOption: "D",
    answerPicked: ""
  },
  {
    name: "What is the primary function of a thermometer in a chemistry laboratory?",
    options: [
      "Measuring acidity and basicity",
      "Determining the molecular weight of substances",
      "Measuring the strength of an acid or base",
      "Measuring hotness or coldness"
    ],
    correctAnswer: "Measuring hotness or coldness",
    correctOption: "D",
    answerPicked: ""
  },
  {
    name: "What is the role of titration apparatus in chemistry experiments?",
    options: [
      "Measuring temperature",
      "Conducting titrations",
      "Weighing substances",
      "Measuring pressure"
    ],
    correctAnswer: "Conducting titrations",
    correctOption: "B",
    answerPicked: ""
  },
  {
    name: "Which instrument is primarily used for weighing substances in a chemistry laboratory?",
    options: [
      "Burette",
      "Balance",
      "Melting point tube",
      "pH meter"
    ],
    correctAnswer: "Balance",
    correctOption: "B",
    answerPicked: ""
  },
  {
    name: "What are some common apparatus used in titration experiments in chemistry?",
    options: [
      "Pipette, burette, beakers",
      "Melting point tube, thermometer",
      "Conical flask, measuring cylinder, volumetric flask",
      "Balance, pH meter"
    ],
    correctAnswer: "Pipette, burette, beakers",
    correctOption: "A",
    answerPicked: ""
  },
  {
    name: "Which instrument is used to measure the hotness or coldness of an object?",
    options: [
      "Balance",
      "pH meter",
      "Beckman thermometer",
      "Burette"
    ],
    correctAnswer: "Beckman thermometer",
    correctOption: "C",
    answerPicked: ""
  },
  {
    name: "What does a pH meter measure in a chemistry laboratory?",
    options: [
      "Weight of substances",
      "Strength of an acid or base",
      "Pressure",
      "Temperature"
    ],
    correctAnswer: "Strength of an acid or base",
    correctOption: "B",
    answerPicked: ""
  },
  {
    name: "Which type of electrochemical cell is commonly used in chemistry experiments?",
    options: [
      "Conductance cell",
      "pH cell",
      "Barometric cell",
      "Thermocouple cell"
    ],
    correctAnswer: "Conductance cell",
    correctOption: "A",
    answerPicked: ""
  },
  {
    name: "What is the primary function of a barometer in chemistry?",
    options: [
      "Weighing substances",
      "Measuring pressure",
      "Determining the melting point of a substance",
      "Measuring the strength of an acid or base"
    ],
    correctAnswer: "Measuring pressure",
    correctOption: "B",
    answerPicked: ""
  },

  {
      name: "How many methods are normally used in quantitative analysis to determine the chemical composition of substances?",
      options: [
        "Three methods",
        "Two methods",
        "Four methods",
        "No methods"
      ],
      correctAnswer: "Two methods",
      correctOption: "B",
      answerPicked: ""
    },
    
  {
      name: "What is the primary purpose of quantitative analysis?",
      options: [
        "To identify unknown substances",
        "To determine the chemical composition of substances",
        "To perform qualitative analysis",
        "To predict future chemical reactions"
      ],
      correctAnswer: "To determine the chemical composition of substances",
      correctOption: "B",
      answerPicked: ""
    }
    
];
const simpleSaltaionsQuestions = [
  {
    name: "What reagent is used to test for the presence of carbonate ions in a salt solution?",
    options: [
      "Dilute H2SO4",
      "BaCl2 solution",
      "Lime water",
      "Neutral ferric chloride solution"
    ],
    correctAnswer: "Lime water",
    correctOption: "C",
    answerPicked: ""
  },
  {
    name: "Which gas is evolved when a salt solution reacts with dilute HCl as a test for carbonate?",
    options: [
      "Oxygen",
      "Hydrogen",
      "Carbon dioxide",
      "Chlorine"
    ],
    correctAnswer: "Carbon dioxide",
    correctOption:"C",
    answerPicked: ""
  },
  {
    name: "In the confirmatory test for carbonate, what is the observation when the evolved gas is passed through lime water?",
    options: [
      "Lime water turns yellow",
      "Lime water turns milky",
      "Lime water becomes clear",
      "Lime water changes color to pink"
    ],
    correctAnswer: "Lime water turns milky",
    correctOption: "B",
    answerPicked: ""
  },
  {
    name: "What is the confirmatory test for carbonate involving BaCl2 solution?",
    options: [
      "Formation of a white precipitate",
      "Release of a pungent odor",
      "Formation of a brown gas",
      "Formation of a red precipitate"
    ],
    correctAnswer: "Formation of a white precipitate",
    correctOption: "A",
    answerPicked: ""
  },
  {
    name: "Which gas is evolved when a salt solution reacts with BaCl2 solution as a test for carbonate?",
    options: [
      "Oxygen",
      "Carbon dioxide",
      "Hydrogen",
      "Chlorine"
    ],
    correctAnswer: "Carbon dioxide",
    correctOption:"C",
    answerPicked:""
  },
  {
    name: "How is a salt tested for acetate ions?",
    options: [
      "By rubbing it with dilute H2SO4",
      "By heating it with NaOH",
      "By mixing it with ammonia",
      "By adding it to water"
    ],
    correctAnswer: "By heating it with NaOH",
    correctOption:"B",
    answerPicked:""
  },
  {
    name: "In the confirmatory test for acetate involving neutral ferric chloride solution, what color change indicates the presence of acetate ions?",
    options: [
      "Yellow to red",
      "Green to blue",
      "Blue to green",
      "Red to yellow"
    ],
    correctAnswer: "Blue to green",
    correctOption:"C",
    answerPicked:""
  },
  {
    name: "What is the confirmatory test for acetate involving the reaction with concentrated H2SO4 and ethyl alcohol?",
    options: [
      "Formation of a white precipitate",
      "Release of a pungent odor",
      "Formation of a brown gas",
      "Formation of a colorless gas"
    ],
    correctAnswer: "Formation of a colorless gas",
    correctOption:"D",
    answerPicked:""
  },
  {
    name: "Which reagent is used to test for acetate ions in a salt solution?",
    options: [
      "Dilute HCl",
      "BaCl2 solution",
      "Dilute H2SO4",
      "Neutral ferric chloride solution"
    ],
    correctAnswer: "Neutral ferric chloride solution",
    correctOption:"D",
    answerPicked:""
  },
  {
    name: "How is a salt tested for chloride ions?",
    options: [
      "By rubbing it with dilute H2SO4",
      "By heating it with conc. H2SO4",
      "By mixing it with ammonia",
      "By adding it to water"
    ],
    correctAnswer: "By heating it with conc. H2SO4",
    correctOption: "B",
    answerPicked:""
  },
  {
    name: "When a salt is heated with conc. H2SO4 and evolves a colorless odorless gas, what does this indicate?",
    options: [
      "Presence of chloride",
      "Presence of nitrate",
      "Presence of carbonate",
      "Absence of any specific ion"
    ],
    correctAnswer: "Presence of chloride",
    correctOption:"A",
    answerPicked:""
  },
  {
    name: "What is the observation when lime water turns milky in the test for chloride?",
    options: [
      "Presence of chloride",
      "Presence of nitrate",
      "Presence of acetate",
      "Presence of sulfate"
    ],
    correctAnswer: "Presence of chloride",
    correctOption:"A",
    answerPicked:""
  },
  {
    name: "In the confirmatory test for chloride, when a white precipitate is obtained that is soluble in dilute HCl, what does this confirm?",
    options: [
      "Presence of chloride",
      "Presence of nitrate",
      "Presence of acetate",
      "Presence of sulfate"
    ],
    correctAnswer: "Presence of chloride",
    correctOption:"A",
    answerPicked: ""
  },
  {
    name: "What is the characteristic reaction when a salt is tested for chloride?",
    options: [
      "Smell of vinegar",
      "Brisk effervescence",
      "Deep red coloration",
      "Pleasant fruity smell"
    ],
    correctAnswer: "Brisk effervescence",
    correctOption:"B",
    answerPicked:""
  },
  {
    name: "What does the evolution of a colorless gas when a salt is heated with conc. H2SO4 indicate?",
    options: [
      "Presence of chloride",
      "Presence of nitrate",
      "Presence of acetate",
      "Presence of carbonate"
    ],
    correctAnswer: "Presence of chloride",
    correctOption: "A",
    answerPicked:""
  },
  {
    name: "When a colorless gas gives dense white fumes with NH4OH in the mouth of the test tube, what does it indicate?",
    options: [
      "Presence of chloride",
      "Presence of nitrate",
      "Presence of acetate",
      "Presence of carbonate"
    ],
    correctAnswer: "Presence of chloride",
    correctOption:"A",
    answerPicked:""

  },
  {
    name: "How is a salt tested for nitrate ions?",
    options: [
      "By rubbing it with dilute H2SO4",
      "By heating it with conc. H2SO4 and paper balls",
      "By mixing it with ammonia",
      "By adding it to water"
    ],
    correctAnswer: "By heating it with conc. H2SO4 and paper balls",
    correctOption:"B",
    answerPicked:""
  },
  {
    name: "In the confirmatory test for nitrate involving freshly prepared ferrous sulfate solution and conc. H2SO4, what is the observation?",
    options: [
      "Formation of a white precipitate",
      "Greenish yellow gas with a pungent smell",
      "Release of a brown gas",
      "Formation of a red precipitate"
    ],
    correctAnswer: "Greenish yellow gas with a pungent smell",
    correctOption:"B",
    answerPicked:""
  },
  {
    name: "When a salt is heated with conc. H2SO4 and paper balls and a brown ring is formed, what does this indicate?",
    options: [
      "Presence of chloride",
      "Presence of nitrate",
      "Presence of acetate",
      "Presence of sulfate"
    ],
    correctAnswer: "Presence of nitrate",
    correctOption:"B",
    answerPicked:""
  },
  {
    name: "What is the confirmatory test for nitrate involving heating the salt solution with zinc dust and NaOH?",
    options: [
      "Formation of a white precipitate",
      "Release of a pungent odor",
      "Formation of a brown gas",
      "Formation of a colorless gas"
    ],
    correctAnswer: "Formation of a colorless gas",
    correctOption:"D",
    answerPicked:""
  },
  {
    name: "How is a salt tested for sulfate ions?",
    options: [
      "By rubbing it with dilute H2SO4",
      "By heating it with conc. H2SO4",
      "By mixing it with ammonia",
      "By adding it to water"
    ],
    correctAnswer: "By heating it with conc. H2SO4",
    correctOption:"B",
    answerPicked:""
  },
  {
    name: "In the confirmatory test for sulfate involving dilute HCl and BaCl2, what is the observation?",
    options: [
      "Formation of a white curdy precipitate",
      "Release of a pungent odor",
      "Formation of a brown gas",
      "Formation of a red precipitate"
    ],
    correctAnswer: "Formation of a white curdy precipitate",
    correctOption:"A",
    answerPicked:""
  },
  {
    name: "When a greenish yellow gas with a pungent smell is obtained, what does this confirm in the test for sulfate?",
    options: [
      "Presence of chloride",
      "Presence of nitrate",
      "Presence of acetate",
      "Presence of sulfate"
    ],
    correctAnswer: "Presence of sulfate",
    correctOption:"D",
    answerPicked:""
  },
  {
    name: "What is the observation when a white curdy precipitate is obtained in the confirmatory test for sulfate?",
    options: [
      "Presence of chloride",
      "Presence of nitrate",
      "Presence of acetate",
      "Presence of sulfate"
    ],
    correctAnswer: "Presence of sulfate",
    correctOption:"D",
    answerPicked:""
  },
  {
    name: "In the confirmatory test for sulfate involving acetic acid and lead acetate solution, what does the formation of a white precipitate indicate?",
    options: [
      "Presence of chloride",
      "Presence of nitrate",
      "Presence of acetate",
      "Presence of sulfate"
    ],
    correctAnswer: "Presence of sulfate",
    correctOption:"D",
    answerPicked:"D",

  },
  {
    name: "When testing for sulfate ions with acetic acid and lead acetate solution, what confirms the presence of sulfate?",
    options: [
      "Formation of a colorless gas",
      "Formation of a brown gas",
      "Formation of a red precipitate",
      "Formation of a white curdy precipitate"
    ],
    correctAnswer: "Formation of a colorless gas",
    correctOption:"A",
    answerPicked:""
  },
  // More questions can be added if needed...
];

const atomictheoryQuestions = [
  {
    name: "Who is credited with the most important chemical theory described in the text?",
    options: [
      "John Dalton",
      "Albert Einstein",
      "Isaac Newton",
      "Marie Curie"
    ],
    correctAnswer: "John Dalton",
    correctOption: "A",
    answerPicked: ""
  },
  {
    name: "What did Dalton call the small particles of matter corresponding to different elements?",
    options: [
      "Protons",
      "Electrons",
      "Neutrons",
      "Atoms"
    ],
    correctAnswer: "Atoms",
    correctOption: "D",
    answerPicked: ""
  },
  {
    name: "According to Dalton, what is the weight assigned to a hydrogen atom?",
    options: [
      "0",
      "1",
      "2",
      "3"
    ],
    correctAnswer: "1",
    correctOption: "B",
    answerPicked: ""
  },
  {
    name: "What is the main idea of Dalton's atomic theory?",
    options: [
      "Atoms are divisible into smaller particles",
      "Elements consist of molecules",
      "Matter is made up of indivisible atoms",
      "Atoms of different elements are identical"
    ],
    correctAnswer: "Matter is made up of indivisible atoms",
    correctOption: "C",
    answerPicked: ""
  },
  {
    name: "Which statement summarizes Dalton's atomic theory?",
    options: [
      "Atoms are constantly changing in size",
      "Elements consist of different kinds of atoms",
      "Atoms of one element differ in size and shape",
      "All matter is made up of atoms that cannot be created or destroyed"
    ],
    correctAnswer: "All matter is made up of atoms that cannot be created or destroyed",
    correctOption: "D",
    answerPicked: ""
  },
    {
      name: "Who is credited with the most important chemical theory described in the text?",
      options: [
        "John Dalton",
        "Albert Einstein",
        "Isaac Newton",
        "Marie Curie"
      ],
      correctAnswer: "John Dalton",
      correctOption: "A",
      answerPicked: ""
    },
    {
      name: "What did Dalton call the small particles of matter corresponding to different elements?",
      options: [
        "Protons",
        "Electrons",
        "Neutrons",
        "Atoms"
      ],
      correctAnswer: "Atoms",
      correctOption: "D",
      answerPicked: ""
    },
    {
      name: "According to Dalton, what is the weight assigned to a hydrogen atom?",
      options: [
        "0",
        "1",
        "2",
        "3"
      ],
      correctAnswer: "1",
      correctOption: "B",
      answerPicked: ""
    },
    {
      name: "What is the main idea of Dalton's atomic theory?",
      options: [
        "Atoms are divisible into smaller particles",
        "Elements consist of molecules",
        "Matter is made up of indivisible atoms",
        "Atoms of different elements are identical"
      ],
      correctAnswer: "Matter is made up of indivisible atoms",
      correctOption: "C",
      answerPicked: ""
    },
    {
      name: "Which statement summarizes Dalton's atomic theory?",
      options: [
        "Atoms are constantly changing in size",
        "Elements consist of different kinds of atoms",
        "Atoms of one element differ in size and shape",
        "All matter is made up of atoms that cannot be created or destroyed"
      ],
      correctAnswer: "All matter is made up of atoms that cannot be created or destroyed",
      correctOption: "D",
      answerPicked: ""
    },
    {
      name: "What does the word 'atomos' mean in Greek?",
      options: [
        "Divisible",
        "Invisible",
        "Indivisible",
        "Composite"
      ],
      correctAnswer: "Indivisible",
      correctOption: "C",
      answerPicked: ""
    },
    {
      name: "According to Dalton, what are compounds formed from?",
      options: [
        "Compounds are not discussed in the theory",
        "Compounds are indivisible",
        "Atoms of one element",
        "Atoms of two or more elements in a definite number"
      ],
      correctAnswer: "Atoms of two or more elements in a definite number",
      correctOption: "D",
      answerPicked: ""
    },
    {
      name: "In Dalton's atomic theory, what is the defining property of atoms of the same element?",
      options: [
        "They have different sizes",
        "They have different shapes",
        "They have different masses",
        "They are identical in size, shape, and all other properties"
      ],
      correctAnswer: "They are identical in size, shape, and all other properties",
      correctOption: "D",
      answerPicked: ""
    },
    {
      name: "What is the significance of assigning a weight of 1 to a hydrogen atom in Dalton's theory?",
      options: [
        "Hydrogen atoms are the heaviest",
        "Hydrogen atoms are the lightest",
        "Hydrogen atoms are the most reactive",
        "Hydrogen atoms are the most stable"
      ],
      correctAnswer: "Hydrogen atoms are the lightest",
      correctOption: "B",
      answerPicked: ""
    },
    {
      name: "Which statement is true according to Dalton's atomic theory?",
      options: [
        "Atoms can be created or destroyed by chemical means",
        "Atoms of different elements are identical",
        "Atoms can be divided into smaller particles",
        "All matter is composed of indivisible atoms"
      ],
      correctAnswer: "All matter is composed of indivisible atoms",
      correctOption: "D",
      answerPicked: ""
    },
    // Additional questions start here
    {
      name: "What is the term 'atomos' derived from?",
      options: [
        "Latin",
        "French",
        "Greek",
        "German"
      ],
      correctAnswer: "Greek",
      correctOption: "C",
      answerPicked: ""
    },
    {
      name: "What is the range of years during which John Dalton lived?",
      options: [
        "1666-1744",
        "1766-1844",
        "1844-1926",
        "1897-1987"
      ],
      correctAnswer: "1766-1844",
      correctOption: "B",
      answerPicked: ""
    },
    {
      name: "According to Dalton, what is the fundamental particle of matter?",
      options: [
        "Molecule",
        "Atom",
        "Ion",
        "Compound"
      ],
      correctAnswer: "Atom",
      correctOption: "B",
      answerPicked: ""
    },
    {
      name: "What is the meaning of the term 'indivisible' in the context of Dalton's atomic theory?",
      options: [
        "Unable to be cut",
        "Extremely small",
        "Easily broken",
        "Chemically unstable"
      ],
      correctAnswer: "Unable to be cut",
      correctOption: "A",
      answerPicked: ""
    },
    {
      name: "Which element did Dalton assign a weight of 1 to?",
      options: [
        "Oxygen",
        "Carbon",
        "Hydrogen",
        "Nitrogen"
      ],
      correctAnswer: "Hydrogen",
      correctOption: "C",
      answerPicked: ""
    },
    {
      name: "What did Dalton build a table of in his theory?",
      options: [
        "Chemical reactions",
        "Atomic masses",
        "Molecular structures",
        "Kinetic energy"
      ],
      correctAnswer: "Atomic masses",
      correctOption: "B",
      answerPicked: ""
    },

  {
    name: "Which of the following is NOT a statement in Dalton's atomic theory?",
    options: [
      "Atoms are indivisible",
      "Atoms of different elements are identical",
      "Compounds result from the combination of atoms of two or more elements",
      "Atoms are constantly changing in size"
    ],
    correctAnswer: "Atoms are constantly changing in size",
    correctOption: "D",
    answerPicked: ""
  },
  {
    name: "What was the initial hypothesis proposed by John Dalton?",
    options: [
      "All matter consists of molecules",
      "All matter consists of atoms",
      "All matter consists of elements",
      "All matter consists of compounds"
    ],
    correctAnswer: "All matter consists of atoms",
    correctOption: "B",
    answerPicked: ""
  },
  {
    name: "In Dalton's atomic theory, what is the role of atoms in compounds?",
    options: [
      "Atoms form molecules",
      "Atoms combine to create elements",
      "Atoms remain unchanged",
      "Atoms form ions"
    ],
    correctAnswer: "Atoms form molecules",
    correctOption: "A",
    answerPicked: ""
  },
  {
    name: "What did Dalton assign a weight of 1 to as a reference in his theory?",
    options: [
      "Oxygen",
      "Carbon",
      "Hydrogen",
      "Nitrogen"
    ],
    correctAnswer: "Hydrogen",
    correctOption: "C",
    answerPicked: ""
  },
  {
    name: "What was the outcome of further experimental work on Dalton's atomic theory?",
    options: [
      "It disproved the theory entirely",
      "It confirmed the theory and turned it into a law",
      "It led to the discovery of subatomic particles",
      "It resulted in the development of quantum mechanics"
    ],
    correctAnswer: "It confirmed the theory and turned it into a law",
    correctOption: "B",
    answerPicked: ""
  },
  {
    name: "What did Dalton use to compare the relative weights of elements and compounds?",
    options: [
      "A balance scale",
      "A calorimeter",
      "A spectroscope",
      "A spectrophotometer"
    ],
    correctAnswer: "A balance scale",
    correctOption: "A",
    answerPicked: ""
  },
  {
    name: "What term did Dalton use to describe the particles that make up all substances?",
    options: [
      "Particles",
      "Molecules",
      "Atoms",
      "Compounds"
    ],
    correctAnswer: "Atoms",
    correctOption: "C",
    answerPicked: ""
  },
  {
    name: "Which statement accurately reflects Dalton's view of atoms?",
    options: [
      "Atoms of different elements can be distinguished by their shape",
      "Atoms of different elements have the same size and mass",
      "Atoms of different elements have different properties",
      "Atoms of different elements are not actually different"
    ],
    correctAnswer: "Atoms of different elements have the same size and mass",
    correctOption: "B",
    answerPicked: ""
  },
  {
    name: "What did Dalton assign a weight of 1 to in his atomic theory?",
    options: [
      "Oxygen",
      "Carbon",
      "Hydrogen",
      "Nitrogen"
    ],
    correctAnswer: "Hydrogen",
    correctOption: "C",
    answerPicked: ""
  },
  {
    name: "What did Dalton's atomic theory ultimately become?",
    options: [
      "A hypothesis",
      "A law of chemistry",
      "An observation",
      "A theory of relativity"
    ],
    correctAnswer: "A law of chemistry",
    correctOption: "B",
    answerPicked: ""
  },
  {
    name: "What did Dalton's table of relative weights primarily focus on?",
    options: [
      "Atomic numbers",
      "Atomic masses",
      "Atomic charges",
      "Atomic radii"
    ],
    correctAnswer: "Atomic masses",
    correctOption: "B",
    answerPicked: ""
  },
  {
    name: "Which of the following statements is NOT a part of Dalton's atomic theory?",
    options: [
      "Atoms of different elements can combine to form compounds",
      "Atoms of different elements have the same properties",
      "Atoms are indivisible and cannot be created or destroyed",
      "All matter is composed of tiny particles called atoms"
    ],
    correctAnswer: "Atoms of different elements have the same properties",
    correctOption: "B",
    answerPicked: ""
  },
  {
    name: "In Dalton's atomic theory, what are compounds composed of?",
    options: [
      "Elements",
      "Atoms",
      "Ions",
      "Molecules"
    ],
    correctAnswer: "Atoms",
    correctOption: "B",
    answerPicked: ""
  },
  {
    name: "What word did Dalton use to describe the smallest particle of an element that retains its properties?",
    options: [
      "Molecule",
      "Atom",
      "Ion",
      "Compound"
    ],
    correctAnswer: "Atom",
    correctOption: "B",
    answerPicked: ""
  },
  {
    name: "What did Dalton propose about the combination of atoms to form compounds?",
    options: [
      "It happens randomly",
      "It occurs in a fixed ratio",
      "It depends on temperature",
      "It is impossible"
    ],
    correctAnswer: "It occurs in a fixed ratio",
    correctOption: "B",
    answerPicked: ""
  },
  {
    name: "What did Dalton assign a weight of 1 to in his atomic theory?",
    options: [
      "Oxygen",
      "Carbon",
      "Hydrogen",
      "Nitrogen"
    ],
    correctAnswer: "Hydrogen",
    correctOption: "C",
    answerPicked: ""
  },
  {
    name: "Which of the following was NOT a part of Dalton's atomic theory?",
    options: [
      "All matter consists of atoms",
      "Atoms are indivisible",
      "Atoms of different elements are identical",
      "Atoms cannot be created and destroyed"
    ],
    correctAnswer: "Atoms of different elements are identical",
    correctOption: "C",
    answerPicked: ""
  },
];

  const settheory = [
    {
      name: "Who is credited with the discovery that an atom has a tiny central nucleus?",
      options: [
        "John Dalton",
        "Marie Curie",
        "Ernest Rutherford",
        "Albert Einstein"
      ],
      correctAnswer: "Ernest Rutherford",
      correctOption: "C",
      answerPicked: ""
    },
    {
      name: "What did Ernest Rutherford discover about the atom's structure?",
      options: [
        "Atoms consist of electrons only",
        "Atoms are indivisible",
        "Atoms have a central nucleus surrounded by electrons",
        "Atoms have a central nucleus made of electrons"
      ],
      correctAnswer: "Atoms have a central nucleus surrounded by electrons",
      correctOption: "C",
      answerPicked: ""
    },
    {
      name: "What type of particles did Rutherford use in his experiments to study atoms?",
      options: [
        "Electrons",
        "Protons",
        "Alpha particles",
        "Neutrons"
      ],
      correctAnswer: "Alpha particles",
      correctOption: "C",
      answerPicked: ""
    },
    {
      name: "What is the atomic number (Z) of an atom?",
      options: [
        "The number of electrons",
        "The number of neutrons",
        "The number of protons",
        "The number of shells"
      ],
      correctAnswer: "The number of protons",
      correctOption: "C",
      answerPicked: ""
    },
    {
      name: "How is the atomic number related to the number of electrons in a neutral atom?",
      options: [
        "They are equal",
        "The number of electrons is double the atomic number",
        "There is no relationship",
        "The number of electrons is half the atomic number"
      ],
      correctAnswer: "They are equal",
      correctOption: "A",
      answerPicked: ""
    },
    {
      name: "What is the term used for the positively charged particles in an atom's nucleus?",
      options: [
        "Electrons",
        "Protons",
        "Neutrons",
        "Alpha particles"
      ],
      correctAnswer: "Protons",
      correctOption: "B",
      answerPicked: ""
    },
    {
      name: "What is the arrangement of electrons around the nucleus referred to as?",
      options: [
        "Orbits",
        "Clouds",
        "Shells",
        "Cores"
      ],
      correctAnswer: "Shells",
      correctOption: "C",
      answerPicked: ""
    },
    {
      name: "What is the innermost shell of electrons called?",
      options: [
        "K shell",
        "L shell",
        "M shell",
        "N shell"
      ],
      correctAnswer: "K shell",
      correctOption: "A",
      answerPicked: ""
    },
    {
      name: "Which electron shell has the lowest energy?",
      options: [
        "K shell",
        "L shell",
        "M shell",
        "N shell"
      ],
      correctAnswer: "K shell",
      correctOption: "A",
      answerPicked: ""
    },
    {
      name: "In what order are electrons successively added to electron shells?",
      options: [
        "L, K, M, N",
        "K, L, M, N",
        "N, M, L, K",
        "M, K, N, L"
      ],
      correctAnswer: "K, L, M, N",
      correctOption: "B",
      answerPicked: ""
    },
    {
      name: "Which shell is higher in energy than the K shell?",
      options: [
        "L shell",
        "M shell",
        "N shell",
        "O shell"
      ],
      correctAnswer: "L shell",
      correctOption: "A",
      answerPicked: ""
    },
    {
      name: "What did Ernest Rutherford use to study the deflection patterns of particles by thin metal foils?",
      options: [
        "Electrons",
        "Protons",
        "Alpha particles",
        "Neutrons"
      ],
      correctAnswer: "Alpha particles",
      correctOption: "C",
      answerPicked: ""
    },
    {
      name: "What did Rutherford conclude about the mass distribution in an atom?",
      options: [
        "Electrons carry all the mass",
        "Electrons are located in the nucleus",
        "The nucleus carries practically all the mass",
        "Neutrons carry all the mass"
      ],
      correctAnswer: "The nucleus carries practically all the mass",
      correctOption: "C",
      answerPicked: ""
    },
    {
      name: "What is the term used to describe the number of positive charges on the nucleus?",
      options: [
        "Atomic mass",
        "Atomic weight",
        "Atomic number (Z)",
        "Atomic radius"
      ],
      correctAnswer: "Atomic number (Z)",
      correctOption: "C",
      answerPicked: ""
    },
    {
      name: "What must be equal in a neutral atom to satisfy its electrical neutrality?",
      options: [
        "Number of protons and electrons",
        "Number of neutrons and electrons",
        "Number of protons and neutrons",
        "Number of electrons and shells"
      ],
      correctAnswer: "Number of protons and electrons",
      correctOption: "A",
      answerPicked: ""
    },
    {
      name: "What did Rutherford use to study the deflection patterns of alpha particles?",
      options: [
        "Electron beams",
        "X-rays",
        "Gamma rays",
        "Alpha particle beams"
      ],
      correctAnswer: "Alpha particle beams",
      correctOption: "D",
      answerPicked: ""
    },
    {
      name: "What is the term for the positively charged particles in an atom's nucleus?",
      options: [
        "Electrons",
        "Protons",
        "Neutrons",
        "Alpha particles"
      ],
      correctAnswer: "Protons",
      correctOption: "B",
      answerPicked: ""
    },

    {
      name: "How are electrons arranged around the nucleus in an atom?",
      options: [
        "In random patterns",
        "In fixed concentric circles",
        "In a linear chain",
        "In irregular orbits"
      ],
      correctAnswer: "In fixed concentric circles",
      correctOption: "B",
      answerPicked: ""
    },
    {
      name: "What is the term used to describe the innermost electron shell?",
      options: [
        "Core shell",
        "Central shell",
        "K shell",
        "Alpha shell"
      ],
      correctAnswer: "K shell",
      correctOption: "C",
      answerPicked: ""
    },
    {
      name: "Which electron shell has the highest energy?",
      options: [
        "K shell",
        "L shell",
        "M shell",
        "N shell"
      ],
      correctAnswer: "N shell",
      correctOption: "D",
      answerPicked: ""
    },
    {
      name: "What did Rutherford use in his experiments to study the atom's structure?",
      options: [
        "Electrons",
        "Protons",
        "Alpha particles",
        "Neutrons"
      ],
      correctAnswer: "Alpha particles",
      correctOption: "C",
      answerPicked: ""
    },
    {
      name: "What is the term used for the number of positive charges on the nucleus?",
      options: [
        "Atomic mass",
        "Atomic weight",
        "Atomic number (Z)",
        "Atomic radius"
      ],
      correctAnswer: "Atomic number (Z)",
      correctOption: "C",
      answerPicked: ""
    },
    {
      name: "What is the arrangement of electrons around the nucleus referred to as?",
      options: [
        "Orbits",
        "Clouds",
        "Shells",
        "Cores"
      ],
      correctAnswer: "Shells",
      correctOption: "C",
      answerPicked: ""
    },
    {
      name: "What did Rutherford conclude about the mass distribution in an atom?",
      options: [
        "Electrons carry all the mass",
        "Electrons are located in the nucleus",
        "The nucleus carries practically all the mass",
        "Neutrons carry all the mass"
      ],
      correctAnswer: "The nucleus carries practically all the mass",
      correctOption: "C",
      answerPicked: ""
    },
    {
      name: "What must be equal in a neutral atom to satisfy its electrical neutrality?",
      options: [
        "Number of protons and electrons",
        "Number of neutrons and electrons",
        "Number of protons and neutrons",
        "Number of electrons and shells"
      ],
      correctAnswer: "Number of protons and electrons",
      correctOption: "A",
      answerPicked: ""
    },
    {
      name: "What did Rutherford use to study the deflection patterns of alpha particles?",
      options: [
        "Electron beams",
        "X-rays",
        "Gamma rays",
        "Alpha particle beams"
      ],
      correctAnswer: "Alpha particle beams",
      correctOption: "D",
      answerPicked: ""
    },
    {
      name: "What is the term for the positively charged particles in an atom's nucleus?",
      options: [
        "Electrons",
        "Protons",
        "Neutrons",
        "Alpha particles"
      ],
      correctAnswer: "Protons",
      correctOption: "B",
      answerPicked: ""
    },
    {
      name: "How are electrons arranged around the nucleus in an atom?",
      options: [
        "In random patterns",
        "In fixed concentric circles",
        "In a linear chain",
        "In irregular orbits"
      ],
      correctAnswer: "In fixed concentric circles",
      correctOption: "B",
      answerPicked: ""
    },
    {
      name: "What is the term used to describe the innermost electron shell?",
      options: [
        "Core shell",
        "Central shell",
        "K shell",
        "Alpha shell"
      ],
      correctAnswer: "K shell",
      correctOption: "C",
      answerPicked: ""
    },
    {
      name: "Which electron shell has the highest energy?",
      options: [
        "K shell",
        "L shell",
        "M shell",
        "N shell"
      ],
      correctAnswer: "N shell",
      correctOption: "D",
      answerPicked: ""
    },
    {
      name: "What did Rutherford use in his experiments to study the atom's structure?",
      options: [
        "Electrons",
        "Protons",
        "Alpha particles",
        "Neutrons"
      ],
      correctAnswer: "Alpha particles",
      correctOption: "C",
      answerPicked: ""
    },
    {
      name: "What is the term used for the number of positive charges on the nucleus?",
      options: [
        "Atomic mass",
        "Atomic weight",
        "Atomic number (Z)",
        "Atomic radius"
      ],
      correctAnswer: "Atomic number (Z)",
      correctOption: "C",
      answerPicked: ""
    },
    {
      name: "What is the arrangement of electrons around the nucleus referred to as?",
      options: [
        "Orbits",
        "Clouds",
        "Shells",
        "Cores"
      ],
      correctAnswer: "Shells",
      correctOption: "C",
      answerPicked: ""
    },
    {
      name: "What did Rutherford conclude about the mass distribution in an atom?",
      options: [
        "Electrons carry all the mass",
        "Electrons are located in the nucleus",
        "The nucleus carries practically all the mass",
        "Neutrons carry all the mass"
      ],
      correctAnswer: "The nucleus carries practically all the mass",
      correctOption: "C",
      answerPicked: ""
    },
    {
      name: "What must be equal in a neutral atom to satisfy its electrical neutrality?",
      options: [
        "Number of protons and electrons",
        "Number of neutrons and electrons",
        "Number of protons and neutrons",
        "Number of electrons and shells"
      ],
      correctAnswer: "Number of protons and electrons",
      correctOption: "A",
      answerPicked: ""
    },

      {
        name: "What is the charge of an electron?",
        options: [
          "-1",
          "+1",
          "0",
          "-e"
        ],
        correctAnswer: "-1",
        correctOption: "A",
        answerPicked: ""
      },
      {
        name: "What is the charge of a proton?",
        options: [
          "-1",
          "+1",
          "0",
          "+e"
        ],
        correctAnswer: "+1",
        correctOption: "B",
        answerPicked: ""
      },
      {
        name: "What is the charge of a neutron?",
        options: [
          "-1",
          "+1",
          "0",
          "neutral"
        ],
        correctAnswer: "0",
        correctOption: "C",
        answerPicked: ""
      },
      {
        name: "Why is the charge on an electron represented as negative?",
        options: [
          "Because it lacks electric charge",
          "Because it has a negative mass",
          "Because it carries a negative charge",
          "Because it's opposite of a proton"
        ],
        correctAnswer: "Because it carries a negative charge",
        correctOption: "C",
        answerPicked: ""
      },
      {
        name: "Which particle is considered neutral in terms of charge?",
        options: [
          "Electron",
          "Proton",
          "Neutron",
          "Alpha particle"
        ],
        correctAnswer: "Neutron",
        correctOption: "C",
        answerPicked: ""
      },
      {
        name: "What unit is used to express the charge of an electron?",
        options: [
          "Coulombs",
          "Electrovolt",
          "Watt",
          "Joule"
        ],
        correctAnswer: "Coulombs",
        correctOption: "A",
        answerPicked: ""
      },
      {
        name: "Which element was initially chosen as the standard for assigning atomic masses?",
        options: [
          "Carbon",
          "Oxygen",
          "Hydrogen",
          "Neon"
        ],
        correctAnswer: "Hydrogen",
        correctOption: "C",
        answerPicked: ""
      },
      {
        name: "Why was carbon-12 chosen as the new standard for atomic masses?",
        options: [
          "Because it's the most abundant element",
          "Because it's the lightest element",
          "For practical reasons",
          "Because it has the highest atomic number"
        ],
        correctAnswer: "For practical reasons",
        correctOption: "C",
        answerPicked: ""
      },
      {
        name: "How are relative atomic masses determined?",
        options: [
          "By measuring the mass of individual atoms",
          "By using mass spectrometers",
          "By counting the number of protons",
          "By analyzing the atomic spectra"
        ],
        correctAnswer: "By using mass spectrometers",
        correctOption: "B",
        answerPicked: ""
      },
      {
        name: "What is the atomic weight of an element?",
        options: [
          "The mass of one atom of that element",
          "The sum of the masses of its electrons",
          "The weighted mean of the relative masses of its isotopes",
          "The number of electrons in its outermost shell"
        ],
        correctAnswer: "The weighted mean of the relative masses of its isotopes",
        correctOption: "C",
        answerPicked: ""
      },
      {
        name: "How is the atomic weight of an element calculated for isotopes?",
        options: [
          "By taking the mass of the heaviest isotope",
          "By averaging the masses of all isotopes",
          "By summing the masses of all isotopes",
          "By multiplying the masses of all isotopes"
        ],
        correctAnswer: "By averaging the masses of all isotopes",
        correctOption: "B",
        answerPicked: ""
      },
      {
        name: "Calculate the atomic weight of chlorine based on its isotopes' relative masses and abundances.",
        options: [
          "35",
          "37",
          "35.49",
          "36.5"
        ],
        correctAnswer: "35.49",
        correctOption: "C",
        answerPicked: ""
      },
      {
        name: "What is the atomic mass unit (amu) equivalent to in grams?",
        options: [
          "1.66 x 10^-24 g",
          "1.66 x 10^-23 g",
          "1.66 x 10^-25 g",
          "1.66 x 10^-26 g"
        ],
        correctAnswer: "1.66 x 10^-24 g",
        correctOption: "A",
        answerPicked: ""
      },
      {
        name: "How is the mass number (A) of an atom defined?",
        options: [
          "The total number of electrons",
          "The sum of protons and neutrons",
          "The total number of protons",
          "The sum of electrons and neutrons"
        ],
        correctAnswer: "The sum of protons and neutrons",
        correctOption: "B",
        answerPicked: ""
      },
      {
        name: "Why are atomic weights typically not expressed in grams or kilograms?",
        options: [
          "Because grams and kilograms are not suitable units",
          "Because atomic weights are too small for grams or kilograms",
          "Because atomic weights are too large for grams or kilograms",
          "Because grams and kilograms are not accurate units"
        ],
        correctAnswer: "Because atomic weights are too small for grams or kilograms",
        correctOption: "B",
        answerPicked: ""
      },
    
        {
          name: "What is the Avogadro's Constant?",
          options: [
            "6.0226 x 10^23",
            "1.66 x 10^-24",
            "9.109 x 10^-28",
            "1.60206 x 10^-19"
          ],
          correctAnswer: "6.0226 x 10^23",
          correctOption: "A",
          answerPicked: ""
        },
        {
          name: "How many hydrogen atoms are equivalent to 1 gram?",
          options: [
            "6 x 10^23",
            "1.66 x 10^-24",
            "9.109 x 10^-28",
            "1.60206 x 10^-19"
          ],
          correctAnswer: "6 x 10^23",
          correctOption: "A",
          answerPicked: ""
        },
        {
          name: "What is the relationship between 1 gram and atomic mass units (amu) based on Avogadro's Constant?",
          options: [
            "1 g = 6 x 10^23 amu",
            "1 g = 1 amu",
            "1 g = 9.109 x 10^-28 amu",
            "1 g = 1.60206 x 10^-19 amu"
          ],
          correctAnswer: "1 g = 6 x 10^23 amu",
          correctOption: "A",
          answerPicked: ""
        },
        {
          name: "Why is the Avogadro's Constant important in chemistry?",
          options: [
            "To measure the charge of electrons",
            "To convert grams to atomic mass units",
            "To determine the mass of protons",
            "To study the behavior of neutrons"
          ],
          correctAnswer: "To convert grams to atomic mass units",
          correctOption: "B",
          answerPicked: ""
        },
        {
          name: "What is the correct value of Avogadro's Constant?",
          options: [
            "6 x 10^23",
            "1.66 x 10^-24",
            "9.109 x 10^-28",
            "1.60206 x 10^-19"
          ],
          correctAnswer: "6 x 10^23",
          correctOption: "A",
          answerPicked: ""
        },
        {
          name: "Which unit is used to measure the mass of an electron?",
          options: [
            "Coulombs",
            "Electrovolt",
            "Watt",
            "Joule"
          ],
          correctAnswer: "Joule",
          correctOption: "D",
          answerPicked: ""
        },
      ];

      const relativemolarmass = [
          {
            name: "What is the Relative Molecular Mass (Molar Mass) of a water molecule (H2O)?",
            options: [
              "16 g/mol",
              "18 g/mol",
              "20 g/mol",
              "22 g/mol"
            ],
            correctAnswer: "18 g/mol",
            correctOption: "B",
            answerPicked: ""
          },
          {
            name: "Calculate the Relative Molecular Mass of methane (CH4).",
            options: [
              "14 g/mol",
              "16 g/mol",
              "18 g/mol",
              "20 g/mol"
            ],
            correctAnswer: "16 g/mol",
            correctOption: "B",
            answerPicked: ""
          },
          {
            name: "What is the Relative Molecular Mass of carbon dioxide (CO2)?",
            options: [
              "28 g/mol",
              "32 g/mol",
              "36 g/mol",
              "44 g/mol"
            ],
            correctAnswer: "44 g/mol",
            correctOption: "D",
            answerPicked: ""
          },
          {
            name: "Calculate the Relative Molecular Mass of sulfuric acid (H2SO4).",
            options: [
              "50 g/mol",
              "72 g/mol",
              "98 g/mol",
              "98.1 g/mol"
            ],
            correctAnswer: "98 g/mol",
            correctOption: "C",
            answerPicked: ""
          },
          {
            name: "What is the formula mass of potassium nitrate (KNO3)?",
            options: [
              "62 g/mol",
              "101 g/mol",
              "125 g/mol",
              "139 g/mol"
            ],
            correctAnswer: "101 g/mol",
            correctOption: "B",
            answerPicked: ""
          },
          {
            name: "Calculate the Relative Formula Mass of magnesium sulfate (MgSO4).",
            options: [
              "95 g/mol",
              "120 g/mol",
              "138 g/mol",
              "142 g/mol"
            ],
            correctAnswer: "120 g/mol",
            correctOption: "B",
            answerPicked: ""
          },
          {
            name: "What is the Relative Molecular Mass of glucose (C6H12O6)?",
            options: [
              "120 g/mol",
              "132 g/mol",
              "144 g/mol",
              "180 g/mol"
            ],
            correctAnswer: "180 g/mol",
            correctOption: "D",
            answerPicked: ""
          },
          {
            name: "Calculate the Relative Formula Mass of calcium phosphate (Ca3(PO4)2).",
            options: [
              "298 g/mol",
              "310 g/mol",
              "330 g/mol",
              "350 g/mol"
            ],
            correctAnswer: "310 g/mol",
            correctOption: "B",
            answerPicked: ""
          },
          {
            name: "What is the Relative Molecular Mass of acetic acid (CH3COOH)?",
            options: [
              "60 g/mol",
              "76 g/mol",
              "88 g/mol",
              "98 g/mol"
            ],
            correctAnswer: "60 g/mol",
            correctOption: "A",
            answerPicked: ""
          },
          {
            name: "Calculate the Relative Formula Mass of ammonium sulfate ((NH4)2SO4).",
            options: [
              "112 g/mol",
              "132 g/mol",
              "142 g/mol",
              "156 g/mol"
            ],
            correctAnswer: "132 g/mol",
            correctOption: "B",
            answerPicked: ""
          },

            {
              name: "What is the formula to calculate the Relative Molecular Mass (Molar Mass) of a compound?",
              options: [
                "Sum of the masses of all isotopes",
                "Sum of the masses of all atoms in a molecule",
                "Sum of the masses of all electrons in a molecule",
                "Sum of the masses of all protons in a molecule"
              ],
              correctAnswer: "Sum of the masses of all atoms in a molecule",
              correctOption: "B",
              answerPicked: ""
            },
            {
              name: "Calculate the Relative Molecular Mass of a methane molecule (CH4) in atomic mass units (amu).",
              options: [
                "12 amu",
                "14 amu",
                "16 amu",
                "18 amu"
              ],
              correctAnswer: "16 amu",
              correctOption: "C",
              answerPicked: ""
            },
            {
              name: "Which unit is commonly used to express Relative Molecular Mass?",
              options: [
                "Atomic mass unit (amu)",
                "Mole (mol)",
                "Kilogram (kg)",
                "Coulomb (C)"
              ],
              correctAnswer: "Atomic mass unit (amu)",
              correctOption: "A",
              answerPicked: ""
            },
            {
              name: "What is the formula mass of sulfuric acid (H2SO4)?",
              options: [
                "96.06 g/mol",
                "98.07 g/mol",
                "100.09 g/mol",
                "102.10 g/mol"
              ],
              correctAnswer: "98.07 g/mol",
              correctOption: "B",
              answerPicked: ""
            },
            {
              name: "Calculate the Relative Molecular Mass of glucose (C6H12O6) in atomic mass units (amu).",
              options: [
                "174 amu",
                "180 amu",
                "186 amu",
                "192 amu"
              ],
              correctAnswer: "180 amu",
              correctOption: "B",
              answerPicked: ""
            },
            {
              name: "In the formula mass of a compound, what is the significance of multiplying each element's mass by its subscript?",
              options: [
                "It represents the number of moles of each element",
                "It accounts for the number of atoms of each element in the compound",
                "It adjusts the mass to match the empirical formula",
                "It scales the mass to match Avogadro's Constant"
              ],
              correctAnswer: "It accounts for the number of atoms of each element in the compound",
              correctOption: "B",
              answerPicked: ""
            },
            {
              name: "What is the Relative Molecular Mass of a molecule with one nitrogen atom (N) and three hydrogen atoms (H)?",
              options: [
                "1.008 amu",
                "2.016 amu",
                "3.016 amu",
                "4.032 amu"
              ],
              correctAnswer: "3.016 amu",
              correctOption: "C",
              answerPicked: ""
            },
            {
              name: "Which compound has the highest Relative Molecular Mass?",
              options: [
                "Ammonium sulfate ((NH4)2SO4)",
                "Methane (CH4)",
                "Water (H2O)",
                "Carbon dioxide (CO2)"
              ],
              correctAnswer: "Ammonium sulfate ((NH4)2SO4)",
              correctOption: "A",
              answerPicked: ""
            },
            {
              name: "What is the Relative Formula Mass of calcium carbonate (CaCO3)?",
              options: [
                "99.19 g/mol",
                "100.09 g/mol",
                "101.09 g/mol",
                "102.09 g/mol"
              ],
              correctAnswer: "100.09 g/mol",
              correctOption: "B",
              answerPicked: ""
            },
            {
              name: "Calculate the Relative Molecular Mass of sulfur hexafluoride (SF6) in atomic mass units (amu).",
              options: [
                "120.06 amu",
                "144.06 amu",
                "146.06 amu",
                "168.06 amu"
              ],
              correctAnswer: "146.06 amu",
              correctOption: "C",
              answerPicked: ""
            },
        
          
          
        ];

        const puresubstance = [
          {
            name: "What defines a pure substance?",
            options: [
              "It contains only one kind of element",
              "It contains only one kind of compound",
              "It is a mixture of different compounds",
              "It has a variable composition"
            ],
            correctAnswer: "It contains only one kind of compound",
            correctOption: "B",
            answerPicked: ""
          },
          {
            name: "Why is sugar considered a pure substance?",
            options: [
              "Because it contains only sugar molecules",
              "Because it contains various compounds",
              "Because it is a mixture of elements",
              "Because it has a variable composition"
            ],
            correctAnswer: "Because it contains only sugar molecules",
            correctOption: "A",
            answerPicked: ""
          },
          {
            name: "What characteristic defines pure substances?",
            options: [
              "Variable composition",
              "Definite composition",
              "Multiple phases",
              "Heterogeneous nature"
            ],
            correctAnswer: "Definite composition",
            correctOption: "B",
            answerPicked: ""
          },
          {
            name: "What is the composition of substances in a pure compound like sugar?",
            options: [
              "Variable",
              "Constant",
              "Heterogeneous",
              "Homogeneous"
            ],
            correctAnswer: "Constant",
            correctOption: "B",
            answerPicked: ""
          },
          {
            name: "What defines a mixture?",
            options: [
              "It contains only one kind of compound",
              "It contains only one kind of element",
              "It is a combination of different compounds or elements",
              "It is a pure substance"
            ],
            correctAnswer: "It is a combination of different compounds or elements",
            correctOption: "C",
            answerPicked: ""
          },
          {
            name: "Why is air considered a mixture?",
            options: [
              "Because it contains only oxygen and nitrogen",
              "Because it contains only elements",
              "Because it is a pure substance",
              "Because it contains different compounds and elements"
            ],
            correctAnswer: "Because it contains different compounds and elements",
            correctOption: "D",
            answerPicked: ""
          },
          {
            name: "What type of mixture is a mixture of salt and black pepper?",
            options: [
              "Homogeneous mixture",
              "Heterogeneous mixture",
              "Pure substance",
              "Elemental mixture"
            ],
            correctAnswer: "Heterogeneous mixture",
            correctOption: "B",
            answerPicked: ""
          },
          {
            name: "Which term is synonymous with a homogeneous mixture?",
            options: [
              "Pure substance",
              "Element",
              "Solution",
              "Compound"
            ],
            correctAnswer: "Solution",
            correctOption: "C",
            answerPicked: ""
          },
          {
            name: "What is an example of a homogeneous mixture?",
            options: [
              "Salt and black pepper",
              "Air",
              "Sugar dissolved in water",
              "Methanol mixed with water"
            ],
            correctAnswer: "Sugar dissolved in water",
            correctOption: "C",
            answerPicked: ""
          },
        ];
        
        const genche101 = [
          {
            name: "Reactions in which reactants react to form products and simultaneously products reverse back in to reactants are called",
            options: [
              "Reversible reactions",
              "Irreversible reaction",
              "Spontaneous reactions",
              "non spontaneous reactions"
            ],
            correctAnswer: "Reversible reactions",
            correctOption: "A",
            answerPicked:"",
          },

          {
            name: "Conditions for equilibrium of concentration of reactant and product will be same if",
            options: [
              "temperature is constant",
              "pressure or volume is constant",
              "concentration of proucts and reactants are same",
              "all of the above"
            ],
            correctAnswer: "all of the above",
            correctOption: "D",
            answerPicked:"",
          },

          {
            name: "Equilibrium constant can be used to",
            options: [
              "predict direction of chemical reaction",
              "predict extent of chemical reaction",
              "determine the equilibrium concentration of mixture",
              "all of the above"
            ],
            correctAnswer: "all of the above",
            correctOption: "D",
            answerPicked:"",
          },
          {
            name: "Rate at which reaction proceeds is directly related to",
            options: [
              "active masses of reactants",
              "ionizer",
              "collector",
              "graph"
            ],
            correctAnswer: "active masses of reactants",
            correctOption: "A",
            answerPicked:"",
          },
          
          {
            name: "Mass spectrometer use to determine isotopes in solid state is  ",
            options: [
              "Bohr's",
              "Aston's",
              "Dempester's",
              "Alison's"
            ],
            correctAnswer: "Dempester's",
            correctOption: "C",
            answerPicked:"",
          },

        
            {
              name: "Smallest particle of an element which can take part in any chemical change.",
              options: [
                "nucleus",
                "atom",
                "proton",
                "neutron"
              ],
              correctAnswer: "atom",
              correctOption: "B",
              answerPicked: ""
            },
            {
              name: "Number of times a proton (p<sup>+</sup>) is heavier than an electron (e<sup>-</sup>) is",
              options: [
                "18 times",
                "184 times",
                "200 times",
                "1840 times"
              ],
              correctAnswer: "1840 times",
              correctOption: "D",
              answerPicked: ""
            },
            {
              name: "Chemical elements are represented by Greek or Latin",
              options: [
                "alphabets",
                "symbols",
                "gods",
                "illusions"
              ],
              correctAnswer: "symbols",
              correctOption: "B",
              answerPicked: ""
            },
            {
              name: "Atomic number is the number of",
              options: [
                "protons (p<sup>+</sup> )",
                "electrons (e<sup>-</sup>)",
                "neutrons (n<sup>0</sup>)",
                "nucleons ( p<sup>+</sup> and n<sup>0</sup> )"
              ],
              correctAnswer: "protons (p<sup>+</sup> )",
              correctOption: "A",
              answerPicked: ""
            },
            {
              name: "An Electric field deflects beams of",
              options: [
                "protons",
                "electrons",
                "neutrons",
                "both A and B"
              ],
              correctAnswer: "both A and B",
              correctOption: "D",
              answerPicked: ""
            },
            {
              name: "Modern method for separation of isotopes is",
              options: [
                "laser separation",
                "chromatography",
                "ionization",
                "X-ray"
              ],
              correctAnswer: "laser separation",
              correctOption: "A",
              answerPicked: ""
            },

              {
                name: "In new spectrometers, each ion hits a",
                options: [
                  "Detector",
                  "Ionizer",
                  "Collector",
                  "Graph"
                ],
                correctAnswer: "Detector",
                correctOption: "A",
                answerPicked: ""
              },
              {
                name: "Mass spectrometer used to determine isotopes in solid state is",
                options: [
                  "Bohr's",
                  "Aston's",
                  "Dempster's",
                  "Alison's"
                ],
                correctAnswer: "Dempster's",
                correctOption: "C",
                answerPicked: ""
              },
              {
                name: "In the accelerating chamber of a mass spectrometer, the potential difference is",
                options: [
                  "500-2000",
                  "600-7000",
                  "300-8000",
                  "700-9000"
                ],
                correctAnswer: "500-2000",
                correctOption: "A",
                answerPicked: ""
              },
              {
                name: "The instrument used to collect ions is",
                options: [
                  "Electrometer",
                  "Ionizer",
                  "Spectrometer",
                  "None"
                ],
                correctAnswer: "Electrometer",
                correctOption: "A",
                answerPicked: ""
              },
              {
                name: "Who discovered the electron?",
                options: [
                  "Chadwick",
                  "Thomson",
                  "Goldstein",
                  "Bohr"
                ],
                correctAnswer: "Thomson",
                correctOption: "2",
                answerPicked: ""
              },
              {
                name: "An atom has a mass number of 23 and atomic number 11. The number of protons is",
                options: [
                  "11",
                  "12",
                  "23",
                  "44"
                ],
                correctAnswer: "11",
                correctOption: "1",
                answerPicked: ""
              },
              {
                name: "The mass of the atom is determined by",
                options: [
                  "Neutrons",
                  "Neutron and proton",
                  "Electron",
                  "Electron and neutron"
                ],
                correctAnswer: "Neutron and proton",
                correctOption: "2",
                answerPicked: ""
              },
              {
                name: "If the K, L, and M shells of an atom are full, its atomic number is",
                options: [
                  "18",
                  "20",
                  "10",
                  "12"
                ],
                correctAnswer: "18",
                correctOption: "1",
                answerPicked: ""
              },
            

                {
                  name: "Which air pressure is appropriate for the production of cathode rays in the discharge tube?",
                  options: [
                    "1 cm Hg",
                    "1 mm Hg",
                    "0.001 cm Hg",
                    "0.001 mm Hg"
                  ],
                  correctAnswer: "0.001 mm Hg",
                  correctOption: "4",
                  answerPicked: ""
                },
                {
                  name: "Cathode rays are deflected towards",
                  options: [
                    "Positive electrode",
                    "Negative electrode",
                    "Both electrodes",
                    "None of the electrodes"
                  ],
                  correctAnswer: "Positive electrode",
                  correctOption: "1",
                  answerPicked: ""
                },
                {
                  name: "The absolute charge of an electron is",
                  options: [
                    "-1.6 x 10^-19 C",
                    "+1.6 x 10^-19 C",
                    "1.6 x 10^-19 C",
                    "16 x 10^-19 C"
                  ],
                  correctAnswer: "-1.6 x 10^-19 C",
                  correctOption: "1",
                  answerPicked: ""
                },
              

                  {
                    name: "The proton is heavier than an electron by",
                    options: [
                      "1850 times",
                      "1840 times",
                      "1000 times",
                      "100 times"
                    ],
                    correctAnswer: "1840 times",
                    correctOption: "2",
                    answerPicked: ""
                  },
                  {
                    name: "Carbon-12 atom has",
                    options: [
                      "6 electrons, 6 protons, 6 neutrons",
                      "6 electrons, 12 protons, 6 neutrons",
                      "12 electrons, 6 protons, 6 neutrons",
                      "18 electrons, 6 protons, 6 neutrons"
                    ],
                    correctAnswer: "6 electrons, 6 protons, 6 neutrons",
                    correctOption: "1",
                    answerPicked: ""
                  },
                  {
                    name: "Chadwick got the Nobel Prize for the discovery of",
                    options: [
                      "Protons",
                      "Neutrons",
                      "Electrons",
                      "Mesons"
                    ],
                    correctAnswer: "Neutrons",
                    correctOption: "2",
                    answerPicked: ""
                  },
                  {
                    name: "Mass number is equal to",
                    options: [
                      "Number of protons + number of electrons",
                      "Number of protons + number of neutrons",
                      "Number of neutrons + number of electrons",
                      "Number of electrons"
                    ],
                    correctAnswer: "Number of protons + number of neutrons",
                    correctOption: "2",
                    answerPicked: ""
                  },
                  {
                    name: "The element X has 2 valence electrons. It is a",
                    options: [
                      "Metal",
                      "Non-metal",
                      "Metalloid",
                      "Gas"
                    ],
                    correctAnswer: "Metal",
                    correctOption: "1",
                    answerPicked: ""
                  },
                
                  
                    {
                      name: "The volume of the nucleus of an atom when compared to the extra nuclear part is",
                      options: [
                        "Bigger",
                        "Smaller",
                        "Same size",
                        "Unpredictable"
                      ],
                      correctAnswer: "Smaller",
                      correctOption: "2",
                      answerPicked: ""
                    },
                    {
                      name: "In Rutherford's alpha-scattering experiment, a foil of element that was used was",
                      options: [
                        "Gold",
                        "Silver",
                        "Aluminum",
                        "Magnesium"
                      ],
                      correctAnswer: "Gold",
                      correctOption: "1",
                      answerPicked: ""
                    },
                    {
                      name: "An element has an electronic configuration of 2, 8, 7. Its valency is",
                      options: [
                        "1",
                        "7",
                        "17",
                        "8"
                      ],
                      correctAnswer: "1",
                      correctOption: "1",
                      answerPicked: ""
                    },
                    {
                      name: "The other name of protium is",
                      options: [
                        "Protium",
                        "Tritium",
                        "Deuterium",
                        "Proton"
                      ],
                      correctAnswer: "Protium",
                      correctOption: "1",
                      answerPicked: ""
                    },
                    {
                      name: "During a chemical reaction, atomic number",
                      options: [
                        "Changes",
                        "Remains same",
                        "Changes and then is restored",
                        "Changes alternately"
                      ],
                      correctAnswer: "Remains same",
                      correctOption: "2",
                      answerPicked: ""
                    },
          {
    name: "The fixed circular paths around the nucleus are called",
    options: [
      "Orbits",
      "Orbitals"
    ],
    correctAnswer: "Orbits",
    correctOption: "1",
    answerPicked: ""
},


  {
    name: "The formula weight of the compound Al₂(SO₄)₃·18H₂O is:",
    options: [
      "394.4 g",
      "666.4 g",
      "110,900 g",
      "466.8 g",
      "561.2 g"
    ],
    correctAnswer: "394.4 g",
    correctOption: "a",
    answerPicked: ""
  },
  {
    name: "The weight of a millimole of (NH₄)₂HPO₄ is:",
    options: [
      "132 g",
      "114 g",
      "1.14 x 10⁻³ g",
      "0.132 g",
      "6.02 x 10²⁰ g"
    ],
    correctAnswer: "132 g",
    correctOption: "a",
    answerPicked: ""
  },
  {
    name: "How many moles of alanine, C₃H₇NO₂, are there in 159 g of alanine?",
    options: [
      "1.42 x 10⁴",
      "1.78",
      "0.992",
      "0.560",
      "3.31"
    ],
    correctAnswer: "1.78",
    correctOption: "b",
    answerPicked: ""
  },
  {
    name: "How many atoms are in one mole of CH₃OH?",
    options: [
      "6",
      "6.0 x 10²³",
      "12.0 x 10²³",
      "3.6 x 10²⁴",
      "3"
    ],
    correctAnswer: "6.0 x 10²³",
    correctOption: "b",
    answerPicked: ""
  },
  {
    name: "The mass in grams of 2.6 x 10²² chlorine atoms is:",
    options: [
      "4.4",
      "11",
      "0.76",
      "1.5",
      "3.2"
    ],
    correctAnswer: "1.5",
    correctOption: "d",
    answerPicked: ""
  },
  {
    name: "How many aluminum atoms are there in 3.50 grams of Al₂O₃?",
    options: [
      "4.13 x 10²²",
      "4.90 x 10²²",
      "2.07 x 10²²",
      "1.68 x 10²²",
      "2.45 x 10²²"
    ],
    correctAnswer: "4.13 x 10²²",
    correctOption: "a",
    answerPicked: ""
  },
  {
    name: "Which one of the samples contains the most atoms?",
    options: [
      "1 mol of CO₂(g)",
      "1 mol of UF₆(g)",
      "1 mol of CH₃COCH₃(l)",
      "1 mol of He(g)",
      "All contain the same number of atoms"
    ],
    correctAnswer: "1 mol of He(g)",
    correctOption: "d",
    answerPicked: ""
  },
  {
    name: "Which one of the samples contains the most molecules?",
    options: [
      "1 mol of CO₂(g)",
      "1 mol of UF₆(g)",
      "1 mol of CH₃COCH₃(l)",
      "1 mol of He(g)",
      "All contain the same number of molecules"
    ],
    correctAnswer: "All contain the same number of molecules",
    correctOption: "e",
    answerPicked: ""
  },
  {
    name: "Which one of the samples has the largest mass?",
    options: [
      "1 mol of CO₂(g)",
      "1 mol of UF₆(g)",
      "1 mol of CH₃COCH₃(l)",
      "1 mol of He(g)",
      "All have the same mass"
    ],
    correctAnswer: "1 mol of UF₆(g)",
    correctOption: "b",
    answerPicked: ""
  },
  {
    name: "Which of the following statements is(are) FALSE?\n1. The percent by mass of each element in a compound depends on the amount of the compound.\n2. The mass of each element in a compound depends on the amount of the compound.\n3. The percent by mass of each element in a compound depends on the amount of element present in the compound.",
    options: [
      "2 and 3",
      "1 only",
      "1 and 2",
      "1, 2, and 3",
      "Another combination"
    ],
    correctAnswer: "1 only",
    correctOption: "b",
    answerPicked: ""
  },
  {
    name: "Guanidin, HNC(NH₂)₂, is a fertilizer. To three significant figures, what is the percent by mass of nitrogen in the fertilizer?",
    options: [
      "45.2%",
      "49.4%",
      "54.8%",
      "65.1%",
      "71.1%"
    ],
    correctAnswer: "71.1%",
    correctOption: "e",
    answerPicked: ""
  },
  {
    name: "Calculate the percent, by weight, of carbon in 154 g of C₄H₈O₃?",
    options: [
      "46%",
      "31%",
      "72%",
      "27%",
      "55%"
    ],
    correctAnswer: "46%",
    correctOption: "a",
    answerPicked: ""
  },
  {
    name: "Analysis of a sample of a covalent compound showed that it contained 14.4% hydrogen and 85.6% carbon by mass. What is the empirical formula for the compound?",
    options: [
      "CH",
      "CH₂",
      "CH₃",
      "C₂H₃",
      "None of these"
    ],
    correctAnswer: "CH₂",
    correctOption: "b",
    answerPicked: ""
  },
  {
    name: "An oxide of lead contains 90.65% Pb, by weight. The empirical formula is:",
    options: [
      "Pb",
      "PbO",
      "Pb₃O₄",
      "Pb₂O₃",
      "PbO₂"
    ],
    correctAnswer: "Pb₃O₄",
    correctOption: "c",
    answerPicked: ""
  },
  {
    name: "A 0.500 g sample of a compound containing only antimony and oxygen was found to contain 0.418 g of antimony and 0.082 g of oxygen. What is the simplest formula for the compound?",
    options: [
      "SbO",
      "SbO₂",
      "Sb₃O₄",
      "Sb₂O₅",
      "Sb₂O₃"
    ],
    correctAnswer: "Sb₂O₃",
    correctOption: "e",
    answerPicked: ""
  },
  {
    name: "A compound contains, by mass, 40.0% carbon, 6.71% hydrogen, and 53.3% oxygen. A 0.320 mole sample of this compound weighs 28.8 g. The molecular formula of this compound is:",
    options: [
      "C₂H₄O₂",
      "C₃H₆O₃",
      "C₂H₄O",
      "CH₂O",
      "C₄H₇O₂"
    ],
    correctAnswer: "C₃H₆O₃",
    correctOption: "b",
    answerPicked: ""
  },
  {
    name: "What mass of cerussite, PbCO₃, would contain 35.0 grams of lead?",
    options: [
      "27.1 g",
      "45.1 g",
      "42.4 g",
      "35.6 g",
      "51.7 g"
    ],
    correctAnswer: "45.1 g",
    correctOption: "b",
    answerPicked: ""
  },
  {
    name: "The weight of a millimole of (NH₄)₂HPO₄ is:",
    options: [
      "132 g",
      "114 g",
      "1.14 x 10⁻³ g",
      "0.132 g",
      "6.02 x 10²⁰ g"
    ],
    correctAnswer: "132 g",
    correctOption: "a",
    answerPicked: ""
  },
          {
    name: "How many moles of alanine, C₃H₇NO₂, are there in 159 g of alanine?",
    options: [
      "1.42 x 10⁴",
      "1.78",
      "0.992",
      "0.560",
      "3.31"
    ],
    correctAnswer: "1.78",
    correctOption: "b",
    answerPicked: ""
  },

  
    {
      name: "Which of the following has a positive charge?",
      options: [
        "Proton",
        "Neutron",
        "Anion",
        "Electron",
        "Atom"
      ],
      correctAnswer: "Proton",
      correctOption: "a",
      answerPicked: ""
    },
    {
      name: "Rutherford carried out experiments in which a beam of alpha particles was directed at a thin piece of metal foil. From these experiments he concluded that:",
      options: [
        "Electrons are massive particles.",
        "The positively charged parts of atoms are moving about with a velocity approaching the speed of light.",
        "The positively charged parts of atoms are extremely small and extremely heavy particles.",
        "The diameter of an electron is approximately equal to that of the nucleus.",
        "Electrons travel in circular orbits around the nucleus."
      ],
      correctAnswer: "The positively charged parts of atoms are extremely small and extremely heavy particles.",
      correctOption: "c",
      answerPicked: ""
    },
    {
      name: "Consider the species 72Zn, 75As and 74Ge. These species have:",
      options: [
        "The same number of electrons.",
        "The same number of protons.",
        "The same number of neutrons.",
        "The same number of protons and neutrons.",
        "The same mass number."
      ],
      correctAnswer: "The same mass number.",
      correctOption: "e",
      answerPicked: ""
    },
    {
      name: "The neutral atoms of all of the isotopes of the same element have",
      options: [
        "Different numbers of protons.",
        "Equal numbers of neutrons.",
        "The same number of electrons."
      ],
      correctAnswer: "The same number of electrons.",
      correctOption: "c",
      answerPicked: ""
    },

    {
      name: "What is the atomic weight of a hypothetical element consisting of two isotopes, one with mass = 64.23 amu (26.0%), and one with mass = 65.32 amu?",
      options: [
        "65.3 amu",
        "64.4 amu",
        "64.9 amu",
        "65.0 amu",
        "64.8 amu"
      ],
      correctAnswer: "64.8 amu",
      correctOption: "e",
      answerPicked: ""
    },
    {
      name: "Naturally occurring rubidium consists of just two isotopes. One of the isotopes consists of atoms having a mass of 84.912 amu; the other of 86.901 amu. What is the percent natural abundance of the heavier isotope?",
      options: [
        "15%",
        "28%",
        "37%",
        "72%",
        "85%"
      ],
      correctAnswer: "28%",
      correctOption: "b",
      answerPicked: ""
    },
    {
      name: "What is the frequency of light having a wavelength of 4.50 x 10⁻⁶ cm?",
      options: [
        "2.84 x 10¹² s⁻¹",
        "2.10 x 10⁴ s⁻¹",
        "4.29 x 10¹⁴ s⁻¹",
        "1.06 x 10²² s⁻¹",
        "6.67 x 10¹⁵ s⁻¹"
      ],
      correctAnswer: "6.67 x 10¹⁵ s⁻¹",
      correctOption: "e",
      answerPicked: ""
    },
    {
      name: "The emission spectrum of gold shows a line of wavelength 2.676 x 10⁻⁷ m. How much energy is emitted as the excited electron falls to the lower energy level?",
      options: [
        "7.43 x 10⁻¹⁹ J",
        "5.30 x 10⁻²⁰ J",
        "6.05 x 10⁻¹⁹ J",
        "3.60 x 10⁻²⁰ J",
        "5.16 x 10⁻²⁰ J"
      ],
      correctAnswer: "7.43 x 10⁻¹⁹ J",
      correctOption: "a",
      answerPicked: ""
    },
    {
      name: "Which of the responses contains all the statements that are consistent with the Bohr theory of the atom (and no others)?\n(1) An electron can remain in a particular orbit as long as it continually absorbs radiation of a definite frequency.\n(2) The lowest energy orbits are those closest to the nucleus.\n(3) An electron can jump from the K shell (n = 1 major energy level) to the M shell (n = 3 major energy level) by emitting radiation of a definite frequency.",
      options: [
        "1, 2, 3",
        "2 only",
        "3 only",
        "1, 2",
        "2, 3"
      ],
      correctAnswer: "1, 2, 3",
      correctOption: "a",
      answerPicked: ""
    },
    {
      name: "The Heisenberg Principle states that _____________.",
      options: [
        "No two electrons in the same atom can have the same set of four quantum numbers.",
        "Two atoms of the same element must have the same number of protons.",
        "It is impossible to determine accurately both the position and momentum of an electron simultaneously.",
        "Electrons of atoms in their ground states enter energetically equivalent sets of orbitals singly before they pair up in any orbital of the set.",
        "Charged atoms (ions) must generate a magnetic field when they are in motion."
      ],
      correctAnswer: "It is impossible to determine accurately both the position and momentum of an electron simultaneously.",
      correctOption: "c",
      answerPicked: ""
    },
    {
      name: "Which statement about the four quantum numbers which describe electrons in atoms is incorrect?",
      options: [
        "n = principal quantum number, n = 1, 2, 3, ......",
        "l = subsidiary (or azimuthal) quantum number, l = 1, 2, 3, ... , (n+1)",
        "ml = magnetic quantum number, ml = (-l), .... , 0, .... , (+l)",
        "ms = spin quantum number, ms = +1/2 or -1/2.",
        "The magnetic quantum number is related to the orientation of atomic orbitals in space."
      ],
      correctAnswer: "l = subsidiary (or azimuthal) quantum number, l = 1, 2, 3, ... , (n+1)",
      correctOption: "b",
      answerPicked: ""
    },
    
    {
      name: "Which atomic orbital is spherical in shape? (Note: you should know and be able to recognize the shapes of the s orbital, px, py, and pz orbitals, and dxy, dyz, dxz, dx²-y² and dz² orbitals.)",
      options: [
        "2s",
        "3p",
        "3d",
        "4f",
        "They are all spherical"
      ],
      correctAnswer: "2s",
      correctOption: "a",
      answerPicked: ""
    },
    {
      name: "The maximum number of electrons that can be accommodated in a sublevel for which l = 3 is:",
      options: [
        "2",
        "10",
        "6",
        "14",
        "8"
      ],
      correctAnswer: "10",
      correctOption: "b",
      answerPicked: ""
    },
    {
      name: "The ground state electron configuration for arsenic is:",
      options: [
        "[Ar] 4s² 4p¹³",
        "[Kr] 4s² 4p¹",
        "1s² 2s² 2p⁶ 3s² 3p⁶ 3d¹² 4s² 4p¹",
        "1s² 2s² 2p⁶ 3s² 3p⁶ 4s² 3d⁸ 4p⁵",
        "1s² 2s² 2p⁶ 3s² 3p⁶ 4s² 3d¹⁰ 4p³"
      ],
      correctAnswer: "1s² 2s² 2p⁶ 3s² 3p⁶ 3d¹² 4s² 4p¹",
      correctOption: "c",
      answerPicked: ""
    },
    {
      name: "Which of the following electron configurations is correct for nickel?",
      options: [
        "[Ar] 4s¹ 3d⁸",
        "[Kr] 4s¹ 4d⁸",
        "[Kr] 4s¹ 3d⁸",
        "[Kr] 4s² 3d⁸",
        "[Ar] 4s² 3d⁸"
      ],
      correctAnswer: "[Ar] 4s² 3d⁸",
      correctOption: "e",
      answerPicked: ""
    },
    {
      name: "The outer electronic configuration ns² np⁴ corresponds to which one of the following elements in its ground state?",
      options: [
        "As",
        "Ca",
        "Cr",
        "Br",
        "S"
      ],
      correctAnswer: "Br",
      correctOption: "d",
      answerPicked: ""
    },
    {
      name: "In the ground state of a cobalt atom there are _____ unpaired electrons and the atom is _____",
      options: [
        "3, paramagnetic",
        "5, paramagnetic",
        "2, diamagnetic",
        "0, diamagnetic",
        "2, paramagnetic"
      ],
      correctAnswer: "3, paramagnetic",
      correctOption: "a",
      answerPicked: ""
    },
    
    {
      name: "Which one of the following sets of quantum numbers could be those of the distinguishing (last) electron of Mo?",
      options: [
        "n = 4, l = 0, ml = 0, ms = +1/2",
        "n = 5, l = 1, ml = 9, ms = -1/2",
        "n = 4, l = 2, ml = -1, ms = +1/2",
        "n = 5, l = 2, ml = +2, ms = -1/2",
        "n = 3, l = 2, ml = 0, ms = +1/2"
      ],
      correctAnswer: "n = 5, l = 2, ml = +2, ms = -1/2",
      correctOption: "d",
      answerPicked: ""
    },
    {
      name: "How many p electrons are there in an atom of rubidium?",
      options: [
        "12",
        "18",
        "24",
        "9",
        "6"
      ],
      correctAnswer: "6",
      correctOption: "e",
      answerPicked: ""
    },
    {
      name: "A neutral atom of an element has 2 electrons in the first energy level, 8 in the second energy level and 8 in the third energy level. This information does not necessarily tell us:",
      options: [
        "The atomic number of the element.",
        "Anything about the element's chemical properties.",
        "The total number of electrons in s orbitals.",
        "The total number of electrons in p orbitals.",
        "The number of neutrons in the nucleus of an atom of the element."
      ],
      correctAnswer: "The total number of electrons in s orbitals.",
      correctOption: "c",
      answerPicked: ""
    },

    {
      name: "The mass (in grams) of FeSO4 7H2O required for preparation of 125 mL of 0.90 M solution is:",
      options: [
        "16 g",
        "25 g",
        "13 g",
        "31 g",
        "43 g"
      ],
      correctAnswer: "25 g",
      correctOption: "b",
      answerPicked: ""
    },
    {
      name: "What is the molarity of phosphoric acid in a solution labeled 20.0% phosphoric acid (H3PO4) by weight with a density = 1.12 g/mL?",
      options: [
        "0.98 M",
        "2.3 M",
        "2.7 M",
        "3.0 M",
        "3.6 M"
      ],
      correctAnswer: "3.0 M",
      correctOption: "d",
      answerPicked: ""
    },
    {
      name: "How many mL of 17 M NH3 must be diluted to 500.0 mL to make a 0.75 M solution?",
      options: [
        "13 mL",
        "22 mL",
        "39 mL",
        "73 mL",
        "None of these"
      ],
      correctAnswer: "39 mL",
      correctOption: "c",
      answerPicked: ""
    },
    {
      name: "How many grams of Ag2CO3 are required to react with 28.5 mL of 1.00 M NaOH solution? Ag2CO3 + 2NaOH → Ag2O + Na2CO3 + H2O",
      options: [
        "7.87 g",
        "3.93 g",
        "15.7 g",
        "10.8 g",
        "8.16 g"
      ],
      correctAnswer: "7.87 g",
      correctOption: "a",
      answerPicked: ""
    },
    {
      name: "How many milliliters of 0.200 M NH4OH are needed to react with 12.0 mL of 0.550 M FeCl3? FeCl3 + 3NH4OH → Fe(OH)3 + 3NH4Cl",
      options: [
        "99.0 mL",
        "33.0 mL",
        "8.25 mL",
        "68.8 mL",
        "132 mL"
      ],
      correctAnswer: "33.0 mL",
      correctOption: "b",
      answerPicked: ""
    },
    {
      name: "When 250. mL of a 0.15 M solution of ammonium sulfide (NH4)2S is poured into 120. mL of a 0.053 M solution of cadmium sulfate CdSO4, how many grams of a yellow precipitate of cadmium sulfide CdS are formed? The other product is (NH4)2SO4. (Hint: Write out and balance the equation. Is this a limiting reagent problem?)",
      options: [
        "5.4 g",
        "0.92 g",
        "2.6 g",
        "1.9 g",
        "530 g"
      ],
      correctAnswer: "5.4 g",
      correctOption: "a",
      answerPicked: ""
    },
    {
      name: "When 250. mL of a 0.15 M solution of ammonium sulfide (NH4)2S is poured into 120. mL of a 0.053 M solution of cadmium sulfate CdSO4, how many grams of a yellow precipitate of cadmium sulfide CdS are formed? The other product is (NH4)2SO4. (Hint: Write out and balance the equation. Is this a limiting reagent problem?)",
      options: [
        "5.4 g",
        "0.92 g",
        "2.6 g",
        "1.9 g",
        "530 g"
      ],
      correctAnswer: "5.4 g",
      correctOption: "a",
      answerPicked: ""
    },
    {
      name: "Which of the following statements is correct for an electron that has the quantum numbers n = 4 and ml = -2?",
      options: [
        "The electron may be in a p orbital",
        "The electron may be in a d orbital",
        "The electron is in the second principal shell",
        "The electron must have a spin quantum number ms = + ½"
      ],
      correctAnswer: "The electron may be in a d orbital",
      correctOption: "B",
      answerPicked: ""
    },
    {
      name: "The set of quantum numbers, n = 4, l = 3, ml = 2",
      options: [
        "Describes an electron in a 3p orbital",
        "Is not allowed",
        "Describes an electron in a 4d orbital",
        "Describes one of seven orbitals of a similar type"
      ],
      correctAnswer: "Describes one of seven orbitals of a similar type",
      correctOption: "D",
      answerPicked: ""
    },
    {
      name: "Which of the following statements is correct for an electron that has the quantum numbers n = 5 and ml = -4?",
      options: [
        "The electron may be in a f orbital",
        "The electron must have a spin quantum number ms = -1/2",
        "The electron may be in a p orbital",
        "None of the above"
      ],
      correctAnswer: "The electron may be in a f orbital",
      correctOption: "A",
      answerPicked: ""
    },
    {
      name: "Identify the subshell in which electrons with the quantum numbers n = 3, l = 2 may be found.",
      options: [
        "3d",
        "4f",
        "4d",
        "3p"
      ],
      correctAnswer: "3d",
      correctOption: "A",
      answerPicked: ""
    },
    
    
    
    
    
    
    
    
                          
        ];
        
        
        const physicsFundamentalQuantitiesQuestions = [
          {
            name: "Which fundamental quantity in physics represents the amount of matter in an object?",
            options: [
              "Time",
              "Length",
              "Mass",
              "Force",
            ],
            correctAnswer: "Mass",
            correctOption: "C",
            answerPicked: "",
          },
          {
            name: "What fundamental quantity in physics is measured in seconds (s)?",
            options: [
              "Mass",
              "Time",
              "Temperature",
              "Velocity",
            ],
            correctAnswer: "Time",
            correctOption: "B",
            answerPicked: "",
          },
          {
            name: "The fundamental quantity 'length' is typically measured in which unit?",
            options: [
              "Kilograms",
              "Meters",
              "Seconds",
              "Kelvin",
            ],
            correctAnswer: "Meters",
            correctOption: "B",
            answerPicked: "",
          },
          {
            name: "Which fundamental quantity represents the rate of change of position and is measured in meters per second (m/s)?",
            options: [
              "Mass",
              "Velocity",
              "Force",
              "Time",
            ],
            correctAnswer: "Velocity",
            correctOption: "B",
            answerPicked: "",
          },
          {
            name: "What fundamental quantity in physics is measured in Newtons (N)?",
            options: [
              "Temperature",
              "Force",
              "Electric Charge",
              "Length",
            ],
            correctAnswer: "Force",
            correctOption: "B",
            answerPicked: "",
          },
          // ... Add more questions about fundamental quantities in physics ...
        ];
        
        const physicsDimensionsQuestions = [
          {
            name: "What is the dimension of length in the International System of Units (SI)?",
            options: [
              "[M]",
              "[L]",
              "[T]",
              "[M][L]",
            ],
            correctAnswer: "[L]",
            correctOption: "B",
            answerPicked: "",
          },
          {
            name: "What is the dimension of time in the International System of Units (SI)?",
            options: [
              "[L]",
              "[M]",
              "[T]",
              "[M][L]",
            ],
            correctAnswer: "[T]",
            correctOption: "C",
            answerPicked: "",
          },
          {
            name: "In SI units, what are the dimensions of force?",
            options: [
              "[L][T][M]",
              "[T][M][L]",
              "[M][L][T]",
              "[L][M][T]",
            ],
            correctAnswer: "[M][L][T]",
            correctOption: "C",
            answerPicked: "",
          },
          {
            name: "What are the dimensions of velocity in SI units?",
            options: [
              "[M][L][T]",
              "[T][L][M]",
              "[L][T][M]",
              "[T][M][L]",
            ],
            correctAnswer: "[L][T][M]",
            correctOption: "A",
            answerPicked: "",
          },
          {
            name: "What are the dimensions of energy in SI units?",
            options: [
              "[L][T][M]",
              "[M][L][T]",
              "[L][M][T]",
              "[M][T][L]",
            ],
            correctAnswer: "[L][T][M]",
            correctOption: "A",
            answerPicked: "",
          },
          // ... Add more questions about dimensions in physics ...
        ];
        
      
        const scalarAndVectorQuestions = [
          {
            name: "What is the main difference between scalar and vector quantities in physics?",
            options: [
              "Scalars have magnitude and direction, while vectors have only magnitude.",
              "Scalars have only magnitude, while vectors have both magnitude and direction.",
              "Scalars have no physical significance, while vectors represent physical quantities.",
              "Scalars are used in one-dimensional motion, while vectors are used in two-dimensional motion."
            ],
            correctAnswer: "Scalars have only magnitude, while vectors have both magnitude and direction.",
            correctOption: "B",
            answerPicked: "",
          },
          {
            name: "Which of the following is an example of a scalar quantity?",
            options: [
              "Displacement",
              "Velocity",
              "Mass",
              "Force"
            ],
            correctAnswer: "Mass",
            correctOption: "C",
            answerPicked: "",
          },
          {
            name: "What is the SI unit for measuring scalar quantities like mass?",
            options: [
              "Newton (N)",
              "Meter per second (m/s)",
              "Kilogram (kg)",
              "Joule (J)"
            ],
            correctAnswer: "Kilogram (kg)",
            correctOption: "C",
            answerPicked: "",
          },
          {
            name: "A car is initially at rest and then accelerates to a speed of 30 m/s in 5 seconds. What type of quantity is the final speed of the car (30 m/s)?",
            options: [
              "Scalar",
              "Vector"
            ],
            correctAnswer: "Scalar",
            correctOption: "A",
            answerPicked: "",
          },
          {
            name: "Which of the following is an example of a vector quantity?",
            options: [
              "Temperature",
              "Time",
              "Displacement",
              "Energy"
            ],
            correctAnswer: "Displacement",
            correctOption: "C",
            answerPicked: "",
          },
          {
            name: "If you walk 5 meters east and then 5 meters west, what is the total displacement?",
            options: [
              "10 meters east",
              "5 meters east",
              "0 meters",
              "5 meters west"
            ],
            correctAnswer: "0 meters",
            correctOption: "C",
            answerPicked: "",
          },
          {
            name: "Which of the following quantities has both magnitude and direction?",
            options: [
              "Speed",
              "Distance",
              "Acceleration",
              "Velocity"
            ],
            correctAnswer: "Velocity",
            correctOption: "D",
            answerPicked: "",
          },
          {
            name: "What is the SI unit for measuring vector quantities like velocity?",
            options: [
              "Kilogram (kg)",
              "Meter per second squared (m/s^2)",
              "Meter per second (m/s)",
              "Joule (J)"
            ],
            correctAnswer: "Meter per second (m/s)",
            correctOption: "C",
            answerPicked: "",
          },
        ];

const kinematicsCalculationQuestions = [
  {
    name: "A car accelerates from rest at 3 m/s² for 8 seconds. What is its final velocity?",
    options: [
      "12 m/s",
      "24 m/s",
      "32 m/s",
      "64 m/s"
    ],
    correctAnswer: "24 m/s",
    correctOption: "B",
    answerPicked: "",
  },
  {
    name: "An object falls freely from a height of 80 meters. How long does it take to reach the ground?",
    options: [
      "2 seconds",
      "4 seconds",
      "6 seconds",
      "8 seconds"
    ],
    correctAnswer: "4 seconds",
    correctOption: "B",
    answerPicked: "",
  },
  {
    name: "A train travels at a constant speed of 90 km/h for 2.5 hours. How far does it travel?",
    options: [
      "112.5 kilometers",
      "180 kilometers",
      "225 kilometers",
      "250 kilometers"
    ],
    correctAnswer: "225 kilometers",
    correctOption: "C",
    answerPicked: "",
  },
  {
    name: "A stone is thrown vertically upward with an initial velocity of 30 m/s. How high will it go before coming to a stop?",
    options: [
      "15 meters",
      "30 meters",
      "45 meters",
      "60 meters"
    ],
    correctAnswer: "45 meters",
    correctOption: "C",
    answerPicked: "",
  },
  {
    name: "An athlete runs a 100-meter sprint in 10 seconds. What is the average speed of the athlete?",
    options: [
      "5 m/s",
      "8 m/s",
      "10 m/s",
      "12 m/s"
    ],
    correctAnswer: "10 m/s",
    correctOption: "C",
    answerPicked: "",
  },
  // ... Add more kinematics calculation questions ...
];


        
        const motionUnderGravityQuestions = [
          {
            name: "What is the acceleration due to gravity near the surface of the Earth?",
            options: [
              "10 m/s²",
              "9.8 m/s²",
              "11 m/s²",
              "9 m/s²"
            ],
            correctAnswer: "9.8 m/s²",
            correctOption: "B",
            answerPicked: "",
          },
          {
            name: "If an object is dropped from a height of 100 meters, how long will it take to reach the ground?",
            options: [
              "2.5 seconds",
              "4.52 seconds",
              "5.62 seconds",
              "8.7 seconds"
            ],
            correctAnswer: "4.52 seconds",
            correctOption: "B",
            answerPicked: "",
          },
          {
            name: "What is the final velocity of an object dropped from rest from a height of 50 meters?",
            options: [
              "4.9 m/s",
              "9.8 m/s",
              "19.6 m/s",
              "39.2 m/s"
            ],
            correctAnswer: "9.9 m/s",
            correctOption: "C",
            answerPicked: "",
          },
          {
            name: "A ball is thrown vertically upward with an initial velocity of 20 m/s. How high will it go before coming to a stop?",
            options: [
              "20 meters",
              "20.4 meters",
              "40 meters",
              "40.8 meters"
            ],
            correctAnswer: "20.4 meters",
            correctOption: "B",
            answerPicked: "",
          },
          {
            name: "If an object is thrown downward with an initial velocity of 15 m/s, how long will it take to hit the ground from a height of 45 meters?",
            options: [
              "2 seconds",
              "3 seconds",
              "4 seconds",
              "5 seconds"
            ],
            correctAnswer: "3 seconds",
            correctOption: "B",
            answerPicked: "",
          },
          {
            name: "What is the displacement of an object dropped from rest after 2 seconds?",
            options: [
              "19.6 meters",
              "19.8 meters",
              "20 meters",
              "20.2 meters"
            ],
            correctAnswer: "19.6 meters",
            correctOption: "A",
            answerPicked: "",
          },
          {
            name: "If an object is thrown upward with an initial velocity of 30 m/s, how long will it take to return to its initial height?",
            options: [
              "4 seconds",
              "5 seconds",
              "6 seconds",
              "7 seconds"
            ],
            correctAnswer: "6 seconds",
            correctOption: "C",
            answerPicked: "",
          },
          {
            name: "What is the velocity of an object in free fall after 5 seconds?",
            options: [
              "24.5 m/s",
              "39.2 m/s",
              "49 m/s",
              "58.8 m/s"
            ],
            correctAnswer: "49 m/s",
            correctOption: "C",
            answerPicked: "",
          },
          //
        ]
  
        const theoreticalMotionQuestions = [
          {
            name: "What is the fundamental difference between speed and velocity?",
            options: [
              "Speed is a scalar quantity, while velocity is a vector quantity.",
              "Speed is always positive, while velocity can be negative.",
              "Speed is measured in meters per second, while velocity is measured in kilometers per hour.",
              "Speed is a vector quantity, while velocity is a scalar quantity."
            ],
            correctAnswer: "Speed is a scalar quantity, while velocity is a vector quantity.",
            correctOption: "A",
            answerPicked: "",
          },
          {
            name: "What does the slope of a distance-time graph represent?",
            options: [
              "Time",
              "Velocity",
              "Acceleration",
              "Distance"
            ],
            correctAnswer: "Velocity",
            correctOption: "B",
            answerPicked: "",
          },
          {
            name: "If an object moves with a constant speed, what can you say about its acceleration?",
            options: [
              "It has zero acceleration.",
              "It has positive acceleration.",
              "It has negative acceleration.",
              "Acceleration is not related to speed."
            ],
            correctAnswer: "It has zero acceleration.",
            correctOption: "A",
            answerPicked: "",
          },
          {
            name: "What is the equation to calculate speed?",
            options: [
              "Speed = Distance / Time",
              "Velocity = Distance / Time",
              "Acceleration = Distance / Time",
              "Force = Mass x Acceleration"
            ],
            correctAnswer: "Speed = Distance / Time",
            correctOption: "A",
            answerPicked: "",
          },
          {
            name: "What is the SI unit of acceleration?",
            options: [
              "Meters",
              "Seconds",
              "Meters per second (m/s)",
              "Meter per second squared (m/s²)"
            ],
            correctAnswer: "Meter per second squared (m/s²)",
            correctOption: "D",
            answerPicked: "",
          },
          {
            name: "What is the acceleration of an object in free fall near the surface of the Earth?",
            options: [
              "0 m/s²",
              "9.8 m/s²",
              "19.6 m/s²",
              "5 m/s²"
            ],
            correctAnswer: "9.8 m/s²",
            correctOption: "B",
            answerPicked: "",
          },
          {
            name: "What happens to the velocity of an object in uniform circular motion?",
            options: [
              "The velocity remains constant in magnitude but changes direction continuously.",
              "The velocity decreases continuously.",
              "The velocity increases continuously.",
              "The velocity becomes zero."
            ],
            correctAnswer: "The velocity remains constant in magnitude but changes direction continuously.",
            correctOption: "A",
            answerPicked: "",
          },
          {
            name: "What is the relationship between the net force acting on an object and its acceleration?",
            options: [
              "Force and acceleration are unrelated.",
              "Force is directly proportional to acceleration.",
              "Force is inversely proportional to acceleration.",
              "Force and acceleration are the same."
            ],
            correctAnswer: "Force is directly proportional to acceleration.",
            correctOption: "B",
            answerPicked: "",
          },
          // Add more theoretical motion questions...
        ];
        
                
        const universalGravitationQuestions = [
          {
            name: "Who is credited with formulating the law of universal gravitation?",
            options: [
              "Isaac Newton",
              "Albert Einstein",
              "Galileo Galilei",
              "Johannes Kepler"
            ],
            correctAnswer: "Isaac Newton",
            correctOption: "A",
            answerPicked: "",
          },
          {
            name: "What does Newton's law of universal gravitation state?",
            options: [
              "All objects fall to the ground with equal acceleration.",
              "The force of gravity depends on the volume of an object.",
              "The force of gravity between two objects is directly proportional to the product of their masses and inversely proportional to the square of the distance between them.",
              "Gravity is stronger on the Moon than on Earth."
            ],
            correctAnswer: "The force of gravity between two objects is directly proportional to the product of their masses and inversely proportional to the square of the distance between them.",
            correctOption: "C",
            answerPicked: "",
          },
          {
            name: "What is the universal gravitational constant denoted by?",
            options: [
              "G",
              "U",
              "N",
              "C"
            ],
            correctAnswer: "G",
            correctOption: "A",
            answerPicked: "",
          },
          {
            name: "If the distance between two masses is doubled, how does the gravitational force between them change?",
            options: [
              "It remains the same.",
              "It becomes half.",
              "It becomes four times stronger.",
              "It becomes one-fourth as strong."
            ],
            correctAnswer: "It becomes one-fourth as strong.",
            correctOption: "D",
            answerPicked: "",
          },
          {
            name: "What is the unit of gravitational force in the International System of Units (SI)?",
            options: [
              "Meters per second squared (m/s²)",
              "Kilograms (kg)",
              "Newton (N)",
              "Joule (J)"
            ],
            correctAnswer: "Newton (N)",
            correctOption: "C",
            answerPicked: "",
          },
          {
            name: "What is the approximate value of the gravitational acceleration on the surface of the Earth?",
            options: [
              "1 m/s²",
              "9.8 m/s²",
              "15 m/s²",
              "25 m/s²"
            ],
            correctAnswer: "9.8 m/s²",
            correctOption: "B",
            answerPicked: "",
          },
          // Add more universal gravitation questions...
        ];
        
        const momentumQuestions = [
          {
            name: "What is the formula for calculating momentum?",
            options: [
              "Momentum = Mass x Velocity",
              "Momentum = Force x Time",
              "Momentum = Energy / Speed",
              "Momentum = Distance / Time"
            ],
            correctAnswer: "Momentum = Mass x Velocity",
            correctOption: "A",
            answerPicked: "",
          },
          {
            name: "What is the SI unit of momentum?",
            options: [
              "Kilogram-meter per second (kg·m/s)",
              "Newton (N)",
              "Joule (J)",
              "Meter per second squared (m/s²)"
            ],
            correctAnswer: "Kilogram-meter per second (kg·m/s)",
            correctOption: "A",
            answerPicked: "",
          },
          {
            name: "If the mass of an object is doubled while its velocity remains the same, how does its momentum change?",
            options: [
              "It becomes four times greater.",
              "It becomes half.",
              "It remains the same.",
              "It becomes two times greater."
            ],
            correctAnswer: "It becomes two times greater.",
            correctOption: "D",
            answerPicked: "",
          },
          {
            name: "Which of the following scenarios describes a change in momentum?",
            options: [
              "A car moving at a constant speed on a straight road.",
              "A car accelerating on a curve.",
              "A car parked on the side of the road.",
              "A car going in reverse."
            ],
            correctAnswer: "A car accelerating on a curve.",
            correctOption: "B",
            answerPicked: "",
          },
          {
            name: "What is the law of conservation of momentum?",
            options: [
              "The total momentum of a closed system remains constant if no external forces act on it.",
              "The momentum of an object is directly proportional to its velocity.",
              "Momentum is always conserved regardless of external forces.",
              "The momentum of an object is inversely proportional to its mass."
            ],
            correctAnswer: "The total momentum of a closed system remains constant if no external forces act on it.",
            correctOption: "A",
            answerPicked: "",
          },
          {
            name: "In a collision between two objects, what happens to the total momentum of the system if no external forces are involved?",
            options: [
              "It increases.",
              "It decreases.",
              "It remains the same.",
              "It depends on the objects' masses."
            ],
            correctAnswer: "It remains the same.",
            correctOption: "C",
            answerPicked: "",
          },
          // Add more momentum-related questions...
        ];
        
        const simplePendulumQuestions = [
          {
            name: "What is the formula for the period (T) of a simple pendulum?",
            options: [
              "T = (2π × length) / g",
              "T = (2π × g) / length",
              "T = (π × length) / g",
              "T = (π × g) / length"
            ],
            correctAnswer: "T = (2π × length) / g",
            correctOption: "A",
            answerPicked: "",
          },
          {
            name: "In the formula for the period of a simple pendulum, what does 'length' represent?",
            options: [
              "The mass of the pendulum bob",
              "The radius of the pendulum's circular motion",
              "The distance from the pivot point to the pendulum bob",
              "The time it takes for one complete oscillation"
            ],
            correctAnswer: "The distance from the pivot point to the pendulum bob",
            correctOption: "C",
            answerPicked: "",
          },
          {
            name: "What factor affects the period of a simple pendulum?",
            options: [
              "The mass of the pendulum bob",
              "The amplitude of the pendulum's swing",
              "The acceleration due to gravity (g)",
              "The length of the pendulum"
            ],
            correctAnswer: "The length of the pendulum",
            correctOption: "D",
            answerPicked: "",
          },
          {
            name: "If the length of a simple pendulum is increased, what happens to its period?",
            options: [
              "The period decreases",
              "The period increases",
              "The period remains the same",
              "The period becomes unpredictable"
            ],
            correctAnswer: "The period increases",
            correctOption: "B",
            answerPicked: "",
          },
          {
            name: "What is the formula for the frequency (f) of a simple pendulum?",
            options: [
              "f = 1 / T",
              "f = T / 2π",
              "f = g / (2π × length)",
              "f = 2π × length / g"
            ],
            correctAnswer: "f = 1 / T",
            correctOption: "A",
            answerPicked: "",
          },
          {
            name: "What is the relationship between the length of a simple pendulum and its period?",
            options: [
              "Directly proportional",
              "Inversely proportional",
              "No relationship",
              "Exponentially proportional"
            ],
            correctAnswer: "Directly proportional",
            correctOption: "A",
            answerPicked: "",
          },
          // Add more simple pendulum questions...
        ];
        
    
        const propertiesOfMatterQuestions = [
  {
    name: "What is the primary difference between a solid, liquid, and gas at the molecular level?",
    options: [
      "The number of molecules",
      "The arrangement and movement of molecules",
      "The size of molecules",
      "The color of molecules"
    ],
    correctAnswer: "The arrangement and movement of molecules",
    correctOption: "B",
    answerPicked: "",
  },
  {
    name: "In a solid, how do molecules typically arrange themselves?",
    options: [
      "Randomly and spaced apart",
      "Loosely packed and constantly moving",
      "Closely packed in a regular pattern",
      "In a chaotic and unpredictable manner"
    ],
    correctAnswer: "Closely packed in a regular pattern",
    correctOption: "C",
    answerPicked: "",
  },
  {
    name: "What happens to the arrangement of molecules when a substance changes from a solid to a liquid?",
    options: [
      "Molecules become more tightly packed",
      "Molecules become less organized and spread out",
      "Molecules remain in the same arrangement",
      "Molecules disappear"
    ],
    correctAnswer: "Molecules become less organized and spread out",
    correctOption: "B",
    answerPicked: "",
  },
  {
    name: "What is the term for the energy required to change a substance from a solid to a liquid at its melting point?",
    options: [
      "heat capacity",
      "Specific heat capacity",
      "Heat of fusion",
      "enthalpy change"
    ],
    correctAnswer: "Heat of fusion",
    correctOption: "C",
    answerPicked: "",
  },
  {
    name: "What is the term for the process in which a gas changes directly into a solid without becoming a liquid first?",
    options: [
      "Sublimation",
      "Condensation",
      "Evaporation",
      "Freezing"
    ],
    correctAnswer: "Sublimation",
    correctOption: "A",
    answerPicked: "",
  },
  {
    name: "Which state of matter has the most kinetic energy in its molecules?",
    options: [
      "Solid",
      "Liquid",
      "Gas",
      "Plasma"
    ],
    correctAnswer: "Gas",
    correctOption: "C",
    answerPicked: "",
  },
  // Add more questions on properties of matter and molecular treatment...
];

const elasticityQuestions = [
  {
    name: "What is elasticity in physics?",
    options: [
      "The ability of a material to stretch indefinitely",
      "The ability of a material to return to its original shape after deformation",
      "The resistance of a material to any change in shape",
      "The ability of a material to conduct electricity"
    ],
    correctAnswer: "The ability of a material to return to its original shape after deformation",
    correctOption: "B",
    answerPicked: "",
  },
  {
    name: "What is the equation for Hooke's Law, which describes the relationship between stress and strain in an elastic material?",
    options: [
      "F = ma",
      "E = mc²",
      "E = hv",
      "F = kx"
    ],
    correctAnswer: "F = kx",
    correctOption: "D",
    answerPicked: "",
  },
  {
    name: "What happens to the strain in a material if the applied stress is doubled while obeying Hooke's Law?",
    options: [
      "The strain is halved",
      "The strain is quadrupled",
      "The strain remains the same",
      "The strain is doubled"
    ],
    correctAnswer: "The strain is doubled",
    correctOption: "D",
    answerPicked: "",
  },
  {
    name: "What is the modulus of elasticity that measures a material's resistance to axial deformation along its length?",
    options: [
      "Young's Modulus (Y)",
      "Shear Modulus (G)",
      "Bulk Modulus (K)",
      "Poisson's Ratio (σ)"
    ],
    correctAnswer: "Young's Modulus (Y)",
    correctOption: "A",
    answerPicked: "",
  },
  {
    name: "What is the term for the point at which a material stops obeying Hooke's Law and undergoes permanent deformation?",
    options: [
      "Tensile point",
      "Breaking point",
      "Yield point",
      "Elastic point"
    ],
    correctAnswer: "Yield point",
    correctOption: "C",
    answerPicked: "",
  },
  {
    name: "What happens to a material's modulus of elasticity when it becomes stiffer?",
    options: [
      "It increases",
      "It decreases",
      "It remains the same",
      "It becomes zero"
    ],
    correctAnswer: "It increases",
    correctOption: "A",
    answerPicked: "",
  },
  // Add more questions on elasticity and Hooke's Law...
];



const hydrostaticsQuestions = [
  {
    name: "What is hydrostatics?",
    options: [
      "The study of moving fluids",
      "The study of fluids at rest",
      "The study of fluid dynamics",
      "The study of fluid pressure"
    ],
    correctAnswer: "The study of fluids at rest",
    correctOption: "B",
    answerPicked: "",
  },
  {
    name: "What is Pascal's principle?",
    options: [
      "Pressure applied to a fluid is transmitted undiminished throughout the fluid",
      "The volume of a fluid is inversely proportional to its pressure",
      "The density of a fluid increases with depth",
      "Fluids always flow from high pressure to low pressure"
    ],
    correctAnswer: "Pressure applied to a fluid is transmitted undiminished throughout the fluid",
    correctOption: "A",
    answerPicked: "",
  },
  {
    name: "What is the SI unit of pressure?",
    options: [
      "Newton (N)",
      "Joule (J)",
      "Pascal (Pa)",
      "Watt (W)"
    ],
    correctAnswer: "Pascal (Pa)",
    correctOption: "C",
    answerPicked: "",
  },
  {
    name: "What happens to the pressure in a fluid as you go deeper underwater?",
    options: [
      "It decreases",
      "It increases",
      "It remains the same",
      "It becomes zero"
    ],
    correctAnswer: "It increases",
    correctOption: "B",
    answerPicked: "",
  },
  {
    name: "What principle explains why a hydraulic press can lift heavy objects?",
    options: [
      "Archimedes' principle",
      "Bernoulli's principle",
      "Pascal's principle",
      "Newton's third law"
    ],
    correctAnswer: "Pascal's principle",
    correctOption: "C",
    answerPicked: "",
  },
  {
    name: "If you increase the area over which a force is applied to a fluid, what happens to the pressure?",
    options: [
      "Pressure decreases",
      "Pressure increases",
      "Pressure remains the same",
      "Pressure becomes zero"
    ],
    correctAnswer: "Pressure decreases",
    correctOption: "A",
    answerPicked: "",
  },
  // Add more questions on hydrostatics...
];


const hydrodynamicsQuestions = [
  {
    name: "What does hydrodynamics study?",
    options: [
      "The behavior of fluids at rest",
      "The behavior of moving fluids",
      "The behavior of gases in motion",
      "The behavior of solids under high pressure"
    ],
    correctAnswer: "The behavior of moving fluids",
    correctOption: "B",
    answerPicked: "",
  },
  {
    name: "Which scientist is known for his pioneering work in hydrodynamics, particularly in the study of fluid flow?",
    options: [
      "Isaac Newton",
      "Albert Einstein",
      "Leonardo da Vinci",
      "Daniel Bernoulli"
    ],
    correctAnswer: "Daniel Bernoulli",
    correctOption: "D",
    answerPicked: "",
  },
  {
    name: "What is the principle known as Bernoulli's Principle?",
    options: [
      "The pressure of a fluid decreases as its velocity increases",
      "The pressure of a fluid increases as its velocity increases",
      "The pressure of a fluid remains constant regardless of velocity",
      "The pressure of a fluid is inversely proportional to its density"
    ],
    correctAnswer: "The pressure of a fluid decreases as its velocity increases",
    correctOption: "A",
    answerPicked: "",
  },
  {
    name: "What is the study of the motion of fluids and the forces acting on solid objects immersed in fluids called?",
    options: [
      "Thermodynamics",
      "Fluid dynamics",
      "Aerodynamics",
      "Statics"
    ],
    correctAnswer: "Fluid dynamics",
    correctOption: "B",
    answerPicked: "",
  },
  {
    name: "Which parameter defines the resistance of a fluid to flow in hydrodynamics?",
    options: [
      "Viscosity",
      "Pressure",
      "Velocity",
      "Density"
    ],
    correctAnswer: "Viscosity",
    correctOption: "A",
    answerPicked: "",
  },
  {
    name: "What does the Reynolds number represent in hydrodynamics?",
    options: [
      "The flow rate of a fluid",
      "The pressure of a fluid",
      "The viscosity of a fluid",
      "The flow regime of a fluid"
    ],
    correctAnswer: "The flow regime of a fluid",
    correctOption: "D",
    answerPicked: "",
  },
  // Add more questions about hydrodynamics...
];




      const surfaceTensionQuestions = [
  {
    name: "What is surface tension?",
    options: [
      "The force that pulls objects toward the center of the Earth",
      "The tension on the surface of a liquid caused by gravity",
      "The tendency of liquids to rise in narrow tubes",
      "The force that causes the surface of a liquid to behave like a stretched elastic membrane"
    ],
    correctAnswer: "The force that causes the surface of a liquid to behave like a stretched elastic membrane",
    correctOption: "D",
    answerPicked: "",
  },
  {
    name: "What is the SI unit of surface tension?",
    options: [
      "Newton per meter (N/m)",
      "Pascal (Pa)",
      "Newton-meter (N·m)",
      "Kilogram per cubic meter (kg/m³)"
    ],
    correctAnswer: "Newton per meter (N/m)",
    correctOption: "A",
    answerPicked: "",
  },
  {
    name: "Which property of liquids does surface tension depend on?",
    options: [
      "Temperature",
      "Pressure",
      "Viscosity",
      "Density"
    ],
    correctAnswer: "Temperature",
    correctOption: "A",
    answerPicked: "",
  },
  {
    name: "What happens to surface tension as the temperature of a liquid increases?",
    options: [
      "It decreases",
      "It increases",
      "It remains constant",
      "It depends on the liquid"
    ],
    correctAnswer: "It decreases",
    correctOption: "A",
    answerPicked: "",
  },
  {
    name: "Which force is responsible for surface tension?",
    options: [
      "Gravitational force",
      "Electromagnetic force",
      "Nuclear force",
      "Capillary force"
    ],
    correctAnswer: "Electromagnetic force",
    correctOption: "B",
    answerPicked: "",
  },
  {
    name: "What causes a liquid to form spherical droplets due to surface tension?",
    options: [
      "Adhesion",
      "Cohesion",
      "Gravity",
      "Temperature"
    ],
    correctAnswer: "Cohesion",
    correctOption: "B",
    answerPicked: "",
  },
  // Add more questions about surface tension...
];


        
const heatQuestions = [
  {
    name: "What is heat?",
    options: [
      "The measure of the average kinetic energy of particles in a substance",
      "The measure of temperature",
      "The measure of thermal conductivity",
      "The measure of specific heat capacity"
    ],
    correctAnswer: "The measure of the average kinetic energy of particles in a substance",
    correctOption: "A",
    answerPicked: "",
  },
  {
    name: "What is temperature?",
    options: [
      "The measure of the average kinetic energy of particles in a substance",
      "The measure of heat transfer",
      "The measure of specific heat capacity",
      "The measure of thermal conductivity"
    ],
    correctAnswer: "The measure of the average kinetic energy of particles in a substance",
    correctOption: "A",
    answerPicked: "",
  },
  {
    name: "What is specific heat capacity?",
    options: [
      "The amount of heat required to raise the temperature of a substance by 1 degree Celsius",
      "The temperature at which a substance freezes",
      "The temperature at which a substance boils",
      "The measure of thermal conductivity"
    ],
    correctAnswer: "The amount of heat required to raise the temperature of a substance by 1 degree Celsius",
    correctOption: "A",
    answerPicked: "",
  },
  {
    name: "What is the SI unit of heat?",
    options: [
      "Joule (J)",
      "Kelvin (K)",
      "Watt (W)",
      "Calorie (cal)"
    ],
    correctAnswer: "Joule (J)",
    correctOption: "A",
    answerPicked: "",
  },
  {
    name: "Which material typically has a high specific heat capacity?",
    options: [
      "Metals",
      "Wood",
      "Water",
      "Air"
    ],
    correctAnswer: "Water",
    correctOption: "C",
    answerPicked: "",
  },
  {
    name: "What happens to the kinetic energy of particles when a substance is heated?",
    options: [
      "It decreases",
      "It remains constant",
      "It increases",
      "It depends on the substance"
    ],
    correctAnswer: "It increases",
    correctOption: "C",
    answerPicked: "",
  },
  // Add more questions about heat, temperature, and heat capacity...
];


const thermodynamicsQuestions = [
  {
    name: "What is the first law of thermodynamics?",
    options: [
      "Energy cannot be created or destroyed; it can only change forms.",
      "Heat flows from a hotter object to a colder object.",
      "Entropy always increases in a closed system.",
      "Work done by a system is equal to the heat added to the system."
    ],
    correctAnswer: "Energy cannot be created or destroyed; it can only change forms.",
    correctOption: "A",
    answerPicked: "",
  },
  {
    name: "What is entropy in thermodynamics?",
    options: [
      "A measure of disorder or randomness in a system.",
      "The total energy of a system.",
      "The ability of a system to do work.",
      "The heat content of a system."
    ],
    correctAnswer: "A measure of disorder or randomness in a system.",
    correctOption: "A",
    answerPicked: "",
  },
  {
    name: "What is the second law of thermodynamics?",
    options: [
      "Energy is conserved in all processes.",
      "Entropy in a closed system never decreases.",
      "Heat always flows from a colder object to a hotter object.",
      "Work done on a system is equal to the heat added to the system."
    ],
    correctAnswer: "Entropy in a closed system never decreases.",
    correctOption: "B",
    answerPicked: "",
  },
  {
    name: "What is a heat engine?",
    options: [
      "A device that converts heat into mechanical work.",
      "A device that converts mechanical work into heat.",
      "A device that maintains a constant temperature.",
      "A device that measures temperature."
    ],
    correctAnswer: "A device that converts heat into mechanical work.",
    correctOption: "A",
    answerPicked: "",
  },
  {
    name: "What is absolute zero in the Kelvin scale?",
    options: [
      "0 K",
      "100 K",
      "-273.15 K",
      "273.15 K"
    ],
    correctAnswer: "0 K",
    correctOption: "A",
    answerPicked: "",
  },
  {
    name: "What is the Carnot engine known for in thermodynamics?",
    options: [
      "Efficiency cannot be 100% in any heat engine.",
      "It always operates in reverse.",
      "It is a perpetual motion machine.",
      "It was the first heat engine ever invented."
    ],
    correctAnswer: "Efficiency cannot be 100% in any heat engine.",
    correctOption: "A",
    answerPicked: "",
  },
  // Add more questions about thermodynamics...
];

const kineticTheoryOfGasesQuestions = [
  {
    name: "According to the kinetic theory of gases, what are gases composed of?",
    options: [
      "Tiny, randomly moving particles",
      "Fixed, stationary particles",
      "Solid particles arranged in a regular pattern",
      "Liquid particles with strong attractions"
    ],
    correctAnswer: "Tiny, randomly moving particles",
    correctOption: "A",
    answerPicked: "",
  },
  {
    name: "What is the primary factor that determines the pressure of a gas in a container?",
    options: [
      "The speed of gas particles",
      "The size of gas particles",
      "The number of gas particles",
      "The color of gas particles"
    ],
    correctAnswer: "The number of gas particles",
    correctOption: "C",
    answerPicked: "",
  },
  {
    name: "According to the kinetic theory, what happens to the kinetic energy of gas particles as the temperature increases?",
    options: [
      "It decreases",
      "It remains constant",
      "It increases",
      "It becomes negative"
    ],
    correctAnswer: "It increases",
    correctOption: "C",
    answerPicked: "",
  },
  {
    name: "What is absolute zero in the Celsius scale?",
    options: [
      "-100°C",
      "-273.15°C",
      "0°C",
      "100°C"
    ],
    correctAnswer: "-273.15°C",
    correctOption: "B",
    answerPicked: "",
  },
  {
    name: "What happens to the pressure of a gas in a closed container if the volume of the container is reduced while keeping the temperature constant?",
    options: [
      "The pressure increases",
      "The pressure decreases",
      "The pressure remains the same",
      "The pressure becomes negative"
    ],
    correctAnswer: "The pressure increases",
    correctOption: "A",
    answerPicked: "",
  },
  {
    name: "What is the root mean square speed of gas particles directly proportional to?",
    options: [
      "Temperature",
      "Pressure",
      "Volume",
      "Number of particles"
    ],
    correctAnswer: "Temperature",
    correctOption: "A",
    answerPicked: "",
  },
  // Add more questions about the Kinetic Theory of Gases...
];

const genphy101Questions = [
    {
      name: "A book is at rest on top of a table. Which of the following is correct?",
      options: [
        "There is no force acting on the book.",
        "The book has no inertia.",
        "There is no force acting on the table.",
        "The book is in equilibrium.",
        "The inertia of the book is equal to the inertia of the table.",
      ],
      correctAnswer: "The book is in equilibrium",
      correctOption: "D",
      answerPicked: "",
    },
    {
      name: "The property of a moving object to continue moving is what Galileo called",
      options: ["velocity.", "speed.", "acceleration.", "inertia.", "direction."],
      correctAnswer: "Inertia",
      correctOption: "D",
      answerPicked: "",
    },
    {
      name: "According to Newton's First Law of Motion,",
      options: [
        "an object in motion eventually comes to a halt.",
        "an object at rest eventually begins to move.",
        "an object in motion moves in a parabolic trajectory unless acted upon by a net force.",
        "an object at rest always remains at rest.",
        "an object at rest remains at rest unless acted upon by a net force.",
      ],
      correctAnswer:
        "an object at rest remains at rest unless acted upon by a net force",
      correctOption: "E",
      answerPicked: "",
    },
    {
      name: "If an object is moving, then the magnitude of its cannot be zero.",
      options: ["speed", "velocity", "acceleration", "A and B", "A, B, and C"],
      correctAnswer: "A and B",
      correctOption: "D",
      answerPicked: "",
    },
    {
      name: "A car initially at rest accelerates in a straight line at 3 m/s². What will be its speed after 2 seconds?",
      options: ["0 m/s", "5 m/s", "3 m/s", "6 m/s", "2 m/s"],
      correctAnswer: "6 m/s",
      correctOption: "D",
      answerPicked: "",
    },
    {
      name: "A body in free fall in a vacuum",
      options: [
        "will drop the same distance during each second of its fall.",
        "will have the same average speed during each second of its fall.",
        "will have a constant velocity during each second of its fall.",
        "will not be accelerated during its fall.",
        "will have the same acceleration during each second of its fall.",
      ],
      correctAnswer:
        "will have the same acceleration during each second of its fall",
      correctOption: "E",
      answerPicked: "",
    },
    {
      name: "A bowling ball at a height of 36 meters above the ground is falling vertically at a rate of 12 meters per second. Which of these best describes its fate?",
      options: [
        "It will hit the ground in exactly three seconds at a speed of 12 m/s.",
        "It will hit the ground in less than three seconds at a speed greater than 12 m/s.",
        "It will hit the ground in more than three seconds at a speed less than 12 m/s.",
        "It will hit the ground in less than three seconds at a speed less than 12 m/s.",
        "It will hit the ground in more than three seconds at a speed greater than 12 m/s.",
      ],
      correctAnswer:
        "It will hit the ground in less than three seconds at a speed greater than 12 m/s",
      correctOption: "B",
      answerPicked: "",
    },
    {
      name: "The speedometer in your car tells you the________________ of your car.",
      options: [
        "acceleration",
        "average speed",
        "instantaneous speed",
        "velocity",
        "inertia",
      ],
      correctAnswer: "instantaneous speed",
      correctOption: "C",
      answerPicked: "",
    },
    {
      name: "To report the of an object, we must specify both its speed and its direction .",
      options: ["acceleration",
                "mass", 
                "velocity", 
                "length", 
                "position"],
      correctAnswer: "velocity",
      correctOption: "C",
      answerPicked: "",
    },
    {
      name: "Projectile 'A' is fired at an angle of 50° above the horizontal; projectile 'B' is fired with the same speed at an angle of 40° above the horizontal. Assuming level ground and negligible air resistance, which of the following is true?",
      options: [
        "'A' will reach a greater height and have a greater range than 'B'.",
        "'A' will reach a greater height and have the same range as 'B'.",
        "'A' will reach a greater height and have a shorter range than 'B'.",
        "'A' will reach the same height and have the same range as 'B'.",
        "'A' will reach the same height and have a shorter range than 'B'.",
      ],
      correctAnswer:
        "'A' will reach the same height and have a shorter range than 'B'",
      correctOption: "E",
      answerPicked: "",
    },
    {
      name: "In the absence of air resistance, the magnitude of the vertical component of a projectile's acceleration",
      options: [
        "is constant until the projectile hits the ground.",
        "always decreases with time until the projectile hits the ground.",
        "is equal to the magnitude of the horizontal component of the projectile's acceleration.",
        " increases and/or decreases with time, depending on the projectile's velocity.",
        "E. always increases with time until the projectile hits the ground.",
      ],
      correctAnswer: "is constant until the projectile hits the ground.",
      correctOption: "A",
      answerPicked: "",
    },
    {
      name: "A ball is thrown horizontally with a speed of 25 m/s from the top of a tower 20 meters high. Assuming level ground below and negligible air resistance, what will be the magnitude of the vertical velocity component when the ball hits the ground?",
      options: ["A. 25 m/s", "B. 15 m/s", "C. 20 m/s", "D. 50 m/s", "E. 10 m/s"],
      correctAnswer: "20 m/s",
      correctOption: "C",
      answerPicked: "",
    },
    {
      name: "Which of these is the best description of the trajectory of a projectile shot from the top of a high cliff at an angle of 60° below the horizontal (neglecting air resistance)?",
      options: [
        "The projectile will move downwards at a 60° angle in a straight line at a constant speed until it stops and then falls straight down.",
        "The projectile will move downwards at a 60° angle in a straight line at a gradually diminishing speed until it stops and then falls straight down.",
        "The projectile will move downwards at a 60° angle in a straight line at a gradually increasing speed until it stops and then falls straight down.",
        "The projectile will gradually arc downward, following the curve of a circle.",
        "The projectile will gradually arc downward, following the curve of a parabola.",
      ],
      correctAnswer:
        "The projectile will gradually arc downward, following the curve of a parabola",
      correctOption: "E",
      answerPicked: "",
    },
    {
      name: "A firefighter with a mass of 70 kg slides down a vertical pole, accelerating at 2 m/s². The force of friction that acts on the firefighter is",
      options: ["A. 70 N.", "B. 560 N.", "C. 140 N.", "D. 700 N.", "E. 0 N."],
      correctAnswer: "0 N",
      correctOption: "E",
      answerPicked: "",
    },
    {
      name: "The of an object on the Earth's surface are directly proportional to each other.",
      options: [
        "acceleration and mass",
        "mass and weight",
        "force and velocity",
        "weight and acceleration",
        "speed and velocity",
      ],
      correctAnswer: "mass and weight",
      correctOption: "B",
      answerPicked: "",
    },
    {
      name: "The Moon's gravity is 1/6 of the Earth's gravity. The weight of a bowling ball on the Earth would be its weight on the Moon.",
      options: ["equal to", "1/6 of", "6 times", "36 times", "1/36 of"],
      correctAnswer: "B. 1/6 of",
      correctOption: "B",
      answerPicked: "",
    },
    {
      name: "When a certain net force is applied to one brick on a frictionless surface, it accelerates at 6 m/s². When the same net force is applied to three bricks that are cemented together,",
      options: [
        "they accelerate at 3 m/s².",
        "they accelerate at 6 m/s².",
        "they accelerate at 18 m/s².",
        "they accelerate at 2 m/s².",
        "they do not accelerate at all.",
      ],
      correctAnswer: "B. they accelerate at 6 m/s².",
      correctOption: "B",
      answerPicked: "",
    },
    {
      name: "To accelerate a 6 kg mass at 2 m/s² requires a net force of .",
      options: ["A. 3 N", "B. 8 N", "C. 12 N", "D. 6 N", "E. 2 N"],
      correctAnswer: "C. 12 N",
      correctOption: "C",
      answerPicked: "",
    },
    {
      name: "An element with an atomic number of 92 and an atomic mass number of 238 would have",
      options: [
        "92 protons, 146 neutrons, and 92 electrons.",
        "92 protons, 146 neutrons, and 238 electrons.",
        "92 protons, 238 neutrons, and 146 electrons.",
        "146 protons, 92 neutrons, and 92 electrons.",
        "146 protons, 92 neutrons, and 146 electrons.",
      ],
      correctAnswer: "92 protons, 146 neutrons, and 92 electrons.",
      correctOption: "A",
      answerPicked: "",
    },
    {
      name: "Brownian motion is the",
      options: [
        "random motion of microscopic particles being bombarded by even smaller atoms and molecules.",
        "random motion of atoms and molecules being bombarded by larger microscopic particles.",
        "vibration of atoms and molecules in a solid.",
        "movement of electrons circulating within the atom.",
        "very gradual flow of solid materials such as glass over long periods of time.",
      ],
      correctAnswer:
        "random motion of microscopic particles being bombarded by even smaller atoms and molecules.",
      correctOption: "A",
      answerPicked: "",
    },
    {
      name: "Chemical combinations of elements are called",
      options: ["mixtures.", "groups.", "shells.", "nuclei.", "compounds."],
      correctAnswer: "compounds.",
      correctOption: "E",
      answerPicked: "",
    },
    {
      name: "Which of the following is a list of elements?",
      options: [
        "hydrogen, nitrogen, air",
        "hydrogen, oxygen, water",
        "hydrogen, oxygen, nitrogen",
        "air, nitrogen, oxygen",
        "water, nitrogen, oxygen",
      ],
      correctAnswer: "hydrogen, oxygen, nitrogen",
      correctOption: "C",
      answerPicked: "",
    },
    {
      name: "Where on the periodic table would we find an element with one more proton and one more electron than silver?",
      options: [
        "Just above silver.",
        "Just to the left of silver.",
        "Just below silver.",
        "Just to the right of silver.",
        "None of these -- there is no such element.",
      ],
      correctAnswer: "Just below silver.",
      correctOption: "C",
      answerPicked: "",
    },
    {
      name: "Density is",
      options: [
        "mass times volume.",
        "mass divided by volume.",
        "mass plus volume.",
        "volume divided by mass.",
        "mass minus volume.",
      ],
      correctAnswer: "mass divided by volume.",
      correctOption: "B",
      answerPicked: "",
    },
    {
      name: "1000 cubic centimeters of water should have a mass of approximately",
      options: [
        "100 grams",
        "10 grams",
        "1 gram",
        "1 kilogram",
        "1000 kilograms",
      ],
      correctAnswer: "1 kilogram",
      correctOption: "D",
      answerPicked: "",
    },
    {
      name: "A material is said to be if it changes shape when a deforming force acts on it and returns to its original shape when the deforming force is removed.",
      options: ["elastic", "inelastic", "plastic", "stretchy", "rigid"],
      correctAnswer: "elastic",
      correctOption: "A",
      answerPicked: "",
    },
    {
      name: "Hooke's Law relates the",
      options: [
        "distance a spring stretches to the force applied to the spring.",
        "distance a spring stretches to the mass of the spring.",
        "distance a spring stretches to the density of the spring.",
        "density of a spring to the force applied to the spring.",
        "density of a spring to the mass of the spring.",
      ],
      correctAnswer:
        "distance a spring stretches to the force applied to the spring.",
      correctOption: "A",
      answerPicked: "",
    },
    {
      name: "When the length of each edge of a cube is doubled, the cube's surface area increases by a factor of .",
      options: ["2", "4", "6", "8", "16"],
      correctAnswer: "4",
      correctOption: "B",
      answerPicked: "",
    },
    {
      name: "When the length of each edge of a cube is tripled, the cube's volume",
      options: [
        "increases by a factor of 3.",
        "decreases by a factor of 1/3.",
        "increases by a factor of 9.",
        "decreases by a factor of 1/9.",
        "increases by a factor of 27.",
      ],
      correctAnswer: "increases by a factor of 27.",
      correctOption: "E",
      answerPicked: "",
    },
    {
      name: "The weight of a dome produces",
      options: [
        "tension forces parallel to the curve of the dome.",
        "compression forces parallel to the curve of the dome.",
        "compression forces perpendicular to the curve of the dome.",
        "tension forces acting vertically.",
        "tension forces acting horizontally.",
      ],
      correctAnswer: "compression forces parallel to the curve of the dome.",
      correctOption: "B",
      answerPicked: "",
    },
    {
      name: "The buoyant force",
      options: [
        "is the force of gravity acting on a submerged object.",
        "is the difference between a submerged object's weight and the weight of an equal mass of water.",
        "is the net upward force of the surrounding liquid acting on a submerged object.",
        "is the net downward force of a submerged object acting on the surrounding liquid.",
        "depends on the density of the submerged object.",
      ],
      correctAnswer:
        "is the net upward force of the surrounding liquid acting on a submerged object.",
      correctOption: "C",
      answerPicked: "",
    },
    {
      name: "The buoyant force on a block of wood floating in water",
      options: [
        "is equal to the weight of a volume of water with the same volume as the wood.",
        "is equal to the weight of the wood.",
        "is greater than the weight of the wood.",
        "is less than the weight of the wood.",
        "cannot be calculated because the block is not completely submerged.",
      ],
      correctAnswer: "is equal to the weight of the wood.",
      correctOption: "B",
      answerPicked: "",
    },
    {
      name: "An object with a mass of 1 kg displaces 700 ml of water. Which of the following is true?",
      options: [
        "The weight of this object is 10 N.",
        "The weight of this object is 7 N.",
        "The weight of this object is 3 N.",
        "The buoyant force on this object is 3 N.",
        "The buoyant force on this object is 10 N.",
      ],
      correctAnswer: "The buoyant force on this object is 10 N.",
      correctOption: "E",
      answerPicked: "",
    },
    {
      name: "An object with a mass of 1 kg displaces 0.6 kg of water. Which of the following is true?",
      options: [
        "The buoyant force on this object is 10 N.",
        "The buoyant force on this object is 6 N.",
        "The buoyant force on this object is 4 N.",
        "The density of this object is less than that of water.",
        "This object will not sink in water.",
      ],
      correctAnswer: "The buoyant force on this object is 6 N.",
      correctOption: "B",
      answerPicked: "",
    },
    {
      name: "The water pressure in a lake behind a dam depends on",
      options: [
        "the volume of lake water behind the dam.",
        "the surface area of the lake.",
        "the distance from the dam at which the pressure is measured.",
        "the depth below the surface at which the pressure is measured.",
        "the number of fish in the lake.",
      ],
      correctAnswer:
        "the depth below the surface at which the pressure is measured.",
      correctOption: "D",
      answerPicked: "",
    },
    {
      name: "When air is removed from a metal can by a vacuum pump, the can buckles inwards and is crushed. This occurs because",
      options: [
        "the air pressure on the inside of the can is greater than the air pressure on the outside of the can.",
        "the air pressure on the outside of the can is greater than the air pressure on the inside of the can.",
        "the loss of air molecules from inside the can weakens the metal.",
        "the opposite sides of the empty can strongly attract each other.",
        "of Bernoulli's principle.",
      ],
      correctAnswer:
        "the air pressure on the outside of the can is greater than the air pressure on the inside of the can.",
      correctOption: "B",
      answerPicked: "",
    },
    {
      name: "Bernoulli's principle explains why",
      options: [
        "a hot air balloon rises.",
        "liquid rises in a drinking straw.",
        "airplanes fly.",
        "dead fish float.",
        "submarines can remain submerged.",
      ],
      correctAnswer: "airplanes fly.",
      correctOption: "C",
      answerPicked: "",
    },
    {
      name: "In order to decrease the pressure in an automobile tire, one normally",
      options: [
        "decreases the temperature of the tire.",
        "increases the volume of the tire.",
        "increases the density of air in the tire.",
        "decreases the number of air molecules in the tire.",
        "decreases the surface area of the tire.",
      ],
      correctAnswer: "decreases the number of air molecules in the tire.",
      correctOption: "D",
      answerPicked: "",
    },
    {
      name: "According to Boyle's Law, if the volume occupied by a certain gas is doubled,",
      options: [
        "the pressure of the gas will be doubled.",
        "the pressure of the gas will be quadrupled.",
        "the pressure of the gas will remain constant.",
        "the pressure of the gas will be halved.",
        "the number of atoms in the gas will be halved.",
      ],
      correctAnswer: "the pressure of the gas will be halved.",
      correctOption: "D",
      answerPicked: "",
    },
    {
      name: "Archimedes' Principle states that an object surrounded by air is buoyed up by a force equal to the",
      options: [
        "weight of the air it displaces.",
        "weight of the object.",
        "total pressure on the object.",
        "difference between the weight of the object and the weight of the air it displaces.",
        "weight of Archimedes.",
      ],
      correctAnswer: "weight of the air it displaces.",
      correctOption: "A",
      answerPicked: "",
    },
    {
      name: "In general, when a liquid is heated",
      options: [
        "it will neither expand nor contract.",
        "it will expand at a greater rate than a solid.",
        "it will expand at a lesser rate than a solid.",
        "it will contract at a greater rate than a solid.",
        "it will contract at a lesser rate than a solid.",
      ],
      correctAnswer: "it will expand at a greater rate than a solid.",
      correctOption: "B",
      answerPicked: "",
    },
    {
      name: "If a flat metal plate with a circular hole cut through it is heated,",
      options: [
        "the hole gets smaller.",
        "the hole gets larger.",
        "the hole stays exactly the same size.",
        "the hole may get larger or smaller, depending on the material of the plate.",
        "the hole may get larger or smaller, depending on how much the plate is heated.",
      ],
      correctAnswer:
        "the hole may get larger or smaller, depending on the material of the plate.",
      correctOption: "D",
      answerPicked: "",
    },
    {
      name: "Water has a higher specific heat capacity than iron. This means that",
      options: [
        "water is more dense than iron.",
        "water is hotter than iron.",
        "water heats more rapidly than iron.",
        "water heats more slowly than iron.",
        "water boils at a higher temperature than iron.",
      ],
      correctAnswer: "water heats more slowly than iron.",
      correctOption: "D",
      answerPicked: "",
    },
    {
      name: "The specific heat capacity of water is 1 calorie per gram per degree Celsius. This means that it will take calorie(s) to increase the temperature of 10 grams of water by 10 degrees.",
      options: ["20", "0.1", "1", "10", "100"],
      correctAnswer: "100",
      correctOption: "E",
      answerPicked: "",
    },
    {
      name: "Water reaches its highest density at a temperature of degrees Celsius.",
      options: ["0", "4", "10", "-10", "-4"],
      correctAnswer: "4",
      correctOption: "B",
      answerPicked: "",
    },
    {
      name: "Which of these is an example of heat transfer by conduction?",
      options: [
        "The handle of a metal spoon becomes hot when you use it to stir a pot of soup on the stove.",
        "The air near the ceiling is normally warmer than air near the floor.",
        "You can boil water in a microwave oven.",
        "You feel the heat from a bonfire even though you are several meters away from it.",
        "Smoke rises up a chimney.",
      ],
      correctAnswer:
        "The handle of a metal spoon becomes hot when you use it to stir a pot of soup on the stove.",
      correctOption: "A",
      answerPicked: "",
    },
    {
      name: "Rising air tends to",
      options: [
        "expand and become cooler.",
        "expand and become warmer.",
        "become denser and warmer.",
        "become denser and cooler.",
        "maintain a constant density and temperature.",
      ],
      correctAnswer: "expand and become cooler.",
      correctOption: "A",
      answerPicked: "",
    },
    {
      name: "Radiation is heat transfer by",
      options: [
        "molecular and electronic collisions.",
        "electromagnetic waves.",
        "bulk fluid motions.",
        "atmospheric currents.",
        "direct contact.",
      ],
      correctAnswer: "electromagnetic waves.",
      correctOption: "B",
      answerPicked: "",
    },
    {
      name: "The pattern formed by overlapping waves in a bow wave is in the shape of the letter .",
      options: ["B", "U", "V", "I", "T"],
      correctAnswer: "V",
      correctOption: "C",
      answerPicked: "",
    },
    {
      name: "The Doppler effect causes",
      options: [
        "the observed pitch of a sound to be lower if the source of sound is approaching the observer.",
        "the observed pitch of a sound to be higher if the source of sound is moving away from the observer.",
        "the observed pitch of a sound to be lower if the source of sound is moving away from the observer.",
        "the speed of sound to increase if the source of sound is moving away from the observer.",
        "the speed of sound to decrease if the source of sound is moving away from the observer.",
      ],
      correctAnswer:
        "the observed pitch of a sound to be higher if the source of sound is moving away from the observer.",
      correctOption: "B",
      answerPicked: "",
    },
    {
      name: "In a wave, the medium vibrates in a direction that is perpendicular to the direction the wave travels.",
      options: ["sound", "longitudinal", "perpendicular", "transverse", "normal"],
      correctAnswer: "transverse",
      correctOption: "D",
      answerPicked: "",
    },
    {
      name: "The period of a pendulum depends on",
      options: [
        "the mass of the pendulum and the size of the arc it swings through.",
        "the length of the pendulum and the size of the arc it swings through.",
        "the mass of the pendulum and the acceleration of gravity.",
        "the length of the pendulum and the acceleration of gravity.",
        "the weight of the pendulum and the material it is made from.",
      ],
      correctAnswer:
        "the length of the pendulum and the acceleration of gravity.",
      correctOption: "D",
      answerPicked: "",
    },
    {
      name: "A wave that has a relatively long wavelength will also have a relatively",
      options: [
        "high frequency.",
        "long period.",
        "large amplitude.",
        "high speed.",
        "small amplitude.",
      ],
      correctAnswer: "small amplitude.",
      correctOption: "E",
      answerPicked: "",
    },
    {
      name: "A train of freight cars, each 10 m long, rolls by at the rate of 2 cars each second. What is the speed of the train?",
      options: ["10 m/s", "2 m/s", "5 m/s", "20 m/s", "12 m/s"],
      correctAnswer: "5 m/s",
      correctOption: "C",
      answerPicked: "",
    },
    {
      name: "An object will sink in a fluid if its density is",
      options: [
        "greater than the fluid's density.",
        "less than the fluid's density.",
        "equal to the fluid's density.",
        "greater than the fluid's viscosity.",
        "less than the fluid's viscosity.",
      ],
      correctAnswer: "greater than the fluid's density.",
      correctOption: "A",
      answerPicked: "",
    },
    {
      name: "When a wave passes from one medium to another and changes speed, its frequency",
      options: [
        "increases.",
        "decreases.",
        "remains the same.",
        "becomes zero.",
        "doubles.",
      ],
      correctAnswer: "remains the same.",
      correctOption: "C",
      answerPicked: "",
    },
    {
      name: "When light passes from air into water, it",
      options: [
        "bends toward the normal.",
        "bends away from the normal.",
        "does not bend at all.",
        "changes color.",
        "changes speed but not direction.",
      ],
      correctAnswer: "bends toward the normal.",
      correctOption: "A",
      answerPicked: "",
    },
    {
      name: "What is angular velocity in rotational dynamics?",
      options: [
        "Angular velocity measures the linear speed of an object.",
        "Angular velocity is the rate of change of angular displacement.",
        "Angular velocity is the force applied to rotate an object.",
        "Angular velocity measures the mass of a rotating object.",
      ],
      correctAnswer:
        "Angular velocity is the rate of change of angular displacement.",
      correctOption: "B",
      answerPicked: "",
    },
    {
      name: "What is torque in rotational dynamics?",
      options: [
        "Torque is the angular velocity of a rotating object.",
        "Torque is the same as angular displacement.",
        "Torque is the resistance to linear motion.",
        "Torque is the rotational analog of force, causing angular acceleration.",
      ],
      correctAnswer:
        "Torque is the rotational analog of force, causing angular acceleration.",
      correctOption: "D",
      answerPicked: "",
    },
    {
      name: "What is centripetal force?",
      options: [
        "Centripetal force pushes objects away from the center of rotation.",
        "Centripetal force is the force that pulls objects toward the center of circular motion.",
        "Centripetal force is the same as centrifugal force.",
        "Centripetal force only affects objects at rest.",
      ],
      correctAnswer:
        "Centripetal force is the force that pulls objects toward the center of circular motion.",
      correctOption: "B",
      answerPicked: "",
    },
    {
      name: "What is the formula for angular momentum?",
      options: [
        "Angular momentum = mass * velocity",
        "Angular momentum = force * time",
        "Angular momentum = moment of inertia * angular velocity",
        "Angular momentum = torque * distance",
      ],
      correctAnswer: "Angular momentum = moment of inertia * angular velocity",
      correctOption: "C",
      answerPicked: "",
    },
    {
      name: "What is rotational equilibrium?",
      options: [
        "Rotational equilibrium occurs when an object is not rotating at all.",
        "Rotational equilibrium occurs when the net torque on an object is zero.",
        "Rotational equilibrium occurs when an object is rotating at a constant speed.",
        "Rotational equilibrium occurs when an object is spinning uncontrollably.",
      ],
      correctAnswer:
        "Rotational equilibrium occurs when the net torque on an object is zero.",
      correctOption: "B",
      answerPicked: "",
    },
  ];
  





const bio101names = [
  ...reproduction,
  ...ecology,
  ...metamorphosis,
  ...cell,
  ...fruits,
  ...generalname,
  ...biorandname,
  ...cellname,
  ...bryophytename,
]
const bio103names = [
...spirogyraname,
...agaricusname,
  goalSettingQuestions
]

const gns103names = [
  ...libraryname,
  ...libraryname2,
  ...libraryname3,
  ...libraryname4,
  ...libraryname5,
  ...libraryname6,
]

const mts101names = [
  ...mathnames,
  ...setOperationsnames,
]

const gns101Questions = [
...goalSettingQuestions,
...timeManagementQuestions,
  ...languageSkillsQuestions,
  ...listeningSkillsQuestions,
  ...wordFormationQuestions,
  ...capitalizationQuestions,
  ...alphabetismQuestions,
  ...morphemeQuestions,
  ...readingAndNetiquetteQuestions
]
const che103Questions =[
  ...chemistryLabQuestions,
  ...simpleSaltaionsQuestions
]

const che101Questions =[
  ...atomictheoryQuestions,
  ...settheory,
  ...relativemolarmass,
  ...puresubstance,
  ...genche101
]

const phy101Questions =[
...physicsFundamentalQuantitiesQuestions,
...physicsDimensionsQuestions,
...scalarAndVectorQuestions,
...kinematicsCalculationQuestions,
...motionUnderGravityQuestions,
...theoreticalMotionQuestions,
...universalGravitationQuestions,
...momentumQuestions,
...simplePendulumQuestions,
...genphy101Questions  
]
const phy103Questions = [
  ...propertiesOfMatterQuestions,
  ...elasticityQuestions,
  ...hydrostaticsQuestions,
  ...hydrodynamicsQuestions,
  ...hydrodynamicsQuestions,
  ...surfaceTensionQuestions,
  ...heatQuestions,
  ...thermodynamicsQuestions,
  ...kineticTheoryOfGasesQuestions
]

const quizzes = [
  {
    name: "PHY 103",
    id: 7,
    timer: {
        minutes: 15,
        seconds: 10
    },
    imgUrl: "https://assets.ltkcontent.com/images/26593/physics_27c5571306.webp",
    slug: "phy-103",
    description: "FUTA Past Questions",
    author: "Admin",
    questions: [
      ...phy103Questions,
        
    ]
},
  {
    name: "CHE 101",
    id: 1,
    timer: {
        minutes: 15,
        seconds: 10
    },
    imgUrl: "https://www.lastwordonnothing.com/wp-content/uploads/2012/12/ChemistryDraw1.jpg",
    slug: "che-101",
    description: "FUTA Past Questions",
    author: "Admin",
    questions: [
      ...che101Questions,
        
    ]
},
  {
      name: "CHE 103",
      id: 1,
      timer: {
          minutes: 15,
          seconds: 10
      },
      imgUrl: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHCBQVFBcUFRQYFxcXFxoYFxoXGhcbGhoXFxobGBoXGhcbICwkGx0pIRcXJTYlKS4wMzMzGiI5PjkyPSwyMzABCwsLEA4QHhISHjIpIikyNDIyMjIyMjIyNDQyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMv/AABEIAKgBLAMBIgACEQEDEQH/xAAcAAACAgMBAQAAAAAAAAAAAAAEBQMGAAECBwj/xABFEAACAQIEAwYDBQYEBQIHAAABAhEAAwQSITEFQVEGEyJhcYEykaFCUmKxwQcUI3LR8BVDgrIzkqLC4VPSFjRjc4OTo//EABoBAAMBAQEBAAAAAAAAAAAAAAIDBAEFAAb/xAAsEQACAgEDAwMEAQUBAAAAAAAAAQIRAxIhMQRBYRMiUXGBobGRMkLB0eEF/9oADAMBAAIRAxEAPwD0W9uaAxmGW4jIwlWEH3o+5UL6V0oOiGasqnBMQ1t3wdz4k1tk/at8qsPDb+UlDSbtRw1nRb9uBdteJOWYblD1kVNwzGriLSX7e/2hzBG4NVTqcb+efqJVxZC1j91xHdf5N8s1volzd7fkD8Q96aipcXg1xVgoTDaFG5q66o49DQnBb5u2znGW7bY27q/duLv7HQg8wRS9e2/K2YejfbgnrKNGGFdfuoofURuhgtoTS7HcP7y8RnZT3SHTcAO+imRGaTPXKvSnotRtSbGi8L7G2yhbdu27rlktaJuSgAtlixNtohj0yzqQc74CUWg7Ad41tTcXK5EsummpgHKSJiJgkTRHd1uxmKqzLlJUErvlJElZ5xtUoFDqN0kPdeVaNodKnrK9qZ7SiNJGxPzqVLrda0BUWNu5EkSWYhVAyzmbQfEQPmR050MqYSVGYTiZZsrWyoOikhtTrpqo1hSdJG2tMRQmHwaIEAUfw1yKTuF0kT55R8qLQUp12Djfc5daFuLRrCh7go4MySAXSuO7oopWstOUxWkH7us7uiMtZlrdZ7SDZKwpROWsy17We0gxt1yUoorWstapmaQQpXBWiylcMlEpmOIKUrkrRLJUbLRKQDRBFaIqVlrkijsyiI1ldEVo0QJqsrKytPDh3qIxufl/fOuM0ST/AH6aVtWk67cgdPffWoqKLs2qTMjfl+szrVVxVv8AcMWHGmGxLQ45JdPPyDfnVxSI0+lC8U4bbxNt7NyCrDU7kEbEdCDrNbGel78dzzjaN4fwNpsdRS/tDGEu28cB/DfLaxQH3SYt3vVScp8m8hQfZLGORcwN8/x8PoCft2/sOOukVaGwq37Nyxc+F0ZD5SI+lDkemVv7+UwoLaia2VYSNQdo589KlUCqT2D4o6m5w2+f42GJVJkl7c6ERvlka9CtXcgqOkc5HP50jJcXQxbm1t0oxf7xbuXLuVGtKJhQTdZVQwm2p7wtHk23MubSwII28utK2v4gXLjSr20cJkVTn8QtsviAOwuSZ/QkhqdhVsMjaqNrVTEnLPODvG86VwWOWfL9a1TZ5pEDW6HckH3+kUYX0nTaf/EmoLyyPIgHSJ/I0yMhbQPiMUltc7mFkCYJMlgqgAamSahv94qBjcCnvFLQJXIDrbUQSRA1O+50Ggnw9xLmeFPguFTmGmZQJKzuNd/Wu+8tl+7OrKA8ESBr4TPIztWs9QYh5VIKgWpxS2GjT1C1StUdFE8zjLWZa7isiisGiPLWstSxWq9Z6iMrWornE4m3bGa5cVF6uwUfM0ixXbTAW/8APDf/AGwz/UCPrRKMpcKwW0h9FclapWK/aThx/wAO1cc9WyoP1NJ8T+0W+zL3dpEE6ySxM6a7U+PTZH2oFzR6ZlrkivJ73brHHZkUT9lB185pPe4virzEPfuHXbMQAN9hp1py6OfdoxzPbWFRMleCtfuFic7afibflzplw3i+MRh3d24fIksD7GiXSvs/wC2eyMtRsKT8D46bigXVCP1Gx9uVOz1FLcZQdSAUlLggIrgipmFRtRJgs4rK3WqIxhS6nU6fdMEH5/nRKkdfWtIkVIbciYnoInXr6VI2h6Rybg8p6SAQPfntRSLA2JjpuT9Nv0qK1hyNydugEDrpUlhc2sCBpqDPkBmHp86RNoOKZVu2fC7lsW+IYcEXcPrcUCC9iZYEA6kan0mrJwviFu/bt4m2ZS4BPkeYPnOlFnU5Yzaa+IDyIgRIqj8OH+F444Vv/ksWS1knZLnO35a/Qr0Napa40+Vx5XwFVOyP9p2Bexcs8Vw4h7TKl3oy7Lm8jJQ+TL0q6cH4pbxdm3etmVdcwGsq2zIxmJBkEURiLKOrWbqh0uKVYHZlOlI+y3Zk8Oa6iXS9i6S1tTM235j8UpGunwedBKScUnyuPK/4MLGSSROkmd9/aKAtWb3e3GDll7zKyMoVQpyv3isGkkKQg/l2o26+U5ySFWSdogDz1HXTWleDW13jXEuQe8hwM5zLcZu7BB2k3FOaDPh5QaSaN320iYA/rrBj3rh/hmJ0GkzrPqAa6xD6aESTp4suw5H2rLh0JAnQfDr1+dajzISfDOux0iNj9K4HiEac9vIjrXbAZZ10U8iNo5cqgFwBSxYADcyYHz29KYgHyQ3LRa46hioNtc+UkNJLBSDsDAOo18I8ols2Qq5FEKNB853MydzOtL1sLcdm71srubZUM4lcmbIIgo0gmd8oiaJs2Lgb/iSAwOqjMVEaE8zodfxHoKIwPTb+lSio0EafrNS0ISRy1c12a1FbZtHMULjmICkOEGYBiROh0GsiNY1qDinHcNhwTcuKCPsjxN6ZR+teX9veL3MRdyeJbagZUJ0J3LMBoW5eUetMx45SfgGTXB6HjOIYdFYteYkAnS5cAMcgymPrVUuducOQwV8YjDQZGtuD11uAkVRcNi7lv4SR5cvlRV3iX2iobqGAZfYNt7VXHBjS3Yp6hpjMJhr5Nz94uZj/AOsCW97gZgB6LSfiHCRbCkXA4YSCNh6MN/cA+VT2sdaIJa0BAJlCV5aCDI38qOXB2LgOW41tpCqHgpmgGCQJ5nXz2qqFLuC7RXUs1OlsZlESCQD/AKtPpTd8BYUgC61wN91AsROYksToMp5dK4siwHlUd1WCCxA1B0MKBpMQOc8qojNdgJAF6zlUE/e19KJwvDHzuAPiQZSxCg67gsRTIYkm4wVVRVEEgSVCCXYFpM8h7VybVxiWY+Nt9Zjos84/801OxMpNICs8HtqQLl+0uskBmY/9Kx9eZp3ZwmEAhcSgPlp+dVjGWo1pc7GhlFrubp18stOOwLDW3dzDyYUJh+LYmydLjeh1H1qv98451hxT/e+decotUwo42j0XhfbJXhbqwfvLt7g1Zrd1XGZWDA8xXiP701M+G9pLlkyp05jkfap544PeO36NcJI9crVVrhHbDD3YVz3bnr8JPryqxJdBEggjqCIpFNGMehRzGnrp9alVFOse4AOu24FLbfFLbEAPbKyN2G3MxvO/ypit8EArBGwjWNN4Fc6cZLlFMXFk62h94j3YfrUyWzyafcHXrtUWEXSYILcmMkb6/WfepFIdoBIy/h0bXeT6H671NJjopHa4eDOUT1AAOu538zy50p7S8AXGWTacZSIa26zKOvwuAR7ROxNObjgbEAnRQSQDG509a6tklQZ1PQyI96GMnF2gtKexSeG8Yu22XC4tct5R4TulxRpnRufKRuOdWfvNFuE6Bky/zvNuD/8AsFb4twtMShRgQVOa24AzI42dT18tiJB0NIL9i7ew9/COQuIRBEaDvB48PfSfsF0HoVYbinynGcbSp9xai4y8DzvUBYd3cJzd2SEaCIksORTlPXSocOUzLmS4zd5eysUYBQzluvIAAHfTlNa4PjhjcPh78ZDId0IkrcSUe2ZIKlXnUjltRmGwjLkY3AwXvGML8RutnDAyYAk9ZnltSLG0Q2XUW7eVWtrkACsplQNAGkzy+utT3vCNTzA12NFd0sRmI92H61ybBMw0+sHlHSt1IzSwSdJHRoiDz5EelL2xhKkd0VfKkhjbYq76KGhjMb78qbrhisADQeXXfnQz8Ngl87Tmd9k3Zci/ZnwroPrNGpIHSxbZtIYHcNEhCxZDpakgmH2zCCOZOsiYZKozZtp1Ou8jp7VyuW2oXNOUASYkxpJiBNcm4CBBGhPKdNYHlyo6bBC1Gors1Cj1MKFoNGoqr8c40e87q2YC6ORzPMVaYqi8YwmS42YaySPME6GmY3FO2a4tlL4w6tc1XQN8xOtMePcOFzLctmQRII2IP6jX+xUPErBDHw6daN7N3Vi7bb/hSCpM+Fm0PsYBp8s56OIrNzhzAbTQd6wQpkc4q64nBOhMCQdQREGehG9JsRaJkMgAmZFA8yD9JlfsYfNlX79wA/yqJNNrSAWy8f5sj2Qf1FS2MACwCzmIKg/dDfE/ss1Ji1AtBhs2e4o/CTkT5hAaOGagJYmCJrbUD/MZyx/CjZI9PB9KMbD5StuNYD3PWPAvtvReCwwS4AwEWbSZv54zsPdmrpLbE5j8Vxpj12FU48wieI7GGyJP2rrT/pWPzaD6CoLzwGIOohF/nbT6a0xx/wAZA2XKg9V1J+ZI9qAS0S4I2tAt5G4Zyz76+gNVQyEsse4Dj7IhoHht+AR9q5sfZdvnSRsOS2UasdB68z6Cn7x8CAsVEL5tzYnqTz5a+UiCxkBAMu3xNy/lXy/OqYysFe0TYi2uYhdhpPWOdDMlOb1gRQDoJrZQGRkAPbqFlo+4tDulInAYmBEURbvvGlxgOmv9a5ZKks2JE0nS+wTaLG/C33R58qXNxe9YaC7ofJjSL/G7/wB80Nevu4l2J150jL/6MHH2J354PQ6eV+5noHDv2k4i3E3A46OP1q9dmf2kWcSwtP8Aw7jaDmpPkeVfPtWLsNYz4y0OjA/WP1qP1o5nplFb91sNePQm02fTLITGZVMRB8S7T5eZqQAFcuXSMsAjbmNflXODtBUGWToIzfT5kz71l25Jyq4BBgzzJAjcfiB+npC2MS7kllAu2YaaA7Cl3FcKzEXbcG7bnKu2e2Yz2STEZoBB5MqnaRTUqNumv9/WuLRYk5liNiDM78vl868nW4VdisYa+li6b6GMPjBmYkFQmKVdGYH4e8RcrTEPbA+J6sPDyO5txtkQA9RlUSKrvELy28YMGUJt4tHuEgx3VxWHjBPw52yERqHBOpYkH8FxzYhQ/iIHeWmIAVWe1ca2zgZpEm3I6BorWtrPJ9hl3vj1zAyBAOh1I1BHnOhPWp7xgE/iHKenKtd0w+03zB/MV2QSP6ifTah2PbmWoKggz5jSuVBJMiByIMzr51Di7Z7sogjNpIOWATqQfQmoMJbYsHKmDL/ESZYAKMp6KBoebE7140rP7QOLNh8OXG/WNjVF4H271Ac+9MP2w8RGQWwd2OnlmnX5V5Zgd66MZ6IKIjQpNs+iODcZt3QCrAzVgtsCK8c7IDUV6xw74RSMrjyPhANoPibWlts90AookyJ+XmdBR8VVv2gORhQB9q4in01b9BUsslD4QV0UftBxLOf4Q7pI2nMx8ySPoKh4WhSwpYkm67Pr9y2Mo+bGfag8Xh2dltr9ohfnpRuNv+IqvwIFtJ/Ko1PuSTU0s5WsO5i8YezoAHSfgbbzKkfCf7g0zw1+zeUNrbn7LCdfJl5esVW8QhZlETuTTjB4m3bUAeNgAIG3uaH1w/R3D7PDllgrKSVZQQyys6ExPIE1zisHbzjM6BFygKXQHLbACrvzilBVrlxwdAymAOUiTr1kVXsNhMsnL8IPLmKbDOKnhZaXxdhSQ95GLuXfJNyW5L4AYA86IwHEcMzZluF3VSwTI6mRpJLACBPWkFrBzcBA0zj5NB/WiuH4M27400JZfYgx+lVY85PPCMXxADBcpJMmSeZ9uZrvAXBdzWxFs6mJlm6sCdD6ctKixYymen6a0sxkrcDKYIIYEcj1roYs1keTENcTYC+BBCjfqfegnsRrz/IU7sXhdt5gPFHiA69fSgbyRvV+LKQ5MdCPEiNt6WEa08vwSQOW9AvZA5VbGViouhZcSo3t6UUy61y6mJj0rXEamBLZ1BnwjU+o5UZg7PgEVACdEjc/OaJvXjbhB9lQD686BRR6UmUwURdHh/1H6VAu9S3m8Kj1PzNfL46UWdF8ohr0T9juBFzGZiJCrNedGva/2GYLwXbsbnKPb+zW4NtUvhfvYHJwl8s9eIoZsGpYNG3mYJkkE+5PzooVupw2kyG7azAgnRtD6cx76/OucPZyiJkfZGug1gb677+Qofi/EVw9p7rAkKNgCSZMbAE85MAwATVb4f22S8zhTaUK0DO1xSV5MWa2EHPQMaZHFOUW0tkDKcYunyNeN8NY3FxNsr3iI1shlzAozKdPEsEEHnqCfKieEYNbVtfiWJzBsq6kkt4V8IGZmIjTXnpUP7611CsWWB5i4WXRtBohBOg50u41xdbSrZ7hi7HwKsZZn4oBzaTtFFGMpVEGU4xtlkvYpVQsCDAnekxxdxyrB5Q8l3oK1jyRk/eIkQFvIVf2DBCwpBiMMbbEhi3mouAeypm/OqsGBbpvcRkzPai7Y5xcRFhZLT/EQsvh5GPhklRPnsdq7vlLanIVVoAPOYnTX13rzdOOYm07OnejQCGGZGAJ6nTc600XHnEJJOW4dl1E9Z868+j0ytvYOOXUuCpdt+BYvF3GdFBW3Ox39K8+wakNB0IMH1Fe/wCBAVGGg0MzXiHELQXE3QNs515b0GZq7H447F37HjUV6vw74RXlHZHcV6vw34RXPnlt0WqFRsYUNjsGl1DbuLmU/QjYg8jRZFR3HCgsdAAST0A3NBIUmUq52RUXj3TklULQ/wBkvIHiG5jMdulVfiPDhbaM0x05+9ep8OByZmENcJcjoD8K+y5R7GkPF+yxuMWRgsyYYHQnzFRZsctnFFvT51bU2eS8WunNlXwiNQOfqedHcLXUR5CKtdn9nl13zXbiKs7JLEjnEgAU64lwBLFgLYtliD4miXjqP/FLkpqN0U+tj1UndlXTCkuGAMxJHSKHuLYV2V7mSTJCglvEM3kOfWor1x0uKTOjQf79qRdoAwvk8iBPqJB/Sl4pNvkdPHSsuC43CW/HkZ4ygSY20BMc9BzoO9xi2WkWwJJK6n7Imq1afMhtndgSp8xqPyoe3cYFT0BB+Yn6VZjnRJOBdMcguWRcXYwfTXUexkUl4hsp6afKu+FY4rmtsfC0keR5j3/So8fbMMJ8xXQw5SPLj2COFYkoQR6EdR0p1ibYIzLsaqmDuQN9qf8ADcX9g89v79dPlXWw5LOblxgWJtiZiluMOkD+xT7EICTFLLlkGuninaIJKmJQRz0rvEJFtTyzfnt+VTXbYIbTUb+ld2lz28vUgfLnVK3Mcu4BgLcvJ5VmLUF29aJwtvLI/EfkNJpfjLnjNZslubyyqoNa2/L0o/hXB8RiGyWbTOecDb1Ne08G7B2FwiLetTdgZuetfLwxrT7nX2OjOdPbc8GAr6I/ZBg2t4EFlKljOoilOC7F4VLyt3cidjXp9i0qKFUAAaACtyxWKOlO7BhP1HdVRMK6rkV1Ug884/ahYUG3cW8q3CMmRydU1llXMB9ohtNQBqMuqPsVwTPmuMzWzpracANzkqCdNRuDTf8Aanwc5Di7fheFRmAUkLMDQ7glgNNRM8zQnZPs5ktRfwty3cIkuly4hI0iO7bQ118OSunpP9EWSNzLRY4ao0d+887lu2SPdVWk/EOFMzkoqkx4Srumv+h5FOF4XbCgLcxSEfaF+4x//oSKr2L4SXNxRfvI3Ji9h8w/ECJH0oMMvc3YGRKkKMSMZaebrNlmFHePcAPKASWkb+1WLhtmy9tbmIWy7vPjYW1c77uCDIiOumtUpsJcs3IJe4wnVYYBRrrOgG8gzXo/ZnhL27DZnt3VvN3oEZkAZVAC6wRCgyOZNU9W1CK4+2wOFamyr8RwuGV4t3APwB7jD55zUeAuWxcFt2RCQTbAILH3O1EcUwid81u3bsqwGoyQPUa70Vw3gzqiNcYXW1ynkgnYc6XOdQRRjjuEW8E2JlFYrB1I2IrjEdjbfNAfMjX51Z+zGFZLbF4ksYjkNhTO+BXJzTL8ezopnDezqWzokelW7BWMorpEFEotRqO9jsmTajDQOO8RW394y/8AIup+Zyj3NHtQVjxOzR5KfwgkH6ifcV6fwKXyE1usrK8aaIqC6VPhzQd9DDVMXAgE77edB8RRcskAkMkEgSPEvOgm6Rq3YnuYHDPcGa2fEymD9l2E9djIkbTtuSNJ2bw7XH7y2HGhQmdAZBGh6inrWEmcq5twYGkTB9sx+dBYbHFrpQiPiA1H2CFJEecjXpSHCKabQ1ZZ8Jv+QI9ksFmDdwARtDOB8gal/wDhrBaH93tyDO359fenBrRFNUYrse1yfLYvucGwzanD2ievdp/SlvE+yuHuJlVe7YfCyzp5FSdRVhNcmmwdMy2eIcT4Zdwlzu7iwCfCw1V1PNTz9NxUNjE5TB/vka9rx2Ct3kNu4gdTyPI9QdwfMVQO0PYR1/iYUlwN0YjP/pOzfQ+tdLBkomyxEv70SM3Mb+Y61xcvQwYbGlKXHtsUdSrLoVYEH0INSpfBGXkfh8j0rs4MiaOdlxkt05bnkw/Oo8JcyswPLWuLz5kB5r+VQX3khhV8GTuN7BWWLin7wpbxCz/ENHC7mKHppXGIPiNG0nyZG0XvsxgLmGxazCpcBVkBkdQfWRXotuqDjcSe6W5JDqkzzzRQvZ7tndkWrhzHkx3964/UdNPN71V8MZhyqNpnpxjQHmdJ670QtI1x2bIx5GTTgXFH2h865M4OPJdCaZMK3QbY9QY1PpRSNIB60pxa5GJp8FO/aLhsU9pFwrBWLZXBKjOrQuQFtASSNfKm/B+8S1bS4Wa4ttRcbeXAGY6ec1JxVrZZA24YQdwrbqD5kkRO/tXOK4lasqr3Xt21JyhnYL4jyBNPTbgo0Ke0m7GAuCJn5z+tKO8RluEMhJY6jKdtApg9BzqHtVinWwRacW3YAh82WFGpgrPKl2H4hbfCk+HvFRicpBLQp1zL186ZixOtXmhWSauvB5vewVy/eXDpcCi5cPeDlBYAabnfavYuE2BZtW8OhOW3bVFkgkhREnzrz3gGCdrisEHelHbOApefCSddJBI3PM0+unG2mFzOLmUHwshU6/iUkVd1UNcqtC8UtKF/ElFzEXVR+7YeEwgmY3kc6JwXEVst+7uxYqolmmTIpNguPM12411SpLbBTE7CDTjEYZHKuGUlh5TScuyopxLct2Axqd2Mp0obHYokiDSzBYV7UKx0NbZ5YVx88qOniiPsBcmma0r4ctNVpOLgXm/qB8Y8Lpu3hHqef6+1ZYthRAEAR9AB+lJsbxZDfKBgTb0iQPEQCYneAQPc1v8AxoqYZImAAGnXoIEUifUwjJ6nxsFHBNxVLyO451uaTf4y8gd2Pmf6VHd4zcnw2pHU5h9Ipb67Eu/4CXTZH2/I5cToQCOc/wBKGx48B9U/3LS1OL3edsfNp/2iosRxlipVrYG33t5B+7H1oH1uNpq/waunyXx+SwGkyHLf0YQSwYSNzlYQJn7X09a6PELmYAoChKgxJMNIPlyHsaQXxlxVt4I8CqZjkzDSOUZaHJ1EauPyHhwSbafwy5mtVgMiayq7Eo5NaNbNaNEgjmtGtmtGr8LE5EA8S4VZvrlu21foSPEP5WGo9jVS4h+z62ZNq6yfhcZh8xBH1q8muGq2E5R4ZFNI8Z4p2cxmHMtbLr9+34k/1c19wKRXMw0MjpNe+tQOMw1u4Mrorjoygj61di6prlE840eH4W+Q5B56j1H/AI/Ksu4kyda9LxvYvBuZCNbP/wBNiB8mkD2pXc7BWSZF64ByHgMeUxVUepVC3QVxa9Fkr+ECqzgF/ip/NVi7QAC2D1aKR8Ktl7ygb1RjpQJY3TPSbF8MFHOBR6TSbA4ZlMmmS4iOVcnLFXSKccttxngiuaWGn61H2rx963hmbDJ3t0sihQdgzAEzy0oRMT5GpXxE2rrfhRR6sxH6io54qkpP5KY5FpaK1ibF5jmxOFuXEdULd3cJyskEFkzCYPMEelM+FjBhDbBYB9CmIN0jyhbx09qbWLhAotCG3Cn1Ao5z2qv4BjHz/JT+M4EI4azev23EQEzm3A2We7ZQI5TSbtC2MCaWrVwspBbRLgB31JE+gGtWritzAXLi4a6FzvBAkjXlrsPeoeK9mcBZTvXZ7YX7Sv8AIRGu9Ox5FFxtO/oLcW7aqirdmeJrbvIl7vFGTu1I+IFyDOgBIkRzJ9K9HvcOJQlbrEETOjaRpBPKvMsZgLV5rj4V7jm2ihHdiZPjaII0UGTt9o1b+Hdq7Fu2uHckPbRUJOxIA2/Ki6mEpNSjz3QWJxVpiHEcJNy81tb5nc+FR+VTWEZWtI/2bwRTtmULm/SiOzqB8TfvTKwFX8/6UXfTPisOOSs9w+wCj8zSsz7FOIa8dxItqCdIFJcJiwzTNa7dXDAUdQP1pLwhHkVxuoOph4PSeHEQKKxuJFu27nZVJjqeQ9zA96A4ShCiaS9sePJZu4e0/wABbPdjWF1VNOfiJb/8dIUnHG2BKGrJRVR2bxRutcLEliWaDoWYlmkcxJNPsJw66oglh/KzAfIGPpVlwpQorKwZWEhhsQa5u3K5mXE2rbLl1LftUUKP4q7XX9PAf9ymtPjbw/zD7qn/ALaYPcoK8RUGSUocNhwUXzFAx4zfU7qfVf6RQ+M4/eZWEIJG4XX11qe4qnlQGIQEFQjTtMab9Zpcc+RurZVDFh5cQPGcXxEH+K3scv8Atiki424WlnY5SG+I665iPcjXrNP8bgyT4RIjy3nz/vek+IwBV9NuXnpJH51TiyXyylQx6fakj1Ph1zNaU/hFE0j7IYjPhbZO4UA+RAgj5g07rsY3cUfOzVTaMNcmtmuaajEaNaNbNaNXYRWQ0ajau2NRtViIpkTUNcohzQtw0+BNMheoalaoaoiJZRuO4jwqJ86h7MN/FLcwKg7TXMtxU6LPzonsvb8DvG+ldRtaaEVULLjhOIEsRTPDYlToRSfgOB+Jid6e2sKAa5mfQm0huPU0mMrFpCNqB4jcSDbVhJvqpE6+FA5EUYimvJuK8RnH4gZmUuWtW2BIyXBcAS5pqNARI+9UmLG5y54KZOlR6zZtzoKJv2QiM3QE1BgzlADEFo15TG5ihu1GOCYV5MSMs/zGKVTlNRXyHajFs8m7SYljjbjA6qVAPQqB9Zpr2z4s11MPbJ+wHbzaI/rVWsku5JMlmOp1Jk8zTbtJAvIg2S2o/Wu/6cbj4I7adD3slby2bjdZH0A/Wq3iWzXHbq7H5k1aeC+DCMf73J/IVUlpVXOTNgy99jgFwzHmWM/P+gpzgcpvb+IKB85J/SkvZW1GHB6kmmHB74uX7pA0RiJ8wI/Sudmjuy3FIL4thRcmROppbw7DgGIpjjMcqyJG1CcPuhnEczXIzwOnikW3BLCivJP2oI4xsGYZUIP4QuWP+YXPnXr+FXSlXafs3axiAN4XX4HG48iOY8vyqacG4bGwyKGS2eY8BxuLtwLLMVGuX4lPXw7Vb7XGcU3x4SfNWI/MGlGF4fiuH3Mxtm5a5lNRHWN199POr9hr4uIrjZgCPQ1zPTlJuLdfYvy5IbNRT83/AKESYt23wzr7qaxlY/5b/KrCTWg1Kl0alyxS6iuF+ytmy33H/wCU1ExUbkj1Bq0muSopT6FdmMXVvuipti7I3uKPUxSfinFMOIytmYMG8IOy8p89quuL4RZf4kE9RofpXm/azD2bNwhDmAGswYbmARvXo9Lpasqw54zfctP7OcXmS5b+47f9Rz/99XWqN+zTh7rbe+4jvD4B+EADN9Ku5rq41SOb1FPI6MNarK0adBWLMrRrK5Y10MMSbKzRNROa7Y1CxquKI5Mjc0M5qW41DuaogiebI3NR1tjXNPQhsWYnszbukOwloAozDYBLFtlVdK1WUPrSk9Lex5xSCuFKcm3OmtoVlZScr3Y3Hwg61G5rwFH73Gg/fugnnu8mt1lH0f8Ad9v8jMnY9Z4ZxZMTiFARxlV8jhlZHCQr7a6F49p05j9vWJssiauqG646WxmGaDvqD8qyspS9mZUC94P6nmHCtbiSYGYSfeiuLXw+IuMDpmge2n6VlZXdXKZO+S0lsmA9R+Yj/uFU69jFQxBJ8hNZWVLF/wBX1Cj2LvgMeRh7cqURRJ5kx5Cj+xxIw1y6w+MuwPUEkisrKjzpJFGI82xnHLrYi4Q2maB6Cr72IxDXGk8qysrl5e50ccmel2BAqRqysqXsa+SC6oNDmzG1ZWVNOKsZBsWYq7iVPhS249XB/wCkNW0xrAS4RfUuv+5KysqNqh6d7En+J2f/AFrf/On9altYpH+F1b+VgfyrVZWJh6EkaxAYiFG+hmq/Z7FWi+e6S6iMqztG+YjcHpFZWUyONOVg+pKKqJa0QKAAAABAA0AA5AVs1lZTkLNVo1lZVGIyRyTXJNarK6GPgkyHDGoXasrKoiSTBXaoHNZWVREnkQmsrKymi2f/2Q==",
      slug: "che-103",
      description: "FUTA Past Questions",
      author: "Admin",
      questions: [
        ...che103Questions,
          
      ]
  },
  {
      name: "BIO 101",
      id: 1,
      timer: {
          minutes: 10,
          seconds: 10
      },
      imgUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2zISvwY1HTXH5h083_jvOQ_i3dAPsWSfjWDcaly7wDjeqdoOhLv4Nc8GmD-07KzwJ2Ns&usqp=CAU",
      slug: "bio-101",
      description: "FUTA Past Questions",
      author: "Admin",
      questions: [
        ...bio101names,
          
      ]
  },
  {
      name: "GNS 103",
      id: 2,
      timer: {
          minutes: 10,
          seconds: 10
      },
      imgUrl:"data:image/jpeg;base64,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",
      slug: "gns103 names",
      description: "FUTA Past Questions",
      author: "Admin",
      questions: [
          ...gns103names,
      ]
  },

  {
      name: "BIO 103",
      id: 3,
      timer: {
          minutes: 10,
          seconds: 10
      },
      imgUrl:"data:image/jpeg;base64,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",
      slug: "BIO 103 names",
      description: "FUTA Past Questions",
      author: "Admin",
      questions: [
          ...bio103names,
      ]
  },
      {
      name: "MTS 101",
      id: 4,
      timer: {
          minutes: 15,
          seconds: 10
      },
      imgUrl:"data:image/jpeg;base64,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",
      slug: "mts101-question",
      description: "FUTA Past Questions",
      author: "Admin",
      questions: [
          ...mts101names, 
      ]
  },
      {
      name: "GNS 101",
      id: 5,
      timer: {
          minutes:15,
          seconds: 10
      },
      imgUrl: "https://lh3.googleusercontent.com/blogger_img_proxy/AAOd8Mw7tcEx5V6S_j1xuChkX44rdXj_RCF5h6cE-ZTyB16Q4d49pFgkYc7-dxxOLRx7pwxK3IofALwAyqEJpTLcRYaIOajzwoD1qrurXPsM95jHO40VYv1dk3LxNr9lbZo9-4hq5XEm=w1200-h630-p-k-no-nu",
      slug: "gns-101",
      description: "FUTA Past Questions",
      author: "Admin",
      questions: [
          ...gns101Questions
      ]
  },
 /* {
    name: "PHY 101",
    id: 8,
    timer: {
        minutes:15,
        seconds: 10
    },
    imgUrl: "data:image/jpeg;base64,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",
    slug: "phy-101",
    description: "FUTA Past Questions",
    author: "Admin",
    questions: [
        ...phy101Questions
    ]
}, */
];

const tests = [...quizzes];

export default tests;
