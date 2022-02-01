const first = [1, 2, 3];
const second = [4, 5, 6];

const combined = first.concat(second);
const combined = [...first, 'bet', ...second, 'gimel'];

const first_prop = { name: "Mosh" };
const second_prop = { job: "inructor" };

const combined_props = {...first_prop, ...second_prop, place: "New York"};
