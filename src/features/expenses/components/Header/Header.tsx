import React from 'react';
import trackee_logo from '../../../../assets/trackee_logo.png';

function Header() {
  return (
    <header style={HeaderStyle.header} className="outline">
      <img style={HeaderStyle.img} src={trackee_logo} alt="logo" />
      <h1>Trackee</h1>
    </header>
  );
}

const HeaderStyle = {
  header: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    minWidth: '100%',
    margin: 'auto',
    gap: '15px',
    padding: '20px 10px',
  } as React.CSSProperties,
  img: {
    height: '50px',
    width: '55px',
    borderRadius: '10%',
  } as React.CSSProperties,
};

export default Header;
