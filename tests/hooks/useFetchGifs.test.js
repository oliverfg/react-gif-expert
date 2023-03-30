import { renderHook, waitFor } from '@testing-library/react';
import { useFetchGifs } from '../../src/hooks/useFetchGifs';

describe('Testing useFetchGifs hook', () => { 
    test('should return initial state', () => { 
        const {result} = renderHook(() => useFetchGifs('Valorant'));
        const {images, isLoading} = result.current;

        expect(images.length).toBe(0);
        expect(isLoading).toBeTruthy();
    });

    test('should return a images array and false isLaoding', async () => { 
        const {result} = renderHook(() => useFetchGifs('Valorant'));
        await waitFor(
            () => expect( result.current.images.length).toBeGreaterThan(0)
        );
        
        const {images, isLoading} = result.current;

        expect(images.length).toBeGreaterThan(0);
        expect(isLoading).toBeFalsy();
    });
});