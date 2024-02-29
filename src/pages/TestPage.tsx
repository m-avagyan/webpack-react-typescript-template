import React from 'react';

import styled from 'styled-components';

const StyledTitle = styled.div`
    text-align: center;
    padding: 40px;
    color: green;
    font-size: 40px;
    line-height: 48px;
    font-weight: bold;
`;

function TestPage() {
    return <StyledTitle>Test Page</StyledTitle>;
}

export default TestPage;
