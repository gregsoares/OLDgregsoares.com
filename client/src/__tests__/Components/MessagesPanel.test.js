import React from "react";
import { MessagesPanel } from "../../Components/MessagesPanel/MessagesPanel";
import {
  render,
  cleanup,
  screen,
  findAllByTestId,
} from "@testing-library/react";

// TODO: Simple tests making sure it takes in and displays data

describe("MessagesPanel test suite", () => {
  const props = {
    title: "title",
    status: "status",
    date: "123321",
    comment: "comment",
    initials: "initials",
    position: "position",
    name: "name",
    jobTitle: "jobTitle",
  };
  test("expects to render a single MessagesPanel with all props", () => {
    render(
      <MessagesPanel
        title="title"
        status="status"
        date="date"
        comment="comment"
        initials="initials"
        position="position"
        name="name"
        jobTitle="jobTitle"
      />
    );
    const checkTitle = screen.getByTestId("title");
    const checkStatus = screen.getByTestId("status");
    const checkDate = screen.getByTestId("date");
    const checkComment = screen.getByTestId("comment");
    const checkInitials = screen.getByTestId("initials");
    const checkPosition = screen.getByTestId("position");
    const checkName = screen.getByTestId("name");
    const checkJobTitle = screen.getByTestId("jobTitle");

    expect(checkTitle).toBeInTheDocument();
    expect(checkStatus).toBeInTheDocument();
    expect(checkDate).toBeInTheDocument();
    expect(checkComment).toBeInTheDocument();
    expect(checkInitials).toBeInTheDocument();
    expect(checkPosition).toBeInTheDocument();
    expect(checkName).toBeInTheDocument();
    expect(checkJobTitle).toBeInTheDocument();
  });
});
