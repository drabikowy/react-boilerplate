const React = require('react');

// stateless functional component
const Main = (props) => {
   return (
      <div>
         <div>
            <p>Main.jsx Loaded, Hello React!</p>
            {/* call props without this, becouse they are usual function argument */}
            {props.children}
         </div>
      </div>
   )
}

module.exports = Main;
