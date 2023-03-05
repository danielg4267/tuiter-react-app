export default function WhoToFollowListItem(who) {

    const avatarIcon = "./../../images/".concat("", who.avatarIcon);
    const userName = who.userName;
    const handle = who.handle;

    return(`
    <div class="row">
        <img class="col-2 rounded-circle" src=${avatarIcon} style="height:48px; width:72px;"/>
        <span class="col-2">
                        <span class="text-nowrap fw-bold">${userName} <i class="fa fa-check-circle"></i></span>
                        <br/>
                        <span class="text-secondary">@${handle}</span>
                    </span>
        <span class="col-4"></span>
        <button class="col-3 mt-2 btn-primary rounded-pill" style="height:20%">Follow</button>
    </div>
   `);
}