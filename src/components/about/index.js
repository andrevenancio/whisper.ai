/* eslint-disable max-len, camelcase */
import React, { PureComponent } from 'react';

class About extends PureComponent {

    handleSearch = () => {
        // https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
        // https://www.codementor.io/wapjude/creating-a-simple-rest-api-with-expressjs-in-5min-bbtmk51mq
        // https://dzone.com/articles/how-to-use-twitter-api-using-nodejs
        const options = {
            credentials: 'same-origin',
        };

        fetch('/api/search', options)
            .then((e) => {
                console.log('server OK', e);
            })
            .catch((e) => {
                console.warn(e);
            });
    }

    render() {
        return (
            <span>
                <h1>About</h1>
                <button onClick={this.handleSearch}>Search</button>
            </span>
        );
    }
}

export default About;
