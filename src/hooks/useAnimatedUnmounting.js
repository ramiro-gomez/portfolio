import { useState, useEffect } from 'react';

export default function useAnimatedUnmounting({
	animationIn = '', animationOut = '', duration = 0,
}) {
	const [mountingState, setMountingState] = useState('unmounted');
	const [isComponentShowing, setIsComponentShowing] = useState(false);
	const [currentAnimation, setCurrentAnimation] = useState('');

	const mount = () => {
		if (mountingState !== 'unmounting') {
			setMountingState('mounting');
			setIsComponentShowing(true);
			setCurrentAnimation(animationIn);
		}
	};
	const unmount = () => {
		if (mountingState !== 'mounting') {
			setMountingState('unmounting');
			setCurrentAnimation(animationOut);
		}
	};

	useEffect(() => {
		let timeoutId;
		if (mountingState === 'mounting') {
			timeoutId = setTimeout(() => {
				setMountingState('mounted');
			}, duration);
		} else if (mountingState === 'unmounting') {
			timeoutId = setTimeout(() => {
				setMountingState('unmounted');
				setIsComponentShowing(false);
			}, duration);
		}
		return () => {
			clearTimeout(timeoutId);
		};
	}, [mountingState, currentAnimation, duration]);

	return [mount, unmount, isComponentShowing, currentAnimation];
}
