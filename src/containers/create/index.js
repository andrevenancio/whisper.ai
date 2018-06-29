import React, { PureComponent } from 'react';
import { FieldSearchComponent } from '../../components';
import { SEARCH } from '../../constants';

class Create extends PureComponent {

    render() {
        return (
            <span>
                <h1>Create</h1>
                <p>create your tweet here</p>
                <FieldSearchComponent
                    api={SEARCH}
                />
            </span>
        );
    }
}

export default Create;
