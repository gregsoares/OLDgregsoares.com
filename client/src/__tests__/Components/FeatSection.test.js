import React from "react";
import { screen, render } from "@testing-library/react";
import { FeatSection } from "../../Components/FeaturedSection/FeatSection";

describe("FeatSection test suite", () => {
  test("expect to render FeatSection without errors", () => {
    render(
      <FeatSection
        featTitle="Bootstrap Template ➡ Full MERN Stack Template"
        featSubtitle=""
        featText={[
          "Our Smart Health Monitoring Wristwatch can generate a comprehensive report on your vitals depending on your settings either daily, weekly, monthly, quarterly or yearly.",
        ]}
        featTags={["Bootstrap", "Tech Skill", "Pro Debugger"]}
        featImg="somethingGood"
      />
    );
    const checkRes = screen.getByTestId("AgencyContainer");
    expect(checkRes).toBeInTheDocument();
  });

//   test('expect 0 (featImg=""', () => {
//     render(<FeatSection featImg={null} />);
//     const checkRes = screen.queryAllByDisplayValue(0)
//     expect(checkRes).toBe([]);
//   });
});
