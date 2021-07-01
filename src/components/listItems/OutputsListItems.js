import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes, faPen } from '@fortawesome/free-solid-svg-icons';
import styles from "./ListItems.module.css";


const OutputsListItems = ({ data, index, onRemovedPressed, onEditedPressed }) => {
    const handleClick = () => {
        onEditedPressed({ data, index });
    };

    return(
        <div className={styles.boxTable}>
            <div className={styles.tableIndex}>{index + 1}</div>
            <div className={styles.tableTitle}>
                <span>{data.product}</span>
            </div>
            <div>
                <button
                    className="btn btn-success" 
                    onClick={handleClick}
                    type="button"
                >
                        <FontAwesomeIcon icon={faPen} />
                </button>
                <button
                    className="btn btn-danger" 
                    onClick= {() => onRemovedPressed(index)}
                    type="button"
                >
                        <FontAwesomeIcon icon={faTimes} />
                </button>
            </div>
        </div>
    );
};

export default OutputsListItems;