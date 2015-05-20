
google.load('visualization', '1.0', {'packages':['corechart']});

google.setOnLoadCallback(drawCampaignChart);
google.setOnLoadCallback(drawFailedCampaignsChart);


function drawChart(columns, dataRows, chartTitle, chartDivId, selectAction)
{
	var data = new google.visualization.DataTable();
	data.addColumn('string', columns[0]);
	data.addColumn('number', columns[1]);
	data.addRows(dataRows);

    // Set chart options
    var options = {'title':chartTitle, 'width':600, 'height':400};

    var chart = new google.visualization.PieChart(document.getElementById(chartDivId));

    if (selectAction!=undefined) {
    	function handler() {
    		var selectedItem = chart.getSelection()[0];
    		selectAction(selectedItem, data);
    	}
    	google.visualization.events.addListener(chart, 'select', handler);
    }

    chart.draw(data, options);
}

function drawCampaignChart()
{
	var selectAction = function(selectedItem, data) {
		if (selectedItem) {
			var status = data.getValue(selectedItem.row, 0);
			if (status == 'Failed') {
				document.getElementById("failed_campaign_chart").style.visibility = "visible";
				document.getElementById("campaign_chart").style.visibility = "hidden";
			}
		}
	}
	var columns = ['Status', 'Count'];
	var dataRows = [
			['Active', 120000],
			['Paused', 100000],
			['Failed', 13000]
		];
	drawChart(columns, dataRows, 'Health of Posted Campaign', 'campaign_chart', selectAction);
}

function drawFailedCampaignsChart()
{
	var columns = ['failureReason', 'Count'];

	var dataRows = [
			['Missing Parameters For geo-enabled campaigns', 7205],
			['All campaigns must have inventory groups', 31],
			['Geo Targets not defined', 1955],
			['Call to Ad Server failed for campaign', 6]
		];

	drawChart(columns, dataRows, 'Failed Campaigns Details', 'failed_campaign_chart');
}