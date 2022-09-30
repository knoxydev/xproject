const base = {
	"january" : 32021,
	"june" : true,
	"names" : ["John", "Max", "Bob", "Smith"],
	"x1918" : {a: "1", b: "2", c: "3"}
};

// ADD FUNC
function add(one, two) {
	if (one in base) return console.log(`${one} - such a key already exists\n`);
	base[one] = two;
}

// DEL FUNC
function del(x) {
	if (x in base) {
		delete base[x];
		console.log(`${x} - deleted !`);
	} else return console.log(`${x} - there is no such key !`);
}

// GET FUNC
function get(x) {
	if (x in base) console.log("Get -", x, base[x]);
	else console.log(`${x} - there is no such key !`);
}

// PRINT FUNC
function print() { console.log(base); }


del("june");
add("june", "exam day");
get("x1918");
print();


