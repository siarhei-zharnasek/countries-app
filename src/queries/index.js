import { gql } from 'apollo-boost';

import countriesList from './countriesList';
import getSingleCountry from './getSingleCountry';
import countriesNames from './countriesNames';

export const countriesListQuery = gql(countriesList);
export const getSingleCountryQuery = code => gql(getSingleCountry(code));
export const countriesNamesQuery = gql(countriesNames);
