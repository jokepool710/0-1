import { afterAll, describe, expect, it } from 'vitest';
import { createApp } from '../src/app.js';
const app = createApp();
afterAll(async () => app.close());
describe('healthz', () => { it('reports healthy', async () => { const response = await app.inject('/healthz'); expect(response.json()).toEqual({ status: 'ok' }); }); });
