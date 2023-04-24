import styles from './Modal.module.scss'
import ReactDOM from 'react-dom';


const Backdrop= (props:any)=>{
    return (
        <div className={styles.backdrop}>
            <h1>{props.Title}</h1>
        </div>
        )
};

const Overlay= (props:any)=>{
    return (
        <div className={styles.modal}>
            <p>{props.Title}</p>
            <p>{props.Message}</p>
            <button onClick={props.onDismiss}>ok</button>
        </div>
        )
};
export const Modal = (props:any) => {
    return (
        <>
            {ReactDOM.createPortal(<Backdrop/>, document.getElementById('backdrop-root') as HTMLElement)}
            {ReactDOM.createPortal(<Overlay Title={props.Title} Message={props.Message} onDismiss={props.onDismiss}/>, document.getElementById('overlay-root') as HTMLElement)}
       </>
  )
}
