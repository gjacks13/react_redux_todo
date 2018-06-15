import React from 'react';
import FilterLink from '../containers/FilterLink';

const Footer = ({ visibilityFilter }) => (
  <div>
      <FilterLink filter='SHOW_ALL' currentFilter={visibilityFilter}>ALL</FilterLink>
      {' | '}
      <FilterLink filter='SHOW_ACTIVE' currentFilter={visibilityFilter}>ACTIVE</FilterLink>
      {' | '}
      <FilterLink filter='SHOW_COMPLETED' currentFilter={visibilityFilter}>COMPLETED</FilterLink>
  </div>
);

export default Footer;
