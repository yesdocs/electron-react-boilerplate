// @flow
import React from 'react';
import PointTarget from 'react-point'
import ScalingText from './ScalingText';
import styles from './CalculatorKey.css';
import routes from '../constants/routes';



export default class CalculatorKey extends React.Component {
    render() {
      const { onPress, className, ...props } = this.props
      
      return (
        <PointTarget onPoint={onPress}>
          <button className={styles.calculatorkey + ` ${className}`} {...props}/>
        </PointTarget>
      )
    }
  }