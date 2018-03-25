import React from 'react';
import { Grid, Image, Dropdown } from 'semantic-ui-react';

const Cities = ({ cities, onCityChange }) => (
    <Grid centered>
        <Grid.Column mobile={16} tablet={8} computer={4}>
            <Dropdown
                placeholder='Cities'
                fluid search selection options={cities}
                onChange={onCityChange}
            />
        </Grid.Column>
    </Grid>
)

export default Cities;