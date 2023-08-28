//Creating an array of questions for the quiz
const bio103Questions = [
  //Question 1
  {
    //Start with the question name. Can be as long as possible
    name: "What is BIO103?",
    
    //The question options can be as many or as few as you prefer.
    options: [
      "A virus from the multiverse",
      "A Futarian course for 100Level",
      "A variant of corona virus",
      "An artificially generated fungi organism",
    ],

    //The correct Answer must be completely equal to the correct answer in the questions you added above
    correctAnswer: "A Futarian course for 100Level",

    //This field was made for reference but isn't usually useful, yet put it so it will be easier for me to fix bugs when I console.log()... Abeg
    correctOption: "B",

    //Whatever you do dont forget to add this field. Its important and I can't explain it further
    answerPicked: "",

    //More fields

    //The media fields contain the image that comes with the question and can help with diagram based questions. I will explain more about this in person
    media: {
      //This is the media type and should be set to 'image'
      type: "image",
     
      //This is the image name and should be set to the image name 
      name: "Bio103",

      //This is the most important field here. It is the image Url and should be a link. Not an image inside the project folders
      imgUrl: ""
    }
  },
]


//This is the quizzes array that will contain all our quizzes and their information
const quizzes = [
  //Quiz 1
  {
    //The quiz name should not include ('result or summary')
    name: "Bio 103",

    //The quiz id is not necessary anymore but sha put it
    id: 2,

    //The timer information: minutes and seconds. I dont think there should be any quiz as long as an hour. That becomes weird
    timer: {
      minutes: 30,
      seconds: 0,
    },

    //The imgUrl of the quiz. Is the quiz image. Please add it
    imgUrl: "",

    //Very important. The quiz slug is used to create the link of the quiz and must be unique for every quiz
    slug: "bio-103",
    
    //Make this empty or add very little content
    description: "",

    //Just for bug fixing and future use you can add the quiz authors name or brand. Or the origin of the quiz like '+++' or 'jamb' or 'waec'
    author: "Admin",
    
    // The questions array includes the questions. To make this easier I decided that we should add the questions in different consts (a datatype in javascript like var in python). So you will use this format to add it into the quiz. you'll add three dots and the quiz questions name inside like (...bio103Questions)
    questions: [
      ...bio103Questions
      //Just like that 👍
    ],
  }
]

//Dont touch this
const tests = [...quizzes];

//Don't tpuch this
export default tests;


//In the future or later I'll create a different website for creating questions and then it will save as javascript code that can be copied and pasted in the folder. When you read this part tell me thank you and buy somethig for me. Because e no easy