import './dev.scss';

import ReactPin from './main';

/*===example start===*/

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
/*===example end===*/

ReactDOM.render(
    <App />,
    document.getElementById('app')
);
