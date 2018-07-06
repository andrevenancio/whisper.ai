/* eslint-disable max-len */
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import Verified from './verified';
import './style.scss';

const MAX_VALUES = 6;

export class FieldSearchComponent extends PureComponent {

    static propTypes = {
        api: PropTypes.string.isRequired,
    }

    state = {
        highlight: -1,
        show: false, // show/hide options
        data: [], // options to display
    }

    componentDidMount() {
        this.search.addEventListener('focus', this.handleFocus, false);
        this.search.addEventListener('blur', this.handleBlur, false);
    }

    componentWillUnmount() {
        this.search.removeEventListener('focus', this.handleFocus, false);
        this.search.removeEventListener('blur', this.handleBlur, false);

        global.removeEventListener('keyup', this.handleKeyUp, false);

        if (this.timeout) {
            clearTimeout(this.timeout);
            this.timeout = null;
        }
    }

    async handleAPISearch(value, count) {
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
            this.handleAPISearch(this.search.value, MAX_VALUES);
        }
    }

    handleFocus = () => {
        this.setState({
            show: true,
        });
        global.addEventListener('keyup', this.handleKeyUp, false);
    }

    handleBlur = () => {
        this.timeout = setTimeout(() => {
            this.setState({
                show: false,
            });
        }, 100);
        global.removeEventListener('keyup', this.handleKeyUp, false);
    }

    handleKeyUp = (e) => {
        const { highlight } = this.state;
        let next = highlight;
        switch (e.keyCode) {
        case 38:
            // going up
            if (highlight > 0) {
                next--;
            }
            break;
        case 40:
            // going down;
            if (highlight < MAX_VALUES - 1) {
                next++;
            }
            break;
        case 13:
            this.selectItem(highlight);
            return;
        default:
            break;
        }

        this.selectHighlight(next);
    }

    selectHighlight(target) {
        const { highlight } = this.state;
        if (highlight !== target) {
            this.setState({
                highlight: target,
            });
        }
    }

    selectItem = (index) => {
        this.search.value = `@${this.state.data[index].screen_name}`;
        this.search.blur();
    }

    render() {
        return (
            <div className="field-search">
                <input
                    placeholder="search for username"
                    ref={(e) => { this.search = e; }}
                    onChange={this.handleInputChange}
                />

                { this.state.show &&
                    <div className="field-search__suggestions">
                        {this.state.data.map((result, index) => {
                            const {
                                name,
                                verified,
                                profile_image_url_https,
                            } = result;

                            const classes = classnames({
                                'field-search__suggestions__item': true,
                                selected: this.state.highlight === index,
                            });

                            return (
                                <button
                                    key={`result-${index}`}
                                    className={classes}
                                    onClick={() => { this.selectItem(index); }}
                                    onMouseOver={() => { this.selectHighlight(index); }}
                                >
                                    <img alt="" src={profile_image_url_https} />
                                    <p>
                                        <span>
                                            {name}
                                            { verified &&
                                                <sup><Verified /></sup>
                                            }
                                        </span>
                                        &nbsp;
                                        {`@${result.screen_name}`}
                                    </p>
                                </button>
                            );
                        })}
                    </div>
                }
            </div>
        );
    }
}
