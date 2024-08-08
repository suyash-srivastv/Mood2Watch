export function Header() {
  const headerStyle = {
    backgroundColor: 'black',
    color: 'white',
    padding: '20px',
    textAlign: 'center',
    borderBottom: '2px solid red',
    fontSize: '24px',
    fontWeight: 'bold',
  };

  return <header style={headerStyle}>Mood2Watch</header>;
}
