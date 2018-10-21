const validation = {
  email: {
    presence: {
      message: '^Please enter an email address'
    },
    email: {
      message: '^Please enter a valid email address'
    }
  },
  
  password: {
    presence: {
      message: '^Please enter a password'
    },
    length: {
      minimum: 8,
      message: '^Your password must be at least 5 characters'
    }
  },
  handle: {
    presence: {
      message: '^Please enter a handle'
    },
    handle: {
      message: '^This handle is already taken. Please enter a new one'
   }
  },
}

export default validation
