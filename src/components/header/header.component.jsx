//Header is the top bar that appears on every page. It includes a logo as a link to the home page,
//a shop, sign-in/sign-out and cart buttons

import React from 'react';
import { HeaderContainer, LogoContainer, OptionsContainer, OptionLink } from './header.styles';
import { connect } from 'react-redux';
import { ReactComponent as Logo } from '../../assets/crown.svg';
import { auth } from '../../firebase/firebase.utils';
import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';
import { createStructuredSelector } from 'reselect';
import { selectCartHidden } from '../../redux/cart/cart.selectors'
import { selectCurrentUser } from '../../redux/user/user.selectors'

const Header = ({ currentUser, hidden }) => (
    <HeaderContainer>
        <LogoContainer to='/'>
            <Logo className='logo' />
        </LogoContainer>
        <OptionsContainer>
            <OptionLink to='/shop'>
                SHOP
            </OptionLink>
            <OptionLink to='/'>
                CONTACT
            </OptionLink>
            {
                currentUser ? (
                    <OptionLink as='div' onClick={() => auth.signOut()}>SIGN OUT</OptionLink>
                ) : (
                        <OptionLink to='/signin'>SIGN IN</OptionLink>
                    )}
            <CartIcon />
        </OptionsContainer>
        {
            hidden ? null : <CartDropdown />
        }
    </HeaderContainer>
);

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
    hidden: selectCartHidden
})

export default connect(mapStateToProps)(Header);