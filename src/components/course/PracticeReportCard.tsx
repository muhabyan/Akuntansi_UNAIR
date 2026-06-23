import { StatementFull, StatementBuilder } from '../StatementBuilder';
import type { StatementSpec } from '../../types';

interface PracticeReportCardProps {
  kind: 'statement' | 'builder';
  spec: StatementSpec;
  instructions?: string;
}

export default function PracticeReportCard({ kind, spec, instructions }: PracticeReportCardProps) {
  if (kind === 'statement') {
    return <StatementFull spec={spec} />;
  }
  if (kind === 'builder') {
    return <StatementBuilder spec={spec} instructions={instructions} />;
  }
  return null;
}
