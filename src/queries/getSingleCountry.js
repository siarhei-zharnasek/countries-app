export default (code = '') => `
    {
        country(code: "${code.toUpperCase()}") {
            name
            native
            currency
            phone
        }
    }
`;
