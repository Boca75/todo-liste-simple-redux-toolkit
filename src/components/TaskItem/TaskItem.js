import { useDispatch } from "react-redux";
import { toggleTask, deleteTask } from "../../redux";
import "./taskItem.css";

const TaskItem = (props) => {
    const { task } = props;

    const dispatch = useDispatch();

    return (
        <div className="taskItem">
            <label>
                <input
                    type="checkbox"
                    checked={task.done}
                    onChange={() => dispatch(toggleTask(task.id))}
                />
                {task.text}

                <span
                    className="buttonDelete"
                    onClick={() => dispatch(deleteTask(task.id))}
                    role="button"
                    style={{ padding: "5px", marginLeft: "20px" }}
                >
                    X
                </span>
            </label>
        </div>
    );
};

export default TaskItem;
