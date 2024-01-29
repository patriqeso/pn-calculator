window.addEventListener('load', function (e) {

    const isNumber = (value) =>  {
        return (typeof value === 'number')
    }

    function error(income, daysPn) {
        document.querySelector('#incomes').classList.add('bg-red-400');
        document.querySelector('#days').classList.add('bg-red-400');
        alert("Zadajte cislne hodnoty!");
    }

    const printResult = (result) => {
        document.querySelector('#result').value = result.toFixed(2);
    }

    const printDvz = (dvz) => {
        document.querySelector('#dvz').value = dvz;
    }

    const resetBtn = (state) => {

        if (state === 'show') {
            document.querySelector('#reset').classList.remove('hidden');
            document.querySelector('#reset').classList.add('block');
        } else {
            document.querySelector('#reset').classList.remove('block');
            document.querySelector('#reset').classList.add('hidden');
        }
    }

    function calculate(income, daysPn) {

        let dvz = income / 365
        dvz = dvz.toFixed(4);

        const lowCoefficient = 0.25;
        const highCoefficient = 0.55;

        printDvz(dvz)

        if (daysPn <= 3) {
            let result = daysPn * (dvz * lowCoefficient);
            printResult(result);
        } else {
            let result = (3 * (dvz * lowCoefficient)) + ((daysPn-3) * (dvz * highCoefficient));
            printResult(result);
        }

        resetBtn('show');
    }

    form.addEventListener('submit', function (e) {
        e.preventDefault();

        let income = document.querySelector('#incomes').value.trim() !== "" ? (Number)(document.querySelector('#incomes').value.trim()) : false;
        let daysPn = document.querySelector('#days').value.trim() !== "" ? (Number)(document.querySelector('#days').value.trim()) : false;


        if (isNumber(income) && isNumber(daysPn)) {
            calculate(income, daysPn);
        } else {
            error()
        }
    });

    document.querySelector('#reset').addEventListener('click', function (incomes, days, result, dvz) {
        document.querySelector('#incomes').value = '';
        document.querySelector('#days').value = '';
        document.querySelector('#dvz').value = '';
        document.querySelector('#result').value = '';
        resetBtn('hide');
    });
});