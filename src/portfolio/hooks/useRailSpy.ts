// Rail jump-nav scroll-spy.
// The active section is the last one (in DOM order) whose top has crossed a probe line
// 30% down the viewport; at the very bottom of the page the last id wins, so a short
// final section (the contact footer) can still become active. `ids` must be in DOM order.
// Replaces the earlier "midpoint crossing the viewport center" algorithm, which never
// activated short sections and could mark the wrong one on load.
import { useEffect, useState } from 'react';

const PROBE_RATIO = 0.3;

export const useRailSpy = (ids: string[]): string => {
  const [activeId, setActiveId] = useState(ids[0] ?? '');

  useEffect(() => {
    const handleScroll = () => {
      const probe = window.innerHeight * PROBE_RATIO;
      let current = ids[0] ?? '';

      ids.forEach((id) => {
        const section = document.getElementById(id);
        if (section && section.getBoundingClientRect().top <= probe) current = id;
      });

      const atBottom =
        window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 2;
      if (atBottom && ids.length) current = ids[ids.length - 1];

      setActiveId(current);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, [ids]);

  return activeId;
};
