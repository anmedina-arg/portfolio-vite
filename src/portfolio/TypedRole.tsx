// Types each text letter by letter, then deletes it with backspace before the next one, and
// rests on the last text. Plays once (no loop: nothing keeps moving after ~5s, WCAG 2.2.2).
// Screen readers get every text once; reduced motion shows the last text straight away.
import { useEffect, useState } from 'react';

export type TypedRoleProps = {
  texts: string[];
  /** Cursor shape; the text never changes width reservations, only the caret differs. */
  cursor?: 'block' | 'underscore' | 'bar';
  /** Optional prompt shown before the text, e.g. ">". */
  prompt?: string;
  /** Uneven key timing (deterministic, no randomness) instead of a metronome. */
  jitter?: boolean;
};

const TYPE_MS = 45;
const DELETE_MS = 22;
const HOLD_MS = 600;
const GAP_MS = 160;

const sleep = (ms: number) => new Promise<void>((resolve) => setTimeout(resolve, ms));

const prefersReducedMotion = () =>
  typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

const TypedRole: React.FC<TypedRoleProps> = ({ texts, cursor = 'block', prompt, jitter }) => {
  const [shown, setShown] = useState('');
  const [done, setDone] = useState(false);
  const key = texts.join('\u0000');

  useEffect(() => {
    const list = key.split('\u0000');
    const last = list[list.length - 1];
    if (prefersReducedMotion()) {
      setShown(last);
      setDone(true);
      return;
    }
    let cancelled = false;
    const keyMs = (i: number, k: number) => TYPE_MS + (jitter ? ((i * 5 + k * 37) % 7) * 12 : 0);
    (async () => {
      setDone(false);
      for (let i = 0; i < list.length; i++) {
        const text = list[i];
        for (let k = 1; k <= text.length; k++) {
          if (cancelled) return;
          setShown(text.slice(0, k));
          await sleep(keyMs(i, k));
        }
        if (i < list.length - 1) {
          await sleep(HOLD_MS);
          for (let k = text.length - 1; k >= 0; k--) {
            if (cancelled) return;
            setShown(text.slice(0, k));
            await sleep(DELETE_MS);
          }
          await sleep(GAP_MS);
        }
      }
      if (!cancelled) setDone(true);
    })();
    return () => {
      cancelled = true;
    };
  }, [key, jitter]);

  return (
    <>
      <span className="vb-sr-only">{texts.join(', ')}</span>
      <span className="tr-line" aria-hidden="true">
        {prompt && <span className="tr-prompt">{prompt}</span>}
        <span className="tr-text">{shown}</span>
        <span className={`tr-cursor tr-${cursor}${done ? ' is-done' : ''}`} />
      </span>
    </>
  );
};

export default TypedRole;
