import React, { Component } from 'react'
import Header from './Header'
import Nav from './Nav'
import styled, { ThemeProvider } from 'styled-components'


const theme = {
    red: '#FF0000',
    black: '#393939',
    grey: '#3A3A3A',
    offWhite: '#EDEDED',
    maxWidth: '1000px',
    bs: '0 12px 24px 0 rgba(0, 0, 0, 0.09)',
};

const StyledPage = styled.div`
    background: white;
    color: ${props => props.theme.black};
`;

const Inner = styled.div`
    max-width: ${props => props.theme.maxWidth};
    margin: 0 auto;
    padding: 2rem;
`;

class Page extends Component {
    render() {
        return (
            <div>
                <Header />
                <Nav />
                {this.props.children}
            </div>
        )
    }
}


export default Page
