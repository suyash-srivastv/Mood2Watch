export function MoodButton({ label, onClick, icon }) {
  const buttonStyle = {
    backgroundColor: 'transparent',
    border: '2px solid red',
    borderRadius: '8px',
    color: 'white',
    padding: '10px 20px',
    fontSize: '16px',
    cursor: 'pointer',
    margin: '10px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    transition: 'background-color 0.3s, color 0.3s',
  };

  const iconStyle = {
    marginRight: '8px',
    color: 'yellow',
  };
  return (
    <button onClick={onClick} style={buttonStyle}>
      {icon && <i className={`fas ${icon}`} style={iconStyle}></i>}
      {label}
    </button>
  );
}
