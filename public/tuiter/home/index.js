import NavigationSidebar from "./NavigationSidebar/index.js";
import PostList from "./PostList/index.js";
import PostSummaryList from "./PostSummaryList/index.js";
function homeComponent() {
    $('#wd-explore').append(`
       <h2>Home</h2>
  <div class="row mt-2">
   <div class="col-2 col-md-2 col-lg-1 col-xl-2">
   <!-- <h3>NavigationSidebar</h3> -->
    ${NavigationSidebar("home")}
   </div>
   <div class="col-10 col-lg-6 col-xl-6">
    ${PostList()}

   </div>
   <div class="d-none d-sm-none d-md-none d-lg-block col-lg-5 col-xl-4">

    ${PostSummaryList()}
    
    
   </div>
  </div>
   `);
}
$(homeComponent());