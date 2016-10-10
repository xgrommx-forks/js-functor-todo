import React from 'react'

const styles = {
  li: {
    position: 'relative',
    fontSize: '24px',
    borderBottom: '1px solid #ededed'
  },
  toggle: {
    textAlign: 'center',
    width: '40px',
    height: 'auto',
    position: 'absolute',
    top: '0',
    bottom: '0',
    margin: 'auto 0',
    border: 'none',
    appearance: 'none',
  },
  label: {
    wordBreak: 'break-all',
	  padding: '15px 60px 15px 15px',
	  marginLeft: '45px',
	  display: 'block',
	  lineHeight: '1.2',
	  transition: 'color 0.4s',
  },
  button: {
    display: 'none',
    position: 'absolute',
    top: '0',
    right: '10px',
    bottom: '0',
    width: '40px',
    height: '40px',
    margin: 'auto 0',
    fontSize: '30px',
    color: '#cc9a9a',
    marginBottom: '11px',
    transition: 'color 0.2s ease-out',
  },
}

const Todo = ({title}) => (
  <li style={styles.li}>
    <div>
      <input style={styles.toggle} type='checkbox' />
      <label style={styles.label}>{title}</label>
      <button style={styles.button}></button>
    </div>
  </li>
)

export default Todo
