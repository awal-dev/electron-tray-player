const $ = require('jquery')
const mm = require('music-metadata')

function chooseMusic(){
    $('input').click()
}

function musicSelected(){
    let files = $('input').get(0).files
    //console.log(files)

    for(let i = 0; i<files.length; i++){
        let {path} = files[i]
        mm.parseFile(path, {native:true}).then(metadata =>{
            console.log(metadata.common.title, metadata.common.artist, metadata.format.duration)
        })
    }
}