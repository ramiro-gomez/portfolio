import { useState, useEffect } from 'react';

export default function useAnimatedUnmounting({
	animationIn = '', animationOut = '', time = 0,
}) {
	const [mountingState, setMountingState] = useState('unmounted');
	const [isShowing, setIsShowing] = useState(false);
	const [currentAnimation, setCurrentAnimation] = useState('');

	const mount = () => {
		if (mountingState !== 'unmounting') {
			setMountingState('mounting');
			setIsShowing(true);
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
			}, time);
		} else if (mountingState === 'unmounting') {
			timeoutId = setTimeout(() => {
				setMountingState('unmounted');
				setIsShowing(false);
			}, time);
		}
		return () => {
			clearTimeout(timeoutId);
		};
	}, [mountingState, currentAnimation, time]);

	return [mount, unmount, isShowing, currentAnimation];
}
