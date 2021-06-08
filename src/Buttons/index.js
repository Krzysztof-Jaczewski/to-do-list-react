import "./style.css"

const Buttons = ({ tasks, hideDone, toggleHideDone, finishAllTasks }) => (

  <div className="buttons">
    {tasks.length > 0 && (
      <>
        <button
          onClick={toggleHideDone}
          className="buttons__button "
        >
          {hideDone ? "Pokaż" : "Ukryj"} ukończone
      </button>
        <button
          onClick={finishAllTasks}
          className="buttons__button"
          disabled={tasks.every(({ done }) => done)}
        >
          Ukończ wszystkie
      </button>
      </>
    )}
  </div>
);


export default Buttons;