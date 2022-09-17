const select = document.getElementById('select');
let header = document.getElementById('header');

const getData = (url) => {
    return fetch(url)
        .then(response => response.json())
}

getData('https://mfs-03.getcourse.ru/public/files/12250/88/84120897322424565eb4cddeea2b910a.json?e=1663401599&s=WpvBquuUZ1xnVJXXG7gWmw')
    .then(data => {
        data.cars.forEach(elems => {
            let block = document.createElement('p');
            let cars = "";
            select.addEventListener('input', () => {
                    if (select.options[select.selectedIndex].value == elems.brand && select.options[select.selectedIndex].value == 'bmw' ||
                    select.options[select.selectedIndex].value == elems.brand && select.options[select.selectedIndex].value == 'volvo') {
                        header.textContent = "";
                        cars = '<p> Тачка: ' + elems.brand + ' ' + elems.model + '<br>' + 'Цена: ' + elems.price + '$' + '</p>';
                        block.innerHTML = cars
                        header.append(block);
                    } else {
                        cars = ""
                        block.innerHTML = cars
                        header.append(block);
                    }
            })
            
        });
    })



