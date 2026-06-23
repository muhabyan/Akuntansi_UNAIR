import fs from 'fs';
import { ekpaPraUasTm8_14 } from './src/data/ekpa/ekpaData.ts'; // Node won't resolve TS directly without loader, we need a TS-node or we can just parse JSON.

// Wait, node can't import .ts file natively without tsx or ts-node.
// Let's use tsx or write it with node fs.
