import menu from './database.js'



const menuContainer = document.getElementById('menu-container')
const filterButton = document.querySelectorAll('.filter-btn')



document.addEventListener('DOMContentLoaded', () => {
    displayMenu(menu)
})

function displayMenu(menuItems) {

    let dispMenu = menuItems.map((menuItem) => `
    
    <div class="d-flex align-items-center gap-3 flex-column flex-md-row my-2" id="card">

    <img src=${menuItem.image} 
    alt="" 
    id="img" 
    class="rounded shadow">

    <div>
        <div class="d-flex justify-content-between">
            <h5>${menuItem.title}</h5>
            <p> &#36; ${menuItem.price}</p>
        </div>
        <p class="lead"> ${menuItem.description}
        </p>
    </div>

</div>
             
    `)

    dispMenu = dispMenu.join('')
    menuContainer.innerHTML = dispMenu
}

filterButton.forEach((button) => {

    button.addEventListener('click', (e) => {
        const category = e.target.dataset.id
        searchCategory(category)
    })
})

function searchCategory(categoryInfo) {

    const filteredMenu = menu.filter((menuItem) => {
        if (categoryInfo === menuItem.category) return menuItem
    })

    console.log(filteredMenu);

    if (categoryInfo === 'all') {
        displayMenu(menu)
    } else {
        displayMenu(filteredMenu)
    }

}



