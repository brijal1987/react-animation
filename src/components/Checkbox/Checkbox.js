import React from 'react'
import './Checkbox.scss';
import { CSSTransition } from 'react-transition-group';
import Label from '../Label/Label';

export const CheckBox = props => {
  return (
    <CSSTransition key={props.id} timeout={500} classNames="move">
      <li className={"li-box" + (props.isChecked ? ' move-exit-active' : '')}>
        <label>
          <input key={props.id} onChange={props.handleCheckElement} type="checkbox" checked={props.isChecked} value={props.value} />
          <Label  {...props}></Label>
        </label>
      </li>
    </CSSTransition>
  );
}

export default CheckBox