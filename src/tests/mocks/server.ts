// src/mocks/server.js
import { setupServer } from 'msw/node';
import { configHandlers } from './handlers';

// This configures a request mocking server with the given request handlers.
export const server = setupServer(...configHandlers);
