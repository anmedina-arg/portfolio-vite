// Rail jump-nav scroll-spy.
// The active section is the last one (in DOM order) whose top has crossed a probe line
// 30% down the viewport (at most 160px); at the very bottom of the page the last id wins, so a short
// final section (the contact footer) can still become active. `ids` must be in DOM order.
// Replaces the earlier "midpoint crossing the viewport center" algorithm, which never
// activated short sections and could mark the wrong one on load.
import { useEffect, useState } from 'react';

const PROBE_RATIO = 0.3;
// On a tall window 30% is far down: a short section (Feedback) sitting at the top would lose to
// the one right under it. The probe stops at this many pixels so the section a link just
// scrolled to is the active one at any height.
const PROBE_MAX_PX = 160;

export const useRailSpy = (ids: string[]): string => {
  const [activeId, setActiveId] = useState(ids[0] ?? '');

  useEffect(() => {
    const handleScroll = () => {
      const probe = Math.min(window.innerHeight * PROBE_RATIO, PROBE_MAX_PX);
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
