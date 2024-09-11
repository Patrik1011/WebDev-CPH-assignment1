const itemSelect = document.getElementById('item-select');
const itemList = document.getElementById('item-list');
const itemResponse = document.getElementById('item-response');

let selectedItems = [];

itemSelect.addEventListener('change', function () {
  let selectedItem = itemSelect.value;
  if (selectedItems.indexOf(selectedItem) === -1) {
    selectedItems.push(selectedItem);
    const li = document.createElement('li');
    li.textContent = selectedItem;
    li.setAttribute('data-item', selectedItem);
    itemList.appendChild(li);
    itemResponse.textContent = 'The item has been added, add more items!';
  } else {
    selectedItems.splice(selectedItems.indexOf(selectedItem), 1);
    let itemToRemove = document.querySelector(`[data-item="${selectedItem}"]`);
    if (itemToRemove) {
      itemList.removeChild(itemToRemove);
      itemResponse.textContent =
        'The item has been resolved and removed, the list is updated!';
    }
  }

  itemSelect.selectedIndex = 0;
});
