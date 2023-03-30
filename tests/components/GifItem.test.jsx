import { render, screen } from "@testing-library/react"
import { GifItem } from "../../src/components/GifItem"

describe('Testing GifItem component', () => { 
    const title = 'Title of item';
    const url = 'https://fakeurl/file.jpg';
    test('should match with snapshot', () => { 
        const { container } = render(
            <GifItem title={title} url={url} />
        );
        
        expect(container).toMatchSnapshot();
     })

    test('should show the image with the src and alt', () => { 
        render(
            <GifItem title={title} url={url} />
        );
        // screen.debug();
        // expect(screen.getByRole('img').alt).toBe(title);
        
        const {src, alt} = screen.getByRole('img');
        expect(src).toBe(url);
        expect(alt).toBe(title);
    })

    test('should show the title', () => { 
        render(
            <GifItem title={title} url={url} />
        );

        expect(screen.getByText(title)).toBeTruthy();
    })
 })