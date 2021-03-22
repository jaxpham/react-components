var App = () => (
  <div>
   <h2>My To Do List</h2>
   <TodoList />
  </div>
);

var TodoList = () => (
  <div>
      <GroceryList/>
  </div>

);

var GroceryList = () => (
  <div>
    <GroceryListItem groceryListItem={['Ham','Cheese','Honey']}/>
  </div>
 )


// var GroceryListItem = (props) => {

//   var onListItemClick = (event) => {
//     console.log('I got clicked!');
//   }

//   return (
//     <ul>
//       {/* {console.log('this is the props', props)} */}
//       <li onClick={onListItemClick}>{props.groceryListItem[0]}</li>
//       <li>{props.groceryListItem[1]}</li>
//       <li>{props.groceryListItem[2]}</li>
//     </ul>
//   )
// }
class GroceryListItem extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <ul>
        {/* {console.log('this is the props', props)} */}
        <li>{this.props.groceryListItem[0]}</li>
        <li>{this.props.groceryListItem[1]}</li>
        <li>{this.props.groceryListItem[2]}</li>
      </ul>
    )
  }
}


ReactDOM.render(<App />, document.getElementById('app'));