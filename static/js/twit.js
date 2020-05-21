async function deleteTwit(event, twitId, url) {
    event.preventDefault();

    let response = await fetch(window.location.origin + url, {
        method: 'PATCH',
        headers: getFetchHeader()
    })
    if (response.ok){
        console.log(response)
        if (response.status === 200){
            let json = await response.json()
            console.log(json.data)
            changeTwit(json.data, twitId)
        }
        else {
            changeTwit('', twitId)
        }
    }
}

function changeTwit(twit, twitId) {
    $(`*[data-twitId=${twitId}]`).each(function () {
        $(this).replaceWith(twit)
    })
}

function removeImage() {
    $('#tweet-image-container').remove()
}

// $(function() {
//     $("#id_image").on('change', function() {
//
//         console.log('asd')
//         $('#tweet-image-container').remove()
//         $('#form-fields').after('<div class="border mx-auto container-twit-image hidden" id="tweet-image-container">\n' +
//             '                        <i class="fas fa-times delete-icon transition rounded-circle" onclick="removeImage()"></i>\n' +
//             '                        <img id="tweet-image" class="">\n' +
//             '                    </div>')
//
//         $('#tweet-image')[0].src = URL.createObjectURL(this.files[0])
//     });
// });

function onImageChange() {
    console.log('change')
    $('#tweet-image-container').remove()
    $('#form-fields').after('<div class="border mx-auto container-twit-image hidden" id="tweet-image-container">\n' +
        '                        <i class="fas fa-times delete-icon transition rounded-circle" onclick="removeImage()"></i>\n' +
        '                        <img id="tweet-image">\n' +
        '                    </div>')

    $('#tweet-image')[0].src = URL.createObjectURL($("#id_image")[0].files[0])
}
