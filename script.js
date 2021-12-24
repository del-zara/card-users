const API = 'https://randomuser.me/api/?results=30'


const getUsers = async ()=>{
    const request = await fetch(API)
    const response = await request.json()
    renderUsers(response.results)
    console.log(response.results);
}
const renderUsers=(users)=>{
users.forEach((el)=>{
    let div = document.createElement('div')
    let div2 = document.createElement('div')
    div2.className='div2'
    let picture = document.createElement('img')
    let name = document.createElement('h2')
    let gender = document.createElement('p')
    let dob = document.createElement('p')
    let nat = document.createElement('p')
    let cell = document.createElement('p')
    let phone = document.createElement('p')
    let location = document.createElement('p')
    let email = document.createElement('p')

    
        picture.src= el.picture.large
        name.innerHTML= el.name.title + ' ' + el.name.first +' ' + el.name.last
        nat.innerHTML = el.nat
        dob.innerHTML = el.dob.date
        gender.innerHTML= el.gender
        cell.innerHTML= el.phone+ ' '+ el.cell
        location.innerHTML = el.location.city +', '+ el.location.country+' '+el.location.postcode
        email.innerHTML = el.email
    
    document.body.append(div)
    div.append(picture, div2)
    div2.append( name, nat, dob, gender, cell, phone, location, email)
    
})

}
getUsers()
