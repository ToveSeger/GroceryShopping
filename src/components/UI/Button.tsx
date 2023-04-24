import styles from "./Button.module.scss"

export const Button = (props:any) => {
  return (
    <button className={styles.button} type={props.type}>{props.children}</button>
  )
}
