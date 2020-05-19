import React from 'react';
import { render, screen } from "@testing-library/react";
import { TerminalComp } from './TerminalComp';

test('Render Terminalcomp: getByTestId: "TerminalComp" ', () => {
    render(<TerminalComp />);
    expect(screen.getByTestId('TerminalComp')).toBeInTheDocument();
});