const names = [ 'Joe', 'Gavin', 'Mike', 'Ashley', 'Steve', 'Sherry', 'Vince', 'Hal'];
const places = ['store', 'bowling alley', 'pizza spot', 'driving range', 'bar'];
const activity = ['hang with friends', 'think about life', 'release some gas', 'dive into the dumpsters', 'dance all night']

const randomizer = (arr) => arr[(Math.floor(Math.random()*arr.length))];

const randomMessage = () => {
    let message = `${randomizer(names)} went to a ${randomizer(places)} to ${randomizer(activity)}.`
    console.log(message);
}

randomMessage();