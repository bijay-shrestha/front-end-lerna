 import React , { memo } from 'react';
 import { InputGroup} from 'react-bootstrap';
 import CInputGroupAppend from './CInputGroupAppend';
 import CInputGroupPrepend from './CInputGroupPrepend';
 const CInputGroup = (props) => {
   return (
       <>
       <InputGroup className={props.classes} 
                   id={props.id} 
                   as={props.as} 
                   bsPrefix={props.bsPrefix}
                   size={props.size}>
       { props.prepend ? <CInputGroupPrepend id={"prepend"+props.id} className={props.appendClassName} prepend={props.prepend}/>:null}
       { props.append ?  <CInputGroupAppend id={"append"+props.id} className={props.prependClassName} append={props.append}/>:null}
        </InputGroup>
       
       </>
   )
 }
 export default memo(CInputGroup);