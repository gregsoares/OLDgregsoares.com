import React, { useState } from 'react';

export const PageChange = props => {

  const [page, setPage] = useState(
    { current: props.current }
  );
  return (
    <React.Fragment>
      <h1 className="page">{(page.current)}</h1>
    </React.Fragment>
  );
}