$('.range-slider').jRange({
		from:100,
		to: 1000,
		step: 100,
		scale: [100,5000],
		format: '%s',
		width: '100%',
		showLabels: true,
		isRange : true
		}).jRange('setValue', '100,5000');

