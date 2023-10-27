export default function objectSchema() {
    let shape = null;

    return {
        shape(fields) {
            shape = fields;
            return this;
        },
        isValid(data) {
            if (shape === null) {
                return true;
            }

            if (typeof data !== 'object' || data === null) {
                return false;
            }

            const dataKeys = Object.keys(data);
            const shapeKeys = Object.keys(shape);

            if (dataKeys.length !== shapeKeys.length) {
                return false;
            }

            for (const key of shapeKeys) {
                if (!shape[key] || !shape[key].isValid(data[key])) {
                    return false;
                }
            }

            return true;
        },
    };
}