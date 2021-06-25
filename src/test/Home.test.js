import { render, screen } from '@testing-library/react';
import Home from '../components/Home';

describe('Home', () => {
  it("Must display a title", () => {
    render(<Home />);
    expect(screen.queryByText("COVID-19")).toBeInTheDocument();
  });
});
