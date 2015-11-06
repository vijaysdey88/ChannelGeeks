google.load("visualization", "1", {
    packages: ["corechart"]
});
google.setOnLoadCallback(drawChart);

function drawChart() {
    var data = new google.visualization.DataTable();
    data.addColumn('datetime', 'Time');
    data.addColumn('number', 'Success');
    data.addColumn('number', 'Failed');
    // var
    //    var data = google.visualization.arrayToDataTable([
    //      ['Year', 'Sales', 'Expenses'],
    //      ['2013', 1000, 400],
    //      ['2014', 1170, 460],
    //      ['2015', 660, 1120],
    //      ['2016', 1030, 540]
    //    ]);

    data.addRows(
    [
        [new Date(2015, 1, 10, 12, 30), nextInt(), nextInt()],
        [new Date(2015, 1, 10, 12, 35), nextInt(), nextInt()],
        [new Date(2015, 1, 10, 12, 37), nextInt(), nextInt()],
        [new Date(2015, 1, 10, 12, 40), nextInt(), nextInt()],
        [new Date(2015, 1, 10, 12, 43), nextInt(), nextInt()],
        [new Date(2015, 1, 10, 12, 50), nextInt(), nextInt()],
        [new Date(2015, 1, 10, 12, 57), nextInt(), nextInt()],
        [new Date(2015, 1, 10, 12, 59), nextInt(), nextInt()],
        [new Date(2015, 1, 10, 13, 0), nextInt(), nextInt()],
        [new Date(2015, 1, 10, 13, 5), nextInt(), nextInt()],
        [new Date(2015, 1, 10, 13, 10), nextInt(), nextInt()],
        [new Date(2015, 1, 10, 13, 12), nextInt(), nextInt()],
        [new Date(2015, 1, 10, 13, 17), nextInt(), nextInt()],
        [new Date(2015, 1, 10, 13, 20), nextInt(), nextInt()],
        [new Date(2015, 1, 10, 13, 25), 1200, 200],
        [new Date(2015, 1, 10, 13, 25), 600, 500],
        [new Date(2015, 1, 10, 13, 30), 0, 0],
        [new Date(2015, 1, 10, 13, 30), 500, 500]
    ]
    );

    function nextInt(maxValue) {
        return Math.floor(Math.random() * (maxValue || 1000));
    }

    var options = {
        title: 'Ses Stats',
        aggregationTarget: 'series',
        hAxis: {
            title: 'Time',
            titleTextStyle: {
                color: '#333'
            }
        },
        vAxis: {
            minValue: 0
        }
    };

    var chart = new google.visualization.AreaChart(document.getElementById('chart_div'));
    chart.draw(data, options);
}
