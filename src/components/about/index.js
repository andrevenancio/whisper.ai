import React, { PureComponent } from 'react';
import FieldSearch from '../field-search';
import { SEARCH } from '../../constants';

class About extends PureComponent {

    render() {
        return (
            <span>
                <FieldSearch
                    api={SEARCH}
                />
            </span>
        );
    }
}

export default About;
