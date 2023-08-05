const quotes = [
  {
    quote:"Der Ball ist rund und ein Spiel dauert 90 Minuten.",
    author:"Sepp Herberger"
  },
  {
    quote:"Der Starke gewinnt nicht, derjenige der gewinnt ist stark.",
    author:"Franz Beckenbauer"
  },
  {
    quote:"Losers complain, winners train.",
    author:"José Mourinho"
  },
  {
    quote:"If you do not believe you can do it then you have no chance at all",
    author:"Arsene Wenger"
  },
  {
    quote:"Football is played with your head. Your feet are just the tools.",
    author:"Andrea Pirlo"
  },
  {
    quote:"If I had to make a tackle, I have already made a mistake.",
    author:"Paolo Maldini"
  },
  {
    quote:"Form is Temporary, Class is Permanent.",
    author:"Bill Shankly"
  },
  {
    quote:"This club has been my life. I'd go out and sweep the street and be proud to do it for Liverpool FC if they asked me to.",
    author:"Bob Paisley,"
  },
  {
    quote:"It's not so important what people think when you come in. It's much more important what they think when you leave.",
    author:"Jürgen Klopp"
  },
  {
    quote:"When I die, don't bring me to the hospital. Bring me to Anfield. I was born there and will die there.",
    author:"Steven Gerrard"
  },

]

const quote = document.querySelector("#quotes span:first-child");
const author = document.querySelector("#quotes span:last-child");
const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];
quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;