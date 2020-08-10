import calculateBlock from '../calculateBlock'

describe('calculateBlock', () => {
    test('should handle empty command', () => {
        const result = calculateBlock('');
        expect(result).toEqual('Empty command is not allowed');
    });
    test('should handle correct command with extreme big number in first row', () => {
        const result = calculateBlock('PLPLPLPLPLPLPLPLPLPL');
        expect(result).toEqual('A000000000');
    });
    test('should handle correct command with normal ops', () => {
        const result = calculateBlock('PMLPMMMLPMLPMML');
        expect(result).toEqual('0211000000');
    });
    test('should handle correct command with multi pickup and one drop', () => {
        //If the robot already holds a block, Pickup will reset position to 0
        const result = calculateBlock('PMPMPM');
        expect(result).toEqual('0000000000');
    });
    test('should handle correct command with multi pickup and one drop', () => {
        const result = calculateBlock('PPPPPPPPPPPPPPPPPPL');
        expect(result).toEqual('1000000000');
    });
    test('should handle correct command with all drop', () => {
        //Lowering without a block does nothing
        const result = calculateBlock('LLLLLLLLLLLLLLLLLLLLL');
        expect(result).toEqual('0000000000');
    });
    test('should handle correct command with extreme max number in first row', () => {
        // Lowering the block on a pile of 15 does nothing
        const result = calculateBlock('PLPLPLPLPLPLPLPLPLPLPLPLPLPLPLPLPLPLPLPLPLPLPLPLPL');
        expect(result).toEqual('F000000000');
    });
    test('should handle correct command by going beyound 9', () => {
        // The robot will not go beyond position 9, Trying to move further does nothing
        const result = calculateBlock('PMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMML');
        expect(result).toEqual('0000000000');
    });
    test('should handle correct command by going just beyound 9 to 10', () => {
        // The robot will not go beyond position 9, Trying to move further does nothing
        const result = calculateBlock('PMMMMMMMMMML');
        expect(result).toEqual('0000000000');
    });
});
