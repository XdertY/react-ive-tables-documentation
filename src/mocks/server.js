// import { setupServer } from 'msw/node';
// import { db } from './db';

// // for node/test environments
// export const server = setupServer(...db.user.toHandlers('rest', 'http://localhost:8000/api/'));

// src/mocks/server.js

import { setupServer } from 'msw/node'

import { handlers } from './handlers'

// This configures a request mocking server with the given request handlers.

export const server = setupServer(...handlers)