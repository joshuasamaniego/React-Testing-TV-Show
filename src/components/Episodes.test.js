import React from 'react';
import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import Episodes from "./Episodes";

test("Whether Episodes renders without any errors", () => {
    render(<Episodes episodes={[]} />);
});