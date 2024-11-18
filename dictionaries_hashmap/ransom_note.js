function checkMagazine(magazine, note) {
    if (magazine.length < note.length || magazine.length === 0 || note.length === 0) return 'No';
    let noteMap = new Map();
    for (let i = 0; i < note.length; i++) {
        noteMap.set(note[i], (noteMap.get(note[i]) || 0) + 1);
    }
    for (let i = 0; i < magazine.length; i++) {
        if (noteMap.has(magazine[i])) noteMap.set(magazine[i], noteMap.get(magazine[i]) - 1);
    }
    for (let value of noteMap.values()) {
        if (value > 0) return 'No';
    }
    return 'Yes';
}
const magazine = ['ive', 'got', 'a', 'lovely', 'bunch', 'of', 'coconuts'];
const note = ['ive', 'got', 'some', 'coconuts']

console.log('output', checkMagazine(magazine, note));