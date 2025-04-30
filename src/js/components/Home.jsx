import React, { useState } from "react";

//create your first component

const Home = () => {
  const [inputValue, setInputValue] = useState("");
  const [toDoList, setToDoList] = useState([]);
  const [count, setCount] = useState(0);
  const [taskCompleted, setTaskCompleted] = useState(0);
  const [removedItems, setRemovedItems] = useState([]);

  const handleKeyDown = (element) => {
    if (element.key === "Enter") {
      setToDoList([...toDoList, inputValue]);
      setInputValue("");
      setCount(count + 1);
    }
  };
  const clearTasks = () => {
    setRemovedItems([]);
    setTaskCompleted(0);
  };

  const removeTask = (indexToRemove) => {
    const updatedList = [...toDoList];
    const removed = updatedList.splice(indexToRemove, 1);

    setToDoList(updatedList);
    setRemovedItems((prevRemovedItems) => [...prevRemovedItems, ...removed]);
    setCount(count - 1);
    setTaskCompleted(taskCompleted + 1);
  };

  return (
    <div>
      <h1 className="text-center mt-5 mb-2 ">
        Studio Ghibli task list. <br /> Enjoy the music While you organize your
        day
      </h1>
      <div className="d-flex justify-content-center my-3">
        <div className="d-flex">
          <div className="me-5">
            <div className=" border rounded">
              <input
                className="rounded-top w-100 px-1"
                type="text"
                onKeyDown={handleKeyDown}
                onChange={(e) => setInputValue(e.target.value)}
                value={inputValue}
                placeholder="write your task:"
              />
              <div className=" lista">
                <div className="d-flex">
                  <ul className="w-100">
                    {toDoList.length === 0 ? (
                      <li className="px-2">0 tasks for today</li>
                    ) : (
                      toDoList.map((task, index) => (
                        <li
                          key={index}
                          className="d-flex justify-content-between align-items-center my-2 px-2"
                        >
                          {task}
                          <button
                            className="btn btn-sm ms-auto"
                            onClick={() => removeTask(index)}
                          >
                            <span className="display">✅</span>
                          </button>
                        </li>
                      ))
                    )}
                  </ul>
                </div>
                <span className="cuenta ">{count} Items left</span>
              </div>
            </div>
          </div>

          {removedItems.length === 0 ? (
            <div></div>
          ) : (
            <div>
              <div className="bg-light border rounded lista2">
                <ul className="w-100">
                  {/* <p>Tasks Completed:</p> */}

                  {removedItems.map((task, index) => (
                    <li
                      className="d-flex justify-content-between align-items-center my-2 px-2"
                      key={index}
                    >
                      {task}
                    </li>
                  ))}
                </ul>
                <div d-flex justify-content-center>
                  <span className="cuenta ">
                    {taskCompleted} Task completed
                  </span>
                  <button
                    onClick={clearTasks}
                    className="btn btn-dark my-2 cuenta2"
                  >
                    Clear all tasks ❌
                  </button>
                </div>
              </div>

              <div className="d-flex justify-content-center"></div>
            </div>
          )}
        </div>
      </div>
      <footer className=" text-white text-center">
        <div className="mt-3">
          <div style={{ width: "20%" }}>
            <iframe
              id="player"
              width="100%"
              height="65"
              allow="autoplay"
              src="https://w.soundcloud.com/player/?url=https%3A//soundcloud.com/lostchick/sets/studio-ghibli&auto_play=true&hide_related=true&show_comments=false&show_user=false&show_reposts=false&visual=false&show_artwork=false"
              title="Studio Ghibli Playlist"
            ></iframe>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
