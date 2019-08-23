import { gql } from 'apollo-boost';

import countriesList from './countriesList';
import getSingleCountry from './getSingleCountry';

export const countriesListQuery = gql(countriesList);
export const getSingleCountryQuery = code => gql(getSingleCountry(code));
