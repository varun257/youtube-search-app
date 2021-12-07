import { render, screen } from '@testing-library/react';
import VideoList from './Videolist';

test('renders empty list message', () => {
    // ..set props
    const props = {
        videos: [],
    }
    render(<VideoList {...props}/>);
    const element = screen.getByText("No Results...");
    expect(element).toBeInTheDocument();
});

test('renders card if list items are not empty', () => {
    const props = { videos: [{ etag: 'id',  id: { videoId: 'someId'}}] }
    render(<VideoList {...props}/>);
    const element = screen.getByTestId("card");
    expect(element).toBeInTheDocument();
})
