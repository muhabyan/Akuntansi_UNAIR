// Sementara: kartu review UAS (tm 16) masih memakai bacaan lama sampai kunci review UAS ditulis ulang.
// TM 9–15 sudah ditulis baru dari buku (modules/tm9–tm15) dan tidak memakai berkas ini.
// Berkas ini dan modules/legacy/tm14.ts dihapus ketika review UAS selesai.
import type { Reading } from '../../types';
import { TM14_READING as OLD_UAS_REVIEW } from './modules/legacy/tm14';

/** Kartu UAS memakai bacaan review lama; tm 16 sesuai peta kontrak (UAS = kunci 16). */
export const LEGACY_UAS: Reading = { ...OLD_UAS_REVIEW, tm: 16 };
