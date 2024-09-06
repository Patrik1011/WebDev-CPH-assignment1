var itemSelect = document.getElementById('item-select');
var itemList = document.getElementById('item-list');
var itemResponse = document.getElementById('item-response');

var selectedItems = [];

itemSelect.addEventListener('change', function () {
  var selectedItem = itemSelect.value;
  if (selectedItems.indexOf(selectedItem) === -1) {
    selectedItems.push(selectedItem);
    var li = document.createElement('li');
    li.textContent = selectedItem;
    li.setAttribute('data-item', selectedItem);
    itemList.appendChild(li);
    itemResponse.textContent = 'The item has been added, add more items!';
  } else {
    selectedItems.splice(selectedItems.indexOf(selectedItem), 1);
    var itemToRemove = document.querySelector(`[data-item="${selectedItem}"]`);
    if (itemToRemove) {
      itemList.removeChild(itemToRemove);
      itemResponse.textContent =
        'The item has been resolved and removed, the list is updated!';
    }
  }

  itemSelect.selectedIndex = 0;
});
