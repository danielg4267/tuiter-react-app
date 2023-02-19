export default function PostSummaryItem(post) {

    const topic = post.topic;
    const userName = post.userName;
    const time = post.time;
    const title = post.title;
    const image = post.image;

    return(`
            <div class="list-group-item border-0">
                        <span class="row">
                            <span class="col-5 col-md-6 col-xl-6">
                                <h6 class="text-secondary">${topic}</h6>
                                <h6><b>${userName}</b><span
                                    class="text-secondary">  ${time} </span></h6>
                                <p>
                                    <b>${title}</b>
                                    <br/>
                                    <span class="text-secondary">123K Tweets</span>
                                </p>
                            </span>
                            <img src=${image} class="col-3 ms-4 mt-2 float-right"
                                 style="height:96px; width:112px;"/>
                        </span>
                </div>
    `);
}