function loadCurrencies() {
    var from = document.getElementById('from');
    var to = document.getElementById('to');
    var xHttp = new XMLHttpRequest();
    xHttp.onreadystatechange = function() {
        if (xHttp.readyState == 4 && xHttp.status == 200) {
            var obj = JSON.parse(this.responseText);
            var options = '';
            for (key in obj.rates) {
                options = options + '<option>' + key + '</option>';
            }
            from.innerHTML = options;
            to.innerHTML = options;
        }
    }
    xHttp.open('GET', 'http://data.fixer.io/api/latest?access_key=b233797e16f903e8b72bd98a62c88e06&format=1', true);
    xHttp.send();
}

function convertCurrency() {
    var from = document.getElementById('from').value;
    var to = document.getElementById('to').value;
    var amount = document.getElementById('amount').value;
    var result = document.getElementById('result');

    if (from.length > 0 && to.length > 0 && amount.length > 0) {
        var xHttp = new XMLHttpRequest();
        xHttp.onreadystatechange = function() {
            if (xHttp.readyState == 4 && xHttp.status == 200) {
                var obj = JSON.parse(this.responseText);
                var fact = obj.rates[to];
                if (fact != undefined) {
                    var calculate = parseFloat(amount) * parseFloat(fact);
                    result.innerHTML = calculate.toFixed(1);
                }
            }
        }
        xHttp.open('GET', 'http://data.fixer.io/api/latest?access_key=b233797e16f903e8b72bd98a62c88e06&=' + from + '&symbols=' + to, true);
        xHttp.send();
    }
}