import React, { useState } from "react";
import { connect } from 'react-redux';
import { OverlayTrigger, Tooltip, Modal } from "react-bootstrap";
import { addToInputsItems } from '../../logic/actions';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import styles from './Forms.module.css';

const FormInput = ({ onAddPressed }) => {
    const [lgShow, setLgShow] = useState(false);
    const [valueInput, setValueInput] = useState('');
    const tooltip = (
        <Tooltip id="button-tooltip-2">
            The financial, human, and
            material resources used for your business.
        </Tooltip>
    );

    const handleClick = () => {
        if(valueInput.length > 0) {
            onAddPressed(valueInput);
            setValueInput('');
            setLgShow(false);
        }
    };
    
    return(
        <>
            <div className={styles.header}>
                <div 
                    className={styles.title}
                    onClick={() => setLgShow(true)}
                >
                    <OverlayTrigger
                        placement="left"
                        overlay={tooltip}>
                        <h2>INPUTS</h2>
                    </OverlayTrigger>
                    <span className={styles.titleIcon}>
                        <FontAwesomeIcon icon={faPlus} />
                    </span>
                </div>
            </div>
            <Modal
                size="lg"
                show={lgShow}
                onHide={() => setLgShow(false)}
                aria-labelledby="example-modal-sizes-title-lg"
            >
                <Modal.Header closeButton>
                    <Modal.Title id="example-modal-sizes-title-lg">
                        Add ACTIVITIES
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form className={styles.form}>
                        <div className={styles.formGroup}>
                            <input
                                type="text" 
                                className={styles.formControl}
                                placeholder="Add inputs"
                                value={valueInput} 
                                onChange={e => setValueInput(e.target.value)}
                            />
                            <button 
                                type="button"
                                className="btn btn-primary"
                                onClick={handleClick}
                            >
                                <span className={styles.addButton}>
                                    Add
                                </span>
                                <FontAwesomeIcon icon={faPlus} />
                            </button>   
                        </div>
                    </form>
                </Modal.Body>
            </Modal>
        </>
    );
};

const mapDispatchToProps = dispatch => ({
    onAddPressed: text => dispatch(addToInputsItems(text)),
});

export default connect(null, mapDispatchToProps)(FormInput);