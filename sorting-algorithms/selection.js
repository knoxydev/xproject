((base) => {
	let stopnum = 0;

	for (i = 0; i < base.length; i++) {
		for (x = i; x < base.length; x++) {
			console.log(base[x]);
		}
	}
})([8, 14, 5, 2, 9, 11, 7, 13, 4, 1, 3, 12, 15, 6, 0, 10]);