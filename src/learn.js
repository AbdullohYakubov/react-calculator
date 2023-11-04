function useState() {
  const object = {
    state: initalValue,
    setState: function (newValue) {
      this.state = newValue;
    },
  };

  return [object.state, object.setState];
}

useState();

// const [intialValue, setIntialValue] = useState();
