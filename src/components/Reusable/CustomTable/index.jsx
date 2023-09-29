import React from 'react';
import { Wrapper } from './styles';

const Table = ({column}) => {
  return (
    <Wrapper>
      <Wrapper.Header>
        {column?.map((v, i) => {
          const { headerName, flex, width } = v;
          return (
            <Wrapper.Column width={width} flex={flex} key={i}>
              <Wrapper.HeaderTitle>{headerName}</Wrapper.HeaderTitle>
            </Wrapper.Column>
          );
        })}
      </Wrapper.Header>
    </Wrapper>
  );
}

export default Table;
