import Stack from '../stack';

describe('My stack', () => {

    let stack;
    beforeEach(() => {
        stack = new Stack();
    })

    it('is created empty', () => {
        expect(stack.top).toBe(-1);
        expect(stack.items).toEqual({});
    });

    it('can stack items at the top', () => {
        stack.push('🌽')
        expect(stack.top).toBe(0)
        expect(stack.peek).toBe('🌽')
    });

    it('can pop items off the top', () => {
        const oldtop = stack.top
        const oldstacktop = stack.peek
        const popped = stack.pop()
        expect(popped).toBe(oldstacktop)
        expect(stack.top).toBe(oldtop-1)
    });
})