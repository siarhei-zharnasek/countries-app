import { gql } from 'apollo-boost';

import countries from './countries';

export const countriesQuery = gql(countries);
