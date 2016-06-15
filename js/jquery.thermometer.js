/* ----------------------------------------------------------------------
* File name:		jquery.thermometer.js
* Description:	A fundraising thermometer without images
* Website:			generic jQuery plugin
* Version:			2.0
* Date:					15-6-2016
* Author:				Ray Hyde - www.rayhyde.nl
---------------------------------------------------------------------- */

$.fn.thermometer = function (options) {

	var $therm = this;
			this.append('<div class="meter"></div>');
	
	var	$goal = $therm.find('.goal'),
			$current = $therm.find('.current'),
			$meter = $therm.find('.meter'),
			goalNum = $goal.text().replace(/\D/g, ''), //strip non-numbers from amount
			currentNum = $current.text().replace(/\D/g, ''), //strip non-numbers from amount
			thermHeight = 225,
			reached = currentNum / goalNum,
			level = thermHeight - (thermHeight * reached);
	
	$current.css({
		'top': level - ($current.height() / 2) + 'px'
	});

	$meter.css({
		'height': thermHeight - level + 'px'
	});

	if (goalNum == currentNum) {
		$meter.css({
			'-webkit-border-radius': '13px 13px 0 0',
			'-moz-border-radius': '13px 13px 0 0',
			'border-radius': '13px 13px 0 0'
		});
	}

}