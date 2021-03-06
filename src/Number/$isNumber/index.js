import isNumber from "../../shared/util/isNumber";
import defineValue from "../../shared/util/defineValue";
import Number from "../../shared/global/Number/index";


export default function $isNumber( obj ){
  if( isNumber( obj ) || typeof obj === 'string' ){
    if( !isNaN( obj - parseFloat( obj ) ) ){
      return true;
    }
  }
  return false;
}

defineValue( Number, '$isNumber', $isNumber );