const Tasks = ({ tasks }) => {
    return (
        <div>
            {tasks?.map((task, index) => (
                <div key={index}>{task}</div>
            ))}
        </div>
    );
};

export default Tasks;
