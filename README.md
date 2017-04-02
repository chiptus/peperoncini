Ingredient Calculator
=====================

CRUD app for calculating ingredients needed for an event

Classes / Data structure
-------

- Ingredient
  - Id
  - Name
  - Category
  - Unit
  - Price
- Course
  - Id
  - Description 
  - Ingredients: Array
    - Id
    - Amount
- Menu
  - Id
  - Description
  - Courses: Array
    - Id
    - Amount
- Event
  - Id
  - Name
  - Menus: Array
    - Id
- Category
  - Name
- User
  - Name
  - SocialInfo:
    - SocialId
    - Social Network
    - Social Token

What is the role of a user in the system?
Only as a gate to the app? can't use the app without user?
Can a user see the things he created? or everything in the system?




Operations
-----------

### Ingredient

  - Add
  - Delete
    - When deleted should update all courses using it
  - Edit

### Course

  - Add
    - Should be able to add new ingredients on add or delete
  - Delete
    - When deleted should update all menus using it    
  - Edit

### Menu
  - Add
  - Delete
    - When deleted should update all events using it    
  - Edit

### Event
  - Add
  - Delete
  - Edit

### Category
  - Add
  - Delete
  - Edit

### User
  - Login
  - Logout

