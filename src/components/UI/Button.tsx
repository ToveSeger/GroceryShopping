import styles from "./Button.module.scss"

export const Button = (props:any) => {
  const classes=`${props.className} ${styles.button}`;
  return (
    <button className={classes} type={props.type} onClick={props.method}>{props.children}</button>
  )
}
