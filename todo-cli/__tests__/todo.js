const todoList = require("../todo");

const { all, markAsComplete, add, overdue, dueToday, dueLater } = todoList();

const todayStr = new Date().toLocaleDateString("en-CA");
const yesterday = new Date();
yesterday.setDate(yesterday.getDate() - 1);
const yesterdayStr = yesterday.toLocaleDateString("en-CA");
const tomorrow = new Date();
tomorrow.setDate(tomorrow.getDate() + 1);
const tomorrowStr = tomorrow.toLocaleDateString("en-CA");

describe("TodoList test suite", () => {
  beforeAll(() => {
    [
      {
        title: "Testing 1",
        completed: false,
        dueDate: yesterdayStr,
      },
      {
        title: "Testing 2",
        completed: false,
        dueDate: todayStr,
      },
      {
        title: "Testing 3",
        completed: false,
        dueDate: tomorrowStr,
      },
    ].forEach(add);
  });

  test("Should add new todo", () => {
    const todoItemsCount = all.length;
    add({
      title: "Test.todo",
      completed: false,
      deuDate: todayStr,
    });
    expect(all.length).toBe(todoItemsCount + 1);
  });

  test("Should mark a todo as complete", () => {
    expect(all[0].completed).toBe(false);
    markAsComplete(0);
    expect(all[0].completed).toBe(true);
  });

  test("Retrieving overdue items", () => {
    const overdueItems = overdue();
    expect(overdueItems.length).toBe(1);
  });

  test("Retrieving items due today", () => {
    const itemsDueToday = dueToday();
    expect(itemsDueToday.length).toBe(1);
  });

  test("Retrieving items due later than today", () => {
    const itemsDueLater = dueLater();
    expect(itemsDueLater.length).toBe(1);
    expect(itemsDueLater[0]).toBe(all[2]);
  });
});
