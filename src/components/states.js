import React from 'react';
import { Grid, Dropdown } from 'semantic-ui-react';

const States = ({ states, onStateChange }) => (
    <Grid centered>
        <Grid.Column mobile={16} tablet={8} computer={4}>
            <Dropdown
                placeholder='States'
                fluid search selection options={states}
                onChange={onStateChange}
            />
        </Grid.Column>
    </Grid>
)

export default States;