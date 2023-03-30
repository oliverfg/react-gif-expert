import { render, screen } from '@testing-library/react';
import { GifGrid } from '../../src/components';
import { useFetchGifs } from '../../src/hooks/useFetchGifs';

jest.mock('../../src/hooks/useFetchGifs');
describe('Testing in GifGrid component', () => { 
    const category = 'Valorant';
    test('should show loading text', () => { 
        useFetchGifs.mockReturnValue({
            images: [],
            isLoading: true,
        });
        render(<GifGrid category={category} />);

        expect(screen.getByText('Cargando...'));
        expect(screen.getByText(category));
    });

    test('should show items when images loaded', () => { 
        useFetchGifs.mockReturnValue({
            images: [{
                id: 1234,
                title: 'Any title',
                url: 'http://loquesea/img.jpg'
            },
            {
                id: 4321,
                title: 'Other title',
                url: 'http://loquesea/img2.jpg'
            }],
            isLoading: false,
        });

        render(<GifGrid category={category} />);
        expect(screen.getAllByRole('img').length).toBe(2);
    })
});