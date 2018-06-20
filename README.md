# whisper.ai
Chinese whispers through AI

<a href="https://github.com/andrevenancio/whisper.ai/blob/master/LICENSE"><img src="https://img.shields.io/github/license/mashape/apistatus.svg" alt="licence"/></a>
<a href="https://travis-ci.org/andrevenancio/whisper.ai"><img src="https://travis-ci.org/andrevenancio/whisper.ai.svg" alt="Travis Status"></a>
<a href="https://david-dm.org/andrevenancio/whisper.ai"><img src="https://david-dm.org/andrevenancio/whisper.ai.svg" alt="Dependency Status"></a>
<a href="https://david-dm.org/andrevenancio/whisper.ai/?type=dev"><img src="https://david-dm.org/andrevenancio/whisper.ai/dev-status.svg" alt="devDependency Status"></a>

## Stack
|   Tech    |   Description |
| ----------| ------------- |
| [React](https://reactjs.org/) | Frontend code
| [Firebase](https://console.firebase.google.com/project/whispers-84708/overview) | User / Database management
| [Tensorflow.js](https://js.tensorflow.org/) | AI Logic used for Bots
| [Twitter API](https://apps.twitter.com/app/15327840/show) | Username search, Bot message dispatch

## Development
`npm start`

## Production
`npm run build && node server/production.js`



## TODO
|   task    |   status |
| ----------| ------------- |
| setup project | done |
| connect store | done |
| integrate with firebase login | done |
| create REST Api to call Twitter API (search, post tweet, retrieve tween) | done |
| save into firebase DB | |
| look into tensorflow.js | |
| hire a designer | |
| implement layout | |
| test | |
| advertise | |
| submit to awards | |


## Research later
andrevenancio [14:02]
 hey dude
sorry about the long delay
well I want to make an experiment
where I give the a text to tensorflow (or other)
then I get a similar text back
you know chinese whispers? I tell you something then u change it slightly and u tell the next one etc etc
so basically I'm setting up a network of bots
hoping to give each ones personalities
and I tweet a message to the first bot
then that bot tweets to another one
and so on
until it reaches the last person
and hopefully along the way the bots distorted the original message in a funny way
this is the gist of it
now, I never worked with neural networks before
so happy to get some advice on how to achieve this

arnaudbenard [23:20]
 one way you could achieve that is with a sequence model
basically you have an encoder decoder model that tries to predict the next word
and instead of taking the candidate with the highest probability during inference, you can take the 2nd or 3rd one
that will change the output the way you want to (edited)
https://www.tensorflow.org/tutorials/seq2seq
https://blog.keras.io/a-ten-minute-introduction-to-sequence-to-sequence-learning-in-keras.html
the only tweak you need to do is during inference, you can keep the same training
you should use keras (second link)
let me know if you need help :wink:

andrevenancio [23:58]
 cool man. I'm going to share a doc with you I think explains a bit better what I want
https://docs.google.com/document/d/17D3urOdjLIs7uFKT7A9ay1ZZjPF0ijRADzlVxa-NqwE/edit?usp=sharing
 dont share it :slightly_smiling_face:
At the moment I'm focused on the other bits of the site, like login and writting a REST Api to connect to the Twitter api's
 but when I'm ready to go through the tensorflow bits I'll annoy you again for some tips. will save this links for (hopefully) 2 or 3 weeks
I'm doing this on my spare time :slightly_smiling_face:
