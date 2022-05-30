# Webster Car Warehouse

### Live site

teleport to [Webster Car Warehouse](https://webster-car-warehouse.web.app)

### Description

This is a warehouse website. It is for cars. It is a type of warehouse where people stock, buy , modify cars. There is also servicing available. This website provides user to store car, reduce car quantity, update any specific car data etc

### Features for this website

- Full website is responsive
- There is update button on inventory items. clicking the button will take user to the `updateinventorydetail/:id` page
- on the `updateinventorydetail/:id` page, clicking the delivery button will decrease the quantity of the inventory item
- on the `updateinventorydetail/:id` page, there is a form to restock/update the quantity of the item.
- on the `manageinventory` page there is all inventory items(cars). Every item has Update, Delete and 'Add To My Car' button
- Update button navigates to `updateinventorydetail/:id` page. Delete button deletes the item(car). Add To My Car takes to `addmycars/:id` page and makes another collection on database for storing myCars with user email.
- My Cars route shows the cars which the user choosed from manage inventory page by clicking 'add to my car btn'

### Technologies

- firebase for authentication
- React js for efficient development
- Bootstrap for boosting development speed
- React Router for routing system
- React firebase hooks for ease of implementing authentication
- React Toast to notify the user
- Axios for https request smoothening
- React Hook Form for better form control

### Hosting

- Image hosted on ImageBB
- Hosted on google powered firebase
