// import { setupWorker } from 'msw'

// import { handlers } from './handlers'

// // This configures a Service Worker with the given request handlers.

// export const worker = setupWorker(...handlers)

// import { setupWorker } from 'msw';
// import { db } from './db';

// // for browser environments
// export const worker = setupWorker(...db.user.toHandlers('rest', 'http://localhost:8000/api/'));


// src/mocks/browser.js

import { setupWorker } from 'msw'

import { handlers } from './handlers'

// This configures a Service Worker with the given request handlers.

export const worker = setupWorker(...handlers)