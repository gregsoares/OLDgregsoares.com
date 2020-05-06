import React from 'react';

import { Container } from "../Components/Container/Container";

const Index = () => {

  return (
    <div data-testid="IndexPageContainer">
      <div className="h-20 bg-green w-100">
      <p className="text-4xl border rounded border-black-900">Some CTA</p>
        <p className="text-1xl font-bold text-white">Index</p>
      </div>
      <div className="p-4 m-4 bg-green-600">
        <h1 className="text-2xl font-bold text-blue">Tailwind CSS Implemented</h1>
      </div>
      <Container />
    </div>
  )
}

export default Index;