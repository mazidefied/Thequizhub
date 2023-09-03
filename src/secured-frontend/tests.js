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
      correctAnswer: "Pipette, burette, beakers, conical flask, measuring cylinder, volumetric flask",
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
    ...chemistryLabQuestions
  ]
  
  const quizzes = [
    {
        name: "CHE 103",
        id: 1,
        timer: {
            minutes: 10,
            seconds: 10
        },
        imgUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2zISvwY1HTXH5h083_jvOQ_i3dAPsWSfjWDcaly7wDjeqdoOhLv4Nc8GmD-07KzwJ2Ns&usqp=CAU",
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
  ]
  
  const tests = [...quizzes];
  
  export default tests;
