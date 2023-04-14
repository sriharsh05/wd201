const todoList = () => {
  const all = [];

  const todayStr = new Date().toLocaleDateString("en-CA");

  const add = (todoItem) => {
    all.push(todoItem);
  };
  const markAsComplete = (index) => {
    all[index].completed = true;
  };

  const overdue = () => {
    return all.filter((item) => item.dueDate < todayStr);
  };

  const dueToday = () => {
    return all.filter((item) => item.dueDate === todayStr);
  };

  const dueLater = () => {
    return all.filter((item) => item.dueDate > todayStr);
  };

  const toDisplayableList = (list) => {
    let formattedList = list
      .map((task) => {
        const status = task.completed ? "[x]" : "[ ]";
        const dueDate = task.dueDate === todayStr;
        return `${status} ${task.title} ${dueDate}`;
      })
      .join("\n");

    return formattedList;
  };

  return {
    all,
    add,
    markAsComplete,
    overdue,
    dueToday,
    dueLater,
    toDisplayableList,
  };
};

module.exports = todoList;

// ####################################### #
// DO NOT CHANGE ANYTHING BELOW THIS LINE. #
// ####################################### #
