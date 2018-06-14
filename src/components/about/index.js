/* eslint-disable max-len, camelcase */
/* global Headers */
import React, { PureComponent } from 'react';

class About extends PureComponent {

    handleSearch = () => {
        // https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
        // https://www.codementor.io/wapjude/creating-a-simple-rest-api-with-expressjs-in-5min-bbtmk51mq
        // https://dzone.com/articles/how-to-use-twitter-api-using-nodejs
        // const options = {
        //     // credentials: 'same-origin',
        //     credentials: 'omit',
        //     // method: 'GET', // *GET, POST, PUT, DELETE, etc.
        //     mode: 'no-cors', // no-cors, cors, *same-origin
        // };
        //
        // // const response = await fetch('//localhost:8081/api/search', options);
        // // console.log(response);
        // const response = yield fetch('./config.json');
        // const json = yield response.json();

            // .then((e) => {
            //     console.log('server OK', e.json());
            //     // return e.json();
            // })
            // .catch((e) => {
            //     console.warn(e);
            // });
    }

    handleSearch = async () => {

        const options = {
            // method: 'GET',
            mode: 'cors',
            // redirect: 'follow',
            headers: new Headers({
                'Content-Type': 'application/json',
            }),
        };

        const res = await fetch('//localhost:8081/api/search', options)
            .then((response) => {
                return response.json();
            });
        console.log('API', res);
    }

    render() {
        return (
            <span>
                <button onClick={this.handleSearch}>Search</button>
            </span>
        );
    }
}

export default About;
