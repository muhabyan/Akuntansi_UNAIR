import { useEffect, useState } from 'react';
import { LEARNING_EVENT, LEARNING_KEY, readLearningJournal } from '../lib/learningJournal';
export function useLearningJournal() {
  const [journal, setJournal] = useState(readLearningJournal);
  useEffect(() => {
    const update = () => setJournal(readLearningJournal());
    const onStorage = (event: StorageEvent) => { if (event.key === LEARNING_KEY || event.key === null) update(); };
    window.addEventListener(LEARNING_EVENT, update); window.addEventListener('storage', onStorage);
    return () => { window.removeEventListener(LEARNING_EVENT, update); window.removeEventListener('storage', onStorage); };
  }, []);
  return journal;
}
