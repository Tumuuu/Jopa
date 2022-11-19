let itemMass = [{
        title: 'Хлеб',
        desc: 'Купить в пятерочке'
    },
    {
        title: 'Молоко',
        desc: 'Купить в перекрестке'
    },
    {
        title: 'Морковка',
        desc: 'Купить в ашане'
    },
    {
        title: 'Печенье',
        desc: 'Купить в пятерочке'
    }
]







function render() {
    let mass = JSON.parse(localStorage.getItem('Мои дела'))
    let myApp = document.getElementById('myApp')
    let h1 = document.createElement('h1')
    h1.textContent = "Приложение"
    console.log(mass[1]);
    myApp.append(h1)
    console.log(myApp);

    let ul = document.createElement('ul')
    ul.classList.add('list')
    myApp.append(ul);

    mass.forEach(element => {
        ul.append(createItem(element.title, element.desc))
    });
    let btn = document.createElement('button')
    btn.textContent = 'Добавить дело'
    btn.classList.add('btn')

    let inputTitle = document.createElement('input')
    inputTitle.setAttribute('placeholder', 'Название')


    myApp.append(inputTitle)

    let inputDesc = document.createElement('input')
    inputDesc.setAttribute('placeholder', 'Где купить?')

    myApp.append(inputDesc)


    btn.addEventListener('click', () => {
        let titleText = inputTitle.value
        let descText = inputDesc.value
        if (titleText === '' || descText === '') {
            alert('Введите название и текст')
            return false
        }
        let newMass = mass;
        newMass.push({
            title: titleText,
            desc: descText
        })
        localStorage.setItem('Мои дела', JSON.stringify(newMass))
        myApp.innerHTML = ''
        render()
    })


    myApp.append(btn);



}

function createItem(title, desc) {

    let li = document.createElement('li')
    li.classList.add('item')

    let h2 = document.createElement('h2')
    h2.textContent = title
    h2.classList.add('Zagolovok')
    li.append(h2)

    let p = document.createElement('p')
    p.textContent = desc
    p.classList.add('desc')
    li.append(p)

    let btn = document.createElement('button')
    btn.textContent = 'Удалить блок'
    btn.classList.add('btn')
    btn.addEventListener('click', () => {
        li.remove()
    })
    li.append(btn)
    return li

}
render()