import { useState, useEffect, useRef } from 'react';

export default function useAnimatedUnmounting({
	animationIn = '', animationOut = '', duration = 0,
}) {
	const mountingState = useRef('unmounted');
	const [isComponentShowing, setIsComponentShowing] = useState(false);
	const [currentAnimation, setCurrentAnimation] = useState(animationIn);

	const mount = () => {
		if (mountingState.current !== 'unmounting') {
			setIsComponentShowing(true);
			setCurrentAnimation(animationIn);
			mountingState.current = 'mounted';
		}
	};
	const unmount = () => {
		setCurrentAnimation(animationOut);
		mountingState.current = 'unmounting';
	};

	useEffect(() => {
		if (mountingState.current === 'unmounting') {
			setTimeout(() => {
				setIsComponentShowing(false);
				mountingState.current = 'unmounted';
			}, duration);
		}
	}, [currentAnimation]);

	return [mount, unmount, isComponentShowing, currentAnimation];
}
