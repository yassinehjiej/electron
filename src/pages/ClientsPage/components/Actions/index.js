import React from "react";
import { getIcon } from "../../../../utils";

export default  function Actions() {
    const deleteIcon = getIcon('delete');
    const editIcon = getIcon('edit');
    return(
        <div className="flex justify-between">
            <editIcon.icon style={{ color: 'orange' }}/>
            <deleteIcon.icon style={{ color: 'red' }}/>
        </div>
    );
}