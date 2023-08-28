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
  const generalQuestions = [
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
  
  const biorandQuestions = [
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
  
  const cellQuestions = [
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
  const bryophyteQuestions = [
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


  const libraryQuestions = [
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
  
  const libraryQuestions2 = [
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
  
  const libraryQuestions3 = [
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
  const libraryQuestions4 = [
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
  
  
  const libraryQuestions5 = [
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
  
  const libraryQuestions6 = [
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
  
  const spirogyraQuestions = [
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

  const agaricusQuestions = [
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

  
const bio101Questions = [
    ...reproduction,
    ...ecology,
    ...metamorphosis,
    ...cell,
    ...fruits,
    ...generalQuestions,
    ...biorandQuestions,
    ...cellQuestions,
    ...bryophyteQuestions,
]
const bio103Questions = [
  ...spirogyraQuestions,
  ...agaricusQuestions
]

const gns103Questions = [
    ...libraryQuestions,
    ...libraryQuestions2,
    ...libraryQuestions3,
    ...libraryQuestions4,
    ...libraryQuestions5,
    ...libraryQuestions6,
]
const quizzes = [
    {
        name: "BIO 101",
        id: 1,
        timer: {
            minutes: 10,
            seconds: 10
        },
        imgUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2zISvwY1HTXH5h083_jvOQ_i3dAPsWSfjWDcaly7wDjeqdoOhLv4Nc8GmD-07KzwJ2Ns&usqp=CAU",
        slug: "bio-101",
        description: "FUTA +++",
        author: "Admin",
        questions: [
          ...bio101Questions,
        ]
    },
    {
        name: "GNS 103",
        id: 1,
        timer: {
            minutes: 10,
            seconds: 10
        },
        imgUrl:"https://school.vssc.gov.in/assets/img/slide/slide-2_large.jpg",
        slug: "gns103 Questions",
        description: "FUTA +++",
        author: "Admin",
        questions: [
            ...gns103Questions,
        ]
    },

    {
        name: "BIO 103",
        id: 1,
        timer: {
            minutes: 10,
            seconds: 10
        },
        imgUrl:"https://uploads-ssl.webflow.com/641838eb21b44b70940d5d9c/646df2b8b7ef6a9c19f85af4_How%20to%20Prepare%20for%20a%20Biology%20Practical%20Exam.jpg",
        slug: "BIO 103 Questions",
        description: "FUTA +++",
        author: "Admin",
        questions: [
            ...bio103Questions,
        ]
    },
]

const tests = [...quizzes];

export default tests;
