function List(props) {
  const category = props.category;

	let listItems = []

	if (props.items) {
  props.items.sort((a, b) => b.price - a.price);
  // fruits.sort((a, b) => a.name.localeCompare(b.name));

  listItems = props.items.map((fruit, index) => (
    <li key={index}>
      {index + 1}. {fruit.name} | {fruit.color} | {fruit.price}
    </li>
  ));
	
	}


  return (
    <div>
      <h3 className="list-category">{category}</h3>
      {listItems.length > 0 
			? <ul className="list-items">{listItems}</ul>
			: <p>No items to display</p>}
    </div>
  );
}

List.defaultProps = {
	category: "Category",
	items: []
}

export default List;
