const Twit = require('twit');
const config = require('../api/config.js');

const T = new Twit(config);

const tweet = {
    status: 'hello world!! #messagefrombot',
};

function tweeted(err) {
    if (err) {
        console.log('Something went wrong!');
    } else {
        console.log('Voila It worked!');
    }
}
T.post('statuses/update', tweet, tweeted);
