import React from 'react';
import calculateBlock from '../calculateBlock'

describe('calculateBlock', () => {
    test('should handle empty command', () => {
        const result = calculateBlock('');
        expect(result).toEqual('Empty command is not allowed');
    });
    test('should handle correct command', () => {
        const result = calculateBlock('PLPLPLPLPLPLPLPLPLPL');
        expect(result).toEqual('A000000000');
    });
});
