import { RefObject, useEffect, useRef } from 'react';

const DEFAULT_EVENTS = ['touchstart', 'mousedown'];

export default function useClickOutside<T extends HTMLElement = any>(
  handler: () => void,
  events: string[] | null,
  nodes?: RefObject<HTMLElement>[],
) {
  const ref = useRef<T>(null);

  useEffect(() => {
    const listener = (e: any) => {
      if (Array.isArray(nodes)) {
        const shouldTrigger = nodes.every(
          node => !!node?.current && !node.current.contains(e.target),
        );

        shouldTrigger && handler();
      } else {
        if (ref.current && !ref.current.contains(e.target)) {
          handler();
        }
      }
    };

    (events || DEFAULT_EVENTS).forEach(e =>
      document.addEventListener(e, listener),
    );
    return () => {
      (events || DEFAULT_EVENTS).forEach(e =>
        document.removeEventListener(e, listener),
      );
    };
  }, [nodes, events, handler]);

  return ref;
}
