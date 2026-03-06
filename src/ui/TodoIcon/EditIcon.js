import React from "react";
import { TodoIcon } from './index.js';

function EditIcon({ onEdit }){
    return (
        <TodoIcon
            type="edit"
            onClick={onEdit}
        />
    );
}

export { EditIcon };