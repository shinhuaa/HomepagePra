const imges = [
  "0.jpeg",
  "1.jpeg",
  "2.jpeg",
  "3.jpeg",
  "4.jpeg",
  "5.jpeg",
  "6.jpeg",
  "7.jpeg",
  "8.jpeg"
]

const cnt =  imges[Math.floor(Math.random() * imges.length)];
document.body.style.backgroundImage = "url("+`img/${cnt}`+")"
