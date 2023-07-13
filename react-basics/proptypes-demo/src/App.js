import './App.css';
import PropTypes from "prop-types";

function LastChildComponent(){
  return <div>From Ocean</div>
}

function ChildComponent(props){
  return <h1>From Space</h1>
}

ChildComponent.propTypes = {
  // name is required and must have a value of type string
  name: PropTypes.string.isRequired,

  // age is not required but it it is provided then type should be a number
  age: PropTypes.number,

  // onHandle should be a function but it is not mendatory
  onHandle: PropTypes.func,

  // somthing renderable which react can be able to render
  renderable: PropTypes.node,

  // custom props type
  status: PropTypes.arrayOf(function(propValue, key, componentName, location, propFullName) {
    if (!/(pending|completed)/.test(propValue[key])) {
      return new Error(`Status should be "pending" or "completed" but getting "${propValue[key]}"`);
    }
  }),

  // this will throw an error if the property is not matches with the provided property.
  screenSize: PropTypes.exact({ 
    width: PropTypes.number.isRequired,
    height: PropTypes.number.isRequired,
    screenName: PropTypes.string
  }),

  // to ensure that one of the properties is matched with the provided property type
  blogTypes: PropTypes.oneOf([true, 'sports']), 

  // An object that could be one of many types
  movieName: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.instanceOf(Promise)
  ]),

  // An array of a certain type
  digits: PropTypes.arrayOf(PropTypes.number),
}

function App() {

  function demoFunc(){
    console.log("Function");
  }

  return (
    <div className="App">
      <ChildComponent 
        name={"12"} 
        onHandle={demoFunc} 
        renderable={<LastChildComponent />} 
        status={['pending', 'completed']}
        screenSize={{ width: 15, height: 15}}
        blogTypes={true}
        movieName={new Promise((res, rej) => res(''))}
        digits={[12, 45, 67]}
        />
    </div>
  );
}

export default App;
