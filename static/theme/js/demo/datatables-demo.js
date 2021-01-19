// Call the dataTables jQuery plugin
$(document).ready(function() {
    $('#openpairsTable').DataTable({
        ajax: "/static/data/dashboard/sp500.json",
        columns: [
            {
                data: 'dates'
            },
            {
                data: 'prices'
            }]})})


