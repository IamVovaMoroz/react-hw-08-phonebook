
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const NavItem = styled(NavLink)`
  font-weight: ${({ isactive }) => (isactive ? 'bold' : '')};
  color: ${({ isactive }) => (isactive ? 'blue' : 'white')};
  margin-right: 1rem;
  padding: 8px 16px;
  border-radius: 8px;
  border: 1px solid rgba(255, 255, 255, 0.8);
  transition: background-color 0.3s ease;
  font-size: 2rem; /* Adjust the font size as needed */

  &:hover {
    background-color: ${({ isactive }) => (isactive ? 'rgba(255, 255, 255, 0.8)' : 'rgba(255, 255, 255, 0.034)')};
  }
`;

export const AuthNav = () => {
  return (
    <nav>
      <NavItem
        to="/register"
        isactive={window.location.pathname === '/register' ? 'true' : 'false'}
      >
        Register
      </NavItem>
      <NavItem
        to="/login"
        isactive={window.location.pathname === '/login' ? 'true' : 'false'}
      >
        Log In
      </NavItem>
    </nav>
  );
};
