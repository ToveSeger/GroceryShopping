import { Button } from './Button';
import styles from './Modal.module.scss'
import ReactDOM from 'react-dom';


const Backdrop= (props:any)=>{
    return (
        <div onClick={props.onDismiss} className={styles.backdrop}>
        </div>
        )
};

const Overlay= (props:any)=>{
    return (
        <div className={styles.modal}>
            <p className={styles.title}>{props.Title}</p>
            <p>{props.Message}</p>
            <Button className= {styles.button} method={props.onDismiss}>Ok</Button>
        </div>
        )
};
export const Modal = (props:any) => {
    return (
        <>
            {ReactDOM.createPortal(<Backdrop onDismiss={props.onDismiss}/>, document.getElementById('backdrop-root') as HTMLElement)}
            {ReactDOM.createPortal(<Overlay Title={props.Title} Message={props.Message} onDismiss={props.onDismiss}/>, document.getElementById('overlay-root') as HTMLElement)}
       </>
  )
}
