const table_size = 15;
const base = {
	5: "apple",
	3: ["John Smith", "Sandra Dee"]
};

function print() { console.log(base); }

function hash_func(x) {
	let res = 0;
	for (i = 0; i < x.length; i++) res += x.charCodeAt(i);
	return res % table_size;
}

function add(x) {
	let x_hash = hash_func(x);

	if (base[x_hash]) {
		if (Array.isArray(base[x_hash])) base[x_hash].push(x);
		else {
			let prev_data = base[x_hash];
			base[x_hash] = [prev_data];
			base[x_hash].push(x);
		}
	} else base[x_hash] = x;
}

function del(x) {
	let x_hash = hash_func(x);

	if (base[x_hash]) {
		if (Array.isArray(base[x_hash])) {
			for (i = 0; i < base[x_hash].length; i++) {
				if (x == base[x_hash][i]) return base[x_hash].splice(i, 1);
			}
		} else delete base[x_hash];
	}
}

add("hellw0");
del("apple");
del("Sandra Dee");
add("earth");
print();
