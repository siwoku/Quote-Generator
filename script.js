//An array objects containing the quote, source ,citation and year
var quotes = [
        {
            	quote : "I love you the more in that I believe you had liked me for my own sake and for nothing else .",
            	source : "John Keats",
          		citation : "",
          		year : 1998,
        },
        {
            	quote : "I love you the more in that I believe you had liked me for my own sake and for nothing else .But man is not made for defeat. A man can be destroyed but not defeated",
            	source: "Ernest Hemingway",
          		citation : "",
          		year : 2002,
        },
    	{
          		quote: "Start by doing what's necessary; then do what's possible; and suddenly you are doing the impossible.",
          		source:"Francis of Assisi",
          		citation : "",
          		year :""
    	 },
    	 {
    	    	quote:"Believe you can and you're halfway there.",
          	source:"Theodore Roosevelt",
        		citation : "",
        		year : ""
	 },
	 {
    	    	quote:"It does not matter how slowly you go as long as you do not stop.",
    	    	source:"Confucius",
        		citation : "Medium",
        		year : 2004,
	  },
	  {
      	    	quote:"Our greatest weakness lies in giving up. The most certain way to succeed is always to try just one more time.",
      	    	source:"Thomas A. Edison",
          		citation : "",
          		year : 2006,
	  },
	  {
    	    	quote:"The will to win, the desire to succeed, the urge to reach your full potential... these are the keys that will unlock the door to personal excellence.",
    	    	source:"Confucius",
        		citation : "",
        		year : 2010,
	  },
	  {
    	    	quote:"Don't watch the clock; do what it does. Keep going.",
    	    	source:"Sam Levenson",
        		citation : "",
        		year : 2001,
	  },
	  {
    	    	quote:"A creative man is motivated by the desire to achieve, not by the desire to beat others.",
    	    	source:"Ayn Rand",
        		citation : "",
        		year : ""
	  },
	  {
    	    	quote:"A creative man is motivated by the desire to achieve, not by the desire to beat others.",
    	    	source:"Ayn Rand",
        		citation : "",
        		year: ""
    },
	  {
	    	quote:"Expect problems and eat them for breakfast.",
	    	source:"Alfred A. Montapert",
    		citation : "r",
    		year : 2006,
	  },
	  {
	    	quote:"Start where you are. Use what you have. Do what you can.",
	    	source:"Arthur Ashe",
    		citation : "",
    		year : "1905-2005",
	  },
	  {
	    	quote:"Ever tried. Ever failed. No matter. Try Again. Fail again. Fail better.",
	    	source:"Samuel Beckett",
    		citation : "",
    		year : 2010,
	  },
	  {
	    	quote:"Be yourself; everyone else is already taken.",
	    	source:"Oscar Wilde",
    		citation : "",
    		year : 2000,
	  },
	  {
	    	quote:"Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.",
	    	source:"Albert Einstein",
    		citation : "",
    		year :""
	  },
	  {
	    	quote:"Always remember that you are absolutely unique. Just like everyone else.",
	      source:"Margaret Mead",
        citation : "",
    		year : 2007,
	  },
	  {
	    	quote:"Do not take life too seriously. You will never get out of it alive.",
	    	source:"Elbert Hubbard",
        citation : "",
    		year : 2008,
	  },
	  {
	    	quote:"People who think they know everything are a great annoyance to those of us who do.",
	    	source:"Isaac Asimov",
        citation : "",
    		year : 1996,
	  },
	  {
	    	quote:"Procrastination is the art of keeping up with yesterday.",
	    	source:"Don Marquis",
        citation : "",
    		year : 2006,
	  },
	  {
	    	quote:"Get your facts first, then you can distort them as you please.",
	    	source:"Mark Twain",
        citation : "",
        year : 2006,
	  },
	  {
	    	quote:"A day without sunshine is like, you know, night.",
	    	source:"Steve Martin",
        citation : "Instagram",
    		year : 2006,
	  },
	  {
	    	quote:"My grandmother started walking five miles a day when she was sixty. She's ninety-seven now, and we don't know where the hell she is.",
	    	source:"Ellen DeGeneres",
        citation : "",
    		year : 2006,
	  },
	  {
	    	quote:"Don't sweat the petty things and don't pet the sweaty things.",
	    	source:"George Carlin",
        citation : "",
        year : 2006,
	  },
	  {
	    	quote:"Always do whatever's next.",
	    	source:"George Carlin",
        citation : "",
        year : 2006,
	  },
	  {
	    	quote:"Atheism is a non-prophet organization.",
	    	source:"George Carlin",
        citation : "",
        year : 2006,
	  },
	  {
	    	quote:"Hapiness is not something ready made. It comes from your own actions.",
	    	source:"Dalai Lama",
        citation : "",
        year : 2008,
	  }


];
// An array of colors which is used the random background color
 	var colors = [
			'#490A3D',
			'#BD1550',
			'#E97F02',
			'#F8CA00',
			'#8A9B0F',
			'#69D2E7',
			'#FA6900',
			'#16a085',
			'#27ae60',
			'#2c3e50',
			'#f39c12',
			'#e74c3c',
			'#9b59b6',
			'#FB6964',
			'#342224',
			'#472E32',
			'#77B1A9',
			'#73A857'
		];



let sourceEL;
let quoteEl;
var message;
var buttonEl = document.querySelector("button")
var bodyEl = document.querySelector("body")
//This function print the quotes to the page
function printQuote(message){
    const outputDiv= document.querySelector(".output")
    outputDiv.innerHTML = message
}
// An event listener which allows the code to cycle through the quote arrays and pickone to display.
buttonEl.addEventListener("click", function getRandomQuote(){
    var randomNUmber = Math.floor(Math.random() * quotes.length)
		sourceEL = quotes[randomNUmber].source;
		quoteEl = quotes[randomNUmber].quote;
    citations = quotes[randomNUmber].citation;
    years = quotes[randomNUmber].year;
//for loops that iterate through the different values present in the colors
    for(let i = 0; i <colors.length; i++){
      var randomColor = Math.floor(Math.random() * colors.length);
        bodyEl.style.backgroundColor= colors[randomColor]
    }
	message = `<p class="quote">   ${quoteEl} </p>
                 <p class="source"> ${sourceEL} <span class="citation"> ${citations} </span> <span class="year">${years}</span></p> </p>`;
//the function printQuote calls the getRandomQuote function
  printQuote(message)




})
