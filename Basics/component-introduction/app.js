class Jedi extends React.Component {
  render() {
    return (
      <div>I am a Jedi Component</div>
    );
  }
}

class Application extends React.Component {
  render() {
    return (
      <div>
        App
      </div>
    );
  }
}

ReactDOM.render(<Application />, document.getElementById('app'));
