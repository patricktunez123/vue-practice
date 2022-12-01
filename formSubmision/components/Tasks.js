import TaskList from "./TaskList.js";

export default {
  components: { TaskList },
  template: `
 <section class='space-y-6'>
    <TaskList :TasksArr="filters.InProgress" Title="In progress tasks" ></TaskList>
   <TaskList :TasksArr="filters.DoneTasks" Title="Done tasks" ></TaskList>
   </section>

    <section class='mt-4'>
      <form @submit.prevent="handleAddTask">
   <input v-model="newTask" placeholder='Type new task...' />
   <button>Submit</button>
   </form>
    </section>
 
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
      newTask: "",
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
    handleAddTask() {
      this.Tasks.push({
        id: this.Tasks.length + 1,
        name: this.newTask,
        complete: false,
      });
      this.newTask = "";
    },
  },
};
