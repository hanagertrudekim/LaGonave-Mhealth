  /* eslint-disable no-template-curly-in-string */  

export const REGISTER_VALIDATE_MESSAGE = {
    required: '${label} is required!',
    types: {
      number: '${label} is not a valid number!',
    },
    number: {
      range: '${label} must be between ${min} and ${max}',
    },
  };