# react-pin
> Pin component for react.


## properties:
```javascript

  static propTypes = {
    className:PropTypes.string,
    onFocus:PropTypes.func,
    onBlur:PropTypes.func,
  };

  static defaultProps = {
    onFocus:noop,
    onBlur:noop,
  };
  
```

## usage:
```jsx

// install: npm install afeiship/react-pin --save
// import : import ReactPin from 'react-pin'

class App extends React.Component{
  _onFocus = (e) =>{
    console.log('focus!',this);
  };
  _onBlur = (e) =>{
    console.log('blur!',this);
  };

  render(){
    return (
      <div className="hello-react-pin">
        <ReactPin onFocus={this._onFocus} onBlur={this._onBlur} />
        <textarea name="" id="" cols="30" rows="10" placeholder="input your text..." />
    </div>
    );
  }
}

```



## resource:
+ http://www.cnblogs.com/Kummy/p/4966937.html
+ https://github.com/steven5538/vue-button
+ https://yarnpkg.com/en/docs/install

