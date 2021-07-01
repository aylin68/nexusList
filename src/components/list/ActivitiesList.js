import React, { useEffect } from "react";
import { connect } from "react-redux";
import ActivitiesListItems from "../listItems/ActivitiesListItems";
import { loadDataActivities } from "../../logic/thunk";
import FormActivities from "../forms/FormActivities";
import { removeActivitiesItem, editActivitiesItem } from '../../logic/actions';
import styles from "./List.module.css";

const ActivitiesList = ({ activitieDatas=[], loadList, onRemovedPressed, onEditedPressed }) => {
    useEffect(() => {
        loadList();
    },[loadList]);
    
    return(
        <div className={styles.box}>
            <FormActivities />
            <div className={styles.table}>
                {activitieDatas.map((item, index) => (
                    <ActivitiesListItems 
                        key={index}
                        index={index}
                        data={item}
                        onRemovedPressed={onRemovedPressed}
                        onEditedPressed={onEditedPressed}/>)
                )}
            </div>
        </div>
    );
}
const mapStateToProps = state => ({
    activitieDatas: state.activitieDatas,
});

const mapDispatchToProps = dispatch =>({
    loadList: () => dispatch(loadDataActivities()),
    onRemovedPressed: index => dispatch(removeActivitiesItem(index)),
    onEditedPressed: (text, index) => dispatch(editActivitiesItem(text, index)),
});


export default connect(mapStateToProps, mapDispatchToProps)(ActivitiesList);