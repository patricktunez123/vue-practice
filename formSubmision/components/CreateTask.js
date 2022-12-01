export default {
  template: `
        <section class='mt-4'>
      <form @submit.prevent="handleAddTask">
   <input v-model="newTask" placeholder='Type new task...' />
   <button>Submit</button>
   </form>
    </section>
    `,

  data() {
    return {
      newTask: "",
    };
  },

  methods: {
    handleAddTask() {
      this.$emit("handleAddTask", this.newTask);
      this.newTask = "";
    },
  },
};
