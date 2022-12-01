export default {
  template: `
     <label>
            <li>
              {{Task.name}}
              <input type="checkbox" v-model="Task.complete" />
            </li>
          </label>
    `,
  props: {
    Task: Object,
  },
};
