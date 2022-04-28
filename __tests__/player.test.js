
const Player = require('../lib/player');

const Potion = require('../lib/potion');
jest.mock('../lib/potion');
console.log(new Potion());

test('creates a player object', () => {
    const player = new Player('dave');

    expect(player.name).toBe('dave');

    expect(player.health).toEqual(expect.any(Number));

    expect(player.strength).toEqual(expect.any(Number));

    expect(player.agility).toEqual(expect.any(Number));

    expect(player.inventory).toEqual(
        expect.arrayContaining([expect.any(Object)])
    );
})

