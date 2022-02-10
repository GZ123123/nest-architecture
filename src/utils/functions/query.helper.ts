export const create = (keys, values) => `(${keys.join(", ")}) VALUES ${values.map(value => value.join(", "))}`;