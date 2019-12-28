import React from 'React'

// Example changing State from child to parent with and without hooks 
class Parent extends React.Component {
  state = { value: "" }

  handleChange = (newValue) => {
    this.props.setState({ value: newValue });
  }
  
  render() {
    // We pass a callback to MyInput
    return <MyInput value={this.state.value} onChange={this.handleChange} />
  }
}

class MyInput extends React.Component {
   handleChange = (event) => {
    // Here, we invoke the callback with the new value
    this.props.onChange(event.target.value);
  }

  render() {
	return <input value={this.props.value} onChange={this.handleChange} />
  }
}
// With hooks, we can follow the same pattern and pass a callback function down to MyInput:

function Parent() {
  const [value, setValue] = React.useState("");

  function handleChange(newValue) {
    setValue(newValue);
  }

  // We pass a callback to MyInput
  return <MyInput value={value} onChange={handleChange} />;
}

function MyInput(props) {
  function handleChange(event) {
    // Here, we invoke the callback with the new value
    props.onChange(event.target.value);
  }
  
  return <input value={props.value} onChange={handleChange} />
}