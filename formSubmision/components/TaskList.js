import Task from "./Task.js";

export default {
  components: { Task },
  template: `
        <section>
        <h1 class="text-2xl mb-4" v-show="TasksArr.length !== 0">
         {{Title}}
        </h1>
        <ul v-for="Task in TasksArr" :key="Task.id">
         <Task :Task="Task"></Task>
        </ul>
      </section>
    `,
  props: {
    TasksArr: Array,
    Title: String,
  },
};
