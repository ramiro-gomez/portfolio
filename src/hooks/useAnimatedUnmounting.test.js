import '@testing-library/jest-dom/extend-expect';
import { renderHook, act } from '@testing-library/react-hooks';
import useAnimatedUnmounting from './useAnimatedUnmounting';

describe('useAnimatedUnmounting', () => {
	it('returns the current state of the animation and its corresponding class', async () => {
		const params = {
			animationIn: 'in',
			animationOut: 'out',
			duration: '100',
		};
		const { result } = renderHook(() => useAnimatedUnmounting(params));
		const [mountComponent, unmountComponent, isComponentShowing, currentAnimation] = result.current;
		expect(isComponentShowing).toBeFalsy();
		expect(currentAnimation).toBe('');

		act(() => mountComponent());
		expect(result.current[2]).toBeTruthy();
		expect(result.current[3]).toBe(params.animationIn);

		act(() => unmountComponent());
		expect(result.current[2]).toBeTruthy();
		expect(result.current[3]).toBe(params.animationOut);

		await act(async () => { // Await unmounting
			await new Promise((resolve) => setTimeout(() => resolve(), params.duration + 1));
		});
		expect(result.current[2]).toBeFalsy();
		expect(result.current[3]).toBe(params.animationOut);

		act(() => mountComponent());
		expect(result.current[2]).toBeTruthy();
		expect(result.current[3]).toBe(params.animationIn);
	});
});
