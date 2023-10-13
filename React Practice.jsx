function MyButton () {
    return (
        <button>My Button</button>
    );
}

export default function () {
    return (
        <div>
            <h1>Welcome to my World</h1>
            <MyButton />
        </div>
    );
}


<img className="fremzy" />

.fremzy {
    color: red;
    border-radius: 50%
};

return (
    <img 
    className="fremzy"
src= {user.imageUrl} 
/>
);

const user = {
    name: 'Samuel Okoye',
    imageUrl: './images/sam.jpg',
    imageSize: 90,
};

export default function () {
  return (
    <>
    <h1>{user.name}</h1>
    <img className="fremzy" 
    src={user.imageUrl} 
    alt={'photo of ' + user.name} 
    style = {{
        width: user.imageSize,
        height: user.imageSize
    }}
    />
    </>
  );
};

let content;
if (isLoggedIn) {
    content = <AdminPanel />;
} else {
    content = <LoginForm />;
}
return (
    <div>
        {content}
    </div>
);

const products = [
    {title: 'Cabbage', isFruit: false, id: 1},
    {title: 'Garlic', isFruit: false, id: 2},
    {title: 'Apple', isFruit: true, id: 3},
];

export default function shoppingList() {
   const listItems = products,map(product =>
    <li
    key={product.id}
    style = {{
        color: product.isFruit ? 'magenta' : 'darkgreen'
    }}
    >
       {product.title} 
    </li>
    );

    return (
        <ul>{listItems}</ul>
    );
}

// Responding to events in react
function MyButton() {
    function handleClick() {
      alert('You clicked me!');
    }
  
    return (
      <button onClick={handleClick}>
        Click me
      </button>
    );
  }

//   Updating the screen
// first
import { useState } from 'react';

// Now you can declare a state variable inside your component:

function MyButton() {
    const [count, setCount] = useState(0);
  
    function handleClick() {
      setCount(count + 1);
    }
  
    return (
      <button onClick={handleClick}>
        Clicked {count} times
      </button>
    );
  }