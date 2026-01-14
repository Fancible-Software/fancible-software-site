import { useEffect, useState, useRef, RefObject } from 'react';

interface UseInViewOptions {
    threshold?: number;
    rootMargin?: string;
    once?: boolean;
}

export function useInView<T extends HTMLElement>(options: UseInViewOptions = {}): [RefObject<T>, boolean] {
    const { threshold = 0.1, rootMargin = '0px', once = false } = options;
    const ref = useRef<T>(null);
    const [isInView, setIsInView] = useState(false);
    const [hasAppeared, setHasAppeared] = useState(false);

    useEffect(() => {
        const element = ref.current;
        if (!element) return;

        if (once && hasAppeared) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                const isIntersecting = entry.isIntersecting;
                setIsInView(isIntersecting);

                if (isIntersecting && once) {
                    setHasAppeared(true);
                    observer.disconnect();
                }
            },
            { threshold, rootMargin }
        );

        observer.observe(element);

        return () => {
            observer.disconnect();
        };
    }, [threshold, rootMargin, once, hasAppeared]);

    return [ref, once ? hasAppeared : isInView];
}
