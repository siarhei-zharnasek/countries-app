export default `
    {
        countries {
            name
            native
            code
            currency
            phone
            continent {
                name
                code
            }
            languages {
                code
                name
                native
            }
        }
    }
`;
