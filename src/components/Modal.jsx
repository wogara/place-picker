import { useEffect,useRef } from 'react';
import { createPortal } from 'react-dom';

function Modal({ open, children }) {
  const dialog = useRef();
  console.log(
    'modal executed' + open
  );
  // console.log(open);
  useEffect(()=>{
    
    if (open){
      console.log('useEffect');
      dialog.current.showModal();

    }else{
      console.log('useEffect false?');
      dialog.current.close();
    }
  },[open])

  return createPortal(
    <dialog className="modal" ref={dialog}>
      {children}
    </dialog>,
    document.getElementById('modal')
  );
}

export default Modal;
