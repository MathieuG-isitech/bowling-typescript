export function calculateScore(rolls: string): number {
    const rollsArray = rolls.replace(/\s+/g, '').split('');
    const scores = rollsArray.map(roll => {
        if (roll === '-') return 0;
        if (roll === 'X') return 10;
        return parseInt(roll, 10);
    });
    return scores.reduce((sum, score) => sum + score, 0);
}
