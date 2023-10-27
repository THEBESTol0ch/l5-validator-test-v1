export default function arraySchema() {
    let requiredLength = null;

    return {
        isValid(data) {
            if (requiredLength !== null) {
                return Array.isArray(data) && data.length === requiredLength;
            }
            return Array.isArray(data);
        },
        length(length) {
            requiredLength = length;
            return this;
        },
    };
}