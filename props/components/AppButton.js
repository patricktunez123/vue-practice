export default {
  template: `
        <button :class="{
          'rounded px-4 py-4 hover:bg-gray-400 disabled:cursor-not-allowed': true,
           'bg-blue-600 ': type==='primary',
            'bg-yellow-200 ': type==='secondary',
             'bg-gray-200 ': type==='muted',
             'is-loading': processing
        }" 
        :disabled="processing">
        <slot/>
        </button>
          `,
  props: {
    type: {
      type: String,
      default: "primary",
    },
    processing: {
      type: Boolean,
      default: false,
    },
  },
};
