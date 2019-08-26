import React, { useState } from 'react';
import styled from 'styled-components';

const StyledTooltip = styled.div`
    position: relative;
`;

const StyledTooltipContent = styled.div`
    position: absolute;
    border-radius: 4px;
    background: black;
    color: #fff;
    padding: 4px 10px;
    top: calc(-100% - 10px);
    right: 50%;
    transform: translateX(50%);
    white-space: nowrap;
`;

const Tooltip = ({ children, tooltipContent }) => {
    const [isOpen, setOpen] = useState(false);

    return (
        <StyledTooltip
            onMouseEnter={() => setOpen(true)}
            onMouseLeave={() => setOpen(false)}
        >
            {isOpen ? (
                <StyledTooltipContent>{tooltipContent}</StyledTooltipContent>
            ) : null}
            {children}
        </StyledTooltip>
    )
};

export default Tooltip;
