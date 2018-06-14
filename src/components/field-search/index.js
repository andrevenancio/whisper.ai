import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import './style.scss';

class FieldSearch extends PureComponent {

    static propTypes = {
        api: PropTypes.string.isRequired,
    }

    state = {
        data: [],
    }

    async handleAPISearch(value, count = 5) {
        const response = await fetch(`${this.props.api}?key=${value}&count=${count}`);
        const json = await response.json();

        this.setState({
            data: json.data,
        });
    }

    handleInputChange = () => {
        const query = this.search.value;
        if (query === '') {
            this.setState({
                data: [],
            });
        } else {
            this.handleAPISearch(this.search.value);
        }
    }

    render() {
        return (
            <div className="field-search">
                <input
                    placeholder="search for username"
                    ref={(e) => { this.search = e; }}
                    onChange={this.handleInputChange}
                />

                <div className="field-search__suggestions">
                    {this.state.data.map((result, index) => {
                        return (
                            <div key={`result-${index}`} className="field-search__suggestions__person">
                                <img alt="" src={result.profile_image_url_https} />
                                <p>{`@${result.screen_name}`}</p>
                            </div>
                        );
                    })}
                </div>
            </div>
        );
    }
}

export default FieldSearch;
