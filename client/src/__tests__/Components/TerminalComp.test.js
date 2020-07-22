import React from 'react';
import { render, screen } from "@testing-library/react";
import { TerminalComp } from '../../Components/TerminalComp/TerminalComp';

// TODO: Takes in BOTH props and displays it
// TODO: Props are of String type 
// TODO: Only 'text' can be empty
test('Render Terminalcomp: getByTestId: "TerminalComp" ', () => {
    render(<TerminalComp />);
    expect(screen.getByTestId('TerminalComp')).toBeInTheDocument();
});