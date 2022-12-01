export default {
  template: `
        <button class='bg-gray-200 rounded px-4 py-4 hover:bg-gray-400 disabled:cursor-not-allowed' :disabled="processing"><slot/></button>
          `,
  data() {
    return {
      processing: true,
    };
  },
};
