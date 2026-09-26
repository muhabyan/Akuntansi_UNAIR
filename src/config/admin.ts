// =============================================================
// src/config/admin.ts
// Whitelist dan fungsi utilitas otorisasi Admin AkuntansiHub
// =============================================================

export const ADMIN_EMAILS = [
  'byan.ammad@gmail.com',
] as const;

/**
 * Memeriksa apakah email pengguna terdaftar sebagai Administrator.
 */
export function isAdminUser(email?: string | null): boolean {
  if (!email) return false;
  const cleanEmail = email.toLowerCase().trim();
  return ADMIN_EMAILS.some((admin) => admin.toLowerCase() === cleanEmail);
}
