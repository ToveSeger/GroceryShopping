import { Iitem } from '../../interfaces/Iitem'
import styles from './Item.module.scss'
import {IoMdCheckmarkCircleOutline} from 'react-icons/io';
export const Item = (props:any) => {
    // console.log(props.item)

  return (
    <div className={styles.itemContainer}>
      <p className={styles.item}>{props.item.Amount} st {props.item.Name}</p>
      <span className={styles.doneIcon} onClick={()=>props.removeItem(props.item)}>
        <IoMdCheckmarkCircleOutline/>
      </span>
    </div>
  )
}
