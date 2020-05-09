
function test()
{
    let txt1 = document.querySelector('#txt1').value;
    let txt2 = document.querySelector('#txt2').value;   

    let result = 'Compare!';

    if (txt1 != '' || txt2 != ''){
        if (txt1 === txt2){
            result = 'The Same!!'
            }

        if (txt1 != txt2){
            result = 'Different!'
            }   
    }

    document.querySelector('#heading').innerHTML = result;
}

document.querySelector('#submitbtn').onclick = function() {

    let txt1 = document.querySelector('#txt1').value;
    let txt2 = document.querySelector('#txt2').value;

    if (txt1 != '' || txt2 != ''){
        document.querySelector('#submitbtn').innerText = 'Try Again';

        }
    }

