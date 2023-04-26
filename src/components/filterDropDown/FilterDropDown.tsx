import { useState } from 'react';
import departments from '../../data/departments.json'
import styles from './FilterDropDown.module.scss'
import { BsFilter } from 'react-icons/bs';


export const FilterDropDown = (props:any) => {
const [selectedDepartment, setSelectedDepartment]=useState("");
const [filterVisible, setFilterVisible]=useState(false);

const filterToggle=()=>{
  filterVisible?setFilterVisible(false):setFilterVisible(true);
}

const classes=`${styles.filterDropDown} ${props.className}`;

  return (
    <div  className={classes}>
      <div className={styles.filterIcon} onClick={filterToggle}>
        <BsFilter/>
      </div>
      {filterVisible &&
          <select onChange={e=>props.filterMethod(e.target.value)}>
            {departments.Departments.map((dep, index)=>
                <option value={dep} key={index}>
                  {dep}
                  </option>
            )
          }
          </select>
      }
  </div>
  )
}
