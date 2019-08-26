import React  from 'react';
import styled from 'styled-components';

// components
import Link from '../Link';
import Tooltip from '../Tooltip';

// utils
import routes from '../../utils/routes';

const StyledCountry = styled(Link)`
    display: flex;
    flex-direction: column;
    border: 1px solid #e2e2e2;
    border-radius: 4px;
    padding: 6px 14px;
    cursor: pointer;
    margin-right: 5px;
    margin-bottom: 5px;
    color: #4a4a4a;
`;
const StyledTitle = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;
const StyledName = styled.span`
    margin-right: 5px;
    font-weight: 500;
`;
const StyledNativeName = styled.span`
    font-weight: 100;
`;
const StyledContent = styled.div`
    display: flex;
    align-items: center;
    flex-wrap: wrap;
`;
const StyledLanguage = styled.span`
    margin-right: 10px;
    font-size: 14px;
`;
const StyledTooltip = styled.div`
    margin-left: 10px;
    font-style: italic;
    font-size: 14px;
`;

const Country = ({ name, native, languages = [], continent, code }) => (
    <StyledCountry to={`${routes.countries}/${code}`}>
        <StyledTitle>
            <div>
                <StyledName>{name}</StyledName>
                <StyledNativeName>({native})</StyledNativeName>
            </div>
            <StyledTooltip>
                <Tooltip tooltipContent={continent.name}>
                    {continent.code}
                </Tooltip>
            </StyledTooltip>
        </StyledTitle>
        <StyledContent>
            {languages.map(({ name, native }) => (
                <StyledLanguage key={name}>
                    {`${name} (${native})`}
                </StyledLanguage>
            ))}
        </StyledContent>
    </StyledCountry>
);

export default Country;
