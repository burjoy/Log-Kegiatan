let article = document.querySelector('article');
let button = document.querySelector('button');
let num = 1;
let in_date = document.querySelector('#tanggal');
let in_month = document.querySelector('#bulan');
let in_year = document.querySelector('#tahun');
let form = document.querySelector('form');
let bulan = ['Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni', 'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember']
let submit_kegiatan = document.querySelectorAll("input[type='submit']")
let kegiatan = document.querySelector("input[name='kegiatan']");
let not_done = document.querySelector('#belum_selesai');
let done = document.querySelector("#selesai");
let activity_input = document.querySelector("div#activity_input form");
let jam = document.querySelector("#jam");
let menit = document.querySelector("#menit");
// button.addEventListener('click', (e) => {
//     let list = document.createElement('img');
//     list.innerHTML = 'Test';
//     list.setAttribute('src', 'img/background.jpg');
//     list.width = 240;
//     list.height = 300;

//     let link = document.createElement('a');
//     link.innerText = 'linkie';
//     link.setAttribute('href', 'https://tailwindcss.com/docs/border-width');

//     article.append(list);
//     article.append(link);
//     console.log(e);
// });

document.addEventListener('click', (e) => {
    console.log(e.target.value);
    for(i in bulan){
        if(e.target.value == bulan[i]){
            console.log(i);
        }
    }
    // if (e.target.localName == 'a'){
    //     console.log('konek');
    //     e.preventDefault();
    // }
})

submit_kegiatan[0].addEventListener('click', (e) => {
    e.preventDefault();
    console.log(e);
})

submit_kegiatan[1].addEventListener('click', (e) => {
    e.preventDefault();
    if(kegiatan.value == ''){
        alert('Mohon Masukkan Input terlebih dahulu');
    }
    else{
        let list_kegiatan = document.createElement('p');
        let span1 = document.createElement('span');
        let span2 = document.createElement('span');
        list_kegiatan.innerText = kegiatan.value;
        list_kegiatan.setAttribute('class', 'flex justify-between items-center list-decimal list-decimal hover:cursor-pointer text-lg');
        span1.setAttribute('class', 'fa fa-check ml-auto mr-6 text-green-600 hover:cursor-pointer text-lg');
        span2.setAttribute('class', 'fa fa-times text-red-600');
        list_kegiatan.append(span1);
        list_kegiatan.append(span2);
        not_done.append(list_kegiatan);
        num++;
    }
    console.log(kegiatan.value);
})

window.addEventListener('DOMContentLoaded', () => {
    console.log('cek');
    let datalist = document.createElement('datalist');
    datalist.setAttribute('id', 'date');
    for(let i = 1;i <= 31;i++){
        let option = document.createElement('option');
        option.setAttribute('value', i);
        datalist.append(option);   
    }
    form.append(datalist);
    in_date.after(datalist);

    datalist = document.createElement('datalist');
    datalist.setAttribute('id', 'month');
    for(let i in bulan){
        let option = document.createElement('option');
        option.setAttribute('value', bulan[i]);
        datalist.append(option);   
    }
    form.append(datalist);
    in_month.after(datalist);

    datalist = document.createElement('datalist');
    datalist.setAttribute('id', 'year');
    for(let i = 1900;i <= 9999;i++){
        let option = document.createElement('option');
        option.setAttribute('value', i);
        datalist.append(option);   
    }
    form.append(datalist);
    in_year.after(datalist);

    datalist = document.createElement('datalist');
    datalist.setAttribute('id', 'hour');
    for(let i = 0;i <= 24;i++){
        let option = document.createElement('option');
        option.setAttribute('value', i);
        datalist.append(option);   
    }
    activity_input.append(datalist);
    jam.after(datalist);

    datalist = document.createElement('datalist');
    datalist.setAttribute('id', 'minute');
    for(let i = 0;i <= 24;i++){
        let option = document.createElement('option');
        option.setAttribute('value', i);
        datalist.append(option);   
    }
    activity_input.append(datalist);
    menit.after(datalist);
})

document.addEventListener('click', (e) => {
    // console.log(e.target.classList);
    // console.log(e.target.parentElement);
    console.log(e.target.parentElement.id);
    if (e.target.classList.contains('fa-check') && e.target.parentElement.parentElement.id == "belum_selesai"){
        console.log('check');
        done.append(e.target.parentElement);
        // not_done.remove(e.target);
    }
    if (e.target.classList.contains('fa-times') && e.target.parentElement.parentElement.id == "selesai"){
        console.log('uncheck');
        not_done.append(e.target.parentElement);
        // not_done.remove(e.target);
    }
})

// ini baru testing