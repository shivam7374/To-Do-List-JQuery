let ulTasks=$('#ulTasks')
let btnAdd=$('#btnAdd')
let btnReset=$('#btnReset')
let btnCleanup=$('#btnCleanup')
let btnSort=$('#btnSort')
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
    toggleInputBtns()
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
    toggleInputBtns()
}

function sorttasks()
{
    $('#ulTasks .done').appendTo(ulTasks)
}


function toggleInputBtns(valisempty){
    // if(valisempty)
    // {
    //     btnReset.prop('disabled',false)
    //     btnAdd.prop('disabled',false)
    // } 
    // else 
    // {
    //     btnReset.prop('disabled',true)
    //     btnAdd.prop('disabled',true)
    // }
    btnReset.prop('disabled',inpNewTask.val()=='')
    btnAdd.prop('disabled',inpNewTask.val()=='')
    btnSort.prop('disabled',ulTasks.children().length<1)
    btnCleanup.prop('disabled',ulTasks.children().length<1)
}

// inpNewTask.on('input',()=>{
//     toggleInputBtns()
// })

inpNewTask.on('input',toggleInputBtns)

btnAdd.click(()=>{
    addItem()
})
btnReset.click(()=>{
    inpNewTask.val('')
    toggleInputBtns()
})
btnCleanup.click(()=>{
    cleardone()
})
btnSort.click(()=>{
    sorttasks()
})
