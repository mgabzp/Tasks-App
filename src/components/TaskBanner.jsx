import React from 'react'

export const TaskBanner = props => (
    <h4 className= "bg-dark text-white text-center p-4">
        Tasks App ({props.taskItems.filter(t=> !t.done).length} tasks to do)
    </h4>
);


