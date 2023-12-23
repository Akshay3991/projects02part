var quotes = ['Hungry?', 'Movie Marathon?', 'Late night at office?', 'Unexpected guests?', 'Cooking gone wrong?']
function randomQuotes() {
var idx = Math.floor(Math.random() * quotes.length)
document.getElementById('quote').innerHTML = quotes[idx]
}