import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import OutputsListItems from "../listItems/OutputsListItems";
import { loadDataOutputs } from "../../logic/thunk";
import FormOutput from "../forms/FormOutput";
import { removeOutputsItem } from '../../logic/actions';
import styles from "./List.module.css";

const OutputsList = ({ outputDatas=[], loadList, onRemovedPressed }) => {
    const [editMode, setEditMode] = useState(false);
    const [editData, setEditData] = useState({});
    const toggleEditMode = (payload) => {
        setEditData(payload);
        setEditMode(true);
    };
    useEffect(() => {
        loadList();
    },[loadList]);
    
    return(
        <div className={styles.box}>
            <FormOutput
                outputData={editData}
                editMode={editMode}
                toggleEditMode={() => setEditMode(false)}
            />
            <div className={styles.table}>
                {outputDatas.map((item, index) => (
                    <OutputsListItems 
                        key={index}
                        index={index}
                        data={item}
                        onRemovedPressed={onRemovedPressed}
                        onEditedPressed={toggleEditMode}/>)
                )}
            </div>
        </div>
    );
};

const mapStateToProps = state => ({
    outputDatas: state.outputDatas,
});

const mapDispatchToProps = dispatch =>({
    loadList: () => dispatch(loadDataOutputs()),
    onRemovedPressed: index => dispatch(removeOutputsItem(index)),
});


export default connect(mapStateToProps, mapDispatchToProps)(OutputsList);