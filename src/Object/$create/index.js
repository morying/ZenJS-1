import Object from '../../shared/global/Object/index';
import $assign from '../$assign/index';
import create from '../../shared/global/Object/create';

import defineValue from '../../shared/util/defineValue';
import isBoolean from '../../shared/util/isBoolean';
import parametersRest from '../../shared/util/parametersRest';


export default function $create( isNoProto ){
  const args = parametersRest( arguments, 1 );

  if( isBoolean( isNoProto ) || !isNoProto ){
    args.unshift( isNoProto ? create( null ) : {} );
  }else{
    args.unshift( {}, isNoProto );
  }

  return $assign.apply( null, args );
};

defineValue( Object, '$create', $create );