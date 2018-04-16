export var users = [
    {_id: 1, name: 'Pepito Pérez'},
    {_id: 2, name: 'Tomás Martínez'},
    {_id: 3, name: 'Patxi Patxa'},
    {_id: 4, name: 'Aitor Menta'},
    {_id: 5, name: 'Juan Tuzri'},
    {_id: 6, name: 'Lourdes Tornillador'},
    {_id: 7, name: 'Elena Nito'},
    {_id: 8, name: 'Marta García'},
    {_id: 9, name: 'Rosa de Luxenburgo'},
    {_id: 10, name: 'Adolfo Serrano'},
]

export var groups = [
    {_id: 1, name: 'Group 1', detail: 'Hay que hacer muchas cosas', users: [1,3,7], owner: 1, files: [], limit: new Date(2020,11,20), deadline: new Date(2020,11,20), state: 0},
    {_id: 2, name: 'Group 2', detail: 'ya queda menos', users: [2,5,7], owner: 1, files: [], limit: new Date(2021,11,20), deadline: new Date(2021,11,20), state: 0},
    {_id: 3, name: 'Group 3', detail: 'ya queda menos', users: [2,5,7], owner: 1, files: [], limit: new Date(2021,11,20), deadline: new Date(2021,11,20), state: 0},
    {_id: 4, name: 'Group 4', detail: 'ya queda menos', users: [2,5,7], owner: 3, files: [], limit: new Date(2021,11,20), deadline: new Date(2021,11,20), state: 0},
    {_id: 5, name: 'Group 5', detail: 'ya queda menos', users: [2,5,7], owner: 1, files: [], limit: new Date(2021,11,20), deadline: new Date(2021,11,20), state: 0},
    {_id: 6, name: 'Group 6', detail: 'ya queda menos', users: [2,5,7], owner: 4, files: [], limit: new Date(2021,11,20), deadline: new Date(2021,11,20), state: 0},
    {_id: 7, name: 'Group 7', detail: 'ya queda menos', users: [2,5,7], owner: 5, files: [], limit: new Date(2021,11,20), deadline: new Date(2021,11,20), state: 0},
    {_id: 8, name: 'Group 8', detail: 'ya queda menos', users: [2,5,7], owner: 4, files: [], limit: new Date(2021,11,20), deadline: new Date(2021,11,20), state: 0},
]

export var messages = [
    {_id: 1, emiter: 1, group: 1, message: 'Hello World!', timestamp: null},
]