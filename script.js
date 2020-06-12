let ulTasks=$('#ulTasks')
let btnAdd=$('#btnAdd')
let btnReset=$('#btnReset')
let btnCleanup=$('#btnCleanup')
let inpNewTask=$('#inpNewTask')

function addItem(){
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
}
inpNewTask.keypress((e)=>{
    if(e.which==13)// 13 is the keywhich value for enter
    {
        addItem()
    }
})
function cleardone()
{
    $('#ulTasks .done').remove()
}
btnAdd.click(()=>{
    addItem()
})
btnReset.click(()=>{
    inpNewTask.val('')
})
btnCleanup.click(()=>{
    cleardone()
})