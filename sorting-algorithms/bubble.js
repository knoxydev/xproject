const bubble = (base) => {
	for (i = 0; i < base.length; i++) {
		for (x = 0; x < base.length; x++) {
			
			let cur = base[i];
			let next = base[x + 1];

			if (base[i] > base[x + 1]) {
				base[i] = next;
				base[x + 1] = cur;
			} else { continue; }
		}
	}
	base.reverse();

	console.log(base);
}

bubble([8, 14, 5, 2, 9, 11, 7, 13, 4, 1, 3, 12, 15, 6, 0, 10]);