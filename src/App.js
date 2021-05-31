function App(props) {
  const subject = props.subject;

  return (
    <div className="todoapp stack-large">
      <h1>TOODOO</h1>
      <form>
        <h2 className="label-wrapper">
          <label htmlFor="new-todo-input" className="label__lg">
            What needs to be done?
          </label>
        </h2>
      </form>
    </div>
  );
}

export default App;
