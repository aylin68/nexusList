import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes, faPen, faCheck } from '@fortawesome/free-solid-svg-icons';
import styles from "./ListItems.module.css";

const InputsListItems = ({ data, index, onRemovedPressed, onEditedPressed }) => {
    const [input, setInput] = useState(data);
    const [editMode, setEditMode] = useState(false);

    return(
        <div className={styles.boxTable}>
            <div className={styles.tableIndex}>{index + 1}</div>
                <div className={styles.tableTitle}>
                    {editMode ? (
                        <input type="text" 
                            className="form-control"
                            placeholder="Edit inputs"
                            value={input} 
                            onChange={e => setInput(e.target.value)}
                        />
                    ) : <span>{data}</span>}
                </div>
                <div>
                    {editMode ? (
                        <button 
                            type="button"
                            className="btn btn-primary"
                            onClick={() => {
                                setEditMode(false);                              
                                const dataItem = input;
                                onEditedPressed({ dataItem, index });
                            }}>
                                <FontAwesomeIcon icon={faCheck} />
                        </button>
                    ) : (
                        <>
                            <button className="btn btn-success" 
                                onClick={() => {
                                    setEditMode(true);
                                    setInput(data);
                                }}
                                type="button">
                                    <FontAwesomeIcon icon={faPen} />
                            </button>
                            <button className="btn btn-danger" 
                                onClick= {() => onRemovedPressed(index)}
                                type="button">
                                <FontAwesomeIcon icon={faTimes} />
                            </button>
                        </>
                    )}
                </div>
        </div>
    );
};

export default InputsListItems;