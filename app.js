var App = () => (
  <div>
   <h2>My To Do List</h2>
   <TodoList />
  </div>
);

var TodoList = () => (
  <div>
      <GroceryList groceryListItem={['Ham','Cheese','Honey']}/>
  </div>

);

var GroceryList = (props) => (
  <ul>
    {props.groceryListItem.map(item =>
      <GroceryListItem item={item}/>
    )}
  </ul>
 );

class GroceryListItem extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      hover: false
    }
  }

  toggleHover() {
    this.setState({
      hover: !this.state.done
    });
  }


  render() {

    // var style = {
    //   textDecoration: this.state.done ? 'line-through' : 'none'
    // };

    var style;
    if (this.state.hover) {
      style = {cursor: 'pointer', fontWeight: 'bolder'}
    } else {
      style = {cursor: 'pointer'}
    }

    return (
      <li style={style}  onMouseOver={this.toggleHover.bind(this)}>{this.props.item}</li>
    )
  }
}


ReactDOM.render(<App />, document.getElementById('app'));