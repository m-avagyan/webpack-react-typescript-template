import React from 'react';

import styled from 'styled-components';

const StyledTitle = styled.div`
    text-align: center;
    padding: 40px;
    color: blue;
    font-size: 40px;
    line-height: 48px;
    font-weight: bold;
`;

function Home() {
    return <StyledTitle>Home</StyledTitle>;
}

export default Home;
