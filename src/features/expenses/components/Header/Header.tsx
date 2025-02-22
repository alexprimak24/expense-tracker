import React from 'react';
import trackee_logo from '../../../../assets/trackee_logo.png';

function Header() {
  return (
    <header style={HeaderStyle.header}>
      <img style={HeaderStyle.img} src={trackee_logo} alt="logo" />
      <h1>Trackee</h1>
    </header>
  );
}

const HeaderStyle = {
  header: {
    display: 'flex',
    alignItems: 'center',
    gap: '15px',
    fontSize: '18px',
  } as React.CSSProperties,
  img: {
    height: '50px',
    width: '55px',
    borderRadius: '10%',
  } as React.CSSProperties,
};

export default Header;
