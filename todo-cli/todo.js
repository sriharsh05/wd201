const todoList = () => {
    all = []
    const add = (todoItem) => {
      all.push(todoItem)
    }
    const markAsComplete = (index) => {
      all[index].completed = true
    }
  
    const overdue = () => {
        let overdueTasks = [];
        let taskStatus = '[ ]';
        
        for (let task of all) {
          if (task.dueDate === yesterday) {
            if (task.completed === true) {
              taskStatus = '[x]';
            }
            overdueTasks.push(`${taskStatus} ${task.title} ${task.dueDate}`);
            taskStatus = '[ ]';
          }
        }
        
        return overdueTasks;
    }
  
    const dueToday = () => {
        const tasksDueToday = [];
        let taskStatus = '[ ]';
        
        for (let task of all) {
          if (task.dueDate === today) {
            if (task.completed === true) {
              taskStatus = '[x]';
            }
            tasksDueToday.push(`${taskStatus} ${task.title}`);
            taskStatus = '[ ]';
          }
        }
        
        return tasksDueToday;
    }
  
    const dueLater = () => {
        const tasksDueLater = [];
        let taskStatus = '[ ]';
        
        for (let task of all) {
          if (task.dueDate === tomorrow) {
            if (task.completed === true) {
              taskStatus = '[x]';
            }
            tasksDueLater.push(`${taskStatus} ${task.title} ${task.dueDate}`);
            taskStatus = '[ ]';
          }
        }
        
        return tasksDueLater;
    }
  
    const toDisplayableList = (list) => {
        const outputString = list.join('\n');
        return outputString;
    }
  
    return {
      all,
      add,
      markAsComplete,
      overdue,
      dueToday,
      dueLater,
      toDisplayableList
    };
  }

 module.exports = todoList;
  
  // ####################################### #
  // DO NOT CHANGE ANYTHING BELOW THIS LINE. #
  // ####################################### #
  
  // const todos = todoList();
  
  // const formattedDate = d => {
  //   return d.toISOString().split("T")[0]
  // }
  
  // var dateToday = new Date()
  // const today = formattedDate(dateToday)
  // const yesterday = formattedDate(
  //   new Date(new Date().setDate(dateToday.getDate() - 1))
  // )
  // const tomorrow = formattedDate(
  //   new Date(new Date().setDate(dateToday.getDate() + 1))
  // )
  
  // todos.add({ title: 'Submit assignment', dueDate: yesterday, completed: false })
  // todos.add({ title: 'Pay rent', dueDate: today, completed: true })
  // todos.add({ title: 'Service Vehicle', dueDate: today, completed: false })
  // todos.add({ title: 'File taxes', dueDate: tomorrow, completed: false })
  // todos.add({ title: 'Pay electric bill', dueDate: tomorrow, completed: false })
  
  // console.log("My Todo-list\n")
  
  // console.log("Overdue")
  // var overdues = todos.overdue()
  // var formattedOverdues = todos.toDisplayableList(overdues)
  // console.log(formattedOverdues)
  // console.log("\n")
  
  // console.log("Due Today")
  // let itemsDueToday = todos.dueToday()
  // let formattedItemsDueToday = todos.toDisplayableList(itemsDueToday)
  // console.log(formattedItemsDueToday)
  // console.log("\n")
  
  // console.log("Due Later")
  // let itemsDueLater = todos.dueLater()
  // let formattedItemsDueLater = todos.toDisplayableList(itemsDueLater)
  // console.log(formattedItemsDueLater)
  // console.log("\n\n")