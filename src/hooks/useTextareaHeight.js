import { useEffect, useRef } from 'react';

export default function useTextareaHeight(text) {
  const ref = useRef(null);

  useEffect(() => {
    if (ref.current) {
      ref.current.style.height = 'auto';
      ref.current.style.height = `${ref.current.scrollHeight}px`;
    }
  }, [text]);

  return ref;
}
