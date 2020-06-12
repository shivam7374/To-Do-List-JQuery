let ulTasks=$('#ulTasks')
let btnAdd=$('#btnAdd')
let btnClear=$('#btnClear')
let inpNewTask=$('#inpNewTask')

btnAdd.click(()=>{
    let listItem=$('<li>',{
        'class':'list-group-item',
        text:inpNewTask.val()
    })

    listItem.click(()=>{
        listItem.toggleClass('done')
    })

    ulTasks.append(listItem)

    console.log(inpNewTask.val())
    inpNewTask.val('')
})