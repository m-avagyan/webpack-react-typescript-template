import React from 'react';

import styled from 'styled-components';

const StyledNotFound = styled.div`
    text-align: center;
    padding: 40px;
    color: red;
    font-size: 40px;
    line-height: 48px;
    font-weight: bold;
`;

function NotFound() {
    return <StyledNotFound>Not Found</StyledNotFound>;
}

export default NotFound;
