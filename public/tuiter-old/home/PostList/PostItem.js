export default function PostItem(post) {

    const userName = post.userName;
    const handle = post.handle;
    const time = post.time;
    const content = post.content;
    const linktitle = post.linktitle;
    const linkpreview = post.linkpreview;
    const linkurl = post.linkurl;
    const linkimage = post.linkimage;
    const image = post.image;
    const comments = post.comments;
    const shares = post.shares;
    const hearts = post.hearts;

    var image_content;
    if(linkimage !== ""){
        image_content = `<div class="card">
            <img src="${linkimage}" class="card-img" style="max-height: 300px"/>
        </div>
        <div class="card-bottom m-2">
            <h6 class="text-bold">${linktitle}</h6>
            <p class="text-secondary">${linkpreview}</p>
            <span class="text-secondary">${linkurl}</span>
        </div>`
    }
    else{
        image_content = `<img src="${image}" class="card-img" style="max-height: 300px; border-radius:10px;"/>`
    }



    return(`
            <div class="list-group-item border-0">
            <div class="mb-2">
                <h6>${userName} <span class="text-secondary">${handle} ${time}</span></h6>
                <span>${content}</span>
            </div>
                ${image_content}
                <table class="text-secondary ms-3 mt-2" style="width:100%">
                <thead>
                <tr>
                    <th><span><i class="fa-solid fa-comment"></i> ${comments}</span></th>
                    <th><span><i class="fa-solid fa-rotate"></i> ${shares}</span></th>
                    <th><span><i class="fa-solid fa-heart"></i> ${hearts}</span></th>
                    <th><span><i class="fa-solid fa-share"></i></i></span></th>
                </tr>
                </thead>
            </table>

             </div>
    `);
}