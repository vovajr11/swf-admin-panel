import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { authSelectors } from '../../redux/auth';
import AppBar from '../AppBar';
import UserMenu from '../RightBar/UserMenu';

const Wrapp = styled.div`
    display: flex;
    justify-content: space-between;

    ul {
        list-style: none;
    }
`;

const Children = styled.div`
    flex-grow: 2;
`;

const Layout = ({ children, isAuthenticated }) => (
    <Wrapp>
        {isAuthenticated && <AppBar />}
        <Children>{children}</Children>
        {/* {isAuthenticated && <UserMenu />} */}
    </Wrapp>
);

const mapStateToProps = state => ({
    isAuthenticated: authSelectors.isAuthenticated(state),
});

export default connect(mapStateToProps)(Layout);
