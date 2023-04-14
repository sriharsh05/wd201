// models/todo.js
"use strict";
const { Model, Op } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Todo extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static async addTask(params) {
      return await Todo.create(params);
    }
    static async showList() {
      console.log("My Todo list \n");

      //Code for OverDue
      // ============================================================//
      console.log("Overdue");
      // FILL IN HERE
      const overdueTasks = await Todo.overdue();
      const formattedTasksOver = overdueTasks.map((task) => {
        return task.displayableString();
      });
      const taskList = formattedTasksOver.join("\n");
      console.log(taskList);
      console.log("\n");
      // ============================================================//

      //Code for due Today
      // ============================================================//
      console.log("Due Today");
      // FILL IN HERE
      const dueTodayTodos = await Todo.dueToday();
      const formattedTasksToday = dueTodayTodos.map((task) => {
        return task.displayableString();
      });
      const taskListToday = formattedTasksToday.join("\n");
      console.log(taskListToday);
      console.log("\n");
      // ============================================================//

      //code for due later
      // ============================================================//
      console.log("Due Later");
      // FILL IN HERE
      const dueLaterTodos = await Todo.dueLater();
      const formattedTasksLater = dueLaterTodos.map((task) => {
        return task.displayableString();
      });
      const taskListLater = formattedTasksLater.join("\n");
      console.log(taskListLater);
    }
    // ============================================================//

    static async overdue() {
      // FILL IN HERE TO RETURN OVERDUE ITEMS
      const odt = await Todo.findAll({
        where: {
          dueDate: {
            [Op.lt]: new Date().toLocaleDateString("en-CA"),
          },
        },
      });
      return odt;
    }

    static async dueToday() {
      // FILL IN HERE TO RETURN ITEMS DUE tODAY
      const dt = await Todo.findAll({
        where: {
          dueDate: {
            [Op.eq]: new Date().toLocaleDateString("en-CA"),
          },
        },
      });

      return dt;
    }

    static async dueLater() {
      // FILL IN HERE TO RETURN ITEMS DUE LATER
      const dl = await Todo.findAll({
        where: {
          dueDate: {
            [Op.gt]: new Date().toLocaleDateString("en-CA"),
          },
        },
      });
      return dl;
    }

    static async markAsComplete(id) {
      // FILL IN HERE TO MARK AN ITEM AS COMPLETE
      await Todo.update({ completed: true }, { where: { id: id } });
    }

    displayableString() {
      const todaydate = new Date().toISOString().slice(0, 10);
      let checkbox = this.completed ? "[x]" : "[ ]";

      return `${this.id}. ${checkbox} ${this.title} ${
        this.dueDate === todaydate ? "" : this.dueDate
      }`.trim();
    }
  }
  Todo.init(
    {
      title: DataTypes.STRING,
      dueDate: DataTypes.DATEONLY,
      completed: DataTypes.BOOLEAN,
    },
    {
      sequelize,
      modelName: "Todo",
    }
  );
  return Todo;
};
