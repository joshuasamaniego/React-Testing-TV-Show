import React from 'react';
import { render, screen } from "@testing-library/react";
// import userEvent from "@testing-library/user-event";
// No need for userEvent here because Episodes component doesn't
// have any user activity
import Episodes from "./Episodes";

// test("Whether Episodes renders without any errors", () => {
//     render(<Episodes episodes={[]} />);
// });

const episodesData = [
    {
      id: 553946,
      url:
        "http://www.tvmaze.com/episodes/553946/stranger-things-1x01-chapter-one-the-vanishing-of-will-byers",
      name: "Chapter One: The Vanishing of Will Byers",
      season: 1,
      number: 1,
      type: "regular",
      airdate: "2016-07-15",
      airtime: "",
      airstamp: "2016-07-15T12:00:00+00:00",
      runtime: 60,
      image: {
        medium:
          "http://static.tvmaze.com/uploads/images/medium_landscape/67/168918.jpg",
        original:
          "http://static.tvmaze.com/uploads/images/original_untouched/67/168918.jpg",
      },
      summary:
        "<p>A young boy mysteriously disappears, and his panicked mother demands that the police find him. Meanwhile, the boy's friends conduct their own search, and meet a mysterious girl in the forest.</p>",
      _links: {
        self: {
          href: "http://api.tvmaze.com/episodes/553946",
        },
      },
    },
    {
      id: 578663,
      url:
        "http://www.tvmaze.com/episodes/578663/stranger-things-1x02-chapter-two-the-weirdo-on-maple-street",
      name: "Chapter Two: The Weirdo on Maple Street",
      season: 1,
      number: 2,
      type: "regular",
      airdate: "2016-07-15",
      airtime: "",
      airstamp: "2016-07-15T12:00:00+00:00",
      runtime: 60,
      image: {
        medium:
          "http://static.tvmaze.com/uploads/images/medium_landscape/72/181376.jpg",
        original:
          "http://static.tvmaze.com/uploads/images/original_untouched/72/181376.jpg",
      },
      summary:
        "<p>While the search for the missing Will continues, Joyce tells Jim about a call she apparently received from her son. Meanwhile, Jane warns Mike that there are bad people after her, and he realizes that she knows what happened to Will.</p>",
      _links: {
        self: {
          href: "http://api.tvmaze.com/episodes/578663",
        },
      },
    },
    {
      id: 578664,
      url:
        "http://www.tvmaze.com/episodes/578664/stranger-things-1x03-chapter-three-holly-jolly",
      name: "Chapter Three: Holly, Jolly",
      season: 1,
      number: 3,
      type: "regular",
      airdate: "2016-07-15",
      airtime: "",
      airstamp: "2016-07-15T12:00:00+00:00",
      runtime: 60,
      image: {
        medium:
          "http://static.tvmaze.com/uploads/images/medium_landscape/67/168920.jpg",
        original:
          "http://static.tvmaze.com/uploads/images/original_untouched/67/168920.jpg",
      },
      summary:
        "<p>While Nancy looks for a missing Barbara and realizes that Jonathan may have been the last person to see her, Mike and his friends go out with Jane to find the missing Will. Meanwhile, Jim tracks Will to the lab.</p>",
      _links: {
        self: {
          href: "http://api.tvmaze.com/episodes/578664",
        },
      },
    },
  ];

test('On first render, no episodes are desplayed', () => {
    //Arrange:
    render(<Episodes episodes={[]}/>);
    //Act: Query for episode and make a negative assertion.
    const episodes = screen.queryAllByText(/episode/i);
    // Use query for negative assertions
    // AND use queryAllByText(or similar) for anything you're mapping over.
    //Assert:
    expect(episodes).toHaveLength(0);
})

test('Component rerencer with episodes when props change', () => {
    const { rerender } = render(<Episodes episodes={[]}/>);
    // rerender a component with new props as if user had clicked on the season
    // So it's not a click but a side effect
    rerender(<Episodes episodes={episodesData} />);
    // Assert that the episode cards are rendering
    expect(screen.getAllByText(/episode/i)).toHaveLength(3);
    // You can have your query inside your assertion if you want!
})