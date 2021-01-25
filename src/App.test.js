import React from 'react';
import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import App from "./App";

import { fetchShow as mockFetchShow } from './api/fetchShow';

test("App renders without any errors", () => {
    render(<App />);
})

// test("Renders seasons/episode data on initial render", async () => {
//     mockFetchShow.mockResolvedValueOnce({
//         data: [
//             {name: "Mission 1", mission_id: "mission 1"},
//             {mission_name: "Mission 2", mission_id: "mission 2"},
//         ]
//     });

//     //Arrange: render app
//     render(<App />);
//     //Act: get data from API? and push button
//     const button = screen.getByRole('button');
//     userEvent.click(button);
    
//     //Assert: expect same amount of missions returned, as our api does.
//     await waitFor(() => {
//         expect(screen.getAllByTestId('mission')).toHaveLength(2);
//     })
// }); 