import React,{PureComponent} from 'react';

import NxDomEvent from 'next-dom-event';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import noop from 'noop';

export default class extends PureComponent{
  /*===properties start===*/
  static propTypes = {
    className:PropTypes.string,
    onFocus:PropTypes.func,
    onBlur:PropTypes.func,
  };

  static defaultProps = {
    onFocus:noop,
    onBlur:noop,
  };
  /*===properties end===*/

  componentWillMount(){
    this.attachEvents();
  }

  componentWillUnMount(){
    this._docFocus.destroy();
    this._docBlur.destroy();
  }

  attachEvents(){
    this._docFocus = NxDomEvent.on(document,'focus',this.props.onFocus.bind(this),true);
    this._docBlur = NxDomEvent.on(document,'blur',this.props.onBlur.bind(this),true);
  }

  render(){
    const {className,...props} = this.props;
    return (
      <div {...props} className={classNames('react-pin',className)} />
    );
  }
}
