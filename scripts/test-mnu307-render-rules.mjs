import { testCanonical, testProtected } from './mnu307-canonical-lib.mjs';
await testCanonical(1);
await testCanonical(2);
testProtected();
