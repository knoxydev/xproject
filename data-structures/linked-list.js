const list = {
	head: {
		id: 1,
		data: 'javascript',
		next: {
			id: 2,
			data: 'python',
			next: {
				id: 3,
				data: 'rust',
				next: {
					id: 4,
					data: 'php',
					next: {
						id: 5,
						data: 'c++',
						next: null
					}
				}
			}
		}
	}
};

// ADD DATA IN LINKED LIST
function add(x) {
	if ("data" in list.head) {
		let cur = list.head;

		while (cur.next) { cur = cur.next; }

		cur.next = {
			id: cur.id + 1,
			data: x,
			next: null,
		}

	} else {
		list.head.id = 1;
		list.head.data = x;
		list.head.next = {};
	}
}

// DELETE ELEMENT FROM LINKED LIST
function del(x) {
	let cur = list.head;
	let ifhave = false;

	while (cur.next) {
		if (cur.id == x) { ifhave = true; }
		cur = cur.next;
		if (cur.id == x && cur.next == null) { ifhave = true; }
	}

	if (ifhave == true) {
		function iterator(obj) {
			for (const i in obj) {
				if (typeof obj[i] === "object" && !obj.length)
				{
					if (obj[i].id == x && x == 1) {
						list.head = {
							id: obj[i].next.id,
							data: obj[i].next.data,
							next: obj[i].next.next,
						}
						return;
					}

					if (obj[i].id == x - 1 || (obj[i].id == x - 1 && x - 1 != 0)) {
						obj[i].next = obj[i].next.next;
						return;
					}

					if (obj[i].next == null) return;
					return iterator(obj[i]);
				}
			}
		}
		iterator(list);

		let new_id = 1;
		function change_ID(obj) {
			for (const i in obj) {
				if (typeof obj[i] === "object" && !obj.length) {
					obj[i].id = new_id;
					new_id += 1;
					
					if (obj[i].next == null) return;
					return change_ID(obj[i]);
				}
			}
		}
		change_ID(list);
	}
}

// PRINT LINKED LIST
function print() {
	let cur = list.head;
	while (cur.next) {
		console.log(`\n id: ${cur.id}\n data: ${cur.data}\n next: id = ${cur.next.id} \n\n------`);

		cur = cur.next;

		if (cur.next == null) {
			console.log(`\n id: ${cur.id}\n data: ${cur.data}\n next: null \n\n`);
		}
	}
}

//add(2022);
//add('Google');
//add('GitHub');
del(1);
print();
//console.log(list);
