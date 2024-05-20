//single selection

import { useState } from "react"
import data from "./data";
import "./styles.css" 

export default function Accordian(){
    const [selected, setSelected] = useState(null);
    const [EnableMultiSelection, setEnableMultiSelection] = useState(false)
    const [multiple, setMultiple] = useState([]);

    function handleSingleSelection(getCurrentId){
        setSelected(getCurrentId === selected ? null : getCurrentId);
    }

    function handleMultiSelection (getCurrentId){
        let cpyMultiple = [...multiple];
        const findIndexOfCurrentId  = cpyMultiple.indexOf(getCurrentId)
        if(findIndexOfCurrentId === -1){
            cpyMultiple.push(getCurrentId)
        }else{
            cpyMultiple.splice(findIndexOfCurrentId, 1)
        }
        setMultiple(cpyMultiple)
    }

    return <div className="wrapper">
        <button onClick={()=>setEnableMultiSelection(!EnableMultiSelection)} className={EnableMultiSelection ? "multiEnabled" : ""}>Enable Multi Selection</button>
        <div className="accordian">
            {
             data && data.length > 0 ?  
             data.map(dataItem=> <div className="item">
                <div className="dataItem">
                   <div 
                   onClick={ EnableMultiSelection ? 
                   ()=>handleMultiSelection(dataItem.id) 
                   : ()=>handleSingleSelection(dataItem.id)}
                    className="tittle">
                   <h3>{dataItem.question}</h3>
                    <span>+</span>
                   </div>
                   {
                    EnableMultiSelection ? (multiple.indexOf(dataItem.id) !== -1) && 
                    (<div className="content">{dataItem.answer}</div>) : 
                    selected === dataItem.id && <div className="content">
                    {dataItem.answer}
                </div>
                   }
                  
                </div>
             </div>)
             : <div>Data not found</div>
            }
        </div>
    </div>
}
//multiple selection
