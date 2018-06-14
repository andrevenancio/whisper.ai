import React, { PureComponent } from 'react';

import './style.scss';

class TestAPI extends PureComponent {

    handleSearch = async () => {
        const key = 'andrevenancio';
        const res = await fetch(`//localhost:8081/api/search?key=${key}&count=1`)
            .then((response) => {
                return response.json();
            });
        console.log('response', res.data);
        this.showServerResponse(res);
    }

    showServerResponse(response) {
        const pretty = JSON.stringify(response, undefined, 4);
        this.response.value = pretty;
    }

    render() {
        return (
            <div className="page-test-api">
                <div className="methods">
                    <button onClick={this.handleSearch}>Search</button>
                </div>
                <textarea
                    ref={(e) => { this.response = e; }}
                    className="response"
                    disabled
                />
            </div>
        );
    }
}

export default TestAPI;
