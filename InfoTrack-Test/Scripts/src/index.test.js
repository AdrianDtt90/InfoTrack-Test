import React from 'react';
import ReactDOM from 'react-dom';
import 'babel-polyfill';
import { triggerRequest } from './Utils/ServerRequests.js';

//Unit Tests with Jest
describe('directly invoking the "triggerRequest" method from component', () => {
    it('getting the result without inputs', async  () => {

        const response = await triggerRequest();
        expect(typeof response).toBe('string');
        expect(response).not.toBe('');

    });

    it('getting the result without url', async () => {

        const response = await triggerRequest(null, 'online title search');
        expect(typeof response).toBe('string');
        expect(response).not.toBe('');

    });

    it('getting the result without keywords', async () => {

        const response = await triggerRequest('www.infotrack.com.au', null);
        expect(typeof response).toBe('string');
        expect(response).not.toBe('');

    });

    it('getting the result with empty inputs', async () => {

        const response = await triggerRequest('', '');
        expect(typeof response).toBe('string');
        expect(response).not.toBe('');

    });
});