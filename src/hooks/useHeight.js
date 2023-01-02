import { useState, useEffect, useRef } from 'react';

export default function useHeight(data) {
  const container = useRef(null);

  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (!container.current) return;
    setHeight(container.current.getBoundingClientRect().bottom);
  }, [data]);

  return [container, height];
}
