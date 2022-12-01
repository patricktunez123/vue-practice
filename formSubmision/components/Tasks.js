import CreateTask from "./CreateTask.js";
import TaskList from "./TaskList.js";

export default {
  components: { TaskList, CreateTask },
  template: `
 <section class='space-y-6'>
    <TaskList :TasksArr="filters.InProgress" Title="In progress tasks" ></TaskList>
   <TaskList :TasksArr="filters.DoneTasks" Title="Done tasks" ></TaskList>
   </section>

<CreateTask @handleAddTask='handleAddTask' ></CreateTask>
 
    `,
  data() {
    return {
      Tasks: [
        {
          id: 1,
          name: "Task one",
          complete: false,
        },
        {
          id: 2,
          name: "Task two",
          complete: false,
        },
        {
          id: 3,
          name: "Task three",
          complete: false,
        },
      ],
    };
  },
  computed: {
    filters() {
      return {
        DoneTasks: this.Tasks.filter((item) => item.complete),
        InProgress: this.Tasks.filter((item) => !item.complete),
      };
    },
  },

  methods: {
    handleAddTask(taskName) {
      this.Tasks.push({
        id: this.Tasks.length + 1,
        name: taskName,
        complete: false,
      });
    },
  },
};
