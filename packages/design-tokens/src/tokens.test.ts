import { describe, expect, it } from 'vitest';
import { tokens } from './tokens.js';
describe('design tokens', () => { it('defines the locked foundation palette', () => expect(tokens.color.bgVoid).toBe('#07080A')); });
