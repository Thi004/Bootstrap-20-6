let list = [
    {
        name: 'A',
        price: 100,
        img: 'https://www.shutterstock.com/image-vector/cute-corgi-dog-cartoon-vector-600nw-2389744901.jpg'
    },
    {
        name: 'B',
        price: 180,
        img: 'https://gcs.tripi.vn/public-tripi/tripi-feed/img/474492LBs/anh-avatar-cho-cute_042634103.jpg'
    },
    {
        name: 'C',
        price: 110,
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJnnqQW1IU5hEwwh_ZdbSYzzGW2fzRgcU7-w&s'
    },
    {
        name: 'D',
        price: 200,
        img: 'https://images.pexels.com/photos/2607544/pexels-photo-2607544.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
    },
    {
        name: 'E',
        price: 300,
        img: 'https://png.pngtree.com/png-clipart/20231204/original/pngtree-a-miniature-puppy-dog-in-playful-jumping-pose-png-image_13770888.png'
    },
    {
        name: 'F',
        price: 500,
        img: 'https://i.pinimg.com/736x/5a/dd/c3/5addc3b444f42499b357e58673f9740d.jpg'
    },
]
let str = ``;
for (let i = 0; i < list.length; i++) {
    str += `
    <div class="col-xl-4 col-md-6 mt-3" >
                    <div class="card">
                        <img src="${list[i].img}" class="card-img-top" alt="...">
                        <div class="card-body">
                            <h5 class="card-title">${list[i].name}</h5>
                            <h5 class="card-title">${list[i].price}</h5>
                            <a href="#" class="btn btn-primary">Buy</a>
                        </div>
                    </div>
                </div>
    `
}
document.getElementById('show').innerHTML = str;