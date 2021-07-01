import React, { useState, useEffect } from "react";
import { connect } from 'react-redux';
import { addToOutputsItems, editOutputsItem } from '../../logic/actions';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import styles from './Forms.module.css';
import { OverlayTrigger, Tooltip, Modal } from "react-bootstrap";

const FormOutput = ({ outputData, onAddPressed, onEditPressed, editMode, toggleEditMode }) => {
    const [lgShow, setLgShow] = useState(false);
    const initialData = {
        product: '',
        output: '',
        unit3: '',
        unit5: ''
    };
    const [formData, setFormData] = useState(initialData);
    const tooltip = (
        <Tooltip id="button-tooltip-2">
            The products, capital goods and
            services which result from your business
        </Tooltip>
    );

    useEffect(() => {
        if(editMode) {
            setFormData(outputData.data);
            setLgShow(true);
        }
    }, [editMode, outputData]);
    const handleChange = (title) => (event) => {
        setFormData({
            ...formData,
            [title]: event.target.value
        })
    };
    const addOutput = () => {
        if(formData.product.length>0){
            if(editMode) {
                toggleEditMode();
                onEditPressed({ 
                    dataItem: formData,
                    index: outputData.index,
                });
            } else {
                onAddPressed(formData);
            }
        }
        setLgShow(false);
        setFormData(initialData);
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
                        overlay={tooltip}
                    >
                        <h2>OUTPUTS</h2>
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
                                className={styles.formControlOutput}
                                placeholder="Add Product"
                                value={formData.product} 
                                onChange={handleChange('product')}
                            />
                        </div>
                        <div className={styles.formGroup}>
                            <input
                                type="text" 
                                className={[styles.formControlOutput]}
                                placeholder="Add Output"
                                value={formData.output} 
                                onChange={handleChange('output')}
                            />
                        </div>
                        <div className={styles.formGroup}>
                            <input
                                type="text" 
                                className={styles.formControl}
                                placeholder="Units in 3 years"
                                value={formData.unit3} 
                                onChange={handleChange('unit3')}
                            />
                            <input
                                type="text" 
                                className={styles.formControl}
                                placeholder="Units in 5 years"
                                value={formData.unit5} 
                                onChange={handleChange('unit5')}
                            />
                        </div>
                        <div className={styles.formGroup}>
                            <button
                                type="button"
                                className="btn btn-primary"
                                onClick={addOutput}
                            >
                                <span className={styles.addButton}>
                                    {editMode ? 'Edit' : 'Add'}
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
    onAddPressed: data => dispatch(addToOutputsItems(data)),
    onEditPressed: data => dispatch(editOutputsItem(data)),
});

export default connect(null, mapDispatchToProps)(FormOutput);