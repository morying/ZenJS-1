import isArray from '../../shared/global/Array/isArray';
import define from '../../shared/util/defineValue';

/**
 * 判断传入参数的类型
 * @param {Object} obj 需要判断类型的参数
 * @returns {String}
 */
export default function $typeof( obj ){
  let type;

  if( obj == null ) return obj + '';
  if( ( type = typeof obj ) === 'object' ){
    if( isArray( obj ) )
      return 'array'
  }
  return type;
}

define( window, '$typeof', $typeof );