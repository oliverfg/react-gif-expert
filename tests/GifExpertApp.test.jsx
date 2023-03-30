import { fireEvent, render, screen } from '@testing-library/react';
import GifExpertApp from '../src/GifExpertApp';

describe('Testing GifExpertApp component', () => { 
    test('should do anything with category duplicated', () => {
        render(<GifExpertApp />);
        const input = screen.getByRole('textbox');
        const form = screen.getByRole('form');

        fireEvent.input(input, {target: {value: 'One Punch'}})
        fireEvent.submit(form);

        expect(screen.getAllByRole('heading', {level: 3}).length).toBe(1);
    });

    test('should add new category', () => {
        render(<GifExpertApp />);
        const input = screen.getByRole('textbox');
        const form = screen.getByRole('form');

        fireEvent.input(input, {target: {value: 'Valorant'}})
        fireEvent.submit(form);

        expect(screen.getAllByRole('heading', {level: 3}).length).toBe(2);
    });
});