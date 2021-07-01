import React, { useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { connect } from "react-redux";
import InputsListItems from "../listItems/InputsListItems";
import { loadDataInputs } from "../../logic/thunk";
import FormInput from "../forms/FormInput";
import { removeInputsItem, editInputsItem } from '../../logic/actions';
import styles from "./List.module.css";

const InputsList = ({ inputDatas=[], loadList, onRemovedPressed, onEditedPressed }) => {
    useEffect(() => {
        loadList();
    },[loadList]);
    
    return(
        <div className={styles.box}>
            <FormInput />
            <div className={styles.table}>
                {inputDatas.map((item, index) => (
                    <InputsListItems 
                        key={index}
                        index={index}
                        data={item}
                        onRemovedPressed={onRemovedPressed}
                        onEditedPressed={onEditedPressed}/>
                    )
                )}
            </div>
        </div>
    );
};

const mapStateToProps = state => ({
    inputDatas: state.inputDatas,
});

const mapDispatchToProps = dispatch =>({
    loadList: () => dispatch(loadDataInputs()),
    onRemovedPressed: index => dispatch(removeInputsItem(index)),
    onEditedPressed: (text, index) => dispatch(editInputsItem(text, index)),
});


export default connect(mapStateToProps, mapDispatchToProps)(InputsList);