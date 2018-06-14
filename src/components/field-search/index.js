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

    handleAPISearch = async (value, count = 5) => {
        const res = await fetch(`${this.props.api}?key=${value}&count=${count}`)
            .then((response) => {
                return response.json();
            });
        this.setState({
            data: res.data,
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
            <div>
                <input
                    placeholder="Search for..."
                    ref={(e) => { this.search = e; }}
                    onChange={this.handleInputChange}
                />
                {this.state.data.map((result, index) => {
                    return (
                        <div key={`result-${index}`}>
                            <img alt="" src={result.profile_image_url_https} />
                            <p>{`@${result.screen_name}`}</p>
                        </div>
                    );
                })}
            </div>
        );
    }
}

export default FieldSearch;
