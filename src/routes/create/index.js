import React, { PureComponent } from 'react';
import FieldSearch from '../../components/field-search';
import { SEARCH } from '../../constants';

class Create extends PureComponent {

    render() {
        return (
            <span>
                <h1>Create</h1>
                <p>create your tweet here</p>
                <FieldSearch
                    api={SEARCH}
                />
            </span>
        );
    }
}

export default Create;
