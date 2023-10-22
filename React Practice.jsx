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

// ignore the lines of code below
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './styles.css';

import App from './App';

export default function Square() {
    return (
      <>
        <div className="board-row">
          <button className="square">1</button>
          <button className="square">2</button>
          <button className="square">3</button>
        </div>
        <div className="board-row">
          <button className="square">4</button>
          <button className="square">5</button>
          <button className="square">6</button>
        </div>
        <div className="board-row">
          <button className="square">7</button>
          <button className="square">8</button>
          <button className="square">9</button>
        </div>
      </>
    );
  }

  export default function Board() {
  return (
    <>
      <div className="board-row">
        <button className="square">1</button>
        <button className="square">2</button>
        <button className="square">3</button>
      </div>
      <div className="board-row">
        <button className="square">4</button>
        <button className="square">5</button>
        <button className="square">6</button>
      </div>
      <div className="board-row">
        <button className="square">7</button>
        <button className="square">8</button>
        <button className="square">9</button>
      </div>
    </>
  );
}

// exempt

function square () {
    return <button className="square">1</button>
  }
  
  export default function Board() {
    return (
      <>
      <div className = "board-row">
      <square />
      <square />
      <square />
       </div>
      <div className = "board-row">
      <square />
      <square />
      <square />
      </div>
      <div className = "board-row">
      <square />
      <square />
      <square />
      </div>
      </>
    ); 
  }
  

//   exempt
export default function Board() {
    // ...
    return (
      <>
        <div className="board-row">
          <Square value={squares[0]} onSquareClick={() => handleClick(0)} />
          <Square value={squares[1]} onSquareClick={() => handleClick(1)} />
          <Square value={squares[2]} onSquareClick={() => handleClick(2)} />
        </div>
        <div className="board-row">
          <Square value={squares[3]} onSquareClick={() => handleClick(3)} />
          <Square value={squares[4]} onSquareClick={() => handleClick(4)} />
          <Square value={squares[5]} onSquareClick={() => handleClick(5)} />
        </div>
        <div className="board-row">
          <Square value={squares[6]} onSquareClick={() => handleClick(6)} />
          <Square value={squares[7]} onSquareClick={() => handleClick(7)} />
          <Square value={squares[8]} onSquareClick={() => handleClick(8)} />
        </div>
      </>
    );
  };

  export default function Board() {
    //...
  }
  
  function calculateWinner(squares) {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a];
      }
    }
    return null;
  }

  export default function Header() {
    return (
        <h1>The new era of technology</h1>
    )
  }

  function Profile() {
    return (
      <img
        src="https://i.imgur.com/QIrZWGIs.jpg"
        alt="Alan L. Hart"
      />
    );
  }
  
  export default function Gallery() {
    return (
      <section>
        <h1>Amazing scientists</h1>
        <Profile />
        <Profile />
        <Profile />
      </section>
    );
  }

  function Content() {
    return (
      <p>Lorem ipsum dolor sit amet.</p>
    );
  };

  export defaulf function Body () {
    return(
      <div>
      <h1>About our company</h1>
      <Content />
      </div>
    )
  }

  import Content from './Content.js';

  export default function Page () {
    return(
      <Content />
    )
  }


  // how to import and export a default function

  export default function Transaction () {
    return (
      <ul>
        <li>cars</li>
        <li>Accessaries</li>
      </ul>
    );
  }

  import Transactions from ',/transaction.js';

  function OtherItems () {
    return (
      <Transactions />
    )
  }

  // importing and exporting a named function 

  export function MyList () {
    return (
      <ul>
      <li>cars</li>
      <li>Accessaries</li>
    </ul>
    );
  }

  import {MyList} from './MyList.js';

  function PageDetails () {
       return (
        <MyList />
       );
  }

  // exporting and importing multiple components from the same file.

// Note: A file can only have one default export, but can have multiple named export!


