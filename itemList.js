function itemList(userItems) {

  const items = userItems

  const initialPage = () => {
    document.getElementById('app').querySelector('div').querySelector('input').addEventListener('input', filterItemsHandler)
    showItems(items)
  }

  const filterItemsHandler = () => {
      const filterItems = items.filter(item => {
        return item.keywords.toLowerCase().includes(document.getElementById('app').querySelector('div').querySelector('input').value.toLowerCase())
      })
      showItems(filterItems)
  }

  const showItems = (items) => {
    const listOfItem = document.getElementById('items')
    listOfItem.innerHTML = ''
    items.forEach(item => {
      const newLi = document.createElement('li')
      newLi.textContent = `ID:${item.id}, NAME:${item.name}, KEYWORDS:${item.keywords}`
      listOfItem.appendChild(newLi)
    })
  }

  return {
    initialPage,
    filterItemsHandler,
    showItems
  }
}

// export { itemList }
module.exports = itemList

