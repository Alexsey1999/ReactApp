import React from 'react'
import ReactDOM from 'react-dom'

const ModalWindow = (props) => {
  const el = document.createElement('div')
  el.classList.add('modal-window-wrapper')

  React.useEffect(() => {
    document.body.appendChild(el)
    return () => {
      document.body.removeChild(el)
    }
  })

  return ReactDOM.createPortal(props.children, el)
}

export default ModalWindow
