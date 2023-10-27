export default function numberSchema() {
    return {
        isValid(data) {
            return typeof data === 'number' && !isNaN(data);
        },
        even() {
            return {
                isValid(data) {
                    return typeof data === 'number' && !isNaN(data) && data % 2 === 0;
                }
            };
        },
        odd() {
            return {
                isValid(data) {
                    return typeof data === 'number' && !isNaN(data) && data % 2 !== 0;
                }
            };
        },
    };
}