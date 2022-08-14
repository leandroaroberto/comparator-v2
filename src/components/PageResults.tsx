import React, {FunctionComponent} from 'react';
import {Box} from './Box'
import { StyledPageResult } from '../global.styled';


const PageResults = (props : any) => {
    return (
      <StyledPageResult>
         <Box result={props.computerA}/>
         <Box result={props.computerB}/>     
      </StyledPageResult>
    )
}

export default PageResults;

