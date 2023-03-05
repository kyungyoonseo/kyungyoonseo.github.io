const quotes = [
    {
        quote:"As we work to secure our data and communications from hackers, we must recognize that our citizens face a far broader array of threats.",
        author:"William Barr",
    },
    {
        quote:"Doing linear scans over an associative array is like trying to club someone to death with a loaded Uzi.",
        author:"Larry Wall",
    },
    {
        quote:"The San Gabriel Valley, stretching from Pasadena to Pomona, is especially starved for open space. The valley has a rich array of ethnically diverse communities, but it also has some of the highest rates of childhood obesity and diabetes in the state.",
        author:"Frances Beinecke",
    },
    {
        quote:"My character is very multi-faceted, very powerful, she can get in the ring and do an array of things but I like to use my YouTube channel to show other elements of myself that I feel I many not be able to show in the ring.",
        author:"Bianca Belair",
    },
    {
        quote:"For every Tesla or Uber, there's a Valeant Pharmaceuticals or Theranos - two story stocks that seduced an astounding array of prominent investors and supporters based on stories that did turn out to be too good to be true.",
        author:"James B.Stewart",
    },
    {
        quote:"In the future, I expect to see bitcoin mining in places where electricity is free or cheap. You could put solar array in the Arizona desert attached to bitcoin miners, and instead of trying to ship that electricity all over world, you could ship Bitcoin all over the world.",
        author:"Gavin Andresen",
    },
    {
        quote:"Stupidity, outrage, vanity, cruelty, iniquity, bad faith, falsehood - we fail to see the whole array when it is facing in the same direction as we.",
        author:"Jean Rostand",
    },
    {
        quote:"The Internet has given us 10 or 15 new styles of communication: long messages like blogging, and then short messages like texting and tweeting. I see it all as part of an expanding array of linguistic possibilities.",
        author:"David Crystal",
    },
    {
        quote:"Those of us raised in modern cities tend to notice horizontal and vertical lines more quickly than lines at other orientations. In contrast, people raised in nomadic tribes do a better job noticing lines skewed at intermediate angles, since Mother Nature tends to work with a wider array of lines than most architects.",
        author:"Sam Kean",
    },
    {
        quote:"SKY is different",
        author:"sky",
    },
]

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");
const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)]
// console.log(todaysQuote);
quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;