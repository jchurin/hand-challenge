/**
 * 👉 : moves the memory pointer to the next cell
 * 👈 : moves the memory pointer to the previous cell
 * 👆 : increment the memory cell at the current position
 * 👇 : decreases the memory cell at the current position.
 * 🤜 : if the memory cell at the current position is 0, jump just after the corresponding 🤛
 * 🤛 : if the memory cell at the current position is not 0, jump just after the corresponding 🤜
 * 👊 : Display the current character represented by the ASCII code defined by the current position.
 */

const MIN_CELL = 0;
const MAX_CELL = 255;

const clamp = (value) => {
    if (value > MAX_CELL) {
        return MIN_CELL;
    } else if (value < MIN_CELL) {
        return MAX_CELL;
    } else {
        return value;
    }
};

const getNextFistIndex = (index, instructions) => {
    let fists = 1;
    for(let i = index+1; i < instructions.length; i++) {
        if(instructions[i] === '🤜') fists++;
        if(instructions[i] === '🤛') fists--;
        if(fists === 0) return i;
    }
};

const getPrevFistIndex = (index, instructions) => {
    let fists = 1;
    for(let i = index-1; i >= 0; i--) {
        if(instructions[i] === '🤛') fists++;
        if(instructions[i] === '🤜') fists--;
        if(fists === 0) return i;
    }
};

const translate = (str) => {
    const instructions = Array.from(str);
    
    const mem = [0];
    let pointer = 0;
    let index = 0;
    let output = '';

    const actions = {
        '👉': () => {
            pointer++;
            mem[pointer] ??= 0;
        },
        '👈': () => {
            pointer--;
            mem[pointer] ??= 0;
        },
        '👆': () => {
            mem[pointer] = clamp(mem[pointer] + 1);
        },
        '👇': () => {
            mem[pointer] = clamp(mem[pointer] - 1);
        },
        '🤜': () => {
            if(mem[pointer] === 0) {
                index = getNextFistIndex(index, instructions);
            }},
        '🤛': () => {
            if(mem[pointer] !== 0) {
                index = getPrevFistIndex(index, instructions);
            }
        },
        '👊': () => {
            output += String.fromCharCode(mem[pointer]);
        }
    };

    while(index < instructions.length) {
        const action = instructions[index];
        actions[action]();
        index++;
    }


    return output;
};


module.exports = translate;