const NavigationSidebar = (active) => {

    var home, explore, notifications, messages, bookmarks, lists, profile, more;
    home = explore = notifications = messages = bookmarks = lists = profile = more = "inactive";

    switch(active){
        case "home":
            home = "active";
            break;
        case "explore":
            explore = "active";
            break;
        case "notifications":
            notifications = "active";
            break;
        case "messages":
            messages = "active";
            break
        case "bookmarks":
            bookmarks = "active"
            break;
        case "lists":
            lists = "active";
            break;
        case "profile":
            profile = "active";
            break;
        case "more":
            more = "active";
            break;
    }

    return(`
   <div class="list-group">
            <a href="../navigation.html" class="list-group-item"><i class="fa fa-try"></i></a>
            <a href="#" class="list-group-item ${home}"><i class="fa fa-home pe-3"></i><span class="d-none d-xl-inline-block">Home</span></a>
            <a href="../explore/index.html" class="list-group-item ${explore}"><i class="fa fa-hashtag pe-3"></i><span class="d-none d-xl-inline-block">Explore</span></a>
            <a href="#" class="list-group-item ${notifications}"><i class="fa fa-bell pe-3"></i><span class="d-none d-xl-inline-block">Notifications</span></a>
            <a href="#" class="list-group-item ${messages}"><i class="fa fa-envelope pe-3"></i><span class="d-none d-xl-inline-block">Messages</span></a>
            <a href="#" class="list-group-item ${bookmarks}"><i class="fa fa-bookmark pe-3"></i><span class="d-none d-xl-inline-block">Bookmarks</span></a>
            <a href="#" class="list-group-item ${lists}"><i class="fa fa-list-ul pe-3"></i><span class="d-none d-xl-inline-block">Lists</span></a>
            <a href="#" class="list-group-item ${profile}"><i class="fa fa-user pe-3"></i><span class="d-none d-xl-inline-block">Profile</span></a>
            <a href="#" class="list-group-item ${more}"><i class="fa fa-minus-circle pe-3"></i><span class="d-none d-xl-inline-block">More</span></a>
            <button class="btn-primary mt-3 rounded-pill">Tuit</button>
        </div>
 `);
}
export default NavigationSidebar;